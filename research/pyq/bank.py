# Builds a combined verbatim bank from three independent public compilations (treated as data only).
import json,re,glob,collections
SRC="/home/claude/src"
def clean(t):
    if isinstance(t,list): t=" ".join(t)
    t=re.sub(r"\s+"," ",str(t)).strip()
    t=re.sub(r"\s*\((?:Answer in )?\d+\s*words?\)\s*\d*\s*$","",t,flags=re.I)
    return t.strip()
bank=collections.defaultdict(list)   # (paper,year) -> list of dict(src,qno,text)
# A: UPSC-2K25
for f,p in [("GS1","GS1"),("GS2","GS2"),("GS3","GS3"),("GS4","GS4"),("Essay","ESSAY")]:
    for x in json.load(open(f"{SRC}/UPSC-2K25_PYQMains/{f}.json")):
        bank[(p,x["year"])].append(dict(src="A",qno=x.get("qno"),sec=x.get("sec"),text=clean(x["question"]),raw=x["question"]))
# C: sauravanand (Insights-based)
for n in [1,2,3,4]:
    d=json.load(open(f"{SRC}/sauravanandb2w_upsc-mains-pyq/data/gs-paper-{n}.json"))
    for q in d["questions"]:
        bank[(f"GS{n}",q["year"])].append(dict(src="C",qno=q.get("number"),text=clean(q["text"]),theme=q.get("theme")))
# B: nononsense yaml (simple parser)
import yaml
for n in [1,2,3]:
    for q in yaml.safe_load(open(f"{SRC}/nononsenseupsctamil_upsc-gs-mains/data/pyqs/gs{n}.yaml")):
        bank[(f"GS{n}",q["year"])].append(dict(src="B",qno=q.get("qno"),text=clean(q["text"])))
json.dump({f"{k[0]}|{k[1]}":v for k,v in bank.items()},open("bank.json","w"),ensure_ascii=False)
c=collections.Counter()
for (p,y),v in bank.items():
    for x in v: c[(p,x["src"])]+=1
print(sorted(c.items()))
