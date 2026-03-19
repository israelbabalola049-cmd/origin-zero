/* === SECTION 1: CONSTANTS & DATA LIBRARIES === */

// ============================================================
// STATES BY COUNTRY — replaces Family Background picker
// ============================================================
var STATES_BY_COUNTRY = {
  Nigeria: [
    {value:'lagos',label:'Lagos',desc:'The hustle capital'},
    {value:'abuja',label:'Abuja',desc:'Power and politics'},
    {value:'kano',label:'Kano',desc:'Northern trade city'},
    {value:'ibadan',label:'Ibadan',desc:'Ancient Yoruba heartland'},
    {value:'ph',label:'Port Harcourt',desc:'Oil city on the delta'},
    {value:'enugu',label:'Enugu',desc:'Coal city, eastern pride'},
    {value:'aba',label:'Aba',desc:'Merchant city, traders made here'},
    {value:'jos',label:'Jos',desc:'The plateau, cool and complicated'},
    {value:'warri',label:'Warri',desc:'Delta swagger, pure hustle'},
    {value:'benin',label:'Benin City',desc:'Ancient kingdom, modern grind'},
  ],
  Ghana: [
    {value:'accra',label:'Accra',desc:'Capital city buzz'},
    {value:'kumasi',label:'Kumasi',desc:'Ashanti heartland'},
    {value:'tamale',label:'Tamale',desc:'Northern gateway'},
    {value:'takoradi',label:'Takoradi',desc:'Harbour city'},
  ],
  Kenya: [
    {value:'nairobi',label:'Nairobi',desc:'East Africa\'s business hub'},
    {value:'mombasa',label:'Mombasa',desc:'Coastal city, Swahili roots'},
    {value:'kisumu',label:'Kisumu',desc:'Lakeside, tight communities'},
    {value:'nakuru',label:'Nakuru',desc:'Rift Valley hub'},
  ],
  Senegal: [
    {value:'dakar',label:'Dakar',desc:'The vibrant capital'},
    {value:'thies',label:'Thiès',desc:'The second city'},
    {value:'ziguinchor',label:'Ziguinchor',desc:'Southern Casamance'},
  ],
  Ethiopia: [
    {value:'addis',label:'Addis Ababa',desc:'Africa\'s diplomatic capital'},
    {value:'dire_dawa',label:'Dire Dawa',desc:'Eastern trade city'},
    {value:'mekelle',label:'Mekelle',desc:'Tigray highland city'},
  ],
  'United Kingdom': [
    {value:'london',label:'London',desc:'Where everything is possible and expensive'},
    {value:'manchester',label:'Manchester',desc:'Grit and culture'},
    {value:'birmingham',label:'Birmingham',desc:'Second city grind'},
    {value:'leeds',label:'Leeds',desc:'Northern hustle'},
    {value:'glasgow',label:'Glasgow',desc:'Scottish resilience'},
    {value:'liverpool',label:'Liverpool',desc:'Music, football, pride'},
    {value:'bristol',label:'Bristol',desc:'Creative and coastal'},
    {value:'cardiff',label:'Cardiff',desc:'Welsh capital'},
  ],
  France: [
    {value:'paris',label:'Paris',desc:'The centre of everything'},
    {value:'marseille',label:'Marseille',desc:'Rough, beautiful, real'},
    {value:'lyon',label:'Lyon',desc:'Food capital of France'},
    {value:'toulouse',label:'Toulouse',desc:'Pink city of the south'},
  ],
  Germany: [
    {value:'berlin',label:'Berlin',desc:'Creative capital of Europe'},
    {value:'munich',label:'Munich',desc:'Wealth and tradition'},
    {value:'hamburg',label:'Hamburg',desc:'Port city ambition'},
    {value:'frankfurt',label:'Frankfurt',desc:'Finance hub'},
  ],
  'United States': [
    {value:'nyc',label:'New York',desc:'The city that never stops'},
    {value:'la',label:'Los Angeles',desc:'Dreams and ambition'},
    {value:'chicago',label:'Chicago',desc:'Wind city, working class roots'},
    {value:'houston',label:'Houston',desc:'Southern hustle, oil money'},
    {value:'atlanta',label:'Atlanta',desc:'Black excellence capital'},
    {value:'miami',label:'Miami',desc:'Sun, money, culture'},
    {value:'detroit',label:'Detroit',desc:'Resilience forged in struggle'},
    {value:'dallas',label:'Dallas',desc:'Texas ambition'},
  ],
  Canada: [
    {value:'toronto',label:'Toronto',desc:'Most diverse city on earth'},
    {value:'vancouver',label:'Vancouver',desc:'Pacific coast beauty'},
    {value:'montreal',label:'Montréal',desc:'French flair, cold winters'},
    {value:'calgary',label:'Calgary',desc:'Prairie ambition'},
  ],
  Brazil: [
    {value:'sao_paulo',label:'São Paulo',desc:'The machine that never stops'},
    {value:'rio',label:'Rio de Janeiro',desc:'Carnival and contradiction'},
    {value:'salvador',label:'Salvador',desc:'Afro-Brazilian heart'},
    {value:'belo',label:'Belo Horizonte',desc:'Minas Gerais grit'},
  ],
  India: [
    {value:'mumbai',label:'Mumbai',desc:'Dreams and impossible odds'},
    {value:'delhi',label:'Delhi',desc:'Power and politics'},
    {value:'bangalore',label:'Bengaluru',desc:'Tech capital of Asia'},
    {value:'chennai',label:'Chennai',desc:'South Indian pride'},
    {value:'kolkata',label:'Kolkata',desc:'Culture and struggle'},
  ],
  Japan: [
    {value:'tokyo',label:'Tokyo',desc:'Precision and possibility'},
    {value:'osaka',label:'Osaka',desc:'Food, comedy, commerce'},
    {value:'kyoto',label:'Kyoto',desc:'Tradition runs deep'},
    {value:'fukuoka',label:'Fukuoka',desc:'Gateway to Asia'},
  ],
  'South Korea': [
    {value:'seoul',label:'Seoul',desc:'K-culture global HQ'},
    {value:'busan',label:'Busan',desc:'Coastal second city'},
    {value:'incheon',label:'Incheon',desc:'Where the world lands'},
  ],
  'South Africa': [
    {value:'johannesburg',label:'Johannesburg',desc:'City of gold, city of grind'},
    {value:'cape_town',label:'Cape Town',desc:'Beautiful, unequal, electric'},
    {value:'durban',label:'Durban',desc:'Indian Ocean swagger'},
    {value:'pretoria',label:'Pretoria',desc:'Administrative capital, quiet power'},
    {value:'soweto',label:'Soweto',desc:'Soul of the struggle, beating still'},
  ],
  Tanzania:[
    {value:'dar_es_salaam',label:'Dar es Salaam',desc:'The harbour city that never stops'},
    {value:'mwanza',label:'Mwanza',desc:'Lake Victoria\'s gateway city'},
    {value:'arusha',label:'Arusha',desc:'Gateway to the safari'},
    {value:'dodoma',label:'Dodoma',desc:'The quiet capital'},
  ],
  Uganda:[
    {value:'kampala',label:'Kampala',desc:'The city on seven hills'},
    {value:'entebbe',label:'Entebbe',desc:'Lakeside calm, airport buzz'},
    {value:'gulu',label:'Gulu',desc:'Northern Uganda, rebuilding'},
    {value:'mbarara',label:'Mbarara',desc:'Western Uganda hub'},
  ],
  'Ivory Coast':[
    {value:'abidjan',label:'Abidjan',desc:'The Paris of West Africa'},
    {value:'yamoussoukro',label:'Yamoussoukro',desc:'Official capital, quiet ambition'},
    {value:'bouake',label:'Bouaké',desc:'Second city, commercial drive'},
  ],
  Rwanda:[
    {value:'kigali',label:'Kigali',desc:'Cleanest city in Africa, rising fast'},
    {value:'musanze',label:'Musanze',desc:'Northern gateway, gorilla country'},
  ],
  Zimbabwe:[
    {value:'harare',label:'Harare',desc:'Resilience under pressure'},
    {value:'bulawayo',label:'Bulawayo',desc:'City of kings, second city grit'},
    {value:'victoria_falls',label:'Victoria Falls',desc:'Tourism meets hustle'},
  ],
  'Saudi Arabia':[
    {value:'riyadh',label:'Riyadh',desc:'The kingdom\'s engine'},
    {value:'jeddah',label:'Jeddah',desc:'Red Sea cosmopolitan'},
    {value:'mecca',label:'Mecca',desc:'Centre of the Muslim world'},
    {value:'dammam',label:'Dammam',desc:'Eastern Province, oil country'},
  ],
  UAE:[
    {value:'dubai',label:'Dubai',desc:'Where ambition has no ceiling'},
    {value:'abudhabi',label:'Abu Dhabi',desc:'Oil wealth and culture'},
    {value:'sharjah',label:'Sharjah',desc:'The affordable alternative'},
  ],
  Australia:[
    {value:'sydney',label:'Sydney',desc:'Harbour city ambition'},
    {value:'melbourne',label:'Melbourne',desc:'Culture capital of the south'},
    {value:'brisbane',label:'Brisbane',desc:'Sunshine and growth'},
    {value:'perth',label:'Perth',desc:'Most isolated city on earth, thriving'},
  ],
  'New Zealand':[
    {value:'auckland',label:'Auckland',desc:'City of sails'},
    {value:'wellington',label:'Wellington',desc:'Windy capital, creative heart'},
    {value:'christchurch',label:'Christchurch',desc:'Rebuilt, resilient'},
  ],
  Mexico:[
    {value:'mexico_city',label:'Mexico City',desc:'Megacity of contrasts'},
    {value:'guadalajara',label:'Guadalajara',desc:'Tequila and tech'},
    {value:'monterrey',label:'Monterrey',desc:'Industrial north, serious money'},
    {value:'cancun',label:'Cancún',desc:'Tourism money and local hustle'},
  ],
  Colombia:[
    {value:'bogota',label:'Bogotá',desc:'High-altitude capital of contradiction'},
    {value:'medellin',label:'Medellín',desc:'Transformation city, reinvented'},
    {value:'cali',label:'Cali',desc:'Salsa, sun, and struggle'},
    {value:'cartagena',label:'Cartagena',desc:'Colonial beauty, modern hustle'},
  ],
  'Trinidad & Tobago':[
    {value:'port_of_spain',label:'Port of Spain',desc:'Caribbean business hub'},
    {value:'san_fernando',label:'San Fernando',desc:'Oil belt south'},
    {value:'chaguanas',label:'Chaguanas',desc:'Indo-Caribbean heartland'},
  ],
  Jamaica:[
    {value:'kingston',label:'Kingston',desc:'Reggae, rum and raw ambition'},
    {value:'montego_bay',label:'Montego Bay',desc:'Tourism meets real Jamaica'},
    {value:'spanish_town',label:'Spanish Town',desc:'Old capital, new struggles'},
  ],
};

// Background assigned by state region — player doesn't choose
var STATE_BACKGROUND_WEIGHTS = {
  // lagos: 30% poor, 30% working, 25% middle, 12% wealthy, 3% elite
  lagos:    {poor:30,working:30,middle:25,wealthy:12,elite:3},
  abuja:    {poor:15,working:20,middle:30,wealthy:25,elite:10},
  kano:     {poor:35,working:35,middle:20,wealthy:8,elite:2},
  ibadan:   {poor:30,working:35,middle:25,wealthy:9,elite:1},
  ph:       {poor:25,working:30,middle:25,wealthy:15,elite:5},
  enugu:    {poor:30,working:35,middle:25,wealthy:9,elite:1},
  aba:      {poor:30,working:35,middle:25,wealthy:9,elite:1},
  jos:      {poor:35,working:35,middle:22,wealthy:7,elite:1},
  warri:    {poor:30,working:35,middle:25,wealthy:9,elite:1},
  benin:    {poor:30,working:35,middle:25,wealthy:9,elite:1},
  london:   {poor:10,working:20,middle:35,wealthy:25,elite:10},
  manchester:{poor:20,working:35,middle:30,wealthy:12,elite:3},
  birmingham:{poor:22,working:35,middle:28,wealthy:12,elite:3},
  nyc:      {poor:15,working:20,middle:30,wealthy:25,elite:10},
  la:       {poor:18,working:22,middle:28,wealthy:22,elite:10},
  atlanta:  {poor:22,working:28,middle:28,wealthy:17,elite:5},
  chicago:  {poor:20,working:30,middle:30,wealthy:16,elite:4},
  nairobi:  {poor:30,working:30,middle:25,wealthy:12,elite:3},
  accra:    {poor:30,working:32,middle:25,wealthy:11,elite:2},
  default:  {poor:25,working:30,middle:28,wealthy:13,elite:4},
  johannesburg:{poor:28,working:28,middle:25,wealthy:15,elite:4},
  cape_town:   {poor:25,working:25,middle:28,wealthy:17,elite:5},
  soweto:      {poor:40,working:38,middle:17,wealthy:4,elite:1},
  dubai:       {poor:5,working:15,middle:30,wealthy:35,elite:15},
  abudhabi:    {poor:5,working:12,middle:28,wealthy:38,elite:17},
  riyadh:      {poor:8,working:18,middle:30,wealthy:30,elite:14},
  sydney:      {poor:8,working:18,middle:35,wealthy:28,elite:11},
  melbourne:   {poor:9,working:19,middle:35,wealthy:26,elite:11},
  kingston:    {poor:38,working:35,middle:20,wealthy:6,elite:1},
  port_of_spain:{poor:20,working:30,middle:30,wealthy:16,elite:4},
  kigali:      {poor:30,working:35,middle:25,wealthy:9,elite:1},
  kampala:     {poor:35,working:35,middle:22,wealthy:7,elite:1},
  dar_es_salaam:{poor:33,working:35,middle:22,wealthy:8,elite:2},
};

function assignBackground(stateValue) {
  var weights = STATE_BACKGROUND_WEIGHTS[stateValue] || STATE_BACKGROUND_WEIGHTS.default;
  var total = Object.values(weights).reduce(function(a,b){return a+b;},0);
  var r = Math.random() * total;
  var cum = 0;
  var bgs = Object.keys(weights);
  for (var i = 0; i < bgs.length; i++) {
    cum += weights[bgs[i]];
    if (r <= cum) return bgs[i];
  }
  return 'working';
}


// Country data: currency, region, exam system, salary factor (multiplier vs global baseline), tax style
var COUNTRIES={
  Nigeria:{currency:'₦',region:'West Africa',examSystem:'WAEC/JAMB',salaryFactor:.18,taxStyle:'PAYE',gdpTier:'developing',fxRate:1600},
  Ghana:{currency:'GH₵',region:'West Africa',examSystem:'WASSCE',salaryFactor:.22,taxStyle:'PAYE',gdpTier:'developing',fxRate:15.5},
  Senegal:{currency:'CFA',region:'West Africa',examSystem:'Bac',salaryFactor:.15,taxStyle:'flat',gdpTier:'developing',fxRate:615},
  Kenya:{currency:'KSh',region:'East Africa',examSystem:'KCSE',salaryFactor:.20,taxStyle:'PAYE',gdpTier:'developing',fxRate:130},
  Ethiopia:{currency:'ETB',region:'East Africa',examSystem:'EGSECE',salaryFactor:.10,taxStyle:'flat',gdpTier:'developing',fxRate:57},
  'United Kingdom':{currency:'£',region:'Europe',examSystem:'GCSEs/A-Levels',salaryFactor:1.0,taxStyle:'UK',gdpTier:'developed',fxRate:0.79},
  France:{currency:'€',region:'Europe',examSystem:'Baccalaureat',salaryFactor:.92,taxStyle:'EU',gdpTier:'developed',fxRate:0.92},
  Germany:{currency:'€',region:'Europe',examSystem:'Abitur',salaryFactor:.98,taxStyle:'EU',gdpTier:'developed',fxRate:0.92},
  'United States':{currency:'$',region:'Americas',examSystem:'SAT/ACT',salaryFactor:1.15,taxStyle:'US',gdpTier:'developed',fxRate:1.0},
  Canada:{currency:'CA$',region:'Americas',examSystem:'Provincial',salaryFactor:.95,taxStyle:'US',gdpTier:'developed',fxRate:1.36},
  Brazil:{currency:'R$',region:'Americas',examSystem:'ENEM',salaryFactor:.35,taxStyle:'flat',gdpTier:'emerging',fxRate:5.0},
  India:{currency:'₹',region:'Asia',examSystem:'JEE/NEET',salaryFactor:.25,taxStyle:'PAYE',gdpTier:'emerging',fxRate:83},
  Japan:{currency:'¥',region:'Asia',examSystem:'University Entrance',salaryFactor:.88,taxStyle:'EU',gdpTier:'developed',fxRate:150},
  'South Korea':{currency:'₩',region:'Asia',examSystem:'CSAT',salaryFactor:.82,taxStyle:'EU',gdpTier:'developed',fxRate:1350},
  'South Africa':{currency:'R',region:'Africa',examSystem:'NSC/Matric',salaryFactor:.38,taxStyle:'PAYE',gdpTier:'emerging',fxRate:18.5},
  Tanzania:{currency:'TZS',region:'East Africa',examSystem:'NECTA',salaryFactor:.12,taxStyle:'flat',gdpTier:'developing',fxRate:2500},
  Uganda:{currency:'UGX',region:'East Africa',examSystem:'UCE/UACE',salaryFactor:.11,taxStyle:'flat',gdpTier:'developing',fxRate:3700},
  'Ivory Coast':{currency:'CFA',region:'West Africa',examSystem:'BEPC/Bac',salaryFactor:.16,taxStyle:'flat',gdpTier:'developing',fxRate:615},
  Rwanda:{currency:'RWF',region:'East Africa',examSystem:'REB',salaryFactor:.13,taxStyle:'flat',gdpTier:'developing',fxRate:1200},
  Zimbabwe:{currency:'ZiG',region:'Africa',examSystem:'ZIMSEC',salaryFactor:.14,taxStyle:'flat',gdpTier:'developing',fxRate:25},
  'Saudi Arabia':{currency:'SAR',region:'Middle East',examSystem:'National',salaryFactor:.85,taxStyle:'flat',gdpTier:'developed',fxRate:3.75},
  UAE:{currency:'AED',region:'Middle East',examSystem:'National/IB',salaryFactor:1.05,taxStyle:'flat',gdpTier:'developed',fxRate:3.67},
  Australia:{currency:'A$',region:'Pacific',examSystem:'ATAR',salaryFactor:1.10,taxStyle:'US',gdpTier:'developed',fxRate:1.55},
  'New Zealand':{currency:'NZ$',region:'Pacific',examSystem:'NCEA',salaryFactor:.95,taxStyle:'US',gdpTier:'developed',fxRate:1.65},
  Mexico:{currency:'MXN',region:'Americas',examSystem:'ENLACE',salaryFactor:.28,taxStyle:'flat',gdpTier:'emerging',fxRate:17.5},
  Colombia:{currency:'COP',region:'Americas',examSystem:'Saber 11',salaryFactor:.22,taxStyle:'flat',gdpTier:'emerging',fxRate:4000},
  'Trinidad & Tobago':{currency:'TTD',region:'Caribbean',examSystem:'CSEC/CAPE',salaryFactor:.42,taxStyle:'PAYE',gdpTier:'emerging',fxRate:6.8},
  Jamaica:{currency:'JMD',region:'Caribbean',examSystem:'CSEC/CAPE',salaryFactor:.20,taxStyle:'PAYE',gdpTier:'developing',fxRate:155},
};

var FOOTBALL_LEAGUES={
  Nigeria:{name:'NPFL',fullName:'Nigeria Premier Football League',clubs:[{name:'Enyimba FC',city:'Aba'},{name:'Kano Pillars',city:'Kano'},{name:'Rivers United',city:'Port Harcourt'},{name:'Lobi Stars',city:'Makurdi'},{name:'Heartland FC',city:'Owerri'},{name:'Sunshine Stars',city:'Akure'},{name:'Remo Stars',city:'Ikenne'},{name:'Nasarawa United',city:'Lafia'}],managers:['Fatai Osho','Stanley Eguma','Fidelis Ilechukwu','Kennedy Boboye']},
  Ghana:{name:'GPL',fullName:'Ghana Premier League',clubs:[{name:'Accra Hearts of Oak',city:'Accra'},{name:'Kumasi Asante Kotoko',city:'Kumasi'},{name:'Medeama SC',city:'Tarkwa'},{name:'Aduana Stars',city:'Dormaa'}],managers:['Prosper Ogum','Yaw Preko','Samuel Boadu']},
  'United Kingdom':{name:'Premier League',fullName:'English Premier League',clubs:[{name:'Arsenal',city:'London'},{name:'Chelsea',city:'London'},{name:'Manchester City',city:'Manchester'},{name:'Manchester United',city:'Manchester'},{name:'Liverpool',city:'Liverpool'},{name:'Tottenham Hotspur',city:'London'},{name:'Newcastle United',city:'Newcastle'},{name:'Aston Villa',city:'Birmingham'},{name:'Brighton',city:'Brighton'},{name:'West Ham United',city:'London'}],managers:['Mikel Arteta','Enzo Maresca','Pep Guardiola','Ruben Amorim','Arne Slot','Ange Postecoglou','Eddie Howe','Unai Emery']},
  France:{name:'Ligue 1',fullName:'Ligue 1',clubs:[{name:'Paris Saint-Germain',city:'Paris'},{name:'Olympique de Marseille',city:'Marseille'},{name:'Olympique Lyonnais',city:'Lyon'},{name:'AS Monaco',city:'Monaco'},{name:'LOSC Lille',city:'Lille'}],managers:['Luis Enrique','Paulo Fonseca','Adi Hutter']},
  Germany:{name:'Bundesliga',fullName:'Bundesliga',clubs:[{name:'FC Bayern Munich',city:'Munich'},{name:'Borussia Dortmund',city:'Dortmund'},{name:'Bayer Leverkusen',city:'Leverkusen'},{name:'RB Leipzig',city:'Leipzig'},{name:'Eintracht Frankfurt',city:'Frankfurt'}],managers:['Vincent Kompany','Niko Kovac','Xabi Alonso','Marco Rose']},
  'United States':{name:'MLS',fullName:'Major League Soccer',clubs:[{name:'Inter Miami CF',city:'Miami'},{name:'LA Galaxy',city:'Los Angeles'},{name:'LAFC',city:'Los Angeles'},{name:'Atlanta United',city:'Atlanta'},{name:'Seattle Sounders',city:'Seattle'},{name:'New York City FC',city:'New York'}],managers:['Javier Morales','Greg Vanney','Steve Cherundolo']},
  Senegal:{name:'Ligue 1 Senegal',fullName:'Ligue 1 Senegal',clubs:[{name:'AS Pikine',city:'Pikine'},{name:'Generation Foot',city:'Dakar'},{name:'Casa Sports',city:'Ziguinchor'}],managers:['Malick Daff','Ibrahima Ndoye']},
  Kenya:{name:'FKF-PL',fullName:'FKF Premier League',clubs:[{name:'Gor Mahia',city:'Nairobi'},{name:'AFC Leopards',city:'Nairobi'},{name:'Tusker FC',city:'Nairobi'},{name:'Bandari FC',city:'Mombasa'}],managers:['Jonathan McKinstry','Sammy Omollo']},
  default:{name:'National League',fullName:'National Football League',clubs:[{name:'City FC',city:'Capital City'},{name:'United SC',city:'North City'},{name:'Athletic Club',city:'East City'}],managers:['Coach Williams','Coach Johnson','Coach Okafor']},
};
function getLeague(country){return FOOTBALL_LEAGUES[country]||FOOTBALL_LEAGUES['default'];}

/* ══ HUSTLE SYSTEM ══════════════════════════════════════════════ */
// Career path definitions: id, label, category, base salary (developed world), ladder titles
var CAREER_PATHS={
  // Sports
  football:{label:'Football',cat:'sports',baseSalary:25000,ladder:['Youth Academy','Semi-Pro','Pro','First Team','Star Player','Club Legend','International','World Class','GOAT Contender','All-Time Great'],realPeople:['Victor Osimhen','Ademola Lookman','Bukayo Saka','Jude Bellingham','Kylian Mbappe','Vinicius Jr','Erling Haaland']},
  basketball:{label:'Basketball',cat:'sports',baseSalary:30000,ladder:['High School Star','College','G-League','NBA Bench','NBA Rotation','NBA Starter','All-Star','MVP Contender','Champion','Hall of Famer'],realPeople:['Victor Wembanyama','Luka Doncic','Jayson Tatum','Giannis Antetokounmpo','Stephen Curry','LeBron James']},
  athletics:{label:'Athletics',cat:'sports',baseSalary:8000,ladder:['Club Runner','Regional','National','Continental','World Championships','Olympic Finalist','Olympic Medallist','World Record Holder','Legend','Icon'],realPeople:['Marcell Jacobs','Noah Lyles','Faith Kipyegon','Eliud Kipchoge']},
  // Music
  afrobeats:{label:'Afrobeats',cat:'music',baseSalary:5000,ladder:['Bedroom Producer','Local Shows','Street Buzz','Record Deal','Breakthrough Single','Album Drop','Headliner','Continental Star','Global Act','Icon'],realPeople:['Asake','Rema','Ayra Starr','Omah Lay','Fireboy DML','Ckay','Davido','Burna Boy','Wizkid']},
  hiphop:{label:'Hip-Hop',cat:'music',baseSalary:5000,ladder:['Freestyler','Local Rapper','Mixtape Fame','Signed','Debut Album','Gold Record','Platinum','Multi-Platinum','Hip-Hop Royalty','Legend'],realPeople:['Kendrick Lamar','Travis Scott','Drake','Future','Tyler the Creator','Ice Spice','Doechii']},
  rnb:{label:'R&B/Pop',cat:'music',baseSalary:5000,ladder:['Open Mic','Local Gigs','Online Following','Record Deal','EP Release','Breakthrough','Album Success','Awards Circuit','Superstar','Icon'],realPeople:['SZA','The Weeknd','Frank Ocean','Beyonce','Raye','Jorja Smith','Tems']},
  // Entertainment
  acting:{label:'Acting',cat:'entertainment',baseSalary:10000,ladder:['Drama Student','Theatre Actor','TV Extra','Supporting Role','TV Regular','Film Debut','Leading Role','A-List','Franchise Star','Cultural Icon'],realPeople:['John Boyega','Lupita Nyongo','Chadwick Boseman']},
  comedy:{label:'Comedy',cat:'entertainment',baseSalary:4000,ladder:['Open Mic','Club Circuit','Local Name','Regional Tour','TV Appearance','Special Release','Netflix Special','Sold-Out Arenas','Global Name','Legend'],realPeople:['Dave Chappelle','Hannah Gadsby','Trevor Noah']},
  // Business
  entrepreneur:{label:'Entrepreneur',cat:'business',baseSalary:0,ladder:['Idea Stage','MVP Built','First Customers','Revenue','Profitable','Series A','Series B','Unicorn Candidate','Unicorn','Billionaire Empire'],realPeople:['Aliko Dangote','Strive Masiyiwa','Elon Musk','Jeff Bezos','Rihanna (Fenty)']},
  corporate:{label:'Corporate',cat:'business',baseSalary:28000,ladder:['Graduate Trainee','Analyst','Associate','Manager','Senior Manager','Director','VP','SVP','C-Suite','CEO'],realPeople:[]},
  finance:{label:'Banking/Finance',cat:'business',baseSalary:35000,ladder:['Intern','Junior Analyst','Analyst','Associate','VP','Director','Managing Director','Partner','Head of Division','CFO'],realPeople:[]},
  // Professional
  medicine:{label:'Medicine',cat:'professional',baseSalary:40000,ladder:['Medical Student','Foundation Doctor','Junior Doctor','Registrar','Senior Registrar','Consultant','Senior Consultant','Department Head','Professor','Director of Medicine'],realPeople:[]},
  law:{label:'Law',cat:'professional',baseSalary:35000,ladder:['Law Student','Paralegal','Trainee Solicitor','Solicitor','Senior Solicitor','Associate Partner','Partner','Senior Partner','QC/KC','Chief Justice'],realPeople:[]},
  engineering:{label:'Engineering',cat:'professional',baseSalary:32000,ladder:['Graduate Engineer','Junior Engineer','Engineer','Senior Engineer','Lead Engineer','Principal Engineer','Engineering Manager','Director of Engineering','VP Engineering','CTO'],realPeople:[]},
  // Creative
  music_production:{label:'Music Production',cat:'creative',baseSalary:6000,ladder:['Home Studio','Bedroom Producer','Local Credits','Sync Deals','Signed Producer','Producer for Names','Chart Producer','Award-Winning','Hitmaker','Legendary Producer'],realPeople:['Kel-P','Pheelz','Sarz']},
  fashion:{label:'Fashion Design',cat:'creative',baseSalary:8000,ladder:['Fashion Student','Assistant Designer','Junior Designer','Designer','Senior Designer','Creative Director','Own Label Launch','Sought-After Brand','International Brand','Fashion House Legend'],realPeople:[]},
  // Crime
  crime:{label:'Street Hustle',cat:'crime',baseSalary:3000,ladder:['Corner Boy','Runner','Mid-Level','Street Boss','Local Kingpin','City Operator','Regional','Cartel Adjacent','Untouchable','Myth'],realPeople:[]},
  // Media
  journalism:{label:'Journalism',cat:'media',baseSalary:22000,ladder:['Intern Reporter','Reporter','Staff Writer','Senior Reporter','Editor','Senior Editor','Editor-in-Chief','Media Personality','Anchor/Host','Media Mogul'],realPeople:[]},
  influencer:{label:'Content Creator',cat:'media',baseSalary:2000,ladder:['Micro Creator','1K Followers','10K Followers','100K Followers','Verified','500K','1M Followers','5M Followers','Cultural Tastemaker','Global Phenomenon'],realPeople:[]},
  // Politics
  politics:{label:'Politics',cat:'politics',baseSalary:30000,ladder:['Party Member','Local Councillor','Mayor','State Rep','Senator/MP','Cabinet Minister','Deputy Head','Head of State Candidate','Head of State','Global Statesperson'],realPeople:[]},
};

// Career salary calculation by path level and country
function calcSalary(path,level,country){
  var cp=CAREER_PATHS[path];if(!cp)return 0;
  var base=cp.baseSalary;
  var countryFactor=((COUNTRIES[country] ? COUNTRIES[country].salaryFactor : undefined))||0.5;
  // Exponential curve: level 1 = base, level 10 = 40x base for top paths
  var levelMult=[0,.8,1.3,2,3.2,5.5,9,16,28,40][Math.min(9,level-1)]||1;
  return Math.round(base*levelMult*countryFactor);
}
function makeTeacher(stage){
  var g=Math.random()>.5?'male':'female';
  var prefix=stage==='university'?pick(['Dr','Prof']):pick(['Mr','Mrs','Miss']);
  return{id:'teacher_'+stage,name:prefix+' '+pick(LNAMES),gender:g,age:rnd(28,55),alive:true,relationship:'teacher',personality:pick(['strict','kind','inspiring','boring','tough but fair']),trust:50,closeness:30,subject:pick(['Mathematics','English','Science','History','Economics','Art','PE'])};
}
function makeClassmate(age){
  var g=Math.random()>.5?'male':'female';
  return{id:'cm_'+Date.now()+'_'+rnd(0,9999),name:pick(FNAMES[g])+' '+pick(LNAMES),gender:g,age:age+rnd(-1,1),alive:true,relationship:'classmate',personality:pick(['friendly','quiet','funny','nerdy','popular','sporty','artistic']),trust:rnd(20,50),closeness:rnd(10,40),crush:false};
}
function initSchoolNPCs(stage){
  if(G.education.teacher&&G.education.teacher.id&&G.education.teacher.id.indexOf(stage)>=0)return;
  G.education.teacher=makeTeacher(stage);
  G.education.classmates=[];
  for(var i=0;i<rnd(4,6);i++)G.education.classmates.push(makeClassmate(G.age));
}
function makeCoworker(careerPath){
  var g=Math.random()>.5?'male':'female';
  var roles={football:['Goalkeeper','Defender','Midfielder','Winger','Striker'],basketball:['Point Guard','Shooting Guard','Small Forward','Center'],afrobeats:['Producer','Engineer','Hype Man','A&R'],hiphop:['Producer','DJ','Engineer','Label Rep'],corporate:['Analyst','Associate','Manager','PA'],medicine:['Nurse','Fellow','Registrar','Senior Doctor'],law:['Paralegal','Associate','Barrister','Solicitor'],default:['Colleague','Associate','Team Lead','Analyst']};
  var roleList=roles[careerPath]||roles['default'];
  return{id:'cw_'+Date.now()+'_'+rnd(0,9999),name:pick(FNAMES[g])+' '+pick(LNAMES),gender:g,age:rnd(20,42),alive:true,relationship:'coworker',role:pick(roleList),personality:pick(['ambitious','supportive','lazy','competitive','loyal','difficult']),trust:rnd(30,60),closeness:rnd(20,50)};
}
function initCareerNPCs(careerPath,country){
  if(!G.career.coworkers)G.career.coworkers=[];
  G.career.coworkers=[];
  var count=['football','basketball','athletics'].includes(careerPath)?5:rnd(2,4);
  for(var i=0;i<count;i++)G.career.coworkers.push(makeCoworker(careerPath));
  if(['football','basketball','athletics'].includes(careerPath)){
    var lg=getLeague(country);var club=pick(lg.clubs);
    G.career.club=club.name;G.career.league=lg.name;
    G.career.manager={name:pick(lg.managers),relationship:'manager',trust:50,closeness:40,personality:pick(['demanding','supportive','tactical','motivating','cold'])};
    addLog(G.age,'Signed for '+G.career.club+' ('+G.career.league+').','career');
  } else {
    var mg=Math.random()>.5?'male':'female';
    G.career.manager={name:pick(FNAMES[mg])+' '+pick(LNAMES),relationship:'supervisor',trust:50,closeness:35,personality:pick(['strict','fair','supportive','difficult'])};
  }
}
function updateFootballStats(){
  if(!G.career.path||!['football','basketball','athletics'].includes(G.career.path))return;
  if(!G.career.stats)G.career.stats={goals:0,assists:0,seasonGoals:0,seasonAssists:0,appearances:0,seasonApps:0,performance:50,form:50};
  var perf=getCareerPerf();var apps=rnd(20,38);var goals=0,assists=0;
  if(G.career.path==='football'){var goalRate=(perf/100)*(G.career.level/10);goals=Math.round(apps*goalRate*rnd(4,12)/10);assists=Math.round(apps*(perf/200)*rnd(3,7)/10);}
  G.career.stats.seasonGoals=goals;G.career.stats.seasonAssists=assists;G.career.stats.seasonApps=apps;
  G.career.stats.goals=(G.career.stats.goals||0)+goals;G.career.stats.assists=(G.career.stats.assists||0)+assists;G.career.stats.appearances=(G.career.stats.appearances||0)+apps;
  G.career.stats.form=Math.round(((G.career.stats.form||50)*0.6)+(perf*0.4));G.career.stats.performance=perf;
  if(goals>=20)toast((G.career.club||'')+' — '+goals+' goals this season! ⚽');
  else if(goals>=10)toast(goals+' goals, '+assists+' assists this season.');
}


// Tax calculation by country and income
function calcTax(income,country){
  var style=((COUNTRIES[country] ? COUNTRIES[country].taxStyle : undefined))||'flat';
  if(income<=0)return 0;
  if(style==='UK'){
    var t=0;
    if(income>125140)t+=(income-125140)*.45;
    if(income>50270)t+=Math.min(income-50270,125140-50270)*.4;
    if(income>12570)t+=Math.min(income-12570,50270-12570)*.2;
    return Math.round(t);
  } else if(style==='US'){
    var t=0;
    var brackets=[[578126,.37],[231250,.35],[89076,.32],[44725,.22],[11001,.12],[0,.1]];
    var rem=income;
    for(var[thresh,rate]of brackets){if(rem>thresh){t+=(rem-thresh)*rate;rem=thresh;}}
    return Math.round(t);
  } else if(style==='EU'){
    // Progressive ~25-45%
    var t=0;
    if(income>100000)t+=(income-100000)*.45;
    if(income>55000)t+=Math.min(income-55000,45000)*.37;
    if(income>25000)t+=Math.min(income-25000,30000)*.28;
    if(income>10000)t+=Math.min(income-10000,15000)*.15;
    return Math.round(t);
  } else if(style==='PAYE'){
    // Nigeria/Kenya style: flat-ish, lower overall
    var t=0;
    if(income>5000000)t+=(income-5000000)*.24;
    if(income>1000000)t+=Math.min(income-1000000,4000000)*.19;
    if(income>300000)t+=Math.min(income-300000,700000)*.15;
    if(income>0)t+=Math.min(income,300000)*.07;
    return Math.round(t*0.18); // scale down for currency parity
  }
  return Math.round(income*.15); // flat default
}

// Real people benchmark comparisons
var REAL_PEOPLE_BENCHMARKS={
  football:{5:'Professional footballer',7:'Bundesliga/La Liga regular',9:'Ballon d\'Or contender',10:'Messi/Ronaldo tier -- an era-defining career'},
  basketball:{5:'NBA rotation player',7:'All-Star',9:'MVP/Champion',10:'LeBron tier -- the greatest conversation'},
  afrobeats:{5:'Signed artist with buzz',7:'Davido/Asake level',9:'Burna Boy/Wizkid level',10:'African music icon -- changed the culture'},
  hiphop:{5:'Signed with a deal',7:'Drake/Travis tier',9:'Kendrick Lamar tier',10:'Hip-hop legend -- textbooks will cover this'},
  entrepreneur:{5:'Profitable startup',7:'Unicorn founder',9:'Dangote/Musk level',10:'Reshaping industries -- a generational builder'},
  medicine:{5:'Consultant',8:'Head of Department',10:'Director -- leading the field'},
};

// Asset tiers for realistic purchase tracking
var ASSET_TIERS={
  phone:[{name:'Basic Smartphone',value:150},{name:'Mid-range Phone',value:400},{name:'iPhone/Samsung Flagship',value:1100},{name:'Latest Ultra Flagship',value:1400}],
  car:[{name:'Old Banger',value:800},{name:'Used Toyota/Honda',value:8000},{name:'New Saloon',value:22000},{name:'BMW/Mercedes',value:55000},{name:'Porsche/Range Rover',value:95000},{name:'Ferrari/Lambo',value:280000},{name:'Bugatti/Rolls',value:800000}],
  watch:[{name:'Casio',value:50},{name:'Seiko',value:200},{name:'Tudor',value:3500},{name:'Rolex Submariner',value:14000},{name:'Patek Philippe',value:45000},{name:'Richard Mille',value:180000}],
  property:[{name:'Studio Flat (Rented)',value:0,rent:800},{name:'1-Bed Flat (Owned)',value:180000},{name:'2-Bed House',value:280000},{name:'Family Home',value:500000},{name:'Mansion',value:2000000},{name:'Estate',value:8000000}],
};

var FAMILY_BG={
  poor:{cash:0,statMod:{health:-10,happiness:-10,intelligence:0,looks:-5},label:'Poverty',annualExpenses:1200},
  working:{cash:500,statMod:{health:-5,happiness:-5,intelligence:0,looks:0},label:'Working Class',annualExpenses:4000},
  middle:{cash:5000,statMod:{health:0,happiness:5,intelligence:5,looks:0},label:'Middle Class',annualExpenses:8000},
  wealthy:{cash:50000,statMod:{health:5,happiness:10,intelligence:10,looks:5},label:'Wealthy',annualExpenses:20000},
  elite:{cash:500000,statMod:{health:10,happiness:15,intelligence:15,looks:10},label:'Elite',annualExpenses:60000},
};
// Country-keyed name banks — falls back to global pool
var FNAMES_BY_COUNTRY = {
  Nigeria:{
    male:['Emeka','Tunde','Chidi','Segun','Ade','Babatunde','Oluwaseun','Kelechi','Nnamdi','Chukwuemeka','Rotimi','Gbenga','Femi','Yemi','Bode','Damilola','Tobi','Uche','Obinna','Ikenna','Chidera','Munachi','Ayomide','Olumide','Biodun','Adewale','Onyekachi','Emerie','Taiwo','Kehinde','Oluwafemi','Ifeanyi','Uzoma','Obiora','Chibuzor','Amaechi','Obi','Nonso','Akintola','Funmilayo'],
    female:['Adaeze','Chioma','Yewande','Sade','Amara','Ngozi','Ifunanya','Blessing','Chiamaka','Nneka','Amaka','Ebele','Uchechi','Adunola','Folake','Bisola','Tolani','Shade','Titilayo','Bunmi','Ronke','Toyin','Gbemi','Omotola','Nkechi','Ifeoma','Chinyere','Obiageli','Oluchukwu','Chinwe','Kaosisochukwu','Ogechi','Adaora','Uchenna','Simisoluwa','Oluwakemi','Kehinde','Taiwo','Damilola','Adesola']
  },
  Ghana:{
    male:['Kwame','Kofi','Kweku','Kwabena','Kwesi','Ama','Yaw','Kojo','Fiifi','Kwadwo','Nii','Nana','Ato','Kow','Selorm','Edem','Dela','Delali','Mawuli','Kafui','Prosper','Emmanuel','Prince','Benjamin','Richard','Eric','Samuel','Daniel','Francis','Anthony'],
    female:['Ama','Akua','Abena','Adwoa','Afia','Efua','Afua','Yaa','Araba','Abenaa','Serwaa','Akosua','Nhyira','Yayra','Efuwa','Sena','Delali','Dzifa','Enam','Eyram','Hana','Nana','Mansa','Adoma','Maame','Akye','Fosua','Abiba','Adjoa','Ewurafua']
  },
  Kenya:{
    male:['Kamau','Njoroge','Waweru','Mwangi','Kariuki','Gitau','Mureithi','Kimani','Kiprotich','Kipchoge','Omondi','Otieno','Owino','Achieng','Odhiambo','Barasa','Wekesa','Makokha','Simiyu','Wanjiku','Brian','Kevin','Dennis','Collins','Victor','Raymond','George','Patrick','Stephen','Michael'],
    female:['Wanjiru','Njeri','Wairimu','Wambui','Nyambura','Muthoni','Wangari','Zawadi','Amina','Fatuma','Akinyi','Adhiambo','Awuor','Anyango','Atieno','Chebet','Cherono','Jepchirchir','Kosgei','Rotich','Grace','Faith','Mercy','Joy','Esther','Ruth','Mary','Alice','Catherine','Elizabeth']
  },
  Senegal:{
    male:['Cheikh','Moussa','Ibrahima','Mamadou','Abdoulaye','Ousmane','Modou','Aliou','Babacar','Assane','Serigne','Malick','Idrissa','Alioune','Boubacar','El Hadji','Lamine','Saliou','Pape','Seydou'],
    female:['Fatou','Mariama','Aminata','Ndèye','Aissatou','Rokhaya','Coumba','Khady','Rama','Seynabou','Astou','Binta','Fatoumata','Yacine','Dieynaba','Penda','Marème','Gnilane','Sokhna','Codou']
  },
  Ethiopia:{
    male:['Abebe','Haile','Dawit','Yonas','Girma','Tesfaye','Meles','Solomon','Bekele','Tamrat','Zeleke','Alemayehu','Getachew','Worku','Mekonnen','Tsegaye','Berhane','Mulugeta','Tadesse','Fisseha'],
    female:['Hiwot','Tigist','Selam','Mekdes','Tsehay','Birke','Almaz','Aberash','Selamawit','Yeshi','Frehiwot','Meron','Bethlehem','Eden','Sara','Lidia','Rahel','Meseret','Tigist','Ayelech']
  },
  'United Kingdom':{
    male:['Oliver','George','Harry','Jack','Noah','Charlie','Jacob','Alfie','Freddie','Oscar','Leo','Henry','Ethan','Archie','Theodore','Arthur','Joshua','William','Thomas','James','Liam','Mason','Aiden','Elijah','Logan','Lucas','Muhammad','Rahul','Tariq','Callum'],
    female:['Olivia','Amelia','Isla','Ava','Mia','Lily','Freya','Sophia','Bella','Grace','Emily','Poppy','Evie','Sienna','Millie','Rosie','Layla','Charlotte','Zoe','Hannah','Fatima','Priya','Anaya','Jasmine','Ruby','Maisie','Ellie','Lacey','Holly','Niamh']
  },
  France:{
    male:['Gabriel','Raphael','Leo','Louis','Lucas','Hugo','Nathan','Tom','Mathis','Baptiste','Jules','Antoine','Paul','Arthur','Theo','Quentin','Alexis','Clement','Pierre','Julien'],
    female:['Emma','Jade','Louise','Lea','Manon','Camille','Chloe','Ines','Sarah','Lola','Eva','Clara','Alice','Lucie','Anais','Mathilde','Charlotte','Julie','Laura','Marine']
  },
  Germany:{
    male:['Leon','Luca','Finn','Jonas','Ben','Elias','Paul','Luis','Maximilian','Felix','Noah','Nico','Julian','Tim','Jan','Florian','Moritz','Erik','David','Tobias'],
    female:['Mia','Emma','Hannah','Leonie','Sofia','Lena','Anna','Lea','Laura','Julia','Lina','Marie','Lisa','Sarah','Katharina','Jana','Nina','Luisa','Paula','Amelie']
  },
  'United States':{
    male:['Liam','Noah','Oliver','Elijah','James','Aiden','Lucas','Mason','Ethan','Logan','Jackson','Sebastian','Jack','Owen','Lincoln','Jayden','Cameron','Isaiah','Xavier','Hunter','Jordan','Marcus','Darius','DeShawn','Malik','Jaylen','Tre','Andre','Dominic','Carlos'],
    female:['Emma','Olivia','Ava','Sophia','Isabella','Charlotte','Amelia','Mia','Harper','Evelyn','Abigail','Emily','Ella','Madison','Scarlett','Aaliyah','Destiny','Jasmine','Kiara','Zoe','Brianna','Kayla','Tiffany','Ashley','Monique','Tamara','Lashonda','Imani','Keisha','Shaniqua']
  },
  Canada:{
    male:['Liam','Noah','Oliver','William','Benjamin','Lucas','Henry','Theodore','Ethan','Alexander','Matteo','Connor','Declan','Finn','Kieran','Jasper','Miles','Reid','Zach','Hunter'],
    female:['Olivia','Emma','Charlotte','Amelia','Sophia','Isabella','Ava','Mia','Evelyn','Harper','Aurora','Nora','Luna','Stella','Hazel','Violet','Lily','Isla','Grace','Chloe']
  },
  Brazil:{
    male:['Miguel','Arthur','Heitor','Davi','Gabriel','Bernardo','Samuel','Matteus','Lucas','Enzo','Pedro','Joao','Felipe','Rafael','Gustavo','Vinicius','Luan','Kaique','Thiago','Diego'],
    female:['Sofia','Alice','Helena','Valentina','Laura','Isabella','Manuela','Julia','Heloisa','Luisa','Ana','Beatriz','Camila','Mariana','Fernanda','Leticia','Gabriela','Larissa','Bruna','Natalia']
  },
  India:{
    male:['Aarav','Vivaan','Aditya','Vihaan','Arjun','Reyansh','Mohammed','Sai','Arnav','Ayaan','Krishna','Ishaan','Shaurya','Atharva','Advik','Pranav','Kabir','Dhruv','Raj','Rohan','Karan','Vikram','Nikhil','Rahul','Amit','Suresh','Deepak','Rajesh','Pradeep','Sunil'],
    female:['Saanvi','Aadya','Kiara','Diya','Pihu','Ananya','Riya','Fatima','Priya','Zara','Aadhya','Myra','Sara','Pari','Shreya','Pooja','Neha','Anjali','Divya','Kavya','Sunita','Rekha','Meena','Sushma','Lakshmi','Gita','Parvati','Radha','Usha','Savita']
  },
  Japan:{
    male:['Haruto','Yuto','Sota','Yuki','Hayato','Haruki','Ryusei','Koki','Sora','Ren','Kaito','Shota','Hiroto','Tomoya','Yosuke','Naoki','Takeshi','Kenji','Daisuke','Satoshi'],
    female:['Yui','Hina','Sakura','Riko','Miu','Yuna','Mei','Nana','Misaki','Aoi','Rin','Ayano','Momoko','Akane','Suzuki','Haruna','Mio','Saki','Noa','Yuki']
  },
  'South Korea':{
    male:['Minjun','Seonjun','Junho','Hyunjun','Jaewon','Siwoo','Juwon','Seojun','Yechan','Dohyun','Taehyung','Jungkook','Seokjin','Namjoon','Hoseok','Yoongi','Jimin','Hyunwoo','Donghyun','Jihoon'],
    female:['Soojin','Jiwoo','Minji','Jiyeon','Yuna','Seoyeon','Dahyun','Chaeyoung','Nayeon','Jihyo','Yeji','Ryujin','Lia','Yuna','Chaeryeong','Sana','Momo','Mina','Tzuyu','Jeongyeon']
  },
};

// Global fallback pools
var FNAMES = {
  male:['James','Oliver','Liam','Noah','Ethan','Marcus','Leon','Carlos','Ahmed','Ravi','Kofi','Emeka','Soren','Mateo','Finn'],
  female:['Amara','Sophie','Layla','Priya','Nadia','Zoe','Fatima','Isabella','Yuki','Chioma','Aaliyah','Rosa','Sade','Hana','Ines'],
  nonbinary:['Alex','Jordan','River','Sage','Quinn','Avery','Morgan','Rowan','Sasha','Emery']
};

// Get country-appropriate first names
function getFnames(gender, country){
  var pool = FNAMES_BY_COUNTRY[country];
  if(pool && pool[gender] && pool[gender].length) return pool[gender];
  return FNAMES[gender] || FNAMES.male;
}

// Country-keyed last names
var LNAMES_BY_COUNTRY = {
  Nigeria:['Okafor','Eze','Okonkwo','Chukwu','Adeyemi','Babatunde','Adesanya','Ogunleye','Adeleke','Fashola','Dangote','Tinubu','Obaseki','Obiora','Nwachukwu','Onwuka','Uzor','Ibe','Igwe','Ogbu','Abiodun','Akinwale','Olawale','Adewale','Afolabi','Akindele','Balogun','Fagbemi','Gbadebo','Ilori','Lagbaja','Makinde','Nwosu','Odion','Osei','Salami','Taiwo','Usman','Yusuf','Zubair'],
  Ghana:['Mensah','Asante','Nkrumah','Owusu','Boateng','Amponsah','Adjei','Amoah','Appiah','Asare','Atta','Bonsu','Darko','Duah','Frimpong','Gyasi','Kwarteng','Manu','Ofori','Opoku','Osei','Quaye','Sarpong','Twum','Wiredu','Acheampong','Addo','Adusei','Afriyie','Akoto'],
  Kenya:['Kamau','Mwangi','Njoroge','Kariuki','Waweru','Gitau','Omondi','Otieno','Owino','Odhiambo','Muthoni','Wambua','Kilonzo','Mutua','Mutu','Njenga','Karanja','Kimani','Mbeki','Ndegwa','Nyambura','Ochieng','Ogola','Ouma','Rotich','Sang','Simiyu','Wekesa','Achieng','Barasa'],
  Senegal:['Diallo','Diop','Fall','Faye','Gueye','Mbaye','Ndiaye','Ndoye','Sarr','Sow','Sy','Thiam','Toure','Wade','Barry','Camara','Cisse','Coulibaly','Diouf','Keita'],
  Ethiopia:['Abebe','Bekele','Girma','Haile','Kebede','Meles','Tadesse','Tesfaye','Wolde','Yohannes','Alemu','Araya','Berhe','Desta','Firew','Gebre','Kahsay','Mekonnen','Mulugeta','Tekle'],
  'United Kingdom':['Smith','Jones','Williams','Taylor','Brown','Davies','Evans','Wilson','Thomas','Roberts','Johnson','White','Wright','Thompson','Walker','Robinson','Wood','Hall','Clarke','Mitchell','Young','Harris','Martin','King','Lewis','Cox','Morgan','Phillips','Turner','Parker'],
  France:['Martin','Bernard','Thomas','Petit','Robert','Richard','Durand','Dubois','Moreau','Laurent','Simon','Michel','Lefebvre','Leroy','Roux','David','Bertrand','Morel','Fournier','Girard','Bonnet','Dupont','Lambert','Fontaine','Rousseau','Vincent','Muller','Legrand','Garnier','Faure'],
  Germany:['Mueller','Schmidt','Schneider','Fischer','Weber','Meyer','Wagner','Becker','Schulz','Hoffmann','Koch','Richter','Bauer','Klein','Wolf','Schroeder','Neumann','Schwarz','Zimmermann','Braun','Krueger','Hartmann','Lange','Werner','Schmitz','Krause','Meier','Lehmann','Huber','Koenig'],
  'United States':['Smith','Johnson','Williams','Brown','Jones','Garcia','Miller','Davis','Rodriguez','Martinez','Hernandez','Lopez','Gonzalez','Wilson','Anderson','Thomas','Taylor','Moore','Jackson','Martin','Lee','Perez','Thompson','White','Harris','Sanchez','Clark','Ramirez','Lewis','Robinson'],
  Canada:['Smith','Brown','Tremblay','Martin','Roy','Wilson','Macdonald','Gagnon','Johnson','Campbell','Taylor','Leblanc','Williams','Anderson','Thompson','Fortin','Cote','Lavoie','Bouchard','Morin'],
  Brazil:['Silva','Santos','Oliveira','Souza','Rodrigues','Ferreira','Alves','Pereira','Lima','Gomes','Costa','Ribeiro','Martins','Carvalho','Almeida','Lopes','Sousa','Fernandes','Vieira','Barbosa'],
  India:['Patel','Sharma','Singh','Kumar','Gupta','Joshi','Rao','Mehta','Nair','Iyer','Reddy','Agarwal','Bose','Chatterjee','Chaudhary','Das','Devi','Ghosh','Khan','Krishnan','Malhotra','Mishra','Mukherjee','Pillai','Shah','Tiwari','Verma','Yadav','Banerjee','Bhat'],
  Japan:['Sato','Suzuki','Takahashi','Tanaka','Watanabe','Ito','Yamamoto','Nakamura','Kobayashi','Kato','Yoshida','Yamada','Sasaki','Yamaguchi','Matsumoto','Inoue','Kimura','Hayashi','Shimizu','Saito'],
  'South Korea':['Kim','Lee','Park','Choi','Jung','Kang','Cho','Yoon','Jang','Lim','Han','Oh','Seo','Shin','Kwon','Hwang','Ahn','Song','Ryu','Hong'],
};

function getLnames(country){
  return LNAMES_BY_COUNTRY[country] || LNAMES_BY_COUNTRY['United States'];
}

var LNAMES=['Okafor','Mensah','Diallo','Johnson','Williams','Smith','Patel','Tanaka','Silva','Kim','Osei','Ibrahim','Eze','Asante','Nkrumah','Owusu'];

var PERSONALITIES=['supportive','strict','absent','loving','critical','nurturing','cold','ambitious'];

/* === SECTION 2: GAME STATE === */
var G=null;
/* shared family-name for this playthrough */
var _tempFamilyName = null;
function getFamilyName(){
  if(_tempFamilyName) return _tempFamilyName;
  var country=(typeof G!=='undefined'&&G&&G.country)||'Nigeria';
  _tempFamilyName = pick(getLnames(country));
  return _tempFamilyName;
}
function newState(name,gender,country,stateValue,birthYear){
  _tempFamilyName = null;
  var bg=assignBackground(stateValue);
  var b=FAMILY_BG[bg]||FAMILY_BG['working'];
  var rs=(base,mod)=>clamp(base+mod+rnd(-10,10),1,100);
  var famName=getFamilyName();
  return{
    name:name+' '+famName, firstName:name, lastName:famName, _familyName:famName,
    gender,country,birthYear,age:0,background:bg,state:stateValue,stateName:stateValue,
    stats:{health:rs(70,b.statMod.health),happiness:rs(65,b.statMod.happiness),intelligence:rs(50,b.statMod.intelligence),looks:rs(55,b.statMod.looks)},
    hidden:{karma:50,reputation:40,stress:20,luck:rnd(30,70)},
    finances:{cash:b.cash,debt:0,annualIncome:0,annualExpenses:b.annualExpenses,netWorth:b.cash,investments:[],taxPaid:0,lifetimeEarnings:0},
    career:{path:null,title:'Unemployed',level:0,salary:0,yearsInRole:0,employer:null,industry:null,history:[],peakLevel:0,club:null,league:null,manager:null,coworkers:[],stats:{goals:0,assists:0,seasonGoals:0,seasonAssists:0,appearances:0,seasonApps:0,performance:50,form:50}},
    education:{stage:'none',institution:null,gpa:null,examScores:{},degree:null,graduated:false,droppedOut:false,currentYear:null,teacher:null,classmates:[],primaryGrade:null,secondaryGrade:null,uniApplied:false,uniAccepted:false,uniApplicationYear:null,uniRejected:false,uniPrestige:0},
    npcs:{mother:makeParent('mother'),father:makeParent('father'),siblings:[],friends:[],enemies:[],partner:null,exes:[],children:[],rivals:[],mentor:null},
    fame:{level:0,popularity:rnd(35,55),fanCount:0,publicImage:50,scandals:[],awards:[],pressRel:50,ig:0,tt:0,yt:0,fb:0,lastPostAge:{ig:null,tt:null,yt:null,fb:null},postsCount:{ig:0,tt:0,yt:0,fb:0}},
    assets:{phone:null,car:null,properties:[],wardrobe:{tier:'basic',value:0},jewelry:[],watches:[],gadgets:[],vehicles:[]},
    world:{year:birthYear,economy:'stable',politicalClimate:'normal',activeTrends:[],events:[],_economyYears:0,_economyLen:5},
    flags:{started_school:false,finished_primary:false,started_secondary:false,passed_major_exam:false,failed_major_exam:false,started_university:false,dropped_out_uni:false,graduated_university:false,had_first_friend:false,had_first_crush:false,first_heartbreak_age:null,been_bullied:false,was_bully:false,first_job:false,ever_fired:false,ever_arrested:false,has_addiction:false,married:false,divorced:false,has_children:false,parent_died:false,immigrated:false,became_famous:false,diagnosed_depression:false},
    lifeLog:[],achievements:{unlocked:[],meta:[]},generation:{number:1,parentLegacy:null},
    _fired:[],_currentEvent:null,_awaiting:false,_deathYear:null,_causeOfDeath:null,
    _activeChain:null,
    _pendingNotifications:[],
    hustle:{active:[],history:[],totalEarned:0},
    business:{active:null,revenue:0,expenses:0,level:0,staff:0,founded:null,name:null,type:null},
    skills:{coding:0,design:0,writing:0,music:0,teaching:0,trading:0,social:0},
  };
}

/* === SECTION 3: NPC SYSTEM === */
function makeParent(role){
  var isMale=role==='father';
  var country=(typeof G!=='undefined'&&G&&G.country)||'Nigeria';
  var names=getFnames(isMale?'male':'female',country);
  var famName=(typeof G!=='undefined'&&G&&G._familyName)?G._familyName:getFamilyName();
  return{id:role,name:pick(names)+' '+famName,gender:isMale?'male':'female',age:rnd(24,38),alive:true,causeOfDeath:null,deathAge:null,relationship:role,personality:pick(PERSONALITIES),trust:rnd(60,85),closeness:rnd(60,85),history:[],stats:{health:80,happiness:60},occupation:null,wealthLevel:2,isRealPerson:false,married:false};
}
function makeFriend(age){
  var g=Math.random()>.5?'male':'female';
  var country=(typeof G!=='undefined'&&G&&G.country)||'Nigeria';
  return{id:'fr_'+Date.now()+rnd(0,999),name:pick(getFnames(g,country))+' '+pick(getLnames(country)),gender:g,age:age+rnd(-2,2),alive:true,causeOfDeath:null,deathAge:null,relationship:'friend',personality:pick(['loyal','fun','ambitious','quiet','troublemaker']),trust:rnd(50,80),closeness:rnd(50,80),history:[],stats:{health:80,happiness:65},occupation:null,wealthLevel:1,isRealPerson:false,married:false};
}

/* makeChild — creates a new child NPC */
function makeChild(){
  var g=Math.random()>0.5?'male':'female';
  var country=(G&&G.country)||'Nigeria';
  var famName=(G&&G._familyName)?G._familyName:pick(getLnames(country));
  var fName=pick(getFnames(g,country));
  return{id:'child_'+Date.now()+rnd(0,999),
    name:fName+' '+famName, firstName:fName, lastName:famName, _named:false,
    gender:g,age:0,alive:true,causeOfDeath:null,deathAge:null,
    relationship:'child',personality:pick(PERSONALITIES||['caring','curious','energetic','quiet']),
    trust:70,closeness:75,history:[],
    stats:{health:85,happiness:70},
    needs:[],
    education:{stage:'none',grade:null,gpa:null},
    career:{path:null,title:'Student'},
    isRealPerson:false};
}

/* === SECTION 4: EVENT LIBRARY (Stage 2 -- 100+ events) === */

// ch() helper: build a choice object concisely
function ch(text,narrative,stats,hidden,flags,finances,npcEffects,special){
  return{text,condition:null,outcome:{narrative,stats:stats||{},hidden:hidden||{},flags:flags||{},finances:finances||{},npcEffects:Array.isArray(npcEffects)?npcEffects:(npcEffects?[npcEffects]:[]),triggerEvent:null,achievement:null,...(special||{})}};
}

var EVENTS=[

// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
// BIRTH & EARLY CHILDHOOD (0-4)
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
{id:'birth',title:'You Are Born',narrative:'You arrive into the world with no memory, no knowledge of what awaits. Only the sound of voices and the warmth of hands that will shape everything that comes after.',category:'family',conditions:{ageMin:0,ageMax:0,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['__born'],isMilestone:true,repeatable:false,probability:1},choices:[
  ch('Begin your story.','Your story starts now. The world is still just warmth and noise and the faces of two people who will mean everything.',{},{},{__born:true},{})
]},

{id:'early_memory',title:'A Memory That Sticks',narrative:"You're very small. Something happens that you won't fully understand until much later -- but it imprints. The brain is strange that way. It keeps what it wants.",category:'family',conditions:{ageMin:2,ageMax:4,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['__born'],flagsExcluded:['early_memory_positive','early_memory_negative'],isMilestone:false,repeatable:false,probability:.8},choices:[
  ch('A warm one -- laughter, safety, light.','The feeling of being held. Of being the only thing in the world that mattered to someone. You will carry this without knowing it.',{happiness:8,health:3},{karma:5},{early_memory_positive:true},{}),
  ch('A cold one -- tension, raised voices, a door slamming.','You do not know the word for what you felt. But the body remembers what the mind cannot name.',{happiness:-8},{stress:12},{early_memory_negative:true},{}),
]},

// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
// CHILDHOOD (5-12)
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
{id:'first_day_school',title:'First Day of School',narrative:'Your mother holds your hand a little too tight as you approach the school gates. Everything is loud and unfamiliar. Hundreds of kids you have never seen before. A kid waves at you from across the yard.',category:'school',conditions:{ageMin:5,ageMax:5,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['started_school'],isMilestone:true,repeatable:false,probability:1},choices:[
  ch('Wave back and go introduce yourself',"His name is Chidi. He shares half his sandwich without being asked. By the second week you are inseparable. You have made your first real friend.",{happiness:10,intelligence:2},{karma:5},{started_school:true,had_first_friend:true},{},[]),
  ch('Stay close to your mother -- the noise is too much',"You spend the first week alone, watching how everything works. You learn more about people from observation than most kids learn from socialising.",{happiness:-6,intelligence:6},{stress:8},{started_school:true},{},[]),
]},

{id:'strict_parent_grades',title:'The Report Card',narrative:"Your grades came back. They're not bad -- but they're not what your parent expected. The atmosphere in the house changes. Dinner is quiet.",category:'family',conditions:{ageMin:6,ageMax:10,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['started_school'],flagsExcluded:[],isMilestone:false,repeatable:false,probability:.4},choices:[
  ch('Promise to do better and actually mean it.','Something about the disappointment in their eyes sharpens you. You stay up late. You ask questions in class. It pays off.',{intelligence:10,happiness:-5},{stress:8},{academic_pressure:true},{}),
  ch("Tune it out -- grades aren't everything.","You learn early that external approval is a trap. The freedom costs you in marks but you're happier for it.",{happiness:5,intelligence:-3},{stress:-5},{},{})
]},

{id:'childhood_talent',title:'Something You Are Good At',narrative:'You notice you have a gift. Something that comes easier to you than it does to anyone else in the room. A teacher stays after class to say something to you. Your classmates notice too.',category:'school',conditions:{ageMin:8,ageMax:12,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['talent_found'],isMilestone:false,repeatable:false,probability:.5},choices:[
  ch('Pursue it seriously -- practice every day.','You spend hours on it. Your hands or your mind or your body learns its shape. You get noticeably better. It becomes part of who you are.',{intelligence:12,happiness:8},{stress:5},{talent_found:true,talent_pursued:true},{}),
  ch('Enjoy it casually -- no pressure.','You keep it as something that is yours and not a performance for others. It makes you happy without becoming a burden.',{happiness:14},{karma:3},{talent_found:true},{}),
  ch("Hide it -- you\'d rather blend in.",'You suppress it. You want to be normal. Some part of you will always wonder who you could have been if you had var it show.',{happiness:-5,intelligence:-5},{stress:8},{talent_found:true,talent_hidden:true},{}),
]},

{id:'childhood_best_friend',title:'A Real Friend',narrative:"There's someone in your class who gets it. Gets you. The jokes land. The silences aren't awkward. They sit next to you without being asked. Something clicks.",category:'school',conditions:{ageMin:7,ageMax:11,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['started_school'],flagsExcluded:['had_first_friend'],isMilestone:false,repeatable:false,probability:.55},choices:[
  ch('Lean into it -- this friendship is real.','You become the kind of friends who know each other completely. The kind that last decades if you var them.',{happiness:15},{karma:5},{had_first_friend:true,childhood_bestfriend:true},{}),
  ch('Keep your distance -- you trust slowly.','You like them but hold back. The friendship stays surface level. Later you realise some walls cost more than they protect.',{happiness:5},{stress:-3},{had_first_friend:true},{}),
]},

{id:'family_money_crisis',title:'The Money Problems',narrative:"You\'re old enough now to understand what the hushed conversations through the walls mean. Your parents are struggling. Bills are piling up. The tension in the house is constant and suffocating.",category:'family',conditions:{ageMin:8,ageMax:12,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['family_poor_flag'],isMilestone:false,repeatable:false,probability:.3},choices:[
  ch('Find small ways to help -- run errands, sell things.','You start earning tiny amounts on your own. It barely dents the problem but your father looks at you differently from that day forward.',{intelligence:6,happiness:4},{karma:10,reputation:5},{family_poor_flag:true,entrepreneurial_early:true},{cash:60},[{npcId:'father',trust:18},{npcId:'mother',trust:12}]),
  ch('Bury yourself in school -- grades are your way out.','You understand instinctively that education is the exit. You become obsessive about it in ways that will define you.',{intelligence:12,happiness:-8},{stress:18},{family_poor_flag:true,academic_driven:true},{}),
  ch('Withdraw and go quiet.','The weight of it sits on you without anywhere to go. You become a little harder, a little more closed than you needed to be.',{happiness:-15,intelligence:2},{stress:22,karma:-2},{family_poor_flag:true},{}),
]},

{id:'childhood_religion',title:'Faith at the Dinner Table',narrative:"Your family is religious. It is not discussed -- it simply is. You say grace, you go on Sundays, you know the words. Whether you believe them is another question.",category:'family',conditions:{ageMin:7,ageMax:11,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['religion_explored'],isMilestone:false,repeatable:false,probability:.45},choices:[
  ch('You believe. Fully and without question.','Faith gives you a framework. Something to hold onto. It shapes your morality quietly and permanently.',{happiness:8},{karma:8},{religion_explored:true,religious:true},{}),
  ch('You follow the rituals but feel nothing.','You perform it. You know all the words. But even at this age you feel the hollow where the belief should be.',{},{stress:5},{religion_explored:true},{}),
  ch('You start asking questions -- too many questions.','Your questions embarrass your parents. But they are honest ones. You have always needed to understand why.',{intelligence:8,happiness:-3},{stress:8},{religion_explored:true,questioning_mind:true},{}),
]},

{id:'primary_school_fight',title:'It Came to Blows',narrative:'A disagreement in the schoolyard escalated. Words, then shoving, then a proper fight in front of everyone. The whole school is watching.',category:'school',conditions:{ageMin:8,ageMax:12,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['started_school'],flagsExcluded:['been_in_fight'],isMilestone:false,repeatable:false,probability:.3},choices:[
  ch('You threw the first punch.','You won. You also got suspended for three days. Your mother could not look at you. Your classmates could not stop looking at you.',{happiness:5,health:-3},{reputation:12,karma:-8,stress:5},{been_in_fight:true,started_fight:true},{}),
  ch('You took the hits until teachers intervened.','You var them swing first. People remember who stayed calm. You walked away bleeding but looking like the better person.',{happiness:-5,health:-8},{reputation:8,karma:6,stress:10},{been_in_fight:true},{}),
  ch('You talked your way out of it before it escalated.','Nobody threw a punch. A few people respected it. The aggressors called you scared. You called it smart.',{intelligence:8,happiness:3},{reputation:5,karma:10},{been_in_fight:true,avoided_fight:true},{}),
]},

{id:'childhood_reading',title:'You Discover Books',narrative:"You finish your homework early. Your mother puts a book in your hands -- an old one, dog-eared. You start reading just to have something to do. You don\'t stop until 2am.",category:'school',conditions:{ageMin:8,ageMax:12,gender:'any',countries:'any',statsMin:{intelligence:45},statsMax:{},flagsRequired:[],flagsExcluded:['bookworm_flag'],isMilestone:false,repeatable:false,probability:.4},choices:[
  ch('You devour it. Then find the next one.','Books become the place you go when reality is too loud. You become someone who knows things from somewhere other than school.',{intelligence:14,happiness:8},{stress:-8},{bookworm_flag:true},{}),
  ch('You finish it but it does not take hold.','It was fine. You prefer other things. You are not a reader -- and that is a choice you will make again and again.',{intelligence:3},{},{},{}),
]},

// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
// TEENAGE YEARS (13-17)
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
{id:'secondary_start',title:'Secondary School',narrative:"New school. New people. Everyone from primary is scattered. The social hierarchy here was built before you arrived and you\'re somewhere near the bottom of it.",category:'school',conditions:{ageMin:11,ageMax:12,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['started_school'],flagsExcluded:['started_secondary'],isMilestone:true,repeatable:false,probability:1},choices:[
  ch('Find your people -- actively look for your group.','It takes three weeks. But you find them. A small, strange, specific group of people who understand you without much explanation.',{happiness:12},{reputation:10},{started_secondary:true,found_secondary_group:true},{}),
  ch('Go quiet -- observe before committing to anyone.','You spend the first term watching. By the time you make a move you know exactly where you stand and who is worth knowing.',{intelligence:10,happiness:-5},{stress:5},{started_secondary:true},{}),
  ch('Try to be popular. Play the social game hard.','You say the right things to the right people. You wear the right things. You are not exactly popular but you are not invisible. It costs something you cannot name.',{looks:4,happiness:6},{reputation:18,stress:12},{started_secondary:true,social_climber:true},{}),
]},

{id:'first_crush',title:'The First One',narrative:"There is someone. You don\'t know when it started exactly. But you find yourself looking for them in every room before you realise who you are looking for.",category:'romance',conditions:{ageMin:13,ageMax:16,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['started_secondary'],flagsExcluded:['had_first_crush'],isMilestone:false,repeatable:false,probability:.65},choices:[
  ch('Tell them. Say the actual words.',"You say it. Your heart does something you have never felt before. They look at you with something close to kindness -- and then var you down as gently as anyone can. You survive it. Just.",{happiness:-10,intelligence:5},{karma:8,stress:18},{had_first_crush:true},{},[],{_setFlag:(s)=>{s.flags.first_heartbreak_age=s.age;}}),
  ch('Write it down. Send nothing.',"You write three drafts. You delete all of them. You tell yourself it's wisdom. Most of you knows it's fear.",{happiness:-4,intelligence:4},{stress:8},{had_first_crush:true},{}),
  ch('Act on it. Get close to them by any means.','You engineer situations to be near them. It works, slowly. You become something. Not what you wanted -- but something.',{happiness:6,looks:2},{reputation:5},{had_first_crush:true,first_romance_attempt:true},{}),
]},

{id:'peer_pressure',title:'The Circle',narrative:"Behind the school block, older students gather after hours. One of them offers you something. Everyone pauses to see what you will do.",category:'school',conditions:{ageMin:13,ageMax:17,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['started_secondary'],flagsExcluded:['peer_pressure_faced'],isMilestone:false,repeatable:false,probability:.4},choices:[
  ch("Take it. You don't want to look afraid.","You cough. Someone laughs -- not meanly. You're in now. You tell yourself once. You almost believe it.",{health:-6,happiness:5},{reputation:12,stress:-5,karma:-4},{peer_pressure_faced:true,tried_substances:true},{}),
  ch('Decline and leave.',"Some of them sneer. You don\'t look back. You feel both proud of yourself and very alone walking away.",{health:3,happiness:-6},{karma:10,reputation:-5},{peer_pressure_faced:true},{}),
  ch('Take it but fake -- play the game without the damage.','Nobody notices. You are accepted without the cost. Knowing how to read a room is its own form of intelligence.',{intelligence:6},{reputation:10},{peer_pressure_faced:true,street_smart:true},{}),
]},

{id:'exam_pressure_teen',title:'The Stakes Are Real Now',narrative:"The exams are coming. The ones that determine the track you go on. Your parents remind you daily. Your teachers remind you weekly. The weight of it is constant.",category:'school',conditions:{ageMin:14,ageMax:16,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['started_secondary'],flagsExcluded:['felt_exam_pressure'],isMilestone:false,repeatable:false,probability:.6},choices:[
  ch('Lock in. Study every spare hour.','You sacrifice your social life for six months. Your friends drift slightly. Your grades move sharply upward.',{intelligence:15,happiness:-10},{stress:20},{felt_exam_pressure:true,studied_hard:true},{}),
  ch('Balance it -- work hard but keep living.','You manage it well. Not the top scores but solid ones. You arrive at the finish line tired but whole.',{intelligence:8,happiness:3},{stress:8},{felt_exam_pressure:true},{}),
  ch('Crumble under the pressure.','The anxiety is crippling. You go blank in the exam hall. The results are disappointing and so is the conversation afterward.',{intelligence:-3,happiness:-15},{stress:30},{felt_exam_pressure:true,failed_under_pressure:true},{}),
]},

{id:'teen_heartbreak',title:'It Ends',narrative:"The relationship -- or whatever it was -- is over. You did not see it coming as clearly as you should have. Or maybe you saw it coming and hoped you were wrong.",category:'romance',conditions:{ageMin:14,ageMax:17,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['first_romance_attempt'],flagsExcluded:['teen_heartbreak_flag'],isMilestone:false,repeatable:false,probability:.7},choices:[
  ch('Fall apart briefly. Let yourself feel it.','You cry. You listen to music that makes it worse. You tell your best friend everything. A month later something in you is stronger and you cannot explain why.',{happiness:-14},{stress:10,karma:5},{teen_heartbreak_flag:true},{},[],{_setFlag:(s)=>{if(!s.flags.first_heartbreak_age)s.flags.first_heartbreak_age=s.age;}}),
  ch('Shut it down. Act like it never happened.','You turn it off. People say you seem fine. You are not fine. This will come out somewhere else, later, in a form you will not recognise.',{happiness:-5},{stress:18,karma:-3},{teen_heartbreak_flag:true,repressed_emotion:true},{}),
]},

{id:'teen_identity',title:'Who Are You?',narrative:"Somewhere between fourteen and seventeen it happens: you start to realise you are a person. Not just a child, not yet an adult. Something in between that has its own needs and edges and contradictions.",category:'general',conditions:{ageMin:14,ageMax:17,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['identity_formed'],isMilestone:false,repeatable:false,probability:.5},choices:[
  ch('You lean into being different. Deliberately.','You stop performing normal. You find the version of yourself that is interesting rather than safe. Some people leave. Better ones arrive.',{happiness:10,looks:4},{karma:5,reputation:8},{identity_formed:true,identity_authentic:true},{}),
  ch('You conform -- blend in, stay safe.','You sand down your edges. It is easier. The cost is invisible until it is not.',{happiness:-5},{stress:10},{identity_formed:true,identity_conformist:true},{}),
  ch("You're still figuring it out. That's fine.",'You accept the uncertainty. You hold the questions without demanding answers. Not everyone knows at seventeen and that is the honest truth.',{intelligence:6,happiness:4},{karma:3},{identity_formed:true},{}),
]},

{id:'teen_part_time_job',title:'Earning Your Own',narrative:"You want money that is not given to you. A part-time job came up -- small hours, basic pay. But the idea of your own money, earned by your own hands, is entirely new.",category:'career',conditions:{ageMin:15,ageMax:17,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['first_job','teen_job'],isMilestone:false,repeatable:false,probability:.5},choices:[
  ch('Take the job. Even if it cuts into study time.','The first wage is not much. But you hold it differently than money you were given. Something shifts in how you see yourself.',{happiness:8,intelligence:4},{reputation:6},{teen_job:true,first_job:true},{cash:200,annualIncome:2400}),
  ch('Decline -- focus entirely on school for now.','You stay focused. The grades benefit. The financial lesson will come later, from experience that costs more.',{intelligence:5,happiness:-3},{stress:-5},{},{},{}),
]},

{id:'teen_mental_health',title:'The Weight of It',narrative:"You have been feeling off for months. Not sad exactly -- but like something has been dimmed. The energy is wrong. The motivation is thin.",category:'health',conditions:{ageMin:14,ageMax:17,gender:'any',countries:'any',statsMin:{},statsMax:{happiness:45},flagsRequired:[],flagsExcluded:['sought_help_teen'],isMilestone:false,repeatable:false,probability:.35},choices:[
  ch('Talk to someone -- a parent, a counsellor, anyone.','You find the words eventually. It is harder than anything you expected. But the moment someone listens you feel less like you are disappearing.',{happiness:12},{stress:-15,karma:5},{sought_help_teen:true,in_therapy:true},{}),
  ch('Push through it alone.','You function. Technically. But pushing through is not healing and the body keeps score.',{happiness:-8},{stress:20},{},{},{}),
  ch('Throw yourself into something -- sport, music, anything.','You find a channel for it. It does not fix the root but it gives you a place to put the weight.',{happiness:5,health:5},{stress:-8},{},{},{}),
]},

{id:'teen_social_media',title:'The Comparison Machine',narrative:"Social media is your constant companion. The highlight reels of people your age. The numbers. The comments. It is impossible to look away.",category:'general',conditions:{ageMin:13,ageMax:17,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['social_media_faced'],isMilestone:false,repeatable:false,probability:.5},choices:[
  ch('Curate carefully -- post strategically, consume rarely.','You learn early what most adults never do: that the feed is a performance and you are both audience and actor.',{intelligence:8,looks:4},{reputation:10},{social_media_faced:true,media_savvy:true},{}),
  ch('Fall into it completely.','You spend hours a day in it. Your self-worth starts to correlate with numbers you cannot fully control.',{happiness:-8,looks:3},{stress:15,reputation:5},{social_media_faced:true},{}),
  ch('Step back. Barely use it.','You opt out mostly. You feel genuinely less anxious. You miss some things. You gain others.',{happiness:8},{stress:-10,karma:3},{social_media_faced:true},{}),
]},

{id:'waec_exams',title:'The WAEC Results',narrative:"The results are out. Everyone in the school is checking at the same time. The piece of paper that arrives determines the next several years of your life.",category:'school',conditions:{ageMin:16,ageMax:17,gender:'any',countries:['Nigeria','Ghana'],statsMin:{},statsMax:{},flagsRequired:['started_secondary'],flagsExcluded:['sat_waec'],isMilestone:true,repeatable:false,probability:1},choices:[
  ch('You passed well -- six credits and above including English and Maths.','The pride on your parents faces is worth every night of studying. Doors that were theoretical are now real.',{intelligence:10,happiness:15},{reputation:12,stress:-10},{sat_waec:true,passed_waec:true},{}),
  ch("You scraped through -- results were mixed.",'Enough to move forward. Not enough to brag about. You file the disappointment somewhere useful.',{intelligence:3,happiness:-5},{stress:10},{sat_waec:true,scraped_waec:true},{}),
  ch('You failed. Some core subjects are a D or below.','Your parents do not speak much that evening. You will have to resit. The year you expected has been extended.',{happiness:-20,intelligence:-3},{stress:30},{sat_waec:true,failed_waec:true},{}),
]},

{id:'gcse_exams',title:'GCSE Results Day',narrative:"You collect the envelope with shaking hands. Your friends are nearby, all equally anxious. The postcode lottery of what these grades open or close.",category:'school',conditions:{ageMin:16,ageMax:16,gender:'any',countries:['United Kingdom'],statsMin:{},statsMax:{},flagsRequired:['started_secondary'],flagsExcluded:['sat_gcse'],isMilestone:true,repeatable:false,probability:1},choices:[
  ch('Mostly 7s, 8s, 9s -- you nailed it.','Your teachers look at you differently from that afternoon. Sixth form offers arrive. A-levels become the conversation.',{intelligence:12,happiness:14},{reputation:12,stress:-12},{sat_gcse:true,passed_gcse:true},{}),
  ch('Mixed bag -- some good, some not.','Enough to move forward. You adjust your plans. Not every door opens but enough of them do.',{intelligence:4,happiness:-4},{stress:8},{sat_gcse:true},{}),
  ch('Poor results. Below expectations.','The conversation with your parents is long. The paths you assumed are narrowing. Resits become a real possibility.',{happiness:-18,intelligence:-2},{stress:28},{sat_gcse:true,failed_gcse:true},{}),
]},

{id:'sat_test',title:'SAT Day',narrative:"You wake up at 5am. The test centre is cold. You have been preparing for months. Four hours of questions that will anchor your college applications.",category:'school',conditions:{ageMin:16,ageMax:17,gender:'any',countries:['United States','Canada'],statsMin:{},statsMax:{},flagsRequired:['started_secondary'],flagsExcluded:['sat_done'],isMilestone:true,repeatable:false,probability:1},choices:[
  ch('Scored above 1400 -- strong performance.',"Your counsellor smiles when she sees it. The application list opens up. Schools that seemed like reaches are now possibilities.",{intelligence:12,happiness:14},{reputation:10,stress:-10},{sat_done:true,sat_strong:true},{}),
  ch('Around 1100-1300 -- solid but not elite.','Respectable. Gets you into good schools. Just not the household-name ones your parents imagined.',{intelligence:5,happiness:2},{stress:5},{sat_done:true},{}),
  ch('Below 1100 -- the prep did not translate.','The pressure of the room got to you. Or the prep was insufficient. Either way, you will need to think carefully about next steps.',{happiness:-15,intelligence:-2},{stress:25},{sat_done:true,sat_poor:true},{}),
]},

// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
// PATH DECISION & EARLY ADULT (17-22)
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
{id:'after_secondary_decision',title:'What Comes Next',narrative:"School is over. The question is what now. University. A gap year. Starting to earn. Everyone around you has an opinion about what you should do with your one life.",category:'school',conditions:{ageMin:17,ageMax:18,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['started_secondary'],flagsExcluded:['post_secondary_decided'],isMilestone:true,repeatable:false,probability:1},choices:[
  ch('University. That was always the plan.',"You apply. You get in somewhere. The fees are terrifying and the freedom is intoxicating in equal measure.",{intelligence:5,happiness:8},{stress:12},{post_secondary_decided:true,going_university:true},{debt:15000}),
  ch('Get to work immediately. Real world over classroom.','You want money and experience, not debt and theory. People call it brave. Some call it a mistake. You call it your call.',{happiness:5},{reputation:5,stress:-5},{post_secondary_decided:true,going_work:true},{annualIncome:8000}),
  ch('Take a gap year. Figure yourself out first.','You defer for a year. You travel or work or just breathe. Most of the time it is exactly what you needed.',{happiness:14,looks:4},{stress:-10,karma:5},{post_secondary_decided:true,gap_year:true},{}),
]},

{id:'university_first_week',title:'Freshers Week',narrative:"University. The week before lectures begin. Everyone performing their best version of themselves. The clubs, the noise, the sudden freedom from every structure you grew up under.",category:'school',conditions:{ageMin:18,ageMax:19,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['going_university'],flagsExcluded:['started_university'],isMilestone:true,repeatable:false,probability:1},choices:[
  ch('Go to everything. Say yes to everything.','You end the week exhausted and surrounded by people. Some of them will matter. The rest of them are practice.',{happiness:16,health:-4},{reputation:12,stress:8},{started_university:true},{}),
  ch('Be selective -- quality over quantity.','You skip the ones that do not feel right. You find two people in the quiet moments who are exactly right.',{happiness:8},{karma:5},{started_university:true},{}),
  ch('Mostly stay in. The noise is too much.','You are more comfortable watching from a distance. The degree matters. The networking part will come later.',{happiness:-6,intelligence:5},{stress:10},{started_university:true},{}),
]},

{id:'jamb_exam',title:'JAMB Day',narrative:"The Joint Admissions exam. The single score that determines which university will take you and for what course. You have been preparing since secondary school.",category:'school',conditions:{ageMin:18,ageMax:19,gender:'any',countries:['Nigeria'],statsMin:{},statsMax:{},flagsRequired:['sat_waec'],flagsExcluded:['sat_jamb'],isMilestone:true,repeatable:false,probability:1},choices:[
  ch('Scored above 280 -- standout result.','Top universities. Engineering, Medicine, Law -- the competitive courses are yours to aim at. Your parents are on the phone to family members before you get home.',{intelligence:15,happiness:18},{reputation:15,stress:-12},{sat_jamb:true,jamb_excellent:true},{}),
  ch('Scored 200-280 -- a good score.','Solid. Gets you in. A good university if not the most elite. You take what you have and make it work.',{intelligence:8,happiness:8},{stress:5},{sat_jamb:true,jamb_good:true},{}),
  ch('Scored below 200 -- will need to resit.','The number is disappointing. You already know you will sit again. The question is what you do with the year in between.',{happiness:-18,intelligence:-2},{stress:28},{sat_jamb:true,jamb_failed:true},{}),
]},

{id:'first_job',title:'Your First Real Job',narrative:"You need money that is not given to you. A business is hiring and the pay is not much but it\'s yours. The idea of your own money, earned by your own hands, is something entirely new.",category:'career',conditions:{ageMin:16,ageMax:22,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['first_job'],isMilestone:false,repeatable:false,probability:.5},choices:[
  ch('Take it without hesitation.','The first paycheck lands in your account. You hold your phone for longer than necessary looking at the number. Something in you changes.',{happiness:12,intelligence:6},{reputation:6},{first_job:true},{cash:400,annualIncome:4200}),
  ch('Negotiate -- ask for more than the posted rate.','They push back but meet you halfway. You are twenty years old and learning that everything is negotiable.',{intelligence:8,happiness:8},{reputation:8,karma:4},{first_job:true},{cash:300,annualIncome:5500}),
  ch('Hold out. Something better must exist.','Nothing better materialises for six weeks. You take a lesser position for less pay having lost the time.',{happiness:-6},{stress:12},{first_job:true},{cash:150,annualIncome:2800}),
]},

{id:'independence',title:'Out On Your Own',narrative:'The moment arrives. Your own place. Your own rules. Your own decisions entirely. It is equal parts terrifying and electric and yours.',category:'family',conditions:{ageMin:18,ageMax:24,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['moved_out'],isMilestone:false,repeatable:false,probability:.45},choices:[
  ch('Go now. Figure it out as you go.','The first month is chaos. You burn a meal and forget to pay a bill and sit on the floor eating cereal at midnight. By month three you are someone who handles things.',{happiness:14,intelligence:8,health:-5},{stress:20,reputation:10},{moved_out:true},{cash:-600,annualExpenses:7200}),
  ch('Save for another year. Then go properly.','Smart. When you go, you go with enough to breathe. It is not the story you wanted but it is the one that costs less.',{intelligence:6,happiness:-5},{stress:-5},{moved_out:true},{cash:3000},[{npcId:'mother',closeness:6},{npcId:'father',closeness:6}]),
]},

// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
// UNIVERSITY (18-24)
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
{id:'university_grades_slip',title:'The Grades Are Slipping',narrative:"You checked your transcript last week. The numbers are not what you told your parents. The gap between what they expect and what you have achieved is growing.",category:'school',conditions:{ageMin:18,ageMax:23,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['started_university'],flagsExcluded:['grades_crisis_faced'],isMilestone:false,repeatable:false,probability:.4},choices:[
  ch('Pull yourself together. Go to every lecture. Get help.','You go to the lecturer\' office hours. You form a study group. You stop going out during the week. It turns around.',{intelligence:12,happiness:-8},{stress:15},{grades_crisis_faced:true},{},{}),
  ch('Tell your parents before they find out another way.','The conversation is awful. But they appreciate the honesty more than the result itself. Something shifts in how you talk to each other.',{happiness:-10},{stress:-5,karma:8},{grades_crisis_faced:true},{},[{npcId:'mother',trust:15},{npcId:'father',trust:12}]),
  ch('Let it continue and hope nobody notices.','They always notice. And the conversation you avoided becomes the conversation you could not avoid.',{intelligence:-5,happiness:-12},{stress:25},{grades_crisis_faced:true},{}),
]},

{id:'uni_relationship',title:'Something Serious',narrative:"You have been seeing someone. It started casually but it has become something you think about when they are not there. This is new territory.",category:'romance',conditions:{ageMin:18,ageMax:24,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['started_university'],flagsExcluded:['had_serious_relationship'],isMilestone:false,repeatable:false,probability:.5},choices:[
  ch('Go all in. This person is worth it.','You become the person who has a partner. It reshapes your social world and your sense of yourself in ways that are mostly good.',{happiness:18,looks:4},{stress:5,karma:4},{had_serious_relationship:true,in_relationship:true},{}),
  ch("Keep it light -- you\'re not ready for serious.",'You are honest about it from the start. They respect it or they do not. Either way, you know yourself.',{happiness:8},{karma:6},{had_serious_relationship:true},{}),
]},

{id:'uni_dropout_temptation',title:'The Dropout Question',narrative:"Someone your age just dropped out and started something. Their name is everywhere. You look at your lecture slides and wonder if this is the right path.",category:'school',conditions:{ageMin:18,ageMax:22,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['started_university'],flagsExcluded:['dropout_decision_made'],isMilestone:false,repeatable:false,probability:.3},choices:[
  ch('Stay. Finish what you started.','You remind yourself that one story is not your story. You stay and finish and graduate.',{intelligence:8,happiness:3},{stress:5},{dropout_decision_made:true},{}),
  ch('Drop out. Bet on yourself.','You leave. You have a plan -- or you have the beginnings of one. The gamble is yours alone.',{happiness:10},{stress:25,reputation:8},{dropout_decision_made:true,dropped_out_uni:true},{debt:-5000},[],{_setFlag:(s)=>{s.education.droppedOut=true;s.education.stage='none';}}),
]},

// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
// YOUNG ADULT (22-30)
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
{id:'nysc_call_up',title:'NYSC Posting',narrative:"The call-up letter arrives. National Youth Service Corps. One year, mandatory, somewhere in Nigeria that is not home. You open the envelope.",category:'general',conditions:{ageMin:22,ageMax:24,gender:'any',countries:['Nigeria'],statsMin:{},statsMax:{},flagsRequired:['started_university'],flagsExcluded:['nysc_done'],isMilestone:true,repeatable:false,probability:1},choices:[
  ch('You got posted far from home. Accept it.','You pack your things. The place is unfamiliar. The people become less so. A year later you have stories you will tell for decades.',{happiness:8,intelligence:8},{reputation:10,stress:10,karma:5},{nysc_done:true,nysc_farposted:true},{}),
  ch('You got posted somewhere close. Relief.','Close to home. Comfortable. You complete it competently without the transformation of distance.',{happiness:10},{stress:-5},{nysc_done:true},{}),
]},

{id:'quarter_life_crisis',title:'Twenty-Five',narrative:"You are twenty-five. You thought you would feel further along by now. Your friends seem to be accumulating milestones -- jobs, apartments, relationships, certainty. You are accumulating questions.",category:'general',conditions:{ageMin:25,ageMax:25,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['quarter_life_done'],isMilestone:true,repeatable:false,probability:1},choices:[
  ch('Sit with it. Take stock honestly.','You make a list of what you want and what you actually have. The gap is real. So is the time you still have to close it.',{intelligence:10,happiness:-5},{stress:5,karma:8},{quarter_life_done:true},{}),
  ch('Make a drastic change. Something has to move.','You quit or move or end something or start something. Most of it works. Some of it was impulsive. All of it was necessary.',{happiness:10,intelligence:5},{stress:20,karma:3},{quarter_life_done:true,made_drastic_change:true},{}),
  ch('Bury the feeling. Keep moving.','You do not look too closely. You stay busy enough to avoid the question. It will ask itself again in five years.',{},{stress:15},{quarter_life_done:true},{}),
]},

{id:'career_first_real_role',title:'The First Real Career Move',narrative:"This is not a job -- this is a career. The offer is on the table. The title means something. The salary is real. Everything you have done to this point has been building toward this kind of moment.",category:'career',conditions:{ageMin:22,ageMax:28,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['first_job'],flagsExcluded:['first_career_role'],isMilestone:false,repeatable:false,probability:.55},choices:[
  ch('Accept. This is the next step.','You sign. You start. The work is harder than anything before and more interesting. You grow quickly.',{intelligence:10,happiness:10},{reputation:12},{first_career_role:true},{annualIncome:12000},[],{_setFlag:(s)=>{s.career.level=2;s.career.title='Junior Professional';s.career.salary=s.finances.annualIncome;}}),
  ch('Negotiate hard before signing.','They expect it. You hold your number. They move. You start earning what you are worth from day one.',{intelligence:8,happiness:12},{reputation:15,karma:4},{first_career_role:true},{annualIncome:18000},[],{_setFlag:(s)=>{s.career.level=2;s.career.title='Junior Professional';s.career.salary=s.finances.annualIncome;}}),
]},

{id:'workplace_politics',title:'The Office Game',narrative:"You are good at the work. The question is whether you are good at the organisation. These are different skills and people confuse them constantly.",category:'career',conditions:{ageMin:22,ageMax:35,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['first_career_role'],flagsExcluded:['workplace_politics_faced'],isMilestone:false,repeatable:false,probability:.5},choices:[
  ch('Learn the politics. Play the game.','You figure out who matters and why. You build relationships strategically. It feels uncomfortable until it does not.',{intelligence:8,happiness:-3},{reputation:15,stress:10},{workplace_politics_faced:true,politically_savvy:true},{}),
  ch('Stay head down. Let the work speak.','You do excellent work. You get passed over for a promotion. You do more excellent work. The ceiling reveals itself slowly.',{intelligence:10},{reputation:3,stress:8},{workplace_politics_faced:true},{}),
  ch('Call out something that bothered you.','You say the thing in the meeting. The room goes quiet. Some people respect you for it. Others file you under difficult.',{happiness:5},{karma:12,reputation:-5,stress:12},{workplace_politics_faced:true,whistleblower_tendency:true},{}),
]},

{id:'first_boss',title:'Your First Real Boss',narrative:"Your manager defines your first years in any field more than the work itself does. You got one. They have a way of doing things.",category:'career',conditions:{ageMin:18,ageMax:28,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['first_job'],flagsExcluded:['first_boss_experience'],isMilestone:false,repeatable:false,probability:.5},choices:[
  ch('They are excellent. You learn everything you can.','You watch how they lead. You absorb their frameworks. This person becomes your standard for the next decade.',{intelligence:12,happiness:8},{reputation:10},{first_boss_experience:true,had_great_mentor:true},{}),
  ch('They are difficult. You survive them.','You learn what not to do. How not to treat people. How pressure looks on someone who has not dealt with it well. Useful in its own way.',{intelligence:8,happiness:-8},{stress:15,karma:5},{first_boss_experience:true},{}),
]},

// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
// ADULT LIFE (25-45)
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
{id:'serious_relationship_adult',title:'This Might Be It',narrative:"You have been seeing someone for long enough that the question hanging in the air is no longer unspoken. Where is this going? The answer matters.",category:'romance',conditions:{ageMin:24,ageMax:35,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['serious_adult_relationship','married'],isMilestone:false,repeatable:false,probability:.5},choices:[
  ch('Commit fully. Build something together.','You stop hedging. You choose them clearly. There is relief in the decision itself, separate from everything that comes after.',{happiness:18},{karma:5,stress:5},{serious_adult_relationship:true,in_relationship:true},{},[],{_setFlag:(s)=>{if(!s.npcs.partner){s.npcs.partner=makeFriend(s.age);s.npcs.partner.relationship='partner';s.npcs.partner.trust=75;s.npcs.partner.closeness=80;}}}),
  ch('End it -- something is not quite right.','You have been trying to make it work for a while now. Ending it is kinder than continuing it.',{happiness:-10},{stress:-8,karma:6},{serious_adult_relationship:true},{}),
]},

{id:'marriage_proposal',title:'Will You?',narrative:"The question was asked. In whatever form it took -- grand gesture or quiet kitchen conversation. The answer is yours.",category:'romance',conditions:{ageMin:24,ageMax:40,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['in_relationship'],flagsExcluded:['married','divorce'],isMilestone:false,repeatable:false,probability:.4},choices:[
  ch('Yes.','You say yes. The word is simple and the weight of it is not. You spend the next year planning something you will remember forever.',{happiness:20,looks:4},{karma:8,stress:10},{married:true},{},[],{_setFlag:(s)=>{if(s.npcs.partner)s.npcs.partner.closeness=Math.min(100,s.npcs.partner.closeness+20);}}),
  ch('Not yet. Not right now.','You ask for time. Some people understand. Some relationships do not survive the asking.',{happiness:-8},{stress:12,karma:3},{},{}),
]},

{id:'child_born',title:'A New Person',narrative:"A child is born. Yours. It happens in a moment that you cannot fully prepare for -- the weight of them, the sound of them, the total reorganisation of everything you thought you knew about yourself.",category:'family',conditions:{ageMin:22,ageMax:42,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['married'],flagsExcluded:['has_children'],isMilestone:false,repeatable:false,probability:.4},choices:[
  ch('Step into it fully. This changes everything.','It changes everything. Your priorities reorder without you deciding to reorder them. Your parents call to say they understand you now.',{happiness:20,health:-5},{karma:10,stress:15},{has_children:true},{annualExpenses:5000},[],{_setFlag:(s)=>{var baby=makeChild();s.npcs.children.push(baby);if(typeof showBabySurnameModal==='function')setTimeout(function(){showBabySurnameModal(baby);},800);}}),
  ch('The adjustment is harder than expected. That is normal.','You are not failing -- you are adjusting. Most parents are. The child does not know the difference yet.',{happiness:8,health:-5},{stress:25,karma:5},{has_children:true},{annualExpenses:5000},[],{_setFlag:(s)=>{var baby=makeChild();s.npcs.children.push(baby);if(typeof showBabySurnameModal==='function')setTimeout(function(){showBabySurnameModal(baby);},800);}}),
]},

{id:'health_scare',title:"Something Is Not Right",narrative:"You have been ignoring the symptoms for weeks. Today it is bad enough that pretending is no longer possible.",category:'health',conditions:{ageMin:25,ageMax:65,gender:'any',countries:'any',statsMin:{},statsMax:{health:55},flagsRequired:[],flagsExcluded:['health_scare_faced'],isMilestone:false,repeatable:false,probability:.35},choices:[
  ch('See a doctor immediately.','Serious but caught in time. The treatment is expensive and exhausting and you are grateful you went when you did.',{health:20,happiness:-8},{stress:-12},{health_scare_faced:true},{cash:-2500}),
  ch("Keep ignoring it. You\'re probably fine.",'You are not fine. Six months later the bill is larger and the fear is too.',{health:-18,happiness:-12},{stress:28},{health_scare_faced:true},{cash:-6000}),
]},

{id:'friendship_drift',title:'Losing Touch',narrative:"You and your closest friend from school have barely spoken in a year. Life pulled you in different directions at different speeds. You realised it when they announced something major on social media and you found out with everyone else.",category:'general',conditions:{ageMin:24,ageMax:35,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['had_first_friend'],flagsExcluded:['friendship_drift_faced'],isMilestone:false,repeatable:false,probability:.5},choices:[
  ch('Reach out. Make the effort.','You send the message. The call happens. It is awkward for ten minutes and then it is not. Some friendships can survive distance if you var them.',{happiness:10},{karma:8,stress:-5},{friendship_drift_faced:true},{},[{npcId:'mother',closeness:5}]),
  ch('Let it go. People grow apart.',"You tell yourself it's natural. It is natural. It still costs something you don't have a word for.",{happiness:-6},{stress:5},{friendship_drift_faced:true},{}),
]},

{id:'financial_investment',title:'The Money Conversation',narrative:"You have saved enough that the question becomes what to do with it. A colleague mentions investing. Your father has opinions. The internet has more.",category:'general',conditions:{ageMin:24,ageMax:45,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['first_job'],flagsExcluded:['investment_decision'],isMilestone:false,repeatable:false,probability:.4},choices:[
  ch('Invest carefully -- diversified, boring, consistent.','Slow and steady. You do not get rich fast. You build something real over time that your future self will thank you for.',{intelligence:8,happiness:5},{},{investment_decision:true},{cash:-3000},[],{_setFlag:(s)=>{s.finances.investments.push({type:'portfolio',value:3000,returnRate:.08});}}),
  ch('Take a risk on something you believe in.','You bet on one thing. It either pays off spectacularly or teaches you the most expensive lesson of your financial life.',{intelligence:5,happiness:Math.random()>.5?10:-10},{stress:15},{investment_decision:true},{cash:-5000},[],{_setFlag:(s)=>{var win=Math.random()>.4;if(win){s.finances.cash+=12000;s.finances.netWorth+=12000;}else{s.finances.netWorth-=5000;}}}),
  ch('Spend it on living. Life is now.','You take the trip. You buy the thing. The memory is worth more than the compound interest -- or so you will believe for years.',{happiness:12},{karma:3},{investment_decision:true},{cash:-2000}),
]},

{id:'career_promotion',title:'The Promotion',narrative:"Your name came up in the succession conversation. The opportunity is real. But so are the politics around it.",category:'career',conditions:{ageMin:24,ageMax:45,gender:'any',countries:'any',statsMin:{intelligence:55},statsMax:{},flagsRequired:['first_career_role'],flagsExcluded:['got_promoted'],isMilestone:false,repeatable:false,probability:.4},choices:[
  ch('Go for it. Campaign for yourself.','You send the email. You have the conversation. You advocate for yourself in a room where you have always waited to be noticed.',{happiness:14,intelligence:5},{reputation:15},{got_promoted:true},{annualIncome:10000},[],{_setFlag:(s)=>{s.career.level=Math.min(10,s.career.level+2);s.career.title='Senior Professional';s.career.salary+=10000;}}),
  ch('Let it go to someone else. Not yet.','You concede gracefully. You watch how they do it. You wait for the next one with more information.',{happiness:-5},{stress:8},{},{},{}),
]},

{id:'turning_thirty',title:'Thirty',narrative:"You wake up on your thirtieth birthday and the number feels different from every previous number. Your parents smile when they see you. Your friends make jokes. You feel the decade behind you and the one ahead.",category:'general',conditions:{ageMin:30,ageMax:30,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['turned_thirty'],isMilestone:true,repeatable:false,probability:1},choices:[
  ch('Celebrate it. You made it here.','You gather the people who matter. The stories that get told over dinner are ones you did not know you had lived. Thirty is not the end of youth. It is the beginning of something else.',{happiness:14},{karma:5,stress:-5},{turned_thirty:true},{}),
  ch('Reflect privately. Take stock.','You do not need a party to mark it. You sit with your own account of the years and find it more complicated and more interesting than you expected.',{happiness:5,intelligence:8},{karma:8},{turned_thirty:true},{}),
]},

// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
// MIDDLE AGE (40-60)
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
{id:'midlife_reassessment',title:'Forty',narrative:"Something about forty makes you look directly at things you have been looking past for years. The career. The relationship. The body. The unlived versions of yourself.",category:'general',conditions:{ageMin:40,ageMax:40,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['midlife_done'],isMilestone:true,repeatable:false,probability:1},choices:[
  ch('Change course. It is not too late.','You make the move you have been rehearsing in your head for years. Some of it works. All of it is more honest than what came before.',{happiness:12,intelligence:5},{stress:20,karma:8},{midlife_done:true,midlife_changed:true},{}),
  ch('Double down. You chose this life deliberately.','You recommit to what you built. Not from fear -- from genuine belief. The doubt dissolves when you stop entertaining it.',{happiness:8},{stress:-8,karma:5},{midlife_done:true},{}),
  ch('Spiral quietly and hope nobody notices.','You tell yourself this is fine. Everyone has their season of stagnation. You wait for it to pass.',{happiness:-10},{stress:20},{midlife_done:true},{}),
]},

{id:'parent_aging',title:'Your Parents Are Aging',narrative:"You notice it all at once: they move differently. They repeat things. The parent who once seemed immovable is becoming something more fragile, more human.",category:'family',conditions:{ageMin:40,ageMax:55,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['parent_aging_faced'],isMilestone:false,repeatable:false,probability:.6},choices:[
  ch('Spend more time with them. While you can.','You start calling every week. You visit more. The conversations are different now -- more honest and more precious.',{happiness:8},{karma:15,stress:5},{parent_aging_faced:true},{},[{npcId:'mother',closeness:20},{npcId:'father',closeness:20}]),
  ch('Carry on as normal. They are fine.','They are fine for now. You file the observation away for later.',{},{stress:5},{parent_aging_faced:true},{}),
]},

{id:'parent_death',title:'The Call',narrative:"The phone rings at the wrong hour. You know before you answer. Some things you cannot prepare for even when you have been preparing.",category:'family',conditions:{ageMin:40,ageMax:70,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['parent_aging_faced'],flagsExcluded:['parent_died'],isMilestone:false,repeatable:false,probability:.4},choices:[
  ch('Grieve properly. Let yourself fall apart for a while.','You allow it. The grief does not have a schedule. You take time. People who love you give you that room.',{happiness:-20,health:-5},{stress:15,karma:8},{parent_died:true},{}),
  ch('Hold yourself together for everyone else.','You organise the arrangements. You are the steady one. The grief finds its own time later -- it always does.',{happiness:-15},{stress:25,karma:5},{parent_died:true},{}),
]},

{id:'health_chronic',title:'Living With It',narrative:"The diagnosis was not a surprise by the time it arrived. The body had been signalling for years. Now it has a name.",category:'health',conditions:{ageMin:40,ageMax:70,gender:'any',countries:'any',statsMin:{},statsMax:{health:60},flagsRequired:[],flagsExcluded:['chronic_diagnosis'],isMilestone:false,repeatable:false,probability:.3},choices:[
  ch('Accept it and adapt everything around it.','You change the diet, the schedule, the habits. You become someone who manages something. It is less grim than you feared.',{health:8,happiness:-5},{stress:-5,karma:5},{chronic_diagnosis:true},{cash:-3000}),
  ch('Resist and resent it.','The body does not care about your feelings about it. Resistance is not the same as wellness.',{health:-12,happiness:-10},{stress:20},{chronic_diagnosis:true},{cash:-2000}),
]},

{id:'legacy_question',title:'What Will You Leave Behind',narrative:"Someone you know dies. Not old -- roughly your age. You sit at the service and do the arithmetic of your own life. What has accumulated. What has not.",category:'general',conditions:{ageMin:45,ageMax:65,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['legacy_considered'],isMilestone:false,repeatable:false,probability:.4},choices:[
  ch('Start building something deliberate.','You identify what you actually want to leave behind. You begin building it with the time and resources you have.',{intelligence:10,happiness:8},{karma:10,reputation:8},{legacy_considered:true},{}),
  ch('The thought passes. Life continues.','You note it and move past it. The question returns every few years. You handle it the same way.',{happiness:-3},{stress:5},{legacy_considered:true},{}),
]},

// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
// FINANCES & MONEY (cross-age)
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
{id:'debt_crisis',title:'Underwater',narrative:"The debt has quietly compounded. You have been servicing it but not reducing it. This month the numbers do not work.",category:'general',conditions:{ageMin:20,ageMax:55,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['debt_crisis_faced'],isMilestone:false,repeatable:false,probability:.3},choices:[
  ch('Face it directly -- call creditors, make a plan.','An honest accounting is unpleasant. The plan is rigid. You follow it. Two years later the number is real again.',{happiness:-10,intelligence:8},{stress:15,karma:5},{debt_crisis_faced:true},{},{}),
  ch('Borrow more to manage the minimum payments.','You buy time. At interest. The problem does not shrink -- it changes shape.',{happiness:-5},{stress:20,karma:-3},{debt_crisis_faced:true},{debt:10000},{}),
]},

{id:'unexpected_windfall',title:'The Money Arrived',narrative:"Something you did not plan for happened financially in your favour. An unexpected sum. More than you are used to holding at once.",category:'general',conditions:{ageMin:20,ageMax:60,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['had_windfall'],isMilestone:false,repeatable:false,probability:.2},choices:[
  ch('Invest or save the majority of it.','You resist the immediate pull. You put most of it somewhere useful. Future you will note the restraint.',{intelligence:8,happiness:8},{karma:4},{had_windfall:true},{cash:8000}),
  ch('Spend it freely -- you deserved something.','You take the trip. You buy the thing. The memory outlasts the guilt.',{happiness:15},{stress:-10},{had_windfall:true},{cash:2000}),
  ch('Give a significant amount away.','You think of someone who needs it more. The feeling of giving it away is better than you expected.',{happiness:12},{karma:20,reputation:10},{had_windfall:true},{cash:3000}),
]},

// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
// RELATIONSHIPS & FAMILY (cross-age)
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
{id:'family_estrangement',title:'Growing Apart',narrative:"There is a member of your family you have not spoken to properly in over a year. Something happened -- or a thousand small things happened. The silence has calcified.",category:'family',conditions:{ageMin:20,ageMax:55,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['family_estrangement_faced'],isMilestone:false,repeatable:false,probability:.3},choices:[
  ch('Reach out. Attempt to repair it.','You make the first move. The conversation is uncomfortable and worth it. Some relationships require sustained effort to survive adulthood.',{happiness:8},{karma:10,stress:5},{family_estrangement_faced:true},{},[{npcId:'mother',trust:10},{npcId:'father',trust:10}]),
  ch('The distance is healthier for everyone involved.','Some estrangements are protection. You allow yourself to believe this one is.',{happiness:5},{karma:-3,stress:-8},{family_estrangement_faced:true},{}),
]},

{id:'relationship_rough_patch',title:'Not Working',narrative:"You and your partner are in a rough patch. The conversations are shorter and sharper. You cannot remember the last easy week.",category:'romance',conditions:{ageMin:22,ageMax:55,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['in_relationship'],flagsExcluded:['rough_patch_faced'],isMilestone:false,repeatable:false,probability:.45},choices:[
  ch('Fight for it -- couples therapy, honest conversations.','The work is uncomfortable. Some of what comes out of it surprises you. You come out the other side knowing each other more completely.',{happiness:8},{karma:8,stress:10},{rough_patch_faced:true},{},[],{_setFlag:(s)=>{if(s.npcs.partner){s.npcs.partner.trust=Math.min(100,s.npcs.partner.trust+15);s.npcs.partner.closeness=Math.min(100,s.npcs.partner.closeness+10);}}}),
  ch('End it. The rough patch is not a patch -- it is the pattern.','You have been here before. You end it with more sadness than anger, which means you did not leave too late.',{happiness:-14},{stress:15,karma:3},{rough_patch_faced:true,divorced:true},[],{_setFlag:(s)=>{s.npcs.exes.push(s.npcs.partner);s.npcs.partner=null;s.flags.in_relationship=false;}}),
]},

// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
// OLD AGE (60+)
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
{id:'retirement_decision',title:'The Last Day of Work',narrative:"You could retire now. The work has been good but you are tired in a way you cannot sleep off. The question is who you are when you are not the job.",category:'career',conditions:{ageMin:60,ageMax:70,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['first_career_role'],flagsExcluded:['retired'],isMilestone:false,repeatable:false,probability:.6},choices:[
  ch('Retire. You have earned it.','You hand over. You walk out. The first Monday morning of your retirement you do not know what to do with your hands. By the third Monday you do.',{happiness:14,health:5},{stress:-15},{retired:true},{},[],{_setFlag:(s)=>{s.finances.annualIncome=Math.max(0,s.finances.annualIncome-s.career.salary);}}),
  ch('Keep going. The work still means something.','You have things left to do. People who need your expertise. You stay -- but you renegotiate the terms of your own involvement.',{happiness:8,intelligence:5},{stress:5},{},{},{}),
]},

{id:'legacy_reflection',title:'Looking Back',narrative:"You are old enough now to see the shape of your life from some distance. The choices that mattered. The ones that did not. The version of yourself you became versus the ones you could have.",category:'general',conditions:{ageMin:65,ageMax:85,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['legacy_reflected'],isMilestone:false,repeatable:false,probability:.7},choices:[
  ch('I lived the life I meant to live.','There are regrets -- there are always regrets. But at the centre of it, you recognise yourself. That counts for something.',{happiness:15},{karma:10,stress:-10},{legacy_reflected:true},{}),
  ch("I wish I had done it differently.",'The honesty of it is its own kind of peace. You know what mattered. Too late to do it over -- not too late to say it.',{happiness:-5,intelligence:8},{karma:8,stress:5},{legacy_reflected:true},{}),
]},

// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
// ADDITIONAL MILESTONE EVENTS
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
{id:'primary_school_end',title:'End of Primary',narrative:"Primary school is over. You are older than you were when you started. A version of the world that was everything has become too small.",category:'school',conditions:{ageMin:10,ageMax:11,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['primary_ended'],isMilestone:true,repeatable:false,probability:1},choices:[
  ch('You are ready for what comes next.','Your teachers say kind things. You collect the goodbyes and step forward.',{happiness:8,intelligence:5},{reputation:5},{primary_ended:true},{}),
  ch('You are not sure you are ready.','Nobody is. That is the nature of forward.',{happiness:3,intelligence:3},{stress:5},{primary_ended:true},{}),
]},

{id:'puberty_event',title:'Everything Is Changing',narrative:"Your body and your social world are reorganising simultaneously without your permission. Nothing fits the same way it did. Some of it is unwelcome. Some of it is electric.",category:'general',conditions:{ageMin:13,ageMax:14,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['puberty_done'],isMilestone:true,repeatable:false,probability:1},choices:[
  ch('Navigate it with some grace.','You adjust. Some of the change is disorienting. Some of it is exciting. You emerge with a clearer outline.',{looks:8,happiness:5},{stress:8},{puberty_done:true},{}),
  ch('It is a lot. You struggle through it.','Hard years. Normal hard years. You get through them.',{looks:5,happiness:-8},{stress:15},{puberty_done:true},{}),
]},

{id:'turning_21',title:'Twenty-One',narrative:"Twenty-one. In most of the world this is the number. The legal confirmation that you are, in every sense, your own.",category:'general',conditions:{ageMin:21,ageMax:21,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['turned_21'],isMilestone:true,repeatable:false,probability:1},choices:[
  ch('Celebrate it properly. This is a real one.','You gather the people. The night is exactly what it should be.',{happiness:16,looks:4},{reputation:5,stress:-5},{turned_21:true},{}),
  ch('Mark it quietly. The number means more to you than the party.','You sit with it. You take stock. You like the person you are becoming.',{happiness:10,intelligence:5},{karma:5},{turned_21:true},{}),
]},

{id:'health_check_35',title:'The Thirty-Five Check',narrative:"Your doctor suggested a full check-up. At thirty-five it is not optional anymore -- it is the adult thing to do.",category:'health',conditions:{ageMin:35,ageMax:36,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['health_check_35_done'],isMilestone:true,repeatable:false,probability:1},choices:[
  ch('All clear. Maintain what is working.','Numbers good. The doctor is pleased. You leave feeling the relief of a clean bill.',{health:8,happiness:8},{stress:-5},{health_check_35_done:true},{}),
  ch('Some things to address. Lifestyle changes needed.','Not critical -- yet. But the direction is clear. Time to act.',{health:3,intelligence:6},{stress:10},{health_check_35_done:true},{cash:-400}),
]},
{id:'severe_depression_event',title:'The Floor',narrative:"You have reached a point you cannot describe to anyone who has not been here. Everything is muted. Getting out of bed is a project. You are not okay and you know it.",category:'health',conditions:{ageMin:10,ageMax:80,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:[],isMilestone:false,repeatable:false,probability:0},choices:[
  ch('Get help. Reach out to someone.','The call is the hardest thing you have done in years. It gets easier from there.',{happiness:15,health:5},{stress:-20},{diagnosed_depression:true,in_therapy:true,sought_help:true},{}),
  ch('You push through. Alone.','You survive it. Barely. The thing about rock bottom is it teaches you what you are made of -- whether you wanted the lesson or not.',{happiness:8},{stress:10,karma:3},{diagnosed_depression:true},{}),
]},

{id:'stress_breakdown',title:'Something Gives',narrative:"The pressure has been building for years without a real release valve. Something in you gives way -- in a meeting, at home, somewhere you cannot control it.",category:'health',conditions:{ageMin:15,ageMax:75,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:[],isMilestone:false,repeatable:false,probability:0},choices:[
  ch('Take time off. Everything can wait.','You stop. For the first time in years, you stop. The world does not end. Your body slowly remembers what peace feels like.',{happiness:14,health:10},{stress:-30},{had_breakdown:true,took_break:true},{}),
  ch('Push through it. You cannot afford to stop.','You continue. The body notes the override and files it for later.',{happiness:-5,health:-8},{stress:-10},{had_breakdown:true},{}),
]},

// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
// CHILDHOOD (0-10) -- NEW
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
{id:'childhood_hobby',title:'The Thing You Loved',narrative:"Every child finds something. A thing they do for hours without being asked. You found yours.",category:'general',conditions:{ageMin:6,ageMax:11,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['found_childhood_hobby'],isMilestone:false,repeatable:false,probability:.6},choices:[
  ch('Football. You live on the pitch.','Your body learns the grammar of the game early. Your feet know things your head cannot explain.',{health:10,happiness:12},{},{found_childhood_hobby:true,childhood_sport:'football',early_athlete:true},{}),
  ch('Music. You sing or play constantly.','Your parents complain about the noise. You do not stop. Something in the sound is necessary.',{happiness:14,intelligence:5},{},{found_childhood_hobby:true,childhood_music:true,musically_gifted:true},{}),
  ch('Reading. You go through books like water.','You read everything you can reach. The world is larger inside books than outside them.',{intelligence:14,happiness:8},{},{found_childhood_hobby:true,childhood_reader:true,academic_driven:true},{}),
  ch('Drawing and making things.','You spend hours building or drawing. The things you make are not good yet, but the making of them is.',{intelligence:8,happiness:12},{},{found_childhood_hobby:true,childhood_creative:true},{}),
]},

{id:'childhood_bully',title:'The One Who Made It Hard',narrative:"There is someone at school who has decided you are a target. It has been going on for weeks. The adults either do not notice or do not know how to stop it.",category:'school',conditions:{ageMin:7,ageMax:12,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['school_bully_handled'],isMilestone:false,repeatable:false,probability:.35},choices:[
  ch('Tell a teacher or parent. Get help.','It takes everything you have to say it. The adult listens. Things change, slowly, then all at once.',{happiness:8,health:4},{karma:5,stress:-10},{school_bully_handled:true},{},{}),
  ch('Stand your ground the next time.','It goes badly and then it goes better. There is a moment where it stops. You are changed by it either way.',{happiness:5,health:-4},{stress:-5,karma:3},{school_bully_handled:true,stood_up_to_bully:true,school_bully_victim:true},{}),
  ch('Avoid and endure. Do not engage.','You find the routes where they are not. You survive it the quiet way. The quiet way still leaves marks.',{happiness:-10},{stress:15},{school_bully_handled:true,been_bullied:true,school_bully_victim:true},{}),
]},

{id:'childhood_parents_fight',title:'The Arguments',narrative:"Your parents are fighting again. Through the wall, loud enough that you cannot pretend you cannot hear. You pull the pillow over your head.",category:'family',conditions:{ageMin:5,ageMax:12,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['parents_conflict_faced'],isMilestone:false,repeatable:false,probability:.3},choices:[
  ch('Try to be invisible. Stay out of it.','You become very good at reading a room. At sensing the weather of a house. This skill is double-edged.',{intelligence:5},{stress:12},{parents_conflict_faced:true,early_memory_negative:true},{},[{npcId:'mother',closeness:-5},{npcId:'father',closeness:-5}]),
  ch('Go to one parent. Ask if everything is okay.','They say yes. You know better. But the act of asking does something -- for them, and for you.',{happiness:-5,intelligence:5},{karma:5,stress:8},{parents_conflict_faced:true},{},[{npcId:'mother',closeness:8},{npcId:'father',closeness:8}]),
]},

{id:'childhood_moving',title:'A New Place',narrative:"Your family is moving. A new house, a new neighbourhood, possibly a new school. Everything familiar is about to become unfamiliar.",category:'family',conditions:{ageMin:6,ageMax:14,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['childhood_moved'],isMilestone:false,repeatable:false,probability:.25},choices:[
  ch('You adapt quickly. Make new friends fast.','You are lucky or resilient -- possibly both. The new place stops feeling new within a year.',{happiness:8,looks:4},{reputation:8},{childhood_moved:true,adaptable:true},{}),
  ch('It takes a long time. You miss everything before.','You carry the old place inside you. The new one takes years to feel like yours.',{happiness:-10,intelligence:5},{stress:10},{childhood_moved:true,early_memory_negative:true},{}),
]},

{id:'childhood_illness',title:'A Bad Season',narrative:"You were sick -- really sick -- for months. The kind of sick where the whole house rearranges itself around your bed.",category:'health',conditions:{ageMin:4,ageMax:12,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['childhood_illness_had'],isMilestone:false,repeatable:false,probability:.25},choices:[
  ch('You recovered fully. Came back stronger.','The illness passed. It left you with a faint appreciation for ordinary good health that most people your age did not have.',{health:-5,happiness:5},{karma:5},{childhood_illness_had:true},{}),
  ch('Recovery was incomplete. Some things linger.','You managed it. The body kept its own record of it.',{health:-12,happiness:-5},{stress:5},{childhood_illness_had:true,childhood_health_issue:true},{}),
]},

// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
// TEEN (11-17) -- NEW
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
{id:'teen_rebellion',title:'The Rule You Could Not Follow',narrative:"There is a version of you emerging that does not fit inside the rules you grew up with. You have started pushing against the edges.",category:'general',conditions:{ageMin:13,ageMax:16,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['teen_rebel_faced'],isMilestone:false,repeatable:false,probability:.45},choices:[
  ch('Lean into the rebellion fully.','You push hard against everything. Some of it is necessary. Some of it is going to cost you.',{happiness:8,looks:4},{stress:15,reputation:-5},{teen_rebel_faced:true,teen_rebellion:true,been_rebellious:true},{}),
  ch('Find a balance. Selective defiance.','You pick your battles. You establish who you are without burning everything down. Harder than it sounds.',{happiness:10,intelligence:5},{karma:5},{teen_rebel_faced:true},{}),
  ch('Conform. The path of least resistance.','You swallow it. The peace is real. So is the cost.',{happiness:-5},{stress:8},{teen_rebel_faced:true,identity_conformist:true},{}),
]},

{id:'teen_first_drink',title:'The First Time',narrative:"Someone passes something to you at a party. The group is watching. The moment hangs there.",category:'general',conditions:{ageMin:14,ageMax:17,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['first_drink_faced'],isMilestone:false,repeatable:false,probability:.5},choices:[
  ch('Take it. Fit in.','You drink. The room softens. You understand now why people do this.',{happiness:5,health:-3},{reputation:5,stress:-5},{first_drink_faced:true,tried_alcohol:true},{}),
  ch('Pass. You are fine without it.','You say no. A few people notice. Most do not. You are still here.',{happiness:3,intelligence:4},{karma:5,stress:-3},{first_drink_faced:true},{}),
]},

{id:'teen_exam_pressure',title:'The Pressure Before the Exams',narrative:"The exams are coming. The house feels different. Your parents are watching the clock differently. The weight of expectation is not abstract anymore.",category:'school',conditions:{ageMin:14,ageMax:17,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['started_secondary'],flagsExcluded:['exam_pressure_faced'],isMilestone:false,repeatable:false,probability:.6},choices:[
  ch('Study hard. Give it everything.','You build a schedule and keep it. The anxiety does not go away but it becomes productive.',{intelligence:12,happiness:-5},{stress:20},{exam_pressure_faced:true,academic_driven:true},{}),
  ch('Study but maintain your life outside it.','You find a balance. The results will not be perfect but you will arrive at the exam with your mind still functioning.',{intelligence:7,happiness:5},{stress:5},{exam_pressure_faced:true},{}),
  ch('Avoid the pressure. Do the minimum.','You do not prepare enough. You know it. The exam day will confirm it.',{intelligence:2,happiness:5},{stress:-10},{exam_pressure_faced:true},{}),
]},

{id:'teen_first_love',title:'It Happens',narrative:"It happened the way it always does -- suddenly and then completely. Someone at school. Their name has been in your head for three weeks.",category:'romance',conditions:{ageMin:13,ageMax:17,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['had_first_love'],isMilestone:false,repeatable:false,probability:.5},choices:[
  ch('Tell them. Say the thing.','You say it. Terrifying. They say it back. The next few months are the best of your life so far.',{happiness:20,looks:5},{reputation:5,stress:5},{had_first_love:true,in_relationship:true},{},[],{_setFlag:(s)=>{if(!s.npcs.partner){s.npcs.partner=makeFriend(s.age);s.npcs.partner.relationship='partner';}}}),
  ch('Keep it to yourself. Too risky.','You watch from a safe distance. The feeling fades. You file it away as something that did not happen.',{happiness:-8,intelligence:5},{stress:5},{had_first_love:true},{}),
]},

{id:'teen_peer_pressure_crime',title:'The Dare',narrative:"Your group is daring each other. Small things at first -- a shoplifted snack, a skipped class, a broken window. Now it has escalated to something that is clearly wrong.",category:'crime',conditions:{ageMin:13,ageMax:17,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['peer_crime_faced'],isMilestone:false,repeatable:false,probability:.25},choices:[
  ch('Do it. You cannot be seen backing down.','You do it. The rush is real. So are the consequences that follow.',{happiness:3,health:-4},{reputation:-8,karma:-10,stress:15},{peer_crime_faced:true,teen_crime:true},{}),
  ch('Refuse. Walk away from the group.','You say no. Some respect it. Some do not. You lose something in the social ranking but gain something in the mirror.',{happiness:-5,intelligence:6},{karma:10,stress:-5},{peer_crime_faced:true},{}),
]},

{id:'teen_mentor',title:'The One Who Saw Something',narrative:"A teacher, a coach, a family friend -- someone older who started paying attention to you differently. Not in a way that felt wrong. In a way that felt like they saw something real.",category:'school',conditions:{ageMin:12,ageMax:17,gender:'any',countries:'any',statsMin:{intelligence:40},statsMax:{},flagsRequired:[],flagsExcluded:['had_teen_mentor'],isMilestone:false,repeatable:false,probability:.35},choices:[
  ch('Embrace the mentorship. Show up for it.','You take the sessions seriously. You ask the questions you would not ask anyone else. Years later you still carry what they gave you.',{intelligence:14,happiness:10},{reputation:10,karma:5},{had_teen_mentor:true,had_great_mentor:true},{}),
  ch('Keep your distance. You prefer figuring things out alone.','You are polite. You do not var them in. The gift of their attention goes uncollected.',{intelligence:4},{},{had_teen_mentor:true},{}),
]},

{id:'teen_sport_trial',title:'The Trial',narrative:"Your coach put your name forward for a regional trial. You have been training for months. The day is here.",category:'career',conditions:{ageMin:13,ageMax:17,gender:'any',countries:'any',statsMin:{health:55},statsMax:{},flagsRequired:['early_athlete'],flagsExcluded:['sport_trial_done'],isMilestone:false,repeatable:false,probability:.5},choices:[
  ch('You performed well. Made the squad.','Your name goes on the list. The training intensifies. A path opens.',{health:5,happiness:18},{reputation:15,stress:10},{sport_trial_done:true,made_sport_squad:true},{}),
  ch('Just missed out. Not selected this time.','You are told you were close. The words are kind. The feeling is not.',{happiness:-12,health:3},{stress:15},{sport_trial_done:true},{}),
]},

// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
// YOUNG ADULT (18-28) -- NEW
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
{id:'leaving_home_for_first_time',title:'The Last Morning',narrative:"Your bags are packed. Your room looks smaller now it is emptier. The people you are leaving are trying very hard not to show what they feel.",category:'family',conditions:{ageMin:17,ageMax:22,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['post_secondary_decided'],flagsExcluded:['left_home'],isMilestone:false,repeatable:false,probability:.6},choices:[
  ch('Leave with everything said.','You tell them what they mean to you. Awkwardly. Accurately. The drive away is full.',{happiness:14},{karma:10,stress:5},{left_home:true},{},[{npcId:'mother',closeness:15,trust:10},{npcId:'father',closeness:10,trust:8}]),
  ch('Slip away. The goodbyes are too much.','You minimise the scene. You are not good at goodbyes. You will call from the road.',{happiness:5},{stress:-5},{left_home:true},{}),
]},

{id:'first_time_managing_money',title:'The Budget Reality',narrative:"You have to pay for things now. Real things. Rent, food, transport. The money runs out faster than you expected.",category:'general',conditions:{ageMin:18,ageMax:24,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['moved_out'],flagsExcluded:['budget_reality_faced'],isMilestone:false,repeatable:false,probability:.7},choices:[
  ch('Build a budget and stick to it.','You learn the number and live inside it. The discipline is uncomfortable. The security is real.',{intelligence:10,happiness:5},{karma:4,stress:-5},{budget_reality_faced:true,financially_literate:true},{}),
  ch('Wing it. Money comes and goes.','You spend more than you have more than once. The lessons are expensive.',{intelligence:5,happiness:8},{stress:15},{budget_reality_faced:true},{debt:1500}),
]},

{id:'uni_dissertation',title:'The Final Paper',narrative:"Everything you have done for three years comes down to this. Forty-thousand words. A question you chose eighteen months ago. You are living inside it now.",category:'school',conditions:{ageMin:20,ageMax:23,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['started_university'],flagsExcluded:['dissertation_done','dropped_out_uni'],isMilestone:false,repeatable:false,probability:.7},choices:[
  ch('Give it everything. See what you are made of.','You write things you did not know you thought. The final submission is imperfect and yours.',{intelligence:15,happiness:8},{stress:25,reputation:10},{dissertation_done:true,academic_high_performer:true},{}),
  ch('Get through it. Pass is enough.','You complete it. It exists. That is the point.',{intelligence:8,happiness:3},{stress:10},{dissertation_done:true},{}),
]},

{id:'first_heartbreak_aftermath',title:'After',narrative:"The relationship is over. The first one that mattered. Everything is a little wrong -- the music, the places, even the time of day.",category:'romance',conditions:{ageMin:16,ageMax:25,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['had_serious_relationship'],flagsExcluded:['heartbreak_processed','in_relationship'],isMilestone:false,repeatable:false,probability:.5},choices:[
  ch('Take the time to actually heal.','You sit with it. Some of it is awful. Some of it is strangely clarifying. You come out knowing yourself better.',{happiness:10,intelligence:6},{stress:-10,karma:5},{heartbreak_processed:true},{},[],{_setFlag:(s)=>{if(!s.flags.first_heartbreak_age)s.flags.first_heartbreak_age=s.age;}}),
  ch('Replace the feeling. New person, quickly.','You find someone else. It helps, briefly. The original thing is still there when you are alone.',{happiness:4},{stress:5,karma:-3},{heartbreak_processed:true},{}),
  ch('Pour it into something -- work, art, training.','The hurt becomes fuel. Something real comes out of the worst of it.',{happiness:5,intelligence:8,health:6},{stress:-5,karma:5},{heartbreak_processed:true},{}),
]},

{id:'early_career_failure',title:'The Thing That Did Not Work',narrative:"You had a plan. It did not work. The gap between what you imagined and what happened is visible and you cannot pretend it away.",category:'career',conditions:{ageMin:20,ageMax:30,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['first_job'],flagsExcluded:['faced_early_failure'],isMilestone:false,repeatable:false,probability:.4},choices:[
  ch('Treat it as a lesson. Adjust and continue.','You extract what you can from the failure. You continue differently. The setback becomes architecture.',{intelligence:12,happiness:-5},{karma:6,stress:10},{faced_early_failure:true},{}),
  ch('Abandon the path. Try something completely different.','You pivot. Not everyone calls it brave. It is.',{happiness:8},{stress:15,reputation:-5},{faced_early_failure:true,career_changed:true},{}),
]},

{id:'flatmate_drama',title:'The Person You Live With',narrative:"Living with someone teaches you things about them -- and yourself -- that no friendship could. Your flatmate situation has become complicated.",category:'general',conditions:{ageMin:18,ageMax:26,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['moved_out'],flagsExcluded:['flatmate_drama_faced'],isMilestone:false,repeatable:false,probability:.45},choices:[
  ch('Have the conversation. Establish boundaries.','Awkward. Necessary. It mostly works.',{happiness:6,intelligence:6},{stress:-5},{flatmate_drama_faced:true},{}),
  ch('Move out. Find somewhere new.','The logistics are a nightmare. The freedom on the other side is clean.',{happiness:10},{stress:20},{flatmate_drama_faced:true},{cash:-1200}),
  ch('Tolerate it. Not worth the conflict.','You hold it in. It leaks out in other places.',{happiness:-8},{stress:15},{flatmate_drama_faced:true},{}),
]},

{id:'viral_moment',title:'It Got Out',narrative:"Something you did or said went online. The number on the post keeps climbing. Your phone is alive with notifications from people you have never met.",category:'general',conditions:{ageMin:16,ageMax:35,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['media_savvy'],flagsExcluded:['went_viral'],isMilestone:false,repeatable:false,probability:.2},choices:[
  ch('Ride it. Build on the attention.','You post again while the attention is live. Some of it sticks. Your online presence shifts.',{happiness:14,looks:5},{reputation:20},{went_viral:true},{},[]  ,{_setFlag:(s)=>{s.fame.level=Math.max(1,s.fame.level);s.fame.popularity=Math.min(100,s.fame.popularity+25);}}),
  ch('Ignore it. Attention fades.','You wait. It does fade. You are the same as before, plus a story.',{happiness:5},{},{went_viral:true},{}),
]},

// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
// ADULT (28-45) -- NEW
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
{id:'career_plateau',title:'The Ceiling',narrative:"You have stopped moving up. The career that felt like it had no ceiling has found one. You are good at what you do. There is no obvious next step.",category:'career',conditions:{ageMin:30,ageMax:45,gender:'any',countries:'any',statsMin:{intelligence:50},statsMax:{},flagsRequired:['got_promoted'],flagsExcluded:['career_plateau_faced'],isMilestone:false,repeatable:false,probability:.4},choices:[
  ch('Go somewhere else. The ceiling is this company, not you.','You update your profile. Within three months you have interviews. Within six, an offer.',{intelligence:8,happiness:10},{reputation:10},{career_plateau_faced:true},{annualIncome:8000},[],{_setFlag:(s)=>{s.career.level=Math.min(10,s.career.level+1);}}),
  ch('Create something new inside the role.','You build a project no one asked you to. It becomes the thing that saves you from stagnation.',{intelligence:12,happiness:8},{reputation:8,karma:5},{career_plateau_faced:true},{}),
  ch('Accept the plateau. Invest elsewhere.','You stop looking to work for meaning. You find it somewhere else. The work is still good. It is just no longer the point.',{happiness:10},{stress:-10},{career_plateau_faced:true},{}),
]},

{id:'side_hustle',title:'Something on the Side',narrative:"You have been building something in the evenings. A small thing. It has started making small amounts of money. The question is what to do with it.",category:'career',conditions:{ageMin:22,ageMax:40,gender:'any',countries:'any',statsMin:{intelligence:45},statsMax:{},flagsRequired:['first_job'],flagsExcluded:['started_side_hustle'],isMilestone:false,repeatable:false,probability:.3},choices:[
  ch('Scale it up. This could be something.','You put real time into it. Not all of it works. Enough of it does.',{intelligence:10,happiness:12},{stress:15,reputation:8},{started_side_hustle:true,entrepreneur:true},{cash:2000,annualIncome:4000}),
  ch('Keep it small. Supplemental income only.','You do not overextend. The extra money is real. The risk is managed.',{happiness:8},{stress:5},{started_side_hustle:true},{cash:800,annualIncome:2000}),
  ch('Let it go. Too much to maintain.','You abandon it before it goes anywhere. The idea was good. The execution was not the right time.',{happiness:-3},{},{},{}),
]},

{id:'infidelity_temptation',title:'The Temptation',narrative:"Someone is not your partner. The situation has been building for weeks. Tonight it is unmistakable.",category:'romance',conditions:{ageMin:24,ageMax:50,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['in_relationship'],flagsExcluded:['infidelity_faced'],isMilestone:false,repeatable:false,probability:.3},choices:[
  ch('Walk away. You made a commitment.','You leave. The temptation passes. You do not tell your partner but you do not forget it either.',{happiness:-5},{karma:12,stress:5},{infidelity_faced:true},{}),
  ch('Give in.','It happens. The guilt is immediate and stays.',{happiness:3},{karma:-20,stress:25},{infidelity_faced:true,cheated_on_partner:true},{},[]  ,{_setFlag:(s)=>{if(s.npcs.partner)s.npcs.partner.trust=Math.max(0,s.npcs.partner.trust-30);}}),
]},

{id:'friendship_test',title:'When It Got Real',narrative:"Your closest friend is in trouble -- real trouble. The kind that asks everything of people around them.",category:'general',conditions:{ageMin:20,ageMax:45,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['had_first_friend'],flagsExcluded:['friendship_tested'],isMilestone:false,repeatable:false,probability:.35},choices:[
  ch('Show up. Completely.','You give the time, the money, the presence. It costs you. You would do it again.',{happiness:5},{karma:15,stress:10},{friendship_tested:true},{},[{npcId:'mother',closeness:10,trust:15}]),
  ch('Offer support but limit your exposure.','You help within your capacity. They understand -- or they say they do.',{happiness:2},{karma:5,stress:5},{friendship_tested:true},{}),
  ch('Withdraw. You have your own problems.','You send a message. You do not follow up. The friendship survives but in a different form.',{happiness:-5},{karma:-8},{friendship_tested:true},{}),
]},

{id:'addiction_spiral',title:'The Dependency',narrative:"You have noticed that you cannot stop. What started as recreation has become need. You need it to get through the day and you do not know when that changed.",category:'health',conditions:{ageMin:16,ageMax:50,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['tried_alcohol'],flagsExcluded:['addiction_faced'],isMilestone:false,repeatable:false,probability:.2},choices:[
  ch('Get help. Acknowledge what this is.','You say the word out loud to a professional. It is the hardest thing. It is the beginning.',{health:5,happiness:8},{stress:-10,karma:8},{addiction_faced:true,has_addiction:false,sought_help:true,in_therapy:true},{}),
  ch('Cut back alone. You can control this.','You try. It is harder than you thought. Sometimes you manage. Sometimes you do not.',{health:-5,happiness:-5},{stress:10},{addiction_faced:true,has_addiction:true},{}),
  ch('Continue. You have it under control.','You do not have it under control.',{health:-10,happiness:-8},{stress:15,karma:-5},{addiction_faced:true,has_addiction:true},{}),
]},

{id:'family_secret_revealed',title:'What You Did Not Know',narrative:"Something about your family that was kept from you has come out. A secret that reframes things you thought you understood.",category:'family',conditions:{ageMin:18,ageMax:45,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['family_secret_revealed'],isMilestone:false,repeatable:false,probability:.2},choices:[
  ch('Process it. Sit with the new version of events.','You take time to rebuild your understanding. Some things make more sense now. Others less.',{intelligence:10,happiness:-8},{karma:5,stress:10},{family_secret_revealed:true},{}),
  ch('Confront the person who kept it.','The conversation is seismic. Something irreversible shifts in how you see each other.',{happiness:-10,intelligence:8},{karma:5,stress:15},{family_secret_revealed:true},{},[{npcId:'mother',trust:-15},{npcId:'father',trust:-15}]),
]},

{id:'business_opportunity',title:'The Door That Opened',narrative:"An opportunity presented itself. Not a job -- something larger. A business you could build. A gap in the market you can see clearly because of where you have been.",category:'career',conditions:{ageMin:24,ageMax:45,gender:'any',countries:'any',statsMin:{intelligence:55},statsMax:{},flagsRequired:['first_career_role'],flagsExcluded:['business_launched'],isMilestone:false,repeatable:false,probability:.25},choices:[
  ch('Go for it. Leave the job, bet on yourself.','The first year is the hardest thing you have ever done. The second year starts to make sense.',{happiness:14,intelligence:10},{stress:30,reputation:12},{business_launched:true,entrepreneur:true,started_business:true},{debt:20000,annualIncome:5000},[],{_setFlag:(s)=>{s.career.title='Founder';s.career.level=Math.max(3,s.career.level);}}),
  ch('Start it on the side. Test it first.','Lower risk, slower growth. You keep the salary while the idea proves itself.',{happiness:8,intelligence:8},{stress:15},{business_launched:true,started_side_hustle:true},{annualIncome:3000}),
  ch('The timing is wrong. File it away.','Maybe later. Timing matters.',{},{stress:-5},{},{}),
]},

// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
// MIDDLE AGE (40-60) -- NEW
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
{id:'divorce',title:'The End of It',narrative:"The marriage is over. You both knew it for a while. The paperwork is the last formality on a decision already made.",category:'romance',conditions:{ageMin:28,ageMax:60,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['married'],flagsExcluded:['divorced'],isMilestone:false,repeatable:false,probability:.2},choices:[
  ch('Accept it. Move forward with dignity.','You do not make it uglier than it has to be. There is something in that restraint that you will carry well.',{happiness:-15,health:-3},{karma:8,stress:15},{divorced:true},[],{_setFlag:(s)=>{s.npcs.exes.push(s.npcs.partner);s.npcs.partner=null;s.flags.in_relationship=false;}}),
  ch('Fight it. You are not done.','You contest everything. It takes two years and everything you have. Some of it was worth fighting for. Not all of it.',{happiness:-20,health:-5},{karma:-3,stress:25},{divorced:true},{debt:8000},[],{_setFlag:(s)=>{s.npcs.exes.push(s.npcs.partner);s.npcs.partner=null;s.flags.in_relationship=false;}}),
]},

{id:'second_chance_romance',title:'Unexpected',narrative:"You were not looking. You had decided, quietly, that a certain part of your life was done. Then someone appeared who did not know you had decided that.",category:'romance',conditions:{ageMin:30,ageMax:60,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['had_serious_relationship'],flagsExcluded:['in_relationship','second_romance'],isMilestone:false,repeatable:false,probability:.35},choices:[
  ch('Let it happen. You are allowed.','You lower the wall. Slowly. They are patient enough to wait for you to do it at your own pace.',{happiness:18,looks:5},{karma:5,stress:-5},{second_romance:true,in_relationship:true},{},[],{_setFlag:(s)=>{s.npcs.partner=makeFriend(s.age);s.npcs.partner.relationship='partner';s.npcs.partner.trust=70;s.npcs.partner.closeness=65;}}),
  ch('Stay alone. The peace is harder to find twice.','You var it pass. You are not sure it was the right call. You are not sure it was wrong.',{happiness:-8},{karma:5,stress:-8},{second_romance:true},{}),
]},

{id:'redundancy',title:'The Call to HR',narrative:"Your name was on the list. The company is restructuring. The job you have had for years is ending in thirty days.",category:'career',conditions:{ageMin:28,ageMax:58,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['first_career_role'],flagsExcluded:['made_redundant'],isMilestone:false,repeatable:false,probability:.2},choices:[
  ch('Use the time to pivot. Go somewhere better.','The redundancy pays for the gap. The gap turns into the best career move you ever made.',{intelligence:10,happiness:5},{stress:15,reputation:8},{made_redundant:true},{cash:5000},[],{_setFlag:(s)=>{s.career.title='Between Roles';s.career.level=Math.max(1,s.career.level-1);}}),
  ch('Panic. Find the next thing as fast as possible.','You take the first offer that comes. It is not the right one. You start looking again within a year.',{happiness:-10},{stress:25,karma:-2},{made_redundant:true},{annualIncome:-3000}),
]},

{id:'ageing_body',title:'The Body Memo',narrative:"You did something you always did without thinking -- and it hurt differently this time. The body has started sending memos.",category:'health',conditions:{ageMin:35,ageMax:55,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['ageing_body_faced'],isMilestone:false,repeatable:false,probability:.5},choices:[
  ch('Take it seriously. Make changes now.','You join a gym, change the diet, sleep properly for the first time in years. The body responds.',{health:12,happiness:8},{stress:-8},{ageing_body_faced:true},{}),
  ch('Ignore it. You are fine.','You are not fine. The memos continue. They get louder.',{health:-8},{stress:5},{ageing_body_faced:true},{}),
]},

{id:'unexpected_loss',title:'Gone',narrative:"Someone you did not expect to lose is gone. Not a parent, not old age -- just gone. The kind of loss that does not follow the rules.",category:'family',conditions:{ageMin:20,ageMax:60,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['had_first_friend'],flagsExcluded:['faced_unexpected_loss'],isMilestone:false,repeatable:false,probability:.15},choices:[
  ch('Grieve completely. Let yourself fall apart.','You fall apart at the right time, in the right places, with the right people. You come back.',{happiness:-18,health:-4},{karma:8,stress:20},{faced_unexpected_loss:true},{}),
  ch('Hold it together. Others need you to.','You function. The grief finds its way in later -- in the middle of a supermarket, in a song, in a dream.',{happiness:-12},{stress:25,karma:5},{faced_unexpected_loss:true},{}),
]},

{id:'career_peak',title:'The Peak',narrative:"You have reached the highest point in your career that your path allows. The view from here is exactly what you imagined when you started. And something else -- something you did not expect.",category:'career',conditions:{ageMin:30,ageMax:55,gender:'any',countries:'any',statsMin:{intelligence:65},statsMax:{},flagsRequired:['got_promoted'],flagsExcluded:['career_peak_reached'],isMilestone:false,repeatable:false,probability:.2},choices:[
  ch('Savour it. You earned this.','You var yourself feel it. The satisfaction is real and rare. You bank the moment.',{happiness:20,intelligence:5},{reputation:20,karma:5},{career_peak_reached:true},{annualIncome:15000},[],{_setFlag:(s)=>{s.career.level=Math.min(10,s.career.level+2);s.career.title='Senior Leader';}}),
  ch('What comes next? The peak raises the question.','Achievement does not answer the deeper question. You realise you need to figure out what the rest of it is for.',{happiness:8,intelligence:10},{stress:10,karma:8},{career_peak_reached:true},{annualIncome:10000}),
]},

// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
// OLD AGE (60+) -- NEW
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
{id:'health_decline',title:'The Slow Change',narrative:"It is not one thing. It is the accumulation of everything. The body is tiring. The years are becoming visible in ways you cannot ignore.",category:'health',conditions:{ageMin:62,ageMax:85,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['health_decline_faced'],isMilestone:false,repeatable:false,probability:.6},choices:[
  ch('Accept it with grace. Adjust everything.','You modify your life around your body rather than fighting it. The quality of your days improves.',{health:-5,happiness:8},{karma:5,stress:-8},{health_decline_faced:true},{}),
  ch('Push back. You are not done.','You fight it. The body pushes back. Some days you win.',{health:-10,happiness:5},{stress:10},{health_decline_faced:true},{}),
]},

{id:'grandchild_born',title:'Another Generation',narrative:"Your child has had a child. The arithmetic of time becomes suddenly visible. A new person exists who will know you only in the way grandchildren know grandparents -- as something permanent that was always there.",category:'family',conditions:{ageMin:50,ageMax:80,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['has_children'],flagsExcluded:['has_grandchild'],isMilestone:false,repeatable:false,probability:.4},choices:[
  ch('Be present for this generation. Differently than you were for the last.','You have learned things that cannot be learned young. You give them the time you did not always have before.',{happiness:20},{karma:12,stress:-5},{has_grandchild:true},{}),
  ch('From a distance. Let them build their own family.','You are there when needed. Not more. The right distance for everyone.',{happiness:10},{karma:5},{has_grandchild:true},{}),
]},

{id:'making_peace',title:'The Conversation You Kept Avoiding',narrative:"There is someone in your life -- or formerly in it -- with whom something was left unsaid. Unresolved. The older you get, the louder the silence.",category:'general',conditions:{ageMin:55,ageMax:80,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['made_peace'],isMilestone:false,repeatable:false,probability:.45},choices:[
  ch('Make the call. Say what needs saying.','They answer or they do not. Either way, the act of reaching changes something in you.',{happiness:15},{karma:15,stress:-10},{made_peace:true},{}),
  ch('Let it remain unresolved.','Some things are carried. You add it to the pile and continue.',{happiness:-5},{stress:5,karma:-3},{made_peace:true},{}),
]},

{id:'final_illness',title:'The Diagnosis',narrative:"The tests came back. The doctor spoke carefully. You heard the words in the right order but they reassembled themselves on the drive home.",category:'health',conditions:{ageMin:65,ageMax:90,gender:'any',countries:'any',statsMin:{},statsMax:{health:55},flagsRequired:[],flagsExcluded:['terminal_diagnosed'],isMilestone:false,repeatable:false,probability:.35},choices:[
  ch('Face it directly. Make plans. Say what needs saying.','You do what needs doing with the time you have. The people around you receive more of you than they have in years.',{happiness:-5},{karma:15,stress:10},{terminal_diagnosed:true},{}),
  ch('Keep it private for now. Carry it alone.','You do not want the weight of their worry added to your own. For a while, you manage it in solitude.',{happiness:-12},{stress:20},{terminal_diagnosed:true},{}),
]},

// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
// WORLD EVENTS (cross-age)
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
{id:'world_pandemic',title:'The World Stops',narrative:"Something moves through the population with terrifying speed. Borders close. Streets empty. The ordinary rhythms of life are suspended indefinitely.",category:'world',conditions:{ageMin:10,ageMax:80,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['survived_pandemic'],isMilestone:false,repeatable:false,probability:.1},choices:[
  ch('Isolate strictly. Protect yourself and others.','You lose months. The months you save someone else you will never know about.',{health:5,happiness:-10},{karma:10,stress:15},{survived_pandemic:true},{}),
  ch('Continue living as much as possible.','You take the risk. You manage it mostly. The world you knew is different when it returns.',{happiness:5,health:-8},{stress:5,karma:-5},{survived_pandemic:true},{}),
]},

{id:'political_upheaval',title:'The Country Is Changing',narrative:"Something is happening at the political level that affects daily life directly. The election, the coup, the policy -- whatever it was, it reached you.",category:'world',conditions:{ageMin:16,ageMax:80,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['political_upheaval_faced'],isMilestone:false,repeatable:false,probability:.2},choices:[
  ch('Get involved. Participate.','You go to the march, cast the vote, write the letter. The result is uncertain. The act is not.',{happiness:8,intelligence:5},{karma:8,reputation:8},{political_upheaval_faced:true},{}),
  ch('Stay out of it. Keep your head down.','Wise or cowardly depending on who you ask. You survive the moment intact.',{},{stress:5},{political_upheaval_faced:true},{}),
]},

{id:'japa_opportunity',title:'The Japa Decision',narrative:"The opportunity to leave the country -- properly, with papers, with a plan -- has arrived. The UK. Canada. The US. Somewhere the system actually works.",category:'general',conditions:{ageMin:18,ageMax:40,gender:'any',countries:['Nigeria','Ghana'],statsMin:{},statsMax:{},flagsRequired:[],flagsExcluded:['japa_decision_made'],isMilestone:false,repeatable:false,probability:.35},choices:[
  ch('Go. The opportunity is now.','You leave. The first year is brutal in a different way than home was brutal. The second year opens.',{happiness:10,intelligence:5},{stress:20,reputation:5},{japa_decision_made:true,immigrated:true,japa_successful:true},{cash:-3000},[],{_setFlag:(s)=>{s.flags.country_moved_to=pick(['United Kingdom','Canada','United States']);}}),
  ch('Stay. Build something here.','You choose the soil you know. The choice is harder than it looks from outside.',{happiness:5},{karma:8,stress:5},{japa_decision_made:true},{}),
]},

// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
// STAGE 4: CAREER PATH ENTRY EVENTS
// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550

// \u2500\u2500 SPORTS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
{id:'football_path_start',title:'The Academy Letter',narrative:"An academy has offered you a trial. Football -- the thing you have been doing since before you could explain why you loved it. The letter is on the table.",category:'career',conditions:{ageMin:12,ageMax:18,gender:'any',countries:'any',statsMin:{health:55},statsMax:{},flagsRequired:['early_athlete'],flagsExcluded:['career_path_started'],isMilestone:false,repeatable:false,probability:.3},choices:[
  ch('Accept. Football is the dream.','You sign the forms. You move into the rhythm of a footballer\'s life -- early mornings, diet, discipline. The path is narrow. You are on it.',{health:5,happiness:14},{stress:10,reputation:8},{career_path_started:true},{},[],{_setFlag:(s)=>{enterCareerPath('football',1);}}),
  ch('Keep it as a passion. Choose stability.','You decline. You wonder, sometimes, what you were walking away from.',{happiness:-8,intelligence:5},{},{},{},{}),
]},

{id:'music_first_track',title:'The First Track',narrative:"You recorded something. In a bedroom, on a phone, on borrowed equipment -- it does not matter. You put it online. People are listening.",category:'career',conditions:{ageMin:15,ageMax:22,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['childhood_music'],flagsExcluded:['career_path_started'],isMilestone:false,repeatable:false,probability:.4},choices:[
  ch('Afrobeats. This is your sound.','The sound comes from somewhere specific in you. You release more. People share them. Something is beginning.',{happiness:15,looks:5},{reputation:12,stress:8},{career_path_started:true},{},[],{_setFlag:(s)=>{enterCareerPath('afrobeats',1);}}),
  ch('Hip-hop. Bars are your language.','You write about your life and the life around you. It connects. The first proper track does numbers.',{happiness:14,intelligence:5},{reputation:10,stress:8},{career_path_started:true},{},[],{_setFlag:(s)=>{enterCareerPath('hiphop',1);}}),
  ch('R&B/Pop. Your voice is the instrument.','You lean into melody. The voice is the thing. People tell you it stops them mid-scroll.',{happiness:14,looks:6},{reputation:10,stress:8},{career_path_started:true},{},[],{_setFlag:(s)=>{enterCareerPath('rnb',1);}}),
]},

{id:'choose_professional_path',title:'The Course You Chose',narrative:"University applications are in. The course you chose says something about who you plan to become.",category:'career',conditions:{ageMin:17,ageMax:19,gender:'any',countries:'any',statsMin:{intelligence:55},statsMax:{},flagsRequired:['going_university'],flagsExcluded:['career_path_started'],isMilestone:false,repeatable:false,probability:.6},choices:[
  ch('Medicine. You want to heal people.','The course is brutal and long. You knew that. You chose it anyway.',{intelligence:5,health:3},{stress:15,karma:8},{career_path_started:true},{},[],{_setFlag:(s)=>{enterCareerPath('medicine',1);}}),
  ch('Law. You want to argue for people.','The reading is dense. The logic is rigorous. You find yourself enjoying both.',{intelligence:8},{stress:12,reputation:5},{career_path_started:true},{},[],{_setFlag:(s)=>{enterCareerPath('law',1);}}),
  ch('Engineering. You want to build things.','Problems have solutions. You like finding them.',{intelligence:10},{stress:10},{career_path_started:true},{},[],{_setFlag:(s)=>{enterCareerPath('engineering',1);}}),
  ch('Business. You want to run things.','You are interested in how money moves. How organisations work. How power accumulates.',{intelligence:6,happiness:5},{stress:8},{career_path_started:true},{},[],{_setFlag:(s)=>{enterCareerPath('corporate',1);}}),
]},

{id:'content_creator_start',title:'The Algorithm Found You',narrative:"You have been posting consistently for eight months. Then one video does ten times what anything else did. The algorithm found you.",category:'career',conditions:{ageMin:16,ageMax:28,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['media_savvy'],flagsExcluded:['career_path_started'],isMilestone:false,repeatable:false,probability:.3},choices:[
  ch('Go all in. Content is your career now.','You post every day. You study what works. You treat it like the business it is becoming.',{happiness:12,looks:5},{reputation:15,stress:12},{career_path_started:true},{},[],{_setFlag:(s)=>{enterCareerPath('influencer',1);}}),
  ch('Keep it as a side thing for now.','You monetise it carefully. It pays for things. That is enough -- for now.',{happiness:8},{reputation:5},{},{annualIncome:3000}),
]},

{id:'entrepreneurship_start',title:'The Business Idea',narrative:"You have had it in your head for a year. The idea. The gap in the market. Everyone you have described it to has said some version of: that could work.",category:'career',conditions:{ageMin:20,ageMax:40,gender:'any',countries:'any',statsMin:{intelligence:50},statsMax:{},flagsRequired:['first_job'],flagsExcluded:['career_path_started'],isMilestone:false,repeatable:false,probability:.25},choices:[
  ch('Build it. Leave the job and commit.','You hand in your notice. The first month you panic every morning. Then something shifts.',{happiness:12,intelligence:8},{stress:28,reputation:10},{career_path_started:true,started_business:true},{debt:15000},[],{_setFlag:(s)=>{enterCareerPath('entrepreneur',1);}}),
  ch('Start it on the side first.','You build it in the margins. Slower. Safer. The day job funds the risk.',{happiness:8,intelligence:6},{stress:15},{career_path_started:true,started_side_hustle:true},[],[],{_setFlag:(s)=>{enterCareerPath('entrepreneur',1);}}),
]},

{id:'politics_entry',title:'The Seat Up for Grabs',narrative:"A local council seat is contested. Someone suggests your name. You have the connections. You have the conviction. The question is the willingness.",category:'career',conditions:{ageMin:25,ageMax:45,gender:'any',countries:'any',statsMin:{intelligence:60},statsMax:{},flagsRequired:['politically_savvy'],flagsExcluded:['career_path_started'],isMilestone:false,repeatable:false,probability:.2},choices:[
  ch('Run. This is the entry point.','You run. You campaign. You knock on doors. You win, narrowly. Your name is on the ballot results. You are in.',{intelligence:8,happiness:12},{reputation:20,stress:20},{career_path_started:true},{},[],{_setFlag:(s)=>{enterCareerPath('politics',2);}}),
  ch('Not yet. The timing is wrong.','You file it away. The right moment will come.',{},{},{},{}),
]},

// \u2500\u2500 CAREER STRUGGLE EVENTS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
{id:'career_fired',title:'Cleared Out',narrative:"Your access card stopped working at 8am. HR called at 9. Your things were already in a box. The company is restructuring. Your role is redundant.",category:'career',conditions:{ageMin:22,ageMax:55,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['first_career_role'],flagsExcluded:['career_fired'],isMilestone:false,repeatable:false,probability:.2},choices:[
  ch('Take the severance and pivot.','The redundancy money buys you three months. You use them well.',{intelligence:8,happiness:-12},{stress:20,karma:3},{career_fired:true,ever_fired:true},{cash:5000},[],{_setFlag:(s)=>{s.career.title='Between Roles';s.career.salary=0;s.finances.annualIncome=Math.max(0,s.finances.annualIncome-s.career.salary);}}),
  ch('Fight it. You were singled out unfairly.','You contest it. The process is long and draining. You settle for more money but the cost to your peace was real.',{happiness:-15,intelligence:5},{stress:28,karma:5},{career_fired:true,ever_fired:true},{cash:12000},[],{_setFlag:(s)=>{s.career.title='Between Roles';}}),
]},

{id:'career_burnout',title:'Running on Empty',narrative:"You have not taken more than two days off in fourteen months. You are performing. But the thing that made you good at this -- the curiosity, the energy -- is gone.",category:'career',conditions:{ageMin:24,ageMax:50,gender:'any',countries:'any',statsMin:{},statsMax:{health:60},flagsRequired:['first_career_role'],flagsExcluded:['burnout_faced'],isMilestone:false,repeatable:false,probability:.3},choices:[
  ch('Stop. Take a real break.','You take the time off. Your body thanks you first. Your mind catches up a month later.',{health:15,happiness:12},{stress:-25},{burnout_faced:true},{}),
  ch('Push through. Too much to lose right now.','You add caffeine and willpower to the equation. The body sends louder warnings.',{health:-12,happiness:-10},{stress:20},{burnout_faced:true},{}),
]},

{id:'toxic_workplace',title:'The Culture There',narrative:"You have realised the culture at your workplace is genuinely damaging. Not hard -- damaging. The way people are treated, the things that are normalised.",category:'career',conditions:{ageMin:20,ageMax:45,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['first_career_role'],flagsExcluded:['toxic_workplace_faced'],isMilestone:false,repeatable:false,probability:.25},choices:[
  ch('Leave. No job is worth your mental health.','You resign before you have something else lined up. Terrifying. The right call.',{happiness:14,health:8},{stress:-15,karma:5},{toxic_workplace_faced:true},{annualIncome:-8000}),
  ch('Stay and document everything.','You build the record. It takes discipline. When you eventually leave, you leave with leverage.',{happiness:-8,intelligence:8},{stress:20,karma:8},{toxic_workplace_faced:true},{}),
  ch('Adapt. Every environment has its cost.','You adjust. Some of the adjustment was necessary. Some was the cost of who you became there.',{happiness:-10},{stress:12,karma:-5},{toxic_workplace_faced:true},{}),
]},

{id:'first_big_deal',title:'The Number',narrative:"The deal is on the table. More money in one conversation than you made in the last two years. You have been preparing for this moment without knowing it.",category:'career',conditions:{ageMin:24,ageMax:45,gender:'any',countries:'any',statsMin:{intelligence:60},statsMax:{},flagsRequired:['first_career_role'],flagsExcluded:['first_big_deal'],isMilestone:false,repeatable:false,probability:.25},choices:[
  ch('Take it. The number is life-changing.','You sign. The money arrives. For a brief, clear moment you understand what it means to be compensated for your real value.',{happiness:18,intelligence:5},{reputation:15},{first_big_deal:true},{cash:20000,annualIncome:15000},[],{_setFlag:(s)=>{s.career.level=Math.min(10,s.career.level+1);}}),
  ch('Counter. You know what you are worth.','They push back. You hold. They blink. The final number is larger than the opening offer.',{happiness:20,intelligence:8},{reputation:18,karma:5},{first_big_deal:true},{cash:20000,annualIncome:25000},[],{_setFlag:(s)=>{s.career.level=Math.min(10,s.career.level+1);}}),
]},

// \u2500\u2500 MUSIC CAREER EVENTS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
{id:'record_deal_offer',title:'The Label Wants You',narrative:"A representative from a label sat in the audience. Afterwards they gave you a number. You called. They have an offer.",category:'career',conditions:{ageMin:17,ageMax:28,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['career_path_started'],flagsExcluded:['record_deal'],careerFilter:['afrobeats','hiphop','rnb','music_production'],isMilestone:false,repeatable:false,probability:.4},choices:[
  ch('Sign. Get the resources behind you.','You sign. The advance changes your material circumstances overnight. The creative constraints arrive alongside it.',{happiness:18,looks:5},{reputation:20,stress:15},{record_deal:true,career_path_started:true},{cash:50000},[],{_setFlag:(s)=>{if(['afrobeats','hiphop','rnb'].includes(s.career.path)){s.career.level=Math.max(s.career.level,2);s.career.title=(CAREER_PATHS[s.career.path] ? CAREER_PATHS[s.career.path].ladder[1] : undefined)||s.career.title;}}}),
  ch('Negotiate first. Read every clause.','You get a lawyer. The deal changes. You sign a better version of it.',{happiness:15,intelligence:8},{reputation:18,karma:5},{record_deal:true},{cash:75000},[],{_setFlag:(s)=>{if(['afrobeats','hiphop','rnb'].includes(s.career.path)){s.career.level=Math.max(s.career.level,2);s.career.title=(CAREER_PATHS[s.career.path] ? CAREER_PATHS[s.career.path].ladder[1] : undefined)||s.career.title;}}}),
  ch('Decline. Stay independent.','You keep ownership. The growth is slower. Everything you build is yours.',{happiness:10,intelligence:5},{reputation:8,karma:8},{career_path_started:true},{annualIncome:5000}),
]},

{id:'album_release',title:'The Body of Work',narrative:"You have been working on this album for eighteen months. It is the most honest thing you have ever made. Release day is here.",category:'career',conditions:{ageMin:18,ageMax:40,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['record_deal'],flagsExcluded:['released_album'],careerFilter:['afrobeats','hiphop','rnb','music_production'],isMilestone:false,repeatable:false,probability:.5},choices:[
  ch('It lands. The reception is everything.','First week numbers. Features. The album is reviewed. Your name is in conversations you were not in before.',{happiness:20,looks:8},{reputation:25,stress:15},{released_album:true},{cash:80000,annualIncome:20000},[],{_setFlag:(s)=>{s.career.level=Math.max(s.career.level,4);if(s.career.path)s.career.title=(CAREER_PATHS[s.career.path] ? CAREER_PATHS[s.career.path].ladder[3] : undefined)||s.career.title;s.fame.level=Math.max(1,s.fame.level);unlockAchievement('platinum');}}),
  ch('Mixed reception. Some love it. Critics are divided.','You learn what it feels like to have your most personal work publicly dissected.',{happiness:5,intelligence:8},{reputation:10,stress:20},{released_album:true},{cash:30000,annualIncome:8000},[],{_setFlag:(s)=>{s.career.level=Math.max(s.career.level,3);}}),
]},

{id:'music_world_tour',title:'The Tour',narrative:"The numbers justify it. A tour. Venues. Cities. Countries. Your music being sung back at you by people who learned it from a screen.",category:'career',conditions:{ageMin:20,ageMax:45,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['released_album'],flagsExcluded:['done_world_tour'],careerFilter:['afrobeats','hiphop','rnb'],isMilestone:false,repeatable:false,probability:.4},choices:[
  ch('Tour. Every show.','Eighty cities. You lose weight. You find something essential about yourself in the exhaustion of doing what you love at scale.',{happiness:20,health:-8,looks:5},{reputation:30,stress:25},{done_world_tour:true},{cash:500000},[],{_setFlag:(s)=>{s.career.level=Math.max(s.career.level,6);if(s.career.path)s.career.title=(CAREER_PATHS[s.career.path] ? CAREER_PATHS[s.career.path].ladder[5] : undefined)||s.career.title;s.fame.level=Math.max(2,s.fame.level);}}),
]},

// \u2500\u2500 SPORTS CAREER EVENTS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
{id:'sports_pro_contract',title:'The Pro Contract',narrative:"The club offers you your first professional contract. Numbers on paper. Your name, a salary, a duration. The beginning of what you came here for.",category:'career',conditions:{ageMin:17,ageMax:24,gender:'any',countries:'any',statsMin:{health:60},statsMax:{},flagsRequired:['made_sport_squad'],flagsExcluded:['pro_contract'],careerFilter:['football','basketball','athletics'],isMilestone:false,repeatable:false,probability:.5},choices:[
  ch('Sign it. You are a professional.','The pen hits the paper. Professional athlete. The words settle differently than you expected.',{happiness:20,health:3},{reputation:15,stress:8},{pro_contract:true},{cash:10000,annualIncome:25000},[],{_setFlag:(s)=>{s.career.level=Math.max(s.career.level,2);if(s.career.path)s.career.title=(CAREER_PATHS[s.career.path] ? CAREER_PATHS[s.career.path].ladder[1] : undefined)||s.career.title;}}),
]},

{id:'sports_injury',title:'The Injury',narrative:"It happened in training. A sound -- the wrong sound -- and then pain in a place you cannot afford to have pain. The scan results confirm what you already suspected.",category:'career',conditions:{ageMin:16,ageMax:35,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['pro_contract'],flagsExcluded:['had_sports_injury'],careerFilter:['football','basketball','athletics'],isMilestone:false,repeatable:false,probability:.35},choices:[
  ch('Recover properly. Take every session seriously.','The rehabilitation is longer than the doctors first said. You return different -- more careful, more intentional.',{health:-15,happiness:-15},{stress:20},{had_sports_injury:true},{cash:-8000}),
  ch('Rush back. The team needs you.','You come back early. The injury does not fully heal. You manage it for years.',{health:-25,happiness:-10},{stress:15},{had_sports_injury:true,chronic_injury:true},{cash:-3000}),
]},

{id:'sports_major_win',title:'The Trophy',narrative:"You won. Properly. A final, a championship, a title -- something that takes a name. The celebrations were real. The photo exists now as part of the permanent record.",category:'career',conditions:{ageMin:18,ageMax:40,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['pro_contract'],flagsExcluded:['won_major_title'],careerFilter:['football','basketball','athletics'],isMilestone:false,repeatable:false,probability:.25},choices:[
  ch('Celebrate it. You earned this.','You soak it in. You call people who helped you get here. The night lasts until morning.',{happiness:25,health:5},{reputation:30,karma:5},{won_major_title:true},{cash:50000},[],{_setFlag:(s)=>{s.career.level=Math.max(s.career.level,5);if(s.career.path)s.career.title=(CAREER_PATHS[s.career.path] ? CAREER_PATHS[s.career.path].ladder[4] : undefined)||s.career.title;s.fame.level=Math.max(1,s.fame.level);unlockAchievement('champion');}}),
]},

// \u2500\u2500 ASSET PURCHASE EVENTS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
{id:'first_car',title:'The First Car',narrative:"You bought a car. Your own money, your own choice. The keys in your hand felt heavier than they should.",category:'general',conditions:{ageMin:18,ageMax:35,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['first_job'],flagsExcluded:['bought_first_car'],isMilestone:false,repeatable:false,probability:.4},choices:[
  ch('Used -- sensible and affordable.',`You find something reliable. A 2012 Toyota with mileage you can live with. It gets you there.`,{happiness:12,looks:4},{},{bought_first_car:true},{cash:-4000},[],{_setFlag:(s)=>{s.assets.car=ASSET_TIERS.car[1];}}),
  ch('New -- you worked for this.',`The smell of a new car. You paid too much but you knew that going in.`,{happiness:18,looks:8},{reputation:5},{bought_first_car:true},{cash:-20000},[],{_setFlag:(s)=>{s.assets.car=ASSET_TIERS.car[2];}}),
]},

{id:'luxury_car_upgrade',title:'The Upgrade',narrative:"Your finances have moved. The car you drive should reflect it. You have been looking at options.",category:'general',conditions:{ageMin:24,ageMax:55,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['bought_first_car'],flagsExcluded:['bought_luxury_car'],isMilestone:false,repeatable:false,probability:.25},choices:[
  ch('BMW/Mercedes -- earned and deserved.','You trade in the old one and drive out of the dealership in something that turns heads.',{happiness:15,looks:10},{reputation:10},{bought_luxury_car:true},{cash:-50000},[],{_setFlag:(s)=>{s.assets.car={...ASSET_TIERS.car[3]};}}),
  ch('Porsche/Range Rover -- the statement car.','This was the car you promised yourself at sixteen. You kept the promise.',{happiness:20,looks:14},{reputation:15},{bought_luxury_car:true},{cash:-90000},[],{_setFlag:(s)=>{s.assets.car={...ASSET_TIERS.car[4]};}}),
]},

{id:'first_rolex',title:'The Watch',narrative:"You saw it in a window years ago and told yourself one day. Today is one day. The price tag is real and you can afford it.",category:'general',conditions:{ageMin:24,ageMax:55,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['first_big_deal'],flagsExcluded:['bought_first_watch'],isMilestone:false,repeatable:false,probability:.3},choices:[
  ch('Rolex Submariner. The classic.','You leave with a small paper bag and a very specific new feeling.',{happiness:14,looks:10},{reputation:12},{bought_first_watch:true},{cash:-14000},[],{_setFlag:(s)=>{s.assets.watches.push({...ASSET_TIERS.watch[3]});}}),
  ch('Tudor first. Work up to Rolex.','You buy the brother brand. Identical movement, different name. Smart.',{happiness:10,looks:6},{reputation:5},{bought_first_watch:true},{cash:-3500},[],{_setFlag:(s)=>{s.assets.watches.push({...ASSET_TIERS.watch[2]});}}),
]},

{id:'first_property',title:'The Keys',narrative:"The estate agent hands over the keys. Your name is on the deed. This building -- this specific address -- belongs to you.",category:'general',conditions:{ageMin:24,ageMax:50,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['first_career_role'],flagsExcluded:['bought_property'],isMilestone:false,repeatable:false,probability:.25},choices:[
  ch('A flat. Starting point, equity builder.','Small but yours. The mortgage payment feels like power rather than burden.',{happiness:16,intelligence:8},{karma:5,reputation:8},{bought_property:true},{debt:150000,annualExpenses:3600},[],{_setFlag:(s)=>{s.assets.properties.push({...ASSET_TIERS.property[1]});}}),
  ch('A house. You waited until you could do it properly.','More space, more mortgage, more yours.',{happiness:20,intelligence:5},{reputation:10},{bought_property:true},{debt:260000,annualExpenses:6000},[],{_setFlag:(s)=>{s.assets.properties.push({...ASSET_TIERS.property[2]});}}),
]},

// \u2500\u2500 FINANCIAL MILESTONE EVENTS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
{id:'first_investment_proper',title:'The Portfolio',narrative:"You have saved enough that keeping it in a current account feels irresponsible. Someone showed you the numbers on compound returns.",category:'general',conditions:{ageMin:22,ageMax:45,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['first_career_role'],flagsExcluded:['investment_decision'],isMilestone:false,repeatable:false,probability:.35},choices:[
  ch('Diversified index funds. Boring and brilliant.','You automate monthly contributions. In twenty years this decision will matter more than almost anything else you do today.',{intelligence:10,happiness:6},{karma:4},{investment_decision:true},{cash:-5000},[],{_setFlag:(s)=>{s.finances.investments.push({type:'Index Portfolio',value:5000,returnRate:.08});}}),
  ch('Property investment. Tangible assets.','A second property to var. Yields and headaches in equal measure.',{intelligence:8,happiness:8},{reputation:8},{investment_decision:true},{debt:200000,annualIncome:9600},[],{_setFlag:(s)=>{s.assets.properties.push({name:'Investment Property',value:200000});}}),
  ch('High-risk. You believe in the upside.','You put it in something volatile. It either doubles or halves.',{intelligence:5,happiness:10},{stress:15},{investment_decision:true},{cash:-10000},[],{_setFlag:(s)=>{var win=Math.random()>.45;var val=win?22000:3000;s.finances.investments.push({type:'High-Risk Portfolio',value:val});if(win)toast('Investment returned 120%!');else toast('Investment dropped 70%.');}}),
]},

{id:'salary_negotiation_annual',title:'The Annual Review',narrative:"Your one-year review is scheduled. Your manager sends the agenda. Compensation is on it. You have done the research.",category:'career',conditions:{ageMin:22,ageMax:50,gender:'any',countries:'any',statsMin:{intelligence:45},statsMax:{},flagsRequired:['first_career_role'],flagsExcluded:['negotiated_salary'],isMilestone:false,repeatable:false,probability:.5},choices:[
  ch('Ask for more than you expect to get.','They counter. You land somewhere good. You leave the meeting having moved the number.',{happiness:12,intelligence:6},{reputation:8,karma:4},{negotiated_salary:true},{annualIncome:8000}),
  ch('Accept what they offer.','It is fair. You did not push. You wonder, briefly, what would have happened if you had.',{happiness:4},{stress:-5},{negotiated_salary:true},{annualIncome:3000}),
]},

{id:'sponsorship_deal',title:'The Brand Deal',narrative:"A brand reached out. They have seen your numbers, your audience, your image. They want to attach their name to yours.",category:'career',conditions:{ageMin:18,ageMax:40,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['went_viral'],flagsExcluded:['first_sponsorship'],isMilestone:false,repeatable:false,probability:.4},choices:[
  ch('Sign it. The money is real.','The deal is announced. The comments are mixed. The transfer is not.',{happiness:14,looks:6},{reputation:12},{first_sponsorship:true},{cash:25000,annualIncome:12000}),
  ch('Negotiate for a better fit.','You get a brand that actually aligns with your image. It costs some money but protects more.',{happiness:10,intelligence:8},{reputation:15,karma:5},{first_sponsorship:true},{cash:18000,annualIncome:8000}),
  ch('Decline. Not the right brand.','Your integrity is worth more than the cheque. This time.',{happiness:5},{karma:8},{},{},{}),
]},

// \u2500\u2500 CRIME PATH EVENTS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
{id:'crime_path_start',title:'The Corner',narrative:"The money was faster than anything the legitimate world was offering. You knew what it was. You chose it anyway.",category:'crime',conditions:{ageMin:14,ageMax:22,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['teen_rebellion'],flagsExcluded:['career_path_started','crime_path_started'],isMilestone:false,repeatable:false,probability:.2},choices:[
  ch('Step in. The money is real.','The first week you make more than your parent does in a month. The weight of what that means takes longer to arrive.',{happiness:8},{stress:20,karma:-15,reputation:-10},{career_path_started:true,crime_path_started:true,gang_affiliated:true},{cash:800},[],{_setFlag:(s)=>{enterCareerPath('crime',1);}}),
  ch('Walk away while you still can.','You see where it ends. You choose not to start.',{happiness:3,intelligence:8},{karma:10},{},{},{}),
]},

{id:'arrest_event',title:'The Night It All Went Wrong',narrative:"Blue lights behind you. Or a door kicked in. Or a call that you need to come to the station. You always knew this was a risk.",category:'crime',conditions:{ageMin:14,ageMax:40,gender:'any',countries:'any',statsMin:{},statsMax:{},flagsRequired:['gang_affiliated'],flagsExcluded:['arrested'],isMilestone:false,repeatable:false,probability:.4},choices:[
  ch('Cooperate. Say nothing without a lawyer.','You are processed. You get a lawyer. The charge is serious. The outcome is uncertain.',{happiness:-20,health:-5},{stress:35,karma:-5,reputation:-20},{arrested:true,ever_arrested:true},{cash:-5000}),
  ch('Try to talk your way out.','It does not work. It rarely does.',{happiness:-25,health:-5},{stress:40,karma:-10,reputation:-25},{arrested:true,ever_arrested:true},{cash:-8000}),
]},

]; // end EVENTS array -- filter out any null entries from helper
var EVENTS_CLEAN = EVENTS.filter(Boolean);

/* ════════════════════════════════════════════════════════════════
   CHAIN EVENT SYSTEM
   Each chain: {id, steps:[{type:'log'|'event', ...}], conditions:{}}
   type='log'  → auto-added to timeline, no choice needed
   type='event' → renders as main event card with choices
   ════════════════════════════════════════════════════════════════ */

// ============================================================
// CHAIN EVENT SYSTEM — Long Chains (5-8 steps)
// ============================================================
var CHAIN_DEFS = [

  /* ══════════════════════════════════════════════════════════
     CHAIN 1: THE FIRST HUSTLE CLIENT (6 steps)
     Career / money arc — early adult, first taste of real income
     ══════════════════════════════════════════════════════════ */
  {id:'chain_first_hustle', label:'First Real Client',
   conditions:{ageMin:16,ageMax:30,flagsRequired:['first_job'],flagsExcluded:['chain_first_hustle_done'],probability:.4},
   steps:[
    {type:'log', dir:'neutral', text:'Someone in your circle mentioned they needed help with something you are actually good at.'},
    {type:'log', dir:'up', text:'You sent a message. They replied the same day.'},
    {type:'event', id:'fh_quote', title:'They Want a Price',
     category:'career', chainBadge:'First Client — Step 3',
     narrative:'They asked what you charge. You have never had to answer that question before. The number you say right now will set the standard for everything that follows.',
     choices:[
      {text:'Charge what you are actually worth',outcome:{narrative:'They hesitated for two seconds. Then agreed. You learn early that confidence in your number is half the negotiation.',dir:'up',stats:{happiness:10,intelligence:5},hidden:{reputation:12,karma:4},finances:{cash:400}}},
      {text:'Undercharge — you just want the work',outcome:{narrative:'They say yes immediately. You feel relief, then regret. The job takes twice as long as you quoted for. You file the lesson.',dir:'neutral',stats:{happiness:3,intelligence:8},hidden:{stress:10},finances:{cash:150}}},
      {text:'Overcharge to test what they will pay',outcome:{narrative:'They push back hard. You meet in the middle. It still pays better than the low number would have.',dir:'up',stats:{intelligence:10},hidden:{reputation:8},finances:{cash:300}}},
     ]},
    {type:'log', dir:'neutral', text:'You got started. The work was harder than you expected.'},
    {type:'event', id:'fh_delivery', title:'Delivery Day',
     category:'career', chainBadge:'First Client — Step 5',
     narrative:'You finished. It is not perfect but it is real and it is done. Now you have to hand it over and wait for their reaction.',
     choices:[
      {text:'Deliver it and stand behind it fully',outcome:{narrative:'They love it. Genuinely. The payment comes through the same evening. They say they will recommend you.',dir:'up',stats:{happiness:14,intelligence:4},hidden:{reputation:18,karma:5},finances:{cash:500},flags:{first_client_done:true,has_good_reputation:true}}},
      {text:'Apologise for the flaws before they can find them',outcome:{narrative:'They notice the apology more than the flaws. It makes them look harder. They pay but do not come back.',dir:'neutral',stats:{happiness:5},hidden:{reputation:5,stress:8},finances:{cash:300},flags:{first_client_done:true}}},
      {text:'Ask for feedback before marking it complete',outcome:{narrative:'They give you notes. You fix two things. The final version is genuinely better. They overpay by a bit.',dir:'up',stats:{happiness:12,intelligence:8},hidden:{reputation:15,karma:6},finances:{cash:600},flags:{first_client_done:true}}},
     ]},
    {type:'log', dir:'up', text:'Your first real client is done. The money is yours. The experience is yours. Both will compound.'},
    {type:'flag', flag:'chain_first_hustle_done'},
   ]},


  /* ══════════════════════════════════════════════════════════
     CHAIN 2: THE RELATIONSHIP THAT ALMOST WORKED (7 steps)
     Romance arc — young adult, long slow burn to heartbreak or commitment
     ══════════════════════════════════════════════════════════ */
  {id:'chain_almost_relationship', label:'The One That Almost Was',
   conditions:{ageMin:18,ageMax:35,flagsRequired:[],flagsExcluded:['chain_almost_done','married'],probability:.35},
   steps:[
    {type:'log', dir:'neutral', text:'There is someone. You do not know it yet, but this one is going to matter.'},
    {type:'log', dir:'up', text:'You kept running into them. Then you stopped pretending it was an accident.'},
    {type:'event', id:'ar_first_move', title:'You Made a Move',
     category:'romance', chainBadge:'Romance Arc — Step 3',
     narrative:'You said something. Not much — just enough. Now the air between you has changed and there is no going back to how it was before.',
     choices:[
      {text:'Be completely direct about how you feel',outcome:{narrative:'They looked at you for a long moment. Then smiled. Not the polite one. The real one.',dir:'up',stats:{happiness:18,looks:3},hidden:{karma:6,stress:-5},flags:{ar_direct:true}}},
      {text:'Keep it subtle — let them come to you',outcome:{narrative:'They move closer over the following weeks. Slower, but real. You both know without saying it.',dir:'up',stats:{happiness:12},hidden:{stress:5},flags:{ar_slow:true}}},
      {text:'Almost say it, then pull back',outcome:{narrative:'You bottle it. They wait. The moment passes and becomes something you carry.',dir:'down',stats:{happiness:-8},hidden:{stress:15},flags:{ar_coward:true}}},
     ]},
    {type:'log', dir:'up', text:'Something real began. The first few weeks were exactly what you hoped they would be.'},
    {type:'log', dir:'neutral', text:'Then something shifted. You could not name it exactly.'},
    {type:'event', id:'ar_conflict', title:'The First Real Fight',
     category:'romance', chainBadge:'Romance Arc — Step 6',
     narrative:'It started small. It became something neither of you expected. The words said in anger are sitting in the room now, and they do not disappear when you stop saying them.',
     choices:[
      {text:'Apologise first — you said things you did not mean',outcome:{narrative:'They meet you halfway. The conversation that follows is the most honest one you have had with anyone.',dir:'up',stats:{happiness:12},hidden:{karma:10,stress:-8},flags:{ar_resolved:true,in_relationship:true},npcEffects:[]}},
      {text:'Hold your ground — you meant what you said',outcome:{narrative:'So did they. You reach an understanding that includes some difficult truths. It is healthier for it.',dir:'neutral',stats:{happiness:5,intelligence:8},hidden:{karma:5,stress:5},flags:{ar_resolved:true,in_relationship:true}}},
      {text:'Go quiet and wait for them to fix it',outcome:{narrative:'They wait for you. The silence lasts three weeks. When it breaks, something has cooled permanently.',dir:'down',stats:{happiness:-12},hidden:{stress:18,karma:-3},flags:{ar_damaged:true}}},
      {text:'End it before it gets worse',outcome:{narrative:'You walk away first. Part of you is relieved. Part of you will wonder for years.',dir:'down',stats:{happiness:-16},hidden:{stress:10,karma:3},flags:{chain_almost_done:true}}},
     ]},
    {type:'log', dir:'neutral', text:'Whatever happened, you are not the same person you were when this started.'},
    {type:'flag', flag:'chain_almost_done'},
   ]},


  /* ══════════════════════════════════════════════════════════
     CHAIN 3: THE MONEY SPIRAL (7 steps)
     Finance crisis arc — any age from 20, escalating debt
     ══════════════════════════════════════════════════════════ */
  {id:'chain_money_spiral', label:'Running Out of Road',
   conditions:{ageMin:20,ageMax:55,flagsRequired:[],flagsExcluded:['chain_money_spiral_done'],cashMax:800,probability:.45},
   steps:[
    {type:'log', dir:'down', text:'The account has been in a bad place for weeks. You have been ignoring the notifications.'},
    {type:'log', dir:'down', text:'A bill landed that you had forgotten about. You covered it. Just barely.'},
    {type:'event', id:'ms_first_crisis', title:'The Numbers Do Not Work',
     category:'general', chainBadge:'Money Crisis — Step 3',
     narrative:'You sat down and actually looked at everything. Income in. Expenses out. The gap is real and it is getting wider. Something has to change.',
     choices:[
      {text:'Cut everything non-essential immediately',outcome:{narrative:'It hurts. No going out. No extras. The number stabilises. You live on the edge of it for three months.',dir:'neutral',stats:{happiness:-10},hidden:{stress:15,karma:3},finances:{annualExpenses:-2000}}},
      {text:'Find more income — take on anything',outcome:{narrative:'You pick up extra work. The exhaustion is real. But so is the cushion building slowly back.',dir:'up',stats:{health:-5,happiness:-5},hidden:{stress:20},finances:{cash:600,annualIncome:3000}}},
      {text:'Borrow from family to bridge the gap',outcome:{narrative:'They help without making you feel small about it. The money buys you three months. The gratitude stays longer.',dir:'neutral',stats:{happiness:-5},hidden:{karma:-4,stress:-5},finances:{cash:1000,debt:1000},npcEffects:[{npcId:'mother',trust:-8,closeness:5}]}},
      {text:'Ignore it and hope something comes through',outcome:{narrative:'Nothing comes through. The gap widens. The stress begins affecting everything else.',dir:'down',stats:{happiness:-15,health:-5},hidden:{stress:25},finances:{debt:2000}}},
     ]},
    {type:'log', dir:'down', text:'You got through that month. The problem did not go away.'},
    {type:'log', dir:'neutral', text:'A few weeks later, a second pressure point appeared.'},
    {type:'event', id:'ms_escalation', title:'It Is Getting Worse',
     category:'general', chainBadge:'Money Crisis — Step 6',
     narrative:'The short-term fix ran out. The debt is growing with interest. A creditor sent a formal notice. This is no longer something you can manage with vibes.',
     choices:[
      {text:'Call the creditor and negotiate a payment plan',outcome:{narrative:'They are actually reasonable. The plan is tight but survivable. You breathe for the first time in weeks.',dir:'up',stats:{happiness:8,intelligence:5},hidden:{stress:-15,karma:5},finances:{debt:-500},flags:{chain_money_spiral_done:true}}},
      {text:'Sell something significant to clear it',outcome:{narrative:'You let it go. The thing is gone but the weight is gone with it. A clean page.',dir:'neutral',stats:{happiness:-8},hidden:{stress:-20,karma:3},finances:{cash:2000,debt:-2000},flags:{chain_money_spiral_done:true}}},
      {text:'Take out a high-interest loan to buy time',outcome:{narrative:'The immediate crisis passes. The long-term one just got larger. You know this. You did it anyway.',dir:'down',stats:{happiness:-5},hidden:{stress:10,karma:-3},finances:{cash:2000,debt:5000},flags:{chain_money_spiral_done:true}}},
     ]},
    {type:'log', dir:'neutral', text:'The crisis passed or became manageable. Money never forgets. Neither do you.'},
    {type:'flag', flag:'chain_money_spiral_done'},
   ]},


  /* ══════════════════════════════════════════════════════════
     CHAIN 4: THE CAREER CROSSROADS (8 steps)
     Major career arc — feels stuck, opportunity arrives, hard choice
     ══════════════════════════════════════════════════════════ */
  {id:'chain_career_crossroads', label:'The Fork in the Road',
   conditions:{ageMin:24,ageMax:42,flagsRequired:['first_career_role'],flagsExcluded:['chain_career_cross_done'],probability:.35},
   steps:[
    {type:'log', dir:'neutral', text:'You have been at this long enough that the initial novelty has fully worn off.'},
    {type:'log', dir:'down', text:'A colleague who started the same time as you just got promoted. You were not even considered.'},
    {type:'log', dir:'neutral', text:'Someone reached out on LinkedIn. A different company. More money. Unknown culture.'},
    {type:'event', id:'cc_dilemma', title:'Stay or Go',
     category:'career', chainBadge:'Career Crossroads — Step 4',
     narrative:'The offer is real. It pays better. The company seems legitimate. But you have been building something here. The relationships, the knowledge, the seniority. Starting over has a cost.',
     choices:[
      {text:'Take the new role — you have earned this move',outcome:{narrative:'You hand in your notice. Your manager is surprised and then not. The first month at the new place is disorienting. By month three you are glad you went.',dir:'up',stats:{happiness:14,intelligence:5},hidden:{reputation:15,stress:12},finances:{annualIncome:12000},flags:{cc_moved:true}}},
      {text:'Stay and demand a conversation about your future',outcome:{narrative:'The conversation happens. They are vague. You push for specifics. By the end you have either a clear path or clarity that there is not one.',dir:'neutral',stats:{intelligence:8},hidden:{reputation:8,stress:8},flags:{cc_stayed:true}}},
      {text:'Counter-offer — use this to extract more where you are',outcome:{narrative:'They match half of it. It is less than you wanted. You stay with more money and a clearer sense of how they see you.',dir:'neutral',stats:{happiness:8},hidden:{reputation:5,stress:5},finances:{annualIncome:5000},flags:{cc_negotiated:true}}},
     ]},
    {type:'log', dir:'neutral', text:'Whatever you chose, the decision settled something in you.'},
    {type:'log', dir:'neutral', text:'Six months passed. Things were harder than expected, or easier, or both.'},
    {type:'event', id:'cc_setback', title:'The Wall',
     category:'career', chainBadge:'Career Crossroads — Step 7',
     narrative:'Something went wrong at work. A project failed, or a client complained, or a manager became hostile. The kind of setback that makes you question whether you chose right.',
     choices:[
      {text:'Push through it — this is where careers are actually built',outcome:{narrative:'You absorb it and come out the other side with a reputation for not cracking under pressure. People notice.',dir:'up',stats:{intelligence:10,happiness:5},hidden:{reputation:20,stress:8},finances:{annualIncome:5000},flags:{chain_career_cross_done:true}}},
      {text:'Take some time off and reset',outcome:{narrative:'You take two weeks. Come back clear-headed. The problem looks smaller from the other side of rest.',dir:'neutral',stats:{health:10,happiness:12},hidden:{stress:-20},flags:{chain_career_cross_done:true}}},
      {text:'Start looking for the next move — this place is done',outcome:{narrative:'You leave professionally. Take the lessons. The next role benefits from everything you absorbed here.',dir:'neutral',stats:{happiness:8},hidden:{stress:-10,reputation:8},finances:{annualIncome:8000},flags:{chain_career_cross_done:true}}},
     ]},
    {type:'log', dir:'up', text:'The crossroads is behind you. The road ahead is yours to read.'},
    {type:'flag', flag:'chain_career_cross_done'},
   ]},


  /* ══════════════════════════════════════════════════════════
     CHAIN 5: THE HEALTH IGNORED (6 steps)
     Health arc — symptoms, avoidance, forced confrontation
     ══════════════════════════════════════════════════════════ */
  {id:'chain_health_ignored', label:'What the Body Knows',
   conditions:{ageMin:22,ageMax:65,flagsRequired:[],flagsExcluded:['chain_health_ignored_done'],healthMax:55,probability:.4},
   steps:[
    {type:'log', dir:'down', text:'Something has been off for weeks. You told yourself it was tiredness.'},
    {type:'log', dir:'down', text:'The symptom is more persistent now. You are building a story around why it is nothing.'},
    {type:'event', id:'hi_ignore_or_act', title:'It Is Not Going Away',
     category:'health', chainBadge:'Health — Step 3',
     narrative:'Two months of this. Whatever it is, it has become a low-level constant presence. A colleague noticed you looked tired and said something. You have been thinking about it since.',
     choices:[
      {text:'Book a doctor\'s appointment today',outcome:{narrative:'You go. The waiting room is full. The doctor asks the questions you have been avoiding answering. You answer them honestly.',dir:'up',stats:{health:8},hidden:{stress:-10,karma:5},finances:{cash:-200},flags:{hi_saw_doctor:true}}},
      {text:'Research it yourself first',outcome:{narrative:'Forty minutes of internet searching and you are now convinced it is either nothing or something terminal. You close the laptop and sleep badly.',dir:'down',stats:{happiness:-8},hidden:{stress:20},flags:{hi_avoidant:true}}},
      {text:'Push through — you cannot afford to slow down right now',outcome:{narrative:'You push through. The body is keeping score.',dir:'down',stats:{health:-8,happiness:-5},hidden:{stress:15}}},
     ]},
    {type:'log', dir:'neutral', text:'Time passed. The issue did not resolve on its own.'},
    {type:'event', id:'hi_diagnosis', title:'The Results Are Back',
     category:'health', chainBadge:'Health — Step 5',
     narrative:'You finally got the tests done. The doctor wants to talk through the results in person. The appointment is tomorrow.',
     choices:[
      {text:'Go and face whatever it is',outcome:{narrative:'It is serious but manageable. Caught at a point where something can be done. The relief is complicated by the treatment ahead.',dir:'up',stats:{health:15,happiness:-5},hidden:{stress:-5,karma:5},finances:{cash:-800},flags:{chain_health_ignored_done:true,got_diagnosis:true}}},
      {text:'Cancel the appointment — you are not ready',outcome:{narrative:'You reschedule. Then again. The body does not wait for you to be ready.',dir:'down',stats:{health:-15,happiness:-10},hidden:{stress:25},finances:{cash:-2000},flags:{chain_health_ignored_done:true,ignored_diagnosis:true}}},
     ]},
    {type:'log', dir:'neutral', text:'The body has been trying to tell you something for a long time. You are listening now.'},
    {type:'flag', flag:'chain_health_ignored_done'},
   ]},


  /* ══════════════════════════════════════════════════════════
     CHAIN 6: BUILDING THE BUSINESS (8 steps)
     Entrepreneur arc — hustle grows into real business, then crisis
     ══════════════════════════════════════════════════════════ */
  {id:'chain_business_build', label:'Building Something Real',
   conditions:{ageMin:20,ageMax:45,flagsRequired:['started_business'],flagsExcluded:['chain_biz_build_done'],probability:.5},
   steps:[
    {type:'log', dir:'up', text:'The business is alive. Real customers. Real money. Real problems.'},
    {type:'log', dir:'neutral', text:'Someone offered to invest. Not a large amount but more than you have.'},
    {type:'event', id:'bb_investment', title:'The First Outside Money',
     category:'career', chainBadge:'Business Arc — Step 3',
     narrative:'The investor wants 20% of the business for a sum that would genuinely change what you can do. They have made money before. They also have opinions.',
     choices:[
      {text:'Take the deal — you need the fuel',outcome:{narrative:'The money arrives. So does the pressure. You grow faster than you would have alone.',dir:'up',stats:{intelligence:8,happiness:10},hidden:{stress:18,reputation:12},finances:{cash:15000},flags:{bb_investor:true}}},
      {text:'Negotiate it down to 10%',outcome:{narrative:'They push back but accept. You give up less. You get slightly less too. The relationship works.',dir:'up',stats:{intelligence:12},hidden:{stress:10,reputation:10},finances:{cash:8000},flags:{bb_investor:true}}},
      {text:'Decline — you will grow on your own terms',outcome:{narrative:'Slower. But yours. You will be grateful for this decision later and frustrated by it in the meantime.',dir:'neutral',stats:{happiness:8},hidden:{karma:5,stress:5},flags:{bb_self_funded:true}}},
     ]},
    {type:'log', dir:'up', text:'Growth happened. Faster than expected in some places. Slower in others.'},
    {type:'log', dir:'neutral', text:'Then: a crisis. The kind that decides whether businesses survive.'},
    {type:'event', id:'bb_crisis', title:'The Business Is in Trouble',
     category:'career', chainBadge:'Business Arc — Step 6',
     narrative:'A major client pulled out. Or a batch failed. Or costs exploded. Whatever it was, you are looking at a month of expenses with no income to cover them.',
     choices:[
      {text:'Cut hard and fast — protect the core',outcome:{narrative:'It hurts people you like. You do it anyway. The core survives. You rebuild leaner.',dir:'neutral',stats:{happiness:-10,intelligence:10},hidden:{stress:15,karma:-5,reputation:8},finances:{expenses:-3000},flags:{bb_survived:true}}},
      {text:'Double down — spend to grow out of the hole',outcome:{narrative:'It is a gamble. If the growth comes it works. If it does not the hole gets deeper.',dir:'neutral',stats:{happiness:5},hidden:{stress:25},finances:{debt:8000,cash:5000},flags:{bb_gambled:true},special:'_rng_bb_gamble'}},
      {text:'Bring in a co-founder to share the weight',outcome:{narrative:'Someone you trust comes in. They have what you lack. The business changes shape but does not die.',dir:'up',stats:{happiness:10,intelligence:8},hidden:{stress:-10,reputation:12},flags:{bb_cofounder:true,bb_survived:true}}},
      {text:'Wind it down properly before it collapses',outcome:{narrative:'You close it with dignity. Everyone gets paid what they are owed. You walk away tired and intact.',dir:'neutral',stats:{happiness:-15},hidden:{karma:10,stress:-15},finances:{debt:5000},flags:{chain_biz_build_done:true}}},
     ]},
    {type:'log', dir:'neutral', text:'Businesses survive crises or they do not. Either way the founder is changed.'},
    {type:'event', id:'bb_legacy', title:'What Did You Build',
     category:'career', chainBadge:'Business Arc — Step 8',
     narrative:'A year after the crisis. Things are more stable. Someone asked you what the business is really about. You found yourself with an actual answer.',
     choices:[
      {text:'I built something that employs real people',outcome:{narrative:'The team is the thing. You realise the business is now bigger than any single client or product.',dir:'up',stats:{happiness:18,intelligence:5},hidden:{karma:12,reputation:18},finances:{annualIncome:15000},flags:{chain_biz_build_done:true}}},
      {text:'I built proof that I could do it',outcome:{narrative:'The proof is on the balance sheet. Whatever comes next, you have this.',dir:'up',stats:{happiness:15},hidden:{karma:6,reputation:12},finances:{annualIncome:10000},flags:{chain_biz_build_done:true}}},
     ]},
    {type:'flag', flag:'chain_biz_build_done'},
   ]},


  /* ══════════════════════════════════════════════════════════
     CHAIN 7: THE FAMILY FALLING APART (7 steps)
     Family arc — parent conflict or sibling crisis, long slow burn
     ══════════════════════════════════════════════════════════ */
  {id:'chain_family_fracture', label:'The Crack in the Foundation',
   conditions:{ageMin:14,ageMax:45,flagsRequired:[],flagsExcluded:['chain_family_frac_done'],probability:.3},
   steps:[
    {type:'log', dir:'down', text:'Something has been wrong at home for a while. The adults in your life are not okay.'},
    {type:'log', dir:'neutral', text:'A conversation happened in the kitchen that was not meant for you to hear.'},
    {type:'event', id:'ff_confrontation', title:'It Cannot Be Ignored Anymore',
     category:'family', chainBadge:'Family Arc — Step 3',
     narrative:'Whatever was happening has become visible and undeniable. The people who were supposed to be stable have become the source of instability. You are standing in the middle of it.',
     choices:[
      {text:'Step in and try to mediate',outcome:{narrative:'You are too young or too close for this to work cleanly. But your trying changes the temperature of the room.',dir:'neutral',stats:{intelligence:8,happiness:-10},hidden:{stress:18,karma:8},npcEffects:[{npcId:'mother',closeness:8,trust:5},{npcId:'father',closeness:8,trust:5}]}},
      {text:'Remove yourself from it — self-preservation',outcome:{narrative:'You find the places in your life that are not this. You survive by not absorbing it all.',dir:'neutral',stats:{happiness:-8},hidden:{stress:10,karma:2}}},
      {text:'Confront the parent who is causing the most damage',outcome:{narrative:'The confrontation is seismic. Things are said that cannot be unsaid. The truth is now visible.',dir:'down',stats:{happiness:-15},hidden:{stress:22,karma:5},npcEffects:[{npcId:'father',trust:-20,closeness:-10}]}},
     ]},
    {type:'log', dir:'down', text:'The household was different after that. Some silences become permanent.'},
    {type:'log', dir:'neutral', text:'You found ways to carry it. Most people do.'},
    {type:'event', id:'ff_resolution', title:'Years Later',
     category:'family', chainBadge:'Family Arc — Step 6',
     narrative:'Enough time has passed that you can see the shape of what happened. The question now is what kind of relationship, if any, you rebuild.',
     choices:[
      {text:'Make the effort to reconcile — life is short',outcome:{narrative:'The first few calls are awkward. Then something loosens. It will never be what it could have been. It is something.',dir:'up',stats:{happiness:12},hidden:{karma:12,stress:-8},npcEffects:[{npcId:'mother',trust:15,closeness:12},{npcId:'father',trust:12,closeness:10}],flags:{chain_family_frac_done:true}}},
      {text:'Maintain a civil distance — close enough, far enough',outcome:{narrative:'Birthdays. Funerals. The things that require showing up. Nothing more. Nothing less.',dir:'neutral',stats:{happiness:5},hidden:{karma:5,stress:-5},flags:{chain_family_frac_done:true}}},
      {text:'Cut contact — your peace requires it',outcome:{narrative:'People do not understand. You stop explaining. The boundary costs you in grief and pays you in stability.',dir:'neutral',stats:{happiness:8},hidden:{karma:-2,stress:-12},flags:{chain_family_frac_done:true,family_estranged:true}}},
     ]},
    {type:'log', dir:'neutral', text:'Family is complicated. Most of the real ones are.'},
    {type:'flag', flag:'chain_family_frac_done'},
   ]},


  /* ══════════════════════════════════════════════════════════
     CHAIN 8: THE FAME THAT CHANGES YOU (7 steps)
     Fame arc — music/sports star, attention, identity crisis
     ══════════════════════════════════════════════════════════ */
  {id:'chain_fame_arc', label:'When the World Starts Watching',
   conditions:{ageMin:17,ageMax:35,flagsRequired:['career_path_started'],flagsExcluded:['chain_fame_done'],fameMin:1,probability:.4},
   steps:[
    {type:'log', dir:'up', text:'Something changed in how strangers look at you. You noticed it first in a shop.'},
    {type:'log', dir:'up', text:'A photo got shared beyond your circle. The comments were not from people you know.'},
    {type:'event', id:'fa_first_attention', title:'The Attention Is Real Now',
     category:'career', chainBadge:'Fame Arc — Step 3',
     narrative:'You are recognisable now. Not everywhere. But enough that it is undeniable. People who do not know you have opinions about you. The question is what you do with that.',
     choices:[
      {text:'Embrace it — this is what you worked for',outcome:{narrative:'You lean into it. The performances get bigger. The audience gets louder. Something in you fits perfectly into this.',dir:'up',stats:{happiness:16,looks:5},hidden:{reputation:20,stress:12},finances:{annualIncome:8000},flags:{fa_embraced:true}}},
      {text:'Stay grounded — the work is still the point',outcome:{narrative:'You keep your head down. The attention grows more slowly but the foundation is stronger.',dir:'neutral',stats:{intelligence:8,happiness:10},hidden:{reputation:12,karma:6,stress:5},flags:{fa_grounded:true}}},
      {text:'It is overwhelming — you need to manage your exposure',outcome:{narrative:'You pull back. The fans notice. A small controversy grows. You survive it but the lesson is clear.',dir:'down',stats:{happiness:-5},hidden:{reputation:-5,stress:15},flags:{fa_overwhelmed:true}}},
     ]},
    {type:'log', dir:'neutral', text:'The attention is a mirror. It shows you things about yourself you did not expect.'},
    {type:'log', dir:'down', text:'Someone close to you said they barely recognise you anymore.'},
    {type:'event', id:'fa_identity', title:'Who Are You Without the Noise',
     category:'general', chainBadge:'Fame Arc — Step 6',
     narrative:'Alone, without the audience, without the validation — you sat with yourself for the first time in months. The question is whether you like what you find.',
     choices:[
      {text:'The work still means what it always meant',outcome:{narrative:'You reconnect with why you started. The next thing you make is the most honest you have done in years.',dir:'up',stats:{happiness:18,intelligence:8},hidden:{karma:10,reputation:15},finances:{annualIncome:10000},flags:{chain_fame_done:true,fame_grounded:true}}},
      {text:'The attention has changed you and you accept it',outcome:{narrative:'You are different. The old version of you is gone. You build with what you are now.',dir:'neutral',stats:{happiness:10,looks:5},hidden:{reputation:10,stress:-5},finances:{annualIncome:8000},flags:{chain_fame_done:true}}},
      {text:'Take a break — step out of the spotlight for a while',outcome:{narrative:'Six months away. You lose some ground. You find something worth more.',dir:'neutral',stats:{health:12,happiness:14},hidden:{stress:-20,karma:8},flags:{chain_fame_done:true,took_fame_break:true}}},
     ]},
    {type:'log', dir:'up', text:'Fame is a season. Identity is the whole life. The people who know the difference last longest.'},
    {type:'flag', flag:'chain_fame_done'},
   ]},


  /* ══════════════════════════════════════════════════════════
     CHAIN 9: SCHOOL EXAM CRISIS (6 steps)
     Education arc — exam pressure, failure or triumph
     ══════════════════════════════════════════════════════════ */
  {id:'chain_school_exam_crisis', label:'The Exams That Define the Track',
   conditions:{ageMin:14,ageMax:18,flagsRequired:['started_secondary'],flagsExcluded:['chain_school_exam_done'],probability:.5},
   steps:[
    {type:'log', dir:'neutral', text:'Exam season is close. The whole school feels the pressure of it.'},
    {type:'log', dir:'down', text:'You failed a mock exam badly. Your teacher called your parents.'},
    {type:'event', id:'se_prep', title:'Everything Rides on This',
     category:'school', chainBadge:'Exam Arc — Step 3',
     narrative:'Your parents sat you down. The conversation was uncomfortable. The exams are real and the results will follow you for years. You have six weeks.',
     choices:[
      {text:'Lock in completely — six weeks of real effort',outcome:{narrative:'You sacrifice everything else for six weeks. Your friends notice the absence. The preparation is thorough.',dir:'up',stats:{intelligence:18,happiness:-8},hidden:{stress:22},flags:{se_prepared:true}}},
      {text:'Study harder but keep some balance',outcome:{narrative:'You work more than before. Not at maximum capacity. The balance protects your mental state and costs you some marks.',dir:'neutral',stats:{intelligence:10,happiness:3},hidden:{stress:10},flags:{se_balanced:true}}},
      {text:'Panic and cannot focus properly',outcome:{narrative:'The anxiety is in control. You sit at your desk for hours and retain very little. The preparation is insufficient and you know it.',dir:'down',stats:{intelligence:2,happiness:-15},hidden:{stress:35},flags:{se_panicked:true}}},
     ]},
    {type:'log', dir:'neutral', text:'Exam day arrived. You sat down. The papers were in front of you.'},
    {type:'event', id:'se_results', title:'The Results Are Out',
     category:'school', chainBadge:'Exam Arc — Step 5',
     narrative:'The envelope or the SMS or the school noticeboard. Whatever form it took, the number is now real and visible and yours.',
     choices:[
      {text:'Open it immediately — face it now',outcome:{narrative:'Your heart rate was high. The number is either a relief or a wound. Either way you know where you stand.',dir:'up',stats:{intelligence:5,happiness:10},hidden:{stress:-15},flags:{chain_school_exam_done:true,passed_major_exam:true,sat_waec:true}}},
      {text:'Wait — sit with it for an hour first',outcome:{narrative:'You sat with the unopened envelope for forty minutes. Then you opened it. The result was the same but you were steadier receiving it.',dir:'neutral',stats:{intelligence:3,happiness:6},hidden:{stress:-8},flags:{chain_school_exam_done:true,sat_waec:true}}},
      {text:'Ask someone else to open it first',outcome:{narrative:'Your mother read it. Her face told you before the words did. The result was what the preparation deserved.',dir:'neutral',stats:{happiness:8},hidden:{stress:-10,karma:3},npcEffects:[{npcId:'mother',closeness:10,trust:8}],flags:{chain_school_exam_done:true,sat_waec:true}}},
     ]},
    {type:'log', dir:'neutral', text:'Results day becomes a reference point. Everything after is either because of it or in spite of it.'},
    {type:'flag', flag:'chain_school_exam_done'},
   ]},


  /* ══════════════════════════════════════════════════════════
     CHAIN 10: THE IMMIGRATION JOURNEY (8 steps)
     Migration arc — the japa/relocation arc with real consequences
     ══════════════════════════════════════════════════════════ */
  {id:'chain_japa_arc', label:'Leaving for Something Better',
   conditions:{ageMin:18,ageMax:38,flagsRequired:[],flagsExcluded:['chain_japa_done'],countries:['Nigeria','Ghana','Kenya','Senegal','Ethiopia'],probability:.35},
   steps:[
    {type:'log', dir:'neutral', text:'The conversations about leaving have been happening for months. You keep saying soon.'},
    {type:'log', dir:'neutral', text:'Someone you know just landed. They sent a photo from the airport. You stared at it for a long time.'},
    {type:'event', id:'ja_decision', title:'The Decision That Changes Everything',
     category:'general', chainBadge:'Relocation Arc — Step 3',
     narrative:'The visa came through, or the job offer arrived, or the university admitted you. The door is open. The question is whether you walk through it.',
     choices:[
      {text:'Go. You have waited long enough.',outcome:{narrative:'You tell your family. The reactions are complicated. Your mother cries. Your father says he is proud. You book the ticket.',dir:'up',stats:{happiness:12,intelligence:5},hidden:{stress:20,karma:5},finances:{cash:-3000},flags:{ja_going:true,immigrated:true}}},
      {text:'Not yet — the timing is not right',outcome:{narrative:'You defer. Another six months. You tell yourself you are being sensible. Mostly you are afraid. Both things are true.',dir:'neutral',stats:{happiness:-8},hidden:{stress:8},flags:{ja_deferred:true}}},
      {text:'Go but plan to come back — this is not permanent',outcome:{narrative:'You frame it as temporary. The people who have done it smile when you say this. You will understand the smile later.',dir:'up',stats:{happiness:10},hidden:{stress:15,karma:3},finances:{cash:-3000},flags:{ja_going:true,immigrated:true,plans_to_return:true}}},
     ]},
    {type:'log', dir:'up', text:'The flight was long. The arrival was overwhelming. Nothing was as expected.'},
    {type:'log', dir:'down', text:'The first three months were genuinely hard. The loneliness was something nobody warned you about.'},
    {type:'event', id:'ja_first_year', title:'Making It or Breaking',
     category:'general', chainBadge:'Relocation Arc — Step 6',
     narrative:'One year in. The novelty has worn off. The accents are not funny anymore. You know which queues to avoid and which buses do not come. The question is whether this is a life or just surviving.',
     choices:[
      {text:'You have built a real life here',outcome:{narrative:'The community found you or you found it. The work is real. The roots are shallow but they are roots.',dir:'up',stats:{happiness:14,intelligence:8},hidden:{reputation:12,karma:5},finances:{annualIncome:8000},flags:{chain_japa_done:true,japa_settled:true}}},
      {text:'It is harder than you thought but you are staying',outcome:{narrative:'Stubbornness or faith, you are not sure which. You stay. The second year is easier than the first.',dir:'neutral',stats:{happiness:5,intelligence:5},hidden:{stress:10,karma:3},finances:{annualIncome:5000},flags:{chain_japa_done:true}}},
      {text:'Go back home — this was not the right move',outcome:{narrative:'You return. Some people are kind about it. Some are not. You are neither a failure nor a fool. The experiment ended and you are learning from the data.',dir:'neutral',stats:{happiness:8},hidden:{stress:-15,karma:5},finances:{cash:-2000},flags:{chain_japa_done:true,returned_home:true}}},
     ]},
    {type:'log', dir:'neutral', text:'Migration is not a destination. It is a permanent renegotiation of who you are.'},
    {type:'flag', flag:'chain_japa_done'},
   ]},

];

/* Chain state machine */
function getActiveChain(){
  if(!G._activeChain)return null;
  return CHAIN_DEFS.find(function(c){return c.id===G._activeChain.id;})||null;
}

function getActiveStep(){
  if(!G._activeChain)return null;
  var chain=getActiveChain();
  if(!chain)return null;
  var stepIdx=G._activeChain.step||0;
  return stepIdx<chain.steps.length?chain.steps[stepIdx]:null;
}

function advanceChain(){
  if(!G._activeChain)return;
  G._activeChain.step=(G._activeChain.step||0)+1;
  var chain=getActiveChain();
  if(!chain||G._activeChain.step>=chain.steps.length){
    G._activeChain=null;
  }
}

function pickChain(){
  /* Pick an eligible chain to start */
  var eligible=CHAIN_DEFS.filter(function(c){
    if(G._fired.includes('chain_done_'+c.id))return false;
    if(G.flags['chain_done_'+c.id])return false;
    var cond=c.conditions;
    if(G.age<cond.ageMin||G.age>cond.ageMax)return false;
    if(cond.flagsRequired&&cond.flagsRequired.length){
      for(var i=0;i<cond.flagsRequired.length;i++)if(!G.flags[cond.flagsRequired[i]])return false;
    }
    if(cond.flagsExcluded&&cond.flagsExcluded.length){
      for(var i=0;i<cond.flagsExcluded.length;i++)if(G.flags[cond.flagsExcluded[i]])return false;
    }
    if(cond.careerPaths&&!cond.careerPaths.includes(G.career.path))return false;
    if(cond.cashMax!==undefined&&G.finances.cash>cond.cashMax)return false;
    if(cond.healthMax!==undefined&&G.stats.health>cond.healthMax)return false;
    if(cond.fameMin!==undefined&&G.fame.level<cond.fameMin)return false;
    if(cond.countries&&cond.countries.length&&!cond.countries.includes(G.country))return false;
    return true;
  });
  if(!eligible.length)return null;
  /* Weighted random */
  var total=0;
  eligible.forEach(function(c){total+=(c.conditions.probability||.3);});
  var r=Math.random()*total,cum=0;
  for(var i=0;i<eligible.length;i++){
    cum+=(eligible[i].conditions.probability||.3);
    if(r<=cum)return eligible[i];
  }
  return eligible[eligible.length-1];
}

function processChainStep(){
  /* Returns true if a choice event was rendered (awaiting player) */
  if(!G._activeChain)return false;
  var chain=getActiveChain();
  if(!chain){G._activeChain=null;return false;}

  /* Process all auto-steps until we hit an event step or end */
  while(G._activeChain&&G._activeChain.step<chain.steps.length){
    var step=chain.steps[G._activeChain.step];
    if(step.type==='log'){
      addTimelineEntry(step.dir||'neutral',step.text,'chain');
      advanceChain();
    } else if(step.type==='flag'){
      if(step.flag)G.flags[step.flag]=true;
      advanceChain();
    } else if(step.type==='event'){
      /* Render as main event card */
      renderChainEvent(step,chain.label);
      return true;
    } else {
      advanceChain();
    }
  }
  /* Chain finished */
  if(G._activeChain&&G._activeChain.step>=(chain?chain.steps.length:0)){
    G._fired.push('chain_done_'+chain.id);
    G._activeChain=null;
  }
  return false;
}



/* ════════════════════════════════════════════════════════════════
   HUSTLE → BUSINESS SYSTEM
   ════════════════════════════════════════════════════════════════ */

// ============================================================
// EXPANDED HUSTLE TYPES
// ============================================================
var HUSTLE_TYPES = {
  freelance:{
    name:'Freelancing', icon:'&#128187;',
    desc:'Design, writing, coding — project-based income',
    ageMin:16, incomeBase:300, incomePerLevel:[0,300,600,1200,2200,4000],
    skillReq:'intelligence', skillMin:45,
    levelNames:['Side Projects','Getting Clients','Consistent Work','In-Demand','Expert Freelancer'],
    growthEvents:['Got a new client.','Delivered a project on time.','Received a 5-star review.','Landed a recurring client.','Raised your rates successfully.'],
    riskEvents:['A client disputed the payment.','Missed a deadline badly.','Scope crept way out of control.','A client ghosted after delivery.'],
  },
  music_gigs:{
    name:'Music Gigs', icon:'&#127925;',
    desc:'Performances, beat sales, studio sessions',
    ageMin:15, incomeBase:150, incomePerLevel:[0,150,400,900,2000,4500],
    skillReq:'looks', skillMin:30,
    levelNames:['Open Mics','Local Gigs','Regular Bookings','Building a Name','Scene Staple'],
    growthEvents:['Performed at a local venue.','Sold a beat online.','Got booked for a private event.','Featured on a local playlist.','Collaborated with another artist.'],
    riskEvents:['A show got cancelled last minute.','Equipment failed on stage.','Got underpaid for a gig.','A collab fell through badly.'],
  },
  content:{
    name:'Content Creation', icon:'&#127909;',
    desc:'Social media, YouTube, brand deals',
    ageMin:12, incomeBase:50, incomePerLevel:[0,50,200,600,1500,3500],
    skillReq:'looks', skillMin:25,
    levelNames:['Just Starting','100 Followers','1K Followers','10K Followers','Creator with Clout'],
    growthEvents:['A post went semi-viral.','Gained 500 new followers.','Got a small brand enquiry.','Hit a follower milestone.','A video performed really well.'],
    riskEvents:['A post flopped badly.','Lost followers after a controversy.','A brand deal fell through.','Algorithm change tanked reach overnight.'],
  },
  tutoring:{
    name:'Tutoring', icon:'&#128218;',
    desc:'Teaching students — academic or skills-based',
    ageMin:16, incomeBase:200, incomePerLevel:[0,200,450,900,1600,2800],
    skillReq:'intelligence', skillMin:55,
    levelNames:['First Students','Word of Mouth','Regular Sessions','Trusted Tutor','Sought-After Teacher'],
    growthEvents:['A student improved their grades significantly.','Got referred by a happy parent.','Took on two students at once.','Student aced a major exam.','Built a small structured curriculum.'],
    riskEvents:['A student dropped out suddenly.','A parent made a complaint.','Double-booked two sessions.','A student failed and blamed you.'],
  },
  barbing:{
    name:'Barbing / Hair', icon:'&#9985;',
    desc:'Cut hair at home, then rent a chair, then own a shop',
    ageMin:14, incomeBase:120, incomePerLevel:[0,120,300,650,1200,2500],
    skillReq:'looks', skillMin:20,
    levelNames:['Home Cuts','Regular Clients','Rented Chair','Your Own Chair','Barbing Shop'],
    growthEvents:['Clients are coming back every week.','Word spread in the neighbourhood.','Learned a new technique.','Got a tip after a clean fade.','Booked out two weeks in advance.'],
    riskEvents:['Messed up a client\'s hair.','A regular switched barbers.','Equipment broke at the worst time.','A client left without paying.'],
  },
  catering:{
    name:'Catering / Food', icon:'&#127859;',
    desc:'Cook for events, sell food, build a catering brand',
    ageMin:15, incomeBase:180, incomePerLevel:[0,180,400,900,1800,3500],
    skillReq:'health', skillMin:25,
    levelNames:['Family Cooking','Selling to Neighbours','Small Orders','Event Catering','Catering Brand'],
    growthEvents:['Catered a small birthday party.','A regular customer placed a big order.','A food photo went viral on WhatsApp.','Hired a helper for a large event.','Got approached by an office for daily lunch.'],
    riskEvents:['Food spoiled before delivery.','A customer complained about the taste.','Ran out of gas during cooking.','An event was cancelled last minute.'],
  },
  photography:{
    name:'Photography', icon:'&#128247;',
    desc:'Events, portraits, social media content for brands',
    ageMin:15, incomeBase:200, incomePerLevel:[0,200,500,1100,2200,4000],
    skillReq:'looks', skillMin:30,
    levelNames:['Phone Camera Starter','First Paid Shoots','Regular Bookings','Sought-After Photographer','Premier Photographer'],
    growthEvents:['Shot a wedding and got praised.','A photo got reposted widely.','Landed a brand shoot.','Client booked you again immediately.','Got featured in a local magazine.'],
    riskEvents:['Camera equipment got damaged.','A client rejected the photos.','A shoot ran massively over time.','Storage drive corrupted with client files.'],
  },
  importation:{
    name:'Mini Importation', icon:'&#128666;',
    desc:'Buy cheap, sell for profit — clothes, electronics, goods',
    ageMin:17, incomeBase:250, incomePerLevel:[0,250,600,1400,3000,6000],
    skillReq:'intelligence', skillMin:40,
    levelNames:['Small Buyer','Reseller','Regular Importer','Bulk Buyer','Trade Business'],
    growthEvents:['Sold out a batch within a week.','Found a more reliable supplier.','Got a bulk order from a shop.','Expanded into a new product category.','Built a steady customer base online.'],
    riskEvents:['Goods got held at customs.','A batch arrived damaged.','A buyer refused to pay.','Exchange rate moved against you.'],
  },
  tailoring:{
    name:'Tailoring / Fashion', icon:'&#129525;',
    desc:'Make clothes, alter garments, build a fashion label',
    ageMin:14, incomeBase:150, incomePerLevel:[0,150,380,800,1700,3500],
    skillReq:'intelligence', skillMin:30,
    levelNames:['Home Sewing','Word of Mouth Orders','Regular Orders','Fashion Presence','Boutique Brand'],
    growthEvents:['A client wore your outfit to an event and got compliments.','Got commissioned for a wedding outfit.','A photo of your work went viral.','Stocked a small boutique.','A celebrity wore your design.'],
    riskEvents:['Delivered an outfit late for a big event.','Fabric supplier ran out of stock.','A client demanded a refund.','Sewing machine broke during a rush.'],
  },
  betting_tips:{
    name:'Sports Betting Tips', icon:'&#127936;',
    desc:'Sell football predictions, build a tips channel',
    ageMin:18, incomeBase:100, incomePerLevel:[0,100,250,600,1200,2800],
    skillReq:'intelligence', skillMin:45,
    levelNames:['Free Tips Account','Paid Subscribers','Growing Channel','Trusted Tipster','Betting Brand'],
    growthEvents:['A weekend prediction came through perfectly.','Subscriber count jumped after a big win.','A popular page shared your tips.','Landed a partnership with a betting site.','Sold a premium prediction package.'],
    riskEvents:['A high-confidence tip flopped badly.','Subscribers demanded refunds.','A betting site banned your affiliate link.','Lost credibility after a bad run.'],
  },
  event_mc:{
    name:'MC / Hosting', icon:'&#127908;',
    desc:'Host events, weddings, corporate gigs — your voice is the product',
    ageMin:17, incomeBase:200, incomePerLevel:[0,200,500,1100,2200,4500],
    skillReq:'looks', skillMin:40,
    levelNames:['Free Events','Paid Gigs','Regular MC','Event Circuit Name','Celebrity MC'],
    growthEvents:['Hosted a wedding and got standing applause.','Got a referral from an event planner.','A video clip of you hosting went viral.','Booked three events in one weekend.','Corporate company booked you for their annual dinner.'],
    riskEvents:['Sound system failed mid-event.','A client tried to renegotiate after the event.','You stumbled badly on a host intro.','A no-show almost cost you your reputation.'],
  },
  carpentry:{
    name:'Carpentry / Furniture', icon:'&#128296;',
    desc:'Build and repair furniture — craft that pays',
    ageMin:15, incomeBase:180, incomePerLevel:[0,180,400,900,1800,3800],
    skillReq:'health', skillMin:30,
    levelNames:['Learning the Craft','Small Repairs','Custom Orders','Furniture Maker','Premium Workshop'],
    growthEvents:['Built a dining table that earned serious praise.','Got commissioned for a full bedroom set.','A design photo spread on Instagram.','Supplied furniture to a small office.','A showroom asked to stock your pieces.'],
    riskEvents:['Wood supply prices jumped sharply.','A client rejected a custom piece.','A tool broke on a critical job.','Delivery damage cost you the full payment.'],
  },
};

function startHustle(type){
  closeModal();
  if(!HUSTLE_TYPES[type]){return;}
  var ht=HUSTLE_TYPES[type];
  if(G.age<ht.ageMin){toast('You need to be at least '+ht.ageMin+' for this.');return;}
  /* Check already active */
  var already=G.hustle.active.find(function(h){return h.type===type;});
  if(already){toast('You\'re already doing this.');return;}
  /* Check skill */
  var skillVal=G.stats[ht.skillReq]||G.stats.intelligence||50;
  if(skillVal<ht.skillMin){toast('Your '+ht.skillReq+' is too low for this (need '+ht.skillMin+').');return;}
  var newHustle={
    type:type, name:ht.name, level:1, xp:0, xpNeeded:100,
    income:ht.incomePerLevel[1], clients:1, started:G.age,
    totalEarned:0, active:true,
  };
  G.hustle.active.push(newHustle);
  G.finances.annualIncome+=newHustle.income*12;
  addTimelineEntry('up','Started '+ht.name+' on the side.','career');
  addLog(G.age,'Started hustling: '+ht.name,'career');
  renderStats();save();
  toast(ht.name+' started! Income: '+money(newHustle.income)+'/mo');
  /* Trigger chain if available */
  if(ht.chainId&&!G._activeChain){
    var chainDef=CHAIN_DEFS.find(function(c){return c.id===ht.chainId;});
    if(chainDef&&!G.flags['chain_done_'+ht.chainId]){
      G._activeChain={id:ht.chainId,step:0};
    }
  }
}

function updateHustles(){
  if(!G.hustle||!G.hustle.active||!G.hustle.active.length) return;
  G.hustle.active.forEach(function(slot){
    if(!slot.active) return;
    var ht = HUSTLE_TYPES[slot.type]; if(!ht) return;
    var statVal = G.stats[ht.skillReq] || 50;
    var econMult = {booming:1.15,stable:1.0,recession:0.75,crisis:0.55}[G.world.economy]||1.0;

    // XP gain — harder, stat-gated, slows at higher levels
    var baseXp = rnd(3,10);
    var statBoost = Math.max(0,(statVal-40)/12);
    var levelPenalty = slot.level * 8; // harder to level up as you go higher
    var xpGain = Math.max(1, Math.round(baseXp + statBoost - levelPenalty));
    slot.xp = (slot.xp||0) + xpGain;
    slot.xpNeeded = slot.xpNeeded || (100 + (slot.level||1)*60);

    // Income — affected by economy and burn rate
    if(!slot._burnCount) slot._burnCount = 0;
    var effectiveIncome = Math.round(slot.income * econMult);
    G.finances.cash += effectiveIncome * 12;
    G.hustle.totalEarned = (G.hustle.totalEarned||0) + effectiveIncome * 12;
    G.finances.lifetimeEarnings = (G.finances.lifetimeEarnings||0) + effectiveIncome * 12;

    // SETBACK system — 35% risk chance (up from 20%)
    var riskRoll = Math.random();
    if(riskRoll < 0.35){
      var severity = Math.random();
      if(severity < 0.15 && slot.level > 1){
        // MAJOR SETBACK — level down
        slot.level = Math.max(1, slot.level-1);
        slot.income = ht.incomePerLevel[slot.level]||ht.incomeBase;
        slot.xp = 0;
        slot.xpNeeded = 100 + slot.level*60;
        slot._burnCount = (slot._burnCount||0)+1;
        var majorHits=[
          ht.name+': A major setback -- you lost ground. Back to level '+slot.level+'.',
          ht.name+': Something went badly wrong. Had to rebuild from scratch.',
          ht.name+': Lost your biggest client / opportunity. Starting over.',
          ht.name+': A bad run wiped out months of progress.',
        ];
        addTimelineEntry('down',pick(majorHits),'career');
        toast(ht.name+': Major setback. Back to '+ht.levelNames[slot.level-1]+'.');
        applyStats({happiness:-rnd(5,12)});applyHidden({stress:rnd(12,20)});
      } else if(severity < 0.55){
        // MODERATE SETBACK — income hit + logged
        var hitPct = rnd(15,35);
        slot.income = Math.max(Math.round(ht.incomeBase*0.4), Math.round(slot.income*(1-hitPct/100)));
        var riskEvt = pick(ht.riskEvents);
        addTimelineEntry('down',ht.name+': '+riskEvt,'career');
        applyStats({happiness:-rnd(2,6)});applyHidden({stress:rnd(5,12)});
      } else {
        // MINOR SETBACK — small income dip
        slot.income = Math.max(Math.round(ht.incomeBase*0.5), Math.round(slot.income*0.9));
        addLog(G.age, ht.name+': '+pick(ht.riskEvents), 'career');
        applyHidden({stress:rnd(3,7)});
      }
      // 3 major setbacks = hustle burns out
      if(slot._burnCount>=3&&slot.level===1){
        slot.active=false;
        G.finances.annualIncome=Math.max(0,G.finances.annualIncome-slot.income*12);
        addTimelineEntry('down',ht.name+' shut down. Too many setbacks -- the hustle is dead.','career');
        toast(ht.name+' burned out after too many setbacks.');
        return;
      }
    } else if(riskRoll < 0.65){
      // GROWTH — but smaller, more realistic
      var growPct = rnd(3,10);
      slot.income = Math.min(ht.incomePerLevel[slot.level]||slot.income*1.5, Math.round(slot.income*(1+growPct/100)));
      var growEvt = pick(ht.growthEvents);
      addLog(G.age, ht.name+': '+growEvt, 'career');
      // Occasional competition appears
      if(Math.random()<0.2){
        var compEvts=['A competitor undercut your price.','A rival opened up nearby.','Market getting crowded.'];
        addTimelineEntry('down',ht.name+': '+pick(compEvts),'career');
        slot.income=Math.round(slot.income*0.95);
      }
    } else {
      // QUIET YEAR — no news, small drift
      addLog(G.age, ht.name+': Steady year.', 'career');
    }

    // Level up check — harder thresholds
    if(slot.level < 5 && slot.xp >= slot.xpNeeded){
      slot.level++;
      slot.xp = 0;
      slot.xpNeeded = 100 + slot.level*80;
      slot.income = ht.incomePerLevel[slot.level]||slot.income;
      slot._burnCount = Math.max(0,(slot._burnCount||0)-1); // setback forgiveness on level up
      addTimelineEntry('up',ht.name+' reached level '+slot.level+': '+ht.levelNames[slot.level-1]+'.','career');
      toast(ht.name+' — Level '+slot.level+': '+ht.levelNames[slot.level-1]+'!');
    }

    // Burn from overextension: if running 3+ hustles, all take a penalty
    var activeCount=(G.hustle.active||[]).filter(function(h){return h.active;}).length;
    if(activeCount>=3&&Math.random()<0.3){
      slot.income=Math.round(slot.income*0.88);
      if(activeCount===1) addLog(G.age,ht.name+': Spread too thin -- income taking a hit.','career');
    }
  });
  /* Business annual update */
  if(G.business && G.business.active){
    var profit = G.business.revenue - G.business.expenses;
    G.finances.cash += profit;
    G.business.totalProfit = (G.business.totalProfit||0) + profit;
    G.finances.lifetimeEarnings = (G.finances.lifetimeEarnings||0) + Math.max(0, profit);
    /* Risk event - 25% chance */
    if(Math.random() < 0.25){
      var drops=['An unexpected expense hit.','Lost a major client.','Staff issues caused delays.','A competitor undercut you.'];
      var drop = pick(drops);
      G.business.revenue = Math.max(G.business.expenses * 0.5, G.business.revenue * 0.85);
      addLog(G.age, G.business.name + ': ' + drop, 'career');
      toast(G.business.name + ': ' + drop);
    } else if(Math.random() < 0.3){
      var gains=['Word of mouth brought new clients.','A partnership opened doors.','Revenue grew steadily.','A strong quarter.'];
      G.business.revenue = G.business.revenue * (1 + rnd(5,15)/100);
      addLog(G.age, G.business.name + ': ' + pick(gains), 'career');
    }
    recalcNetWorth();
  }
}

function convertHustleToBusiness(hustleType){
  closeModal();
  var h=G.hustle.active.find(function(x){return x.type===hustleType;});
  if(!h||h.level<3){toast('Get your hustle to level 3 first.');return;}
  var ht=HUSTLE_TYPES[hustleType];
  G.business={
    active:true, type:hustleType, name:G.name+'\'s '+ht.name,
    level:1, revenue:h.income*14, expenses:h.income*5,
    staff:1, founded:G.age, totalRevenue:0,
  };
  /* Remove from active hustles */
  h.active=false;
  G.finances.annualIncome-=h.income*12;
  G.finances.annualIncome+=G.business.revenue;
  G.flags.started_business=true;
  addTimelineEntry('up','Converted '+ht.name+' into a business.','career');
  addLog(G.age,'Started '+G.business.name,'career');
  renderStats();save();
  toast(G.business.name+' is now a real business!');
}

function updateBusiness(){
  if(!G.business||!G.business.active)return;
  var biz=G.business;
  var econ={booming:1.2,stable:1.0,recession:0.75,crisis:0.5};
  var factor=econ[G.world.economy]||1.0;
  var skillBoost=1+(G.stats.intelligence-50)/200;
  biz.revenue=Math.round(biz.revenue*(1+rnd(1,8)/100)*factor*skillBoost);
  biz.expenses=Math.round(biz.expenses*(1+rnd(0,4)/100));
  var profit=biz.revenue-biz.expenses;
  biz.totalRevenue=(biz.totalRevenue||0)+biz.revenue;
  G.finances.annualIncome=biz.revenue;
  G.finances.cash+=Math.round(profit*0.6);
  /* Risk events */
  if(Math.random()<0.2){
    var risks=['A major client left.','An unexpected expense hit.','A supplier raised prices.',
               'A staff issue arose.','A competitor undercut you.','A tax audit request arrived.'];
    var goods=['Revenue up this quarter.','Landed a big contract.','Staff morale is high.',
               'A referral brought new clients.','Profit margin improved.','Expansion looks possible.'];
    var good=Math.random()<(0.4+biz.level*0.08);
    addTimelineEntry(good?'up':'down',pick(good?goods:risks),'career');
    if(!good){biz.revenue=Math.round(biz.revenue*0.9);}
    else{biz.level=Math.min(5,biz.level+(Math.random()<0.15?1:0));}
  }
  /* Achievement check */
  if(biz.totalRevenue>=1000000&&!G.flags.biz_million){
    G.flags.biz_million=true;
    addTimelineEntry('up','Business hit \u20241M in total revenue.','career');
    unlockAchievement('millionaire');
  }
}

/* Hustle tab modal */

function investInBusiness(){
  closeModal();
  if(!G.business||!G.business.active)return;
  var cost=rnd(2000,8000);
  if(G.finances.cash<cost){toast('Need at least '+money(cost)+' to invest.');return;}
  G.finances.cash-=cost;
  var boost=rnd(8,18)/100;
  G.business.revenue=Math.round(G.business.revenue*(1+boost));
  addTimelineEntry('up','Invested '+money(cost)+' in the business. Revenue up.','career');
  renderStats();save();toast('Invested '+money(cost)+'. Revenue up '+Math.round(boost*100)+'%.');
}
function hireBizStaff(){
  closeModal();
  if(!G.business||!G.business.active)return;
  var cost=rnd(8000,20000);
  if(G.finances.cash<cost){toast('Need at least '+money(cost)+' for a hire.');return;}
  G.finances.cash-=cost;
  G.business.staff=(G.business.staff||1)+1;
  G.business.revenue=Math.round(G.business.revenue*1.15);
  G.business.expenses=Math.round(G.business.expenses+cost*0.4);
  addTimelineEntry('up','Hired a new staff member. Capacity increased.','career');
  renderStats();save();toast('New hire made. Team size: '+G.business.staff+'.');
}

/* === SECTION 5: EVENT ENGINE === */
function getEligible(){
  return EVENTS_CLEAN.filter(ev=>{
    var c=ev.conditions;
    if(G.age<c.ageMin||G.age>c.ageMax)return false;
    if(c.gender!=='any'&&c.gender!==G.gender)return false;
    if(c.countries!=='any'&&!c.countries.includes(G.country))return false;
    if(!c.repeatable&&G._fired.includes(ev.id))return false;
    if(c.careerRequired&&G.career.path!==c.careerRequired)return false;
    if(c.educationStage&&G.education.stage!==c.educationStage)return false;
    // careerFilter: array of allowed career paths -- if set, exclude for everyone else
    if(c.careerFilter&&c.careerFilter.length>0){
      if(!G.career.path||!c.careerFilter.includes(G.career.path))return false;
    }
    // careerExclude: never show if on these paths
    if(c.careerExclude&&G.career.path&&c.careerExclude.includes(G.career.path))return false;
    for(var f of(c.flagsRequired||[]))if(!G.flags[f])return false;
    for(var f of(c.flagsExcluded||[]))if(G.flags[f])return false;
    for(var[s,min]of Object.entries(c.statsMin||{}))if((G.stats[s]||G.hidden[s]||0)<min)return false;
    for(var[s,max]of Object.entries(c.statsMax||{}))if((G.stats[s]||G.hidden[s]||0)>max)return false;
    return true;
  });
}

function pickEvent(){
  var eligible=getEligible();

  // Step 1 -- Milestone map for this exact age (country-specific overrides first)
  var countryMilestones=MILESTONE_COUNTRY[G.country]||{};
  var milestoneId=countryMilestones[G.age]||MILESTONE_MAP[G.age];
  if(milestoneId){
    var mev=EVENTS_CLEAN.find(e=>e.id===milestoneId&&!G._fired.includes(e.id));
    if(mev)return mev;
  }

  // Step 2 -- Any pending isMilestone events in eligible pool
  var milestones=eligible.filter(e=>e.conditions.isMilestone);
  if(milestones.length>0)return milestones[0];

  // Step 3 -- Weighted random from non-milestone pool
  var pool=eligible.filter(e=>!e.conditions.isMilestone);
  if(!pool.length)return null;
  var weights=pool.map(e=>getWeight(e));
  var total=weights.reduce((a,b)=>a+b,0);
  if(total===0)return null;
  var r=Math.random()*total,cum=0;
  for(var i=0;i<pool.length;i++){cum+=weights[i];if(r<=cum)return pool[i];}
  return pool[pool.length-1];
}

function getWeight(ev){
  var w=ev.conditions.probability||.3;

  // --- Stat amplifiers ---
  // Low happiness amplifies negative categories
  if(G.stats.happiness<25){
    if(['health','crime','general'].includes(ev.category))w*=1.5;
  }
  // Low health amplifies health events
  if(G.stats.health<25&&ev.category==='health')w*=1.8;
  // High stress amplifies negative events
  if(G.hidden.stress>70){
    if(['health','romance','family'].includes(ev.category))w*=1.3;
  }
  // High intelligence amplifies career/school
  if(G.stats.intelligence>70&&['career','school'].includes(ev.category))w*=1.2;
  // Low intelligence reduces school success events
  if(G.stats.intelligence<30&&ev.category==='school')w*=0.7;

  // --- Flag amplifiers ---
  if(G.flags.gang_affiliated&&ev.category==='crime')w*=2.0;
  if(G.flags.has_addiction)w*=(ev.category==='health'?1.8:1.0);
  if(G.flags.in_therapy&&ev.category==='health')w*=0.6;
  if(G.flags.politically_savvy&&ev.category==='career')w*=1.3;
  if(G.flags.media_savvy&&ev.category==='general')w*=1.1;
  if(G.flags.academic_driven&&ev.category==='school')w*=1.4;
  if(G.flags.had_great_mentor&&ev.category==='career')w*=1.3;
  if(G.flags.teen_rebellion&&ev.category==='crime')w*=1.5;

  // --- World economic state amplifier ---
  if(G.world.economy==='recession'){
    if(ev.category==='career')w*=0.7;  // fewer career opportunities
    if(ev.id==='debt_crisis')w*=2.0;
  }
  if(G.world.economy==='booming'){
    if(ev.category==='career')w*=1.3;
    if(ev.id==='unexpected_windfall')w*=1.5;
  }
  if(G.world.economy==='crisis'){
    if(ev.category==='career')w*=0.5;
    if(['debt_crisis','health_scare'].includes(ev.id))w*=2.5;
  }

  // --- Luck modifier (\u00b125% at extremes) ---
  var lm=(G.hidden.luck-50)/200;
  w=Math.max(.005,w+w*lm);

  // --- Life stage volatility (teen years = more events, more variance) ---
  if(G.age>=13&&G.age<=19)w*=1.2;

  return w;
}

// Queue for chained events to fire after current resolves
function queueChain(eventId){
  var ev=EVENTS_CLEAN.find(e=>e.id===eventId);
  if(ev&&_chainQueue.length<5)_chainQueue.push(ev);
}
function popChain(){
  return _chainQueue.length>0?_chainQueue.shift():null;
}

/* === SECTION 6: STAT ENGINE === */
function applyStats(changes){for(var[s,d]of Object.entries(changes))G.stats[s]=clamp((G.stats[s]||0)+d,0,100);}
function applyHidden(changes){for(var[s,d]of Object.entries(changes))G.hidden[s]=clamp((G.hidden[s]||0)+d,0,100);}


function crossStats(){
  // Track consecutive low-happiness years
  if(G.stats.happiness<20){
    G.flags._lowHappYears=(G.flags._lowHappYears||0)+1;
    if(G.flags._lowHappYears>=3)G.stats.health=Math.max(0,G.stats.health-2);
  } else {
    G.flags._lowHappYears=0;
  }

  // High stress \u2192 happiness drain
  if(G.hidden.stress>75)G.stats.happiness=Math.max(0,G.stats.happiness-3);
  else if(G.hidden.stress>50)G.stats.happiness=Math.max(0,G.stats.happiness-1);

  // Low health \u2192 caps positive stat gains (enforced by flag, handled in applyStats)
  G.flags._healthCritical=G.stats.health<30;

  // Depression risk: high intelligence + sustained low happiness
  if(G.stats.intelligence>70&&G.stats.happiness<30&&!G.flags.diagnosed_depression){
    if(Math.random()<0.15)G.flags.depression_risk=true;
  }

  // Fame / looks interaction: high looks \u2192 passive popularity (teens/young adult)
  if(G.stats.looks>75&&G.age>=16&&G.age<=35)
    G.fame.popularity=Math.min(100,G.fame.popularity+1);

  // Low karma \u2192 reputation decay when fame is present
  if(G.hidden.karma<20&&G.fame.level>=2)
    G.hidden.reputation=Math.max(0,G.hidden.reputation-2);

  // Addiction: health and happiness drain
  if(G.flags.has_addiction){
    G.stats.health=Math.max(0,G.stats.health-2);
    G.stats.happiness=Math.max(0,G.stats.happiness-1);
    G.hidden.stress=Math.min(100,G.hidden.stress+3);
  }

  // In therapy: stress relief
  if(G.flags.in_therapy)G.hidden.stress=Math.max(0,G.hidden.stress-5);
}

function checkThresholds(){
  if(G.stats.health<=0){triggerDeath('natural causes');return false;}

  // Extreme happiness crash \u2192 depression event
  if(G.stats.happiness<=5&&!G.flags.severe_depression){
    G.flags.severe_depression=true;
    addLog(G.age,'You reach your lowest point.','health');
    var depEv=EVENTS_CLEAN.find(e=>e.id==='severe_depression_event');
    if(depEv){G._currentEvent=depEv;G._awaiting=true;document.getElementById('btn-age').disabled=true;renderEvent(depEv);return false;}
    toast('Happiness critical -- something must change.');
  }

  // Stress breakdown
  if(G.hidden.stress>=100&&!G.flags.had_breakdown){
    G.flags.had_breakdown=true;
    var brEv=EVENTS_CLEAN.find(e=>e.id==='stress_breakdown');
    if(brEv){G._currentEvent=brEv;G._awaiting=true;document.getElementById('btn-age').disabled=true;renderEvent(brEv);return false;}
  }

  // Critical health warning
  if(G.stats.health<15&&!G.flags.critical_health_warned){
    G.flags.critical_health_warned=true;
    addLog(G.age,'Your health is at a critical level.','health');
    toast('Health critical.');
  }

  return true;
}
function applyOutcome(outcome){
  if(outcome.stats)applyStats(outcome.stats);
  if(outcome.hidden)applyHidden(outcome.hidden);
  if(outcome.flags)Object.assign(G.flags,outcome.flags);
  if(outcome._setFlag)outcome._setFlag(G);
  if(outcome.finances)applyFinances(outcome.finances);
  if(outcome.npcEffects&&Array.isArray(outcome.npcEffects))outcome.npcEffects.forEach(e=>{
    var n=getNPC(e.npcId);
    if(n){if(e.trust!==undefined)n.trust=clamp(n.trust+e.trust,0,100);if(e.closeness!==undefined)n.closeness=clamp(n.closeness+e.closeness,0,100);}
  });
  if(outcome.achievement)unlockAchievement(outcome.achievement);
}

/* === SECTION 7: MEMORY SYSTEM === */
// Memory callback fragments -- injected based on active flags + event keywords
var MEMORY_CALLBACKS=[
  // Bullying memory
  {flags:['been_bullied'],keywords:['confront','stood up','bully','intimidat'],text:' Something about this stirred a memory -- the old physics of being made small by someone who had decided they could.'},
  // Heartbreak memory -- uses flag value
  {flags:['first_heartbreak_age'],keywords:['love','relationship','feelings'],textFn:f=>` You had learned what this particular loss felt like at ${f.first_heartbreak_age}.`},
  // Early poverty
  {flags:['family_poor_flag'],keywords:['money','afford','pay','financial','cash'],text:' You had grown up knowing what it looked like when the money ran out. The knowledge never fully left you.'},
  // Academic drive
  {flags:['academic_driven'],keywords:['work','study','effort','grind','pressure'],text:' The habit of grinding had been installed early. It did not switch off cleanly.'},
  // Negative early memory
  {flags:['early_memory_negative'],keywords:['parent','family','home','childhood'],text:' The body held onto the early years even when the mind had moved on.'},
  // Positive early memory
  {flags:['early_memory_positive'],keywords:['home','safe','family','warm'],text:' Some fragment of your earliest memory surfaced -- the feeling of being completely safe somewhere.'},
  // Religious background
  {flags:['religious'],keywords:['difficult','struggle','impossible','loss','grief'],text:' Your faith had always been the place you went when reason was not enough.'},
  // University dropout
  {flags:['dropped_out_uni'],keywords:['degree','graduate','qualif','credential'],text:' You had made your peace with not having the paper. Most days.'},
  // Heartbreak from cheating
  {flags:['been_cheated_on'],keywords:['trust','partner','relationship','loyal'],text:' The last time you had trusted fully, it had cost you.'},
  // Previous divorce
  {flags:['divorced'],keywords:['marriage','commit','together','partner'],text:' You had been here before. The word commitment carried weight you had earned the hard way.'},
  // Criminal record
  {flags:['convicted'],keywords:['job','career','opportunity','hire','apply'],text:' The record followed you everywhere. Some doors had closed before you got to knock.'},
  // Parent death
  {flags:['parent_died'],keywords:['parent','mother','father','family','loss'],text:' You thought of your parent. The absence had not gotten smaller -- you had just grown around it.'},
  // Addiction recovery
  {flags:['recovered_from_addiction'],keywords:['temptation','choice','control','party','drink'],text:' You knew what losing control looked like from the inside. You had earned the knowledge.'},
  // Immigrant experience
  {flags:['immigrated'],keywords:['home','belong','country','foreign','culture'],text:' You had left one version of home and built another. Neither was the whole story.'},
  // Teen pregnancy
  {flags:['teen_pregnancy'],keywords:['child','parent','young','responsibility'],text:' You had been forced to grow up fast. It showed in how you handled things -- most of the time.'},
  // War survivor
  {flags:['survived_war'],keywords:['danger','fear','violence','death'],text:' You had seen what real danger looked like. This was not it.'},
  // Had great mentor
  {flags:['had_great_mentor'],keywords:['leader','boss','manage','guide'],text:' You thought of the person who had shown you what good leadership looked like. You were still measuring against them.'},
  // Was bullied in school
  {flags:['school_bully_victim'],keywords:['school','teen','classmate','peer'],text:' Secondary school had left marks that took years to locate.'},
  // Depression diagnosed
  {flags:['diagnosed_depression'],keywords:['low','empty','point','feel'],text:' You knew this particular geography -- the flattened landscape of it, the way it muted everything.'},
];

function injectMemory(txt){
  var t=txt;
  var tl=t.toLowerCase();
  var f=G.flags;
  for(var cb of MEMORY_CALLBACKS){
    // Check all flags required
    if(!cb.flags.every(fl=>f[fl]))continue;
    // Check keyword match
    if(!cb.keywords.some(kw=>tl.includes(kw)))continue;
    // Only inject once per narrative
    var injection=cb.textFn?cb.textFn(f):cb.text;
    if(!t.includes(injection.trim().slice(0,20))){
      t+=injection;
      break; // max one callback per narrative
    }
  }
  return t;
}

// Milestone map -- events guaranteed to fire at specific ages
var MILESTONE_MAP={
  0:'birth',
  5:'first_day_school',
  10:'primary_school_end',
  11:'secondary_start',
  13:'puberty_event',
  16:'waec_exams',
  17:'after_secondary_decision',
  18:'university_first_week',
  21:'turning_21',
  22:'nysc_call_up',
  25:'quarter_life_crisis',
  30:'turning_thirty',
  35:'health_check_35',
  40:'midlife_reassessment',
  60:'retirement_decision',
  65:'legacy_reflection',
};
// Country-specific milestone overrides
var MILESTONE_COUNTRY={
  'Nigeria':{16:'waec_exams',18:'jamb_exam'},
  'Ghana':{16:'waec_exams'},
  'United Kingdom':{16:'gcse_exams'},
  'United States':{16:'sat_test'},
  'Canada':{16:'sat_test'},
};

/* === WORLD ENGINE === */
// Initialised inside newState -- world.economy starts as 'stable'

// ============================================================
// PASSIVE LOG ENTRIES — guaranteed entries every year by age
// ============================================================
var PASSIVE_LOGS = {
  // Age 0-1
  0: [
    'You took your first breath. The world was loud and warm.',
    'Your mother counted all ten fingers and ten toes.',
    'You slept in someone\'s arms for most of the first week.',
  ],
  1: [
    'You learned to walk. Falling down was part of it.',
    'You said your first recognisable word. The family reacted like you had done something miraculous.',
    'You ate solid food for the first time and did not like it.',
  ],
  2: [
    'You ran for the first time. It felt like flying.',
    'You started saying no to things. This surprised everyone.',
    'You developed a favourite toy that had to go everywhere with you.',
  ],
  3: [
    'You asked why for the first time and did not stop for months.',
    'You had a nightmare that woke the whole house.',
    'You made a friend at the neighbour\'s compound and played until dark.',
  ],
  4: [
    'You learned to count to ten and showed everyone who would watch.',
    'You drew a picture of your family. Everyone was recognisable if you squinted.',
    'You started remembering things. Real memories that would stay.',
  ],
  // Age 5-10 (primary)
  5: [
    'Primary school started. The uniform was ironed the night before.',
    'You memorised the national anthem this year.',
    'You got your first school report.',
  ],
  6: [
    'You learned to read properly this year. The world expanded.',
    'You made at least two friends in your class.',
    'You had your first proper argument with a classmate.',
  ],
  7: [
    'Mathematics started to make sense — or not. The gap begins here.',
    'You attended a birthday party and it was the best day in recent memory.',
    'Someone in class said something cruel. You remember it more than you should.',
  ],
  8: [
    'You developed a strong opinion about something trivial and could not be moved.',
    'You stayed up past your bedtime for the first time and felt like an adult.',
    'You got punished for something at school. Your parents heard about it.',
  ],
  9: [
    'You realised your parents did not know everything.',
    'You spent a lot of time thinking about fairness. Things did not seem very fair.',
    'You had a best friend this year. They moved things around you.',
  ],
  10: [
    'Primary school is coming to an end. You have spent five years becoming someone.',
    'You know more now than you will ever consciously remember learning.',
    'Your handwriting is now recognisably yours.',
  ],
  // Age 11-16 (secondary)
  11: [
    'Secondary school started. Everything felt bigger and more complicated.',
    'New classmates. New rules. You were watching everyone to figure out how it worked.',
    'The older students looked impossibly mature.',
  ],
  12: [
    'Your body started changing. Nobody prepared you adequately.',
    'Music became important in a new way this year.',
    'You started caring about how you looked.',
  ],
  13: [
    'You became more private. Your inner world grew larger.',
    'Your friendships became more intense.',
    'The gap between who you are and who you are expected to be started to show.',
  ],
  14: [
    'You had a strong opinion about something political for the first time.',
    'Someone you respected disappointed you.',
    'You started thinking about what you wanted to do with your life.',
  ],
  15: [
    'Exam pressure is constant this year.',
    'You are aware of how other people see you in a way you were not before.',
    'Your teachers are starting to treat you like someone who will be somewhere one day.',
  ],
  16: [
    'The major exams are here. Everything your parents warned you about has arrived.',
    'You are more independent than you have ever been.',
    'Your friend group has solidified around real shared values not just proximity.',
  ],
  // Age 17-21
  17: [
    'Secondary school is over. The structure you have always lived inside is gone.',
    'You are making real decisions for the first time.',
    'The future is large and underspecified.',
  ],
  18: [
    'Legally an adult. The weight of that is mostly symbolic but sometimes real.',
    'You voted for the first time, or you thought hard about it.',
    'You started to understand what your parents gave up when they were your age.',
  ],
  19: [
    'University or work or both. The paths are diverging from your school friends.',
    'You stayed up past 3am for reasons that mattered to you alone.',
    'Money started meaning something real.',
  ],
  20: [
    'You are starting to understand who you actually are versus who you perform being.',
    'Something you believed turned out to be more complicated than you thought.',
    'You spent time with someone much older and learned something you could not have been told.',
  ],
  21: [
    'Twenty-one. The legal and cultural milestone varies by country but the feeling is universal.',
    'You looked at photos from five years ago and barely recognised the version in them.',
    'You have strong preferences now. They define you.',
  ],
};

function getPassiveLogs(age) {
  var pool = PASSIVE_LOGS[age];
  if (!pool) {
    // Generate age-appropriate generic entries
    if (age < 5) return ['The early years are full of things that cannot be put into words yet.'];
    if (age <= 10) return ['Another year of school, of growing, of becoming.'];
    if (age <= 17) return ['The teenage years are their own kind of education.'];
    if (age <= 25) return ['Young adulthood is accumulation — money, mistakes, and the occasional breakthrough.'];
    if (age <= 40) return ['The thirties have their own momentum. You are building whether you intend to or not.'];
    if (age <= 60) return ['Middle age arrives quietly and then all at once.'];
    return ['The later years have their own particular quality of light.'];
  }
  // Pick 1-2 random entries
  var shuffled = pool.slice().sort(function(){return Math.random()-0.5;});
  return shuffled.slice(0, Math.min(2, shuffled.length));
}

// ============================================================
// AGE-GATED CAREER PATH DEFINITIONS
// Path can be SEEDED from childhood (show build-up events)
// but only CHOSEN at the right age
// ============================================================
var CAREER_AGE_GATES = {
  football:    {seedAge:8,  choiceAge:13, maxAge:22, seedFlag:'early_athlete'},
  basketball:  {seedAge:10, choiceAge:14, maxAge:22, seedFlag:'early_athlete'},
  athletics:   {seedAge:8,  choiceAge:13, maxAge:22, seedFlag:'early_athlete'},
  afrobeats:   {seedAge:10, choiceAge:15, maxAge:28, seedFlag:'musically_gifted'},
  hiphop:      {seedAge:10, choiceAge:15, maxAge:28, seedFlag:'musically_gifted'},
  rnb:         {seedAge:10, choiceAge:15, maxAge:28, seedFlag:'musically_gifted'},
  music_production:{seedAge:12,choiceAge:16,maxAge:30,seedFlag:'musically_gifted'},
  acting:      {seedAge:12, choiceAge:16, maxAge:30, seedFlag:'drama_interest'},
  comedy:      {seedAge:14, choiceAge:18, maxAge:35, seedFlag:'naturally_funny'},
  entrepreneur:{seedAge:14, choiceAge:18, maxAge:45, seedFlag:'entrepreneurial_early'},
  corporate:   {seedAge:null,choiceAge:18, maxAge:50, seedFlag:null},
  finance:     {seedAge:null,choiceAge:20, maxAge:45, seedFlag:null},
  medicine:    {seedAge:12, choiceAge:18, maxAge:28, seedFlag:'academic_driven'},
  law:         {seedAge:14, choiceAge:18, maxAge:30, seedFlag:'academic_driven'},
  engineering: {seedAge:12, choiceAge:18, maxAge:30, seedFlag:'academic_driven'},
  influencer:  {seedAge:12, choiceAge:14, maxAge:35, seedFlag:'media_savvy'},
  crime:       {seedAge:12, choiceAge:14, maxAge:30, seedFlag:'teen_rebellion'},
  journalism:  {seedAge:14, choiceAge:18, maxAge:35, seedFlag:null},
  fashion:     {seedAge:12, choiceAge:16, maxAge:35, seedFlag:'childhood_creative'},
  politics:    {seedAge:null,choiceAge:25, maxAge:60, seedFlag:'politically_savvy'},
};

// ============================================================
// EDUCATION SYSTEM — proper grade tracking
// ============================================================

// Calculate primary grade based on intelligence + effort flags
function calcPrimaryGrade() {
  var base = (G.stats.intelligence * 0.7) + rnd(0, 30);
  if (G.flags.academic_driven) base += 12;
  if (G.flags.academic_pressure) base += 8;
  if (G.flags.family_poor_flag) base -= 8;
  if (G.flags.been_bullied) base -= 5;
  return Math.round(clamp(base, 20, 100));
}

function calcSecondaryGrade() {
  var base = (G.stats.intelligence * 0.65) + rnd(0, 25);
  if (G.flags.academic_driven) base += 15;
  if (G.flags.studied_hard) base += 12;
  if (G.flags.failed_under_pressure) base -= 20;
  if (G.flags.peer_pressure_faced && !G.flags.peer_pressure_resisted) base -= 5;
  if (G.flags.has_addiction) base -= 12;
  if (G.flags.family_poor_flag) base -= 5;
  return Math.round(clamp(base, 10, 100));
}

function calcUniGPA(system) {
  // system: 'nigerian' (0-5) or 'standard' (0-4)
  var base = G.stats.intelligence * 0.04 + Math.random() * 0.8;
  if (G.flags.academic_driven) base += 0.5;
  if (G.flags.dissertation_done && G.flags.academic_high_performer) base += 0.4;
  if (G.flags.grades_crisis_faced) base -= 0.4;
  if (G.flags.has_addiction) base -= 0.6;
  if (system === 'nigerian') {
    return Math.round(clamp(base * 1.25, 1.0, 5.0) * 10) / 10;
  }
  return Math.round(clamp(base, 1.0, 4.0) * 100) / 100;
}

function getGradeLabel(grade, stage) {
  if (stage === 'primary' || stage === 'secondary') {
    if (grade >= 80) return 'A (Distinction)';
    if (grade >= 65) return 'B (Credit)';
    if (grade >= 50) return 'C (Pass)';
    if (grade >= 40) return 'D (Marginal)';
    return 'F (Fail)';
  }
  if (stage === 'uni_ng') {
    if (grade >= 4.5) return 'First Class';
    if (grade >= 3.5) return 'Second Class Upper';
    if (grade >= 2.4) return 'Second Class Lower';
    if (grade >= 1.5) return 'Third Class';
    return 'Pass';
  }
  // standard 4.0
  if (grade >= 3.7) return 'First Class / Summa Cum Laude';
  if (grade >= 3.3) return 'Upper Second / Magna Cum Laude';
  if (grade >= 2.7) return 'Lower Second';
  if (grade >= 2.0) return 'Third Class';
  return 'Pass Degree';
}

// Updated updateEducation with proper age correlation
function updateEducation() {
  var a = G.age;

  // PRIMARY: ages 5-10
  if (a === 5 && G.education.stage === 'none') {
    G.education.stage = 'primary';
    G.education.primaryGrade = null;
    initSchoolNPCs('primary');
  }

  // End of primary: age 10-11
  if (a === 11 && G.education.stage === 'primary') {
    // Assign primary grade
    G.education.primaryGrade = calcPrimaryGrade();
    var label = getGradeLabel(G.education.primaryGrade, 'primary');
    addTimelineEntry('up', 'Primary school complete. Final average: ' + G.education.primaryGrade + '% (' + label + ').', 'school');
    G.education.stage = 'secondary';
    G.education.teacher = null;
    G.education.classmates = [];
    initSchoolNPCs('secondary');
  }

  // SECONDARY: ages 11-17
  // Assign secondary grade at end (age 16-17 depending on country)
  var secGradeAge = (G.country === 'Nigeria' || G.country === 'Ghana') ? 16 : 16;
  if (a === secGradeAge && G.education.stage === 'secondary' && !G.education.secondaryGrade) {
    G.education.secondaryGrade = calcSecondaryGrade();
    var secLabel = getGradeLabel(G.education.secondaryGrade, 'secondary');
    addTimelineEntry('up', 'Secondary exams done. Overall grade: ' + G.education.secondaryGrade + '% (' + secLabel + ').', 'school');
    // Affects uni application chances
    if (G.education.secondaryGrade >= 65) G.flags.strong_secondary_results = true;
    if (G.education.secondaryGrade < 40) G.flags.weak_secondary_results = true;
  }

  // UNIVERSITY: must apply (not automatic)
  if (G.flags.going_university && G.flags.started_university && G.education.stage === 'secondary') {
    G.education.stage = 'university';
    G.education.currentYear = 0;
    initSchoolNPCs('university');
  }

  if (G.flags.dropped_out_uni && G.education.stage === 'university') {
    G.education.stage = 'none';
    G.education.droppedOut = true;
  }

  if (G.education.stage === 'university' && !G.flags.graduated_university) {
    G.education.currentYear = (G.education.currentYear || 0) + 1;
    var gpaSystem = (G.country === 'Nigeria' || G.country === 'Ghana' || G.country === 'Kenya') ? 'nigerian' : 'standard';
    var yearGpa = calcUniGPA(gpaSystem);
    // Cumulative GPA — weighted average across years
    var yr = G.education.currentYear;
    G.education.gpa = G.education.gpa
      ? Math.round(((G.education.gpa*(yr-1))+yearGpa)/yr*100)/100
      : yearGpa;
    var curLabel = getGradeLabel(G.education.gpa, gpaSystem==='nigerian'?'uni_ng':'uni_std');
    addTimelineEntry('neutral','Year '+yr+' CGPA: '+G.education.gpa+' ('+curLabel+').','school');

    if (G.education.currentYear >= 4 && !G.flags.dropped_out_uni) {
      G.flags.graduated_university = true;
      G.education.stage = 'graduate';
      G.education.graduated = true;
      var finalGPA = G.education.gpa;
      var gpaLabel = getGradeLabel(finalGPA, gpaSystem==='nigerian'?'uni_ng':'uni_std');
      addTimelineEntry('up','Graduated. Final CGPA: '+finalGPA+' -- '+gpaLabel+'.','school');
      addLog(G.age,'Graduated: '+gpaLabel,'school');
      G.stats.intelligence = Math.min(100, G.stats.intelligence+5);
      G.hidden.reputation = Math.min(100, G.hidden.reputation+8);
      if (finalGPA >= (gpaSystem==='nigerian'?4.5:3.7)) {
        G.flags.first_class_honours = true;
        G.flags.got_first_class = true;
        unlockAchievement('first_class');
      }
    }
  }
}


// ── University Application System ──────────────────────────────────────────
function openUniApplicationModal(){
  if(G.education.uniApplied){toast('You have already applied to university.');return;}
  var grade=G.education.secondaryGrade||0;
  var gradeLabel=getGradeLabel(grade,'secondary');
  var scoreColor=grade>=65?'var(--success)':grade>=50?'var(--gold)':'var(--danger)';
  var unis=getAvailableUniversities(grade);
  var uniRows=unis.map(function(u,i){
    var canApply=grade>=u.minGrade;
    return '<div style="background:var(--s2);border:1px solid var(--border);border-radius:6px;padding:12px;margin-bottom:8px">'+
      '<div style="font-family:var(--fd);font-size:16px;color:var(--text)">'+u.name+'</div>'+
      '<div style="font-family:var(--fm);font-size:10px;color:var(--cyan);margin:3px 0">'+u.type+' &nbsp;·&nbsp; Min grade: '+u.minGrade+'%</div>'+
      '<div style="font-size:12px;color:var(--dim);margin-bottom:8px">'+u.desc+'</div>'+
      '<button class="btn btn-sm btn-s" '+(canApply?'':'disabled style="opacity:.4"')+' onclick="submitUniApplication('+i+')">'+
        (canApply?'&#x1F4CB; Apply':'&#x274C; Grade too low')+'</button></div>';
  }).join('');
  showModal('University Applications',
    '<div style="background:var(--s2);border:1px solid var(--border);border-radius:6px;padding:12px;margin-bottom:16px">'+
    '<div class="pl-lbl">Your Secondary Grade</div>'+
    '<div style="font-size:22px;font-family:var(--fd);color:'+scoreColor+'">'+grade+'%</div>'+
    '<div style="font-family:var(--fm);font-size:11px;color:var(--gold)">'+gradeLabel+'</div></div>'+
    '<div class="pl-lbl" style="margin-bottom:10px">Available Programmes</div>'+uniRows);
}

function getAvailableUniversities(grade){
  var c=G.country;
  var unis=[
    {name:'Federal University',type:'Federal/State',desc:'Government-funded. Competitive admission. Strong alumni network.',minGrade:55,prestige:3},
    {name:'Private University',type:'Private',desc:'Higher fees, smaller classes. Good facilities.',minGrade:45,prestige:2},
    {name:'Polytechnic / College of Technology',type:'Polytechnic',desc:'Practical, skills-focused. HND pathway. Lower entry bar.',minGrade:35,prestige:1},
  ];
  if(grade>=75) unis.unshift({name:'Top-Tier National University',type:'Elite Federal',desc:'The best in the country. First-class facilities and strong research output.',minGrade:75,prestige:4});
  if(c==='United Kingdom') unis=[
    {name:'Russell Group University',type:'Research University',desc:'Top 24 UK universities. Strong graduate prospects.',minGrade:70,prestige:4},
    {name:'Modern University',type:'Teaching University',desc:'Vocational focus, solid graduate employment rates.',minGrade:45,prestige:2},
    {name:'Foundation Year Programme',type:'Foundation',desc:'One-year pathway into a full degree for borderline grades.',minGrade:30,prestige:1},
  ];
  if(c==='United States') unis=[
    {name:'State University',type:'Public University',desc:'Large campus, affordable for in-state students.',minGrade:50,prestige:2},
    {name:'Private Liberal Arts College',type:'Private',desc:'Small, focused, expensive. Strong alumni networks.',minGrade:65,prestige:3},
    {name:'Community College',type:'Community College',desc:'2-year associate degree. Transfer pathway available.',minGrade:25,prestige:1},
  ];
  return unis;
}

function submitUniApplication(idx){
  closeModal();
  var grade=G.education.secondaryGrade||0;
  var unis=getAvailableUniversities(grade);
  var u=unis[idx]; if(!u)return;
  if(grade<u.minGrade){toast('Your grade does not meet the minimum.');return;}
  G.education.uniApplied=true;
  G.education.uniApplicationYear=G.age;
  // Acceptance chance
  var margin=grade-u.minGrade;
  var chance=Math.min(0.95,0.55+(margin/100)+(G.stats.intelligence-50)/500);
  if(Math.random()<chance){
    G.education.uniAccepted=true;
    G.flags.going_university=true;
    G.flags.started_university=true;
    G.education.institution=u.name;
    G.education.uniPrestige=u.prestige;
    var tuition=Math.round(u.prestige*2000*((COUNTRIES[G.country]&&COUNTRIES[G.country].salaryFactor)||0.5));
    G.finances.debt=(G.finances.debt||0)+tuition;
    addLog(G.age,'Accepted into '+u.name+'.','school');
    addTimelineEntry('up','Acceptance letter arrived. '+u.name+'. You read it three times before it felt real.','school');
    renderStats();save();
    toast('Accepted! '+u.name+'. Tuition added to debt.');
  } else {
    G.education.uniRejected=true;
    addLog(G.age,'Rejected by '+u.name+'.','school');
    addTimelineEntry('down','The letter came. It started with "We regret to inform you." You sit with it for a while.','school');
    applyStats({happiness:-8});applyHidden({stress:12});
    renderStats();save();
    toast('Rejected. Improve your grades or consider another path.');
  }
}

// ── Child Ageing ─────────────────────────────────────────────────────────
function ageChildren(){
  G.npcs.children.forEach(function(child){
    if(!child.alive)return;
    // age already incremented by ageNPCs loop — skip double-age
    if(child.age===5&&child.education.stage==='none') child.education.stage='primary';
    if(child.age===11){child.education.stage='secondary';child.education.grade=Math.round(40+Math.random()*50);}
    if(child.age===16){
      child.education.grade=Math.round(clamp((child.education.grade||55)+rnd(-10,15),20,100));
      addLog(G.age,child.name+' finished secondary school ('+child.education.grade+'%).','family');
    }
    if(child.age===18){
      child.education.stage='adult';
      addTimelineEntry('neutral',child.name+' is now an adult, finding their own way.','family');
    }
    // Generate needs
    if(child.age===6&&!child._askedSchoolFees){
      child._askedSchoolFees=true;
      if(!G._pendingNotifications)G._pendingNotifications=[];
      G._pendingNotifications.push({type:'child_need',childId:child.id,need:'school_fees'});
    }
    if(child.age===16&&!child._askedTuition){
      child._askedTuition=true;
      if(!G._pendingNotifications)G._pendingNotifications=[];
      G._pendingNotifications.push({type:'child_need',childId:child.id,need:'tuition'});
    }
    if(child.age>=8&&child.age<=15&&Math.random()<0.15&&!child._pendingRequest){
      child._pendingRequest=true;
      if(!G._pendingNotifications)G._pendingNotifications=[];
      var wants=['pocket money','new school bag','football boots','a birthday party','extra lessons'];
      G._pendingNotifications.push({type:'child_want',childId:child.id,need:pick(wants)});
    }
  });
}

// ── Dynamic Event Trigger Engine ─────────────────────────────────────────
var DYN_VARIANTS={
  job_offer:[
    'A message arrived from someone who heard your name through a mutual contact. There is a role they want to discuss.',
    'A recruiter reached out. Short, professional. Something that actually aligns with what you do.',
    'Word came through a contact of a contact. A position. The kind that does not stay open long.',
    'Someone slid into your inbox. Said your work came up in a meeting. They want to talk.',
  ],
  health_alert:[
    'You have been feeling off for weeks. Not dramatically. Just not right. A doctor visit is overdue.',
    'Something feels wrong. Low energy, poor sleep, headaches. Your body is sending signals you keep ignoring.',
    'You notice something you should not ignore. It has been there a while but you kept pushing it aside.',
    'A routine moment turned into a red flag. Something needs attention.',
  ],
  friend_message:[
    '{name} checked in. Just a message. You realise it has been months since you properly spoke.',
    'An old friend texted out of nowhere. "Miss you. How are you actually doing?"',
    '{name} sent a voice note. They are doing well. They asked about you.',
    '{name} reached out through a mutual contact. They wanted to connect directly.',
  ],
  biz_offer:[
    'Someone in your network is starting something and wants you involved. The numbers look interesting.',
    'A message: "I have been watching what you are doing. Lets talk about a collaboration."',
    'An offer came through. A deal of some kind. You are intrigued enough to hear them out.',
    'Someone reached out about a partnership. Early stage but the concept has merit.',
  ],
  child_need:['{name} needs {need}. It cannot wait much longer.'],
  child_want:['{name} asked for {need}. They really want it.'],
};

function dynPick(type,vars){
  var pool=DYN_VARIANTS[type]||DYN_VARIANTS.job_offer;
  var t=pick(pool);
  if(vars)Object.keys(vars).forEach(function(k){t=t.replace('{'+k+'}',vars[k]);});
  return t;
}

function checkDynamicTriggers(){
  if(!G||G.age<12)return;
  if(!G._pendingNotifications)G._pendingNotifications=[];

  // Child need notification (highest priority)
  if(G._pendingNotifications.length>0){
    var notif=G._pendingNotifications.shift();
    var child=(notif.childId&&G.npcs.children.find(function(c){return c.id===notif.childId;}));
    if(child&&child.alive){
      var cname=child.name.split(' ')[0];
      var cost=notif.need==='tuition'?rnd(3000,8000):notif.need==='school_fees'?rnd(300,1200):rnd(50,300);
      var txt=dynPick(notif.type==='child_want'?'child_want':'child_need',{name:cname,need:notif.need});
      showDynamicNotification({
        icon:'&#x1F476;',title:cname+' Needs Something',text:txt,
        choices:[
          {label:'Take care of it ('+money(cost)+')',fn:function(){
            if(G.finances.cash<cost){toast('Not enough right now.');G._pendingNotifications.unshift(notif);return;}
            G.finances.cash-=cost;recalcNetWorth();
            child.closeness=Math.min(100,child.closeness+rnd(8,18));
            child.trust=Math.min(100,child.trust+rnd(5,12));
            applyStats({happiness:rnd(5,12)});applyHidden({karma:8});
            addLog(G.age,'Provided for '+cname+'.','family');
            addTimelineEntry('up','You sorted it for '+cname+'. The relief on their face was enough.','family');
            renderStats();save();toast('Done. -'+money(cost)+'.');child._pendingRequest=false;
          }},
          {label:"Can't right now — money is tight",fn:function(){
            child.closeness=Math.max(0,child.closeness-rnd(5,12));
            child.trust=Math.max(0,child.trust-rnd(3,8));
            applyStats({happiness:-rnd(3,8)});applyHidden({stress:8,karma:-3});
            addLog(G.age,'Could not provide for '+cname+'.','family');
            renderStats();save();toast(cname+' was disappointed.');child._pendingRequest=false;
          }},
        ],
      });
      return;
    }
  }

  // Job offer
  if(G.age>=20&&G.career.level>=2&&G.hidden.reputation>=50&&Math.random()<0.18){
    showDynamicNotification({
      icon:'&#x1F4BC;',title:'Opportunity Knocking',text:dynPick('job_offer'),
      choices:[
        {label:'Respond and explore it',fn:function(){
          G.hidden.reputation=Math.min(100,G.hidden.reputation+5);
          applyStats({happiness:rnd(5,12)});
          if(Math.random()<0.45&&G.career.level<10){
            G.career.level++;
            var cp=G.career.path&&CAREER_PATHS[G.career.path];
            if(cp)G.career.title=cp.ladder[G.career.level-1]||G.career.title;
            G.career.salary=calcSalary(G.career.path,G.career.level,G.country);
            G.finances.annualIncome=G.career.salary;
            addTimelineEntry('up','The offer came through. A step up in the career.','career');
            toast('New role secured. Career level up!');
          } else {
            addTimelineEntry('neutral','You explored it. Not the right fit -- but the conversation was useful.','career');
            toast('Good conversation. Worth making the contact.');
          }
          addLog(G.age,'Explored a job opportunity.','career');renderStats();save();
        }},
        {label:'Ignore it — not interested',fn:function(){addLog(G.age,'Passed on a job opportunity.','action');save();toast('Left on read.');}},
      ],
    });
    return;
  }

  // Health alert
  if(G.stats.health<40&&!G.flags._healthAlertFired&&Math.random()<0.35){
    G.flags._healthAlertFired=true;
    showDynamicNotification({
      icon:'&#x1FA7A;',title:'Something Is Wrong',text:dynPick('health_alert'),
      choices:[
        {label:'See a doctor immediately',fn:function(){
          var cost=rnd(100,500);
          if(G.finances.cash>=cost)G.finances.cash-=cost;
          applyStats({health:rnd(8,18)});applyHidden({stress:-10});
          addLog(G.age,'Saw a doctor urgently.','health');
          addTimelineEntry('up','Doctor found the issue. Treatment started.','health');
          renderStats();save();toast('Health stabilising. -'+money(cost)+'.');
        }},
        {label:'Push through it',fn:function(){
          applyStats({health:-rnd(5,12)});applyHidden({stress:10});
          addLog(G.age,'Ignored health warning.','health');
          addTimelineEntry('down','You tell yourself it will pass.','health');
          renderStats();save();toast('Ignored. The body keeps the score.');
        }},
      ],
    });
    return;
  }

  // Friend message
  var driftFriend=G.npcs.friends.find(function(f){return f.alive&&f.closeness<35&&f.closeness>8;});
  if(driftFriend&&Math.random()<0.22){
    var fn=driftFriend.name.split(' ')[0];
    showDynamicNotification({
      icon:'&#x1F4AC;',title:'Old Friend',text:dynPick('friend_message',{name:fn}),
      choices:[
        {label:'Reply and reconnect',fn:function(){
          driftFriend.closeness=Math.min(100,driftFriend.closeness+rnd(15,28));
          driftFriend.trust=Math.min(100,driftFriend.trust+rnd(8,15));
          applyStats({happiness:rnd(5,12)});applyHidden({karma:5});
          addLog(G.age,'Reconnected with '+driftFriend.name+'.','family');
          addTimelineEntry('up','You picked up where you left off.','family');
          renderStats();save();toast('Reconnected with '+fn+'.');
        }},
        {label:'Leave it — too much time has passed',fn:function(){
          driftFriend.closeness=Math.max(0,driftFriend.closeness-10);
          addLog(G.age,'Did not reply to '+driftFriend.name+'.','action');
          save();toast('Left on read. The gap widens.');
        }},
      ],
    });
    return;
  }

  // Business / collab offer
  if(G.fame.level>=1&&G.career.level>=3&&Math.random()<0.15){
    showDynamicNotification({
      icon:'&#x1F91D;',title:'Collaboration Offer',text:dynPick('biz_offer'),
      choices:[
        {label:'Take the meeting',fn:function(){
          G.hidden.reputation=Math.min(100,G.hidden.reputation+rnd(5,12));
          var cashGain=Math.round(rnd(500,5000)*((COUNTRIES[G.country]&&COUNTRIES[G.country].salaryFactor)||0.5));
          G.finances.cash+=cashGain;recalcNetWorth();
          addLog(G.age,'Explored a collab offer.','career');
          addTimelineEntry('up','The meeting happened. Something productive came of it.','career');
          renderStats();save();toast('Deal explored. +'+money(cashGain)+'.');
        }},
        {label:'Pass on it',fn:function(){addLog(G.age,'Declined a collab.','action');save();toast('Passed. You trust your own timeline.');}},
      ],
    });
    return;
  }
}

function showDynamicNotification(trigger){
  window._dynChoices=trigger.choices;
  var btnHTML=trigger.choices.map(function(c,i){
    return '<button class="btn btn-s" style="text-align:left;margin-top:8px" onclick="resolveDynamic('+i+')">'+c.label+'</button>';
  }).join('');
  showModal(trigger.icon+' '+trigger.title,
    '<div style="font-size:13px;color:var(--dim);font-style:italic;line-height:1.75;margin-bottom:16px">'+trigger.text+'</div>'+
    '<div style="display:flex;flex-direction:column;gap:6px">'+btnHTML+'</div>');
}

function resolveDynamic(idx){
  closeModal();
  if(window._dynChoices&&window._dynChoices[idx])window._dynChoices[idx].fn();
  window._dynChoices=null;
}

// ============================================================
// CAREER: enforce age gates + seed build-up correctly
// ============================================================
function canChooseCareerPath(pathId) {
  var gate = CAREER_AGE_GATES[pathId];
  if (!gate) return G.age >= 18;
  if (G.age < gate.choiceAge) return false;
  if (G.age > gate.maxAge) return false;
  return true;
}

function isCareerSeeded(pathId) {
  var gate = CAREER_AGE_GATES[pathId];
  if (!gate || !gate.seedFlag) return true;
  return !!G.flags[gate.seedFlag];
}

// Updated enterCareerPath with age gate enforcement
function enterCareerPath(pathId, startLevel) {
  var cp = CAREER_PATHS[pathId]; if (!cp) return;
  if (!canChooseCareerPath(pathId)) {
    toast('You\'re too young for this path yet. Keep building.');
    return;
  }
  var lvl = startLevel || 1;
  G.career.path = pathId;
  G.career.level = lvl;
  G.career.title = cp.ladder[lvl-1] || cp.ladder[0];
  G.career.salary = calcSalary(pathId, lvl, G.country);
  G.career.yearsInRole = 0;
  G.finances.annualIncome = G.career.salary;
  G.career.peakLevel = Math.max(G.career.peakLevel || 0, lvl);
  addLog(G.age, 'Started career path: ' + cp.label, 'career');
  addTimelineEntry('up', 'Career path chosen: ' + cp.label + '.', 'career');
  initCareerNPCs(pathId, G.country);
}

// ============================================================
// QUIT JOB + RELOCATE
// ============================================================
function quitJob() {
  if (!G.career.path) { toast('You don\'t have a job to quit.'); return; }
  var title = G.career.title;
  var oldSalary = G.career.salary;
  G.career.history.push({path:G.career.path, title:title, level:G.career.level, salary:oldSalary, leftAge:G.age});
  G.career.path = null;
  G.career.title = 'Unemployed';
  G.career.salary = 0;
  G.career.level = 0;
  G.career.employer = null;
  G.finances.annualIncome = Math.max(0, G.finances.annualIncome - oldSalary);
  addLog(G.age, 'Quit job: ' + title + '.', 'career');
  addTimelineEntry('down', 'Left the role as ' + title + '. No plan yet — just out.', 'career');
  applyStats({happiness: rnd(-5, 10)}); // either relief or panic
  applyHidden({stress: 15});
  renderStats(); save();
  toast('You quit. The blank space is yours now.');
  closeModal();
}

function openRelocateModal() {
  var country = G.country;
  var states = STATES_BY_COUNTRY[country] || [];
  var currentState = G.state || 'unknown';
  var options = states.filter(function(s){ return s.value !== currentState; });
  if (!options.length) {
    // Offer emigration
    showModal('Relocate', '<div style="font-size:13px;color:var(--dim);margin-bottom:16px">You\'ve seen everywhere in ' + country + '. Time to think bigger.</div>' +
      '<button class="btn btn-s" onclick="openEmigrationModal()">✈️ Emigrate</button>');
    return;
  }
  var html = '<div style="font-size:13px;color:var(--dim);font-style:italic;margin-bottom:16px">Moving costs money and resets your local network. Choose carefully.</div>';
  html += '<div style="display:flex;flex-direction:column;gap:8px">';
  options.forEach(function(s) {
    html += '<button class="btn btn-s" onclick="relocateTo(\'' + s.value + '\',\'' + s.label + '\')">' + s.label + ' <span style="color:var(--muted);font-size:10px;margin-left:4px">' + s.desc + '</span></button>';
  });
  html += '<button class="btn btn-s" onclick="openEmigrationModal()">✈️ Emigrate abroad</button>';
  html += '</div>';
  showModal('Relocate', html);
}

function relocateTo(stateValue, stateName) {
  closeModal();
  var moveCost = rnd(500, 3000);
  if (G.finances.cash < moveCost) {
    toast('Need at least ' + money(moveCost) + ' to move.');
    return;
  }
  G.finances.cash -= moveCost;
  G.state = stateValue;
  G.stateName = stateName;
  G.flags.has_relocated = true;
  // Reset local social network — friends drift, new city new connections
  G.npcs.friends.forEach(function(f) {
    f.closeness = Math.max(10, f.closeness - 25);
    f.trust = Math.max(20, f.trust - 15);
  });
  // Career opportunities change
  var newBg = assignBackground(stateValue);
  addLog(G.age, 'Relocated to ' + stateName + '.', 'general');
  addTimelineEntry('neutral', 'Packed everything and moved to ' + stateName + '. A new start.', 'general');
  applyStats({happiness: rnd(-5, 15)});
  applyHidden({stress: 18, reputation: -10});
  recalcNetWorth(); renderStats(); save();
  toast('Welcome to ' + stateName + '.');
}

function openEmigrationModal() {
  var destinations = [
    {country:'United Kingdom', state:'london', label:'United Kingdom'},
    {country:'United States', state:'nyc', label:'United States'},
    {country:'Canada', state:'toronto', label:'Canada'},
    {country:'Germany', state:'berlin', label:'Germany'},
    {country:'France', state:'paris', label:'France'},
  ].filter(function(d){ return d.country !== G.country; });

  var html = '<div style="font-size:13px;color:var(--dim);font-style:italic;margin-bottom:16px">Emigrating costs money, energy, and your existing network. It opens new doors.</div>';
  html += '<div style="display:flex;flex-direction:column;gap:9px">';
  destinations.forEach(function(d) {
    html += '<button class="btn btn-s" onclick="emigrateTo(\'' + d.country + '\',\'' + d.state + '\',\'' + d.label + '\')">' + d.label + '</button>';
  });
  html += '</div>';
  showModal('Emigrate', html);
}

function emigrateTo(newCountry, stateValue, label) {
  closeModal();
  var cost = rnd(2000, 6000);
  if (G.finances.cash < cost) {
    toast('Need at least ' + money(cost) + ' for this move.');
    return;
  }
  G.finances.cash -= cost;
  G.country = newCountry;
  G.state = stateValue;
  G.stateName = label;
  G.flags.immigrated = true;
  G.flags.has_relocated = true;
  // Social network reset heavily
  G.npcs.friends.forEach(function(f) {
    f.closeness = Math.max(5, f.closeness - 40);
    f.trust = Math.max(10, f.trust - 20);
  });
  // Currency context changes
  addLog(G.age, 'Emigrated to ' + label + '.', 'general');
  addTimelineEntry('up', 'Left home for ' + label + '. Everything familiar became distant overnight.', 'general');
  applyStats({happiness: rnd(-10, 12), intelligence: 5});
  applyHidden({stress: 25, karma: 5});
  recalcNetWorth(); renderStats(); save();
  toast('A new country. A new chapter.');
}

/* === SECTION 8: RELATIONSHIP ENGINE === */
function decayRel(){
  // Friends drift without attention
  G.npcs.friends.forEach(f=>{
    if(f.alive){
      f.closeness=Math.max(0,f.closeness-2);
      f.trust=Math.max(0,f.trust-.5);
    }
  });
  // Partner trust erodes naturally, faster under stress
  if(G.npcs.partner&&G.npcs.partner.alive){
    var stressMultiplier=G.hidden.stress>60?2:1;
    G.npcs.partner.trust=Math.max(0,G.npcs.partner.trust-(1*stressMultiplier));
    G.npcs.partner.closeness=Math.max(0,G.npcs.partner.closeness-.5);
  }
  // Parent closeness stable unless events affect
  // Children: closeness builds automatically until teen years
  G.npcs.children.forEach(c=>{
    if(c.alive){
      if(c.age<13)c.closeness=Math.min(100,c.closeness+2);
      else c.closeness=Math.max(0,c.closeness-1); // teen drift
    }
  });
}

function ageNPCs(){
  // Age all living NPCs
  var allNPCs=[G.npcs.mother,G.npcs.father,...G.npcs.friends,...G.npcs.children];
  if(G.npcs.partner)allNPCs.push(G.npcs.partner);
  allNPCs.forEach(n=>{
    if(!n||!n.alive)return;
    n.age++;
    // Health deterioration with age
    if(n.age>70){
      n.stats=n.stats||{health:70};
      n.stats.health=Math.max(0,(n.stats.health||70)-3);
      // Death probability for elderly NPCs
      if(n.stats.health<20&&Math.random()<0.15){
        n.alive=false;n.deathAge=n.age;n.causeOfDeath='old age';
        addLog(G.age,`${n.name} passed away.`,'family');
        if(n.relationship==='mother'||n.relationship==='father'){
          G.flags.parent_died=true;
          G.stats.happiness=Math.max(0,G.stats.happiness-15);
          G.hidden.stress=Math.min(100,G.hidden.stress+15);
        }
      }
    } else if(n.age>55&&Math.random()<0.02){
      // Small chance of illness for middle-aged NPCs
      n.stats=n.stats||{health:80};
      n.stats.health=Math.max(0,(n.stats.health||80)-10);
    }
  });
  // Generate NPC life events (background simulation)
  simulateNPCLives();
  // Age children independently
  ageChildren();
}

function simulateNPCLives(){
  // Best friend gets married
  var bff=G.npcs.friends.find(f=>f.alive&&!f.married&&f.closeness>60&&f.age>24);
  if(bff&&Math.random()<0.12){
    bff.married=true;
    addLog(G.age,`${bff.name} got married.`,'family');
  }
  // Friend career milestone
  var workingFriend=G.npcs.friends.find(f=>f.alive&&f.age>22);
  if(workingFriend&&Math.random()<0.08){
    addLog(G.age,`${workingFriend.name} got a promotion.`,'general');
  }
}

function getNPC(id){
  if(id==='mother')return G.npcs.mother;
  if(id==='father')return G.npcs.father;
  if(id==='partner')return G.npcs.partner;
  return G.npcs.friends.find(f=>f.id===id)||G.npcs.children.find(c=>c.id===id)||null;
}

/* === SECTION 9: CAREER ENGINE === */


// Annual career progression -- called every age up
function updateCareer(){
  if(!G.career.path)return;
  G.career.yearsInRole=(G.career.yearsInRole||0)+1;
  var cp=CAREER_PATHS[G.career.path];if(!cp)return;
  updateFootballStats();

  // Performance score based on stats
  var perf=getCareerPerf();

  // Auto-promotion chance based on performance and years in role
  var promoChance=Math.max(0,(perf-40)/200 + (G.career.yearsInRole>=3?0.08:0));
  if(G.career.level<10&&Math.random()<promoChance){
    G.career.level++;
    G.career.yearsInRole=0;
    G.career.title=cp.ladder[G.career.level-1]||G.career.title;
    G.career.salary=calcSalary(G.career.path,G.career.level,G.country);
    G.finances.annualIncome=G.career.salary;
    G.career.peakLevel=Math.max(G.career.peakLevel||0,G.career.level);
    addLog(G.age,'Promoted to '+G.career.title,'career');
    toast(G.career.title+' -- promoted!');
    // Achievement checks
    if(G.career.level>=10)unlockAchievement('the_goat');
    if(G.career.level>=8)unlockAchievement('career_peak');
  }

  // Fame update for fame-adjacent careers
  if(['football','basketball','athletics','afrobeats','hiphop','rnb','acting','comedy','influencer'].includes(G.career.path)){
    var fameLevelTarget=G.career.level>=9?3:G.career.level>=6?2:G.career.level>=3?1:0;
    if(fameLevelTarget>G.fame.level){
      G.fame.level=fameLevelTarget;
      G.fame.popularity=Math.min(100,G.fame.popularity+20);
      addLog(G.age,fameLabel(G.fame.level)+' recognition reached.','career');
    }
    G.fame.popularity=Math.min(100,G.fame.popularity+(G.career.level));
  }

  // Financial tracking
  G.finances.lifetimeEarnings=(G.finances.lifetimeEarnings||0)+G.career.salary;
  // Varied career year narrative (uses systems.js variant bank if available)
  if(G.career.yearsInRole>0&&Math.random()<0.4){
    var carNarr=typeof getCareerYearNarrative==='function'?getCareerYearNarrative():'';
    if(carNarr)addTimelineEntry('neutral',carNarr,'career');
  }
}

function getCareerPerf(){
  // Performance score 0-100 based on relevant stats for career type
  var cp=CAREER_PATHS[G.career.path];if(!cp)return 50;
  var cat=cp.cat;
  if(cat==='sports')return (G.stats.health*0.5+G.stats.looks*0.1+G.hidden.reputation*0.4);
  if(cat==='music'||cat==='entertainment'||cat==='creative')return (G.stats.looks*0.2+G.stats.intelligence*0.3+G.hidden.reputation*0.5);
  if(cat==='business'||cat==='professional')return (G.stats.intelligence*0.5+G.hidden.reputation*0.3+G.hidden.karma*0.2);
  if(cat==='media'||cat==='politics')return (G.stats.intelligence*0.3+G.stats.looks*0.2+G.hidden.reputation*0.5);
  return (G.stats.intelligence*0.4+G.hidden.reputation*0.3+G.stats.happiness*0.3);
}

/* === SECTION 13: SAVE SYSTEM === */
var SKEY='originzero_save';
function save(){try{localStorage.setItem(SKEY,JSON.stringify(G));}catch(e){}}
function loadSave(){try{var r=localStorage.getItem(SKEY);return r?JSON.parse(r):null;}catch(e){return null;}}
function deleteSave(){localStorage.removeItem(SKEY);}
function hasSave(){return!!localStorage.getItem(SKEY);}