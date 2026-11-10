"""Builds editions/2026-11-10.json (The Indian Express, Delhi, 10 Nov 2026), page by page as the owner picks items.
Run from the repository root:  python3 research/editions/ie_20261110.py && node tools/build.js
Format (owner's rules, 10 Nov 2026): crisp one-line ideas scaled to importance (major 4, middle 3, minor 2);
one-line quotable examples; data only with a named source.
"""
import json

D = "2026-11-10"
P = lambda pts: [{"k": k, "t": t, "ex": ex} for k, t, ex in pts]
I = lambda t, tag, use: [t, tag, use]
E = lambda name, line, g4, tag: [name, line, g4, tag, f"{name}: {line}."]

items, ethics, essay = [], [], []

# ---------------------------------------------------------------- 01 India and Black Sea food corridors (page 1)
items.append({
 "id": f"{D}-01",
 "title": "India ready to help set up food corridors, says Zelenskyy after phone call with Modi",
 "section": "Front page",
 "page": "Page 1",
 "where": "Front page, continued on page 2 (Shubhajit Roy)",
 "gs": ["GS2", "GS3", "GS4"],
 "syllabus": "GS2 › India's foreign policy; effect of policies of developed and developing countries on India's interests · GS3 › Food security · GS4 › Ethics in international relations",
 "themes": ["powers", "food", "g4intl"],
 "summary": "Before US-brokered Russia–Ukraine talks in Abu Dhabi, Zelenskyy said India is ready to mediate in setting up food corridors through the Black Sea; Jaishankar also spoke to Lavrov.",
 "evolution": [],
 "ideas": [
  I("India talks to both Kyiv and Moscow on the same day: strategic autonomy in action.", "GS2 · Foreign policy", "Friend to both sides, ally of peace."),
  I("Russia's blocking of Black Sea grain exports hurts the world's food supply.", "GS3 · Global food security", "Blocked sea routes hit hundreds of millions."),
  I("India offers a humanitarian, issue-based role: food corridors before a full ceasefire.", "GS2 · Peace-building", "Start with what both sides can agree on."),
  I("Voice of the Global South: food and energy security of poorer nations at stake.", "GS2 · India's global role / GS4 · International ethics", "Speak for those who suffer but don't fight.")
 ],
 "keywords": [
  ["Strategic autonomy", "Keeping independent ties with rival powers", "GS2 · Foreign policy",
   "Talking to Kyiv and Moscow together is strategic autonomy at work."],
  ["Humanitarian corridor", "Agreed safe route for food, aid or civilians in a conflict", "GS2 · Conflict resolution",
   "Food corridors are humanitarian corridors for grain."],
  ["Issue-based mediation", "Solving one concrete problem as a step towards peace", "GS2 · Diplomacy",
   "Issue-based mediation builds trust where a full deal is out of reach."]
 ],
 "data": [],
 "examples": [
  E("Black Sea Grain Initiative (2022)", "UN–Türkiye-brokered deal that let Ukrainian grain sail", "", "GS2 · Mediation · GS3 · Food security"),
  E("'This is not an era of war'", "India's stated stance on the Ukraine conflict", "GS4", "GS2 · Foreign policy · GS4 · International ethics"),
  E("Vaccine Maitri", "India's earlier humanitarian diplomacy", "GS4", "GS2 · Soft power · GS4 · Compassion")
 ],
 "pyqs": [
  ["GS2-2025/Q20", "UN reform stalled by great-power confrontation."],
  ["GS2-2023/Q19", "NATO expansion and US-Europe partnership."],
  ["GS1-2023/Q4", "Climate change and food security in tropical countries."],
  ["GS4-2026/Q5b", "Ethical considerations in international relations subjugated to strategic interests."],
  ["GS4-2024/Q2a", "It is not enough to talk about peace; one must believe in it and work at it."]
 ],
 "trend": {
  "t": "Questions on great powers moved from the US–China rivalry (2021) to NATO's expansion (2023) and UN reform stalled by great-power confrontation (2025). GS4 asked about peace (2024) and ethics versus strategic interest in international relations (2026).",
  "watch": "The 2026 GS4 question on ethics versus strategic interest makes India's humanitarian mediation a ready example; a GS2 question on India's role in the Russia–Ukraine war is also due.",
  "focus": ["Strategic autonomy and multi-alignment", "India as mediator and voice of the Global South", "Global food security and sea routes", "Ethics in international relations"]
 },
 "potential": [
  "\"India's balanced engagement with Russia and Ukraine gives it a unique role as a peace-builder.\" Discuss. (15 marks)",
  "\"In international relations, humanitarian concerns can open the door that strategic interests keep shut.\" Illustrate with India's offer to mediate food corridors. (GS4, 10 marks)"
 ]
})

ethics.append({
 "id": f"{D}-e1", "area": "intl", "themes": ["g4intl"], "card": f"{D}-01", "src": "IE pp. 1–2",
 "title": "Food before politics: India's corridor offer",
 "news": "India offered to mediate food corridors through the Black Sea, as Russia's blocking of grain exports hurts hundreds of millions worldwide.",
 "syllabus": "Ethics in international relations; humanitarian values; peace",
 "link": "When national interests make a full settlement hard, a humanitarian step, letting food move, puts human need above strategic gain. India acts as a bridge rather than a bystander, speaking for poorer nations that suffer from a war they did not fight.",
 "pyq": ["GS4-2026/Q5b", "GS4-2024/Q2a"],
 "question": "\"Ethics in international relations begins where human suffering is placed above strategic interest.\" Discuss with reference to India's offer to mediate food corridors in the Black Sea.",
 "keywords": ["Humanitarianism", "Vasudhaiva Kutumbakam", "Peace-building", "Global justice"]
})


# ---------------------------------------------------------------- 02 WMO report and Nepal (page 8, minor)
items.append({
 "id": f"{D}-02",
 "title": "Climate meet begins, report says 2026 among warmest years ever",
 "section": "Nation",
 "page": "Page 8",
 "where": "Nation, page 8 (Amitabh Sinha)",
 "gs": ["GS3", "GS2"],
 "syllabus": "GS3 › Climate change; disaster management · GS2 › Important international institutions (WMO, UNFCCC)",
 "themes": ["climate", "disaster"],
 "summary": "As COP31 opened in Antalya, the WMO's State of the Climate report said 2026 could be among the four warmest years; Nepal got US$20 million from the Loss and Damage Fund against a US$2 billion need.",
 "evolution": [["9 Nov 2026", "Editorial: 'Implementation COP' must live up to its name (COP31 card)."],
               ["10 Nov 2026", "COP31 opens; WMO report on 2026 warming."]],
 "ideas": [
  I("Jan–Sep 2026 averaged 1.47°C above pre-industrial; likely second-warmest year after 2024 (WMO).", "GS3 · Climate change", "1.5°C is a line we are already touching."),
  I("Nepal: US$20 million from the Loss and Damage Fund vs US$2 billion needed.", "GS3 · Loss and damage / GS4 · Climate justice", "Promises are a fraction of the damage.")
 ],
 "keywords": [
  ["State of the Climate report", "WMO's annual assessment of global climate indicators", "GS2 · International institutions",
   "The WMO's State of the Climate report is the scientific backdrop to every COP."],
  ["Loss and Damage Fund", "Fund to help vulnerable countries recover from climate disasters", "GS3 · Climate finance",
   "Nepal's US$20 million from the Loss and Damage Fund shows the gap between promise and need."]
 ],
 "data": [
  ["1.47°C", "Global average temperature above pre-industrial, January–September 2026",
   "World Meteorological Organization, State of the Climate report", "GS3 · Climate change",
   "The WMO says global temperature in January–September 2026 was 1.47°C above pre-industrial levels."]
 ],
 "examples": [
  E("Nepal floods, Aug 2026", "US$20 million promised, US$2 billion needed", "GS4", "GS3 · Loss and damage · GS4 · Climate justice")
 ],
 "pyqs": [
  ["GS3-2025/Q18", "Paris/COP26 commitments and updated NDC."],
  ["GS3-2024/Q17", "Disaster resilience and Sendai targets."]
 ],
 "trend": {
  "t": "COP outcomes and India's commitments were asked in 2021 and 2025; disaster resilience in 2024.",
  "watch": "Use the WMO and Loss and Damage figures as data in any climate or disaster answer.",
  "focus": ["Warming data (WMO)", "Loss and Damage Fund"]
 },
 "potential": []
})

edition = {"date": D, "paper": "The Indian Express", "items": items, "ethics": ethics, "essay": essay}
with open(f"editions/{D}.json", "w") as f:
    json.dump(edition, f, ensure_ascii=False, indent=1)
print(f"editions/{D}.json: {len(items)} stories, {len(ethics)} cases, {len(essay)} essay pieces")
