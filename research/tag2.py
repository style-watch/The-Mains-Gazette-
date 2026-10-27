import re, json
Q=[]
for fn,p in [('gs1.txt','GS1'),('gs1h.txt','GS1'),('gs2.txt','GS2'),('gs3.txt','GS3')]:
    for l in open(fn):
        if l.startswith('#') or not l.strip(): continue
        s,c,t=l.rstrip('\n').split('|',2); y,q=c.split('/')
        Q.append(dict(id=f"{p}-{y}/{q}",p=p,s=s,y=int(y),q=q,t=t))
ID={x['id']:x for x in Q}
def T(k,n,pl,w='',a='',subs='',ex='',add='',grp=''):
    return dict(k=k,n=n,pl=pl,w=w,a=a,subs=subs.split(),ex=ex.split(),add=add.split(),g=grp)
TH=[
 # ---- Society & social justice
 T('women','Women & gender justice','GS1 Society · GS2 Social Justice',w='wom[ae]n|gender|patriarch|feminis|sex ratio|care economy|maternal',a='NCW',ex='GS1-2024/Q9 GS1-2023/Q8',grp='Society & Social Justice'),
 T('children','Children & youth','GS1 Society · GS2 Social Justice',w='child|youth|mid-day',a='NCPCR|RTE',ex='GS2-2024/Q12',grp='Society & Social Justice'),
 T('tribal','Tribals & Scheduled Areas','GS1 · GS2 · GS3',w='tribe|tribal|fifth schedule|sixth schedule',a='NCST',add='GS1-2017/Q10',grp='Society & Social Justice'),
 T('caste','Caste, SC/ST/OBC & affirmative action','GS1 Society · GS2',w='caste|dalit|affirmative|backward',a='NCSC|NCBC',grp='Society & Social Justice'),
 T('vulnerable','Disability, elderly, transgender & vulnerable sections','GS2 Social Justice',w='disab|aged\\b|elderly|geriatric|transgender|vulnerable',a='RPwD',ex='GS2-2013/Q12 GS2-2013/Q13',add='GS2-2015/Q4',grp='Society & Social Justice'),
 T('poverty','Poverty, hunger & malnutrition','GS1 · GS2 · GS3',w='poverty|poor\\b|poorer|hunger|malnutrition|multidimensional',ex='GS3-2017/Q5',add='GS1-2023/Q16 GS2-2018/Q17',grp='Society & Social Justice'),
 T('health','Health','GS2 Social Sector · GS3 S&T',w='health|vaccin|antibiotic|medic|covid|pandemic|life expectancy|drug combination|suicide',a='WHO',ex='GS3-2025/Q11',grp='Society & Social Justice'),
 T('education','Education & skilling','GS2 Social Sector · GS3',w='educat|school|universit|skill|vocational|earn while|examinations',a='NEP|IITs?|RTE',ex='GS1-2014/Q10',add='GS2-2023/Q6 GS2-2014/Q12',grp='Society & Social Justice'),
 T('demography','Population, demography & migration','GS1 Society · GS3',w='population|demograph|migra|ageing|life expectancy',grp='Society & Social Justice'),
 T('urban','Urbanisation & smart cities','GS1 Society · GS2 · GS3',w='urban|cit(y|ies)\\b|metros?\\b|smart cit|tier-2|heat island|rurban',a='PURA',ex='GS2-2014/Q11 GS2-2015/Q13',grp='Society & Social Justice'),
 T('glob','Globalisation & Indian society','GS1 Society',w='globali[sz]',subs='GLOB',ex='GS1-2025/Q9 GS3-2021/Q9',grp='Society & Social Justice'),
 T('secular','Communalism, regionalism & secularism','GS1 Society · GS2',w='communal|secular|regionalism|linguistic|new states|separate states|smaller states|interreligious|sect\\b',grp='Society & Social Justice'),
 T('diversity','Indian society: diversity, family & values','GS1 Society',w='(?<!bio)diversity|family|traditional values|customs',subs='SOC-DIV',ex='GS1-2023/Q15 GS2-2026/Q13',grp='Society & Social Justice'),
 # ---- Polity & governance
 T('localgov','Local self-government (PRIs & ULBs)','GS2 Polity',w='local bod|local self|local government|local institution|panchayat|samiti|decentrali[sz]ation|urban local',ex='GS2-2015/Q4',add='GS2-2013/Q7',grp='Polity & Governance'),
 T('federal','Federalism & Centre-State relations','GS2 Polity',w='federal|centre-state|article 356|governor|finance commission|gst compensation|fiscal health index|inter-state|article 37[01]',a='CBI',subs='FED',grp='Polity & Governance'),
 T('parl','Parliament & state legislatures','GS2 Polity',w='parliament|legislat(ure|ive)|speaker|rajya sabha|parliamentary|joint sitting',subs='PARL',ex='GS2-2022/Q12',grp='Polity & Governance'),
 T('judiciary','Judiciary & judicial review','GS2 Polity',w='judic|supreme court|collegium|tribunal|lok adalat|legal aid|basic structure|coelho',a='PILs?|NJAC',grp='Polity & Governance'),
 T('exec','Executive, separation of powers & comparative polity','GS2 Polity',w='separation of powers|checks and balances|ordinance|cabinet|pardon|mercy petition|president|financial emergency|lt-governor|delhi lg|parliamentary sovereignty|political systems',subs='SEP COMP',grp='Polity & Governance'),
 T('elections','Elections & electoral reforms','GS2 Polity',w='election|electoral|voting|model code|simultaneous|disqualif|party system|anti-defection',a='EVMs?|ECI',subs='RPA',ex='GS2-2022/Q14',grp='Polity & Governance'),
 T('bodies','Constitutional, statutory & regulatory bodies','GS2 Polity',w='attorney|lokpal|regulatory|human rights commission|information commission|quasi-judicial|commissions',a='CAG|NCSC|NCBC|NCW|NHRC|NALSA|CCI|SEBI|IRDA',subs='CBODY STAT',ex='GS2-2017/Q10 GS2-2016/Q20',grp='Polity & Governance'),
 T('rights','Fundamental rights & constitutional values','GS2 Polity',w='privacy|article 21|article 19|free speech|freedom of movement|constitutional morality|uniform civil code|euthanasia|gender justice|equality in|preamble|life and personal liberty|amending power|article 368',subs='CONST',ex='GS2-2016/Q7 GS2-2020/Q11 GS2-2020/Q2',grp='Polity & Governance'),
 T('egov','E-governance, transparency & accountability','GS2 Governance',w='e-governance|transparen|accountab|citizen.s charter|direct benefit|whistleblow|integrity rank|aadhaar|cash transfer|corruption|ict-based|ict access',a='RTI|DBT',subs='GOV-TA',ex='GS2-2025/Q11 GS2-2017/Q3 GS2-2013/Q11',grp='Polity & Governance'),
 T('civserv','Civil services & administrative reform','GS2 Governance · GS4',w='civil servi|bureaucra|civil servant|cadre',grp='Polity & Governance'),
 T('shgngo','SHGs, NGOs, civil society & pressure groups','GS2 Governance',w='self-help|civil society|pressure group|charitable|donor|microfinance|business associations|farmers. organisations|non-state actors. role',a='SHGs?|NGOs?|FCRA',subs='DEV-NGO',grp='Polity & Governance'),
 T('welfare','Welfare schemes: design & delivery','GS2 Social Justice · Governance',w='welfare|beneficiar|anti-poverty|centrally sponsored|cash transfer|mid-day|implementation|smart city programme|showpieces',ex='GS3-2017/Q16',add='GS1-2018/Q17 GS2-2022/Q6 GS2-2019/Q16 GS2-2025/Q17',grp='Polity & Governance'),
 # ---- Economy
 T('inclusive','Inclusive growth & financial inclusion','GS3 Economy',w='inclusive|inclusion|unbanked|inequality|distributive|equity',a='PMJDY|HDI|IHDI|CSR',subs='INCL',add='GS1-2023/Q16 GS1-2018/Q17',grp='Economy'),
 T('jobs','Employment, labour, MSMEs & startups','GS3 Economy',w='employ|jobs?\\b|labour codes|labour-intensive|labour reforms|labour migration|gig economy|informali|startups?',a='MSMEs?',grp='Economy'),
 T('agri','Agriculture, irrigation & farm markets','GS3 Economy · GS1 Geography',w='agri|farm|crops?\\b|cropping|irrigat|millet|pulse|horticult|watershed|green revolution|land reform|blue revolution|pisciculture|livestock|rice|tea gardens',a='APMCs?',subs='AGRI LAND',ex='GS3-2023/Q12',grp='Economy'),
 T('food','Food security, MSP, PDS & subsidies','GS3 Economy',w='food security|buffer|subsid|food grain|net food|food inflation|hunger',a='MSP|PDS|NFSA',subs='FARMSUB',add='GS2-2018/Q17',grp='Economy'),
 T('foodproc','Food processing & agri supply chains','GS3 Economy',w='food processing|agro-food|perishable|supermarket|agri-commodities|multi-brand retail',subs='FOODPROC',grp='Economy'),
 T('industry','Industry, manufacturing & industrial policy','GS3 Economy · GS1 Geography',w='industrial (growth|corridor|policy)|manufactur|make in india|semiconductor|iron and steel|textile|sugar mills|it industry|protectionism|liberalisation and|services-led',a='PLI|SEZs?|MSMEs?',subs='INDPOL',grp='Economy'),
 T('transport','Transport infrastructure (rail, road, air, ports, waterways)','GS3 Infrastructure · GS1 Geography',w='rail|airports?|air connectivity|toll|transport|inland navigation|inland water|straits|connectivity|gati-shakti|interlinking',a='UDAN',ex='GS1-2023/Q3',grp='Economy'),
 T('energy','Energy security & renewables','GS3 Infrastructure · GS1 Geography',w='energy|solar|wind energy|nuclear|reactor|fusion|oil\\b|offshore oil|mineral oil|crude|shale|coal|hydro|thermal (power|plants)|electric vehicle|green grid|refiner',a='ITER',ex='GS1-2026/Q14 GS2-2018/Q20 GS3-2023/Q8',grp='Economy'),
 T('invest','Investment models, PPP & FDI','GS3 Economy',a='PPP|FDI',w='concession',subs='INVEST',add='GS3-2021/Q12',grp='Economy'),
 T('fiscal','Budget, taxation & fiscal policy','GS3 Economy · GS2',w='budget|tax|fiscal|public expenditure|gold monetisation|propriety of expenditure',a='GST|FRBM|LTCG|DDT',subs='BUDGET',grp='Economy'),
 T('growth','Growth, inflation & macroeconomy','GS3 Economy',w='gdp|inflation|monetary|savings rate|recovery|potential gdp|currency manipulation|jobless growth|planning commission|niti',subs='ECO-GROW',ex='GS3-2026/Q12 GS3-2022/Q5 GS3-2018/Q1 GS3-2016/Q4',add='GS2-2016/Q13',grp='Economy'),
 T('digital','Digital economy, fintech & e-commerce','GS3 Economy · S&T',w='digital|crypto|e-commerce|e-technology',a='CBDC',ex='GS3-2013/Q16a GS3-2024/Q10',grp='Economy'),
 # ---- Geography, environment & DM
 T('water','Water resources & management','GS1 Geography · GS3',w='water\\b|groundwater|freshwater|river|glacier|indus water|aquifer|jal shakti|namami gange|wetland|water-use|water stress|water bodies|watershed|irrigation',ex='GS1-2014/Q1 GS1-2016/Q19 GS1-2013/Q22b',grp='Geography, Environment & DM'),
 T('climate','Climate change','GS1 Geography · GS3 Environment · GS2 IR',w='climate change|climate policy|climate-smart|global warming|sea[- ]level|cop ?26|paris|kyoto|carbon|greenhouse|emission',a='NDC|CCUS',add='GS1-2021/Q15 GS1-2017/Q8 GS1-2020/Q5 GS1-2014/Q16',grp='Geography, Environment & DM'),
 T('pollution','Pollution & waste management','GS3 Environment',w='pollut|waste|smog|air quality',a='NCAP',add='GS2-2015/Q7 GS3-2020/Q17',grp='Geography, Environment & DM'),
 T('biodiv','Biodiversity, forests, coasts & conservation','GS3 Environment · GS1',w='biodivers|forest|wetland|ramsar|mangrove|coral|coastal (erosion|sand|ecology|aquifers)|ecosystem|tundra|kunming|organic state|natural vegetation|carrying capacity|biological diversity',a='EIA',add='GS1-2026/Q17 GS1-2020/Q5 GS1-2026/Q6 GS1-2018/Q7 GS1-2022/Q14 GS1-2014/Q24 GS2-2018/Q6 GS3-2016/Q14 GS1-2022/Q15',grp='Geography, Environment & DM'),
 T('mining','Mining & mineral resources','GS1 Geography · GS3',w='mining|mineral|deccan trap|raw material',grp='Geography, Environment & DM'),
 T('disaster','Disaster management','GS3 Disaster Mgmt · GS1 Geography',w='flood|landslide|cyclone|earthquake|tsunami|cloudburst|drought|disaster|dam failure|fujiwhara|twister',a='NDMA',subs='DM',add='GS1-2023/Q14',grp='Geography, Environment & DM'),
 # ---- S&T
 T('space','Space technology','GS3 S&T',w='space|satellite|moon|chandrayaan|telescope|asteroid|mission drishti|juno',a='IRNSS|GPS',ex='GS1-2019/Q19 GS1-2014/Q25',grp='Science & Technology'),
 T('biotech','Biotechnology, health-tech & IPR','GS3 S&T',w='biotech|stem cell|vaccine|patent|traditional medicinal|traditional knowledge|nanotech|nano mission|glivec|antibiotic|copyright|microorganism|life materials|ipr',a='IPR|TKDL',grp='Science & Technology'),
 T('techai','AI, emerging technology & everyday science','GS3 S&T',w='artificial intelligence|agentic|robot|cloud hosting|3d printing|digital signature|fourth industrial|drones|blue led|toll collection',a='AI',add='GS3-2013/Q15 GS3-2013/Q17a GS3-2018/Q5 GS3-2022/Q6',grp='Science & Technology'),
 # ---- Security
 T('cyber','Cyber security, media & data protection','GS3 Security',w='cyber|social media|social networking|data protection|fake news|it rules|encrypted|section 66a|money laundering',subs='SEC-CYBER',ex='GS3-2017/Q19 GS3-2019/Q9 GS3-2021/Q20 GS3-2014/Q16 GS3-2014/Q17 GS3-2023/Q20',grp='Internal Security'),
 T('terror','Terrorism, LWE & insurgency','GS3 Security',w='terror|naxal|insurgen|militan|extremis|radical|mob violence|over-ground',a='LWE|ISIS|UAPA|AFSPA',add='GS3-2021/Q19 GS3-2016/Q17 GS3-2025/Q19 GS3-2023/Q19',grp='Internal Security'),
 T('border','Border, maritime security & defence','GS3 Security · GS2 IR',w='border|maritime|piracy|narco|drug traffick|drones ferrying|airspace|transborder',a='BADP|IPMDA',add='GS3-2021/Q5',ex='GS3-2021/Q10',grp='Internal Security'),
 T('jk','Jammu & Kashmir and Ladakh','GS2 · GS3',w='jammu|kashmir|article 370|ladakh',a='J&K',grp='Internal Security'),
 # ---- IR
 T('neighbour','India & its neighbourhood','GS2 IR',w='pakistan|china|sri lanka|maldives|bangladesh|afghanistan|nepal|myanmar|neighbour|string of pearls|south asia',a='SAARC|BIMSTEC|CPEC|BRI',ex='GS2-2021/Q10',add='GS2-2013/Q21 GS2-2013/Q24',grp='International Relations'),
 T('indopac','Indo-Pacific, Quad & maritime diplomacy','GS2 IR',w='indo-pacific|quad|aukus|south china sea|mausam|sagar',a='IPMDA|IMO',grp='International Relations'),
 T('groupings','Regional & global groupings','GS2 IR',a='BRICS|SCO|BIMSTEC|SAARC|I2U2|NDB|AIIB|AUKUS',w='ashgabat|quad|grouping',subs='IR-GRP',grp='International Relations'),
 T('powers','India & major powers','GS2 IR',w='\\bus\\b|usa|america|washington|russia|japan|israel|europe|nato|indo-us|indo-russian|the west\\b|west foster',subs='IR-DEV',ex='GS1-2019/Q13 GS1-2013/Q11 GS1-2013/Q13 GS2-2026/Q19 GS2-2019/Q10 GS2-2026/Q14 GS2-2025/Q3 GS2-2024/Q15 GS2-2022/Q14 GS2-2021/Q13 GS2-2018/Q13 GS2-2025/Q13 GS2-2019/Q5',grp='International Relations'),
 T('diaspora','Indian diaspora','GS2 IR · GS1',w='diaspora|indentured',grp='International Relations'),
 T('intl','International institutions (UN, WTO, IMF, WHO)','GS2 IR',a='UN|UNSC|WTO|IMF|WHO|UNESCO|ECOSOC|FATF|IMO',w='world bank|un reform|doha',subs='IR-INST',ex='GS2-2020/Q16 GS3-2021/Q7',grp='International Relations'),
 T('regions','Africa, Central Asia, West Asia & Arctic','GS2 IR',w='africa|central asia|west asia|middle east|iran|arctic',ex='GS1-2019/Q1 GS1-2013/Q12 GS1-2016/Q7 GS1-2021/Q15 GS1-2015/Q20',grp='International Relations'),
 # ---- Culture & history
 T('physgeo','Physical geography: climate, oceans & landforms','GS1 Geography',subs='GEO-P',w='monsoon|sub-continent|deltas|ocean|volcanic|mountain ranges|ice melt|landforms',ex='GS1-2025/Q15',grp='Geography, Environment & DM'),
 T('heritage','Heritage, art & culture','GS1 Culture',subs='CULT',w='heritage',grp='Culture & History'),
 T('history','Modern, post-independence & world history','GS1 History',subs='MODHIST POSTIND WORLD',grp='Culture & History'),
]
for th in TH:
    pats=[]
    if th['w']: pats.append(re.compile(r'\b(?:'+th['w']+')',re.I))
    if th['a']: pats.append(re.compile(r'\b(?:'+th['a']+r')\b'))
    hits=[x for x in Q if (x['s'] in th['subs'] or any(p.search(x['t']) for p in pats) or x['id'] in th['add']) and x['id'] not in th['ex']]
    th['hits']=[x['id'] for x in sorted(hits,key=lambda x:(-x['y'],x['p']))]
    th['years']=sorted({x['y'] for x in hits})
untagged=[x for x in Q if not any(x['id'] in th['hits'] for th in TH)]
json.dump(dict(Q=Q,TH=TH),open('themes.json','w'))
import sys
if 'v' in sys.argv:
    for th in TH:
        print(f"{th['k']:10} {len(th['hits']):3}q {len(th['years']):2}y {th['n']}")
    print('untagged',len(untagged));[print(' ',x['id'],x['t']) for x in untagged]
