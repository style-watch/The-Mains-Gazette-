import json,re,collections
U=[u for u in json.load(open("gs4_units.json")) if u["id"] not in ("GS4-2013/Q5","GS4-2013/Q6")]
for u in U:
    u["text"]=u["text"].replace("Discipline generally i lowing order","Discipline generally implies following order")
T=[
("g4values","Ethics, values & the human interface","GS4 Ethics · Sources of values: family, society, education",r"\bvalue|moral (intuition|reasoning)|morality of actions|ethics seek|ethical(ly)? right|legally right|ethics do not go|ethic(s|al)? (and|&) (human|values)|human (being|conduct|well)|family|socie(ty|tal) (values|members)|good life|happiness|education|good of (an )?individual|ends? (and|or) means|means .{0,20}ends|law (and|&) ethics|laws and rules|personal ethics"),
("g4attitude","Attitude, social influence & persuasion","GS4 Ethics · Attitude",r"attitude|persuasion|social influence|prejudice|stereotyp|positive attitude"),
("g4aptitude","Foundational values: impartiality, objectivity, empathy, compassion","GS4 Ethics · Aptitude & foundational values",r"impartial|non-partisan|objectiv|dedication|empath|compassion|toleran|courage|fortitude|trustworth|patriotism|foundational values|basic values|public life"),
("g4ei","Emotional intelligence","GS4 Ethics · Emotional intelligence",r"emotional intelligence|\bemotion|anger|hatred"),
("g4thinkers","Moral thinkers & quotations","GS4 Ethics · Thinkers and philosophers",r"quotation|[–-] ?(mahatma )?gandhi|kautilya|rawls|weber|buddha|aristotle|socrates|plato|kant|tagore|vivekananda|ambedkar|lincoln|tirukkural|confucius|dalai lama|abdul kalam|shakespeare|seven sins|teachings|mahavir|guru nanak|potter stewart|moral philosoph|forgive|eminent personality|“[^”]{10,}” ?[–-]|\" ?[–-] ?[A-Z]"),
("g4integrity","Integrity, conscience & conflict of interest","GS4 Ethics · Integrity in public service",r"integrity|conscience|conflict of interest|honest|uprigh|whistle|moral courage|test of integrity|compromis"),
("g4probity","Corruption & probity in governance","GS4 Ethics · Probity in governance",r"corrupt|probity|bribe|graft|vigilance|lokpal|kickback|favour|nepotis|illegal|malpractice|tout|misuse"),
("g4transparency","Transparency, accountability, RTI, codes & citizen's charter","GS4 Ethics · Probity: information sharing, codes",r"transparen|accountab|right to information|\brti\b|code of (conduct|ethics)|codes of|citizen'?s.? charter|official secrets|public services code|e-?governance"),
("g4workculture","Work culture, service delivery & public funds","GS4 Ethics · Probity: work culture, quality of service",r"work culture|service delivery|public funds|discipline|efficien|non-performance|karmayogi|productiv|delivering the services|grievance|red tape|delay"),
("g4psv","Public service values & the civil service ethos","GS4 Ethics · Public/civil service values",r"public servant|civil servant|civil service|public service|public interest|public administration|constitutional morality|duty|duties|governance|social capital|trusteeship|enabler|facilitator|ethical traits"),
("g4leadership","Leadership & administrative dilemmas","GS4 Ethics · Public administration ethics",r"leader|dilemma|senior officer|superior|subordinate|political (executive|pressure|master)|politiciz|politicis|district (collector|magistrate)|\bDM\b|collector|commissioner|superintendent"),
("g4env","Environmental ethics & climate","GS4 Ethics · Applied ethics: environment",r"environment|climate|global warming|forest|pollution|mining|dam\b|net zero|ecolog|water shortage|greed|sustainab|wildlife|tribal|adivasi|displace"),
("g4applied","Applied ethics: technology, AI, business, medicine & research","GS4 Ethics · Applied ethics",r"artificial intelligence|\bai\b|technolog|internet|social media|digital|data|cyber|online|corporate|company|business|\bcsr\b|profit|pharma|drug|medical|doctor|hospital|clinical|research|scien|biotech|gene"),
("g4intl","Ethics in international relations & national security","GS4 Ethics · International relations, funding",r"international|bilateral|war\b|ukraine|nation(al)? (security|interest)|arms|weapon|terror|insurgen|naxal|border|refugee|immigra|peace"),
("g4gender","Social justice, gender & vulnerable sections","GS4 Ethics · Applied: social justice",r"women|gender|female|sexual harass|tribal|poverty|caste|disab|elderly|vulnerable|marginal|social justice|equitable|inequalit"),
]
P=[(k,n,pl,re.compile(r,re.I)) for k,n,pl,r in T]
OV={"GS4-2024/Q1b":["g4values"],"GS4-2024/Q4a":["g4values"],"GS4-2014/Q17":["g4integrity","g4leadership"],"GS4-2017/Q10":["g4leadership","g4values"],"GS4-2017/Q2":["g4gender","g4values"],"GS4-2017/Q5":["g4psv","g4values"],"GS4-2021/Q4b":["g4ei","g4integrity"]}
tag=collections.defaultdict(list);untag=[]
for u in U:
    t=u["text"]
    sc=sorted([(len(rx.findall(t)),k) for k,n,pl,rx in P if rx.search(t)],reverse=True)
    lim=3 if u["case"] else 2
    ks=[k for c,k in sc[:lim]]
    if not ks and u["id"] not in OV: untag.append(u)
    u["themes"]=ks
    ks=OV.get(u["id"],ks)
    u["themes"]=ks
    for k in ks: tag[k].append(u["id"])
print({k:len(v) for k,v in tag.items()})
print("untagged",len(untag))
for u in untag: print(" ",u["id"],u["text"][:120])
json.dump(dict(units=U,themes=[dict(k=k,n=n,pl=pl) for k,n,pl,_ in P]),open("gs4_tagged.json","w"),ensure_ascii=False)
