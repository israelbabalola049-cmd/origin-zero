/* === SECTION 10: ECONOMY ENGINE === */
function applyFinances(fin){
  if(fin.cash!==undefined)G.finances.cash+=fin.cash;
  if(fin.debt!==undefined)G.finances.debt=Math.max(0,G.finances.debt+fin.debt);
  if(fin.annualIncome!==undefined)G.finances.annualIncome=Math.max(0,G.finances.annualIncome+fin.annualIncome);
  if(fin.annualExpenses!==undefined)G.finances.annualExpenses=Math.max(0,G.finances.annualExpenses+fin.annualExpenses);
  recalcNetWorth();
}
function recalcNetWorth(){
  var carVal=G.assets.car?G.assets.car.value:0;
  var propVal=G.assets.properties.reduce((s,p)=>s+(p.value||0),0);
  var watchVal=G.assets.watches.reduce((s,w)=>s+(w.value||0),0);
  var investVal=G.finances.investments.reduce((s,i)=>s+(i.value||0),0);
  G.finances.netWorth=G.finances.cash+carVal+propVal+watchVal+investVal-G.finances.debt;
}

function annualFinance(){
  // --- Living expenses scale with lifestyle ---
  var lifestyleExpense=calcLifestyleExpense();
  G.finances.annualExpenses=lifestyleExpense;

  // --- Tax ---
  var grossIncome=G.finances.annualIncome;
  var taxOwed=calcTax(grossIncome,G.country);
  var netIncome=grossIncome-taxOwed;
  G.finances.taxPaid=(G.finances.taxPaid||0)+taxOwed;

  // --- Cash flow ---
  var cashFlow=netIncome-lifestyleExpense;
  G.finances.cash+=cashFlow;
  G.finances.lifetimeEarnings=(G.finances.lifetimeEarnings||0)+grossIncome;

  // --- Debt interest (compound) ---
  if(G.finances.debt>0){
    var rate=G.flags.bankrupt?0.18:0.06;
    G.finances.debt=Math.round(G.finances.debt*(1+rate));
    // Minimum payment attempt
    var minPayment=Math.min(G.finances.cash,Math.round(G.finances.debt*.05));
    if(minPayment>0){G.finances.cash-=minPayment;G.finances.debt-=minPayment;}
  }

  // --- Asset depreciation ---
  if(G.assets.car)G.assets.car.value=Math.round(G.assets.car.value*.9); // car loses 10%/yr
  G.assets.watches.forEach(w=>{if(!w.luxury)w.value=Math.round(w.value*.95);}); // normal watches lose value

  // --- Investment returns ---
  var economyReturns={booming:.12,stable:.07,recession:-.03,crisis:-.15};
  var ret=economyReturns[G.world.economy]||.06;
  G.finances.investments.forEach(inv=>{
    inv.value=Math.round(inv.value*(1+ret+(Math.random()*.06-.03)));
  });

  // --- Cash stress ---
  if(G.finances.cash<0){
    G.hidden.stress=Math.min(100,G.hidden.stress+15);
    G.stats.happiness=Math.max(0,G.stats.happiness-7);
    if(G.finances.cash<-20000&&!G.flags.bankrupt){
      G.flags.bankrupt=true;
      addLog(G.age,'Filed for bankruptcy.','general');
      toast('Bankruptcy -- serious financial crisis.');
    }
  }

  // --- Financial achievement checks ---
  if(G.finances.netWorth>=1000000&&!G.flags.millionaire){
    G.flags.millionaire=true;
    unlockAchievement('millionaire');
    addLog(G.age,'Net worth crossed $1 million.','career');
    toast('Achievement: Millionaire!');
  }
  if(G.finances.netWorth>=100000000&&!G.flags.centimillionaire){
    G.flags.centimillionaire=true;
    unlockAchievement('empire');
  }

  // --- World economy cycle ---
  G.world._economyYears=(G.world._economyYears||0)+1;
  if(G.world._economyYears>=(G.world._economyLen||5)){
    var states=['stable','stable','stable','booming','recession','stable','crisis'];
    G.world.economy=pick(states);
    G.world._economyYears=0;
    G.world._economyLen=4+rnd(0,4);
    if(G.world.economy==='recession')addLog(G.age,'Recession begins.','world');
    else if(G.world.economy==='crisis'){addLog(G.age,'Financial crisis hits.','world');toast('Economic crisis -- investments at risk.');}
    else if(G.world.economy==='booming')addLog(G.age,'Economic boom.','world');
  }

  recalcNetWorth();
}

function calcLifestyleExpense(){
  var age=G.age;
  if(age<18)return 0; // parents cover
  var bgBase={poor:3000,working:6000,middle:10000,wealthy:20000,elite:50000};
  var base=bgBase[G.background]||8000;
  var careerBoost=G.career.level>0?G.career.level*700:0;
  // Rent by state (moved out + no property)
  var rentMap={lagos:4800,abuja:8400,london:18000,nyc:24000,la:20000,toronto:14000,
    manchester:10000,berlin:12000,nairobi:5400,accra:4200,default:7200};
  var rent=0;
  if(G.flags.moved_out&&G.assets.properties.length===0){
    rent=rentMap[G.state]||rentMap.default;
  }
  var partnerCost=G.npcs.partner&&G.npcs.partner.alive?2500:0;
  var childCost=G.npcs.children.filter(function(c){return c.alive&&c.age<18;}).length*5000;
  // Luxury lifestyle costs
  var luxCost=0;
  if(G.assets.car&&G.assets.car.value>30000)luxCost+=3000;
  if(G.assets.watches&&G.assets.watches.length>1)luxCost+=1000;
  var total=base+careerBoost+rent+partnerCost+childCost+luxCost;
  return Math.max(4000,Math.round(total));
}

/* === SECTION 11: FAME ENGINE === */
function fameLabel(l){return['Unknown','Local','National','Global'][l]||'Unknown';}
function karmaLabel(k){if(k>=80)return'Saintly';if(k>=60)return'Good';if(k>=40)return'Neutral';if(k>=20)return'Questionable';return'Dark';}

function updateFame(){
  if(G.fame.level===0)return;
  // Fame decay without active career events
  if(!G.career.path||G.career.level<3){
    G.fame.popularity=Math.max(0,G.fame.popularity-3);
    if(G.fame.popularity<20&&G.fame.level>0){
      G.fame.level=Math.max(0,G.fame.level-1);
      if(G.fame.level>0)addLog(G.age,'Public profile fading.','general');
    }
  }
  // Scandal system -- active at level 2+
  if(G.fame.level>=2){
    var karmaRisk=(100-G.hidden.karma)/300;
    var baseRisk=.05+karmaRisk;
    if(Math.random()<baseRisk){
      // Scandal fires -- look for past flags that could become material
      var scandalSources=[];
      if(G.flags.convicted)scandalSources.push('Your criminal record surfaces in a headline.');
      if(G.flags.cheated_on_partner)scandalSources.push('Old infidelity stories resurface.');
      if(G.flags.has_addiction)scandalSources.push('Details about past substance use emerge.');
      if(G.flags.teen_crime)scandalSources.push('Youthful mistakes resurface in the press.');
      var scandal=scandalSources.length>0?pick(scandalSources):'A scandal breaks -- the source is murky but the damage is real.';
      G.fame.scandals.push({age:G.age,text:scandal});
      G.fame.publicImage=Math.max(0,G.fame.publicImage-25);
      G.hidden.reputation=Math.max(0,G.hidden.reputation-15);
      G.stats.happiness=Math.max(0,G.stats.happiness-10);
      addLog(G.age,'Scandal hits.','general');
      toast('Scandal -- reputation takes a hit.');
    }
  }
}

/* === SECTION 12: ACHIEVEMENT ENGINE === */
function unlockAchievement(id){
  if(!G.achievements.unlocked.includes(id)){
    G.achievements.unlocked.push(id);
    toast('Achievement: '+id.replace(/_/g,' ').toUpperCase());
  }
}

function checkAchievements(){
  // Career peak
  if(G.career.level>=10)unlockAchievement('the_goat');
  else if(G.career.level>=8)unlockAchievement('career_peak');
  // Wealth
  if(G.finances.netWorth>=1000000)unlockAchievement('millionaire');
  if(G.finances.netWorth>=100000000)unlockAchievement('empire');
  // Family
  if(G.npcs.children.length>=1)unlockAchievement('parent');
  if(G.npcs.children.length>=3)unlockAchievement('big_family');
  // Karma
  if(G.hidden.karma>=90)unlockAchievement('clean_hands');
  if(G.hidden.karma<=10)unlockAchievement('dark_path');
  // Education
  if(G.flags.graduated_university)unlockAchievement('graduate');
  if(G.flags.got_first_class)unlockAchievement('first_class');
  // Recovery
  if(G.flags.recovered_from_addiction)unlockAchievement('iron_will');
  if(G.flags.convicted&&G.hidden.reputation>=70)unlockAchievement('redemption_arc');
  // Survival
  if(G.stats.health<=5&&G.stats.health>0)unlockAchievement('survivor');
  // Fame
  if(G.fame.level>=3)unlockAchievement('global_icon');
  // Migration
  if(G.flags.japa_successful)unlockAchievement('japa_king');
  // Long life
  if(G.age>=80)unlockAchievement('elder');
}

function legacyScore(){
  var s=0;
  s+=Math.min(25,(G.career.peakLevel||G.career.level)*2.5);
  s+=Math.min(20,(((G.npcs.mother ? G.npcs.mother.closeness : 0)||0)+((G.npcs.father ? G.npcs.father.closeness : 0)||0))/10);
  s+=Math.min(20,G.hidden.karma/5);
  if(G.finances.netWorth>1000000)s+=15;else if(G.finances.netWorth>100000)s+=10;else if(G.finances.netWorth>0)s+=5;
  if(G.npcs.children.length>0)s+=10;
  s+=Math.min(10,G.fame.level*3);
  return Math.round(Math.min(100,s));
}

function legacyDescriptor(s){if(s>=85)return'Legendary';if(s>=70)return'Remarkable';if(s>=55)return'Memorable';if(s>=40)return'Ordinary';if(s>=25)return'Troubled';return'Forgotten';}

function buildPlaque(){
  var score=legacyScore();var descriptor=legacyDescriptor(score);
  var born=G.birthYear;var died=G.birthYear+G.age;
  var lines=[];
  var cp=G.career.path&&CAREER_PATHS[G.career.path];
  if(cp&&G.career.peakLevel>=3){
    var benchmark=REAL_PEOPLE_BENCHMARKS[G.career.path];
    var bText=benchmark&&benchmark[G.career.peakLevel]?` Reached the level of: ${benchmark[G.career.peakLevel]}.`:'';
    lines.push(`${cp.ladder[(G.career.peakLevel||1)-1]} in ${cp.label}.${bText}`);
  }
  if(G.npcs.children.length>0)lines.push('Parent to '+G.npcs.children.length+(G.npcs.children.length===1?' child.':' children.'));
  if(G.fame.level===3)lines.push('Known across the world.');
  else if(G.fame.level===2)lines.push('Known across the nation.');
  else if(G.fame.level===1)lines.push('Known in their community.');
  if(G.finances.netWorth>=1000000)lines.push(`Left behind ${money(G.finances.netWorth)} in net worth.`);
  var closings={Saintly:'The world was kinder for having them in it.',Good:'They left things better than they found them.',Neutral:'They lived. They tried. That is enough.',Questionable:'It was complicated. Life usually is.',Dark:'They made their choices. The choices made them.'};
  lines.push(closings[karmaLabel(G.hidden.karma)]||'They were here.');
  return{plaqueText:'Here lies '+G.name+'.\n'+lines.join(' '),score,descriptor,born,died};
}

/* === SECTION 12b: EVENT VARIATION ENGINE === */
// Template variation system — prevents repetitive event wording
var EV_NARRATIVE_VARIANTS = {
  // Career promotion variants
  promo_generic:[
    'The title change came through. You had been expecting it, but it still lands differently when it is real.',
    'You got the promotion. The announcement was brief, the implications were not.',
    'Level up. The role is bigger. So is the expectation.',
    'They finally made it official. You have been doing the job already -- now the title matches.',
    'The promotion arrived by email on a Tuesday. No ceremony. Just a new level of responsibility.',
  ],
  // Investment return variants
  invest_good:[
    'The portfolio performed well this year. Numbers moving in the right direction.',
    'Your investments returned solidly. A good year for money working quietly.',
    'The markets cooperated. Net worth up.',
    'Patient money is rewarded this year.',
  ],
  invest_bad:[
    'The portfolio took a hit. Part of the cycle.',
    'Investment returns were negative this year. You hold the position.',
    'The market pulled back. Your numbers reflect it.',
    'A rough year for the portfolio. You remind yourself it is long-term.',
  ],
  // Health variants
  health_decline:[
    'The body is not as forgiving as it used to be.',
    'Age doing its quiet work.',
    'You notice things take a little longer to recover now.',
    'The energy levels are not what they were.',
  ],
  // Relationship milestone variants
  partner_good_year:[
    'A good year together. Some rough patches, but the foundation is solid.',
    'You and your partner navigated the year well. Better communication than you expected.',
    'The relationship deepened this year. Not dramatically -- quietly.',
  ],
  partner_rough_year:[
    'A harder year for the relationship. Distance crept in from somewhere.',
    'You and your partner struggled this year. The small frictions compounded.',
    'The relationship hit some turbulence. Both of you felt it.',
  ],
  // World economy variants
  boom_personal:[
    'The economic boom created opportunities. You moved to take some of them.',
    'Good times in the wider economy filtered into your world.',
    'Rising tide. Your numbers benefited.',
  ],
  recession_personal:[
    'The recession made things harder. Expenses stayed fixed while opportunity shrank.',
    'Everyone felt the downturn. You were not exempt.',
    'A lean year, shaped by forces outside your control.',
  ],
};

function pickEventVariant(type){
  var pool=EV_NARRATIVE_VARIANTS[type];
  if(!pool||!pool.length)return '';
  return pool[Math.floor(Math.random()*pool.length)];
}

// Vary annual career update message (called from updateCareer in engine.js)
function getCareerYearNarrative(){
  if(!G||!G.career.path)return '';
  var perf=typeof getCareerPerf==='function'?getCareerPerf():50;
  if(perf>70){
    var opts=['An excellent year professionally. Everything aligned.','Top performance this year. Recognition came with it.',
      'You operated at the top of your game this year.','A standout year. The work spoke for itself.'];
    return opts[Math.floor(Math.random()*opts.length)];
  }
  if(perf>45){
    var opts=['A solid year. Steady progress.','Consistent performance. Not spectacular, but real.',
      'You held your ground and moved forward.','Good year. Nothing dramatic, but the direction was right.'];
    return opts[Math.floor(Math.random()*opts.length)];
  }
  var opts=['A difficult year professionally. You got through it.','Below expectations. You know it. Time to adjust.',
    'Struggled this year at work. The performance reflects it.','A year to learn from, not celebrate.'];
  return opts[Math.floor(Math.random()*opts.length)];
}

/* === SECTION 13: SAVE SYSTEM — moved to engine.js === */