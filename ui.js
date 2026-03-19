/* === SECTION 14: RENDER ENGINE === */

// \u2500\u2500 Year log: track all events per age for grouped log \u2500\u2500

/* ════════════════════════════════════════════════════════════════
   TIMELINE LOG — center event area
   ════════════════════════════════════════════════════════════════ */

var _tlFeed = [];   /* in-memory feed for current session */

function addTimelineEntry(dir, text, cat, age){
  var a = age !== undefined ? age : (G ? G.age : 0);
  var entry = {age:a, dir:dir||'neutral', text:text, cat:cat||'general', ts:Date.now()};
  _tlFeed.push(entry);
  if(G)G.lifeLog.push({age:a, title:text, category:cat||'general'});
  renderTimelineEntry(entry);
  var lc=document.getElementById('log-count');
  if(lc&&G)lc.textContent=G.lifeLog.length;
}

function dirIcon(dir){
  if(dir==='up')     return '<span class="tl-dot up">\u2191</span>';
  if(dir==='down')   return '<span class="tl-dot down">\u2193</span>';
  if(dir==='chain')  return '<span class="tl-dot chain">\u25b6</span>';
  return                     '<span class="tl-dot neutral">\u2014</span>';
}

function renderTimelineEntry(entry){
  var feed = document.getElementById('tl-center-feed');
  if(!feed)return;

  /* Find or create year bucket */
  var bucketId = 'tl-bucket-'+entry.age;
  var bucket = document.getElementById(bucketId);
  if(!bucket){
    bucket = document.createElement('div');
    bucket.className = 'tl-year-group';
    bucket.id = bucketId;
    bucket.innerHTML = '<div class="tl-year-label">Age '+entry.age+'</div><div class="tl-entries" id="tl-entries-'+entry.age+'"></div>';
    /* Insert at top */
    var firstChild = feed.firstChild;
    feed.insertBefore(bucket, firstChild);
  }
  var entries = document.getElementById('tl-entries-'+entry.age);
  if(!entries)return;
  var el = document.createElement('div');
  el.className = 'tl-entry';
  el.innerHTML = dirIcon(entry.dir)+'<span class="tl-text '+(entry.dir||'neutral')+'">'+entry.text+'</span>';
  entries.insertBefore(el, entries.firstChild);

  /* Keep only last 5 year-groups visible in center */
  var groups = feed.querySelectorAll('.tl-year-group');
  if(groups.length>5){
    for(var i=5;i<groups.length;i++){
      groups[i].style.display='none';
    }
  }
}

function rebuildTimeline(){
  var feed = document.getElementById('tl-center-feed');
  if(!feed||!G)return;
  feed.innerHTML='';
  /* Rebuild from lifeLog - last 5 ages worth */
  var byAge={};
  G.lifeLog.forEach(function(e){
    if(!byAge[e.age])byAge[e.age]=[];
    byAge[e.age].push(e);
  });
  var ages=Object.keys(byAge).map(Number).sort(function(a,b){return b-a;}).slice(0,5);
  ages.reverse().forEach(function(age){
    var bucket=document.createElement('div');
    bucket.className='tl-year-group';
    bucket.id='tl-bucket-'+age;
    var entries=byAge[age];
    var html='<div class="tl-year-label">Age '+age+'</div><div class="tl-entries" id="tl-entries-'+age+'">';
    entries.slice().reverse().forEach(function(e){
      var dir=e.dir||'neutral';
      html+=dirIcon(dir)+'<span class="tl-text '+dir+'">'+e.title+'</span></div>';
    });
    html+='</div>';
    bucket.innerHTML=html;
    feed.appendChild(bucket);
  });
}

function addLog(age,title,cat){
  /* addLog now just pushes to lifeLog + right panel — timeline uses addTimelineEntry */
  G.lifeLog.push({age:age||G.age,title:title,category:cat||'general'});
  renderLogEntry(age,title,cat);
  var lc=document.getElementById('log-count');
  if(lc)lc.textContent=G.lifeLog.length;
}

function renderLogEntry(age,title,cat){
  var list=document.getElementById('log-list');
  if(!list)return;
  // Find existing group for this age
  var group=list.querySelector(`[data-age="${age}"]`);
  if(!group){
    group=document.createElement('div');
    group.className='le-group';
    group.dataset.age=age;
    group.innerHTML=`<div class="le-age-header" onclick="toggleLogGroup(this)">
      <span class="le-age-num">Age ${age}</span>
      <span class="le-age-count" id="lc-${age}">1 event</span>
      <span style="font-family:var(--fm);font-size:9px;color:var(--muted);margin-left:auto">\u25b6</span>
    </div>
    <div class="le-items" id="li-${age}"></div>`;
    list.insertBefore(group,list.firstChild);
  }
  var items=document.getElementById('li-'+age);
  if(items){
    var item=document.createElement('div');
    item.className=`le-item cat-${cat||'general'}`;
    item.textContent=title;
    items.appendChild(item);
    // Update count
    var count=items.children.length;
    var cc=document.getElementById('lc-'+age);
    if(cc)cc.textContent=count+' event'+(count!==1?'s':'');
  }
}

function toggleLogGroup(el){
  var items=el.nextElementSibling;
  var arr=el.querySelector('span:last-child');
  if(!items)return;
  var open=items.style.display!=='none';
  items.style.display=open?'none':'flex';
  if(arr)arr.style.transform=open?'':'rotate(90deg)';
}

function renderStats(){
  if(!G)return;
  var map={h:'health',ha:'happiness',i:'intelligence',l:'looks'};
  Object.entries(map).forEach(([k,s])=>{
    var v=Math.round(G.stats[s]);
    var vEl=document.getElementById('val-'+k);
    var bEl=document.getElementById('bar-'+k);
    if(vEl)vEl.textContent=v;
    if(bEl)bEl.style.width=v+'%';
    // Mobile strip
    var ms=document.getElementById('mss-'+k);
    var mv=document.getElementById('mss-'+k+'v');
    if(ms)ms.style.width=v+'%';
    if(mv)mv.textContent=v;
  });

  var s=(id,val)=>{var el=document.getElementById(id);if(el)el.textContent=val;};
  s('hud-name',G.name);
  s('hud-age',G.age);
  s('hud-year',G.world.year);
  s('hud-worth',money(G.finances.netWorth));
  s('hud-status',G.career.title||'Unemployed');
  s('ch-name',G.name);
  s('ch-age','Age '+G.age+' \u00b7 '+G.world.year);

  var cc=document.getElementById('ch-country');if(cc)cc.innerHTML='<span>'+(G.stateName||G.country)+', '+G.country+'</span>';
  var ccar=document.getElementById('ch-career');
  if(ccar){
    var cp=G.career.path&&CAREER_PATHS[G.career.path];
    ccar.innerHTML='<span>'+(G.career.title||'Unemployed')+(cp?' ('+cp.label+')':'')+'</span>';
  }
  var cr=document.getElementById('ch-rel');
  if(cr)cr.innerHTML='<span>'+(G.npcs.partner&&G.npcs.partner.alive?'With '+G.npcs.partner.name:(G.flags.married?'Married':'Single'))+'</span>';
  var ce=document.getElementById('ch-edu');
  if(ce)ce.innerHTML='<span>'+eduLabel()+'</span>';

  var mc=document.getElementById('mi-cash');if(mc){mc.textContent=money(G.finances.cash);mc.className='mi-val '+(G.finances.cash>=0?'acc':'neg');}
  var md=document.getElementById('mi-debt');if(md){md.textContent=money(G.finances.debt);md.className='mi-val '+(G.finances.debt>0?'neg':'');}
  var mn=document.getElementById('mi-nw');if(mn){mn.textContent=money(G.finances.netWorth);mn.className='mi-val '+(G.finances.netWorth>=0?'acc':'neg');}
  s('mi-karma',karmaLabel(G.hidden.karma));
  s('w-econ',G.world.economy.charAt(0).toUpperCase()+G.world.economy.slice(1));
  s('w-year',G.world.year);

  // Show/hide school tab
  var ts=document.getElementById('tab-school');
  if(ts)ts.style.display=(G.education.stage&&G.education.stage!=='none'&&G.education.stage!=='graduate')?'':'none';
  // Show/hide jobs tab
  var tj=document.getElementById('tab-jobs');
  if(tj)tj.style.display=(G.age>=16&&!G.career.path&&G.flags.graduated_university)?'':'none';
  var th=document.getElementById('tab-hustle');
  if(th)th.style.display=G.age>=16?'':'none';
}

function eduLabel(){
  var s=G.education.stage;
  if(s==='primary')return 'Primary school';
  if(s==='secondary')return 'Secondary school';
  if(s==='university')return 'Uni yr '+(G.education.currentYear||1);
  if(s==='graduate')return 'Graduate';
  if(G.flags.dropped_out_uni)return 'Dropped out';
  return 'No education';
}

function renderEvent(ev){
  var feed=document.getElementById('tl-center-feed');
  if(!feed)return;
  document.getElementById('idle-state').style.display='none';

  var letters=['A','B','C','D'];
  var choicesHTML=ev.choices.map(function(c,i){
    return '<button class="btn-choice" onclick="makeChoice('+i+')"><span class="choice-letter">'+letters[i]+'</span>'+c.text+'</button>';
  }).join('');

  var card=document.createElement('div');
  card.className='ev-card';
  card.id='main-event-card';
  card.innerHTML=
    '<div class="ev-age-badge"><span class="ev-age-num">'+G.age+'</span><span class="ev-age-lbl">years old</span></div>'+
    '<div class="ev-cat">'+ev.category.toUpperCase()+'</div>'+
    '<div class="ev-title">'+ev.title+'</div>'+
    '<div class="ev-narrative">'+injectMemory(ev.narrative)+'</div>'+
    '<div class="ev-choices" id="choice-btns">'+choicesHTML+'</div>'+
    '<div id="outcome-box" style="display:none"></div>';

  /* Remove any previous event card */
  var old=document.getElementById('main-event-card');
  if(old)old.remove();

  feed.insertBefore(card,feed.firstChild);
  var ea=document.getElementById('event-area');
  if(ea)ea.scrollTop=0;
}

function renderChainEvent(step, chainLabel){
  var feed=document.getElementById('tl-center-feed');
  if(!feed)return;
  document.getElementById('idle-state').style.display='none';

  var letters=['A','B','C','D'];
  var choicesHTML=step.choices.map(function(c,i){
    return '<button class="btn-choice" onclick="makeChainChoice('+i+')"><span class="choice-letter">'+letters[i]+'</span>'+c.text+'</button>';
  }).join('');

  var card=document.createElement('div');
  card.className='ev-card chain-ev';
  card.id='main-event-card';
  card.innerHTML=
    '<div class="ev-age-badge"><span class="ev-age-num">'+G.age+'</span><span class="ev-age-lbl">years old</span></div>'+
    (chainLabel?'<div class="ev-chain-badge">&#9654; '+chainLabel+'</div>':'')+
    (step.chainBadge?'<div class="ev-chain-badge">'+step.chainBadge+'</div>':'')+
    '<div class="ev-cat">'+(step.category||'').toUpperCase()+'</div>'+
    '<div class="ev-title">'+step.title+'</div>'+
    '<div class="ev-narrative">'+step.narrative+'</div>'+
    '<div class="ev-choices" id="choice-btns">'+choicesHTML+'</div>'+
    '<div id="outcome-box" style="display:none"></div>';

  var old=document.getElementById('main-event-card');
  if(old)old.remove();
  feed.insertBefore(card,feed.firstChild);
  var ea=document.getElementById('event-area');
  if(ea)ea.scrollTop=0;
  G._awaiting=true;
  document.getElementById('btn-age').disabled=true;
}

function renderOutcome(outcome){
  var box=document.getElementById('outcome-box');if(!box)return;
  var dir=outcome.dir||'neutral';
  var icon=dir==='up'?'\u2191':dir==='down'?'\u2193':'\u2014';
  box.innerHTML=
    '<div class="ev-result">'+
      '<div class="ev-result-dir '+dir+'">'+icon+' '+
        (dir==='up'?'Positive outcome':dir==='down'?'Negative outcome':'Outcome')+
      '</div>'+
      '<div>'+outcome.narrative+'</div>'+
    '</div>';
  box.style.display='block';
  var cb=document.getElementById('choice-btns');if(cb)cb.style.display='none';
  var ab=document.getElementById('btn-age');if(ab)ab.disabled=false;
  /* Add to timeline */
  addTimelineEntry(dir, outcome.narrative, 'general', G.age);
}

function makeChainChoice(idx){
  if(!G._activeChain)return;
  var chain=getActiveChain();if(!chain)return;
  var step=chain.steps[G._activeChain.step];if(!step||step.type!=='event')return;
  var ch=step.choices[idx];if(!ch)return;

  /* Apply outcome */
  var out=ch.outcome;
  if(out.stats)applyStats(out.stats);
  if(out.hidden)applyHidden(out.hidden);
  if(out.flags)Object.assign(G.flags,out.flags);
  if(out.finances)applyFinances(out.finances);
  if(out.npcEffects&&Array.isArray(out.npcEffects)){
    out.npcEffects.forEach(function(e){
      var n=getNPC(e.npcId);
      if(n){
        if(e.trust!==undefined)n.trust=clamp(n.trust+e.trust,0,100);
        if(e.closeness!==undefined)n.closeness=clamp(n.closeness+e.closeness,0,100);
      }
    });
  }
  /* Special handling */
  if(out.special==='breakup'&&G.npcs.partner){
    G.npcs.exes.push(G.npcs.partner);G.npcs.partner=null;G.flags.in_relationship=false;
  }

  renderOutcome(out);
  addLog(G.age, chain.label+': '+ch.text, 'general');
  advanceChain();

  G._awaiting=false;
  renderStats();save();

  /* Continue chain on next ageUp — don't force-fire next step immediately */
  document.getElementById('btn-age').disabled=false;
}

function renderQuietYear(){
  var qLines=['A quiet year. Just life.','Time moves. The world keeps turning.','An unremarkable year. Sometimes enough.',
    'Nothing dramatic \u2014 just the accumulation of days.','A year spent growing, slowly.','Life continues without incident.'];
  document.getElementById('idle-state').style.display='none';
  addTimelineEntry('neutral', pick(qLines), 'general');
}


function renderDeath(){
  showScreen('death');
  var {plaqueText,score,descriptor,born,died}=buildPlaque();
  var lifespan=died-born;
  var highlights=G.lifeLog.filter(e=>!['general'].includes(e.category)).slice(-7).reverse()
    .map(e=>`<div class="hi-item"><span class="hi-age">Age ${e.age}</span><span class="${'le-item cat-'+e.category}">${e.title}</span></div>`).join('');
  var achPills=G.achievements.unlocked.map(id=>{
    var def=[
      {id:'the_goat',name:'The GOAT',icon:'🐐'},{id:'career_peak',name:'Peak',icon:'\u2b50'},{id:'champion',name:'Champion',icon:'🏆'},
      {id:'platinum',name:'Platinum',icon:'💿'},{id:'empire',name:'Empire',icon:'🏛\ufe0f'},{id:'global_icon',name:'Global Icon',icon:'🌍'},
      {id:'millionaire',name:'Self Made',icon:'💰'},{id:'parent',name:'Parent',icon:'👶'},{id:'clean_hands',name:'Clean Hands',icon:'🕊\ufe0f'},
      {id:'iron_will',name:'Iron Will',icon:'💪'},{id:'survivor',name:'Survivor',icon:'\u2764\ufe0f\u200d🔥'},{id:'graduate',name:'Graduate',icon:'🎓'},
      {id:'japa_king',name:'Japa',icon:'\u2708\ufe0f'},{id:'elder',name:'Elder',icon:'🧓'},{id:'redemption_arc',name:'Redemption',icon:'🔄'},
    ].find(a=>a.id===id);
    return`<div class="ach-p">${def?def.icon+' ':''} ${def?def.name:id}</div>`;
  }).join('');

  document.getElementById('death-inner').innerHTML=`
    <div class="d-eye">In Memoriam</div>
    <div class="d-name">${G.name}</div>
    <div class="d-yr">${born} -- ${died} \u00b7 ${G.country}</div>
    <div class="d-cause">${G._causeOfDeath||'Natural causes'}</div>
    <div class="d-score">
      <div class="d-num">${score}</div>
      <div><div class="d-desc">${descriptor}</div><div class="d-sub">Legacy Score</div></div>
    </div>
    <div class="d-stats">
      <div class="d-stat-box"><div class="d-stat-lbl">Lived</div><div class="d-stat-val" style="color:var(--text)">${lifespan}y</div></div>
      <div class="d-stat-box"><div class="d-stat-lbl">Earned</div><div class="d-stat-val" style="color:var(--cyan)">${money(G.finances.lifetimeEarnings||0)}</div></div>
      <div class="d-stat-box"><div class="d-stat-lbl">Events</div><div class="d-stat-val" style="color:var(--orange)">${G.lifeLog.length}</div></div>
    </div>
    <div class="plaque"><div class="plaque-lbl">Life Plaque</div><div class="plaque-txt">${plaqueText.replace(/\n/g,'<br><br>')}</div></div>
    ${highlights?`<div class="d-hi"><div class="d-hi-lbl">Life Highlights</div>${highlights}</div>`:''}
    ${achPills?`<div class="d-achs">${achPills}</div>`:''}
    <div class="d-div"></div>
    <div class="d-btns">
      <button class="btn btn-p" onclick="newGame()">NEW LIFE</button>
      <button class="btn btn-s" onclick="showScreen('title')">MAIN MENU</button>
    </div>`;
}

// \u2500\u2500 MODAL helpers \u2500\u2500
function showModal(title,html){
  document.getElementById('modal-title').textContent=title;
  document.getElementById('modal-body').innerHTML=html;
  document.getElementById('modal-ov').classList.add('on');
}
function closeModal(e){
  if(!e||e.target===document.getElementById('modal-ov'))
    document.getElementById('modal-ov').classList.remove('on');
}

// \u2500\u2500 STAT ROW helper \u2500\u2500
function SR(name,val,color){
  return`<div class="sr"><div class="sr-hd"><span class="sr-lbl">${name}</span><span class="sr-val" style="color:${color}">${Math.round(val)}</span></div><div class="sr-bar"><div class="sr-fill" style="width:${val}%;background:${color}"></div></div></div>`;
}

// \u2500\u2500 Accordion helper \u2500\u2500
function ACC(id,icon,name,sub,bodyHTML){
  return`<div class="acc"><div class="acc-h" onclick="toggleAcc('acc-${id}',this)">
    <span class="acc-icon">${icon}</span>
    <span class="acc-name">${name}</span>
    <span class="acc-sub">${sub}</span>
    <span class="acc-arr">\u25b6</span>
  </div><div class="acc-body" id="acc-${id}">${bodyHTML}</div></div>`;
}
function toggleAcc(id,hdr){
  var b=document.getElementById(id);if(!b)return;
  var open=b.classList.contains('open');
  b.classList.toggle('open');
  hdr.classList.toggle('open');
}

// \u2500\u2500 Apply action result \u2500\u2500
function applyActionResult(result){
  if(result.stats)applyStats(result.stats);
  if(result.hidden)applyHidden(result.hidden);
  if(result.flags)Object.assign(G.flags,result.flags);
  if(result.finances)applyFinances(result.finances);
  if(result.log)addLog(G.age,result.log,result.logCat||'action');
  renderStats();save();
}

function showActionResult(title,text,stats,hidden,finances){
  var pills=[];
  if(stats)Object.entries(stats).forEach(([k,v])=>{if(v)pills.push(`<span class="pill ${v>0?'pos':'neg'}">${v>0?'+':''}${v} ${k}</span>`);});
  if(hidden)Object.entries(hidden).forEach(([k,v])=>{if(v&&['karma','stress'].includes(k))pills.push(`<span class="pill ${v>0&&k!=='stress'?'pos':'neg'}">${v>0?'+':''}${v} ${k}</span>`);});
  if(finances)Object.entries(finances).forEach(([k,v])=>{if(v&&k==='cash')pills.push(`<span class="pill ${v>0?'pos':'neg'}">${v>0?'+':''}${money(v)} cash</span>`);});
  toast(title+': '+text.slice(0,60)+(text.length>60?'\u2026':''));
  return`<div style="padding:14px 0"><div style="font-size:13px;color:var(--text);line-height:1.65;margin-bottom:10px">${text}</div><div class="pls">${pills.join('')}</div></div>`;
}

// \u2500\u2500 TABS \u2500\u2500
function openTab(el,tab){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');

  if(tab==='stats') openStatsModal();
  else if(tab==='people') openPeopleModal();
  else if(tab==='school') openSchoolModal();
  else if(tab==='career') openCareerModal();
  else if(tab==='assets') openAssetsModal();
  else if(tab==='hustle') openHustleModal();
  else if(tab==='self') openSelfModal();
  else if(tab==='socials') openSocialsModal();
  else if(tab==='hustle') openHustleModal();
  else if(tab==='actions') openActionsModal();
  else if(tab==='hustle')  openHustleModal();
  else if(tab==='jobs') openJobsModal();
  else if(tab==='log') openLogModal();
}

// \u2500\u2500 STATS TAB \u2500\u2500
function openStatsModal(){
  showModal('Vitals',
    SR('Health',G.stats.health,'var(--danger)')+
    SR('Happiness',G.stats.happiness,'var(--gold)')+
    SR('Intelligence',G.stats.intelligence,'var(--cyan)')+
    SR('Looks',G.stats.looks,'var(--orange)')+
    `<div style="border-top:1px solid var(--border);padding-top:13px;margin-top:6px">
      <div class="pl-lbl" style="margin-bottom:10px">Hidden Attributes</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div><div class="pl-lbl">KARMA</div><div style="color:var(--text);font-size:13px;margin-top:2px">${karmaLabel(G.hidden.karma)} (${Math.round(G.hidden.karma)})</div></div>
        <div><div class="pl-lbl">STRESS</div><div style="color:var(--text);font-size:13px;margin-top:2px">${Math.round(G.hidden.stress)}/100</div></div>
        <div><div class="pl-lbl">REPUTATION</div><div style="color:var(--text);font-size:13px;margin-top:2px">${Math.round(G.hidden.reputation)}/100</div></div>
        <div><div class="pl-lbl">LUCK</div><div style="color:var(--text);font-size:13px;margin-top:2px">${Math.round(G.hidden.luck)}/100</div></div>
      </div>
    </div>`
  );
}

// \u2500\u2500 PEOPLE TAB \u2500\u2500
function openPeopleModal(){
  var emo={mother:'👩',father:'👨',friend:'🧑',partner:'\u2764\ufe0f',child:'👶',sibling:'👫',rival:'😤',mentor:'🧑\u200d🏫'};

  // Relationship status section
  var relSection='';
  if(!G.flags.married&&!G.npcs.partner){
    relSection=`<div style="margin-bottom:16px;padding:13px;background:var(--s2);border:1px solid var(--border);border-radius:6px">
      <div class="pl-lbl" style="margin-bottom:8px">Romance</div>
      <div style="font-size:13px;color:var(--dim);margin-bottom:10px">Single. ${G.age>=16?'Ready to meet someone?':''}</div>
      ${G.age>=16?`<div style="display:flex;gap:7px;flex-wrap:wrap">
        <button class="btn btn-sm btn-p" onclick="openDatingModal()">💘 Date</button>
        <button class="btn btn-sm btn-s" onclick="hookUpAction()">🔥 Hook Up</button>
        ${G.flags.lgbtq_realised?`<button class="btn btn-sm btn-s" onclick="openLGBTQDating()">🏳\ufe0f\u200d🌈 LGBTQ+ Date</button>`:''}
      </div>`:''}
    </div>`;
  } else if(G.npcs.partner&&G.npcs.partner.alive){
    var p=G.npcs.partner;
    var canPropose=!G.flags.engaged&&!G.flags.married&&G.age>=18&&p.closeness>=55&&p.trust>=50;
    var canMarry=G.flags.engaged&&!G.flags.married;
    relSection=`<div style="margin-bottom:16px;padding:13px;background:var(--s2);border:1px solid var(--border);border-radius:6px">
      <div class="pl-lbl" style="margin-bottom:6px">Relationship with ${p.name}</div>
      ${SR('Trust',p.trust||0,'var(--orange)')}${SR('Closeness',p.closeness||0,'var(--cyan)')}
      <div style="font-size:12px;color:var(--muted);margin-bottom:10px">${G.flags.married?'Married':'In a relationship'} \u00b7 ${p.relationship==='partner'?'Partner':p.relationship}</div>
      <div style="display:flex;gap:7px;flex-wrap:wrap">
        <button class="btn btn-sm btn-s" onclick="dateParter()">🌹 Date Night</button>
        <button class="btn btn-sm btn-s" onclick="spendTimePartner()">🤝 Quality Time</button>
        <button class="btn btn-sm btn-s" onclick="makeLoveAction()">💑 Make Love</button>
        ${(G.flags.married||G.flags.in_relationship)&&!G.flags._pregnant?`<button class="btn btn-sm btn-s" style="color:var(--cyan);border-color:var(--cyan)" onclick="tryForBabyAction()">🍼 Try for a Baby</button>`:''}
        ${G.flags._pregnant?`<button class="btn btn-sm btn-s" style="color:var(--gold);border-color:var(--gold);pointer-events:none">🤰 Expecting (${9-(G.flags._pregnancyMonthsLeft||0)} of 9 months)</button>`:''}
        ${canPropose?`<button class="btn btn-sm btn-p" onclick="proposeAction()">&#x1F48D; Propose</button>`:''} 
        ${canMarry?`<button class="btn btn-sm btn-p" onclick="openMarriageModal()">&#x1F492; Get Married</button>`:''} 
        <button class="btn btn-sm btn-s" style="color:var(--danger);border-color:var(--danger)" onclick="breakUpAction()">💔 Break Up</button>
      </div>
    </div>`;
  }

  // NPCs
  var allNPCs=[G.npcs.mother,G.npcs.father,...G.npcs.friends,...(G.npcs.children||[])];
  if(G.npcs.mentor)allNPCs.push(G.npcs.mentor);

  var accs=allNPCs.filter(Boolean).map(n=>{
    var trust=n.trust||0,close=n.closeness||0;
    var statusLine=n.alive?`Age ${n.age} \u00b7 ${n.relationship}`:`Deceased at ${n.deathAge}`;
    var barHTML=n.alive?SR('Trust',trust,'var(--orange)')+SR('Closeness',close,'var(--cyan)'):'<span style="color:var(--muted);font-size:12px">Passed away</span>';
    var btns=n.alive?`<div class="acc-actions">
      <button class="btn btn-sm btn-s" onclick="callPerson('${n.id}')">📞 Call</button>
      <button class="btn btn-sm btn-s" onclick="spendTimePerson('${n.id}')">🤝 Hang Out</button>
      ${n.relationship==='friend'?`<button class="btn btn-sm btn-s" onclick="giftPerson('${n.id}')">🎁 Gift</button>`:''}
    </div>`:'';
    return ACC(n.id,emo[n.relationship]||'🧑',n.name,statusLine,barHTML+btns);
  }).join('');

  showModal('People', relSection+(accs||'<p style="color:var(--muted);font-style:italic">No one yet.</p>'));
}

// Dating actions
function openDatingModal(){
  showModal('Meet Someone',`
    <div style="display:flex;flex-direction:column;gap:10px">
      <button class="btn btn-s" onclick="startDate('app')">📱 Dating App</button>
      <button class="btn btn-s" onclick="startDate('social')">🎉 Meet at Party/Event</button>
      <button class="btn btn-s" onclick="startDate('mutual')">👥 Through a Mutual Friend</button>
      <button class="btn btn-s" onclick="startDate('work')">💼 Someone at Work/School</button>
    </div>`);
}
function openLGBTQDating(){
  showModal('LGBTQ+ Dating',`
    <div style="display:flex;flex-direction:column;gap:10px">
      <button class="btn btn-s" onclick="startDate('lgbtq_app')">🏳\ufe0f\u200d🌈 Queer Dating App</button>
      <button class="btn btn-s" onclick="startDate('lgbtq_event')">🎊 Pride Event</button>
      <button class="btn btn-s" onclick="startDate('lgbtq_community')">🤝 Community Space</button>
    </div>`);
}
function startDate(method){
  closeModal();
  if(G.npcs.partner&&G.npcs.partner.alive){toast('Already in a relationship.');return;}
  var success=Math.random()<(0.4+(G.stats.looks/200)+(G.stats.happiness/300));
  if(success){
    var newP=makeFriend(G.age);newP.relationship='partner';
    G.npcs.partner=newP;G.flags.in_relationship=true;
    addLog(G.age,'Started dating '+newP.name+'.','romance');
    applyStats({happiness:rnd(8,16)});
    renderStats();save();
    toast('You met '+newP.name+'. Something clicked.');
  } else {
    applyStats({happiness:-3});renderStats();
    toast('No spark this time. Keep trying.');
  }
}
function hookUpAction(){
  closeModal();
  var success=Math.random()<0.55;
  if(success){applyStats({happiness:rnd(5,12)});applyHidden({stress:-rnd(5,10)});addLog(G.age,'Had a hook-up.','romance');renderStats();save();toast('A good night. No strings.');}
  else{applyStats({happiness:-4});toast('Nothing came of it.');}
}
function dateParter(){
  closeModal();
  if(!G.npcs.partner||!G.npcs.partner.alive){toast('No partner.');return;}
  G.npcs.partner.closeness=Math.min(100,(G.npcs.partner.closeness||0)+rnd(5,12));
  G.npcs.partner.trust=Math.min(100,(G.npcs.partner.trust||0)+rnd(3,7));
  var cost=rnd(40,150);G.finances.cash-=cost;
  applyStats({happiness:rnd(8,16)});applyHidden({stress:-rnd(5,10)});
  addLog(G.age,'Date night with '+G.npcs.partner.name+'.','romance');
  recalcNetWorth();renderStats();save();
  toast('A great evening with '+G.npcs.partner.name+'.');
}
function spendTimePartner(){
  closeModal();
  if(!G.npcs.partner||!G.npcs.partner.alive)return;
  G.npcs.partner.closeness=Math.min(100,(G.npcs.partner.closeness||0)+rnd(4,9));
  applyStats({happiness:rnd(5,12)});applyHidden({stress:-5});
  addLog(G.age,'Quality time with '+G.npcs.partner.name+'.','romance');
  renderStats();save();toast('Time well spent.');
}
function proposeAction(){
  closeModal();
  if(!G.npcs.partner||!G.npcs.partner.alive)return;
  var p=G.npcs.partner;
  if((p.closeness||0)>=70&&(p.trust||0)>=65){
    G.flags.engaged=true;
    p.closeness=Math.min(100,(p.closeness||0)+20);
    p.trust=Math.min(100,(p.trust||0)+15);
    addLog(G.age,'Got engaged to '+p.name+'.','romance');
    applyStats({happiness:22});applyHidden({karma:8,stress:8});
    renderStats();save();toast(p.name+' said YES! 💍');
  } else {
    applyStats({happiness:-8});
    toast('Not quite the right moment. Give it more time.');
  }
}
function openMarriageModal(){
  var p=G.npcs.partner;
  var theirSurname=p?p.name.split(' ').pop():'';
  showModal('Wedding',
    '<div style="font-size:13px;color:var(--dim);margin-bottom:16px;font-style:italic">This is the beginning of something real. A few decisions to make first.</div>'+
    '<div class="pl-lbl" style="margin-bottom:8px">Name</div>'+
    '<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px">'+
    '<button class="btn btn-s" onclick="getMarried(false,false)">Keep your name</button>'+
    (theirSurname?'<button class="btn btn-s" onclick="getMarried(false,&apos;take&apos;)">Take their surname ('+theirSurname+')</button>':'')+
    (theirSurname?'<button class="btn btn-s" onclick="getMarried(false,&apos;combine&apos;)">Hyphenate ('+(G.lastName||G.name.split(' ').pop())+'-'+theirSurname+')</button>':'')+
    '</div>'+
    '<div class="pl-lbl" style="margin-bottom:8px">Prenuptial Agreement</div>'+
    '<div style="display:flex;flex-direction:column;gap:8px">'+
    '<button class="btn btn-p" onclick="getMarried(false,false)">&#x1F492; Simple Wedding (no prenup)</button>'+
    '<button class="btn btn-s" style="color:var(--gold);border-color:var(--gold)" onclick="openPrenupModal()">&#x270D;&#xFE0F; Sign a Prenup First</button>'+
    '</div>'
  );
}

function openPrenupModal(){
  closeModal();
  showModal('&#x270D;&#xFE0F; Prenuptial Agreement',
    '<div style="font-size:13px;color:var(--dim);font-style:italic;line-height:1.75;margin-bottom:16px">'+
    'A prenup protects both of you. On divorce, only wealth GAINED during the marriage is split. You choose the percentage your partner receives.</div>'+
    '<div class="pl-lbl" style="margin-bottom:8px">If we divorce, my partner receives:</div>'+
    '<div style="display:flex;flex-direction:column;gap:8px">'+
    '<button class="btn btn-s" onclick="getMarried(true,false,20)">20% of shared growth</button>'+
    '<button class="btn btn-s" onclick="getMarried(true,false,30)">30% of shared growth <span style="color:var(--muted);font-size:10px;font-family:var(--fm)">(Standard)</span></button>'+
    '<button class="btn btn-s" onclick="getMarried(true,false,40)">40% of shared growth</button>'+
    '</div>'
  );
}
function getMarried(prenup,nameChoice,splitPct){
  closeModal();
  if(!G.npcs.partner||!G.npcs.partner.alive)return;
  var p=G.npcs.partner;
  G.flags.married=true;G.flags.engaged=false;
  if(nameChoice==='take'){
    G.lastName=p.name.split(' ').pop();
    G.name=G.firstName+' '+G.lastName;
    G._familyName=G.lastName;
  } else if(nameChoice==='combine'){
    G.lastName=G.name.split(' ').slice(1).join(' ')+'-'+p.name.split(' ').pop();
    G.name=G.firstName+' '+G.lastName;
    G._familyName=G.lastName;
  }

  if(prenup){
    // Prenup: record each party's net worth at time of marriage
    G.flags.prenup=true;
    G.flags._prenupPlayerNW=G.finances.netWorth;
    G.flags._prenupPartnerNW=p._netWorth||0;
    // Agreed split: 30% of SHARED growth goes to partner on divorce
    G.flags._prenupSplitPct=splitPct||30;
    // Shared net worth = combined, tracked from marriage date
    G.finances._marriageNW=G.finances.netWorth;
  } else {
    // No prenup: 50/50 split on divorce
    G.flags._noPrenupSplitPct=50;
    G.finances._marriageNW=G.finances.netWorth;
  }

  p.closeness=Math.min(100,(p.closeness||0)+25);
  p.trust=Math.min(100,(p.trust||0)+20);
  addLog(G.age,'Married '+p.name+(prenup?' (prenup signed)':'')+(nameChoice?' (name changed)':'')+'.',  'romance');
  applyStats({happiness:22});applyHidden({karma:8,stress:12});
  renderStats();save();toast('You\'re married! &#x1F389;');
}
function breakUpAction(){
  closeModal();
  if(!G.npcs.partner||!G.npcs.partner.alive)return;
  if(G.flags.married){
    openDivorceModal();
    return;
  }
  var name=G.npcs.partner.name;
  if(!G.npcs.exes)G.npcs.exes=[];
  G.npcs.exes.push(G.npcs.partner);
  G.npcs.partner=null;G.flags.in_relationship=false;
  addLog(G.age,'Broke up with '+name+'.','romance');
  applyStats({happiness:-14});applyHidden({stress:15});
  renderStats();save();toast('Ended things with '+name+'.');
}

function openDivorceModal(){
  var p=G.npcs.partner;
  var settlePct=G.flags.prenup?G.flags._prenupSplitPct:G.flags._noPrenupSplitPct||50;
  var growthSinceMarriage=Math.max(0,G.finances.netWorth-(G.finances._marriageNW||G.finances.netWorth));
  var settlement=Math.round(growthSinceMarriage*(settlePct/100));
  var settlementStr=money(settlement);
  showModal('&#x1F494; Divorce Settlement',
    '<div style="font-size:13px;color:var(--dim);font-style:italic;line-height:1.75;margin-bottom:16px">'+
    'Ending things with '+p.name+'. '+(G.flags.prenup?'You signed a prenup.':'No prenup was signed.')+
    '</div>'+
    '<div style="background:var(--s2);border:1px solid var(--border);border-radius:6px;padding:12px;margin-bottom:16px">'+
    '<div style="font-family:var(--fm);font-size:10px;color:var(--muted);margin-bottom:6px">SETTLEMENT</div>'+
    '<div style="font-size:18px;color:var(--danger);font-family:var(--fd)">-'+settlementStr+'</div>'+
    '<div style="font-family:var(--fm);font-size:10px;color:var(--muted);margin-top:4px">'+
      settlePct+'% of wealth gained during marriage ('+money(growthSinceMarriage)+' growth)</div>'+
    '</div>'+
    '<div style="display:flex;flex-direction:column;gap:8px">'+
    '<button class="btn btn-s" style="color:var(--danger);border-color:var(--danger)" onclick="confirmDivorce()">Confirm Divorce</button>'+
    '<button class="btn btn-s" onclick="closeModal()">Reconsider</button>'+
    '</div>'
  );
}

function confirmDivorce(){
  closeModal();
  var p=G.npcs.partner;
  if(!p)return;
  var settlePct=G.flags.prenup?G.flags._prenupSplitPct:G.flags._noPrenupSplitPct||50;
  var growthSinceMarriage=Math.max(0,G.finances.netWorth-(G.finances._marriageNW||G.finances.netWorth));
  var settlement=Math.round(growthSinceMarriage*(settlePct/100));
  // Pay settlement
  if(settlement>0){
    G.finances.cash=Math.max(-settlement*0.5, G.finances.cash-settlement);
    recalcNetWorth();
  }
  var name=p.name;
  if(!G.npcs.exes)G.npcs.exes=[];
  G.npcs.exes.push(p);
  G.npcs.partner=null;
  G.flags.in_relationship=false;
  G.flags.divorced=true;
  G.flags.married=false;
  G.flags.prenup=false;
  delete G.finances._marriageNW;
  delete G.flags._prenupPlayerNW;
  delete G.flags._prenupPartnerNW;
  addLog(G.age,'Divorced '+name+(settlement>0?'. Settlement paid: '+money(settlement)+'.':'.'  ),'romance');
  addTimelineEntry('down','Divorce finalised. The paperwork makes it official in a way that the arguments never quite did.','romance');
  applyStats({happiness:-20});applyHidden({stress:25,karma:-2});
  renderStats();save();
  toast('Divorced. -'+money(settlement)+' settlement.');
}

/* ── MAKE LOVE & PREGNANCY SYSTEM ──────────────────────────────────────── */
function makeLoveAction(){
  closeModal();
  if(!G.npcs.partner||!G.npcs.partner.alive){toast('No partner.');return;}
  var p=G.npcs.partner;
  // Boost relationship
  p.closeness=Math.min(100,(p.closeness||0)+rnd(4,10));
  p.trust=Math.min(100,(p.trust||0)+rnd(2,6));
  applyStats({happiness:rnd(8,16)});applyHidden({stress:-rnd(5,12)});
  addLog(G.age,'Intimate time with '+p.name+'.','romance');
  // Small unplanned pregnancy chance if not trying (5% if no contraception flag)
  if(!G.flags._pregnant&&!G.flags.using_contraception&&G.age>=16&&G.age<=45){
    if(Math.random()<0.05){
      startPregnancy('unplanned');
      return;
    }
  }
  renderStats();save();
  toast('A close, tender moment with '+p.name+'.');
}

function tryForBabyAction(){
  closeModal();
  if(!G.npcs.partner||!G.npcs.partner.alive){toast('No partner.');return;}
  if(G.flags._pregnant){toast('Already expecting!');return;}
  if(G.age<18){toast('Too young to start a family.');return;}
  if(G.age>50){toast('The timing has probably passed.');return;}
  // Success chance based on age and health
  var baseChance = G.age<=30?0.65:G.age<=38?0.45:G.age<=44?0.25:0.10;
  var healthBoost = (G.stats.health-50)/200;
  var chance = Math.min(0.90, baseChance+healthBoost);
  if(Math.random()<chance){
    startPregnancy('planned');
  } else {
    applyStats({happiness:-rnd(3,8)});applyHidden({stress:rnd(8,15)});
    addLog(G.age,'Trying for a baby -- not this time.','family');
    addTimelineEntry('neutral','You tried. It did not happen this month. You carry on.','family');
    renderStats();save();
    toast('Not this time. Keep trying.');
  }
}

function startPregnancy(type){
  G.flags._pregnant=true;
  G.flags._pregnancyType=type;       // 'planned' or 'unplanned'
  G.flags._pregnancyMonthsLeft=9;    // counts down each age-up (1 age-up = ~1 year, we resolve at 9)
  G.flags._pregnancyStartAge=G.age;
  var p=G.npcs.partner;
  if(type==='unplanned'){
    addTimelineEntry('up','A pregnancy test came back positive. Unexpected. The world feels suddenly very different.','family');
    showModal('Unexpected News',
      '<div style="font-size:13px;color:var(--dim);font-style:italic;line-height:1.75;margin-bottom:18px">'+
      'You weren\'t planning this. The test is positive. '+(p?'You tell '+p.name+'. A long silence, then: "Okay. We figure it out."':'The reality sinks in slowly.')+'</div>'+
      '<div style="display:flex;flex-direction:column;gap:8px">'+
      '<button class="btn btn-p" onclick="closeModal();renderStats();">&#x1F476; Keep the baby</button>'+
      '</div>'
    );
  } else {
    addTimelineEntry('up','The test is positive. Planned, hoped for, and now real.'+(p?' You and '+p.name+' look at each other for a long moment. Then you both smile.':' You sit with the news. Everything is about to change.'),'family');
    toast('You\'re expecting! &#x1F476; Due in 9 months.');
  }
  if(p){p.closeness=Math.min(100,(p.closeness||0)+15);p.trust=Math.min(100,(p.trust||0)+10);}
  applyStats({happiness:type==='planned'?rnd(15,25):rnd(5,15)});
  applyHidden({stress:rnd(10,20),karma:5});
  addLog(G.age,(type==='planned'?'Expecting a baby.':'Unexpected pregnancy.'),'family');
  renderStats();save();
}

function advancePregnancy(){
  // Called from ageUp every year. Pregnancy resolves after ~1 age-up.
  if(!G.flags._pregnant) return;
  // We resolve after 1 full age-up (representing ~9-12 months)
  G.flags._pregnancyMonthsLeft=(G.flags._pregnancyMonthsLeft||9)-9;
  if(G.flags._pregnancyMonthsLeft<=0){
    resolvePregnancy();
  }
}

function resolvePregnancy(){
  G.flags._pregnant=false;
  delete G.flags._pregnancyMonthsLeft;
  delete G.flags._pregnancyType;
  var p=G.npcs.partner;
  // Create the baby
  var baby=makeChild();
  // Surname: player chooses — prompt shown via modal
  // Store temporarily, naming modal fires after
  G.npcs.children.push(baby);
  G.flags.has_children=true;
  addLog(G.age,'Baby born.','family');
  addTimelineEntry('up','A new life arrives. Everything else stops mattering for a moment.','family');
  applyStats({happiness:rnd(18,28),health:-rnd(5,10)});
  applyHidden({stress:rnd(15,25),karma:10});
  // Show baby surname choice THEN naming modal
  showBabySurnameModal(baby);
  renderStats();save();
}

function showBabySurnameModal(baby){
  var playerSurname=G.lastName||G._familyName||G.name.split(' ').slice(1).join(' ')||'';
  var partnerSurname='';
  if(G.npcs.partner&&G.npcs.partner.alive){
    var pn=G.npcs.partner.name.split(' ');
    partnerSurname=pn.length>1?pn[pn.length-1]:'';
  }
  var combined=playerSurname&&partnerSurname?playerSurname+'-'+partnerSurname:'';
  // Use window globals to pass data - avoids all onclick string-escaping issues
  window._babySurnameChoices=[playerSurname,partnerSurname,combined].filter(Boolean);
  window._babySurnameId=baby.id;
  if(!window._babySurnameChoices.length){
    setBabySurname(baby.id,'');return;
  }
  var icons=['&#x1F464;','&#x2764;&#xFE0F;','&#x1F46A;'];
  var descs=['(Your surname)','(Partner\'s surname)','(Combined)'];
  var opts=window._babySurnameChoices.map(function(sn,i){
    return '<button class="btn btn-s" style="text-align:left;margin-bottom:8px" onclick="pickBabySurname('+i+')">'+(icons[i]||'')+' '+sn+' <span style="color:var(--muted);font-size:10px;font-family:var(--fm)">'+descs[i]+'</span></button>';
  }).join('');
  showModal('&#x1F476; Your Baby\'s Surname',
    '<div style="font-size:13px;color:var(--dim);font-style:italic;line-height:1.75;margin-bottom:16px">Which surname will they carry?</div>'+
    '<div style="display:flex;flex-direction:column">'+opts+'</div>');
}
function pickBabySurname(idx){
  var surname=window._babySurnameChoices&&window._babySurnameChoices[idx]||'';
  var id=window._babySurnameId||'';
  window._babySurnameChoices=null;window._babySurnameId=null;
  setBabySurname(id,surname);
}

function setBabySurname(babyId, surname){
  closeModal();
  var baby=G.npcs.children.find(function(c){return c.id===babyId;});
  if(!baby){renderStats();return;}
  baby.lastName=surname;
  baby.name=(baby.firstName||'Baby')+(surname?' '+surname:'');
  // Now open the first-name modal
  setTimeout(function(){showChildNamingModal(baby);},300);
}
function callPerson(id){
  closeModal();
  var n=getNPC(id);if(!n||!n.alive){toast('Cannot reach them.');return;}
  n.closeness=Math.min(100,(n.closeness||0)+rnd(3,8));
  n.trust=Math.min(100,(n.trust||0)+rnd(2,5));
  applyStats({happiness:rnd(3,9)});applyHidden({karma:2});
  addLog(G.age,'Called '+n.name+'.','family');
  renderStats();save();toast('Good chat with '+n.name+'.');
}
function spendTimePerson(id){
  closeModal();
  var n=getNPC(id);if(!n||!n.alive)return;
  n.closeness=Math.min(100,(n.closeness||0)+rnd(8,15));
  n.trust=Math.min(100,(n.trust||0)+rnd(4,8));
  var cost=rnd(20,80);G.finances.cash-=cost;recalcNetWorth();
  applyStats({happiness:rnd(7,14)});applyHidden({stress:-8,karma:2});
  addLog(G.age,'Spent time with '+n.name+'.','family');
  renderStats();save();toast('Good time with '+n.name+'.');
}
function giftPerson(id){
  closeModal();
  var n=getNPC(id);if(!n||!n.alive)return;
  if(G.finances.cash<50){toast('Not enough money.');return;}
  var cost=rnd(50,200);G.finances.cash-=cost;recalcNetWorth();
  n.trust=Math.min(100,(n.trust||0)+rnd(8,15));
  n.closeness=Math.min(100,(n.closeness||0)+rnd(5,10));
  applyHidden({karma:4});
  addLog(G.age,'Gifted '+n.name+'.','family');
  renderStats();save();toast('Gift delivered to '+n.name+'.');
}

// \u2500\u2500 SCHOOL TAB \u2500\u2500
function openSchoolModal(){
  if(!G.education.stage||G.education.stage==='none'||G.education.stage==='graduate'){
    var uniBtnHTML='';
    if(G.education.secondaryGrade&&G.age>=17&&!G.education.uniApplied&&!G.flags.graduated_university){
      uniBtnHTML='<div style="margin-top:16px"><button class="btn btn-s" onclick="closeModal();openUniApplicationModal()">&#x1F393; Apply to University</button></div>';
    }
    showModal('School','<p style="color:var(--muted)">Not currently in education.</p>'+uniBtnHTML);return;
  }
  var stage=G.education.stage;
  var gpa=G.education.gpa||null;
  // Grade summary — pre-computed to avoid quote nesting issues
  var gradeHTML='';
  if(stage==='university'&&gpa){
    var gpaLabel=gpa>=4.5?'First Class':gpa>=3.5?'Second Class Upper':gpa>=2.4?'Second Class Lower':gpa>=1.5?'Third Class':'Pass';
    gradeHTML='<div style="font-family:var(--fm);font-size:11px;color:var(--cyan);margin-bottom:6px">CGPA: '+gpa+' / 5.0 &mdash; '+gpaLabel+'</div>';
  }
  if(stage==='secondary'&&G.education.secondaryGrade){
    var sg=G.education.secondaryGrade;
    var sgl=sg>=80?'A (Distinction)':sg>=65?'B (Credit)':sg>=50?'C (Pass)':sg>=40?'D (Marginal)':'F (Fail)';
    gradeHTML='<div style="font-family:var(--fm);font-size:11px;color:var(--cyan);margin-bottom:6px">Current Grade: '+sg+'% &mdash; '+sgl+'</div>';
  }
  if(stage==='primary'&&G.education.primaryGrade){
    var pg=G.education.primaryGrade;
    var pgl=pg>=80?'A (Distinction)':pg>=65?'B (Credit)':pg>=50?'C (Pass)':pg>=40?'D (Marginal)':'F (Fail)';
    gradeHTML='<div style="font-family:var(--fm);font-size:11px;color:var(--cyan);margin-bottom:6px">Average: '+pg+'% &mdash; '+pgl+'</div>';
  }
  // Uni apply button — pre-computed
  var uniAppBtn='';
  if(stage==='secondary'&&G.age>=17&&!G.education.uniApplied){
    uniAppBtn='<button class="btn btn-sm btn-s" style="color:var(--cyan);border-color:var(--cyan)" onclick="closeModal();openUniApplicationModal()">&#x1F393; Apply to Uni</button>';
  }
  var teacherHTML='';
  if(G.education.teacher){
    var t=G.education.teacher;
    teacherHTML=ACC('teacher','&#128218;',t.name,'Your '+t.subject+' teacher',
      SR('Trust',t.trust||0,'var(--cyan)')+
      '<div style="font-size:12px;color:var(--dim);margin:6px 0">'+t.personality+'</div>'+
      '<div class="acc-actions">'+
        '<button class="btn btn-sm btn-s" onclick="talkToTeacher()">&#128172; Talk</button>'+
        '<button class="btn btn-sm btn-s" onclick="askTeacherHelp()">&#128214; Ask for Help</button>'+
      '</div>');
  }
  var classmatesHTML='';
  if(G.education.classmates&&G.education.classmates.length){
    classmatesHTML='<div class="pl-lbl" style="margin:14px 0 8px">Classmates</div>';
    for(var ci=0;ci<G.education.classmates.length;ci++){
      var c=G.education.classmates[ci];
      var isFriend=G.npcs.friends.some(function(f){return f.id===c.id;});
      var canCrush=G.age>=13&&!c.crush&&!isFriend&&!G.npcs.partner;
      var btns='<div class="acc-actions">';
      if(isFriend){btns+='<span style="font-family:var(--fm);font-size:9px;color:var(--success)">&#10003; Friend</span>';}
      else{btns+='<button class="btn btn-sm btn-s" data-cm-id="'+c.id+'" onclick="befriendClassmate(this.dataset.cmId)">&#129309; Befriend</button>';}
      if(canCrush){btns+='<button class="btn btn-sm btn-s" data-cm-id="'+c.id+'" onclick="crushOnClassmate(this.dataset.cmId)">&#128152; Ask Out</button>';}
      btns+='</div>';
      classmatesHTML+=ACC(c.id,c.gender==='female'?'&#128105;':'&#128102;',c.name,c.personality,
        SR('Closeness',c.closeness||0,'var(--orange)')+SR('Trust',c.trust||0,'var(--cyan)')+btns);
    }
  }
  var clubs=G.flags.school_clubs||[];
  var clubsHTML='';
  if(clubs.length){clubsHTML='<div class="pl-lbl" style="margin-bottom:6px">Clubs</div>';clubs.forEach(function(c){clubsHTML+='<div style="font-family:var(--fm);font-size:11px;color:var(--cyan);padding:4px 0">&#10003; '+c+'</div>';});}
  showModal('School',
    '<div style="margin-bottom:16px">'+
      '<div class="pl-lbl">Stage</div>'+
      '<div style="font-size:15px;color:var(--text);margin-bottom:8px">'+stage.charAt(0).toUpperCase()+stage.slice(1)+'</div>'+
      gradeHTML+
    '</div>'+
    '<div style="margin-bottom:14px;padding:12px;background:var(--s2);border-radius:6px">'+
      '<div class="pl-lbl" style="margin-bottom:8px">Actions</div>'+
      '<div style="display:flex;flex-wrap:wrap;gap:7px">'+
        '<button class="btn btn-sm btn-s" onclick="studyAction()">&#128214; Study Hard</button>'+
        '<button class="btn btn-sm btn-s" onclick="extraLessonsAction()">&#9999;&#65039; Extra Lessons</button>'+
        (stage==='secondary'?'<button class="btn btn-sm btn-s" onclick="joinClubAction()">&#127917; Join Club</button>':'')+
        (stage==='university'?'<button class="btn btn-sm btn-s" onclick="joinSocietyAction()">&#127891; Join Society</button>':'')+
        uniAppBtn+
        '<button class="btn btn-sm btn-s" style="color:var(--danger);border-color:var(--danger)" onclick="dropOutAction()">&#128682; Drop Out</button>'+
      '</div>'+
    '</div>'+
    teacherHTML+classmatesHTML+clubsHTML);
}

function talkToTeacher(){
  closeModal();var t=G.education.teacher;if(!t)return;
  t.closeness=Math.min(100,(t.closeness||0)+rnd(3,8));t.trust=Math.min(100,(t.trust||0)+rnd(2,5));
  applyStats({happiness:rnd(2,6)});addLog(G.age,'Talked to '+t.name+'.','school');renderStats();save();
  toast('Good chat with '+t.name+'.');
}
function askTeacherHelp(){
  closeModal();var t=G.education.teacher;if(!t)return;
  var gain=rnd(3,8);G.stats.intelligence=Math.min(100,G.stats.intelligence+gain);
  if(G.education.stage==='university')G.education.gpa=Math.min(4.0,(G.education.gpa||2.5)+.06);
  t.closeness=Math.min(100,(t.closeness||0)+5);
  addLog(G.age,'Extra help from '+t.name+'.','school');renderStats();save();
  toast(t.name+' helped. +'+gain+' Intelligence.');
}
function befriendClassmate(id){
  closeModal();var c=G.education.classmates.find(function(x){return x.id===id;});if(!c)return;
  if(G.npcs.friends.some(function(f){return f.id===id;})){toast('Already friends.');return;}
  c.closeness=Math.min(100,(c.closeness||0)+rnd(10,20));c.trust=Math.min(100,(c.trust||0)+rnd(8,15));
  c.relationship='friend';G.npcs.friends.push(c);
  applyStats({happiness:rnd(8,15)});applyHidden({karma:3});
  addLog(G.age,'Made friends with '+c.name+'.','family');renderStats();save();
  toast(c.name+' is now your friend!');
}
function crushOnClassmate(id){
  closeModal();var c=G.education.classmates.find(function(x){return x.id===id;});if(!c)return;
  c.crush=true;
  var success=Math.random()<(0.3+(G.stats.looks/300)+(c.closeness/200));
  if(success){
    G.npcs.partner=c;G.flags.in_relationship=true;c.relationship='partner';
    applyStats({happiness:rnd(15,25)});applyHidden({karma:5,stress:8});
    addLog(G.age,'Started dating '+c.name+'.','romance');renderStats();save();
    toast(c.name+' said yes! &#128152;');
  } else {
    applyStats({happiness:-rnd(5,12)});applyHidden({stress:10});
    addLog(G.age,'Confessed to '+c.name+'... they said no.','romance');renderStats();save();
    toast(c.name+' said no. That stings.');
  }
}

function studyAction(){
  closeModal();
  var gain=rnd(3,9);
  G.stats.intelligence=Math.min(100,G.stats.intelligence+gain);
  if(G.education.stage==='university'){G.education.gpa=Math.min(4.0,(G.education.gpa||2.5)+.08);}
  applyHidden({stress:rnd(4,8)});
  addLog(G.age,'Studied hard.','action');renderStats();save();
  toast('+'+gain+' Intelligence. GPA improving.');
}
function extraLessonsAction(){
  closeModal();
  if(G.finances.cash<100){toast('Need at least '+money(100)+'.');return;}
  G.finances.cash-=150;recalcNetWorth();
  var gain=rnd(4,10);G.stats.intelligence=Math.min(100,G.stats.intelligence+gain);
  if(G.education.stage==='university')G.education.gpa=Math.min(4.0,(G.education.gpa||2.5)+.1);
  addLog(G.age,'Got extra tuition.','action');renderStats();save();
  toast('Extra lessons done. +'+gain+' Intelligence.');
}
function joinClubAction(){
  closeModal();
  var clubs=['Drama Club','Football Team','Debate Society','Art Club','Science Club','Student Council','Music Band','Athletics'];
  var available=clubs.filter(c=>!(G.flags.school_clubs||[]).includes(c));
  if(!available.length){toast('Already in every club!');return;}
  var club=pick(available);
  if(!G.flags.school_clubs)G.flags.school_clubs=[];
  G.flags.school_clubs.push(club);
  applyStats({happiness:rnd(6,12)});applyHidden({reputation:rnd(4,8)});
  if(club.includes('Football')||club.includes('Athletics'))G.flags.early_athlete=true;
  if(club.includes('Music'))G.flags.childhood_music=true;
  addLog(G.age,'Joined '+club+'.','action');renderStats();save();
  toast('Joined: '+club+'!');
}
function joinSocietyAction(){joinClubAction();}
function dropOutAction(){
  closeModal();
  if(!confirm){}
  G.flags.dropped_out_uni=true;G.education.droppedOut=true;G.education.stage='none';
  G.finances.debt=Math.max(0,G.finances.debt-5000); // partial debt relief
  addLog(G.age,'Dropped out of university.','school');renderStats();save();
  toast('You dropped out. A new path opens.');
  closeModal();
}

// \u2500\u2500 CAREER TAB \u2500\u2500
function openCareerModal(){
  var cp=G.career.path&&CAREER_PATHS[G.career.path];
  var inEdu=G.education.stage&&G.education.stage!=='none'&&G.education.stage!=='graduate';
  var isSports=cp&&cp.cat==='sports';
  var content='';
  if(!G.career.path&&!inEdu){
    content='<div style="margin-bottom:14px;font-size:13px;color:var(--dim);font-style:italic">No career path yet.</div>'+
    '<div style="display:flex;flex-direction:column;gap:8px">'+
      (G.age>=16?'<button class="btn btn-s" onclick="lookForWork()">&#128269; Entry-Level Work</button>':'')+
      (G.age>=18&&G.flags.graduated_university?'<button class="btn btn-s" onclick="startGraduateJob()">&#127891; Graduate Roles</button>':'')+
      (G.age>=14&&G.flags.early_athlete?'<button class="btn btn-s" onclick="chooseSportsPath()">&#9917; Pursue Sports</button>':'')+
      (G.flags.childhood_music?'<button class="btn btn-s" onclick="chooseMusicPath()">&#127925; Pursue Music</button>':'')+
      (G.age>=18?'<button class="btn btn-s" onclick="startBusinessPath()">&#127970; Start a Business</button>':'')+
    '</div>';
  } else if(cp){
    var perf=G.career.stats&&G.career.stats.performance||getCareerPerf();
    var form=G.career.stats&&G.career.stats.form||50;
    var perfColor=perf>=70?'var(--success)':perf>=45?'var(--gold)':'var(--danger)';
    var formColor=form>=70?'var(--success)':form>=45?'var(--gold)':'var(--danger)';
    var clubHeader='';
    if(G.career.club){
      clubHeader='<div style="background:var(--s2);border:1px solid var(--border);border-radius:6px;padding:12px;margin-bottom:14px">'+
        '<div style="font-family:var(--fd);font-size:22px;color:var(--orange);letter-spacing:.05em">'+G.career.club+'</div>'+
        '<div style="font-family:var(--fm);font-size:10px;color:var(--cyan);margin-top:2px">'+G.career.league+'</div>'+
        (G.career.manager?'<div style="font-family:var(--fm);font-size:10px;color:var(--muted);margin-top:4px">Manager: <span style="color:var(--dim)">'+G.career.manager.name+'</span></div>':'')+
      '</div>';
    }
    var statsHTML='';
    if(isSports&&G.career.stats){
      var s=G.career.stats;
      statsHTML='<div style="margin-bottom:14px">'+
        '<div class="pl-lbl" style="margin-bottom:8px">This Season</div>'+
        '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:10px">'+
          '<div class="mi"><div class="mi-lbl">Goals</div><div class="mi-val" style="color:var(--orange);font-size:18px">'+s.seasonGoals+'</div></div>'+
          '<div class="mi"><div class="mi-lbl">Assists</div><div class="mi-val" style="color:var(--cyan);font-size:18px">'+s.seasonAssists+'</div></div>'+
          '<div class="mi"><div class="mi-lbl">Apps</div><div class="mi-val" style="color:var(--text);font-size:18px">'+s.seasonApps+'</div></div>'+
        '</div>'+
        '<div class="pl-lbl" style="margin-bottom:8px">Career Total</div>'+
        '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">'+
          '<div class="mi"><div class="mi-lbl">Goals</div><div class="mi-val acc">'+s.goals+'</div></div>'+
          '<div class="mi"><div class="mi-lbl">Assists</div><div class="mi-val acc">'+s.assists+'</div></div>'+
          '<div class="mi"><div class="mi-lbl">Apps</div><div class="mi-val acc">'+s.appearances+'</div></div>'+
        '</div>'+
      '</div>';
    }
    var bench=REAL_PEOPLE_BENCHMARKS[G.career.path]&&REAL_PEOPLE_BENCHMARKS[G.career.path][G.career.level];
    var ladder=cp.ladder.map(function(t,i){var done=i<(G.career.level-1),cur=i===(G.career.level-1);return'<div style="font-family:var(--fm);font-size:10px;color:'+(cur?'var(--orange)':done?'var(--success)':'var(--muted)')+';padding:3px 0">'+(cur?'&#9654;':done?'&#10003;':' ')+' '+(i+1)+'. '+t+'</div>';}).join('');
    var managerHTML='';
    if(G.career.manager){
      var m=G.career.manager;
      managerHTML=ACC('manager','&#128084;',m.name,m.relationship+' · '+m.personality,
        SR('Trust',m.trust||0,'var(--cyan)')+SR('Closeness',m.closeness||0,'var(--orange)')+
        '<div class="acc-actions">'+
          '<button class="btn btn-sm btn-s" onclick="talkManager()">&#128172; Talk</button>'+
          (isSports?'<button class="btn btn-sm btn-s" onclick="askForPlaytime()">&#9917; Playtime</button>':'<button class="btn btn-sm btn-s" onclick="askForRaise()">&#128176; Ask Raise</button>')+
          (isSports?'<button class="btn btn-sm btn-s" onclick="openTransferModal()">&#128260; Transfer</button>':'')+
        '</div>');
    }
    var coworkersHTML='';
    if(G.career.coworkers&&G.career.coworkers.length){
      coworkersHTML='<div class="pl-lbl" style="margin:14px 0 8px">'+(isSports?'Teammates':'Colleagues')+'</div>';
      G.career.coworkers.slice(0,4).forEach(function(cw){
        coworkersHTML+=ACC(cw.id,'&#128100;',cw.name,cw.role+' · '+cw.personality,
          SR('Trust',cw.trust||0,'var(--cyan)')+SR('Closeness',cw.closeness||0,'var(--orange)')+
          '<div class="acc-actions">'+
            '<button class="btn btn-sm btn-s" data-cw-id="'+cw.id+'" onclick="talkCoworker(this.dataset.cwId)">&#128172; Talk</button>'+
            '<button class="btn btn-sm btn-s" data-cw-id="'+cw.id+'" onclick="befriendCoworker(this.dataset.cwId)">&#129309; Bond</button>'+
          '</div>');
      });
    }
    content=clubHeader+
      '<div style="margin-bottom:14px"><div class="pl-lbl">Role</div>'+
        '<div style="font-family:var(--fd);font-size:18px;color:var(--text)">'+G.career.title+'</div>'+
        '<div style="font-family:var(--fm);font-size:10px;color:var(--cyan);margin-top:3px">'+cp.label+' · Level '+G.career.level+'/10</div></div>'+
      '<div style="margin-bottom:14px"><div class="pl-lbl">Salary</div>'+
        '<div style="font-family:var(--fm);font-size:15px;color:var(--cyan)">'+money(G.career.salary)+'/yr</div></div>'+
      SR('Performance',perf,perfColor)+SR('Form',form,formColor)+
      statsHTML+
      (bench?'<div style="background:var(--s2);border:1px solid var(--border);border-radius:4px;padding:11px;margin-bottom:14px;font-size:12px;color:var(--gold);font-style:italic">"'+bench+'"</div>':'')+
      '<div style="margin-bottom:14px;padding:12px;background:var(--s2);border-radius:6px">'+
        '<div class="pl-lbl" style="margin-bottom:8px">Actions</div>'+
        '<div style="display:flex;flex-wrap:wrap;gap:7px">'+
          '<button class="btn btn-sm btn-s" onclick="workHarderAction()">&#128188; Work Harder</button>'+
          '<button class="btn btn-sm btn-s" onclick="networkAction()">&#129309; Network</button>'+
          '<button class="btn btn-sm btn-s" onclick="openRelocateModal()" style="color:var(--cyan);border-color:var(--cyan)">&#128205; Relocate</button>'+
          '<button class="btn btn-sm btn-s" onclick="quitJob()" style="color:var(--danger);border-color:var(--danger)">&#128682; Quit Job</button>'+
          (isSports?'<button class="btn btn-sm btn-s" onclick="trainSportAction()">&#127939; Train</button>':'')+
          (['afrobeats','hiphop','rnb','music_production'].includes(G.career.path||'')?'<button class="btn btn-sm btn-s" onclick="recordAction()">&#127925; Record</button><button class="btn btn-sm btn-s" onclick="collabAction()">&#127908; Collab</button>':'')+
          (cp.cat==='business'?'<button class="btn btn-sm btn-s" onclick="pitchAction()">&#128202; Pitch</button>':'')+
          (G.age>=32&&isSports?'<button class="btn btn-sm btn-s" style="color:var(--gold);border-color:var(--gold)" onclick="retireFromSports()">&#127942; Retire</button>':'')+
        '</div></div>'+
      '<div><div class="pl-lbl" style="margin-bottom:7px">Career Ladder</div>'+ladder+'</div>'+
      managerHTML+coworkersHTML;
  } else if(inEdu){
    content='<div style="font-size:13px;color:var(--dim);font-style:italic">In '+eduLabel()+'. Career opens after.</div>';
  }
  content+='<div style="margin-top:14px;font-family:var(--fm);font-size:10px;color:var(--muted)">Lifetime Earnings: '+money(G.finances.lifetimeEarnings||0)+'</div>';
  showModal('Career',content);
}
function talkCoworker(id){closeModal();var cw=(G.career.coworkers||[]).find(function(c){return c.id===id;});if(!cw)return;cw.closeness=Math.min(100,(cw.closeness||0)+rnd(4,10));cw.trust=Math.min(100,(cw.trust||0)+rnd(3,7));applyStats({happiness:rnd(3,8)});addLog(G.age,'Chatted with '+cw.name+'.','action');renderStats();save();toast('Good talk with '+cw.name+'.');}
function befriendCoworker(id){closeModal();var cw=(G.career.coworkers||[]).find(function(c){return c.id===id;});if(!cw)return;if(G.npcs.friends.some(function(f){return f.id===id;})){toast('Already friends.');return;}cw.closeness=Math.min(100,(cw.closeness||0)+rnd(12,20));cw.trust=Math.min(100,(cw.trust||0)+rnd(8,15));cw.relationship='friend';G.npcs.friends.push(cw);applyStats({happiness:rnd(8,14)});applyHidden({karma:3});addLog(G.age,'Became friends with '+cw.name+'.','family');renderStats();save();toast(cw.name+' is now a friend!');}
function talkManager(){closeModal();var m=G.career.manager;if(!m)return;m.closeness=Math.min(100,(m.closeness||0)+rnd(3,8));m.trust=Math.min(100,(m.trust||0)+rnd(2,5));applyStats({happiness:rnd(2,7)});addLog(G.age,'Spoke with '+m.name+'.','action');renderStats();save();toast('Had a word with '+m.name+'.');}
function askForPlaytime(){closeModal();var m=G.career.manager;if(!m)return;var perf=G.career.stats&&G.career.stats.performance||50;if(perf>60&&(m.trust||0)>55){G.career.stats.seasonApps=Math.min(38,(G.career.stats.seasonApps||0)+rnd(3,6));applyHidden({reputation:rnd(3,7)});addLog(G.age,'Manager increased playing time.','career');renderStats();save();toast(m.name+': You will get your chance.');}else{toast(m.name+': Prove yourself in training first.');}}
function askForRaise(){closeModal();var m=G.career.manager;if(!m)return;var perf=G.career.stats&&G.career.stats.performance||50;if(perf>65&&(m.trust||0)>60){var raise=rnd(2000,8000);G.career.salary+=raise;G.finances.annualIncome+=raise;addLog(G.age,'Got a salary raise of '+money(raise)+'/yr.','career');renderStats();save();toast('Raise secured: +'+money(raise)+'/yr!');}else{toast(m.name+': Not the right time. Keep performing.');}}
function openTransferModal(){var lg=getLeague(G.country);var clubs=lg.clubs.filter(function(c){return c.name!==G.career.club;});var opts=clubs.map(function(c){return'<button class="btn btn-s" data-club="'+c.name+'" onclick="requestTransfer(this.dataset.club)">'+c.name+'</button>';}).join('');showModal('Request Transfer','<div style="margin-bottom:14px;font-size:13px;color:var(--dim)">Where do you want to go?</div><div style="display:flex;flex-direction:column;gap:8px">'+opts+'</div>');}
function requestTransfer(clubName){closeModal();var perf=G.career.stats&&G.career.stats.performance||50;if(Math.random()<(perf/150)){var lg=getLeague(G.country);G.career.club=clubName;G.career.manager={name:pick(lg.managers),relationship:'manager',trust:45,closeness:30,personality:pick(['demanding','supportive','tactical','motivating','cold'])};G.career.coworkers=[];for(var i=0;i<5;i++)G.career.coworkers.push(makeCoworker(G.career.path));addLog(G.age,'Transferred to '+clubName+'.','career');renderStats();save();toast('Transfer approved! Welcome to '+clubName+'.');}else{toast(clubName+' rejected the transfer. Keep performing.');}}
function retireFromSports(){
  closeModal();
  var s=G.career.stats||{goals:0,assists:0,appearances:0};
  addLog(G.age,'Retired from professional sport. Career: '+s.goals+' goals, '+s.assists+' assists, '+s.appearances+' apps.','career');
  G.career.path=null;G.career.club=null;G.career.league=null;
  G.career.title='Retired';G.career.salary=0;G.finances.annualIncome=0;
  G.career.coworkers=[];G.career.manager=null;
  renderStats();save();
  showModal('Life After Sport',
    '<div style="font-size:13px;color:var(--dim);margin-bottom:16px;font-style:italic">Your playing days are over. What next?</div>'+
    '<div style="display:flex;flex-direction:column;gap:9px">'+
      '<button class="btn btn-s" data-type="coaching" onclick="postSportsCareer(this.dataset.type)">&#128104;&#8205;&#127979; Coaching</button>'+
      '<button class="btn btn-s" data-type="media" onclick="postSportsCareer(this.dataset.type)">&#127897;&#65039; Sports Media</button>'+
      '<button class="btn btn-s" data-type="business" onclick="postSportsCareer(this.dataset.type)">&#127970; Business</button>'+
      '<button class="btn btn-s" onclick="closeModal()">Rest for now</button>'+
    '</div>');
}

function postSportsCareer(type){closeModal();var paths={coaching:'corporate',media:'journalism',business:'entrepreneur'};var titles={coaching:'Youth Coach',media:'Sports Pundit',business:'Founder'};enterCareerPath(paths[type]||'corporate',2);G.career.title=titles[type]||G.career.title;addLog(G.age,'New chapter: '+G.career.title+'.','career');renderStats();save();toast('New chapter: '+G.career.title+'.');}

// Career actions
function workHarderAction(){
  closeModal();
  var rep=rnd(3,9);G.hidden.reputation=Math.min(100,G.hidden.reputation+rep);
  G.career.yearsInRole=(G.career.yearsInRole||0)+.5;
  applyHidden({stress:rnd(5,10)});
  addLog(G.age,'Worked extra hard.','action');renderStats();save();toast('Extra effort in. Reputation +'+rep+'.');
}
function networkAction(){
  closeModal();
  var cost=rnd(30,100);
  if(G.finances.cash<cost){toast('Not enough cash.');return;}
  G.finances.cash-=cost;recalcNetWorth();
  G.hidden.reputation=Math.min(100,G.hidden.reputation+rnd(4,10));
  applyStats({happiness:rnd(3,8)});
  addLog(G.age,'Networked.','action');renderStats();save();toast('New connections made.');
}
function trainSportAction(){
  closeModal();
  var gain=rnd(4,9);G.stats.health=Math.min(100,G.stats.health+gain);
  G.career.yearsInRole=(G.career.yearsInRole||0)+.4;
  if(!G.flags.sport_training_count)G.flags.sport_training_count=0;
  G.flags.sport_training_count++;
  if(G.flags.sport_training_count>=5&&!G.flags.made_sport_squad){
    G.flags.made_sport_squad=true;
    addLog(G.age,'Made the squad!','career');toast('You made the squad!');
  }
  addLog(G.age,'Trained hard.','action');renderStats();save();
  if(!G.flags.made_sport_squad||G.flags.sport_training_count%5===0)toast('Training done. Health +'+gain+'.');
}
function talkCoachAction(){
  showModal('Talk to Coach',`
    <div style="display:flex;flex-direction:column;gap:9px">
      <button class="btn btn-s" onclick="coachTalk('contract')">💰 Discuss Contract</button>
      <button class="btn btn-s" onclick="coachTalk('playtime')">\u26bd Ask for More Playtime</button>
      <button class="btn btn-s" onclick="coachTalk('position')">📋 Discuss Position</button>
      <button class="btn btn-s" onclick="coachTalk('transfer')">🔄 Request Transfer</button>
    </div>`);
}
function coachTalk(topic){
  closeModal();
  var outcomes={
    contract:'The coach says performance determines everything. Keep working.',
    playtime:Math.random()<.5?'You get more minutes this season.':'Not yet -- prove yourself in training first.',
    position:'The coach is open to it. You try a new role.',
    transfer:'Feelers are out. Nothing concrete yet.',
  };
  if(topic==='playtime'&&Math.random()<.5){
    G.career.yearsInRole=(G.career.yearsInRole||0)+.5;
    G.hidden.reputation=Math.min(100,G.hidden.reputation+rnd(3,7));
  }
  addLog(G.age,'Talked to coach about '+topic+'.','action');renderStats();save();toast(outcomes[topic]||'Good conversation.');
}
function teamBondAction(){
  closeModal();
  var cost=rnd(20,60);G.finances.cash-=cost;recalcNetWorth();
  applyStats({happiness:rnd(8,15)});applyHidden({reputation:rnd(3,7),stress:-rnd(5,10)});
  // Add random teammate as friend
  if(G.npcs.friends.length<8&&Math.random()<.4){
    var tm=makeFriend(G.age);tm.relationship='friend';
    G.npcs.friends.push(tm);
    addLog(G.age,'Bonded with teammate '+tm.name+'.','action');
  } else {addLog(G.age,'Team bonding session.','action');}
  renderStats();save();toast('Great session. Team spirit up.');
}
function recordAction(){
  closeModal();
  G.stats.intelligence=Math.min(100,G.stats.intelligence+rnd(2,4));
  G.hidden.reputation=Math.min(100,G.hidden.reputation+rnd(3,7));
  G.career.yearsInRole=(G.career.yearsInRole||0)+.4;
  addLog(G.age,'Recorded new music.','action');renderStats();save();toast('Track recorded. Body of work growing.');
}
function collabAction(){
  closeModal();
  G.hidden.reputation=Math.min(100,G.hidden.reputation+rnd(5,12));
  G.fame.popularity=Math.min(100,G.fame.popularity+rnd(3,8));
  addLog(G.age,'Collaborated with another artist.','action');renderStats();save();toast('Collab done. New audience reached.');
}
function pitchAction(){
  closeModal();
  var chance=G.stats.intelligence>60?0.5:0.3;
  if(Math.random()<chance){
    var raise=rnd(5000,25000);G.finances.cash+=raise;recalcNetWorth();
    addLog(G.age,'Secured investment funding.','career');renderStats();save();toast('Investors are in! +'+money(raise)+'.');
  } else {addLog(G.age,'Pitched investors -- no deal yet.','action');save();toast('Not this time. Refine the pitch.');}
}
function lookForWork(){
  closeModal();
  G.flags.first_job=true;G.career.salary=2000;G.career.title='Entry Level';G.career.level=1;
  G.career.path='corporate';G.finances.annualIncome=2000;
  addLog(G.age,'Got first job.','career');renderStats();save();toast('Got a job! Entry Level, '+money(2000)+'/yr.');
}
function startGraduateJob(){
  closeModal();
  var salary=calcSalary('corporate',2,G.country);
  enterCareerPath('corporate',2);
  addLog(G.age,'Started graduate role: '+G.career.title+'.','career');renderStats();save();
  toast('Graduate role secured: '+money(salary)+'/yr.');
}
function chooseSportsPath(){
  closeModal();
  showModal('Choose Sport',`
    <div style="display:flex;flex-direction:column;gap:9px">
      <button class="btn btn-s" onclick="startSportPath('football')">\u26bd Football</button>
      <button class="btn btn-s" onclick="startSportPath('basketball')">🏀 Basketball</button>
      <button class="btn btn-s" onclick="startSportPath('athletics')">🏃 Athletics</button>
    </div>`);
}
function startSportPath(p){closeModal();enterCareerPath(p,1);addLog(G.age,'Pursuing '+CAREER_PATHS[p].label+' career.','career');renderStats();save();toast('Sports path started: '+CAREER_PATHS[p].label+'.');}
function chooseMusicPath(){
  closeModal();
  showModal('Choose Sound',`
    <div style="display:flex;flex-direction:column;gap:9px">
      <button class="btn btn-s" onclick="startMusicPath('afrobeats')">🎵 Afrobeats</button>
      <button class="btn btn-s" onclick="startMusicPath('hiphop')">🎤 Hip-Hop</button>
      <button class="btn btn-s" onclick="startMusicPath('rnb')">🎶 R&B / Pop</button>
    </div>`);
}
function startMusicPath(p){closeModal();enterCareerPath(p,1);G.flags.career_path_started=true;addLog(G.age,'Started music: '+CAREER_PATHS[p].label+'.','career');renderStats();save();toast(CAREER_PATHS[p].label+' path started!');}
function startBusinessPath(){
  closeModal();
  if(G.finances.cash<2000){toast('Need at least '+money(2000)+' to start.');return;}
  G.finances.debt+=8000;enterCareerPath('entrepreneur',1);G.flags.career_path_started=true;G.flags.started_business=true;
  addLog(G.age,'Started a business.','career');recalcNetWorth();renderStats();save();toast('Business registered! Now build it.');
}

// \u2500\u2500 ASSETS TAB \u2500\u2500
function openAssetsModal(){
  var carStr=G.assets.car?G.assets.car.name+' ('+money(G.assets.car.value)+')':'None';
  var propStr=G.assets.properties.length?G.assets.properties.map(p=>p.name).join(', '):'None';
  var watchStr=G.assets.watches.length?G.assets.watches.map(w=>w.name).join(', '):'None';
  var invVal=G.finances.investments.reduce((s,i)=>s+(i.value||0),0);

  showModal('Assets & Money',`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-bottom:16px">
      <div style="background:var(--s2);border:1px solid var(--border);border-radius:4px;padding:11px"><div class="pl-lbl">Cash</div><div style="font-family:var(--fm);font-size:15px;color:${G.finances.cash>=0?'var(--cyan)':'var(--danger)'}">${money(G.finances.cash)}</div></div>
      <div style="background:var(--s2);border:1px solid var(--border);border-radius:4px;padding:11px"><div class="pl-lbl">Net Worth</div><div style="font-family:var(--fm);font-size:15px;color:var(--orange)">${money(G.finances.netWorth)}</div></div>
      <div style="background:var(--s2);border:1px solid var(--border);border-radius:4px;padding:11px"><div class="pl-lbl">Debt</div><div style="font-family:var(--fm);font-size:15px;color:${G.finances.debt>0?'var(--danger)':'var(--muted)'}">${money(G.finances.debt)}</div></div>
      <div style="background:var(--s2);border:1px solid var(--border);border-radius:4px;padding:11px"><div class="pl-lbl">Investments</div><div style="font-family:var(--fm);font-size:15px;color:var(--cyan)">${money(invVal)}</div></div>
    </div>
    <div style="font-family:var(--fm);font-size:10px;color:var(--muted);margin-bottom:14px">Car: ${carStr} \u00b7 Watch: ${watchStr} \u00b7 Property: ${propStr}</div>
    <div class="pl-lbl" style="margin-bottom:10px">Shop & Invest</div>
    <div style="display:flex;flex-wrap:wrap;gap:8px">
      <button class="btn btn-sm btn-s" onclick="openShopModal('car')">🚗 Cars</button>
      <button class="btn btn-sm btn-s" onclick="openShopModal('watch')">\u231a Watches</button>
      <button class="btn btn-sm btn-s" onclick="openShopModal('phone')">📱 Phones</button>
      <button class="btn btn-sm btn-s" onclick="openShopModal('property')">🏠 Property</button>
      <button class="btn btn-sm btn-s" onclick="openShopModal('clothes')">👗 Clothes</button>
      <button class="btn btn-sm btn-s" onclick="openInvestModal()">📈 Invest</button>
    </div>`);
}

function openShopModal(cat){
  var items=getShopItems(cat);
  var grid=items.map((item,i)=>{
    var owned=isOwned(cat,item);
    var canAfford=G.finances.cash>=item.price;
    var cls=owned?'owned':!canAfford?'cant-afford':'';
    var badge=owned?`<div class="si-badge owned">Owned</div>`:!canAfford?`<div class="si-badge cant">Need ${money(item.price)}</div>`:'';
    return`<div class="shop-item ${cls}" onclick="${owned||!canAfford?'':('buyItem(\''+cat+'\','+i+')')}">
      <div class="si-icon">${item.icon}</div>
      <div class="si-name">${item.name}</div>
      <div class="si-price">${money(item.price)}</div>
      ${badge}
    </div>`;
  }).join('');
  showModal('Shop -- '+cat.charAt(0).toUpperCase()+cat.slice(1),`<div class="shop-grid">${grid}</div>`);
}

function getShopItems(cat){
  var yr=G.world.year||2020;
  if(cat==='car') return[
    {name:'Old Banger',icon:'🚗',price:800},{name:'Used Toyota',icon:'🚗',price:7000},
    {name:'VW Golf',icon:'🚙',price:18000},{name:'BMW 3 Series',icon:'🏎\ufe0f',price:42000},
    {name:'Mercedes C-Class',icon:'🏎\ufe0f',price:52000},{name:'Porsche 911',icon:'🏎\ufe0f',price:90000},
    {name:'Range Rover',icon:'🛻',price:95000},{name:'Ferrari',icon:'🏎\ufe0f',price:280000},
    {name:'Lamborghini',icon:'🏎\ufe0f',price:350000},{name:'Rolls Royce',icon:'🚘',price:800000},
  ];
  if(cat==='watch') return[
    {name:'Casio Digital',icon:'\u231a',price:40},{name:'Seiko Presage',icon:'\u231a',price:350},
    {name:'Tudor Black Bay',icon:'\u231a',price:3500},{name:'Rolex Submariner',icon:'\u231a',price:14000},
    {name:'Patek Philippe',icon:'\u231a',price:45000},{name:'Richard Mille',icon:'\u231a',price:180000},
  ];
  if(cat==='phone') return[
    {name:'Basic Phone',icon:'📱',price:80},{name:'Mid-Range Android',icon:'📱',price:350},
    {name:'iPhone 14',icon:'📱',price:999},{name:'iPhone Pro Max',icon:'📱',price:1299},
    {name:'Samsung Ultra',icon:'📱',price:1199},{name:'Fold/Flip',icon:'📱',price:1600},
  ];
  if(cat==='property') return[
    {name:'1-Bed Flat',icon:'🏠',price:180000},{name:'2-Bed House',icon:'🏡',price:280000},
    {name:'Family Home',icon:'🏘\ufe0f',price:500000},{name:'Penthouse',icon:'🏙\ufe0f',price:1200000},
    {name:'Mansion',icon:'🏛\ufe0f',price:3000000},{name:'Estate',icon:'🏰',price:10000000},
  ];
  if(cat==='clothes') return[
    {name:'High Street Haul',icon:'👕',price:150},{name:'Zara/H&M Fit',icon:'👔',price:300},
    {name:'Nike/Adidas Fit',icon:'👟',price:500},{name:'Ralph Lauren',icon:'🧥',price:1200},
    {name:'Gucci Outfit',icon:'👜',price:3500},{name:'Full Balenciaga',icon:'🧣',price:8000},
    {name:'Bespoke Suit',icon:'🎩',price:5000},{name:'Couture Piece',icon:'\u2728',price:15000},
  ];
  return[];
}

function isOwned(cat,item){
  if(cat==='car')return G.assets.car&&G.assets.car.name===item.name;
  if(cat==='watch')return G.assets.watches.some(w=>w.name===item.name);
  if(cat==='phone')return G.assets.phone&&G.assets.phone.name===item.name;
  if(cat==='property')return G.assets.properties.some(p=>p.name===item.name);
  return false;
}

function buyItem(cat,idx){
  var items=getShopItems(cat);
  var item=items[idx];if(!item)return;
  if(G.finances.cash<item.price){toast('Not enough cash.');return;}
  G.finances.cash-=item.price;
  if(cat==='car')G.assets.car={name:item.name,value:item.price};
  else if(cat==='watch')G.assets.watches.push({name:item.name,value:item.price,luxury:item.price>10000});
  else if(cat==='phone')G.assets.phone={name:item.name,value:item.price};
  else if(cat==='property'){G.assets.properties.push({name:item.name,value:item.price});G.finances.debt+=Math.round(item.price*.8);}
  else if(cat==='clothes'){G.assets.wardrobe={tier:item.name,value:((G.assets.wardrobe ? G.assets.wardrobe.value : 0)||0)+item.price};applyStats({looks:rnd(2,6)});}
  recalcNetWorth();
  addLog(G.age,'Bought: '+item.name+' ('+money(item.price)+').','action');renderStats();save();
  closeModal();
  toast('Bought '+item.name+'!');
}

function openInvestModal(){
  showModal('Investments',`
    <div style="margin-bottom:14px;font-size:13px;color:var(--dim)">Current portfolio: ${money(G.finances.investments.reduce((s,i)=>s+(i.value||0),0))}</div>
    <div style="display:flex;flex-direction:column;gap:9px">
      <button class="btn btn-s" onclick="invest('index',0.1)">📊 Index Funds (Low Risk, 7-10%/yr)</button>
      <button class="btn btn-s" onclick="invest('stocks',0.25)">📈 Individual Stocks (Medium Risk)</button>
      <button class="btn btn-s" onclick="invest('crypto',0.4)">🪙 Crypto (High Risk)</button>
      <button class="btn btn-s" onclick="invest('startup',0.4)">🚀 Angel Invest in Startup</button>
    </div>`);
}
function invest(type,portion){
  closeModal();
  var amount=Math.round(Math.min(G.finances.cash,G.finances.cash*portion));
  if(amount<500){toast('Need at least '+money(500)+' to invest.');return;}
  G.finances.cash-=amount;G.finances.investments.push({type,value:amount,returnRate:.08});
  recalcNetWorth();addLog(G.age,'Invested '+money(amount)+' in '+type+'.','action');renderStats();save();
  toast('Invested '+money(amount)+' in '+type+'.');
}

// \u2500\u2500 SELF TAB \u2500\u2500
function openSelfModal(){
  showModal('Self',
    '<div class="pl-lbl" style="margin-bottom:12px">Mind &amp; Body</div>'+
    '<div style="display:flex;flex-direction:column;gap:8px">'+
    [['gym','&#x1F3CB; Go to the Gym'],['diet','&#x1F957; Start a Diet'],['walk','&#x1F6B6; Go for a Walk'],
     ['meditate','&#x1F9D8; Meditate'],['read','&#x1F4DA; Read a Book'],
     ['doctor','&#x1FA7A; See a Doctor'],['therapy','&#x1F6CB; See a Therapist'],['sleep','&#x1F634; Prioritise Sleep']]
    .map(function(s){return '<button class="btn btn-s" data-st="'+s[0]+'" onclick="openSelfActionModal(this.dataset.st)">'+s[1]+'</button>';}).join('')+
    '</div>');
}

var SELF_OPTS={
  gym:{title:'Gym Session',desc:'How hard are you going today?',opts:[
    {l:'Light session',fn:function(){applyStats({health:rnd(3,6)});applyHidden({stress:-3});addLog(G.age,'Light gym session.','action');toast('Good start.');}},
    {l:'Full workout',fn:function(){applyStats({health:rnd(7,13),looks:rnd(1,3)});applyHidden({stress:rnd(2,5)});addLog(G.age,'Intense gym session.','action');toast('Pushed hard. Sore but solid.');}},
    {l:'Personal trainer session',c:150,fn:function(c){if(G.finances.cash<c){toast('Need '+money(c)+'.');return;}G.finances.cash-=c;recalcNetWorth();applyStats({health:rnd(10,16),looks:rnd(2,4)});addLog(G.age,'PT session.','action');toast('Best session in weeks. -'+money(c)+'.');}},
  ]},
  diet:{title:'Diet Change',desc:'Eating better is harder than the gym.',opts:[
    {l:'Cut junk food gradually',fn:function(){applyStats({health:rnd(2,5)});addLog(G.age,'Cutting junk food.','action');toast('Slow change. Sustainable.');}},
    {l:'Strict clean eating',fn:function(){applyStats({health:rnd(5,10),happiness:-rnd(2,4)});addLog(G.age,'Strict diet.','action');toast('Results will come.');}},
    {l:'Intermittent fasting',fn:function(){applyStats({health:rnd(4,8),looks:rnd(1,2)});applyHidden({stress:rnd(3,6)});addLog(G.age,'Intermittent fasting.','action');toast('Body adjusting.');}},
  ]},
  walk:{title:'Go for a Walk',desc:'Sometimes the simplest thing is the right thing.',opts:[
    {l:'Quick walk',fn:function(){applyStats({happiness:rnd(4,8)});applyHidden({stress:-rnd(5,10)});addLog(G.age,'Short walk.','action');toast('Twenty minutes. Head cleared.');}},
    {l:'Long walk -- proper reset',fn:function(){applyStats({happiness:rnd(8,14),health:rnd(2,4)});applyHidden({stress:-rnd(10,18)});addLog(G.age,'Long walk.','action');toast('An hour outside. Head much clearer.');}},
    {l:'Walk somewhere meaningful',fn:function(){applyStats({happiness:rnd(10,16),intelligence:rnd(2,4)});applyHidden({stress:-rnd(12,20),karma:3});addLog(G.age,'Reflective walk.','action');toast('Something shifted.');}},
  ]},
  meditate:{title:'Meditate',desc:'Stillness is harder than it looks.',opts:[
    {l:'10 minutes -- breathing',fn:function(){applyHidden({stress:-rnd(8,14)});addLog(G.age,'Brief meditation.','action');toast('Short but sharp.');}},
    {l:'30 minutes -- full session',fn:function(){applyHidden({stress:-rnd(14,22),karma:3});applyStats({happiness:rnd(4,8)});addLog(G.age,'Deep meditation.','action');toast('More came up than expected.');}},
    {l:'Daily practice -- commit to a week',fn:function(){G.flags.meditates_regularly=true;applyHidden({stress:-rnd(18,25),karma:5});applyStats({happiness:rnd(6,12),intelligence:rnd(2,4)});addLog(G.age,'Daily meditation.','action');toast('A week of stillness.');}},
  ]},
  read:{title:'Read a Book',desc:'What kind of book?',opts:[
    {l:'Fiction -- for pleasure',fn:function(){applyStats({happiness:rnd(5,10),intelligence:rnd(2,5)});applyHidden({stress:-rnd(5,10)});addLog(G.age,'Read a novel.','action');toast('Good story.');}},
    {l:'Non-fiction / self-improvement',fn:function(){applyStats({intelligence:rnd(5,10)});applyHidden({karma:2});G.flags.keeps_learning=true;addLog(G.age,'Self-improvement book.','action');toast('A few ideas landed.');}},
    {l:'Industry / career book',fn:function(){applyStats({intelligence:rnd(6,12)});if(G.career.path)G.hidden.reputation=Math.min(100,G.hidden.reputation+rnd(2,5));addLog(G.age,'Career book.','action');toast('Sharp insights.');}},
  ]},
  doctor:{title:'Doctor Visit',desc:'Routine or specific?',opts:[
    {l:'Annual check-up',c:100,fn:function(c){if(G.finances.cash<c){toast('Need '+money(c)+'.');return;}G.finances.cash-=c;recalcNetWorth();applyStats({health:rnd(4,10)});applyHidden({stress:-5});addLog(G.age,'Annual check-up.','health');toast('All clear. -'+money(c)+'.');}},
    {l:'Specialist consultation',c:350,fn:function(c){if(G.finances.cash<c){toast('Need '+money(c)+'.');return;}G.finances.cash-=c;recalcNetWorth();applyStats({health:rnd(8,16)});applyHidden({stress:-10});addLog(G.age,'Specialist.','health');toast('Health improving. -'+money(c)+'.');}},
    {l:'Mental health assessment',c:180,fn:function(c){if(G.finances.cash<c){toast('Need '+money(c)+'.');return;}G.finances.cash-=c;recalcNetWorth();applyHidden({stress:-rnd(12,20),karma:3});applyStats({happiness:rnd(4,10)});G.flags.in_therapy=true;addLog(G.age,'Mental health check.','health');toast('Hard but necessary. -'+money(c)+'.');}},
  ]},
  therapy:{title:'Therapy Session',desc:'What are you bringing in today?',opts:[
    {l:'Work through current stress',c:150,fn:function(c){if(G.finances.cash<c){toast('Need '+money(c)+'.');return;}G.finances.cash-=c;recalcNetWorth();applyHidden({stress:-rnd(15,22)});applyStats({happiness:rnd(3,7)});G.flags.in_therapy=true;addLog(G.age,'Therapy.','health');toast('Productive. -'+money(c)+'.');}},
    {l:'Dig into past patterns',c:170,fn:function(c){if(G.finances.cash<c){toast('Need '+money(c)+'.');return;}G.finances.cash-=c;recalcNetWorth();applyHidden({stress:-rnd(10,18),karma:5});applyStats({intelligence:rnd(3,7),happiness:rnd(2,6)});G.flags.in_therapy=true;addLog(G.age,'Deep therapy.','health');toast('Uncomfortable. Useful. -'+money(c)+'.');}},
    {l:'Couples therapy',c:200,fn:function(c){if(!G.npcs.partner||!G.npcs.partner.alive){toast('No partner.');return;}if(G.finances.cash<c){toast('Need '+money(c)+'.');return;}G.finances.cash-=c;recalcNetWorth();G.npcs.partner.trust=Math.min(100,G.npcs.partner.trust+rnd(8,18));G.npcs.partner.closeness=Math.min(100,G.npcs.partner.closeness+rnd(5,12));applyHidden({stress:-rnd(8,14),karma:4});applyStats({happiness:rnd(5,12)});G.flags.in_therapy=true;addLog(G.age,'Couples therapy.','romance');toast('Worth it. -'+money(c)+'.');}},
  ]},
  sleep:{title:'Prioritise Sleep',desc:'Rest is not laziness.',opts:[
    {l:'Early night',fn:function(){applyStats({health:rnd(3,6),happiness:rnd(2,5)});applyHidden({stress:-rnd(5,9)});addLog(G.age,'Early night.','action');toast('Eight hours.');}},
    {l:'Full sleep reset -- no screens',fn:function(){applyStats({health:rnd(6,12),happiness:rnd(5,10)});applyHidden({stress:-rnd(10,18)});G.flags.sleep_routine=true;addLog(G.age,'Sleep reset.','action');toast('Revolutionary.');}},
    {l:'Recovery nap',fn:function(){applyStats({health:rnd(4,8),happiness:rnd(3,7)});applyHidden({stress:-rnd(8,14)});addLog(G.age,'Recovery nap.','action');toast('Needed that.');}},
  ]},
};
function openSelfActionModal(type){
  closeModal();
  var cfg=SELF_OPTS[type];if(!cfg)return;
  var html=cfg.opts.map(function(opt,i){
    var cn=opt.c?'<span style="color:var(--gold);font-size:10px;font-family:var(--fm);margin-left:6px">'+money(opt.c)+'</span>':'';
    return '<button class="btn btn-s" style="text-align:left;padding:13px 14px;line-height:1.4" data-st="'+type+'" data-si="'+i+'" onclick="doSelfAction(this.dataset.st,+this.dataset.si)">'+opt.l+cn+'</button>';
  }).join('');
  showModal(cfg.title,'<div style="font-size:13px;color:var(--dim);font-style:italic;margin-bottom:16px">'+cfg.desc+'</div><div style="display:flex;flex-direction:column;gap:8px">'+html+'</div>');
}
function doSelfAction(type,idx){closeModal();var cfg=SELF_OPTS[type];if(!cfg)return;var opt=cfg.opts[idx];if(!opt)return;opt.fn(opt.c||0);renderStats();save();}
function selfAction(type){openSelfActionModal(type);}


// \u2500\u2500 SOCIALS TAB \u2500\u2500
function openSocialsModal(){
  if(G.age<12){showModal('Social Media','<p style="color:var(--muted);font-style:italic">Social media unlocks at 12.</p>');return;}
  if(!G.fame.ig&&G.fame.ig!==0)G.fame.ig=0;
  if(!G.fame.tt&&G.fame.tt!==0)G.fame.tt=0;
  if(!G.fame.yt&&G.fame.yt!==0)G.fame.yt=0;
  if(!G.fame.fb&&G.fame.fb!==0)G.fame.fb=0;
  if(!G.fame.postsCount)G.fame.postsCount={ig:0,tt:0,yt:0,fb:0};
  if(!G.fame.lastPostAge)G.fame.lastPostAge={ig:null,tt:null,yt:null,fb:null};
  // Follower decay if inactive 2+ years
  ['ig','tt','yt','fb'].forEach(function(p){
    var lp=G.fame.lastPostAge[p];
    if(lp!==null&&(G.age-lp)>=2){G.fame[p]=Math.max(0,Math.round(G.fame[p]*0.92));}
  });
  function ss(lbl,val){return '<div class="social-stat"><span class="ss-label">'+lbl+'</span><span class="ss-val">'+val+'</span></div>';}
  var igAcc=ACC('ig','&#x1F4F8;','Instagram',formatNum(G.fame.ig)+' followers',
    ss('Followers',formatNum(G.fame.ig))+ss('Posts',G.fame.postsCount.ig||0)+ss('Last post',G.fame.lastPostAge.ig!==null?'Age '+G.fame.lastPostAge.ig:'Never')+
    '<div class="acc-actions"><button class="btn btn-sm btn-s" onclick="openPostModal(&apos;ig&apos;,&apos;photo&apos;)">&#x1F4F7; Photo</button>'+
    '<button class="btn btn-sm btn-s" onclick="openPostModal(&apos;ig&apos;,&apos;story&apos;)">&#x2728; Story</button>'+
    '<button class="btn btn-sm btn-s" onclick="openPostModal(&apos;ig&apos;,&apos;reel&apos;)">&#x1F3AC; Reel</button></div>');
  var ttAcc=ACC('tt','&#x1F3B5;','TikTok',formatNum(G.fame.tt)+' followers',
    ss('Followers',formatNum(G.fame.tt))+ss('Videos',G.fame.postsCount.tt||0)+ss('Last post',G.fame.lastPostAge.tt!==null?'Age '+G.fame.lastPostAge.tt:'Never')+
    '<div class="acc-actions"><button class="btn btn-sm btn-s" onclick="openPostModal(&apos;tt&apos;,&apos;dance&apos;)">&#x1F483; Dance</button>'+
    '<button class="btn btn-sm btn-s" onclick="openPostModal(&apos;tt&apos;,&apos;vlog&apos;)">&#x1F4F9; Vlog</button>'+
    '<button class="btn btn-sm btn-s" onclick="openPostModal(&apos;tt&apos;,&apos;trend&apos;)">&#x1F525; Trend</button></div>');
  var ytAcc=ACC('yt','&#x25B6;&#xFE0F;','YouTube',formatNum(G.fame.yt)+' subs',
    ss('Subs',formatNum(G.fame.yt))+ss('Videos',G.fame.postsCount.yt||0)+
    '<div class="acc-actions"><button class="btn btn-sm btn-s" onclick="openPostModal(&apos;yt&apos;,&apos;vlog&apos;)">&#x1F3AC; Upload</button>'+
    '<button class="btn btn-sm btn-s" onclick="openPostModal(&apos;yt&apos;,&apos;podcast&apos;)">&#x1F399; Podcast</button></div>');
  var fbAcc=ACC('fb','&#x1F4D8;','Facebook',formatNum(G.fame.fb)+' friends',
    ss('Friends',formatNum(G.fame.fb))+
    '<div class="acc-actions"><button class="btn btn-sm btn-s" onclick="openPostModal(&apos;fb&apos;,&apos;status&apos;)">&#x1F4AC; Post</button></div>');
  var allPeople=[G.npcs.mother,G.npcs.father].concat(G.npcs.friends).filter(function(n){return n&&n.alive;});
  if(G.npcs.partner&&G.npcs.partner.alive)allPeople.push(G.npcs.partner);
  var icons={mother:'&#x1F469;',father:'&#x1F468;',partner:'&#x2764;&#xFE0F;',friend:'&#x1F9D1;'};
  var waContacts=allPeople.map(function(n){
    return '<div style="display:flex;align-items:center;gap:10px;padding:10px 4px;border-bottom:1px solid var(--border)">'+
      '<span style="font-size:16px">'+(icons[n.relationship]||'&#x1F9D1;')+'</span>'+
      '<span style="flex:1;font-size:13px;color:var(--text)">'+n.name+'</span>'+
      '<button class="btn btn-sm btn-s" data-nid="'+n.id+'" onclick="callPerson(this.dataset.nid)">&#x1F4DE;</button>'+
      '<button class="btn btn-sm btn-s" data-nid="'+n.id+'" onclick="textPerson(this.dataset.nid)">&#x1F4AC;</button></div>';
  }).join('');
  var waAcc=ACC('wa','&#x1F4AC;','WhatsApp',allPeople.length+' contacts',waContacts||'<p style="color:var(--muted);font-size:12px">No contacts yet.</p>');
  var moods=[['happy','&#x1F60A; Happy'],['sad','&#x1F622; Sad'],['hype','&#x1F525; Hype'],['chill','&#x1F60C; Chill'],['workout','&#x1F4AA; Workout'],['romance','&#x2764;&#xFE0F; Romance'],['focused','&#x1F610; Focused'],['late night','&#x1F319; Late Night']];
  var moodBtns=moods.map(function(m){return '<button class="btn btn-sm btn-s" data-mood="'+m[0]+'" onclick="playMood(this.dataset.mood)" style="text-align:left;padding:10px 12px">'+m[1]+'</button>';}).join('');
  var izzyAcc=ACC('izzy','&#x1F3B5;',"Izzy's Music",'Your vibe',
    '<div style="font-size:13px;color:var(--dim);font-style:italic;margin-bottom:12px">Choose your mood.</div>'+
    '<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">'+moodBtns+'</div>');
  showModal('Socials',igAcc+ttAcc+ytAcc+fbAcc+waAcc+izzyAcc);
}

/* === POST MODAL === */
var POST_CFG={
  ig:{photo:{lbl:'Photo Post',opts:[{q:'Casual snap',m:0.5,d:'Low effort, low reach.'},{q:'Curated aesthetic',m:1.2,d:'Good lighting. Solid engagement.'},{q:'Professional shoot',m:2.5,c:200,d:'Hired a photographer. Polished and shareable.'}]},
      story:{lbl:'Story',opts:[{q:'Casual update',m:0.4,d:'Quick. Disappears in 24 hrs.'},{q:'Interactive story',m:0.9,d:'Poll / Q&A. Algorithm likes it.'}]},
      reel:{lbl:'Reel',opts:[{q:'Quick reel',m:1.0,d:'Shot on phone. Decent reach.'},{q:'Edited reel',m:2.0,d:'Proper edit with trending music.'},{q:'Viral-bait reel',m:3.5,d:'Engineered for virality. High risk, high reward.'}]}},
  tt:{dance:{lbl:'Dance Video',opts:[{q:'Casual dance',m:0.8,d:'Just vibing.'},{q:'Trending sound + choreo',m:2.2,d:'On trend. Algorithm-friendly.'},{q:'Original choreo',m:4.0,d:'Creative. Could blow up or flop.'}]},
      vlog:{lbl:'Vlog',opts:[{q:'Quick day vlog',m:0.7,d:'Raw. Niche audience.'},{q:'Edited lifestyle vlog',m:1.8,d:'Polished. Broader appeal.'}]},
      trend:{lbl:'Trending Challenge',opts:[{q:'Join the trend',m:1.5,d:'Jump on while it is hot.'},{q:'Add a unique twist',m:3.0,d:'Stand out. Higher ceiling.'}]}},
  yt:{vlog:{lbl:'YouTube Video',opts:[{q:'Raw upload',m:0.5,d:'Minimal editing.'},{q:'Edited video (10-15 min)',m:1.5,d:'Proper structure, thumbnail, SEO.'},{q:'High production video',m:3.0,c:300,d:'Professional edit. Channel growth.'}]},
      podcast:{lbl:'Podcast Episode',opts:[{q:'Solo episode',m:0.6,d:'Just you.'},{q:'Guest interview',m:1.8,d:'Guest brings their audience too.'}]}},
  fb:{status:{lbl:'Facebook Post',opts:[{q:'Status update',m:0.3,d:'Text only.'},{q:'Photo + story',m:0.7,d:'Personal moment. Friends engage.'}]}},
};
var PLAT_BASE={ig:{photo:[20,120],story:[5,40],reel:[80,400]},tt:{dance:[100,600],vlog:[60,300],trend:[200,1000]},yt:{vlog:[10,80],podcast:[15,100]},fb:{status:[5,30]}};

function openPostModal(platform,type){
  closeModal();
  var cfg=POST_CFG[platform]&&POST_CFG[platform][type];if(!cfg)return;
  var html=cfg.opts.map(function(o,i){
    var cn=o.c?'<span style="color:var(--gold);font-size:10px;font-family:var(--fm);margin-left:5px">'+money(o.c)+'</span>':'';
    return '<button class="btn btn-s" style="text-align:left;padding:13px 14px;line-height:1.45" data-plat="'+platform+'" data-typ="'+type+'" data-idx="'+i+'" onclick="submitPost(this.dataset.plat,this.dataset.typ,+this.dataset.idx)">'+
      '<div>'+o.q+cn+'</div><div style="font-size:11px;color:var(--dim);margin-top:3px;font-family:var(--fm)">'+o.d+'</div></button>';
  }).join('');
  showModal(cfg.lbl,
    '<div style="font-size:12px;color:var(--muted);font-family:var(--fm);margin-bottom:14px">'+
    formatNum(G.fame[platform]||0)+' followers &nbsp;|&nbsp; Posts: '+(G.fame.postsCount&&G.fame.postsCount[platform]||0)+'</div>'+
    '<div style="display:flex;flex-direction:column;gap:8px">'+html+'</div>');
}

function submitPost(platform,type,idx){
  closeModal();
  if(!G.fame.postsCount)G.fame.postsCount={ig:0,tt:0,yt:0,fb:0};
  if(!G.fame.lastPostAge)G.fame.lastPostAge={ig:null,tt:null,yt:null,fb:null};
  var cfg=POST_CFG[platform]&&POST_CFG[platform][type];
  var opt=cfg?cfg.opts[idx]:null;
  if(opt&&opt.c){if(G.finances.cash<opt.c){toast('Need '+money(opt.c)+' for this.');return;}G.finances.cash-=opt.c;recalcNetWorth();}
  var br=PLAT_BASE[platform]&&PLAT_BASE[platform][type];
  var baseGain=br?rnd(br[0],br[1]):rnd(10,60);
  var mult=opt?opt.m:1.0;
  var boost=1.0+(['afrobeats','hiphop','rnb','music_production'].includes(G.career.path)?0.4:0)+(['acting','comedy','influencer'].includes(G.career.path)?0.35:0)+(G.flags.media_savvy?0.15:0)+(G.fame.level>=1?0.2:0);
  var curr=G.fame[platform]||0;
  var compound=curr>0?Math.log10(curr+10)*0.12:0;
  var gain=Math.round(baseGain*mult*boost*(1+compound));
  // Viral spike -- 5% chance x10-50
  var wentViral=false;
  if(Math.random()<0.05){gain=Math.round(gain*rnd(10,50));wentViral=true;}
  // Low-quality flop (high post count + low mult)
  if((G.fame.postsCount[platform]||0)>20&&mult<1.0&&Math.random()<0.15){
    gain=Math.max(1,Math.round(gain*0.15));
    addTimelineEntry('down','Post fell flat. Algorithm buried it.','action');
    toast('Low engagement. Try better content.');
  }
  if(!G.fame[platform]&&G.fame[platform]!==0)G.fame[platform]=0;
  G.fame[platform]+=gain;
  G.fame.postsCount[platform]=(G.fame.postsCount[platform]||0)+1;
  G.fame.lastPostAge[platform]=G.age;
  // Sync fanCount
  G.fame.fanCount=(G.fame.ig||0)+(G.fame.tt||0)+(G.fame.yt||0)+(G.fame.fb||0);
  G.fame.popularity=Math.min(100,G.fame.popularity+Math.ceil(gain/1000));
  var total=G.fame.fanCount;
  if(total>10000&&!G.flags.media_savvy)G.flags.media_savvy=true;
  if(total>50000&&G.fame.level<1){G.fame.level=1;addLog(G.age,'Building a real online presence.','career');addTimelineEntry('up','50K followers. People are paying attention.','career');}
  if(total>500000&&G.fame.level<2){G.fame.level=2;addLog(G.age,'National-level online fame.','career');addTimelineEntry('up','500K followers. National recognition online.','career');}
  if(total>5000000&&G.fame.level<3){G.fame.level=3;addLog(G.age,'Global online fame.','career');addTimelineEntry('up','5M+ followers. Global reach achieved.','career');}
  var pName={ig:'Instagram',tt:'TikTok',yt:'YouTube',fb:'Facebook'}[platform]||platform;
  if(wentViral){addTimelineEntry('up','Post went viral on '+pName+'! +'+formatNum(gain)+' followers.','career');toast('VIRAL! +'+formatNum(gain)+' on '+pName+' &#x1F525;');}
  else{addLog(G.age,'Posted on '+pName+'.','action');toast('+'+formatNum(gain)+' followers on '+pName+'.');}
  renderStats();save();
}


function formatNum(n){if(!n)return'0';if(n>=1000000)return(n/1000000).toFixed(1)+'M';if(n>=1000)return(n/1000).toFixed(0)+'K';return n.toString();}
function postSocial(platform,type){openPostModal(platform,type);}
function textPerson(id){
  var n=getNPC(id);if(!n||!n.alive){toast('Cannot reach them.');return;}
  n.closeness=Math.min(100,(n.closeness||0)+rnd(2,5));
  addLog(G.age,'Texted '+n.name+'.','action');save();toast('Texted '+n.name+'.');
}
function playMood(mood){
  closeModal();
  applyStats({happiness:rnd(3,8)});applyHidden({stress:-rnd(4,8)});
  renderStats();save();toast('Now playing: '+mood+' vibes 🎵');
}

// \u2500\u2500 ACTIONS TAB \u2500\u2500

function openHustleModal(){
  if(G.age < 16){
    showModal('Hustle','<p style="color:var(--muted);font-style:italic">Hustles unlock at 16. Focus on school for now.</p>');
    return;
  }
  var active = G.hustle.active || [];
  var biz    = G.business || {};
  var bizHTML = '';
  if(biz.active){
    var profit = (biz.revenue||0) - (biz.expenses||0);
    var profitColor = profit >= 0 ? 'var(--success)' : 'var(--danger)';
    bizHTML = '<div style="background:var(--s2);border:1px solid var(--border);border-radius:6px;padding:14px;margin-bottom:14px">'+
      '<div style="font-family:var(--fd);font-size:18px;color:var(--orange)">' + biz.name + '</div>'+
      '<div style="font-family:var(--fm);font-size:9px;color:var(--cyan);letter-spacing:.1em;margin-bottom:10px">' + biz.type + ' · Level ' + biz.level + '</div>'+
      SR('Growth', Math.min(100, (biz.level||1)*20), 'var(--orange)')+
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:10px 0">'+
        '<div class="mi"><div class="mi-lbl">Revenue/yr</div><div class="mi-val acc">' + money(biz.revenue) + '</div></div>'+
        '<div class="mi"><div class="mi-lbl">Expenses/yr</div><div class="mi-val neg">' + money(biz.expenses) + '</div></div>'+
        '<div class="mi"><div class="mi-lbl">Profit/yr</div><div class="mi-val" style="color:'+profitColor+'">' + money(profit) + '</div></div>'+
        '<div class="mi"><div class="mi-lbl">Total Earned</div><div class="mi-val acc">' + money(biz.totalProfit||0) + '</div></div>'+
      '</div>'+
      '<div style="display:flex;gap:7px;flex-wrap:wrap">'+
        '<button class="btn btn-sm btn-s" onclick="growBusiness()">&#128200; Invest in Growth</button>'+
        '<button class="btn btn-sm btn-s" onclick="pivotBusiness()">&#128260; Pivot</button>'+
        '<button class="btn btn-sm btn-s" style="color:var(--danger);border-color:var(--danger)" onclick="closeBusiness()">&#128683; Close</button>'+
      '</div>'+
    '</div>';
  }
  var activeHTML = '';
  if(active.length){
    activeHTML = '<div class="pl-lbl" style="margin-bottom:10px">Your Hustles</div>';
    active.forEach(function(slot){
      var ht = HUSTLE_TYPES[slot.type]; if(!ht) return;
      var lvlName = ht.levelNames[slot.level-1] || 'Expert';
      var xpPct   = Math.min(100, Math.round(((slot.xp||0)/(slot.xpNeeded||100))*100));
      var canBiz  = slot.level >= 3 && !biz.active;
      activeHTML +=
        '<div style="background:var(--s2);border:1px solid var(--border);border-radius:6px;padding:13px;margin-bottom:10px">'+
          '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">'+
            '<span style="font-size:20px">'+ht.icon+'</span>'+
            '<div><div style="font-size:14px;color:var(--text)">'+ht.name+'</div>'+
            '<div style="font-family:var(--fm);font-size:9px;color:var(--cyan)">'+lvlName+'</div></div>'+
            '<div style="margin-left:auto;text-align:right">'+
              '<div style="font-family:var(--fm);font-size:12px;color:var(--orange)">'+money(slot.income*12)+'/yr</div>'+
              '<div style="font-family:var(--fm);font-size:8px;color:var(--muted)">Level '+slot.level+'/5</div>'+
            '</div>'+
          '</div>'+
          SR('Progress to next level', xpPct, 'var(--cyan)')+
          '<div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:8px">'+
            '<button class="btn btn-sm btn-s" data-htype="'+slot.type+'" onclick="pushHustle(this.dataset.htype)">&#9889; Put in Work</button>'+
            (canBiz?'<button class="btn btn-sm btn-s" data-htype="'+slot.type+'" onclick="convertHustleToBusiness(this.dataset.htype)" style="color:var(--gold);border-color:var(--gold)">&#127970; Launch Business</button>':'')+
            '<button class="btn btn-sm btn-s" data-htype="'+slot.type+'" onclick="stopHustle(this.dataset.htype)" style="color:var(--danger);border-color:var(--danger)">&#10005; Stop</button>'+
          '</div>'+
        '</div>';
    });
  }
  var availHTML = '';
  if(active.length < 2){
    availHTML = '<div class="pl-lbl" style="margin:'+(active.length?'14px':'0')+' 0 10px">Start a Hustle</div>';
    Object.keys(HUSTLE_TYPES).forEach(function(k){
      var ht = HUSTLE_TYPES[k];
      if(active.some(function(s){return s.type===k;})) return;
      var skillVal  = G.stats[ht.skillReq]||0;
      var canStart  = G.age >= ht.ageMin && skillVal >= ht.skillMin;
      var lockReason = G.age < ht.ageMin ? 'Unlocks at '+ht.ageMin
        : skillVal < ht.skillMin ? ht.skillReq+' too low ('+Math.round(skillVal)+'/'+ht.skillMin+')' : '';
      availHTML +=
        '<div style="background:var(--s2);border:1px solid var(--border);border-radius:6px;padding:12px;margin-bottom:8px;opacity:'+(canStart?'1':'.45')+'">'+
          '<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">'+
            '<span style="font-size:18px">'+ht.icon+'</span>'+
            '<div><div style="font-size:13px;color:var(--text)">'+ht.name+'</div>'+
            '<div style="font-family:var(--fm);font-size:9px;color:var(--muted)">'+ht.desc+'</div></div>'+
            '<div style="margin-left:auto;font-family:var(--fm);font-size:10px;color:var(--cyan)">'+money(ht.incomeBase*12)+'/yr</div>'+
          '</div>'+
          (canStart
            ?'<button class="btn btn-sm btn-p" data-htype="'+k+'" onclick="startHustle(this.dataset.htype)">Start</button>'
            :'<div style="font-family:var(--fm);font-size:9px;color:var(--muted)">'+lockReason+'</div>')+
        '</div>';
    });
  } else {
    availHTML = '<div style="font-family:var(--fm);font-size:10px;color:var(--muted);padding:8px 0">Max 2 hustles active at once.</div>';
  }
  showModal('Hustle & Business', bizHTML + activeHTML + availHTML);
}
function pushHustle(type){
  closeModal();
  var slot=(G.hustle.active||[]).find(function(s){return s.type===type;});if(!slot)return;
  var ht=HUSTLE_TYPES[type];if(!ht)return;
  var statVal=G.stats[ht.skillReq]||50;
  var xpGain=rnd(15,30)+Math.round(statVal/10);
  slot.xp=(slot.xp||0)+xpGain;
  if(slot.level<5&&slot.xp>=(slot.xpNeeded||100)){
    slot.level++;slot.xp=0;slot.xpNeeded=100+slot.level*50;
    var oldIncome=slot.income;
    slot.income=ht.incomePerLevel[slot.level]||slot.income;
    G.finances.annualIncome=Math.max(0,G.finances.annualIncome-oldIncome*12);
    G.finances.annualIncome+=slot.income*12;
    addLog(G.age,ht.name+' levelled up: '+ht.levelNames[slot.level-1]+'.','career');
    toast(ht.name+' — Level '+slot.level+'! '+money(slot.income*12)+'/yr');
  } else {
    var evt=pick(ht.growthEvents);addLog(G.age,evt,'career');toast(evt);
  }
  applyHidden({stress:rnd(3,7)});renderStats();save();
}
function stopHustle(type){
  closeModal();
  var slot=(G.hustle.active||[]).find(function(s){return s.type===type;});
  if(slot){G.finances.annualIncome=Math.max(0,G.finances.annualIncome-slot.income*12);}
  G.hustle.active=(G.hustle.active||[]).filter(function(s){return s.type!==type;});
  var ht=HUSTLE_TYPES[type];
  addLog(G.age,'Stopped '+(ht?ht.name:'hustle')+'.','career');
  renderStats();save();toast('Hustle stopped.');
}
function convertHustleToBusiness(type){
  closeModal();
  var slot=(G.hustle.active||[]).find(function(s){return s.type===type;});
  if(!slot||slot.level<3){toast('Need Level 3 to launch a business.');return;}
  if(G.business&&G.business.active){toast('You already have a business running.');return;}
  var ht=HUSTLE_TYPES[type];if(!ht)return;
  var cost=rnd(2000,8000);
  if(G.finances.cash<cost){toast('Need '+money(cost)+' to launch.');return;}
  G.finances.cash-=cost;
  var suffixes={freelance:['Studio','Creative','Agency'],music_gigs:['Records','Sound','Music Group'],content:['Media','Digital','Creative'],tutoring:['Academy','Learning','Education']};
  var bName=G.name.split(' ')[0]+' '+pick(suffixes[type]||['Ventures']);
  G.business={active:true,name:bName,type:ht.name,level:1,revenue:slot.income*12*1.5,expenses:slot.income*12*0.4,totalProfit:0,founded:G.age,staff:0};
  G.finances.annualIncome=Math.max(0,G.finances.annualIncome-slot.income*12);
  G.hustle.active=(G.hustle.active||[]).filter(function(s){return s.type!==type;});
  addLog(G.age,'Launched '+bName+'.','career');
  recalcNetWorth();renderStats();save();
  toast(bName+' is open! Skills → Hustle → Business.');
}
function growBusiness(){
  closeModal();if(!G.business||!G.business.active)return;
  var invest=Math.min(G.finances.cash,rnd(1000,5000));
  if(G.finances.cash<500){toast('Need at least '+money(500)+' to invest.');return;}
  G.finances.cash-=invest;
  if(Math.random()>0.3){
    var gain=invest*rnd(15,35)/10;G.business.revenue+=gain;
    if(G.business.level<5&&G.business.revenue>G.business.level*15000){
      G.business.level++;addLog(G.age,G.business.name+' reached Level '+G.business.level+'.','career');
      toast(G.business.name+' growing — Level '+G.business.level+'!');
    } else {toast('Investment paid off. Revenue +'+money(gain)+'/yr.');}
  } else {addLog(G.age,'Investment in '+G.business.name+' underperformed.','career');toast('That one did not pay off.');}
  recalcNetWorth();renderStats();save();
}
function pivotBusiness(){
  closeModal();if(!G.business||!G.business.active)return;
  G.business.expenses=Math.max(0,G.business.expenses*0.85);
  G.business.revenue=G.business.revenue*(Math.random()>0.4?1.1:0.9);
  addLog(G.age,G.business.name+' pivoted strategy.','career');renderStats();save();
  toast('Pivot done. Results take time.');
}
function closeBusiness(){
  closeModal();if(!G.business||!G.business.active)return;
  var name=G.business.name;
  G.finances.cash+=Math.max(0,G.business.revenue*0.5);
  G.business={active:false,revenue:0,expenses:0,level:0,staff:0,founded:null,name:null,type:null};
  addLog(G.age,'Closed '+name+'.','career');recalcNetWorth();renderStats();save();
  toast(name+' closed.');
}

function openActionsModal(){
  showModal('Actions',
    '<div class="pl-lbl" style="margin-bottom:10px">Things to Do</div>'+
    '<div style="display:flex;flex-direction:column;gap:8px">'+
    '<button class="btn btn-s" onclick="actionDo(&apos;holiday&apos;)">&#x2708;&#xFE0F; Go on Holiday</button>'+
    '<button class="btn btn-s" onclick="actionDo(&apos;club&apos;)">&#x1F389; Go to the Club</button>'+
    '<button class="btn btn-s" onclick="actionDo(&apos;gambling&apos;)">&#x1F3B0; Gamble / Casino</button>'+
    (G.age>=18?'<button class="btn btn-s" onclick="actionDo(&apos;lottery&apos;)">&#x1F39F;&#xFE0F; Buy Lottery Ticket</button>':'')+
    '<button class="btn btn-s" onclick="actionDo(&apos;volunteer&apos;)">&#x1F91D; Volunteer</button>'+
    '<button class="btn btn-s" onclick="actionDo(&apos;donate&apos;)">&#x1F495; Donate to Charity</button>'+
    '<div style="border-top:1px solid var(--border);margin:8px 0;padding-top:8px">'+
    '<div class="pl-lbl" style="margin-bottom:8px">Move</div>'+
    '<button class="btn btn-s" style="color:var(--cyan);border-color:var(--cyan)" onclick="closeModal();openRelocateModal()">&#x1F4CD; Relocate Within Country</button>'+
    '<button class="btn btn-s" style="color:var(--orange);border-color:var(--orange);margin-top:8px" onclick="closeModal();openEmigrationModal()">&#x2708;&#xFE0F; Emigrate to Another Country</button>'+
    '</div>'+
    '<div style="border-top:1px solid var(--border);margin:8px 0;padding-top:8px">'+
    '<div class="pl-lbl" style="margin-bottom:8px">Crime</div>'+
    '<button class="btn btn-s" style="color:var(--danger);border-color:var(--danger)" onclick="actionDo(&apos;rob&apos;)">&#x1F52B; Rob Someone</button>'+
    '<button class="btn btn-s" style="color:var(--danger);border-color:var(--danger);margin-top:8px" onclick="actionDo(&apos;fight&apos;)">&#x1F44A; Pick a Fight</button>'+
    '</div>'+
    '</div>'
  );
}
function actionDo(type){
  closeModal();
  var actions={
    holiday:()=>{
      var cost=rnd(800,4000);if(G.finances.cash<cost){toast('Need '+money(cost)+' for a holiday.');return;}
      G.finances.cash-=cost;recalcNetWorth();applyStats({happiness:rnd(12,22)});applyHidden({stress:-rnd(15,25)});
      addLog(G.age,'Went on holiday.','action');renderStats();save();toast('Back from holiday. Completely recharged.');
    },
    club:()=>{
      var cost=rnd(30,120);if(G.finances.cash<cost){toast('Need '+money(cost)+'.');return;}
      G.finances.cash-=cost;recalcNetWorth();
      applyStats({happiness:rnd(8,16)});applyHidden({stress:-rnd(8,15)});
      if(Math.random()<.2){applyHidden({stress:10});toast('Great night but a bit too much.');}
      else toast('Good night out.');
      addLog(G.age,'Night out at the club.','action');renderStats();save();
    },
    gambling:()=>{
      var bet=Math.min(G.finances.cash,rnd(50,Math.max(100,Math.round(G.finances.cash*.1))));
      if(G.finances.cash<50){toast('Need at least '+money(50)+'.');return;}
      G.finances.cash-=bet;
      if(Math.random()<.42){var win=Math.round(bet*(1+Math.random()*2));G.finances.cash+=win;recalcNetWorth();addLog(G.age,'Won '+money(win)+' gambling.','action');renderStats();save();toast('Won! +'+money(win-bet)+' net.');}
      else{recalcNetWorth();addLog(G.age,'Lost '+money(bet)+' gambling.','action');renderStats();save();applyStats({happiness:-rnd(3,8)});toast('Lost '+money(bet)+'. House wins again.');}
    },
    lottery:()=>{
      if(G.finances.cash<5){toast('Need at least '+money(5)+'.');return;}
      G.finances.cash-=5;
      if(Math.random()<.003){var win=rnd(50000,1000000);G.finances.cash+=win;recalcNetWorth();addLog(G.age,'WON THE LOTTERY -- '+money(win)+'!','career');renderStats();save();toast('YOU WON THE LOTTERY! 🎉 +'+money(win));}
      else{recalcNetWorth();renderStats();save();toast('Not this time.');}
    },
    volunteer:()=>{applyHidden({karma:rnd(5,12)});applyStats({happiness:rnd(4,10)});addLog(G.age,'Volunteered.','action');renderStats();save();toast('Giving back feels good.');},
    donate:()=>{
      var amt=Math.min(G.finances.cash,Math.round(G.finances.cash*.05)+rnd(20,200));
      if(G.finances.cash<20){toast('Not enough to donate.');return;}
      G.finances.cash-=amt;recalcNetWorth();applyHidden({karma:rnd(6,14)});applyStats({happiness:rnd(5,10)});
      addLog(G.age,'Donated '+money(amt)+'.','action');renderStats();save();toast('Donated '+money(amt)+'. Good.');
    },
    rob:()=>{
      var chance=0.4;
      if(Math.random()<chance){var loot=rnd(50,500);G.finances.cash+=loot;applyHidden({karma:-rnd(15,25),reputation:-10,stress:15});G.flags.ever_arrested=G.flags.ever_arrested||false;addLog(G.age,'Robbed someone -- got away.','crime');renderStats();save();toast('Got '+money(loot)+' but this sits heavy.');}
      else{G.flags.arrested=true;G.flags.ever_arrested=true;G.flags.convicted=true;var fine=rnd(200,2000);G.finances.cash-=fine;applyHidden({karma:-20,reputation:-20,stress:30});applyStats({happiness:-15});addLog(G.age,'Arrested for robbery.','crime');renderStats();save();toast('Caught. Arrested. Criminal record. '+money(fine)+' fine.');}
    },
    fight:()=>{
      if(Math.random()<.5){applyStats({health:-rnd(5,15)});addLog(G.age,'Got into a fight -- took a hit.','crime');renderStats();save();toast('Came off worse. Health down.');}
      else{applyHidden({reputation:-5,karma:-8,stress:10});addLog(G.age,'Got into a fight.','crime');renderStats();save();toast('You won. But for what?');}
    },
  };
  var fn=actions[type];if(fn)fn();
}

// \u2500\u2500 JOBS TAB \u2500\u2500
function openJobsModal(){
  var yr=G.world.year||2020;
  var jobs=getJobBoard(yr);
  var rows=jobs.map((j,i)=>`<div class="job-row">
    <div class="job-title">${j.title}</div>
    <div class="job-meta">${j.company} \u00b7 Salary: <span>${money(j.salary)}/yr</span> \u00b7 Demand: ${j.demand}</div>
    <button class="btn btn-sm btn-s" onclick="applyForJob(${i})">Apply</button>
  </div>`).join('');
  showModal('Job Board -- '+yr,rows||'<p style="color:var(--muted)">No listings right now.</p>');
}

function getJobBoard(yr){
  var base=(COUNTRIES[G.country] ? COUNTRIES[G.country].salaryFactor : undefined)||.5;
  var jobs=[
    {title:'Software Engineer',company:'Tech Startup',salary:Math.round(55000*base),demand:'High',req:60},
    {title:'Marketing Executive',company:'Agency',salary:Math.round(32000*base),demand:'Medium',req:45},
    {title:'Financial Analyst',company:'Bank',salary:Math.round(45000*base),demand:'High',req:55},
    {title:'Teacher',company:'Secondary School',salary:Math.round(30000*base),demand:'Very High',req:50},
    {title:'Nurse',company:'Hospital',salary:Math.round(35000*base),demand:'Very High',req:55},
    {title:'Sales Rep',company:'Various',salary:Math.round(22000*base),demand:'High',req:30},
    {title:'Content Creator',company:'Self-Employed',salary:Math.round(18000*base),demand:'Medium',req:35},
    {title:'Journalist',company:'Media House',salary:Math.round(28000*base),demand:'Low',req:50},
  ];
  return jobs.filter(j=>G.stats.intelligence>=(j.req-10));
}

function applyForJob(idx){
  closeModal();
  var jobs=getJobBoard(G.world.year);var j=jobs[idx];if(!j)return;
  var chance=Math.min(0.9,((G.stats.intelligence+G.hidden.reputation)/2)/100);
  if(Math.random()<chance){
    enterCareerPath('corporate',1);G.career.title=j.title;G.career.salary=j.salary;G.finances.annualIncome=j.salary;
    G.flags.first_job=true;G.flags.career_path_started=true;
    addLog(G.age,'Got job: '+j.title+' at '+j.company+'.','career');renderStats();save();
    toast('You got the job! '+j.title+' -- '+money(j.salary)+'/yr 🎉');
  } else {
    addLog(G.age,'Applied for '+j.title+' -- not selected.','action');save();
    toast('Not selected this time. Keep building your profile.');
  }
}

// \u2500\u2500 LOG TAB \u2500\u2500
function openLogModal(){
  var grouped={};
  G.lifeLog.slice().reverse().forEach(e=>{
    if(!grouped[e.age])grouped[e.age]=[];
    grouped[e.age].push(e);
  });
  var html='';
  Object.entries(grouped).slice(0,30).forEach(([age,events])=>{
    html+=`<div style="margin-bottom:14px">
      <div style="font-family:var(--fm);font-size:11px;color:var(--orange);font-weight:600;margin-bottom:5px">Age ${age}</div>
      ${events.map(e=>`<div class="le-item cat-${e.category}" style="padding:2px 0;font-size:12px">\u2022 ${e.title}</div>`).join('')}
    </div>`;
  });
  showModal('Life Log',html||'<p style="color:var(--muted)">Nothing yet.</p>');
}

/* === SECTION 15: GAME CONTROLLER === */
var _chainQueue=[];


// ============================================================
// UPDATED ageUp — passive logs + chain priority + harder difficulty
// ============================================================

// Harder difficulty multipliers
var DIFFICULTY = {
  statDecayMult: 1.4,      // stats fall faster
  negativeEventChance: 0.15, // extra chance of negative twist
  promoSlowdown: 0.6,       // career promotions 40% harder
  expenseMult: 1.25,        // expenses 25% higher
};

function ageUp() {
  if (!G || G._awaiting) return;
  G.age++;
  G.world.year++;

  updateEducation();
  updateCareer();
  updateHustles();
  updateBusiness();
  naturalDecay();
  crossStats();
  annualFinance();
  updateFame();
  ageNPCs();
  decayRel();
  advancePregnancy();   // tick pregnancy timer
  checkAchievements();

  if (!checkThresholds()) return;

  // ── Passive log entries every year ──────────────────────────
  var passives = getPassiveLogs(G.age);
  passives.forEach(function(txt) {
    addTimelineEntry('neutral', txt, 'general');
  });

  // ── Age-based automatic passive events ──────────────────────
  generateAgePassives();

  // ── Enforce age restrictions ─────────────────────────────────
  enforceAgeRestrictions();

  // ── PRIORITY 1: Continue active chain ──────────────────────
  if (G._activeChain) {
    var rendered = processChainStep();
    if (rendered) { renderStats(); save(); return; }
  }

  // ── PRIORITY 2: Start new chain (55% chance) ───────────────
  if (!G._activeChain && Math.random() < 0.55) {
    var newChain = pickChain();
    if (newChain) {
      G._activeChain = {id: newChain.id, step: 0};
      var rendered = processChainStep();
      if (rendered) { renderStats(); save(); return; }
    }
  }

  // ── PRIORITY 3: Milestone events ───────────────────────────
  var countryMilestones = MILESTONE_COUNTRY[G.country] || {};
  var milestoneId = countryMilestones[G.age] || MILESTONE_MAP[G.age];
  if (milestoneId) {
    var mev = EVENTS_CLEAN.find(function(e){ return e.id === milestoneId && !G._fired.includes(e.id); });
    if (mev) {
      G._currentEvent = mev; G._awaiting = true;
      document.getElementById('btn-age').disabled = true;
      renderEvent(mev); renderStats(); save(); return;
    }
  }

  // ── PRIORITY 4: Age-appropriate standalone event (70%) ─────
  if (Math.random() < 0.70) {
    var ev = pickEvent();
    if (ev) {
      G._currentEvent = ev; G._awaiting = true;
      document.getElementById('btn-age').disabled = true;
      renderEvent(ev); renderStats(); save(); return;
    }
  }

  // ── PRIORITY 5: Dynamic spontaneous triggers (25% chance) ──
  if (Math.random() < 0.25) { checkDynamicTriggers(); }

  // ── Always show at least the passive logs ───────────────────
  renderStats(); save();
}

// Age-specific automatic passive events (no choices needed)
function generateAgePassives() {
  var a = G.age;

  // Career seeding events — plant flags that unlock paths later
  if (a === 8 && !G.flags.early_athlete && Math.random() < 0.45) {
    G.flags.childhood_sport = pick(['football','basketball','athletics']);
    addTimelineEntry('up', 'You started playing ' + G.flags.childhood_sport + ' every day after school.', 'general');
  }
  if (a === 9 && !G.flags.musically_gifted && Math.random() < 0.35) {
    G.flags.musically_gifted = true;
    addTimelineEntry('up', 'You found yourself humming melodies you made up. Music lives in you.', 'general');
  }
  if (a === 10 && G.flags.childhood_reader && !G.flags.academic_driven) {
    G.flags.academic_driven = true;
    addTimelineEntry('up', 'Your teachers keep putting you forward for competitions. Something is being recognised.', 'school');
  }
  if (a === 11 && G.flags.childhood_creative && !G.flags.artistic_talent) {
    G.flags.artistic_talent = true;
    addTimelineEntry('up', 'An art teacher kept one of your pieces on the classroom wall for the whole term.', 'school');
  }

  // Early athlete flag plant
  if (a === 12 && G.flags.childhood_sport && !G.flags.early_athlete) {
    if (G.stats.health > 55) {
      G.flags.early_athlete = true;
      addTimelineEntry('up', 'Your ' + G.flags.childhood_sport + ' coach pulled you aside. You\'re better than most kids your age.', 'career');
    }
  }

  // Entrepreneurial seed
  if (a === 13 && !G.flags.entrepreneurial_early && Math.random() < 0.3) {
    G.flags.entrepreneurial_early = true;
    addTimelineEntry('up', 'You sold something — snacks, phone credit, anything — and kept the profit. The logic clicked.', 'career');
  }

  // Social media awareness
  if (a === 12 && !G.flags.media_savvy && Math.random() < 0.5) {
    G.flags.media_savvy = true;
  }

  // University application nudge
  if (a === 17 && G.education.stage === 'secondary' && !G.education.uniApplied) {
    if (G.education.secondaryGrade >= 50 || G.flags.strong_secondary_results) {
      addTimelineEntry('neutral', 'University application forms are out. You have been thinking about what to write.', 'school');
    }
  }

  // Career path build-up logs (before the actual choice age)
  if (G.career.path === null) {
    var gate = null;
    Object.keys(CAREER_AGE_GATES).forEach(function(pid) {
      var g = CAREER_AGE_GATES[pid];
      if (g.seedFlag && G.flags[g.seedFlag] && a === g.choiceAge - 1) {
        gate = {pathId: pid, gate: g};
      }
    });
    if (gate) {
      var cp = CAREER_PATHS[gate.pathId];
      if (cp) {
        addTimelineEntry('neutral', 'You are getting close to an age where ' + cp.label + ' becomes a real possibility. The question is whether you want it.', 'career');
      }
    }
  }

  // Harder difficulty: random stat knock every few years
  if (a > 20 && a % 4 === 0 && Math.random() < 0.3) {
    var knockType = pick(['health','happiness','looks']);
    var knockAmt = rnd(3, 8);
    G.stats[knockType] = Math.max(0, G.stats[knockType] - knockAmt);
    var msgs = {
      health: 'A run of poor sleep and bad eating caught up with you.',
      happiness: 'A restlessness settled in that you could not shake for a while.',
      looks: 'Time doing its quiet, incremental work.',
    };
    addTimelineEntry('down', msgs[knockType], 'health');
  }
}

// Updated enforceAgeRestrictions — hard gates
function enforceAgeRestrictions() {
  // Under 5: no school
  if (G.age < 5 && G.education.stage !== 'none') {
    G.education.stage = 'none';
  }
  // 5-10: primary only
  if (G.age >= 5 && G.age <= 10) {
    if (G.education.stage !== 'primary' && G.education.stage !== 'none') {
      G.education.stage = 'primary';
    }
  }
  // 11-16: secondary only (unless already done)
  if (G.age >= 11 && G.age <= 16) {
    if (G.education.stage === 'university' || G.education.stage === 'graduate') {
      G.education.stage = 'secondary'; // revert invalid state
    }
  }
  // Under 12: no social media scoring
  if (G.age < 12) G.fame.popularity = Math.min(G.fame.popularity, 15);
  // Under 14: no dating
  if (G.age < 14) G.flags.in_relationship = false;
  // Under 16: no hustles (except content from 12)
  if (G.age < 16 && G.hustle && G.hustle.active) {
    G.hustle.active = G.hustle.active.filter(function(h) {
      return (h.type === 'content' && G.age >= 12);
    });
  }
  // Under 18: no alcohol/club events — enforced by event flags
  if (G.age < 18) G.flags.tried_alcohol = G.flags.tried_alcohol || false;
  // Under 16: no career paths except seedable ones
  if (G.age < 13 && G.career.path !== null) {
    var gate = CAREER_AGE_GATES[G.career.path];
    if (!gate || G.age < gate.choiceAge) {
      // Career started too early — reset
      G.career.path = null;
      G.career.title = 'Student';
      G.career.salary = 0;
    }
  }
}

// Updated naturalDecay — harder difficulty
function naturalDecay() {
  var a = G.age;
  var dm = DIFFICULTY.statDecayMult;

  // Health decay
  if (a > 70) G.stats.health = Math.max(0, G.stats.health - (4 * dm));
  else if (a > 55) G.stats.health = Math.max(0, G.stats.health - (2.5 * dm));
  else if (a > 40) G.stats.health = Math.max(0, G.stats.health - (1.5 * dm));
  else if (a > 30) G.stats.health = Math.max(0, G.stats.health - (0.5 * dm));

  // Looks arc
  if (a > 55) G.stats.looks = Math.max(0, G.stats.looks - (3 * dm));
  else if (a > 35) G.stats.looks = Math.max(0, G.stats.looks - (1.5 * dm));
  else if (a > 5 && a < 26) G.stats.looks = Math.min(100, G.stats.looks + 0.4);

  // Intelligence growth during education, decay if neglected after 50
  if (G.education.stage === 'primary') G.stats.intelligence = Math.min(100, G.stats.intelligence + 2);
  else if (G.education.stage === 'secondary') G.stats.intelligence = Math.min(100, G.stats.intelligence + 1.5);
  else if (G.education.stage === 'university') G.stats.intelligence = Math.min(100, G.stats.intelligence + 1);
  else if (a > 50 && !G.flags.keeps_learning) G.stats.intelligence = Math.max(0, G.stats.intelligence - 0.3);

  // Happiness drift toward neutral (harder to maintain high happiness)
  if (G.stats.happiness > 70 && Math.random() < 0.4) {
    G.stats.happiness = Math.max(0, G.stats.happiness - rnd(2, 5));
  }

  // Stress natural decay — slower now
  G.hidden.stress = Math.max(0, G.hidden.stress - 0.3);
}

// Updated calcLifestyleExpense — harder, expenses scale properly
function calcLifestyleExpense() {
  var age = G.age;
  if (age < 18) return 0; // parents cover

  var base = 0;
  // Base by background
  var bgExpenses = {poor:3000, working:6000, middle:10000, wealthy:20000, elite:50000};
  base = bgExpenses[G.background] || 8000;

  // Scale with career level
  var careerBoost = G.career.level > 0 ? G.career.level * 700 : 0;

  // Rent if moved out
  var rentMap = {
    lagos: 4800, abuja: 8400, london: 18000, nyc: 24000, la: 20000,
    default: 7200
  };
  var rent = 0;
  if (G.flags.moved_out && G.assets.properties.length === 0) {
    rent = (rentMap[G.state] || rentMap.default) * DIFFICULTY.expenseMult;
  }

  // Partner + children
  var partnerCost = (G.npcs.partner && G.npcs.partner.alive) ? 2500 : 0;
  var childCost = G.npcs.children.filter(function(c){ return c.alive && c.age < 18; }).length * 5000;

  // Lifestyle inflation with assets
  var luxuryCost = 0;
  if (G.assets.car && G.assets.car.value > 30000) luxuryCost += 3000;
  if (G.assets.watches.length > 1) luxuryCost += 1000;

  var total = (base + careerBoost + rent + partnerCost + childCost + luxuryCost) * DIFFICULTY.expenseMult;
  return Math.max(4000, Math.round(total));
}

function makeChoice(idx){
  if(!G._currentEvent)return;
  var ev=G._currentEvent;var ch=ev.choices[idx];if(!ch)return;
  applyOutcome(ch.outcome);
  if(!G._fired.includes(ev.id))G._fired.push(ev.id);
  addLog(G.age,ev.title,ev.category);

  if((ch.outcome.flags&&ch.outcome.flags.had_first_friend)&&G.npcs.friends.length===0){var f=makeFriend(G.age);G.npcs.friends.push(f);}
  if((ch.outcome.flags&&ch.outcome.flags.childhood_bestfriend)&&G.npcs.friends.length===0){var f=makeFriend(G.age);f.trust=85;f.closeness=90;G.npcs.friends.push(f);}
  if(ch.outcome.triggerEvent)queueChain(ch.outcome.triggerEvent);
  // Child birth naming -- surname choice first, then first name
  if(ch.outcome.flags&&(ch.outcome.flags.has_children||ch.outcome.flags.teen_pregnancy)){
    var justBorn=G.npcs.children.find(function(c){return c.age===0&&!c._named;});
    if(!justBorn){var nb=makeChild();G.npcs.children.push(nb);G.flags.has_children=true;justBorn=nb;}
    if(justBorn&&!justBorn._named){
      justBorn._named=false;
      setTimeout(function(){
        if(typeof showBabySurnameModal==='function') showBabySurnameModal(justBorn);
        else showChildNamingModal(justBorn);
      },800);
    }
  }
  renderOutcome(ch.outcome);renderStats();
  G._awaiting=false;G._currentEvent=null;

  if(_chainQueue.length>0){
    setTimeout(function(){
      try{
        var next=popChain();
        if(next&&next.choices&&next.choices.length){
          G._currentEvent=next;G._awaiting=true;
          document.getElementById('btn-age').disabled=true;
          renderEvent(next);renderStats();
        }else{
          _chainQueue=[];G._awaiting=false;
          var b=document.getElementById('btn-age');if(b)b.disabled=false;
        }
      }catch(err){
        console.warn('Chain err',err);
        _chainQueue=[];G._awaiting=false;
        var b=document.getElementById('btn-age');if(b)b.disabled=false;
      }
    },700);
  }
  save();
}


/* === CHILD NAMING MODAL === */
function showChildNamingModal(child){
  if(!child)return;
  var defName=child.firstName||'Junior';
  var famName=(G&&G._familyName)||'';
  showModal('&#x1F476; Name Your Child',
    '<div style="font-size:13px;color:var(--dim);font-style:italic;line-height:1.75;margin-bottom:16px">A new life. A name is the first gift you give them.</div>'+
    '<div style="margin-bottom:14px">'+
    '<label style="font-family:var(--fm);font-size:10px;letter-spacing:.2em;color:var(--cyan);text-transform:uppercase;display:block;margin-bottom:8px">First Name</label>'+
    '<input id="child-name-inp" class="inp" type="text" placeholder="'+defName+'" value="'+defName+'" style="margin-bottom:6px">'+
    '<div style="font-family:var(--fm);font-size:10px;color:var(--muted)">Surname: <span style="color:var(--text)">'+famName+'</span></div>'+
    '</div>'+
    '<div style="display:flex;gap:8px;margin-top:16px">'+
    '<button class="btn btn-p" data-cid="'+child.id+'" onclick="confirmChildName(this.dataset.cid)">Confirm Name</button>'+
    '<button class="btn btn-s" data-cid="'+child.id+'" onclick="confirmChildName(this.dataset.cid,true)">Use Default</button>'+
    '</div>');
}
function confirmChildName(childId,useDefault){
  var child=G.npcs.children.find(function(c){return c.id===childId;});
  if(!child){closeModal();return;}
  var famName=(G&&G._familyName)||'';
  var firstName='';
  if(useDefault){firstName=child.firstName||'Junior';}
  else{var inp=document.getElementById('child-name-inp');firstName=(inp&&inp.value.trim())||child.firstName||'Junior';}
  child.firstName=firstName;
  child.name=firstName+(famName?' '+famName:'');
  child._named=true;
  closeModal();
  addLog(G.age,'Named child: '+child.name+'.','family');
  addTimelineEntry('up','You named them '+child.name+'. The name felt right the moment you said it aloud.','family');
  renderStats();save();
  toast(child.name+' -- welcome to the world.');
}

function triggerDeath(cause){
  G._causeOfDeath=cause;G._deathYear=G.world.year;
  save();
  setTimeout(()=>{renderDeath();},400);
}

/* === SECTION 16: INIT === */
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-'+id).classList.add('active');
}

// ── CHARACTER CREATION: Country → State picker ──────────────────────────────
function onCountryChange(sel) {
  var country = sel.value;
  var stateSel = document.getElementById('state-sel');
  if (!stateSel) return;
  stateSel.innerHTML = '<option value="">Select a city / region...</option>';
  stateSel.disabled = true;

  if (!country) return;
  var states = (typeof STATES_BY_COUNTRY !== 'undefined') ? STATES_BY_COUNTRY[country] : null;
  if (!states || !states.length) {
    stateSel.innerHTML = '<option value="capital">Capital City</option>';
    stateSel.disabled = false;
    return;
  }
  states.forEach(function(s) {
    var opt = document.createElement('option');
    opt.value = s.value;
    opt.textContent = s.label + ' — ' + s.desc;
    stateSel.appendChild(opt);
  });
  stateSel.disabled = false;
  // Auto-select first real option so user doesn't have to pick if they're happy with default
  stateSel.selectedIndex = 1;
}

function onStateChange(sel) {
  // Background is a system variable — not exposed to the player
}

function selOpt(el,gid){
  document.getElementById(gid).querySelectorAll('.so,.bg-opt').forEach(o=>o.classList.remove('sel'));
  el.classList.add('sel');
}
function getVal(gid){var s=document.querySelector('#'+gid+' .sel');return s?s.dataset.value:null;}

function startGame(){
  var name=document.getElementById('inp-name').value.trim();
  var gender=getVal('g-sel');
  var country=document.getElementById('country-sel').value;
  var stateVal=document.getElementById('state-sel').value;
  if(!name){toast('Enter a name.');return;}
  if(!gender){toast('Select a gender.');return;}
  if(!country){toast('Select a country.');return;}
  if(!stateVal){toast('Select where you were born.');return;}
  var birthYear=1995+rnd(0,10);
  G=newState(name,gender,country,stateVal,birthYear);
  _chainQueue=[];
  // Determine state label
  var states=STATES_BY_COUNTRY[country]||[];
  var stateObj=states.find(function(s){return s.value===stateVal;});
  var stateLbl=stateObj?stateObj.label:stateVal;
  G.stateName=stateLbl;
  addLog(0,'Born in '+stateLbl+', '+country+'.','family');
  addTimelineEntry('neutral','You enter the world in '+stateLbl+', '+country+'. Everything begins here.','family');
  renderStats();showScreen('game');save();
}

function continueGame(){
  var s=loadSave();if(!s){toast('No save found.');return;}
  G=s;
  // Always reset awaiting state on load — prevents permanent age-up freeze
  G._awaiting=false;
  G._currentEvent=null;
  _chainQueue=[];
  renderStats();
  // Rebuild log
  document.getElementById('log-list').innerHTML='';
  G.lifeLog.slice(-40).forEach(function(e){renderLogEntry(e.age,e.title,e.category);});
  document.getElementById('log-count').textContent=G.lifeLog.length;
  rebuildTimeline();
  document.getElementById('idle-state').style.display='none';
  // Re-enable age up button
  var b=document.getElementById('btn-age');if(b)b.disabled=false;
  showScreen('game');
  toast('Welcome back, '+G.name+'. Age '+G.age+'.');
}

function newGame(){
  // Wipe ALL saves from memory
  try{localStorage.clear();}catch(e){}
  G=null;_chainQueue=[];
  document.getElementById('inp-name').value='';
  document.querySelectorAll('.so,.bg-opt').forEach(o=>o.classList.remove('sel'));
  document.getElementById('country-sel').value='';
  var ss=document.getElementById('state-sel');if(ss){ss.innerHTML='<option value="">Select country first...</option>';ss.disabled=true;}
  document.getElementById('log-list').innerHTML='';
  document.getElementById('log-count').textContent='0';
  rebuildTimeline();
  document.getElementById('idle-state').style.display='none';
  showScreen('create');
}

document.addEventListener('DOMContentLoaded', function(){
  if(hasSave()) document.getElementById('btn-continue').disabled=false;
});

/* === HELPERS === */
function clamp(v,a,b){return Math.min(b,Math.max(a,v));}
function rnd(a,b){return Math.floor(Math.random()*(b-a+1))+a;}
function pick(arr){return arr[Math.floor(Math.random()*arr.length)];}
function money(n){
  if(!G)return '$0';
  var cd=COUNTRIES[G.country];var cur=(cd&&cd.currency)||'$';var fx=(cd&&cd.fxRate)||1;
  var local=Math.round((n||0)*fx);var a=Math.abs(local);var f;
  if(a>=1000000000)f=(a/1e9).toFixed(1)+'B';
  else if(a>=1000000)f=(a/1e6).toFixed(1)+'M';
  else if(a>=1000)f=(a/1000).toFixed(0)+'K';
  else f=a.toString();
  return(local<0?'-':'')+cur+f;
}
function toast(msg){
  var t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('on');
  clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('on'),3200);
}



/* =============================================================
   MUSIC ENGINE — Origin: Zero
   Single hidden YouTube iframe. CSS-only visualizer.
   Uses var assignment so hooks never cause infinite recursion.
   ============================================================= */

/* Watchdog: recover frozen game after 8s */
setInterval(function(){
  if(!G||!G._awaiting||G._currentEvent)return;
  G._awaiting=false; _chainQueue=[];
  var b=document.getElementById('btn-age');
  if(b)b.disabled=false;
},8000);

/* ================================================================
   MUSIC ENGINE — Howler.js + Local Files

   HOW TO USE:
   1. Create a folder called "music" next to this HTML file
   2. Download each song and save with the exact filename shown
   3. Open the HTML — music plays when you click Begin Your Life

   FILE LIST:
   music/burna-boy-ye.mp3          Burna Boy - Ye
   music/wizkid-essence.mp3        Wizkid ft Tems - Essence
   music/rema-calm-down.mp3        Rema - Calm Down
   music/tems-free-mind.mp3        Tems - Free Mind
   music/kendrick-humble.mp3       Kendrick Lamar - HUMBLE.
   music/drake-gods-plan.mp3       Drake - God's Plan
   music/travis-sicko-mode.mp3     Travis Scott - SICKO MODE
   music/dua-lipa-levitating.mp3   Dua Lipa - Levitating
   music/billie-eilish-bad-guy.mp3 Billie Eilish - bad guy
   music/milky-chance-fado.mp3     Milky Chance - Fado
   music/bj-feel-the-vibe.mp3      BJ the Chicago Kid - Feel The Vibe
   music/cautious-clay-erase.mp3   Cautious Clay - Erase
   music/skepta-same-old-story.mp3 Skepta - Same Old Story
   music/major-lazer-que-calor.mp3 Major Lazer - Que Calor

   Genre picks automatically based on career path + country + mood.
   Missing files are silently skipped — only need a few to work.
   ================================================================ */

var _IS_GITHUB = (typeof window !== 'undefined' && window.location && window.location.hostname === 'israelbabalola049-cmd.github.io');
var TRACK_LIST = (function(){
  var defs = [
    /* [title, genre, gh_src, local_src] */
    ['Cautious Clay — Erase','fifa','Cautious_Clay_-_Erase.mp3','music/Cautious_Clay_-_Erase_%28mp3.pm%29.mp3'],
    ['BJ Chicago Kid — Feel The Vibe','fifa','feel_the_vibe_bjthechicagokid.mp3','music/BJ_The_Chicago_Kid_feat._Anderson_Paak_-_Feel_The_Vibe_%28mp3.pm%29.mp3'],
    ['Tems — Free Mind','afrobeat','Tems-Free-Mind-%28JustNaija.com%29.mp3','music/Tems-Free-Mind-%28JustNaija.com%29.mp3'],
    ['Wizkid ft Tems — Essence','afrobeat','WizKid-Ft-Tems-Essence.mp3','music/WizKid-Ft-Tems-Essence.mp3'],
    ['Burna Boy — Ye','afrobeat','Burna-Boy-Ye.mp3','music/Burna-Boy-Ye.mp3'],
    ['Rema — Calm Down','afrobeat','Rema-Calm-Down-file-1-%28JustNaija.com%29.mp3','music/Rema-Calm-Down-file-1-%28JustNaija.com%29.mp3'],
    ['One Dance — Drake, Wizkid & Kyla','afrobeat','493.Drake%E3%80%81Wizkid%E3%80%81Kyla%20-%20One%20Dance.mp3','music/493.Drake%E3%80%81Wizkid%E3%80%81Kyla%20-%20One%20Dance.mp3'],
    ['Nokia — Drake','pop','Nokia%20Drake%20%28pagalall.com%29.mp3','music/Nokia%20Drake%20%28pagalall.com%29.mp3'],
    ['Ruin — Usher ft. Pheelz','afrobeat','ruin-usher.mp3','music/ruin-usher.mp3'],
    ['Kendrick Lamar — HUMBLE.','hiphop','Kendrick%20Lamar%20-%20Humble.mp3','music/Kendrick%20Lamar%20-%20Humble.mp3'],
    ['Drake — God\'s Plan','hiphop','Drake-Gods-Plan%20%281%29.mp3','music/Drake-Gods-Plan%20%281%29.mp3'],
    ['Travis Scott — SICKO MODE','hiphop','Travis%20Scott%20-%20SICKO%20MODE%20ft.%20Drake.mp3','music/Travis%20Scott%20-%20SICKO%20MODE%20ft.%20Drake.mp3'],
    ['Travis Scott — Dumbo','hiphop','JACKBOYS_-_Dumbo.mp3','music/Travis_Scott_JACKBOYS_-_Dumbo_%28mp3.pm%29.mp3'],
    ['Popular — The Weeknd','pop','The%20Weeknd%2C%20Playboi%20Carti%2C%20Madonna%20-%20Popular.mp3','music/The%20Weeknd%2C%20Playboi%20Carti%2C%20Madonna%20-%20Popular%20%28Official%20Audio%29.mp3'],
    ['Skepta — Same Old Story','fifa','Skepta_-_Same_Old_Story.mp3','music/Skepta_Joseph_Adenuga_-_Same_Old_Story_%28mp3.pm%29.mp3'],
  ];
  return defs.map(function(d){
    return {src: _IS_GITHUB ? d[2] : d[3], title: d[0], genre: d[1]};
  });
})();

var _FIXED_COUNT = 9;   /* first 9 tracks play in order */
var _howl        = null;
var _mOn         = false;
var _mGo         = false;
var _trackIdx    = 0;
var _playedFixed = false;
var _skipCount   = 0;

/* Unlock AudioContext on first user gesture (iOS requirement) */
(function(){
  function _unlock(){
    try{
      var ctx = Howler.ctx;
      if(ctx && ctx.state === 'suspended') ctx.resume();
    }catch(e){}
    document.removeEventListener('touchend', _unlock);
    document.removeEventListener('click',    _unlock);
  }
  document.addEventListener('touchend', _unlock, {once:true, passive:true});
  document.addEventListener('click',    _unlock, {once:true});
})();

/* Resume when returning from background / switching tabs */
document.addEventListener('visibilitychange', function(){
  if(document.hidden) return;
  try{
    var ctx = Howler.ctx;
    if(ctx && ctx.state === 'suspended') ctx.resume();
  }catch(e){}
  if(_mGo && _howl && !_mOn){
    try{ _howl.play(); }catch(e){}
  }
});

function _nextIdx(){
  /* Play fixed tracks in order first, then shuffle by genre */
  if(!_playedFixed && _trackIdx < _FIXED_COUNT - 1) return _trackIdx + 1;
  _playedFixed = true;
  var genre = _pickGenre();
  var pool = [];
  for(var i = 0; i < TRACK_LIST.length; i++){
    if(TRACK_LIST[i].genre === genre && i !== _trackIdx) pool.push(i);
  }
  if(!pool.length){
    for(var i = 0; i < TRACK_LIST.length; i++) if(i !== _trackIdx) pool.push(i);
  }
  return pool.length ? pool[Math.floor(Math.random() * pool.length)] : 0;
}

function _pickGenre(){
  if(!G) return 'afrobeat';
  var cp    = (G.career && G.career.path) || '';
  var happy = (G.stats  && G.stats.happiness) || 50;
  var c     = G.country || '';
  if(cp==='football'||cp==='basketball'||cp==='athletics') return 'fifa';
  if(cp==='afrobeats') return 'afrobeat';
  if(cp==='hiphop')    return 'hiphop';
  if(happy < 35)       return 'pop';
  if(c==='Nigeria'||c==='Ghana'||c==='Senegal'||c==='Kenya'||c==='Ethiopia') return 'afrobeat';
  if(c==='United States'||c==='Canada') return Math.random()<0.5?'hiphop':'pop';
  if(c==='United Kingdom') return Math.random()<0.5?'pop':'hiphop';
  var genres = ['afrobeat','hiphop','pop','fifa'];
  return genres[Math.floor(Math.random() * genres.length)];
}

function _playIdx(idx){
  /* Stop and unload previous track */
  if(_howl){
    try{ _howl.stop(); _howl.unload(); }catch(e){}
    _howl = null;
  }
  _trackIdx = idx;
  var track  = TRACK_LIST[idx];
  setSongTitle(track.title);

  _howl = new Howl({
    src:     Array.isArray(track.src) ? track.src : [track.src],
    html5:   true,
    volume:  0.55,
    preload: true,
    format:  ['mp3'],
    onplay:       function(){ _mOn = true;  _skipCount = 0; _vizActive(true);  _mBtnSync(); },
    onpause:      function(){ _mOn = false; _vizActive(false); _mBtnSync(); },
    onstop:       function(){ _mOn = false; _vizActive(false); _mBtnSync(); },
    onend:        function(){ _mOn = false; if(_mGo) _playIdx(_nextIdx()); },
    onloaderror:  function(id, err){
      _skipCount++;
      setSongTitle('');
      if(_mGo && _skipCount < TRACK_LIST.length) _playIdx(_nextIdx());
    },
    onplayerror:  function(){
      var self = this;
      self.once('unlock', function(){ self.play(); });
    }
  });
  _howl.play();
}

function startMusic(){
  if(_mGo) return;
  _mGo = true;
  _playedFixed = false;
  try{
    if(Howler.ctx && Howler.ctx.state === 'suspended') Howler.ctx.resume();
  }catch(e){}
  _playIdx(0);
}

function pauseMusic(){
  _mGo = false; _mOn = false;
  if(_howl){ try{ _howl.pause(); }catch(e){} }
  _vizActive(false); _mBtnSync();
}

function resumeMusic(){
  if(!_mGo){ startMusic(); return; }
  try{
    if(Howler.ctx && Howler.ctx.state === 'suspended') Howler.ctx.resume();
  }catch(e){}
  if(_howl && !_mOn){ try{ _howl.play(); }catch(e){} }
  else if(!_howl) _playIdx(_trackIdx);
}

function toggleMusic(){
  if(!_mGo){ startMusic(); return; }
  if(_mOn) pauseMusic(); else resumeMusic();
}

function setSongTitle(t){
  var el = document.getElementById('np-text');
  if(el) el.textContent = t || '';
}

function _vizActive(on){
  var v = document.getElementById('viz');
  if(!v) return;
  if(on) v.classList.add('on');
  else   v.classList.remove('on');
}

function _mBtnSync(){
  var b = document.getElementById('mbtn');
  if(!b) return;
  b.innerHTML = _mOn ? '&#9646;&#9646;' : '&#9654;';
  b.title     = _mOn ? 'Pause music' : 'Play music';
}

function giveUp(){
  if(!G) return;
  showModal('End This Life?',
    '<div style="font-size:13px;color:var(--dim);font-style:italic;margin-bottom:18px;line-height:1.8">'+
    '"'+G.name+'" \u2014 Age '+G.age+'.<br>Everything ends. Even lives we choose to leave.</div>'+
    '<div style="display:flex;flex-direction:column;gap:10px">'+
    '<button class="btn btn-s" style="color:var(--danger);border-color:rgba(232,64,64,.5)" onclick="confirmGiveUp()">Yes, end this life</button>'+
    '<button class="btn btn-s" onclick="closeModal()">No, keep going</button>'+
    '</div>');
}

function confirmGiveUp(){
  closeModal();
  G._causeOfDeath = 'Chose to walk away';
  G._deathYear    = G.world ? G.world.year : 2024;
  save(); pauseMusic();
  setTimeout(function(){ renderDeath(); }, 350);
}

function startMusicAndGame(){
  startMusic();
  startGame();
}

var _origNewGame = newGame;
newGame = function(){
  pauseMusic();
  _mGo = false; _playedFixed = false; _trackIdx = 0;
  _origNewGame();
};