# GS4 (Ethics) bank 2013-2026: units = Section A sub-questions and Section B case studies.
import json,re,difflib,collections
SRC="/home/claude/src"
n=lambda t:re.sub(r"[^a-z0-9]+"," ",t.lower()).strip()
sim=lambda a,b:difflib.SequenceMatcher(None,n(a)[:300],n(b)[:300]).ratio()
def tidy(t):
    t=re.sub(r"\\\.",".",t); t=re.sub(r"^\s*\d+\\?\.\s*","",t)
    t=re.split(r"\s\(\s*\d+(?:\.\d+)?\s*M\s*\)|PDF Ref|\(\s*Answer in \d+ words\s*\)|\(\s*\d+\s*words\s*\)",t,flags=re.I)[0]
    return re.sub(r"\s+"," ",t).strip()
units=[]
A=json.load(open(f"{SRC}/UPSC-2K25_PYQMains/GS4.json"))
for x in A:
    q=x["question"]; q=q if isinstance(q,list) else [q]; q=[s for s in q if isinstance(s,str) and s.strip()]
    y,no=x["year"],x["qno"]
    if x["sec"]=="A":
        lead=[s for s in q if not re.match(r"^[a-e]\.\s",s)]
        subs=[s for s in q if re.match(r"^[a-e]\.\s",s)]
        if lead and subs and len(lead)==1 and len(lead[0])<200:   # quotations question: shared stem
            for s in subs: units.append(dict(id=f"GS4-{y}/Q{no}{s[0]}",year=y,qno=no,case=False,text=tidy(lead[0]+" "+s[3:]),src="A"))
        elif subs and not lead:
            for s in subs: units.append(dict(id=f"GS4-{y}/Q{no}{s[0]}",year=y,qno=no,case=False,text=tidy(s[3:]),src="A"))
        else:
            units.append(dict(id=f"GS4-{y}/Q{no}",year=y,qno=no,case=len(" ".join(q))>700,text=tidy(" ".join(q)),src="A"))
    else:
        units.append(dict(id=f"GS4-{y}/Q{no}",year=y,qno=no,case=True,text=tidy("\n".join(q)),src="A",paras=[tidy(s) for s in q]))
# anomaly check within A: a unit nearly identical to another unit of same year
for u in units:
    for v in units:
        if u is not v and u["year"]==v["year"] and u["id"]<v["id"] and sim(u["text"],v["text"])>0.6:
            print("ANOMALY",u["id"],v["id"],u["text"][:80])
C=json.load(open(f"{SRC}/sauravanandb2w_upsc-mains-pyq/data/gs-paper-4.json"))["questions"]
Cn=[dict(year=q["year"],number=str(q["number"]),case=(q["marks"]=="case" or "Case" in q.get("theme","")),text=tidy(q["text"])) for q in C]
json.dump(dict(A=units,C=Cn),open("gs4_raw.json","w"),ensure_ascii=False)
print(collections.Counter(u["year"] for u in units))
