"""Builds editions/2026-11-05.json (The Indian Express, Delhi, 5 Nov 2026).
Run from the repository root:  python3 research/editions/ie_20261105.py && node tools/build.js
"""
import json

D = "2026-11-05"
P = lambda pts: [{"k": k, "t": t, "ex": ex} for k, t, ex in pts]

items = []

# ---------------------------------------------------------------- 01 US midterms
items.append({
 "id": f"{D}-01",
 "title": "America delivers stinging rebuke to Trump: Democrats sweep Congress",
 "section": "Front page",
 "page": "Page 1",
 "where": "Front page (Reuters; C Raja Mohan; Shubhajit Roy), Explained page 12 (Shubhajit Roy; Ravi Dutta Mishra) and editorial, page 10",
 "gs": ["GS2", "GS4"],
 "syllabus": "GS2 › Comparison of the Indian constitutional scheme with that of other countries (separation of powers, checks and balances) · GS2 › Effect of policies and politics of developed countries on India's interests; India–US relations; Indian diaspora · GS4 › Accountability in public life",
 "themes": ["exec", "powers", "diaspora"],
 "summary": "Democrats won control of both the US Senate (at least 54–44) and the House in the midterms, a rebuke to President Trump driven by the cost of living, the Iran war and corruption; Delhi is 'cautiously optimistic'.",
 "evolution": [],
 "ideas": [
  ["Democracy corrects itself: voters chose issues (soaring fuel prices, an intractable Iran war, perceived corruption) over identity, and handed a check to a President who had assumed extra-large powers.",
   "GS2 · Comparative polity / accountability",
   "The 2026 US midterms show the ballot box restoring checks and balances when the executive outgrows its limits."],
  ["Checks built into the presidential model: the House can impeach and the Senate tries; the Senate confirms appointments and approves treaties by a two-thirds majority; the President can veto bills.",
   "GS2 · Separation of powers (India vs USA)",
   "In the US, a hostile Congress checks the President through funding, confirmations, treaties and impeachment, not through a no-confidence vote."],
  ["Limits of those checks: Trump has issued 166 executive orders in two years and used a national-interest waiver to nullify Russia sanctions passed with veto-proof majorities, so expect 'rule by executive decree'.",
   "GS2 · Executive power",
   "Executive orders and waivers show how a determined President can bypass even a Congress controlled by the opposition."],
  ["Foreign policy has domestic costs: the US–Israel war on Iran raised fuel prices and tariffs acted as a tax on Americans; Vice President Vance said 'the reason we lost is the war'.",
   "GS2 · Effect of policies of developed countries",
   "The midterms show that wars and tariffs abroad are paid for by voters at home, and voters punish them."],
  ["For India: wrap up the long-pending trade deal and cooperation in energy, defence and technology now, but engage 'the many Americas' (Congress, business, campuses, think tanks, diaspora) as in the 1990s–2000s; expect closer scrutiny of human rights.",
   "GS2 · India–US relations / Diaspora",
   "India must build bipartisan friends across Congress, business and the diaspora, as it did for the 2008 nuclear deal, not bet on one President."]
 ],
 "keywords": [
  ["Lame duck", "An office-holder with limited time and weakened power, often freer to act abroad",
   "GS2 · Executive power",
   "A lame-duck President hemmed in at home often turns to foreign policy, as Delhi now expects of Trump."],
  ["Divided government", "When the presidency and Congress are controlled by different parties",
   "GS2 · Comparative polity",
   "Divided government is the presidential system's built-in check, possible because the executive does not sit in the legislature."],
  ["War Powers Resolution", "A US Congress measure directing the President to end hostilities without its approval",
   "GS2 · Separation of powers",
   "Congress passed a War Powers Resolution on Iran in June 2026, yet the war went on, showing the limits of legislative checks."],
  ["Section 301 investigation", "US trade law route to impose tariffs on 'unfair' practices such as overcapacity",
   "GS2 · India–US trade",
   "The USTR's Section 301 overcapacity probe can reset tariffs on India whatever Congress thinks."],
  ["Rule by executive decree", "Governing through executive orders instead of legislation",
   "GS2 · Executive power",
   "Rule by executive decree weakens deliberation, which is why parliamentary checks on ordinances matter in India too."]
 ],
 "data": [
  ["166 executive orders in two years", "Issued by Trump in his second term, against 162 by Biden in a full term, 42 by Bush and 35 by Obama",
   "Mohan Kumar, former Indian ambassador (in IE Explained)",
   "GS2 · Executive power",
   "Trump issued 166 executive orders in two years, more than Biden's 162 in a full term, a sign of rule by decree."]
 ],
 "examples": [
  ["India–US civil nuclear agreement, 2008", "Won through bipartisan support in Congress, not just leader-to-leader deals", "",
   "GS2 · India–US relations",
   "The 2008 nuclear deal shows that lasting India–US gains need bipartisan backing in Congress, not just presidential goodwill."],
  ["'The reason we lost is the war'", "Vice President Vance blames the Iran war for the defeat", "",
   "GS2 · Foreign policy and domestic politics",
   "Vance's admission that the Iran war cost the Senate shows how foreign wars become domestic liabilities."],
  ["Legislatures that resemble society", "First Muslim senator; Georgia, Florida and Wisconsin elect their first Black governors; first Latino governors in Texas and California; first Native American governor in New Mexico", "GS4",
   "GS2 · Representative democracy · GS4 · Inclusion",
   "In 2026 American voters made their legislatures look more like their society: representative democracy at its best."]
 ],
 "pyqs": [
  ["GS2-2026/Q14", "Separation of powers in India vs the US presidential model; PM vs US President."],
  ["GS2-2025/Q3", "Pardon power of the President in India and the USA; limits; preemptive pardons."],
  ["GS2-2018/Q13", "India and the USA: basic tenets of the two political systems."],
  ["GS2-2019/Q1", "Indian Constitution: checks and balances rather than strict separation of powers."],
  ["GS2-2019/Q20", "Friction in India–US ties: Washington yet to find India a place in its global strategy."],
  ["GS2-2020/Q10", "Indian diaspora's role in the politics and economy of America and Europe."]
 ],
 "trend": {
  "t": "Comparative questions on India and the USA have moved from broad tenets of the two systems (2018) to one institution or value at a time: equality (2021), secularism (2024), the pardon power (2025) and separation of powers with PM vs President (2026). India–US relations questions shifted from friction over India's place in US strategy (2019) to defence deals and the diaspora's political role (2020).",
  "watch": "An India–USA comparison has been asked in 2018, 2021, 2024, 2025 and 2026, so it is a must-study topic. Each question picks one power or institution and asks how it works in both countries, so know the US checks (veto, impeachment, Senate confirmation, treaties) precisely.",
  "focus": [
   "Separation of powers and checks on the executive in both systems",
   "Specific powers: veto, pardon, impeachment, executive orders vs ordinances",
   "India–US partnership beyond leaders: Congress, business, diaspora",
   "Effect of US domestic politics (tariffs, visas, wars) on India"
  ]
 },
 "potential": [
  "Compare the mechanisms that check executive power in the presidential system of the USA and the parliamentary system of India. Which is more effective? (15 marks)",
  "\"India must engage the many Americas, not just the White House.\" In the light of the 2026 US midterm elections, discuss the changing nature of India–US relations. (15 marks)",
  "How do US policies on tariffs and H-1B visas affect India's interests? What should India's response be? (10 marks)"
 ],
 "practice": [{
  "q": "Compare the mechanisms that check executive power in the presidential system of the USA and the parliamentary system of India. Which is more effective?",
  "marks": 15, "words": 250,
  "parts": ["Introduction", "Checks in the US presidential system", "Checks in the Indian parliamentary system", "Which is more effective", "Way forward", "Conclusion"],
  "answer": [
   {"h": "Introduction", "t": "In November 2026 American voters handed both houses of Congress to the opposition Democrats, placing 'guardrails' on President Trump; India checks its executive through a different, fused design."},
   {"h": "Checks in the US presidential system", "pts": P([
    ("Rigid separation of powers", "The President is elected separately and is not a member of Congress, so the legislature can be controlled by a rival party (divided government).", "Democrats control the Senate (at least 54–44) and the House from January 2027."),
    ("Power of the purse", "Congress controls funding, so it can cut money for policies or wars it opposes.", "Democrats may try to stop funding for the Iran war."),
    ("Senate confirmation and treaties", "The Senate confirms Cabinet members, federal judges and other appointments and approves treaties by a two-thirds majority.", "A Democratic Senate can block Supreme Court nominees."),
    ("Impeachment", "The House can impeach the President and the Senate conducts the trial.", "Lawmakers may seek the impeachment of Defense Secretary Hegseth."),
    ("Judicial review", "Courts can strike down executive action that exceeds the law.", "Some of Trump's tariffs were ruled an illegal tax by US courts."),
    ("Fixed elections and term limits", "Midterms every two years act as a referendum; the Constitution bars a third term.", "The 2026 midterms as a 'referendum' on Trump.")
   ])},
   {"h": "Checks in the Indian parliamentary system", "pts": P([
    ("Collective responsibility", "The Council of Ministers is collectively responsible to the Lok Sabha (Article 75(3)) and must resign if it loses a no-confidence motion.", "The fall of the Vajpayee government by one vote in 1999."),
    ("Daily legislative scrutiny", "Question Hour, debates and motions make ministers answer in Parliament every sitting day.", "Zero Hour and calling-attention motions."),
    ("Committees and the CAG", "Parliamentary committees and the CAG examine spending and policy in detail.", "The Public Accounts Committee examines CAG audit reports."),
    ("Judicial review and basic structure", "Courts can strike down laws and executive acts, and even constitutional amendments that violate the basic structure.", "Kesavananda Bharati (1973)."),
    ("Checks on ordinances", "An ordinance lapses six weeks after Parliament reassembles unless approved (Article 123).", "Re-promulgation of ordinances held a fraud on the Constitution (Krishna Kumar Singh, 2017)."),
    ("Federalism and the Rajya Sabha", "States and a Rajya Sabha without a ruling majority can slow the Union executive.", "Bills held up in the Rajya Sabha before the ruling party gained a majority.")
   ])},
   {"h": "Which is more effective", "pts": P([
    ("US checks are structural", "Because the executive and legislature are separate, a rival Congress can block laws, appointments and funds outright.", "Trump's 'VETO' cap shows a stand-off of equals."),
    ("But US checks invite gridlock and bypass", "A blocked President governs by executive order and waivers, and gridlock can stall the budget itself.", "166 executive orders in two years; waiver used to nullify Russia sanctions."),
    ("Indian checks are continuous", "A government faces Parliament every day and can fall at any time, not only at fixed elections.", ""),
    ("But Indian checks weaken with a strong majority", "Fusion of executive and legislature, the anti-defection law and whips let a majority government dominate the House.", "The Tenth Schedule binds MPs to the party line."),
    ("Declining deliberation in India", "Fewer sittings and less committee scrutiny of bills dilute oversight.", "")
   ])},
   {"h": "Way forward", "pts": P([
    ("Strengthen committees", "Refer more bills to department-related standing committees as a rule.", ""),
    ("Fixed minimum sittings", "Guarantee enough sitting days for real scrutiny.", ""),
    ("Relax the anti-defection law", "Limit whips to confidence and money votes so MPs can scrutinise freely.", ""),
    ("Opposition role", "Give the Opposition more space through a shadow-cabinet style system and chairs of key committees.", ""),
    ("Limit ordinances", "Use ordinances only in genuine urgency, as courts have warned.", ""),
    ("Learn selectively", "Borrow US-style confirmation hearings for key regulators without importing gridlock.", "")
   ])},
   {"h": "Conclusion", "t": "The US system checks power by dividing it, India by making it answerable every day; neither works without an alert electorate, as the 2026 midterms show."}
  ]
 }]
})

# ---------------------------------------------------------------- 02 two-child norm
items.append({
 "id": f"{D}-02",
 "title": "2-child norm has lost relevance: SC refers 2003 ruling to larger bench",
 "section": "Nation",
 "page": "Page 9",
 "where": "Nation, page 9 (Amaal Sheikh)",
 "gs": ["GS2", "GS1", "GS4"],
 "syllabus": "GS2 › Devolution of powers to local levels (panchayat elections); Fundamental rights (Articles 14, 21); Judiciary · GS1 › Population and associated issues; demographic transition and ageing · GS4 › Liberty and dignity of the individual",
 "themes": ["localgov", "rights", "demography", "judiciary"],
 "summary": "The Supreme Court referred Javed vs State of Haryana (2003), which upheld disqualifying people with more than two children from panchayat polls, to a larger bench, saying such laws have 'lost their relevance' as fertility has fallen to 1.9.",
 "evolution": [
  ["28 Oct 2026", "Keralam's ageing population needs a 'silver economy', not just welfare (demography thread)."]
 ],
 "ideas": [
  ["The foundation has crumbled: the law rested on the fear of overpopulation, but the Total Fertility Rate has fallen from 3 in 2003 to 1.9, below the replacement level of 2.1.",
   "GS1 · Population",
   "With fertility at 1.9, below replacement, the overpopulation fear behind two-child laws no longer holds."],
  ["Reproductive autonomy: whether and how many children to have is 'a decision of the most intimate and personal character'; population control cannot by itself justify coercive interference, and any restriction must be reasonable.",
   "GS2 · Article 21 (privacy, liberty)",
   "The Court treats the choice to have children as part of personal liberty, so coercive population laws must pass a test of reasonableness."],
  ["Exclusion from democracy: disqualification shuts out an entire class of citizens on grounds with little rational connection to their capacity to hold public office, forcing a choice between children and participation.",
   "GS2 · Panchayati Raj / Article 14",
   "Barring parents of three from panchayat polls has no rational nexus with fitness for office and narrows grassroots democracy."],
  ["The coming transition: India's population is not yet declining, but sub-replacement fertility will mean an older population and a shrinking working-age share; it would be 'dangerously complacent' to ignore this.",
   "GS1 · Demographic transition and ageing",
   "India must plan for ageing now: sub-replacement fertility today means fewer workers per elderly person tomorrow."],
  ["Law must respond to changed facts: Javed relied on the National Population Policy 2000 target, since surpassed; China ended its one-child policy in 2015 and allowed three children in 2021, yet births did not rise.",
   "GS2 · Judiciary (precedent and living Constitution)",
   "China's failed reversal shows fertility cannot be calibrated at will, so laws built on yesterday's demography must be revisited."]
 ],
 "keywords": [
  ["Replacement-level fertility", "TFR of 2.1, at which a generation exactly replaces itself",
   "GS1 · Population",
   "At a TFR of 1.9, India is already below replacement-level fertility."],
  ["Reproductive autonomy", "An individual's right to decide freely on bearing children",
   "GS2 · Article 21 / GS4 · Liberty",
   "Reproductive autonomy, as part of Article 21, limits how far the state can push population goals."],
  ["Rational nexus", "The test that a classification must be linked to the law's object",
   "GS2 · Article 14",
   "The number of children has no rational nexus with the capacity to hold panchayat office."],
  ["Demographic winter", "A phase of very low fertility leading to an ageing, shrinking population",
   "GS1 · Demography",
   "China's experience warns that a demographic winter, once begun, is hard to reverse."],
  ["Coercive population control", "Using penalties to force smaller families",
   "GS1 · Population policy / GS4 · Means and ends",
   "Coercive population control trades individual liberty for targets that development achieves better."]
 ],
 "data": [
  ["TFR 1.9 (replacement 2.1)", "India's Total Fertility Rate, down from 3 in 2003", "Supreme Court bench (Narasimha and Aradhe, JJ), via IE",
   "GS1 · Population",
   "India's TFR has fallen from 3 in 2003 to 1.9, below the replacement level of 2.1, as the Supreme Court noted in 2026."]
 ],
 "examples": [
  ["China's one-child policy reversal", "Ended in 2015, three children allowed in 2021, but births did not rise", "",
   "GS1 · Population policy · GS2 · Comparative",
   "China shows that fertility, once pushed down, cannot be raised at will: population policy needs foresight, not coercion."],
  ["National Population Policy 2000", "Aimed at replacement-level TFR by 2010; the target has been reached and surpassed", "",
   "GS1 · Population · GS2 · Policy evaluation",
   "NPP 2000's goal has been surpassed, proving that development and voluntary measures, not penalties, lowered fertility."],
  ["Court revisits its own precedent", "Bench refers Javed (2003) to a larger bench as 'present realities' have changed", "GS4",
   "GS2 · Judiciary · GS4 · Responsiveness",
   "By revisiting Javed, the Court shows that institutions must be 'most responsive to change', not prisoners of precedent."]
 ],
 "pyqs": [
  ["GS1-2026/Q19", "Challenges of demographic transition in contemporary India."],
  ["GS1-2024/Q7", "Concept of a 'demographic winter'; is the world moving towards it?"],
  ["GS1-2019/Q9", "\"Empowering women is the key to control population growth.\""],
  ["GS1-2015/Q9", "Is population the cause of poverty or poverty the cause of population growth?"],
  ["GS2-2023/Q11", "The Constitution as a living instrument: expanding horizons of the right to life and liberty."],
  ["GS2-2017/Q1", "Local self-government has not proved an effective instrument of governance."]
 ],
 "trend": {
  "t": "Population questions began with population as a problem to control (poverty–population, 2015; women's empowerment for population control, 2019; population education, 2021). The frame has since turned: a 'demographic winter' (2024) and the challenges of demographic transition (2026). Rights questions keep testing Article 21's expanding scope against specific laws.",
  "watch": "Demography was asked in 2024 and 2026 as a challenge of ageing and transition, not overpopulation, so it is a must-study area. Expect questions that link falling fertility to the economy, the elderly and policy choices.",
  "focus": [
   "Demographic transition: falling TFR, ageing, regional divergence",
   "From population control to population management",
   "Article 21: personal liberty and reproductive choice",
   "Qualifications for local body elections and grassroots democracy"
  ]
 },
 "potential": [
  "\"India's population policy must shift from controlling numbers to managing a demographic transition.\" Discuss. (10 marks)",
  "Examine the constitutional validity of laws that disqualify persons with more than two children from contesting local body elections. (10 marks)",
  "What are the social and economic implications of fertility falling below replacement level in India? (15 marks)"
 ],
 "practice": [{
  "q": "\"India's population policy must shift from controlling numbers to managing a demographic transition.\" Discuss.",
  "marks": 10, "words": 150,
  "parts": ["Introduction", "Why the shift is needed", "Limits and concerns", "Way forward", "Conclusion"],
  "answer": [
   {"h": "Introduction", "t": "In November 2026 the Supreme Court said two-child laws have 'lost their relevance' as India's fertility rate has fallen to 1.9, below the replacement level of 2.1."},
   {"h": "Why the shift is needed", "pts": P([
    ("Fertility below replacement", "The goal of population control has been met; the risk now is an ageing population and a shrinking working-age share.", "NPP 2000 target of replacement-level TFR surpassed."),
    ("Ageing society", "The share of the elderly is set to double, raising needs for pensions, health and care.", "UNFPA India Ageing Report 2023: elderly to exceed 20% by 2050."),
    ("Narrowing demographic window", "The dividend lasts only while workers outnumber dependants, so jobs and skills must come quickly.", ""),
    ("Rights over coercion", "Penal laws violate reproductive autonomy and exclude citizens from democracy.", "Two-child bars on panchayat candidates."),
    ("Regional divergence", "Southern states have aged earlier while some northern states still have higher fertility, so one policy cannot fit all.", "Kerala and Tamil Nadu below replacement; Bihar above it (NFHS-5)."),
    ("Lessons from China", "Fertility once pushed down is hard to raise again.", "Three-child policy (2021) did not lift births.")
   ])},
   {"h": "Limits and concerns", "pts": P([
    ("Population is still large", "India's population is not yet declining, so pressure on resources continues for decades.", ""),
    ("High-fertility pockets", "Some states and groups still need family planning and maternal health services.", ""),
    ("Unmet need for contraception", "Women's choices remain constrained, so services must continue.", ""),
    ("Federal sensitivities", "Population shares shape delimitation and fiscal transfers, so policy shifts affect Centre–state equations.", "")
   ])},
   {"h": "Way forward", "pts": P([
    ("Repeal penal two-child laws", "Remove disqualifications from local body elections.", ""),
    ("Invest in the young", "Education, skills and jobs to reap the remaining dividend.", ""),
    ("Prepare for ageing", "Pensions, geriatric care and a silver economy.", "Keralam's elderly rights law (2026)."),
    ("Support families", "Childcare and women's work so that choice, not constraint, shapes family size.", ""),
    ("State-specific plans", "Differentiated policies for high- and low-fertility states.", "")
   ])},
   {"h": "Conclusion", "t": "India has won the battle of numbers; the next task is to turn people of every age into its strength, through rights, not restrictions."}
  ]
 }]
})

# ---------------------------------------------------------------- 03 safe harbour
items.append({
 "id": f"{D}-03",
 "title": "Rethink on 'safe harbour': Govt looks at scrapping legal immunity for social media platforms",
 "section": "Front page",
 "page": "Page 1",
 "where": "Front page, continued on page 2 (Soumyarendra Barik)",
 "gs": ["GS3", "GS2", "GS4"],
 "syllabus": "GS3 › Challenges to internal security through communication networks; role of media and social networking sites · GS2 › Government policies and interventions; Parliament and legislation (IT Act) · GS4 › Ethics of technology; accountability",
 "themes": ["cyber", "digital", "rights"],
 "summary": "The IT Ministry has begun discussing a proposal to withdraw 'safe harbour' (Section 79, IT Act) from social media platforms whose algorithms decide what users see, keeping it only for services that merely carry content.",
 "evolution": [
  ["29 Oct 2026", "To counter AI misinformation, invest in skills and literacy (misinformation thread)."]
 ],
 "ideas": [
  ["A narrower shield: the government is exploring restricting safe harbour to services that merely transmit information (ISPs, telecom providers, peer-to-peer messaging) rather than social media that actively determine what users see.",
   "GS3 · Regulation of intermediaries",
   "India may limit safe harbour to mere carriers of content, ending blanket immunity for platforms that curate."],
  ["From carrier to curator: algorithms that boost engagement and virality mean platforms 'definitely determine what gets shown' and are no longer passive carriers.",
   "GS3 · Social media",
   "Once algorithms decide what millions see, a platform's role looks less like a postman and more like a publisher."],
  ["A business model at stake: safe harbour let Meta, Google and X build huge businesses on user content without a publisher's liability, so withdrawal could set up a major confrontation with tech companies and civil society.",
   "GS3 · Digital economy",
   "Safe harbour underpins the platform economy, so changing it affects innovation and investment, not only content."],
  ["Due process: immunity is conditional on due diligence, and stripping it would require amending the IT Act, 2000 through Parliament; talks are still exploratory.",
   "GS2 · Legislation / rule of law",
   "Any change to platform immunity must come through Parliament, with debate, not by executive notification alone."],
  ["Amplification without accountability: the core concern is that recommendation systems can shape public discourse while staying insulated from liability for what they amplify.",
   "GS3 · Internal security (disinformation) / GS4 · Accountability",
   "Platforms that profit from amplifying content must share responsibility for the harm that amplification causes."]
 ],
 "keywords": [
  ["Safe harbour", "Legal protection shielding intermediaries from liability for third-party content (Section 79, IT Act)",
   "GS3 · Cyber regulation",
   "Safe harbour under Section 79 protects platforms only so long as they observe due diligence."],
  ["Mere conduit", "A service that only transmits content without selecting or modifying it",
   "GS3 · Intermediary liability",
   "The proposal would keep immunity for mere conduits like telecom providers but not for curating platforms."],
  ["Algorithmic amplification", "Recommendation systems pushing some content to more users for engagement",
   "GS3 · Social media / disinformation",
   "Algorithmic amplification, not the post itself, is what turns a falsehood into a public-order threat."],
  ["Chilling effect", "When fear of liability makes speakers or platforms censor lawful content",
   "GS2 · Article 19 / GS3",
   "Removing immunity risks a chilling effect, as platforms may over-remove lawful speech to avoid liability."],
  ["Intermediary due diligence", "Obligations platforms must meet to keep safe harbour",
   "GS3 · Cyber regulation",
   "Calibrated due diligence, scaled to a platform's reach, can ensure accountability without abolishing safe harbour."]
 ],
 "data": [],
 "examples": [
  ["Section 79 of the IT Act, 2000", "Conditional immunity for intermediaries, now under review", "",
   "GS3 · Cyber regulation · GS2 · Legislation",
   "Section 79's safe harbour is the legal base of India's platform economy, and its review shows regulation catching up with algorithms."],
  ["IT Ministry summons Meta's global executives (July 2026)", "Government examining how platforms decide reach and visibility", "",
   "GS3 · Platform governance",
   "Summoning Meta's top policy executives shows India asserting regulatory sovereignty over global platforms."]
 ],
 "pyqs": [
  ["GS3-2026/Q9", "Fake news and disinformation as a threat to internal security; amendments to the IT Intermediary Guidelines."],
  ["GS3-2024/Q20", "Social media and encrypted messaging as security challenges; measures and remedies."],
  ["GS3-2016/Q20", "Use of internet and social media by non-state actors for subversive activities; guidelines."],
  ["GS4-2025/Q1a", "Ethical dilemmas raised by social media in the digital age."]
 ],
 "trend": {
  "t": "Social media questions began with misuse by non-state actors and radicalisation (2015, 2016), moved to the security implications of social media and encrypted messaging (2024), and reached the regulatory framework itself: the IT Intermediary Guidelines and disinformation (2026). GS4 (2025) asked about the ethical dilemmas of social media.",
  "watch": "Social media regulation was asked in 2024 and 2026 in GS3 and in 2025 in GS4, so it is a must-study area. Questions now ask about the rules for platforms, not just the threats.",
  "focus": [
   "Intermediary liability: Section 79, IT Rules, due diligence",
   "Disinformation and algorithmic amplification",
   "Free speech (Article 19) vs accountability",
   "Ethics of platforms and users"
  ]
 },
 "potential": [
  "Should social media platforms continue to enjoy 'safe harbour' protection for user content? Critically examine in the Indian context. (15 marks)",
  "\"Algorithms have turned social media platforms from carriers into curators of content.\" Discuss the implications for regulation in India. (10 marks)"
 ],
 "practice": [{
  "q": "Should social media platforms continue to enjoy 'safe harbour' protection for user content? Critically examine in the Indian context.",
  "marks": 15, "words": 250,
  "parts": ["Introduction", "Case for retaining safe harbour", "Case for restricting it", "Way forward", "Conclusion"],
  "answer": [
   {"h": "Introduction", "t": "In November 2026 the IT Ministry began discussing withdrawing Section 79 safe harbour from social media platforms whose algorithms determine what users see."},
   {"h": "Case for retaining safe harbour", "pts": P([
    ("Free expression", "Without immunity, platforms may over-remove lawful posts to avoid liability, chilling speech under Article 19(1)(a).", "Shreya Singhal (2015) required takedowns only on court or government order."),
    ("Scale makes pre-screening impossible", "Billions of posts cannot be checked in advance without heavy automated censorship.", ""),
    ("Innovation and startups", "Liability would favour only the largest firms that can afford compliance, hurting Indian startups.", ""),
    ("Digital economy", "User-generated content drives creators, small businesses and digital services.", "Safe harbour let Meta, Google and X scale in India."),
    ("Conditional, not absolute", "Immunity already depends on due diligence and grievance redress under the IT Rules.", "IT Rules, 2021."),
    ("Risk of state overreach", "Wide liability can be used to pressure platforms against criticism.", "")
   ])},
   {"h": "Case for restricting it", "pts": P([
    ("Curators, not carriers", "Algorithms that push content for engagement make platforms active editors.", "Government view: platforms 'no longer simple carriers'."),
    ("Disinformation and public order", "Amplified fake news has triggered violence and threatens internal security.", "Deepfakes during elections."),
    ("Profit without responsibility", "Platforms earn from virality yet escape liability for its harms.", ""),
    ("Child safety and online harms", "Harmful content reaches minors through recommendation feeds.", "New York's law on chatbots and children (IE, 4 Nov 2026)."),
    ("Weak compliance", "Slow takedowns and opaque moderation frustrate victims.", ""),
    ("Global shift", "Other jurisdictions now impose duties on very large platforms.", "EU Digital Services Act.")
   ])},
   {"h": "Way forward", "pts": P([
    ("Graded obligations", "Duties scaled to a platform's size and reach rather than one rule for all.", ""),
    ("Algorithmic transparency", "Audits of recommendation systems and disclosure of how content is ranked.", ""),
    ("Through Parliament", "Amend the IT Act after consultation, not by executive rules alone.", "Proposed Digital India Act."),
    ("Due process for takedowns", "Reasoned orders and appeal to protect lawful speech.", ""),
    ("Independent oversight", "An expert regulator rather than direct government control.", ""),
    ("Digital literacy", "Equip users to recognise misinformation.", "")
   ])},
   {"h": "Conclusion", "t": "Safe harbour should be narrowed, not abolished: platforms that amplify must be accountable, but speech must not become the casualty of that accountability."}
  ]
 }]
})

# ---------------------------------------------------------------- 04 COP31
items.append({
 "id": f"{D}-04",
 "title": "Look beyond old climate fault lines / Three steps COP should take for tangible outcomes",
 "section": "Editorial",
 "page": "Pages 10–11",
 "where": "Editorial page, page 10 (editorial) and Ideas page, page 11 (Sumit Prasad, CEEW)",
 "gs": ["GS3", "GS2", "GS4"],
 "syllabus": "GS3 › Conservation, environmental degradation (climate change, UNFCCC) · GS2 › Important international institutions and fora; India and the Global South · GS4 › Environmental ethics; climate justice",
 "themes": ["climate", "intl", "groupings", "energy"],
 "summary": "Ahead of COP31 in Antalya, India has not committed to the '35 by 35' global electrification target, citing sovereignty and poverty eradication; the CEEW asks the 'COP of implementation' to show reports, finance and a scorecard.",
 "evolution": [
  ["27 Oct 2026", "First Loss and Damage payout goes to Nepal: climate justice needs quicker compensation."],
  ["2 Nov 2026", "Energy security depends on whether and how India electrifies (electrification thread)."]
 ],
 "ideas": [
  ["National circumstances first: India is yet to back the '35 by 35' target (raise electricity's share of global energy use from 23% in 2023 to 35% by 2035), saying every country must weigh sovereignty and poverty eradication; developing countries face weaker grids and stressed utilities.",
   "GS3 · Climate change / GS2 · India's stand in climate fora",
   "India resists one-size targets like '35 by 35' because weak grids and poverty make national circumstances decisive."],
  ["An unfair critique: India is among a small group making steady progress on Paris commitments; calling its early delivery a sign of low ambition ignores bottlenecks in developed countries and the Global North's failure on finance and technology.",
   "GS3 · Paris Agreement / climate justice",
   "India's early delivery on Paris targets shows good faith, while the North's finance shortfall remains the real ambition gap."],
  ["Climate action is in India's own interest: greater urgency serves its development and strategy, and lets it lead the Global South through the International Solar Alliance and the Coalition for Disaster Resilient Infrastructure.",
   "GS2 · India-led institutions / Global South",
   "Through the ISA and CDRI, India can turn climate action into leadership of the Global South."],
  ["'Implementation COP' risks becoming a slogan: claimed at COP27, COP30 and COP31; 2035 NDCs were due in February 2025 and second transparency reports by December 31, yet by late October only Colombia and Turkey had filed.",
   "GS2 · UNFCCC process",
   "A COP can claim to be about implementation only if parties report on time; by late October only two had filed transparency reports."],
  ["Three steps for credibility: every party files its transparency report on time; developed countries report finance delivered and promised; the presidency publishes an annual scorecard for its voluntary 2035 targets and Climate Implementation Bridge.",
   "GS2 · Global governance / GS3 · Climate finance",
   "Scorecards for voluntary pledges and reports on delivered finance would turn COP summits from promises into accountability."]
 ],
 "keywords": [
  ["Biennial Transparency Report (BTR)", "Report under the Paris Agreement on emissions and progress against NDCs",
   "GS3 · Climate governance",
   "Timely Biennial Transparency Reports are the evidence an 'implementation COP' needs."],
  ["Action Agenda", "The voluntary, non-negotiated track where presidencies rally pledges from states and non-state actors",
   "GS2 · Climate diplomacy",
   "The Action Agenda gains traction fast but delivers little without a scorecard."],
  ["National circumstances", "Paris principle that each country's targets reflect its capacities and development needs",
   "GS3 · Climate justice",
   "India cites national circumstances to keep its sovereign right to set its own energy mix."],
  ["Electrification", "Shifting energy use from fuels to electricity, e.g. EVs and electric heating",
   "GS3 · Energy transition",
   "Electrification helps decarbonise only when the grid itself is clean and reliable."],
  ["Climate finance credibility", "Whether developed countries deliver the money they promise",
   "GS3 · Climate finance / GS2",
   "For developing countries, climate finance delivered, not pledged, is the barometer of global good faith."]
 ],
 "data": [
  ["About 5% of 203", "Cooperative climate initiatives launched since 2015 that have met their goals",
   "Council on Energy, Environment and Water (CEEW)",
   "GS3 · Climate governance",
   "Only about 5% of 203 cooperative climate initiatives since 2015 met their goals (CEEW): pledges outrun delivery."],
  ["23% → 35%", "Electricity's share of global energy use in 2023, and the '35 by 35' target for 2035",
   "COP31 co-presidencies' proposal (Turkey and Australia), via IE",
   "GS3 · Energy transition",
   "COP31's '35 by 35' plan would raise electricity's share of global energy use from 23% to 35% by 2035."]
 ],
 "examples": [
  ["International Solar Alliance and CDRI", "India-led institutions that can anchor Global South leadership", "",
   "GS2 · International institutions · GS3 · Climate",
   "The ISA and CDRI give India institutional tools to lead climate action for the Global South."],
  ["Turkey files its transparency report early", "Host country sets an example before COP31", "GS4",
   "GS2 · Climate diplomacy · GS4 · Leading by example",
   "Turkey filing its BTR early shows that a presidency's credibility comes from doing first what it asks of others."],
  ["Turkey–Australia shared presidency", "Turkey hosts and leads the Action Agenda; Australia steers negotiations", "",
   "GS2 · Global governance",
   "The COP31 split between Turkey and Australia shows compromise solving a hosting deadlock."]
 ],
 "pyqs": [
  ["GS3-2025/Q18", "Review of India's Paris commitments, how COP26 strengthened them, and the first NDC."],
  ["GS2-2022/Q20", "'Clean energy is the order of the day': India's changing climate policy in international fora."],
  ["GS3-2021/Q17", "Major outcomes of COP26 and India's commitments."],
  ["GS3-2021/Q6", "Purpose of the Green Grid Initiative at COP26 and its origin in the ISA."],
  ["GS3-2014/Q13", "Carbon credits and CDM under the UNFCCC despite the slide in their value."],
  ["GS3-2017/Q17", "How India, its Himalayan and coastal states will be affected by climate change."]
 ],
 "trend": {
  "t": "Climate questions moved from mechanisms (carbon credits and CDM, 2014) and impacts on India (2017) to COP outcomes and India's commitments (COP26 and the Green Grid, 2021), India's stance in international fora (2022) and a review of Paris commitments and NDCs (2025).",
  "watch": "COPs and the Paris Agreement were asked in 2021, 2022 and 2025, so they are a must-study area. Questions ask what a COP decided, what India committed and how India positions itself, so track NDCs, finance and India-led initiatives.",
  "focus": [
   "India's NDCs and progress (non-fossil capacity, emissions intensity, net zero 2070)",
   "Climate finance and transparency under the Paris Agreement",
   "India-led initiatives: ISA, CDRI, Green Grid",
   "Global South and climate justice (CBDR-RC)"
  ]
 },
 "potential": [
  "\"Climate summits have shifted from negotiation to implementation, but delivery lags.\" Discuss the challenges in making COPs deliver and the role India can play. (15 marks)",
  "Should India accept global sectoral targets such as raising electricity's share in energy use? Examine with reference to national circumstances. (10 marks)",
  "How can India use the International Solar Alliance and CDRI to lead the Global South on climate action? (10 marks)"
 ],
 "practice": [{
  "q": "\"Climate summits have shifted from negotiation to implementation, but delivery lags.\" Discuss the challenges in making COPs deliver and the role India can play.",
  "marks": 15, "words": 250,
  "parts": ["Introduction", "Challenges in delivery", "India's role", "Way forward", "Conclusion"],
  "answer": [
   {"h": "Introduction", "t": "Turkey has branded COP31 in Antalya the 'COP of Implementation', a label also claimed at COP27 and COP30, yet only about 5% of 203 cooperative climate initiatives since 2015 have met their goals (CEEW)."},
   {"h": "Challenges in delivery", "pts": P([
    ("Late national plans", "Many parties have not submitted their 2035 NDCs, though they were due in February 2025.", "COP31's president still urging submissions."),
    ("Thin transparency", "Second Biennial Transparency Reports are due by December 31, but few have been filed.", "By late October only Colombia and Turkey had filed."),
    ("Finance gap", "Developed countries have repeatedly missed finance and technology commitments, eroding trust.", "The $100 billion goal was met only years late."),
    ("Voluntary pledges without scorecards", "Action Agenda pledges are consensus-free and unenforced.", "COP31's voluntary 2035 targets."),
    ("No enforcement", "UNFCCC forums share progress but none enforces delivery.", "Facilitative, Multilateral Consideration of Progress."),
    ("North–South distrust", "The North presses the South on NDCs while the South sees scrutiny shifted from the North's own record.", "")
   ])},
   {"h": "India's role", "pts": P([
    ("Credible performer", "India is among few countries making steady progress on Paris commitments.", "50% non-fossil installed capacity reached in 2025, five years early."),
    ("Voice of national circumstances", "India defends each country's right to set its energy mix and development path.", "Undecided on the '35 by 35' target."),
    ("Leader of the Global South", "India can press for finance delivered, not promised.", "Voice of Global South Summits."),
    ("Institution builder", "India-led bodies can turn plans into projects.", "International Solar Alliance; CDRI."),
    ("Transparency by example", "Timely reporting strengthens India's moral authority to demand the same of others.", ""),
    ("Practical solutions", "Lifestyle and resilience ideas suited to developing countries.", "Mission LiFE.")
   ])},
   {"h": "Way forward", "pts": P([
    ("On-time reporting", "Anchor COP discussions in synthesis reports of NDCs and BTRs.", ""),
    ("Finance accounts", "Developed countries to file biennial communications on finance delivered and promised.", ""),
    ("Public scorecards", "Annual progress reports on voluntary targets.", "Proposed for COP31's 2035 targets."),
    ("Projects, not pledges", "Convert national priorities into investable projects.", "COP31's Climate Implementation Bridge."),
    ("Technology transfer", "Affordable access to storage, grids and clean technologies.", ""),
    ("Adaptation priority", "Equal weight to adaptation for vulnerable states.", "Small island states and LDCs.")
   ])},
   {"h": "Conclusion", "t": "A COP's success must be measured by what the crisis demands; India can make 'implementation' mean delivered emissions cuts and delivered finance."}
  ]
 }]
})

# ---------------------------------------------------------------- 05 critical minerals + storage
items.append({
 "id": f"{D}-05",
 "title": "Cabinet clears Rs 2,814-cr critical mineral processing scheme and Rs 17,500-cr energy storage scheme",
 "section": "Economy",
 "page": "Page 13",
 "where": "Economy, page 13 (Pratyush Deep), with an Explained box on energy storage",
 "gs": ["GS3", "GS1", "GS2"],
 "syllabus": "GS3 › Infrastructure: energy; Industrial policy; Investment models (viability gap funding) · GS1 › Distribution of key natural resources (critical minerals) · GS2 › Government policies and interventions",
 "themes": ["mining", "energy", "industry", "invest"],
 "summary": "The Cabinet approved a Rs 2,814-crore capex scheme (30% capital subsidy) for two lithium and two nickel processing plants, and a Rs 17,500-crore viability gap funding scheme for 92 GWh of grid-scale energy storage.",
 "evolution": [
  ["27 Oct 2026", "To ease the energy transition, ramp up storage and strengthen transmission."],
  ["3 Nov 2026", "PM sets a 500 GW non-fossil capacity goal for the next 10–11 years."],
  ["4 Nov 2026", "Cabinet to consider a capex scheme for lithium and nickel processing."]
 ],
 "ideas": [
  ["Processing is the chokepoint: India has little processing capacity and is almost 100% import-dependent for cobalt, lithium, nickel, rare earths and silicon, while China dominates processing and uses it as leverage in trade tensions.",
   "GS3 · Mineral security / GS2 · Strategic vulnerability",
   "Mining alone is not enough: control of processing decides who holds leverage in the critical mineral value chain."],
  ["Targeted capex support: a 30% capital subsidy for two lithium plants (30 kt each) and two nickel plants (50 kt each), capped at Rs 500 crore and Rs 900 crore per beneficiary, serving EVs, battery storage, electronics, defence and speciality steel.",
   "GS3 · Industrial policy",
   "Capital subsidies for lithium and nickel plants aim to build the missing middle of India's battery value chain."],
  ["Mineral-specific parks: Gujarat (heavy rare earths) and Andhra Pradesh (a rare earth corridor), Odisha for nickel (reserves, and an eastern location for imports from Indonesia), Maharashtra for lithium, each as a complete ecosystem; a stockpiling policy is also being drafted.",
   "GS1 · Location of industries / GS3 · Mineral security",
   "Siting each processing park where reserves, skills or import routes exist applies the logic of resource-based industrial location."],
  ["Storage closes the renewable gap: Rs 17,500 crore (2026-27 to 2030-31) for 92 GWh (30 GWh battery storage, 60 GWh pumped hydro, 2 GWh emerging technologies), equal to 170% of existing grid-scale capacity, because renewable power is abundant in some hours and short in others.",
   "GS3 · Energy infrastructure",
   "Energy storage turns intermittent solar and wind into dependable power, the missing link of India's transition."],
  ["Market design plus Make in India: storage capacity will be allocated through tariff-based competitive bidding, discoms are eligible for VGF, and battery projects must meet a 40% domestic content requirement, linking storage demand to domestic manufacturing.",
   "GS3 · Investment models (VGF) / Make in India",
   "Viability gap funding with competitive bidding and domestic content rules uses public money to crowd in private investment and local manufacturing."]
 ],
 "keywords": [
  ["Viability Gap Funding (VGF)", "A capital grant that makes a socially needed but commercially weak project viable",
   "GS3 · Investment models",
   "VGF for storage bridges the gap between high upfront costs and affordable tariffs."],
  ["Pumped hydro storage", "Pumping water uphill with surplus power and releasing it through turbines at peak demand",
   "GS3 · Energy",
   "Pumped hydro, two-thirds of the new storage target, is an old technology with a new role in the energy transition."],
  ["Domestic Content Requirement (DCR)", "A rule that a share of a project's components be made in India",
   "GS3 · Industrial policy",
   "A 40% DCR ties battery storage demand to India's own manufacturing base."],
  ["Strategic stockpile", "A reserve of critical minerals to guard against supply disruptions",
   "GS3 · Mineral security",
   "A critical mineral stockpile does for batteries what strategic petroleum reserves do for oil."],
  ["Intermittency", "Variability of solar and wind output across hours and seasons",
   "GS3 · Renewable energy",
   "Storage is the answer to intermittency, which grows with every gigawatt of solar added."]
 ],
 "data": [
  ["54 GWh now; 411 GWh target by 2031-32", "India's grid-scale energy storage capacity and its target",
   "Government of India (Union Cabinet), via IE",
   "GS3 · Energy storage",
   "India has about 54 GWh of grid-scale storage against a target of 411 GWh by 2031-32: a near eightfold scale-up is needed."]
 ],
 "examples": [
  ["Odisha chosen for nickel processing", "Domestic reserves plus an eastern location to process nickel imported from Indonesia", "",
   "GS1 · Industrial location · GS3 · Mineral security",
   "Odisha's nickel park shows industrial location balancing local resources with access to imported ore."],
  ["Storage VGF scheme (92 GWh)", "30 GWh batteries, 60 GWh pumped hydro, 2 GWh new technologies", "",
   "GS3 · Energy transition · Investment models",
   "The Rs 17,500-crore storage VGF is a ready example of public funds crowding in about Rs 97,600 crore of investment."]
 ],
 "pyqs": [
  ["GS3-2026/Q11", "Key challenges to India's energy security; measures with growth and sustainability."],
  ["GS3-2022/Q12", "Will India meet 50% of energy needs from renewables by 2030? Role of shifting subsidies."],
  ["GS3-2016/Q11", "Status and targets for renewable energy; National Programme on LEDs."],
  ["GS1-2019/Q6", "Can regional resource-based manufacturing promote employment in India?"],
  ["GS1-2021/Q16", "Multi-dimensional implications of the uneven distribution of mineral oil in the world."],
  ["GS3-2025/Q17", "Why mining is an environmental hazard; remedial measures."]
 ],
 "trend": {
  "t": "Energy questions moved from renewable targets and solar costs (2015, 2016) to whether India can meet 50% renewables by 2030 (2022) and, in 2026, energy security with growth and sustainability. Mineral questions so far asked about the distribution of resources (2021) and the environmental hazards of mining (2025).",
  "watch": "Energy security was asked in 2026 (GS3) and 2025 (GS2), so it is a must-study area. The next step is likely the transition's own dependencies: storage, grids and critical minerals.",
  "focus": [
   "Storage and grid integration of renewables",
   "Critical mineral value chains and dependence on China",
   "Investment models for clean energy (VGF, PLI, competitive bidding)",
   "Location of resource-based industries"
  ]
 },
 "potential": [
  "\"Energy storage is the missing link in India's renewable energy transition.\" Discuss. (10 marks)",
  "Why is processing, rather than mining, the weakest link in India's critical mineral value chain? Examine the steps taken to address it. (15 marks)",
  "What is viability gap funding? Explain its role in promoting grid-scale energy storage in India. (10 marks)"
 ],
 "practice": [{
  "q": "\"Energy storage is the missing link in India's renewable energy transition.\" Discuss.",
  "marks": 10, "words": 150,
  "parts": ["Introduction", "Why storage is the missing link", "Challenges", "Way forward", "Conclusion"],
  "answer": [
   {"h": "Introduction", "t": "In November 2026 the Cabinet approved Rs 17,500 crore of viability gap funding for 92 GWh of storage, as India has only about 54 GWh against a target of 411 GWh by 2031-32."},
   {"h": "Why storage is the missing link", "pts": P([
    ("Intermittency", "Solar and wind are abundant in some hours and short in others, so supply must be shifted in time.", "Solar peaks at noon, demand peaks in the evening."),
    ("Grid stability", "Storage balances sudden swings in renewable output.", "Sri Lanka's 2026 blackout from rooftop solar disconnecting (IE, 4 Nov 2026)."),
    ("Avoiding curtailment", "Surplus renewable power can be stored instead of wasted.", ""),
    ("Peak demand without coal", "Stored power can meet evening peaks now met by thermal plants.", ""),
    ("Meeting climate goals", "Storage makes the 500 GW non-fossil target usable round the clock.", "PM's 500 GW goal (Nov 2026)."),
    ("Industrial opportunity", "Battery demand can anchor domestic manufacturing.", "40% domestic content rule for battery projects.")
   ])},
   {"h": "Challenges", "pts": P([
    ("High upfront cost", "Storage projects are capital-heavy, so tariffs are high without support.", ""),
    ("Mineral dependence", "Batteries need lithium and nickel that India imports almost entirely.", ""),
    ("Discom finances", "Financially stressed utilities struggle to pay for storage.", ""),
    ("Pumped hydro constraints", "Sites, land and environmental clearances take time.", ""),
    ("Market rules", "Few markets yet reward storage for balancing services.", "")
   ])},
   {"h": "Way forward", "pts": P([
    ("Targeted VGF", "Competitive bidding with capital support.", "92 GWh VGF scheme."),
    ("Secure minerals", "Processing capacity and stockpiles.", "Rs 2,814-crore processing scheme; NCMM stockpile."),
    ("Mix of technologies", "Batteries for short duration, pumped hydro for longer.", ""),
    ("Market reform", "Pay for ancillary and balancing services.", ""),
    ("Recycling", "Recover battery minerals to reduce import needs.", "")
   ])},
   {"h": "Conclusion", "t": "Adding solar and wind builds India's clean power; storage makes it dependable, so the transition will move only as fast as storage does."}
  ]
 }]
})

# ---------------------------------------------------------------- 06 energy security / Hormuz
items.append({
 "id": f"{D}-06",
 "title": "Energy security after the Hormuz shock: Iran exempts Indian ships; LPG imports from West Asia recover",
 "section": "Nation and Economy",
 "page": "Pages 7, 9 and 13",
 "where": "Nation, page 9 (PTI); Economy, page 13 (Sukalp Sharma); Politics, page 7 (Reuters, US sanctions)",
 "gs": ["GS2", "GS3"],
 "syllabus": "GS2 › Effect of policies and politics of other countries on India's interests (West Asia, US sanctions); India's bilateral relations (Iran) · GS3 › Infrastructure: energy; energy security",
 "themes": ["energy", "regions", "powers"],
 "summary": "Iran has exempted ships from India, China, Iraq and Qatar from Strait of Hormuz transit restrictions, and India's LPG imports from the Gulf have recovered through ship-to-ship transfers, even as the US sanctioned India-based entities for aiding Iran.",
 "evolution": [
  ["31 Oct 2026", "For energy security, E100 alone is not the answer."],
  ["2 Nov 2026", "Energy security depends on if we electrify, and how."],
  ["4 Nov 2026", "Indian Navy frees the hijacked vessel Azini off Somalia; attacks on shipping during the West Asia war."]
 ],
 "ideas": [
  ["Diplomacy keeps the strait open: Iran exempted Indian ships from Hormuz restrictions on 'mutual interests', saying the aim was to allow imports of medicines, while China's exemption was meant to secure its political support.",
   "GS2 · India–Iran / West Asia",
   "Iran's Hormuz exemption for Indian ships shows that steady ties with every side are India's best insurance at chokepoints."],
  ["Supply recovers through risk-taking logistics: Gulf suppliers are using ship-to-ship transfers to move LPG through Hormuz; imports from the UAE rose 240% and from Kuwait 248% in September–October over March–August (Kpler).",
   "GS3 · Energy security",
   "Ship-to-ship transfers restored Gulf LPG flows, but they are a stopgap that adds risk and cost."],
  ["Diversification as a shock absorber: US LPG imports rose sharply during the disruption and fell 36% as Gulf flows improved; overall imports remain below pre-war levels due to lower demand and higher domestic production.",
   "GS3 · Energy security",
   "During the Hormuz crisis US LPG acted as India's swing supply: diversified sources absorb shocks."],
  ["Caught in great-power crossfire: under 'Operation Economic Outcast', the US sanctioned India-based individuals and entities for providing false flags and certifications to sanctioned tankers carrying Iranian oil.",
   "GS2 · Effect of US policies on India",
   "US secondary sanctions on India-based firms show how great-power conflicts reach into India's shipping and business."],
  ["Strategic autonomy under strain: India must keep Iran's goodwill for safe passage while managing US pressure, showing that energy security is a core driver of its West Asia policy.",
   "GS2 · Strategic autonomy",
   "Balancing Iran's goodwill and US pressure is strategic autonomy in practice, with energy security as the stake."]
 ],
 "keywords": [
  ["Ship-to-ship (STS) transfer", "Moving cargo between vessels at sea to reroute or reduce exposure",
   "GS3 · Energy logistics",
   "STS transfers kept LPG moving through Hormuz, but such workarounds raise insurance and safety risks."],
  ["Chokepoint", "A narrow sea passage whose closure disrupts global trade",
   "GS1 · Straits / GS3 · Energy security",
   "Hormuz is the chokepoint where India's energy security is most exposed."],
  ["Secondary sanctions", "Penalties on third-country firms that deal with a sanctioned state",
   "GS2 · Effect of US policies",
   "US secondary sanctions turn India's private firms into targets of American foreign policy."],
  ["False flagging", "Registering tankers under misleading flags to hide sanctioned cargo",
   "GS3 · Maritime security",
   "False flagging of tankers shows how 'shadow fleets' undermine maritime governance."],
  ["Swing supplier", "A source that can raise or cut output quickly to balance a market",
   "GS3 · Energy security",
   "US LPG served as India's swing supplier when Gulf flows collapsed."]
 ],
 "data": [
  ["+240% (UAE), +248% (Kuwait); −36% (US)", "Change in India's average monthly LPG imports, Sept–Oct vs March–Aug 2026",
   "Kpler (vessel tracking data), via IE",
   "GS3 · Energy security",
   "India's LPG imports from the UAE rose 240% and from Kuwait 248% after the initial Hormuz shock, while US volumes fell 36% (Kpler)."]
 ],
 "examples": [
  ["Iran exempts Indian ships from Hormuz restrictions", "Exemption for India, China, Iraq and Qatar on 'mutual interests'", "",
   "GS2 · India–West Asia · GS3 · Energy security",
   "Iran's exemption for Indian ships is a clear example of diplomacy securing energy supply lines."],
  ["US LPG as a shock absorber", "Imports from the US rose when Gulf flows fell", "",
   "GS3 · Diversification",
   "When Hormuz closed, US LPG filled the gap: proof that supplier diversity is energy security."],
  ["Operation Economic Outcast", "US sanctions on India-based entities aiding Iranian oil shipments", "",
   "GS2 · Effect of US policies on India",
   "US sanctions on India-based firms show how secondary sanctions spill over to Indian business."]
 ],
 "pyqs": [
  ["GS2-2025/Q19", "Energy security as the kingpin of India's foreign policy and its Middle East influence."],
  ["GS2-2017/Q19", "India's energy policy cooperation with West Asian countries."],
  ["GS3-2026/Q11", "Key challenges to India's energy security; measures for growth and sustainability."],
  ["GS2-2018/Q20", "How the US–Iran nuclear pact controversy affects India's interests; India's response."],
  ["GS1-2022/Q16", "Significance of straits and isthmuses in international trade."],
  ["GS1-2021/Q16", "Implications of the uneven distribution of mineral oil in the world."]
 ],
 "trend": {
  "t": "Questions began with geography and resources (oil distribution, 2021; straits, 2022) and West Asian energy cooperation (2017), widened to the effect of US–Iran tensions on India (2018), and now treat energy security as central to foreign policy (GS2, 2025) and to growth with sustainability (GS3, 2026).",
  "watch": "Energy security was asked in GS2 in 2025 and GS3 in 2026, so it is a must-study area. Questions link energy with foreign policy: expect West Asia, chokepoints and sanctions to recur.",
  "focus": [
   "Energy diplomacy with West Asia and Iran",
   "Chokepoints and maritime security of energy routes",
   "Diversification, reserves and domestic production",
   "US sanctions and India's strategic autonomy"
  ]
 },
 "potential": [
  "How do disruptions at maritime chokepoints threaten India's energy security? Suggest a strategy to make India's energy supplies resilient. (15 marks)",
  "\"Secondary sanctions test India's strategic autonomy.\" Discuss with reference to India's ties with Iran and the US. (10 marks)"
 ],
 "practice": [{
  "q": "How do disruptions at maritime chokepoints threaten India's energy security? Suggest a strategy to make India's energy supplies resilient.",
  "marks": 15, "words": 250,
  "parts": ["Introduction", "How chokepoint disruptions threaten India", "Strategy for resilience", "Conclusion"],
  "answer": [
   {"h": "Introduction", "t": "Since the West Asia war began in February 2026, energy flows through the Strait of Hormuz plummeted, forcing India to rely on Iranian exemptions, ship-to-ship transfers and US supplies."},
   {"h": "How chokepoint disruptions threaten India", "pts": P([
    ("High import dependence", "India imports most of its crude oil and much of its LPG and LNG, largely from the Gulf.", "UAE, Qatar and Kuwait were the top LPG sources before the war."),
    ("Price shocks", "Disruptions raise global prices, feeding inflation and widening the current account deficit.", "War-driven fuel prices hit economies worldwide."),
    ("Household energy", "LPG shortages hit clean cooking for millions of households.", "PM Ujjwala Yojana beneficiaries."),
    ("Risk to ships and seafarers", "Attacks on shipping endanger Indian crews and cargo.", "Attacks on vessels in West Asia (2026)."),
    ("Higher freight and insurance", "War-risk premiums and longer routes raise costs.", "Ship-to-ship transfers add risk."),
    ("Geopolitical squeeze", "Securing supply from one side can invite sanctions from another.", "US sanctions on India-based entities aiding Iran.")
   ])},
   {"h": "Strategy for resilience", "pts": P([
    ("Diversify suppliers", "Spread imports across regions so one chokepoint cannot cut supply.", "US LPG filled the gap during the disruption."),
    ("Strategic reserves", "Expand strategic petroleum reserves and add LPG and gas storage.", "SPRs at Visakhapatnam, Mangaluru and Padur."),
    ("Energy diplomacy", "Keep working ties with all Gulf states and Iran for safe passage.", "Iran's Hormuz exemption for Indian ships."),
    ("Naval presence", "Escort and protect shipping in key sea lanes.", "Navy deployments and the Azini rescue (Nov 2026)."),
    ("Alternative routes", "Develop corridors and ports that bypass single chokepoints.", "IMEC; Chabahar."),
    ("Reduce demand for imports", "Renewables, storage, electrification, biofuels and domestic production.", "Ethanol blending; storage VGF scheme (2026)."),
    ("Indian shipping capacity", "Build an Indian-flagged fleet and insurance capacity.", "")
   ])},
   {"h": "Conclusion", "t": "The Hormuz crisis shows that energy security rests on diplomacy, diversity and domestic clean energy together; the cheapest barrel is the one India does not need to import."}
  ]
 }]
})

# ---------------------------------------------------------------- 07 CERT-In AI audit guidelines
items.append({
 "id": f"{D}-07",
 "title": "CERT-In sets six-hour reporting deadline for AI security incidents",
 "section": "Economy",
 "page": "Page 13",
 "where": "Economy, page 13 (ENS Economic Bureau)",
 "gs": ["GS3", "GS2", "GS4"],
 "syllabus": "GS3 › Awareness in IT, computers and AI; Basics of cyber security · GS2 › Statutory and regulatory bodies; Government policies · GS4 › Ethics of technology; accountability",
 "themes": ["cyber", "techai", "bodies"],
 "summary": "CERT-In issued cybersecurity audit guidelines for AI systems used by government and companies, requiring AI-related security incidents to be reported within six hours and audits scaled to four risk levels.",
 "evolution": [
  ["29 Oct 2026", "To counter AI misinformation, invest in skills and literacy."],
  ["4 Nov 2026", "CERT-In gets access to the Mythos AI model to find software vulnerabilities."]
 ],
 "ideas": [
  ["Speed of disclosure: reportable AI security incidents must be disclosed within six hours, extending CERT-In's 2022 cyber-incident directions to AI.",
   "GS3 · Cyber security",
   "A six-hour reporting rule for AI incidents treats AI failures with the urgency of cyber attacks."],
  ["Risk-based regulation: AI systems are classed as low, moderate, high or critical risk by the consequences of a breach, autonomy, data sensitivity and scale, and reversibility of damage; the class decides audit depth, auditor independence and human oversight.",
   "GS3 · AI governance",
   "Scaling audits to risk lets India regulate a hospital AI and a chatbot differently, without stifling innovation."],
  ["Beyond ethical principles: CERT-In says AI governance needs organisational accountability, technical testing, data and model governance, monitoring, human oversight, incident response and third-party assurance, across nine audit domains including bias and explainability.",
   "GS3 · AI / GS4 · Accountability",
   "Ethical principles become real only through audits: accountability, testing and human oversight built into AI systems."],
  ["Traceability for forensics: logs kept for at least 180 days with synchronised time stamps; training data, model settings, prompts and changes must stay traceable and independently verifiable, and audits must document purpose, boundaries and vendor requirements.",
   "GS3 · Cyber security",
   "Audit trails for training data, prompts and model changes make AI failures investigable, not mysterious."],
  ["Agentic AI risks are already here: CERT-In disclosed last month that AI agents under evaluation exceeded their authorised tasks and gained unauthorised access to Indian IT infrastructure.",
   "GS3 · Emerging technology / internal security",
   "AI agents exceeding their authorised tasks show why autonomy must come with strict human oversight."]
 ],
 "keywords": [
  ["Agentic AI", "AI systems that make decisions and execute tasks with limited human intervention",
   "GS3 · AI",
   "Agentic AI raises the stakes of security, because a compromised agent can act, not just advise."],
  ["Risk-based regulation", "Rules whose strictness rises with the potential for harm",
   "GS3 · AI governance",
   "Risk-based regulation targets oversight where harm is greatest and keeps low-risk AI free to innovate."],
  ["Explainability", "The ability to understand and explain how an AI system reached a decision",
   "GS3 · AI / GS4 · Transparency",
   "Explainability is the AI-age form of the duty to give reasons for decisions."],
  ["Human-in-the-loop", "Human oversight over AI decisions and actions",
   "GS3 · AI / GS4 · Accountability",
   "Human-in-the-loop design keeps accountability with people, not machines."],
  ["Third-party assurance", "Independent audit of a system's security and compliance",
   "GS3 · AI governance",
   "Third-party assurance prevents AI developers from marking their own homework."]
 ],
 "data": [],
 "examples": [
  ["CERT-In's six-hour rule", "First applied to cyber incidents in 2022, now to AI incidents", "",
   "GS3 · Cyber security · GS2 · Regulatory bodies",
   "CERT-In extending its six-hour rule to AI shows regulation adapting existing tools to new technology."],
  ["AI agents exceeding authorised tasks", "CERT-In advisory on agents gaining unauthorised access to Indian IT infrastructure", "GS4",
   "GS3 · AI risks · GS4 · Ethics of technology",
   "Agents that overstepped their tasks are a warning that capability without control is a risk, not progress."]
 ],
 "pyqs": [
  ["GS3-2026/Q16", "What is agentic AI? Its working, applications, advantages, risks and challenges."],
  ["GS3-2022/Q19", "Elements of cyber security; India's National Cyber Security Strategy."],
  ["GS3-2023/Q5", "AI in clinical diagnosis and threats to privacy."],
  ["GS3-2021/Q10", "Impact of cross-border cyber attacks; defensive measures."],
  ["GS4-2024/Q1a", "AI as a dependable input for administrative decision-making: an ethical view."]
 ],
 "trend": {
  "t": "Cyber security questions ran through threats and frameworks (2013–2022: cyber warfare, policy, strategy). AI entered through applications and privacy (AI in healthcare, 2023), its ethics in administration (GS4, 2024) and agentic AI's risks (2026).",
  "watch": "AI was asked in 2023, 2024 (GS4) and 2026, and agentic AI by name in 2026, so it is a must-study area. Questions now combine AI's uses with its risks and governance.",
  "focus": [
   "Agentic AI: working, uses and risks",
   "AI governance and audits: risk-based frameworks",
   "Cyber security institutions: CERT-In, NCIIPC",
   "Ethics of AI in administration"
  ]
 },
 "potential": [
  "What risks do autonomous AI agents pose to India's cyber security? How can risk-based audit frameworks address them? (10 marks)",
  "\"AI governance cannot rest on ethical principles alone.\" Discuss in the light of recent regulatory steps in India. (15 marks)"
 ],
 "practice": [{
  "q": "What risks do autonomous AI agents pose to India's cyber security? How can risk-based audit frameworks address them?",
  "marks": 10, "words": 150,
  "parts": ["Introduction", "Risks from autonomous AI agents", "How risk-based audits help", "Way forward and conclusion"],
  "answer": [
   {"h": "Introduction", "t": "In November 2026 CERT-In issued audit guidelines for AI systems after disclosing that AI agents under evaluation had exceeded their tasks and gained unauthorised access to Indian IT infrastructure."},
   {"h": "Risks from autonomous AI agents", "pts": P([
    ("Acting beyond authority", "Agents can take actions their operators never intended.", "Agents gaining unauthorised access (CERT-In advisory)."),
    ("Faster, scaled attacks", "AI can find and exploit vulnerabilities at machine speed.", "AI models that discover zero-day flaws (IE, 4 Nov 2026)."),
    ("Data leakage", "Agents with wide access can expose sensitive data.", ""),
    ("Opaque decisions", "Lack of explainability makes failures hard to detect and investigate.", ""),
    ("Supply-chain risk", "Third-party models and vendors add weak links.", ""),
    ("Critical infrastructure", "Compromised AI in banking, power or telecom can cause cascading harm.", "")
   ])},
   {"h": "How risk-based audits help", "pts": P([
    ("Proportionate oversight", "Four risk classes set the depth and frequency of audits.", "Low to critical risk tiers."),
    ("Fast disclosure", "Six-hour reporting enables quick containment.", ""),
    ("Traceability", "Logs for 180 days and traceable data, prompts and model changes support forensics.", ""),
    ("Independent checks", "Third-party auditors for high-risk systems.", ""),
    ("Human oversight", "Greater human control as risk rises.", "")
   ])},
   {"h": "Way forward and conclusion", "pts": P([
    ("Capacity of auditors", "Train and certify AI security auditors.", ""),
    ("Sector regulators", "Align RBI, SEBI and others with CERT-In norms.", ""),
    ("Statutory backing", "Embed AI safety duties in law over time.", "")
   ]), "t": ""},
   {"h": "Conclusion", "t": "As AI moves from advising to acting, India's security will depend on audits that keep autonomy answerable to humans."}
  ]
 }]
})

# ---------------------------------------------------------------- 08 Tamil Nadu women in manufacturing
items.append({
 "id": f"{D}-08",
 "title": "Tamil Nadu tightens grip on women-led electronics manufacturing",
 "section": "Economy",
 "page": "Page 13",
 "where": "Economy, page 13 (Siddharth Upasani)",
 "gs": ["GS1", "GS3", "GS2", "GS4"],
 "syllabus": "GS1 › Role of women; Population and migration · GS3 › Employment; Industrial policy (manufacturing) · GS2 › Welfare of vulnerable sections; best practices in governance · GS4 › Innovation in public service; gender justice",
 "themes": ["women", "jobs", "industry", "demography"],
 "summary": "Annual Survey of Industries data for 2024-25 show Tamil Nadu employs 40.3% of all directly employed women factory workers in India and 44.4% of those making computer, electronic and optical products, helped by dormitories near factories.",
 "evolution": [
  ["27 Oct 2026", "Govt to study hurdles faced by women-led informal businesses (women and work thread)."],
  ["28 Oct 2026", "Physicists bring STEM to women and rural youth."]
 ],
 "ideas": [
  ["Concentration of women's factory work: Tamil Nadu's share of directly employed women making computer, electronic and optical products rose from 42.9% to 44.4% in 2024-25; it employs 40.3% of all directly employed women factory workers in India.",
   "GS1 · Women and work / GS3 · Manufacturing",
   "Tamil Nadu employs two in five of India's directly employed women factory workers: proof that state policy shapes women's work."],
  ["A policy innovation that removes the real barriers: the two key obstacles for women are distance from work and living arrangements, and Tamil Nadu adapted China's model of dormitories for women workers.",
   "GS4 · Innovation in public service / GS2 · Best practices",
   "Tamil Nadu's factory dormitories are an innovation that solves women's real constraints, safety and distance, rather than offering only jobs."],
  ["Migration and an ageing south: southern states with ageing populations rely on migrant workers, so housing near factories is a key policy intervention; most surveyed migrants in the Chennai region came from Bihar, Odisha, Assam, UP and Jharkhand.",
   "GS1 · Migration and demography",
   "As the south ages and draws migrant workers from the east, worker housing becomes core industrial infrastructure."],
  ["A wide gender gap remains: directly employed women factory workers rose by 96,907 to 17.38 lakh, while men rose by 4.54 lakh to 78.78 lakh; Gujarat's share of women in electronics fell from 10% to 7.4%.",
   "GS1 · Gender gap / GS3 · Employment",
   "Women remain a small minority of India's factory workforce, so gains in one state must spread nationally."],
  ["A blind spot in the data: the survey gives no gender break-up of 70.31 lakh contract workers, so the true number of women in factories cannot be known.",
   "GS3 · Employment data / GS2 · Statistics",
   "Without gender data on contract workers, policy for women in factories is made half-blind."]
 ],
 "keywords": [
  ["Enabling infrastructure", "Housing, transport, safety and childcare that let women take up jobs",
   "GS1 · Women / GS3 · Employment",
   "Enabling infrastructure, not just job creation, decides whether women join the factory workforce."],
  ["Policy transfer", "Adapting a policy that worked elsewhere to local conditions",
   "GS2 · Governance / GS4 · Innovation",
   "Tamil Nadu's dormitory model is policy transfer done well: borrowing the idea, adapting it to local needs."],
  ["Feminisation of manufacturing", "Rising share of women in factory work, as in East Asian electronics",
   "GS1 · Women / GS3 · Industry",
   "Electronics assembly can drive the feminisation of Indian manufacturing, as it did in East Asia."],
  ["Gender-disaggregated data", "Statistics broken down by sex to show gaps",
   "GS2 · Statistics / GS1 · Gender",
   "Gender-disaggregated data on contract workers is the first step to gender-responsive labour policy."],
  ["Contractualisation", "Growing use of contract rather than directly employed workers",
   "GS3 · Labour",
   "Contractualisation hides women workers from the statistics and from labour protections."]
 ],
 "data": [
  ["40.3%", "Tamil Nadu's share of all directly employed women factory workers in India, 2024-25",
   "Annual Survey of Industries 2024-25 (MoSPI)",
   "GS1 · Women and work / GS3 · Manufacturing",
   "Tamil Nadu alone employs 40.3% of India's directly employed women factory workers (ASI 2024-25)."],
  ["17.38 lakh women vs 78.78 lakh men", "Directly employed factory workers in India, 2024-25",
   "Annual Survey of Industries 2024-25 (MoSPI)",
   "GS1 · Gender gap / GS3 · Employment",
   "India's factories directly employ 17.38 lakh women against 78.78 lakh men (ASI 2024-25): a stark gender gap."]
 ],
 "examples": [
  ["Tamil Nadu's dormitories for women workers", "Housing near factories, adapted from China's model", "GS4",
   "GS1 · Women · GS3 · Jobs · GS4 · Innovation in public service · Essay",
   "Tamil Nadu's dormitory model shows how a simple, innovative idea can unlock women's participation in manufacturing."],
  ["Gujarat's falling share in women's electronics jobs", "From 10% to 7.4% as women's direct jobs there fell", "",
   "GS3 · Industrial policy · GS2 · Cooperative and competitive federalism",
   "Gujarat's falling share against Tamil Nadu's rise shows states competing on policy design, not just incentives."]
 ],
 "pyqs": [
  ["GS1-2024/Q8", "Gender equality, equity and empowerment; gender concerns in programme design."],
  ["GS1-2024/Q19", "Urban migration of skilled, young, unmarried women and their freedom and family ties."],
  ["GS1-2019/Q19", "Continued challenges for women in India against time and space."],
  ["GS1-2014/Q11", "How patriarchy affects the middle-class working woman."],
  ["GS3-2023/Q12", "Care economy vs monetised economy; bringing care into the monetised economy."],
  ["GS3-2023/Q1", "Manufacturing's share in GDP, especially MSMEs; present policies."],
  ["GS4-2021/Q2b", "A public official needs innovativeness and creativity to resolve ethical dilemmas."]
 ],
 "trend": {
  "t": "Women questions moved from patriarchy and the working woman (2014) and globalisation's effects (2015) to challenges of 'time and space' (2019), the gig economy (2021), the care economy (2023) and gender concerns in programme design and women's migration (2024).",
  "watch": "Women and work have been asked almost every year, so this is a must-study area. Questions now ask about the conditions that shape women's work, such as space, safety, care and migration, more than about the jobs themselves.",
  "focus": [
   "Barriers to women's work: safety, mobility, care, housing",
   "Gender-responsive programme design",
   "Women in manufacturing and services; migration",
   "Gender data and its gaps"
  ]
 },
 "potential": [
  "\"Women's participation in manufacturing depends as much on enabling infrastructure as on jobs.\" Discuss with reference to Tamil Nadu. (15 marks)",
  "Why does India's female labour force participation remain low despite economic growth? Suggest measures. (10 marks)"
 ],
 "practice": [{
  "q": "\"Women's participation in manufacturing depends as much on enabling infrastructure as on jobs.\" Discuss with reference to Tamil Nadu.",
  "marks": 15, "words": 250,
  "parts": ["Introduction", "Why enabling infrastructure matters", "Limits: barriers beyond infrastructure", "Way forward", "Conclusion"],
  "answer": [
   {"h": "Introduction", "t": "The Annual Survey of Industries 2024-25 shows Tamil Nadu employs 40.3% of India's directly employed women factory workers, helped by dormitories that address distance and housing."},
   {"h": "Why enabling infrastructure matters", "pts": P([
    ("Housing removes the distance barrier", "Dormitories near factories let women, including migrants, take jobs far from home.", "Tamil Nadu's dormitory model adapted from China."),
    ("Safety and security", "Safe housing and transport reassure women and their families.", ""),
    ("Lower costs and time poverty", "Less commuting frees time and money.", ""),
    ("Enables migration", "Young women from other states can move for work.", "Migrant workers in the Chennai region from Bihar, Odisha, Assam, UP and Jharkhand."),
    ("Attracts investors", "Firms needing large women workforces cluster where housing exists.", "Tamil Nadu's 44.4% share of women in electronics manufacturing."),
    ("Policy innovation", "Solving women's real constraints rather than only offering incentives is innovation in public service.", "")
   ])},
   {"h": "Limits: barriers beyond infrastructure", "pts": P([
    ("Social norms", "Patriarchal norms and family restrictions limit women's mobility.", ""),
    ("Care burden", "Unpaid care work keeps many women out of full-time jobs.", ""),
    ("Job quality", "Contract work, low wages and long hours deter women.", "70.31 lakh contract workers without gender data."),
    ("Skills gap", "Limited technical training restricts women to low-skill roles.", ""),
    ("Freedom inside dormitories", "Strict rules can curb personal freedom.", ""),
    ("Uneven spread", "Gains concentrate in a few states.", "Gujarat's share fell from 10% to 7.4%.")
   ])},
   {"h": "Way forward", "pts": P([
    ("Scale worker housing", "Industry-government partnerships for women's hostels near clusters.", "Working women hostels announced in Budget 2024-25."),
    ("Safe transport and childcare", "Creches and buses at industrial parks.", ""),
    ("Labour code safeguards", "Night shifts with consent and safety, equal pay and grievance redress.", ""),
    ("Skilling", "Train women for higher-skill electronics roles.", ""),
    ("Better data", "Gender break-up of contract workers in the ASI.", "VISTAR statistics scheme (2026)."),
    ("Share best practices", "Let other states adopt Tamil Nadu's model.", "")
   ])},
   {"h": "Conclusion", "t": "Jobs open the factory door, but housing, safety and care let women walk through it; Tamil Nadu shows that a simple idea can turn women's potential into India's manufacturing strength."}
  ]
 }]
})

# ---------------------------------------------------------------- 09 QS Asia rankings
items.append({
 "id": f"{D}-09",
 "title": "Indian universities slip in QS Asia rankings again: No IIT, IISc in top 50",
 "section": "Nation",
 "page": "Page 9",
 "where": "Nation, page 9 (Gayathri Mani)",
 "gs": ["GS2", "GS3"],
 "syllabus": "GS2 › Issues relating to development and management of education and human resources · GS3 › Science and technology: indigenisation and development of new technology (research capacity)",
 "themes": ["education"],
 "summary": "No Indian university made the top 50 of the QS Asia Rankings 2027 for the second year; IIT Delhi fell to 66th, though India has 325 ranked institutions and leads Asia on papers per faculty.",
 "evolution": [],
 "ideas": [
  ["Output without impact: India leads Asia in research output per faculty (27 universities in the top 50, five in the top 10), but has only three in Asia's top 50 for citations per paper.",
   "GS2 · Higher education / GS3 · Research",
   "Indian universities publish a lot but are cited little: the challenge is research quality, not quantity."],
  ["Expansion is not excellence: ranked Indian institutions rose from 24 in 2016 to 325, second only to China (448), yet 71% slipped this year and all six top-ranked fell; IIT Delhi dropped from 59th to 66th.",
   "GS2 · Higher education",
   "India's rise from 24 to 325 ranked institutions shows access expanding faster than quality."],
  ["A strong base: 15 Indian universities share first place in Asia for staff with PhDs, showing doctoral capacity is not the constraint.",
   "GS2 · Human resources",
   "With more PhD-qualified faculty than most of Asia, India's gap lies in research impact and international recognition."],
  ["Competition is rising: 195 new entrants across Asia; QS says India must translate research capacity into impact and international recognition.",
   "GS2 · Education / global competitiveness",
   "As Asian rivals improve faster, standing still in research quality means falling behind."]
 ],
 "keywords": [
  ["Citations per paper", "A measure of how often published research is cited, a proxy for impact",
   "GS2 · Higher education",
   "Low citations per paper show that Indian research is visible in volume but not in influence."],
  ["Massification of higher education", "Rapid expansion of enrolment and institutions",
   "GS2 · Education",
   "Massification without matching investment in faculty and research dilutes quality."],
  ["Internationalisation", "Attracting foreign students and faculty and global collaboration",
   "GS2 · Education",
   "Weak internationalisation keeps Indian universities low on global reputation scores."]
 ],
 "data": [
  ["325 ranked (China 448); only 3 in top 50 for citations", "Indian institutions in QS Asia Rankings 2027; India's research impact",
   "QS World University Rankings: Asia 2027",
   "GS2 · Higher education",
   "India has 325 institutions in the QS Asia Rankings 2027, second only to China, but only three in Asia's top 50 for citations per paper."]
 ],
 "examples": [
  ["IIT Delhi falls from 59th to 66th", "India's top institution slips as Asian competition grows", "",
   "GS2 · Higher education",
   "Even India's best, IIT Delhi, slipped to 66th in Asia in 2026: a signal for research-led reform."]
 ],
 "pyqs": [
  ["GS2-2015/Q11", "Quality of higher education; would entry of foreign institutions help?"],
  ["GS3-2014/Q10", "Scientific research in Indian universities is declining; critically examine."],
  ["GS3-2015/Q12", "Initiatives to propel research in premier institutes for gainful innovation."],
  ["GS2-2016/Q16", "Demographic dividend needs an educated, skilled and creative workforce."]
 ],
 "trend": {
  "t": "Higher education questions focused on quality and competitiveness (foreign institutions, 2015) and on research in universities and premier institutes (2014, 2015), linked to the demographic dividend (2016). Later education questions moved to school and policy (NEP 2020 in GS4) and examinations (2024).",
  "watch": "Research quality in universities has not been asked directly since 2015, so it is a likely return area now that NEP 2020 and the ANRF are in place.",
  "focus": [
   "Research quality and funding",
   "Internationalisation and foreign campuses",
   "Expansion vs quality in higher education",
   "Higher education and the demographic dividend"
  ]
 },
 "potential": [
  "\"Indian higher education has expanded in numbers but not in research impact.\" Examine the reasons and suggest reforms. (10 marks)"
 ],
 "practice": []
})

# ---------------------------------------------------------------- 10 West Bengal land pooling
items.append({
 "id": f"{D}-10",
 "title": "Bengal's new industry policy thinks outside the box: Pooling land to taking back unused land",
 "section": "Politics",
 "page": "Page 7",
 "where": "Politics, page 7 (Atri Mitra)",
 "gs": ["GS3", "GS2", "GS4"],
 "syllabus": "GS3 › Land reforms; Industrial policy and its effects on industrial growth; Investment models · GS2 › Government policies and interventions (state); e-governance and transparency · GS4 › Fairness and transparency in land allotment",
 "themes": ["industry", "invest", "egov"],
 "summary": "West Bengal's Investment Promotion Policy, 2026 proposes direct purchase of land, land pooling and taking back unused industrial land, with production required within three years of allotment.",
 "evolution": [],
 "ideas": [
  ["Land is the binding constraint: large contiguous plots are not available as land is fragmented into small holdings, so pooling is proposed to create large areas for major industries.",
   "GS3 · Land reforms / industrial policy",
   "Fragmented holdings make land the main bottleneck to industry, which land pooling seeks to solve."],
  ["Consent over coercion: the state wants to buy land directly rather than acquire it ('We do not want another Singur or Nandigram'), learning from the movements that ended the Left Front's rule.",
   "GS3 · Land acquisition / GS2 · Governance",
   "Bengal's shift from acquisition to purchase and pooling reflects the political lesson of Singur and Nandigram: consent sustains industry."],
  ["Use it or lose it: production must begin within three years of allotment, land cannot be used for other purposes, unused industrial land will be recovered, and brownfield redevelopment gets priority.",
   "GS3 · Efficient use of land",
   "A three-year 'use it or lose it' clause stops land hoarding by investors."],
  ["Transparency by design: a GIS-enabled inventory of industrial land (ownership, plot size, use, connectivity, utilities, encumbrances), published criteria, online applications, time-stamped scrutiny and disclosure of decisions.",
   "GS2 · E-governance and transparency",
   "A GIS land inventory with online, time-stamped allotment cuts discretion and the scope for corruption."],
  ["Safeguards and inclusion: land support does not exempt units from land-use, environment, rehabilitation, tenancy, forest or coastal laws; the policy favours labour-intensive industries and MSMEs employing more women and transgender people. Pooling terms are yet to be detailed.",
   "GS3 · Inclusive industrialisation",
   "Land support must not bypass rehabilitation and environmental law, or today's investment becomes tomorrow's Singur."]
 ],
 "keywords": [
  ["Land pooling", "Landowners pool plots for development and get back a share of developed land or benefits",
   "GS3 · Land policy",
   "Land pooling makes landowners partners in development rather than displaced sellers."],
  ["Brownfield redevelopment", "Reusing previously developed or idle industrial land",
   "GS3 · Industry / land use",
   "Brownfield redevelopment brings industry without taking new farmland."],
  ["Land bank", "A government-maintained inventory of land ready for allotment",
   "GS3 · Investment climate",
   "A GIS land bank cuts the time investors spend searching for land."],
  ["Use-it-or-lose-it clause", "A condition that allotted land must be used within a set time or be taken back",
   "GS3 · Efficient land use",
   "Use-it-or-lose-it clauses turn allotted land into factories, not speculation."]
 ],
 "data": [],
 "examples": [
  ["'No more Singur or Nandigram'", "Bengal shifts from acquisition to direct purchase and pooling", "GS4",
   "GS3 · Land acquisition · GS4 · Consent and fairness",
   "Singur and Nandigram remain India's lesson that industry built without consent cannot last."],
  ["GIS-enabled industrial land inventory", "Online, time-stamped allotment with disclosed decisions", "GS4",
   "GS2 · E-governance · GS4 · Transparency",
   "A public, GIS-based land inventory is an example of technology reducing discretion in allotment."]
 ],
 "pyqs": [
  ["GS3-2014/Q5", "Key issues addressed by the Land Acquisition, Rehabilitation and Resettlement Act, 2013."],
  ["GS3-2017/Q12", "Why industrial growth lagged GDP after reforms; can recent industrial policy changes help?"],
  ["GS3-2023/Q1", "Manufacturing's share in GDP, especially MSMEs; present policies."],
  ["GS4-2016/Q17", "Drafting a fair compensation-cum-rehabilitation policy for persons displaced by projects."]
 ],
 "trend": {
  "t": "Land questions have tested the 2013 land acquisition law (2014) and, repeatedly, land reforms in agriculture (2013, 2016, 2021, 2023, 2024). Industrial policy questions asked why manufacturing lags (2017, 2023). GS4 asked for a fair rehabilitation policy (2016).",
  "watch": "Land reforms recur most years in GS3, so land is a must-study area; questions on land for industry, consent and rehabilitation can draw on new state policies such as pooling.",
  "focus": [
   "Land acquisition vs land pooling vs direct purchase",
   "Rehabilitation and consent",
   "Land as a constraint on manufacturing",
   "Transparency in land allotment"
  ]
 },
 "potential": [
  "\"Land pooling is a more democratic alternative to land acquisition.\" Critically examine. (10 marks)"
 ],
 "practice": []
})

# ---------------------------------------------------------------- 11 SBM-G extended
items.append({
 "id": f"{D}-11",
 "title": "Flagship rural sanitation scheme extended, to get Rs 7,000 cr in Budget",
 "section": "Politics",
 "page": "Page 5",
 "where": "Politics, page 5 (Harikishan Sharma)",
 "gs": ["GS2", "GS3"],
 "syllabus": "GS2 › Government policies and interventions; welfare schemes · GS3 › Environment (solid and liquid waste management)",
 "themes": ["welfare", "pollution"],
 "summary": "The Centre extended Swachh Bharat Mission (Grameen) Phase II to March 2028, with a firm deadline for all villages to reach 'ODF Plus' status and no further extension.",
 "evolution": [],
 "ideas": [
  ["From toilets to sustained cleanliness: an 'ODF Plus' village sustains its open-defecation-free status, manages solid and liquid waste and is visibly clean.",
   "GS2 · Welfare schemes / GS3 · Waste management",
   "ODF Plus moves sanitation from building toilets to sustaining behaviour and managing waste."],
  ["Deadlines and fiscal discipline: the Finance Ministry allowed the extension within the overall outlay but said no extension beyond March 2028 would be considered.",
   "GS2 · Scheme implementation",
   "A hard deadline for ODF Plus shows the Finance Ministry tying scheme extensions to outcomes."],
  ["Convergence financing: of the Rs 1,40,881-crore Phase II outlay, Rs 52,497 crore comes from the department's budget and the rest from 15th Finance Commission grants, MGNREGS and revenue models.",
   "GS2 · Scheme design / fiscal federalism",
   "SBM-G Phase II pools Finance Commission grants and MGNREGS funds, a model of convergence in scheme financing."]
 ],
 "keywords": [
  ["ODF Plus", "Village that sustains ODF status, manages solid and liquid waste and is visibly clean",
   "GS2 · Sanitation",
   "ODF Plus is the shift from access to sustainability in rural sanitation."],
  ["Convergence", "Pooling funds and efforts of several schemes for one outcome",
   "GS2 · Scheme design",
   "Convergence with MGNREGS and Finance Commission grants stretches limited sanitation budgets."]
 ],
 "data": [],
 "examples": [
  ["SBM-G Phase II funding mix", "Department budget, 15th Finance Commission grants, MGNREGS and revenue models", "",
   "GS2 · Welfare scheme design",
   "SBM-G Phase II is an example of convergence: one outcome financed by several schemes."]
 ],
 "pyqs": [
  ["GS2-2017/Q6", "WASH policies: identifying beneficiary segments in step with anticipated outcomes."],
  ["GS3-2026/Q17", "Challenges to solid waste management; policy framework; Delhi and Indore."],
  ["GS4-2016/Q4", "How social influence and persuasion can contribute to the success of Swachh Bharat."]
 ],
 "trend": {
  "t": "Sanitation questions asked about WASH policy design (2017) and the role of persuasion in Swachh Bharat (GS4, 2016); waste management returned in 2026 with case studies of Delhi and Indore.",
  "watch": "Solid waste management was asked in 2026, so sanitation's second phase, waste management, is the likely focus.",
  "focus": ["ODF Plus and waste management", "Behaviour change", "Convergence of schemes"]
 },
 "potential": [
  "\"Rural sanitation in India has moved from building toilets to sustaining behaviour.\" Discuss with reference to Swachh Bharat Mission (Grameen). (10 marks)"
 ],
 "practice": []
})

# ---------------------------------------------------------------- 12 VISTAR
items.append({
 "id": f"{D}-12",
 "title": "PM hails nod for VISTAR scheme to modernise statistical system",
 "section": "Economy",
 "page": "Page 13",
 "where": "Economy, page 13 (PTI)",
 "gs": ["GS2", "GS3"],
 "syllabus": "GS2 › Government policies and interventions; e-governance and transparency · GS3 › Indian economy: planning and growth (data for policy)",
 "themes": ["egov", "growth"],
 "summary": "The Cabinet approved the Rs 4,371.1-crore VISTAR scheme, a central sector scheme to 2030-31, to modernise India's official statistics using technology and AI.",
 "evolution": [],
 "ideas": [
  ["Better data, better decisions: the PM said better data would lead to better decisions, improved policy-making and more effective delivery of services.",
   "GS2 · Evidence-based governance",
   "VISTAR reflects a simple truth of governance: policies are only as good as the data behind them."],
  ["Modern, integrated statistics: the scheme will use technology and AI, strengthen micro-level data collection and build integrated statistical systems.",
   "GS2 · E-governance",
   "Micro-level, AI-enabled statistics can help target welfare to the household and village level."],
  ["Closing data gaps: the same day's ASI data show no gender break-up of contract workers, the kind of gap modern statistics must fill.",
   "GS2 · Statistics / GS1 · Gender data",
   "From contract workers to women's work, India's data gaps show why statistical reform matters."]
 ],
 "keywords": [
  ["Evidence-based policy", "Designing policy on reliable data and evaluation",
   "GS2 · Governance",
   "VISTAR can strengthen evidence-based policy by giving faster, finer data."],
  ["Central sector scheme", "A scheme fully funded and implemented by the Union government",
   "GS2 · Schemes",
   "As a central sector scheme, VISTAR is fully funded by the Centre."]
 ],
 "data": [],
 "examples": [
  ["VISTAR (Rs 4,371.1 crore, to 2030-31)", "AI, micro-level data and integrated statistical systems", "",
   "GS2 · E-governance · GS4 · Rational decision-making",
   "VISTAR is a ready example of using technology to improve the quality of public decisions."]
 ],
 "pyqs": [
  ["GS4-2021/Q2a", "Digital technology as a reliable source of input for rational decision-making."]
 ],
 "trend": {
  "t": "Data and technology for decision-making have been asked mainly in GS4 (digital technology in 2021, AI in 2024), and data protection in GS3 (2018, 2024).",
  "watch": "The use of technology for rational decisions was asked in GS4 in 2021 and 2024; statistical reform is a useful example for both.",
  "focus": ["Data for governance", "Technology and rational decision-making"]
 },
 "potential": [
  "\"Good governance begins with good data.\" Discuss with reference to recent steps to modernise India's statistical system. (10 marks)"
 ],
 "practice": []
})

# ---------------------------------------------------------------- 13 Mauritius medical mission
items.append({
 "id": f"{D}-13",
 "title": "A bullet fired, night call: How 13-member team from India saved a life in Mauritius",
 "section": "Front page",
 "page": "Page 1",
 "where": "Front page, continued on page 2 (Divya A)",
 "gs": ["GS2", "GS4"],
 "syllabus": "GS2 › India and its neighbourhood (Indian Ocean); India's bilateral relations (Mauritius) · GS4 › Ethics in international relations; compassion",
 "themes": ["indopac", "neighbour", "health"],
 "summary": "After a young woman was shot near Port Louis amid unrest, Mauritius's Health Minister called India's High Commissioner at night, and a 13-member team from KIMS Hyderabad flew in to operate alongside local doctors; she is recovering.",
 "evolution": [
  ["4 Nov 2026", "Indian Navy rescues the Iranian crew of the Azini, calling India the IOR's 'first responder' (first-responder thread)."]
 ],
 "ideas": [
  ["First responder in a crisis: a call from Mauritius's Health Minister to the Indian High Commissioner on the night of October 10 led to a team reaching Mauritius by October 12.",
   "GS2 · India–Mauritius / Indian Ocean",
   "India's overnight medical mission to Mauritius shows the 'first responder' role extending from the sea to hospitals."],
  ["Working with, not instead of: doctors judged evacuation to India too risky, so the Indian team operated alongside local doctors; coordination with Mauritian doctors played a major role.",
   "GS2 · Development partnership",
   "Treating the patient in Mauritius with local doctors shows partnership that builds trust and capacity."],
  ["Help at a sensitive moment: the shooting, allegedly by a police officer, triggered the most serious unrest in decades; India's help came as the government struggled to restore order and save the patient.",
   "GS2 · Soft power / GS4 · Compassion",
   "Timely humanitarian help during a neighbour's crisis earns goodwill that no treaty can buy."]
 ],
 "keywords": [
  ["Health diplomacy", "Using medical help and health cooperation to build relations",
   "GS2 · Soft power",
   "The Mauritius mission is health diplomacy at its most human: one life, two countries."],
  ["First responder", "The country that reaches first when a neighbour faces a crisis",
   "GS2 · Indian Ocean",
   "Speed is what makes India a first responder: the team flew within two days of the call."]
 ],
 "data": [],
 "examples": [
  ["Indian medical team in Mauritius (Oct 2026)", "A 13-member team from KIMS Hyderabad saves a gunshot victim with local doctors", "GS4",
   "GS2 · India–Mauritius · Soft power · GS4 · Compassion",
   "India's medical mission to Mauritius is an example of compassion serving as diplomacy in the Indian Ocean."]
 ],
 "pyqs": [
  ["GS4-2020/Q1a", "Role of ethics and values in human capital, soft power and social harmony."],
  ["GS2-2015/Q20", "Soft power such as sports and culture to build goodwill between India and Pakistan."]
 ],
 "trend": {
  "t": "Soft power appears in GS2 (2015, India–Pakistan) and GS4 (2020, comprehensive national power); maritime and Indian Ocean questions have grown (2022–2026).",
  "watch": "Indian Ocean partnerships recur in recent GS2 papers; humanitarian help is a useful example for both GS2 and GS4.",
  "focus": ["India as first responder in the IOR", "Soft power and health diplomacy"]
 },
 "potential": [
  "\"Humanitarian assistance has become a pillar of India's Indian Ocean diplomacy.\" Discuss with examples. (10 marks)"
 ],
 "practice": []
})

# ---------------------------------------------------------------- Ethics Casebook
ethics = [
 {"id": f"{D}-e1", "area": "public", "themes": ["g4transparency", "g4leadership"], "card": f"{D}-01",
  "src": "IE p. 1 and p. 10 (editorial)", "title": "When the ballot audits power",
  "news": "American voters handed Congress to the opposition after a President who cast the election as a referendum on himself was seen as wielding unchecked power.",
  "syllabus": "Accountability and ethical governance; Leadership",
  "link": "Elections are the final form of accountability: power that ignores citizens' everyday concerns, such as the cost of living, is answerable at the ballot box. The editorial's warning, that parties tied to a leader's cult inherit his liabilities, is a lesson in why institutions must rank above individuals.",
  "pyq": ["GS4-2014/Q10", "GS4-2020/Q3b"],
  "question": "\"Accountability is the price of power in a democracy.\" Discuss with reference to the relationship between leaders and institutions.",
  "keywords": ["Answerability", "Institutional integrity", "Personality cult", "Checks and balances"]},
 {"id": f"{D}-e2", "area": "gender", "themes": ["g4gender", "g4values"], "card": f"{D}-02",
  "src": "IE p. 9 (Amaal Sheikh)", "title": "The state at the cradle",
  "news": "The Supreme Court said laws disqualifying people with more than two children from panchayat polls have lost relevance, calling the choice to have children 'most intimate and personal'.",
  "syllabus": "Ethics and human interface; Dignity and liberty; Means and ends in public policy",
  "link": "A good end, a stable population, does not justify coercive means that punish personal choices and exclude citizens from democracy. Respecting reproductive autonomy treats citizens as ends in themselves, and the burden of such laws often falls hardest on women.",
  "pyq": ["GS4-2020/Q5a", "GS4-2024/Q6a"],
  "question": "Can a public policy goal justify restricting deeply personal choices of citizens? Discuss with reference to population policy.",
  "keywords": ["Means and ends", "Autonomy", "Dignity", "Proportionality"]},
 {"id": f"{D}-e3", "area": "attitude", "themes": ["g4applied", "g4attitude"], "card": f"{D}-03",
  "src": "IE p. 1 (Soumyarendra Barik)", "title": "Who answers for the algorithm?",
  "news": "The government is considering withdrawing legal immunity from social media platforms whose algorithms decide what users see.",
  "syllabus": "Social influence and persuasion; Ethics of technology; Accountability",
  "link": "Algorithms shape what millions believe, making platforms powerful agents of social influence. Profiting from amplification while disowning its harm is an ethical asymmetry, but accountability must not become a tool to silence lawful speech.",
  "pyq": ["GS4-2025/Q1a", "GS4-2016/Q3"],
  "question": "Should those who design algorithms that shape public opinion bear moral responsibility for their effects? Discuss.",
  "keywords": ["Responsibility of design", "Social influence", "Free speech", "Corporate accountability"]},
 {"id": f"{D}-e4", "area": "justice", "themes": ["g4env", "g4intl"], "card": f"{D}-04",
  "src": "IE p. 10 (editorial) and p. 11 (Sumit Prasad)", "title": "Promises that are never audited",
  "news": "Ahead of COP31, only two countries had filed transparency reports by late October, and only about 5% of 203 voluntary climate initiatives since 2015 met their goals.",
  "syllabus": "Environmental ethics; Ethics in international relations; Climate justice",
  "link": "Pledges without reporting are promises without accountability. Fairness between nations requires the North to deliver promised finance, and fairness to future generations requires everyone to report honestly against what they promised.",
  "pyq": ["GS4-2024/Q2b", "GS4-2026/Q5b"],
  "question": "\"Climate commitments without transparency are a breach of trust with future generations.\" Discuss.",
  "keywords": ["Intergenerational equity", "Climate justice", "Trust", "Common but differentiated responsibilities"]},
 {"id": f"{D}-e5", "area": "public", "themes": ["g4applied", "g4transparency"], "card": f"{D}-07",
  "src": "IE p. 13 (ENS Economic Bureau)", "title": "Autonomy must answer to someone",
  "news": "CERT-In requires AI security incidents to be reported within six hours and audits scaled to risk, after AI agents exceeded their authorised tasks.",
  "syllabus": "Ethics of technology; Accountability; Transparency",
  "link": "When machines act on their own, responsibility must still rest with people. Traceability, explainability and human oversight are the AI-age versions of the public servant's duty to give reasons and answer for decisions.",
  "pyq": ["GS4-2024/Q1a", "GS4-2026/Q1a"],
  "question": "As AI systems take decisions in administration, how can accountability be ensured? Discuss.",
  "keywords": ["Human oversight", "Explainability", "Answerability", "Duty of care"]},
 {"id": f"{D}-e6", "area": "gender", "themes": ["g4gender", "g4psv"], "card": f"{D}-08",
  "src": "IE p. 13 (Siddharth Upasani)", "title": "A dormitory, not a slogan",
  "news": "Tamil Nadu employs 40.3% of India's directly employed women factory workers, helped by an innovative dormitory model adapted from China.",
  "syllabus": "Innovation and creativity in public service; Gender justice; Empathy",
  "link": "Empathy for women's real constraints, distance and safety, led to an innovative, practical fix rather than another incentive. Innovation in public service means seeing the barrier from the citizen's side and removing it.",
  "pyq": ["GS4-2021/Q2b", "GS4-2025/Q5b"],
  "question": "\"Innovation in public service begins with empathy for the citizen's real constraints.\" Discuss with examples.",
  "keywords": ["Innovation in governance", "Empathy", "Gender equity", "Enabler state"]},
 {"id": f"{D}-e7", "area": "public", "themes": ["g4transparency", "g4probity"], "card": f"{D}-10",
  "src": "IE p. 7 (Atri Mitra)", "title": "Land with consent and clear rules",
  "news": "West Bengal's new policy prefers buying and pooling land over acquisition, with a GIS land inventory, online time-stamped allotment and recovery of unused land.",
  "syllabus": "Probity in governance; Transparency; Fairness to affected people",
  "link": "Singur and Nandigram showed the cost of development without consent. Transparent, rule-based allotment reduces discretion and corruption, while a use-it-or-lose-it clause protects public resources from being hoarded.",
  "pyq": ["GS4-2016/Q17", "GS4-2023/Q5b"],
  "question": "How can transparency and consent make land acquisition for industry both fair and efficient? Discuss.",
  "keywords": ["Free and informed consent", "Transparency", "Stewardship of public resources", "Procedural fairness"]},
 {"id": f"{D}-e8", "area": "care", "themes": ["g4aptitude", "g4intl"], "card": f"{D}-13",
  "src": "IE p. 1 (Divya A)", "title": "One life, two countries",
  "news": "A 13-member Indian medical team flew to Mauritius within two days of a night call to save a young woman shot during unrest.",
  "syllabus": "Compassion; Ethics in international relations",
  "link": "Saving one life across borders shows compassion as a value beyond nationality, and shows how kindness becomes trust between nations. The team's choice to work alongside local doctors also shows respect for the partner's dignity.",
  "pyq": ["GS4-2020/Q1a", "GS4-2023/Q3a"],
  "question": "\"Compassion is the most durable form of soft power.\" Discuss with examples from India's foreign policy.",
  "keywords": ["Compassion", "Soft power", "Respect for partners", "Vasudhaiva Kutumbakam"]}
]

# ---------------------------------------------------------------- Essay material
essay = [
 {"id": f"e-{D}-01", "type": "Example", "title": "Power checked at the ballot box",
  "text": "In the 2026 US midterms, voters handed both houses of Congress to the opposition after a President cast the election as a referendum on himself; the editorial called it democracy's ability to correct itself.",
  "use": "For 'Nearly all men can stand adversity, but to test the character, give him power' (2024) and 'A good leader is one who follows the followers' (2026).",
  "themes": ["power"], "src": "IE p. 1 and p. 10", "topics": ["2024B2", "2026B4"]},
 {"id": f"e-{D}-02", "type": "Argument", "title": "When the facts change, the law must too",
  "text": "The Supreme Court said two-child laws have lost relevance because fertility fell from 3 to 1.9; it quoted the idea that survival belongs to the 'most responsive to change', and noted that China could not raise births at will after ending its one-child policy.",
  "use": "For 'You cannot step twice in the same river' (2022) and 'Shelving hard decisions is the least ethical course' (2026).",
  "themes": ["history", "policy"], "src": "IE p. 9 (Amaal Sheikh)", "topics": ["2022B2", "2026B3"]},
 {"id": f"e-{D}-03", "type": "Example", "title": "A label claimed three times",
  "text": "Egypt, Brazil and Turkey all promised an 'implementation COP'; yet only about 5% of 203 voluntary climate initiatives since 2015 met their goals (CEEW).",
  "use": "For 'The cost of being wrong is less than the cost of doing nothing' (2024) and 'The time to repair the roof is when the sun is shining' (2022).",
  "themes": ["nature", "ethics"], "src": "IE p. 11 (Sumit Prasad)", "topics": ["2024B4", "2022B1"]},
 {"id": f"e-{D}-04", "type": "Example", "title": "A simple idea with large consequences",
  "text": "Tamil Nadu employs 40.3% of India's directly employed women factory workers, helped by dormitories near factories that solve women's two main barriers: distance and a safe place to live.",
  "use": "For 'All ideas having large consequences are always simple' (2024) and 'Patriarchy is the least noticed yet the most significant structure of social inequality' (2020).",
  "themes": ["justice", "learning"], "src": "IE p. 13 (Siddharth Upasani)", "topics": ["2024B3", "2020B3"]}
]

edition = {"date": D, "paper": "The Indian Express", "items": items, "ethics": ethics, "essay": essay}

# Tidy: the CERT-In answer had a helper section; fold "Way forward and conclusion" correctly.
for it in items:
    for pr in it.get("practice", []):
        for sec in pr["answer"]:
            if "pts" in sec and sec.get("t") == "":
                del sec["t"]
        if it["id"].endswith("-07"):
            pr["parts"] = ["Introduction", "Risks from autonomous AI agents", "How risk-based audits help", "Way forward", "Conclusion"]
            for sec in pr["answer"]:
                if sec["h"] == "Way forward and conclusion":
                    sec["h"] = "Way forward"

with open(f"editions/{D}.json", "w", encoding="utf-8") as f:
    json.dump(edition, f, ensure_ascii=False, indent=1)
print("wrote", len(items), "stories,", len(ethics), "cases,", len(essay), "essay pieces")
