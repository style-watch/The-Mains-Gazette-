"""Builds editions/2026-11-18.json (The Indian Express, Pune, 18 Nov 2026), page by page as the owner picks items.
Run from the repository root:  python3 research/editions/ie_20261118.py && node tools/build.js
Format (owner's rules, 10 Nov 2026): crisp one-line ideas scaled to importance (major 4, middle 3, minor 2);
one-line quotable examples; data only with a named source.
Items: front-page stories with their page-2 continuations (Quad; East Asia Summit; revamped Agnipath).
"""
import json

D = "2026-11-18"
P = lambda pts: [{"k": k, "t": t, "ex": ex} for k, t, ex in pts]
I = lambda t, tag, use: [t, tag, use]
E = lambda name, line, g4, tag: [name, line, g4, tag, f"{name}: {line}."]

items, ethics, essay = [], [], []

# ---------------------------------------------------------------- 01 Quad summit in Manila (page 1 lead, major)
items.append({
 "id": f"{D}-01",
 "title": "Quad unveils security, business, AI plans; Trump offers open line",
 "section": "Front page",
 "page": "Page 1",
 "where": "Front page lead, continued on page 2 (Shubhajit Roy)",
 "gs": ["GS2", "GS3", "GS4"],
 "syllabus": "GS2 › Bilateral, regional and global groupings involving India and/or affecting India's interests · GS3 › Security challenges in maritime areas; cyber security; science and technology (AI) · GS4 › Ethics in international relations",
 "themes": ["indopac", "groupings", "powers", "techai", "cyber", "mining", "g4intl"],
 "summary": "At their first leaders' meeting since 2024, on the EAS sidelines in Manila, the Quad announced a maritime surveillance collaboration, an AI accelerator, enhanced cyber cooperation, critical mineral deals and a Business Leaders' Forum in Mumbai in 2027.",
 "evolution": [
  ["2007", "Quad first started."],
  ["2017", "Quad revived, in Manila."],
  ["2024", "Last Quad leaders' meeting before Manila."],
  ["17 Nov 2026", "Manila meeting: maritime surveillance, AI, cyber, critical minerals and a business forum; joint statement condemns cross-border terrorism."]
 ],
 "ideas": [
  I("Security core deepens: P-8 and P-3C aircraft to fly a first Quad maritime exercise in 2027; Malabar already drills anti-submarine warfare.", "GS2 · Indo-Pacific / GS3 · Maritime security", "The Quad is moving from dialogue to joint operations at sea."),
  I("Beyond security: AI accelerator, cyber cooperation, critical minerals and a Business Leaders' Forum (Mumbai, 2027).", "GS2 · Groupings / GS3 · Technology", "The Quad now delivers trusted technology and supply chains, not just patrols."),
  I("Joint statement opposes changing the status quo by force or coercion, and economic coercion through arbitrary export restrictions.", "GS2 · Rules-based order", "The Quad's message: no change by force, no leverage through supply chains."),
  I("Condemns cross-border terrorism; Modi calls the Quad 'a constructive and trusted partnership'.", "GS2 · India's interests / GS3 · Terrorism", "The Quad also carries India's concern on cross-border terror.")
 ],
 "keywords": [
  ["Maritime domain awareness", "Knowing in real time what moves at sea, through shared surveillance and data", "GS3 · Maritime security",
   "The Indo-Pacific Maritime Surveillance Collaboration builds shared maritime domain awareness across the Quad."],
  ["Economic coercion", "Using trade, export curbs or supply dependence to force political outcomes", "GS2 · Geoeconomics",
   "Quad critical mineral deals aim to end vulnerability to economic coercion by any single supplier."],
  ["Supply-chain resilience", "Diversifying sources so no single country can choke supplies", "GS3 · Critical minerals",
   "Critical mineral partnerships are about supply-chain resilience, not just trade."],
  ["Minilateralism", "Small, issue-based groupings of like-minded countries", "GS2 · Groupings",
   "The Quad shows minilateralism: four countries, many issues, no treaty."]
 ],
 "data": [],
 "examples": [
  E("Malabar exercise", "Quad navies' anti-submarine and anti-surface drills", "", "GS2 · Indo-Pacific · GS3 · Maritime security"),
  E("Quad Business Leaders' Forum, Mumbai 2027", "Quad's economic turn", "", "GS2 · Groupings · GS3 · Investment"),
  E("Quad AI accelerator", "trusted AI access for the Indo-Pacific", "GS4", "GS3 · AI · GS4 · Trustworthy technology")
 ],
 "pyqs": [
  ["GS2-2020/Q19", "Quad: from military alliance to trade bloc?"],
  ["GS2-2026/Q9", "IPMDA: bridge between SAGAR and the Quad's Indo-Pacific strategy."],
  ["GS2-2021/Q20", "AUKUS and existing partnerships in the Indo-Pacific."],
  ["GS1-2016/Q16", "Geopolitical significance of the South China Sea."],
  ["GS2-2014/Q16", "South China Sea, freedom of navigation and India–China issues."],
  ["GS3-2021/Q10", "Cross-border cyber attacks and defensive measures."],
  ["GS4-2026/Q5b", "Ethics subjugated to strategic interests in international relations."]
 ],
 "trend": {
  "t": "Indo-Pacific questions began with the South China Sea and freedom of navigation (2014, 2016), moved to the Quad's own character (2020) and rival groupings such as AUKUS (2021), and in 2026 reached a specific Quad initiative, IPMDA, tested against India's SAGAR vision.",
  "watch": "The Quad has been asked directly in 2020 and 2026, and the 2026 question picked one initiative and asked for a critical assessment, so the new surveillance collaboration, AI accelerator or critical minerals deals are the next likely angles.",
  "focus": ["Quad's shift from security to technology, supply chains and economy", "Maritime domain awareness: IPMDA and the 2027 surveillance exercise", "India's strategic autonomy within the Quad", "Critical minerals and economic coercion"]
 },
 "potential": [
  "\"The Quad is evolving from a maritime security dialogue into a partnership for technology, supply chains and economic security.\" Discuss. (15 marks)",
  "Examine the significance of the Indo-Pacific Maritime Surveillance Collaboration for India's maritime security. (10 marks)",
  "\"Critical minerals have become the new frontier of strategic partnerships.\" Discuss with reference to the Quad. (10 marks)"
 ],
 "practice": [
  {
   "q": "\"The Quad is evolving from a maritime security dialogue into a partnership for technology, supply chains and economic security.\" Discuss.",
   "marks": 15,
   "words": 250,
   "parts": ["Introduction", "The security core", "Beyond security: the wider agenda", "Limits and challenges", "Way forward", "Conclusion"],
   "answer": [
    {"h": "Introduction",
     "t": "Started in 2007 and revived in 2017, the Quad met at leaders' level in Manila in November 2026 and announced plans spanning maritime surveillance, AI, cyber security, critical minerals and business."},
    {"h": "The security core",
     "pts": P([
      ("Maritime domain awareness", "Shared surveillance gives the Indo-Pacific a common picture of what moves at sea, from dark shipping to illegal fishing.", "Indo-Pacific Maritime Surveillance Collaboration; P-8 and P-3C aircraft in a first Quad exercise in 2027."),
      ("Naval interoperability", "Regular drills let four navies operate together in anti-submarine and anti-surface warfare.", "The 30th Malabar exercise near Japan."),
      ("Freedom of navigation", "The Quad defends open sea lanes and overflight under international law.", "Joint statement: 'open, safe and resilient maritime transit corridors'."),
      ("Opposing coercion", "It rejects unilateral changes to the status quo by force or coercion.", "Joint statement on destabilising actions that escalate tensions."),
      ("Counter-terrorism", "The grouping condemns terrorism in all forms, including cross-border terrorism.", "A key gain for India given terror from across its western border."),
      ("Humanitarian assistance", "Disaster response gives the Quad a non-military face in the region.", "Modi lists disaster response among the Quad's core areas.")
     ])},
    {"h": "Beyond security: the wider agenda",
     "pts": P([
      ("Trusted technology", "The Quad funds trusted AI access and deployment so the region does not depend on untrusted systems.", "Quad AI accelerator to coordinate and fund trusted AI across the Indo-Pacific."),
      ("Cyber security", "Rising cyber incidents need shared standards and response.", "Enhanced Quad Cybersecurity Cooperation for 'an open and secure cyberspace'."),
      ("Critical minerals", "New deals diversify supply so no member is vulnerable to a single supplier.", "Statement's concern over economic coercion through arbitrary export restrictions."),
      ("Private-sector link", "Business ties turn diplomatic intent into investment and jobs.", "Inaugural Quad Business Leaders' Forum in Mumbai, 2027."),
      ("Public goods for the region", "Deliverables for smaller states build legitimacy beyond the four members.", "Modi: 'trusted solutions for the entire Indo-Pacific'."),
      ("Economic security", "Supply chains are now treated as a security question.", "MEA: cooperation in maritime security, economic security and critical technologies.")
     ])},
    {"h": "Limits and challenges",
     "pts": P([
      ("No treaty, no secretariat", "The Quad is a loose partnership; commitments depend on political will.", "Leaders met in Manila for the first time since 2024."),
      ("Divergent China postures", "Members differ in how far they want to confront China, given deep trade ties.", "The Quad meets just before Trump's trilateral with Xi and Putin."),
      ("India's strategic autonomy", "India avoids any alliance commitment and keeps ties with Russia.", "India's stand of independent foreign policy and multi-alignment."),
      ("US unpredictability", "Shifts in US trade and alliance policy can strain partners.", "US tariffs on Indian goods in 2025 tested India–US ties."),
      ("ASEAN's anxieties", "South-East Asian states fear great-power rivalry eclipsing ASEAN centrality.", "Modi's own stress on ASEAN unity and centrality at the EAS."),
      ("Delivery deficit", "Announcements can outrun implementation and funding.", "Critics' 'Asian NATO' framing feeds Chinese pushback if delivery lags.")
     ])},
    {"h": "Way forward",
     "pts": P([
      ("Regular summitry", "Annual leaders' meetings and a light coordination mechanism keep momentum.", "A two-year gap before Manila shows the cost of irregular meetings."),
      ("Region-first deliverables", "Prioritise HADR, health, connectivity and training for smaller states.", "Quad Vaccine Partnership as an earlier model."),
      ("ASEAN centrality", "Anchor Quad plans in ASEAN-led platforms such as the EAS.", "India's Act East Policy and IPOI."),
      ("Standards for AI and cyber", "Shape norms for trusted, safe and human-centric technology.", "India's AI Impact Summit stress on safe, inclusive AI."),
      ("Resilient supply chains", "Joint processing and stockpiling of critical minerals, not just purchase deals.", "Quad critical mineral deals announced in Manila."),
      ("Clear messaging", "Present the Quad as a provider of public goods, not a military bloc.", "Joint statement: 'a force for good and a partnership of action'.")
     ])},
    {"h": "Conclusion",
     "t": "From Malabar drills to an AI accelerator and a Mumbai business forum, the Quad is widening its agenda, and its credibility now rests on delivery to the Indo-Pacific."}
   ]
  }
 ]
})

ethics.append({
 "id": f"{D}-e1", "area": "intl", "themes": ["g4intl"], "card": f"{D}-01", "src": "IE pp. 1–2",
 "title": "Rules, not force: the Quad's stated ethic",
 "news": "Quad leaders opposed any change to the status quo by force or coercion, and economic coercion through arbitrary export restrictions.",
 "syllabus": "Ethics in international relations; rule of law",
 "link": "Opposing coercion, by arms or by trade, applies the rule of law between nations: small states should not be forced by larger ones. Whether the Quad itself stays a provider of public goods, and not a bloc serving only its members' strategic interests, is the ethical test.",
 "pyq": ["GS4-2026/Q5b", "GS4-2020/Q3b", "GS4-2017/Q13"],
 "question": "\"A rules-based order is the ethical alternative to power politics.\" Discuss with reference to the Quad's stand against coercion in the Indo-Pacific.",
 "keywords": ["Rule of law", "Sovereign equality", "Non-coercion", "Global public goods"]
})


# ---------------------------------------------------------------- 02 East Asia Summit and ASEAN-India summit (page 1, middle)
items.append({
 "id": f"{D}-02",
 "title": "East Asia meet: Modi announces safety initiative for seafarers, flags cyber fraud",
 "section": "Front page",
 "page": "Page 1",
 "where": "Front page, continued on page 2 (Shubhajit Roy)",
 "gs": ["GS2", "GS3", "GS4"],
 "syllabus": "GS2 › Regional groupings (ASEAN, EAS); India's foreign policy (Act East) · GS3 › Security challenges in maritime areas; cyber crime · GS4 › Ethics in international relations",
 "themes": ["groupings", "indopac", "border", "cyber", "g4intl"],
 "summary": "At the EAS in Manila, Modi launched a seafarers' safety initiative and proposed an EAS Cyber Crime Conference at NFSU; at the ASEAN-India summit he proposed a long-term maritime cooperation plan, free e-visas for ASEAN tourists and cooperation on critical minerals.",
 "evolution": [
  ["30 Oct 2026", "ADMM-Plus, Cebu: Rajnath offers counter-terror expertise to ASEAN."],
  ["31 Oct 2026", "G20 foreign ministers: Jaishankar speaks for seafarers and freedom of navigation."],
  ["4 Nov 2026", "Navy frees hijacked vessel Azini off Somalia."],
  ["17 Nov 2026", "EAS: seafarers' safety initiative; ASEAN-India: long-term maritime cooperation plan."]
 ],
 "ideas": [
  I("Seafarers' safety initiative: joint training and emergency response, as ships with Indians on board are attacked in Hormuz and the Black Sea.", "GS3 · Maritime security / GS2 · EAS", "'Our seas are the lifelines of our shared prosperity.'"),
  I("Cyber fraud and online scams named as new cross-border crime; India offers an EAS Cyber Crime Conference at NFSU.", "GS3 · Cyber crime", "Cyber fraud is the new cross-border crime."),
  I("Act East beyond culture: maritime plan, e-visas, cyber forensics training, critical minerals; 'ASEAN unity and centrality' at its heart.", "GS2 · Act East Policy", "From shared heritage to digital, defence and space.")
 ],
 "keywords": [
  ["ASEAN centrality", "ASEAN-led forums as the core of the region's architecture", "GS2 · Act East",
   "India keeps ASEAN centrality at the heart of its Act East Policy."],
  ["Seafarers as frontline workers", "Crew who keep global trade moving and bear the risk of conflict at sea", "GS3 · Maritime security · GS4",
   "Attacks on ships in Hormuz make seafarers frontline workers of global trade."],
  ["Digital watermarking", "Tagging AI-made content to fight deepfakes and misinformation", "GS3 · AI and cyber",
   "Digital watermarking helps the state counter deepfakes without banning AI."]
 ],
 "data": [
  ["Nearly a quarter", "Share of the world's population in India and ASEAN together", "PM Modi, ASEAN-India Summit, Manila", "GS2 · India–ASEAN",
   "India and ASEAN together are nearly a quarter of humanity, PM Modi said at the ASEAN-India Summit."],
  ["100+ initiatives, ~250 quick impact projects, 10,000+ scholarships", "India's people-to-people outreach to ASEAN since 2014", "PM Modi, ASEAN-India Summit, Manila", "GS2 · Act East · Soft power",
   "Since 2014 India has run over 100 people-to-people initiatives and 10,000 skill scholarships for ASEAN, said PM Modi."]
 ],
 "examples": [
  E("Seafarers' safety initiative (EAS, 2026)", "joint training and emergency response at sea", "GS4", "GS3 · Maritime security · GS4 · Duty of care"),
  E("EAS Cyber Crime Conference at NFSU", "India's offer on cross-border cyber fraud", "", "GS3 · Cyber crime"),
  E("Free e-visas for ASEAN tourists", "people-to-people connect under Act East", "", "GS2 · Soft power")
 ],
 "pyqs": [
  ["GS2-2016/Q18", "Economic and strategic dimensions of the Look East Policy."],
  ["GS2-2017/Q20", "Indian diaspora in South-East Asia."],
  ["GS3-2025/Q20", "Maritime security and India's sea trade."],
  ["GS3-2022/Q10", "Maritime security challenges and initiatives."],
  ["GS2-2023/Q20", "IMO's role in maritime safety and security."],
  ["GS3-2020/Q9", "Types of cybercrime and measures."]
 ],
 "trend": {
  "t": "South-East Asia was asked through the Look East Policy (2016) and the diaspora (2017); maritime security moved from piracy (2014) to initiatives (2022), the IMO (2023) and sea trade (2025).",
  "watch": "Maritime security has been asked in 2022, 2023 and 2025, so seafarers' safety and the security of sea lanes is a must-study area; Act East has not been asked directly since 2016 and is due.",
  "focus": ["Act East and ASEAN centrality", "Security of sea lanes and seafarers", "Cross-border cyber fraud", "India–ASEAN in critical minerals and digital"]
 },
 "potential": [
  "\"India's Act East Policy has moved beyond shared culture to maritime, digital and economic security.\" Discuss. (15 marks)",
  "Why has the safety of seafarers become a maritime security concern for India? Suggest measures. (10 marks)"
 ]
})

ethics.append({
 "id": f"{D}-e2", "area": "intl", "themes": ["g4intl", "g4aptitude"], "card": f"{D}-02", "src": "IE pp. 1–2",
 "title": "Those who keep trade moving: the seafarers",
 "news": "With ships carrying Indian crew attacked in Hormuz and the Black Sea, India launched a seafarers' safety initiative at the East Asia Summit.",
 "syllabus": "Ethics in international relations; compassion; duty of care",
 "link": "Global trade rests on seafarers who bear the cost of conflicts they have no part in. A state that protects its workers abroad shows a duty of care, and making it a shared EAS initiative turns national concern into collective responsibility.",
 "pyq": ["GS4-2026/Q5b", "GS4-2015/Q11"],
 "question": "\"The safety of those who keep the world's trade moving is a shared moral responsibility.\" Discuss with reference to attacks on merchant ships.",
 "keywords": ["Duty of care", "Compassion", "Collective responsibility", "Human security"]
})


# ---------------------------------------------------------------- 03 Revamped Agnipath (page 1 Express Special, major)
items.append({
 "id": f"{D}-03",
 "title": "On talks table: Multi-skilling, tech proficiency for 6-year Agniveers",
 "section": "Front page",
 "page": "Page 1",
 "where": "Front page Express Special, continued on page 2 (Amrita Nayak Dutta)",
 "gs": ["GS3", "GS2", "GS1", "GS4"],
 "syllabus": "GS3 › Various security forces and agencies and their mandate · GS2 › Government policies and interventions; skilling and employment of youth · GS1 › Role of women · GS4 › Objectivity and fairness; discipline",
 "themes": ["border", "jobs", "education", "children", "g4workculture"],
 "summary": "Under the revamped Agnipath scheme, the 75% of Agniveers not absorbed after four years will get a two-year extension; HQ IDS is deliberating stringent criteria for absorbing them, favouring multi-skilled, tech-proficient soldiers.",
 "evolution": [
  ["Original scheme", "25% of Agniveers absorbed on merit after four years; the rest exit with a contributory package."],
  ["Nov 2026", "Revamp: the other 75% offered a two-year extension, then a chance to join as regular soldiers on objective criteria."]
 ],
 "ideas": [
  I("Two stages: 25% absorbed after four years; the other 75% get two more years and a second chance at the regular cadre.", "GS3 · Security forces", "The revamp turns a four-year exit into a six-year pathway."),
  I("Preference for multi-skilled Agniveers proficient in technology and weapons, as new systems are inducted.", "GS3 · Defence modernisation", "Modern weapons need tech-ready soldiers."),
  I("Fitness and discipline filters: excellent in physical tests, first-class shot, no Low Medical Category, clean disciplinary record.", "GS3 · Combat readiness / GS4 · Discipline", "A younger, fitter force is the scheme's core aim."),
  I("Objective merit list from unit-level exams and firing tests; a four-option certificate lets each Agniveer state his choice.", "GS2 · Policy design / GS4 · Fairness", "Objective criteria make selection fair and transparent.")
 ],
 "keywords": [
  ["Youthful profile", "Lowering the average age of soldiers for combat readiness", "GS3 · Defence reform",
   "Agnipath aims at a youthful profile of the armed forces."],
  ["Tech-intensive warfare", "Combat shaped by drones, sensors and advanced weapon systems", "GS3 · Defence modernisation",
   "Tech-intensive warfare puts a premium on multi-skilled soldiers."],
  ["Objective selection", "Choosing by measurable criteria, not discretion", "GS4 · Fairness / GS2 · Governance",
   "Objective selection criteria build trust in Agnipath's merit list."]
 ],
 "data": [],
 "examples": [
  E("INS Chilka passing-out", "2,700+ Agniveers, including 142 women, completed training", "GS4", "GS1 · Women in armed forces · GS4 · Gender equality"),
  E("Lifestyle diseases among troops", "a reason for the LMC filter", "", "GS3 · Combat readiness · GS2 · Health")
 ],
 "pyqs": [
  ["GS2-2016/Q16", "Demographic dividend needs a skilled, employable population."],
  ["GS2-2021/Q7", "'Earn while you learn' and vocational skilling."],
  ["GS3-2020/Q20", "Border threats and the role of security forces."],
  ["GS4-2017/Q14", "Discipline: order and subordination, yet counterproductive?"]
 ],
 "trend": {
  "t": "Agnipath itself has not been asked. Security forces appear through their role in border and internal security (2020), and skilling of youth through the demographic dividend (2016) and 'earn while you learn' (2021).",
  "watch": "Defence reform has not been asked directly, so the scheme is best used as an example in answers on security forces, youth employment and skilling.",
  "focus": ["Defence manpower reform and modernisation", "Skilling and second careers for youth", "Women in the armed forces", "Fairness in selection"]
 },
 "potential": [
  "\"Defence manpower reform must balance a youthful, tech-ready force with fairness and career security for soldiers.\" Discuss with reference to the revamped Agnipath scheme. (15 marks)",
  "How can short-service schemes in the armed forces contribute to skilling India's youth? (10 marks)"
 ]
})

ethics.append({
 "id": f"{D}-e3", "area": "work", "themes": ["g4workculture", "g4aptitude"], "card": f"{D}-03", "src": "IE pp. 1–2",
 "title": "Merit, fitness and fairness in the Agnipath merit list",
 "news": "HQ IDS is deliberating objective criteria for absorbing Agniveers after six years: fitness, firing standards, disciplinary record and a unit-level merit test.",
 "syllabus": "Objectivity; fairness; discipline in public service",
 "link": "Clear, measurable criteria protect fairness when only some can be absorbed. But fairness also asks for compassion: the possible exception for battle casualties and service-related disabilities recognises that those injured in duty should not lose out.",
 "pyq": ["GS4-2017/Q14", "GS4-2017/Q7"],
 "question": "\"Objectivity in selection must be tempered with compassion for those injured in service.\" Discuss with reference to the revamped Agnipath scheme.",
 "keywords": ["Objectivity", "Fairness", "Discipline", "Compassion"]
})

edition = {"date": D, "paper": "The Indian Express", "items": items, "ethics": ethics, "essay": essay}
with open(f"editions/{D}.json", "w") as f:
    json.dump(edition, f, ensure_ascii=False, indent=1)
print(f"editions/{D}.json: {len(items)} stories, {len(ethics)} cases, {len(essay)} essay pieces")
