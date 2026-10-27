import json,re,difflib,collections
d=json.load(open("gs4_raw.json"))
n=lambda t:re.sub(r"[^a-z0-9]+"," ",t.lower()).strip()
def contain(a,b):
    a,b=set(n(a).split()),set(n(b).split())
    return len(a&b)/max(1,min(len(a),len(b)))
out=[]
for u in d["A"]:
    if u["year"]==2020 and u["case"] and not u["text"]: continue
    if u["id"]=="GS4-2024/Q6": continue
    if u["id"]=="GS4-2022/Q5":
        ps=re.split(r"\b([ab])\.\s",u["text"])
        for i in range(1,len(ps)-1,2): out.append(dict(u,id=f"GS4-2022/Q5{ps[i]}",text=ps[i+1].strip()))
        continue
    out.append(dict(u))
# 2024 Q6 (verified on understandupsc.com and anantamias.com)
out+= [dict(id="GS4-2024/Q6a",year=2024,qno=6,case=False,src="W",text="“In Indian culture and value system, an equal opportunity has been provided irrespective of gender identity. The number of women in public service has been steadily increasing over the years.” Examine the gender-specific challenges faced by female public servants and suggest suitable measures to increase their efficiency in discharging their duties and maintaining high standards of probity."),
       dict(id="GS4-2024/Q6b",year=2024,qno=6,case=False,src="W",text="Mission Karmayogi is aiming for maintaining a very high standard of conduct and behaviour to ensure efficiency for serving citizens and in turn developing oneself. How will this scheme empower the civil servants in enhancing productive efficiency and delivering the services at the grassroots level?")]
C=d["C"]
# 2020 case studies + 2013-2018 everything from C
def cunits(y,only_case=False):
    res=[];seen=[]
    rows=[c for c in C if c["year"]==y and (c["case"] or not only_case)]
    for c in rows:
        t=c["text"]
        if any(contain(t,s)>0.9 for s in seen): continue
        seen.append(t)
        num=re.match(r"\d+",c["number"]); num=int(num.group()) if num else None
        ps=re.split(r"\(\s*([a-c])\s*\)",t)
        if not c["case"] and len(ps)>=5 and ps[0].strip()=="" :
            for i in range(1,len(ps)-1,2): res.append(dict(year=y,qno=num,case=False,src="C",text=ps[i+1].strip(),sub=ps[i]))
        else: res.append(dict(year=y,qno=num,case=c["case"],src="C",text=t,sub=""))
    return res
for y in [2013,2014,2015,2016,2017,2018]: 
    for r in cunits(y): out.append(dict(r,id=f"GS4-{y}/Q{r['qno']}{r['sub']}"))
for r in cunits(2020,True): out.append(dict(r,id=f"GS4-2020/Q{r['qno']}"))
# second-source agreement
for u in out:
    pool=[c for c in C if c["year"]==u["year"]] if u["src"] in "AW" else []
    u["n"]=(2 if any(contain(u["text"],c["text"])>0.8 for c in pool) else 1) if u["src"]!="W" else 2
ids=collections.Counter(u["id"] for u in out)
print("dupe ids",[k for k,v in ids.items() if v>1])
print(collections.Counter(u["year"] for u in out))
print("single-source",sum(1 for u in out if u["n"]==1),"cases",sum(1 for u in out if u["case"]))
json.dump(out,open("gs4_units.json","w"),ensure_ascii=False,indent=0)
