# Adds GS4 Ethics themes and questions to data/themes.js (run after add_verbatim.py)
import json,sys
path=sys.argv[1]
src=open(path).read();pre=src[:src.index("{")];MM=json.loads(src[src.index("{"):src.rindex("}")+1])
d=json.load(open("/home/claude/mm/pyq/gs4_tagged.json"))
if "GS4 Ethics" not in MM["groups"]: MM["groups"].append("GS4 Ethics")
g=MM["groups"].index("GS4 Ethics")
MM["themes"]=[t for t in MM["themes"] if not t["k"].startswith("g4")]
MM["pyq"]={k:v for k,v in MM["pyq"].items() if not k.startswith("GS4-")}
for u in d["units"]:
    q=("Q%d"%u["qno"]+u["id"].split("Q%d"%u["qno"],1)[1]) if u["src"] in "AW" and u.get("qno") else ""
    label=u["text"][:90]+("…" if len(u["text"])>90 else "")
    MM["pyq"][u["id"]]=["GS4",u["year"],q,label,u["text"],u["n"],1 if u["case"] else 0]
for t in d["themes"]:
    ids=[u["id"] for u in d["units"] if t["k"] in u["themes"]]
    ids.sort(key=lambda i:-MM["pyq"][i][1])
    MM["themes"].append(dict(k=t["k"],n=t["n"],pl=t["pl"],g=g,q=ids))
MM["meta"]["total"]=len(MM["pyq"])
MM["meta"]["gs4"]="GS4 Ethics 2013-2026: Section A sub-questions and Section B case studies. 2019-2026 from UPSC-2K25/PYQMains cross-checked with sauravanandb2w/upsc-mains-pyq; 2013-2018 and 2020 case studies from sauravanandb2w/upsc-mains-pyq only (question numbers not shown); 2024 Q6 verified on two coaching sites. Two 2020 case studies are not yet available."
open(path,"w").write(pre+json.dumps(MM,ensure_ascii=False,separators=(",",":"))+";\n")
print("themes",len(MM["themes"]),"pyq",len(MM["pyq"]))
