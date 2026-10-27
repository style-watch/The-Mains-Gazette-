# Adds UPSC's exact question wording to data/themes.js: MM.pyq[id] = [paper, year, qno, gist, text, sources]
import json,sys
path=sys.argv[1]
src=open(path).read();pre=src[:src.index("{")];MM=json.loads(src[src.index("{"):src.rindex("}")+1])
m=json.load(open("/home/claude/mm/pyq/matched.json"))
for k,p in MM["pyq"].items():
    v=m.get(k)
    p[:]=p[:4]+([v["text"],len(v["srcs"])] if v else [])
MM["meta"]["verbatim"]="Exact wording cross-checked across independent public compilations (UPSC-2K25/PYQMains, nononsenseupsctamil/upsc-gs-mains, sauravanandb2w/upsc-mains-pyq); sources=1 means found in one compilation only."
open(path,"w").write(pre+json.dumps(MM,ensure_ascii=False,separators=(",",":"))+";\n")
print("updated",sum(1 for p in MM["pyq"].values() if len(p)>4))
