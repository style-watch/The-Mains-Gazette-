import json,re,difflib,collections
bank={tuple([k.split("|")[0],int(k.split("|")[1])]):v for k,v in json.load(open("bank.json")).items()}
src=open("/home/claude/mm/app/data/themes.js").read()
MM=json.loads(src[src.index("{"):src.rindex("}")+1])
STOP=set("the a an of in and or to for is are be by on with as its it this that their how what why which india indian discuss examine explain critically comment analyse analyze evaluate do does from at has have can not been your give into such between role".split())
def toks(t):
    w=re.findall(r"[a-z0-9]+",t.lower())
    return [x[:6] for x in w if x not in STOP and len(x)>2]
def tidy(t):
    t=re.split(r"\s\(\s*\d+(?:\.\d+)?\s*M\s*\)|PDF Ref|\[\s*\d+\s*words|\(\s*\d+\s*words|\(\s*\d+\s*Marks",t,flags=re.I)[0]
    t=re.sub(r"\s+"," ",t).strip()
    return t
def parts(t):
    ps=re.split(r"\(\s*([ab])\s*\)",t)
    if len(ps)>=5: return {ps[i]:tidy(ps[i+1]) for i in range(1,len(ps)-1,2)}
    return {}
def norm(t): return re.sub(r"[^a-z0-9]+"," ",t.lower()).strip()
def sim(a,b): return difflib.SequenceMatcher(None,norm(a)[:400],norm(b)[:400]).ratio()
out={};report=collections.Counter();low=[]
for id_,p in MM["pyq"].items():
    paper,year,q,gist=p[0],p[1],p[2],p[3]
    qn=re.match(r"Q(\d+)",q or "");qn=int(qn.group(1)) if qn else None
    raw=bank.get((paper,year),[])
    sub=re.search(r"Q\d+([ab])$",q or "")
    cands=[]
    for c in raw:
        c=dict(c);full=tidy(c["text"]) if not parts(c["text"]) else c["text"]
        ps=parts(c["text"])
        if ps:
            for lab,pt in ps.items(): cands.append(dict(c,text=pt,part=lab))
        else: cands.append(dict(c,text=tidy(full)))
    g=set(toks(gist))
    best=None
    for c in cands:
        ct=set(toks(c["text"]))
        s=len(g&ct)/max(1,len(g))
        if qn and c.get("qno")==qn and c["src"]=="A": s+=0.25
        if sub and c.get("part")==sub.group(1): s+=0.05
        if best is None or s>best[0]: best=(s,c)
    if not best: report["nosrc"]+=1; continue
    s,c=best
    # agreement across sources
    agree={c["src"]}
    for o in cands:
        if o["src"]!=c["src"] and sim(o["text"],c["text"])>0.8: agree.add(o["src"])
    # prefer A text if A agrees
    text=c["text"]
    for pref in "ABC":
        if pref in agree:
            pool=[o for o in cands if o["src"]==pref]
            text=max(pool,key=lambda o:sim(o["text"],c["text"]))["text"] if pref!=c["src"] else c["text"]
            break
    text=text.replace("\\.",".").replace(" t he "," the ").replace("is. to","is to")
    text=re.sub(r"\s+([,.?])",r"\1",text)
    out[id_]=dict(text=text,score=round(s,2),srcs="".join(sorted(agree)),qno=c.get("qno"))
    report["ok" if s>=0.5 else "low"]+=1
    report["n_src_%d"%len(agree)]+=1
    if s<0.5: low.append((id_,gist,c["text"][:120],round(s,2)))
json.dump(out,open("matched.json","w"),ensure_ascii=False,indent=0)
print(report)
for l in low[:60]: print(l)
