/* The Mains Gazette — Morning Edition issues.
   One edition per newspaper per day, newest first. Every item is filed automatically into the
   Theme Vault under each theme key listed in `themes` (keys come from data/themes.js).

   Item format:
   {
     id: "2026-10-28-01",                 // date + running number, unique
     title: "Headline as you would write it in notes",
     section: "Editorial" | "Op-Ed" | "National" | "Economy" | "International" | "Science" | ...,
     page: "p. 8",                        // optional
     url: "https://...",                  // optional link to the article
     gs: ["GS2"],                         // one or more of GS1, GS2, GS3, GS4
     syllabus: "GS2 › Social Justice › Welfare schemes for vulnerable sections",
     themes: ["women", "welfare"],        // Theme Vault keys
     context: "One line on what happened.",
     ideas:    ["Perspective or argument, tied to the syllabus", ...],
     keywords: [["Term", "what it means / how to use it"], ...],
     data:     [["Figure", "what it measures", "source named in the article"], ...],
     examples: [["Example", "how to use it in an answer", "GS4"?], ...]   // third value "GS4" marks an Ethics example
   }
*/
window.MM_DOSSIER = {
  editions: [
 {
  "date": "2026-10-27",
  "paper": "The Indian Express (Chandigarh)",
  "items": [
   {
    "id": "2026-10-27-01",
    "title": "EC presents a united front in Supreme Court affidavit on SIR, despite objections within",
    "section": "Front page",
    "page": "p. 1, 2",
    "gs": [
     "GS2"
    ],
    "syllabus": "GS2 › Constitutional bodies (Election Commission, Art 324); Salient features of the RP Act; Electoral reforms",
    "themes": [
     "elections",
     "bodies",
     "egov"
    ],
    "context": "In an affidavit before the Supreme Court, the Election Commission said the Special Intensive Revision (SIR) of electoral rolls is legal and that its SIR orders were issued unanimously. It said notes by individual Election Commissioners were part of consultation, not decisions. The affidavit followed an Indian Express report that two ECs had objected on record 11 times in 10 months.",
    "ideas": [
     "Collegial functioning of a multi-member body: the question is not only whether decisions were formally unanimous, but whether all members were consulted and informed before acting in the Commission's name.",
     "Statutory authority versus technology: the Electoral Registration Officer (ERO) is the legal authority over the roll, but if a centralised IT platform (ECINet) cannot carry out an ERO's decision, statutory power exists only on paper.",
     "Rule of law in process changes: Form 6 can be amended only by the Central Government under the Registration of Electors Rules, 1960. The EC now says the SIR 'declaration' is a separate document and has decided to separate it from Form 6 online.",
     "Accountability through institutional safeguards: the EC has set up a committee with IIT and IISc experts to review the platform's legal compliance, close to what one EC had proposed in May.",
     "Voter rights: the Supreme Court said 'nobody will be prosecuted' for using Form 6 to get back on the rolls after deletion, but petitioners want a separate form for deleted voters."
    ],
    "keywords": [
     [
      "Special Intensive Revision (SIR)",
      "Fresh, intensive revision of electoral rolls, with 'mapping' to the 2002/2003 rolls"
     ],
     [
      "Form 6",
      "Statutory form for inclusion of a new voter in the electoral roll"
     ],
     [
      "'Mapping'",
      "Linking an applicant to their own, parent's or grandparent's entry in an earlier SIR roll to avoid further documents"
     ],
     [
      "Electoral Registration Officer (ERO)",
      "Statutory officer responsible for preparing and revising the roll"
     ],
     [
      "ECINet",
      "EC's centralised IT platform for electoral roll functions"
     ],
     [
      "Article 324",
      "Superintendence, direction and control of elections vested in the Election Commission"
     ]
    ],
    "data": [
     [
      "14 notes in 10 months",
      "Recorded by ECs Sukhbir Singh Sandhu and Vivek Joshi objecting to decisions taken without their knowledge",
      "IE"
     ],
     [
      "24.06.2025, 27.10.2025, 14.05.2026",
      "Dates of the three SIR orders the EC says were unanimous",
      "EC affidavit, via IE"
     ],
     [
      "97 voters (88 re-applied)",
      "Left off Goa's final roll; 88 have since applied through Form 6",
      "EC affidavit, via IE"
     ],
     [
      "33% (40% in parts of Pune, Mumbai)",
      "Voters struck off in Maharashtra's SIR, as argued before the SC",
      "Sr Adv Arvind Datar, via IE p. 8"
     ],
     [
      "1.22 crore",
      "Names deleted in Maharashtra over 'logical discrepancies', as argued in court",
      "IE p. 8"
     ]
    ],
    "examples": [
     [
      "CJI Surya Kant: 'Nobody will be prosecuted'",
      "SC assurance to deleted voters filing Form 6 (Maharashtra SIR case)"
     ],
     [
      "Goa: 8 requests in 7 days",
      "State election office could not get the software to reverse deletions; shows technology overriding statutory discretion"
     ],
     [
      "Recording dissent in writing",
      "Use for courage of conviction and accountability in public office",
      "GS4"
     ]
    ]
   },
   {
    "id": "2026-10-27-02",
    "title": "Judges of Bengal SIR tribunals ask EC to fix portal, drop Aadhaar authentication",
    "section": "Front page",
    "page": "p. 1, 2",
    "gs": [
     "GS2"
    ],
    "syllabus": "GS2 › Quasi-judicial bodies; Constitutional bodies (ECI); Role of the Supreme Court (Art 142)",
    "themes": [
     "elections",
     "bodies",
     "judiciary",
     "egov"
    ],
    "context": "Retired High Court judges heading the appellate tribunals created on Supreme Court orders for West Bengal's SIR have objected twice in four weeks to an EC portal feature that requires their personal Aadhaar authentication before they can upload final orders. Orders are being decided physically but not uploaded.",
    "ideas": [
     "Independence of quasi-judicial authorities: requiring judges to authenticate with private Aadhaar numbers to issue orders lets an administrative body's design control a judicial function.",
     "Right to appeal must be real: the portal could not serve notices, accept additional documents, hold virtual hearings or restore deleted voters, and appellants could not download orders.",
     "Scale versus capacity: 38.31 lakh appeals were filed but only 1.26 lakh disposed of by 10 September, and the tribunals sit in a makeshift building about 30 km from Kolkata.",
     "Article 142 in action: the SC ordered judicial officers to adjudicate voters' eligibility because of a trust deficit between the state government and the EC, then set up appellate tribunals.",
     "Dignity of the institution: the judges' letter on cramped rooms, no chambers and a Rs 25,000-per-week honorarium shows how ad hoc bodies are often under-resourced."
    ],
    "keywords": [
     [
      "Appellate tribunal",
      "Body hearing appeals against deletions or inclusions in the SIR"
     ],
     [
      "Quasi-judicial body",
      "Authority with court-like decision-making powers"
     ],
     [
      "Article 142",
      "SC's power to pass orders for 'complete justice'"
     ],
     [
      "Logical discrepancies",
      "Category used by the EC's software to flag electors"
     ],
     [
      "Universal adult franchise (Art 326)",
      "Right of every adult citizen to vote"
     ]
    ],
    "data": [
     [
      "60.06 lakh",
      "Electors flagged by EC software for 'logical discrepancies'",
      "IE"
     ],
     [
      "27.16 lakh",
      "Electors deleted by judicial officers before the April Assembly poll",
      "IE"
     ],
     [
      "38.31 lakh appeals",
      "Filed by 18 September: 22.21 lakh by deleted voters, 16.10 lakh against inclusions",
      "EC to SC, via IE"
     ],
     [
      "1.26 lakh",
      "Appeals disposed of by 10 September",
      "EC to SC, via IE"
     ],
     [
      "19",
      "Former judges appointed as appellate tribunals",
      "IE"
     ]
    ],
    "examples": [
     [
      "Aadhaar screen added on 21 September",
      "Judges sought its removal in writing on 24 September and again on 13 October"
     ],
     [
      "Bengal SIR tribunals",
      "Example of e-governance designed around the system rather than the user (link: 2025 GS2 Q7)"
     ]
    ]
   },
   {
    "id": "2026-10-27-03",
    "title": "Censorship, gag on investigations: news publishers move SC against privacy law",
    "section": "Front page",
    "page": "p. 1, 2",
    "gs": [
     "GS2",
     "GS3"
    ],
    "syllabus": "GS2 › Fundamental rights (Art 19(1)(a), Art 21); RTI, transparency · GS3 › Data protection and cyber security",
    "themes": [
     "rights",
     "cyber",
     "judiciary",
     "egov"
    ],
    "context": "A group of 21 news publishers, the Digital News Publishers Association (DNPA, whose members include The Indian Express, Network18 and NDTV), has challenged the Digital Personal Data Protection law in the Supreme Court. In its 698-page filing it argues that without a journalism exemption the law would trample investigative work and expose sources. The case was to be heard on 27 October.",
    "ideas": [
     "Two fundamental rights in tension: privacy (Puttaswamy) and press freedom under Article 19(1)(a). The test is whether the restrictions are reasonable and proportionate.",
     "Consent versus investigation: requiring a journalist to notify and seek consent from the subject of an investigation 'would allow that subject to destroy evidence, intimidate witnesses', the DNPA argues.",
     "Right to erasure without a public-interest safeguard could force publishers to unpublish or heavily redact factual reports.",
     "State exemptions versus press: the DNPA says India granted broad exemptions to the state but none to the press, unlike data laws in the EU, Singapore and Britain.",
     "Sources and whistle-blowers: the power to call for 'such information as it may call for' could force newsrooms to divulge sources and deter whistle-blowers on corruption or electoral malpractice."
    ],
    "keywords": [
     [
      "Data principal / data fiduciary",
      "The person whose data is processed / the entity that decides how it is processed"
     ],
     [
      "Journalistic exemption",
      "Carve-out for news gathering, present in data laws of the EU, Singapore and the UK"
     ],
     [
      "Right to erasure",
      "A person's right to have their data deleted"
     ],
     [
      "Chilling effect",
      "Discouraging legitimate speech through fear of legal consequences"
     ],
     [
      "Prior restraint / pre-censorship",
      "Restricting publication before it happens"
     ]
    ],
    "data": [
     [
      "21",
      "News publishers in the DNPA challenge",
      "IE / Reuters"
     ],
     [
      "698 pages",
      "Length of the DNPA's filing",
      "IE / Reuters"
     ],
     [
      "May 2027",
      "When most of the law's contentious provisions kick in",
      "IE / Reuters"
     ],
     [
      "6 October 2026",
      "Date the lawsuit was filed",
      "IE / Reuters"
     ]
    ],
    "examples": [
     [
      "DNPA's August letter to the government",
      "Said India 'has chosen to grant broad exemptions to the state' without corresponding protection to the press"
     ],
     [
      "Investigative journalist protecting a source",
      "Use for integrity, courage and public interest",
      "GS4"
     ]
    ]
   },
   {
    "id": "2026-10-27-04",
    "title": "When courts are too slow, police replace judges",
    "section": "Ideas page (Abhinav Chandrachud)",
    "page": "p. 13",
    "gs": [
     "GS2",
     "GS4"
    ],
    "syllabus": "GS2 › Structure, organisation and functioning of the judiciary; Police reforms · GS4 › Probity in governance",
    "themes": [
     "judiciary",
     "rights",
     "egov"
    ],
    "context": "Abhinav Chandrachud argues that years-long civil suits push well-connected litigants to the police, who turn debt and contract disputes into criminal cases of 'cheating' or 'breach of trust'. This creates a parallel, coercive civil-justice system.",
    "ideas": [
     "Justice delayed creates 'parallel justice': police summons, 'preliminary inquiries' and threats of arrest pressure debtors to settle, often without an FIR ever being registered.",
     "A breach of contract to pay money is not cheating or criminal breach of trust; the Supreme Court has repeatedly condemned this as 'abuse of process', but the 'law in action' differs from the 'law on the books'.",
     "Capacity gap: too few judges is a major cause; Maharashtra has 15 judges per million people and the Bombay High Court only 1.9 per million.",
     "Structural and cultural reform is needed: archaic procedure gives defendants every chance to thwart a decree. The Privy Council said in 1872 that 'the difficulties of a litigant in India begin when he has obtained a Decree'.",
     "Corruption risk: the article reports rumours of police taking cases on a 'commission basis', linking judicial delay to police integrity."
    ],
    "keywords": [
     [
      "Criminalisation of civil disputes",
      "Giving a criminal colour to civil claims for quick relief"
     ],
     [
      "Abuse of process",
      "Misusing legal proceedings; grounds for quashing"
     ],
     [
      "Execution of decree",
      "Enforcing a civil court's judgment"
     ],
     [
      "Law on the books vs law in action",
      "Gap between legal rules and how they work in practice"
     ],
     [
      "Original civil suit",
      "Civil suit filed directly in a High Court with original jurisdiction"
     ]
    ],
    "data": [
     [
      "79 years",
      "A Bombay HC suit filed in 1947 that was settled out of court only this year",
      "IE op-ed"
     ],
     [
      "20+ years",
      "Usual time for a suit at the Bombay HC, per practitioners",
      "IE op-ed"
     ],
     [
      "15 vs 1.9 vs 157",
      "Judges per million people: Maharashtra, Bombay HC, New York state",
      "IE op-ed"
     ],
     [
      "6,48,725",
      "Cases pending at the Bombay HC (9,454 civil suits)",
      "NJDG, via IE op-ed"
     ],
     [
      "50%",
      "Share of such police cases said to end at the preliminary-inquiry stage",
      "IE op-ed (some accounts)"
     ]
    ],
    "examples": [
     [
      "The Godfather's Bonasera",
      "Literary example of turning to extra-judicial power when courts fail"
     ],
     [
      "Police officer refusing to act as a debt collector",
      "Use for integrity and resisting improper influence",
      "GS4"
     ]
    ]
   },
   {
    "id": "2026-10-27-05",
    "title": "Census duty: the government's powers and private citizens' rights",
    "section": "Explained",
    "page": "p. 16",
    "gs": [
     "GS2",
     "GS1"
    ],
    "syllabus": "GS2 › Fundamental rights (Art 23); Delegated legislation; Role of courts · GS1 › Population",
    "themes": [
     "rights",
     "demography",
     "judiciary"
    ],
    "context": "The Centre amended the Census Rules, 1990 to state expressly that teachers of private aided and unaided institutions, and staff of banks, companies, societies and trusts, can be appointed as enumerators. It also kept the wider 'any person' category. The change came eight days after the Punjab and Haryana High Court stayed Haryana's moves to draft private-school teachers.",
    "ideas": [
     "Rules cannot travel beyond the Act: the Bombay HC held prima facie that 'any person' cannot be read so widely that it covers doctors, advocates or chartered accountants.",
     "Section 4(2) of the Census Act, 1948 lets states appoint 'persons' as census officers who 'shall be bound to serve', which is the government's strongest basis.",
     "Narrower provisions elsewhere: Section 4A obliges local authorities to lend staff, and Sections 6 and 7 allow help from establishments mainly to count people on their own premises.",
     "Article 23(2) permits compulsory service for public purposes, but a fair system needs statutory detail on liability, notice, hardship and pay, like the National Service Act, 1972, which the Census Act lacks.",
     "Balancing public duty and learning: in 2011 the Bombay HC allowed private teachers' deployment but outside school hours and exempted teachers of Classes 10 and 12."
    ],
    "keywords": [
     [
      "Article 23(1) and 23(2)",
      "Ban on begaar and forced labour, with an exception for compulsory public service without discrimination"
     ],
     [
      "Section 4(2), Census Act",
      "Power to appoint 'persons' as census officers who are bound to serve"
     ],
     [
      "Delegated legislation",
      "Rules framed by the executive under an Act"
     ],
     [
      "Ultra vires",
      "Beyond the powers of the parent law"
     ],
     [
      "Special police officer",
      "Compulsory public service under the Police Act, 1861 (Dulal Samanta case, 1958)"
     ]
    ],
    "data": [
     [
      "~31 lakh",
      "Enumerators and supervisors being trained for the Census",
      "IE Explained"
     ],
     [
      "500+",
      "Private unaided and minority schools given interim protection by the Bombay HC (22 May)",
      "IE Explained"
     ],
     [
      "150",
      "LIC employees Jalandhar office was asked to provide in 2010; order quashed",
      "IE Explained"
     ]
    ],
    "examples": [
     [
      "Manisha Jain case (2010)",
      "P&H HC observed it would be 'incorrect' to force a private teacher into Census work after hours"
     ],
     [
      "Gujarat HC LIC ruling (2019)",
      "Held Section 7 gives no power to requisition; under challenge in the SC"
     ],
     [
      "Teacher balancing census duty and classes",
      "Use for conflicting duties and public service values",
      "GS4"
     ]
    ]
   },
   {
    "id": "2026-10-27-06",
    "title": "Ankita Bhandari deserved justice, not to become a permanent hashtag: policing in the age of social media",
    "section": "Ideas page (Abhinav Kumar)",
    "page": "p. 13",
    "gs": [
     "GS2",
     "GS4"
    ],
    "syllabus": "GS2 › Police reforms; Criminal justice system · GS4 › Ethics in public administration",
    "themes": [
     "judiciary",
     "women",
     "egov",
     "rights"
    ],
    "context": "A senior IPS officer argues that the 2022 murder of 19-year-old Ankita Bhandari in Uttarakhand was investigated and tried swiftly, with all three accused convicted in May 2025. Yet public perception is shaped by social media claims of a 'VIP' cover-up, and the case was reopened through a CBI probe on the basis of disputed audio clips.",
    "ideas": [
     "Evidence versus virality: investigations run on evidence that must survive cross-examination, while social media runs on plausibility, outrage and repetition.",
     "Police silence protects the trial, but it is read as complicity, and the vacuum fills with rumour and motivated leaks.",
     "Golden hour and jurisdiction: early delay came from the anachronistic revenue police system in the hills, and extending regular policing must be completed.",
     "Avoid populist acts: the hasty demolition of part of the resort handed critics a permanent charge of evidence destruction.",
     "Swift justice is possible: chargesheet, trial and conviction came within about three years, when the murder conviction rate is under half and trials often exceed a decade."
    ],
    "keywords": [
     [
      "Revenue police",
      "Patwari-based policing system in parts of Uttarakhand's hills"
     ],
     [
      "Special Investigation Team (SIT)",
      "Dedicated team set up for a sensitive case"
     ],
     [
      "Golden hour",
      "The first hours after a crime, critical for evidence"
     ],
     [
      "Media trial",
      "Public verdicts formed by media before or despite courts"
     ]
    ],
    "data": [
     [
      "~500 pages",
      "SIT chargesheet",
      "IE op-ed"
     ],
     [
      "30 May 2025",
      "All three accused convicted and sentenced to rigorous life imprisonment",
      "IE op-ed"
     ],
     [
      "Under half",
      "Conviction rate for murder in India",
      "IE op-ed"
     ]
    ],
    "examples": [
     [
      "Odisha youth's death after Haryana Police detention (IE p. 7)",
      "A 26-year-old NDPS suspect was found hanging a day after arrest; residents allege custodial torture. Use for custodial justice and police accountability"
     ],
     [
      "Police officer resisting pressure to leak case details",
      "Use for confidentiality, integrity and fairness",
      "GS4"
     ]
    ]
   },
   {
    "id": "2026-10-27-07",
    "title": "Keralam passes India's first state law to protect senior citizens' rights",
    "section": "Politics",
    "page": "p. 8",
    "gs": [
     "GS2",
     "GS1"
    ],
    "syllabus": "GS2 › Welfare schemes and laws for vulnerable sections · GS1 › Population and demographic transition",
    "themes": [
     "vulnerable",
     "demography",
     "health",
     "rights"
    ],
    "context": "The Keralam Assembly passed the Senior Citizens (Care and Protection of Rights) Bill, 2026, the first state-level legal framework for elder welfare. It makes elder care rights-based, regulated and professional.",
    "ideas": [
     "Demographic transition demands a rights-based approach: ageing societies need regulated care rather than charity, as the Chief Minister put it.",
     "Ageing in place: the Bill recognises the right to live safely and independently at home, with institutional care as the last resort.",
     "Dignity at the end of life: it recognises living wills on intensive care and life-sustaining interventions (link: 2026 GS2 Q12 on passive euthanasia).",
     "Regulating the care economy: standards for care centres and hospices, certification of caregivers with police clearance, and fair pay and social security for caregivers.",
     "Intersectionality: priority for vulnerable senior women, including widows, abandoned, disabled, survivors of violence and destitute women."
    ],
    "keywords": [
     [
      "Living will / advance directive",
      "A person's written choices on life-sustaining treatment"
     ],
     [
      "Ageing in place",
      "Elderly people living independently at home"
     ],
     [
      "Geriatric care certification",
      "Proposed framework to train and certify caregivers"
     ],
     [
      "Cognisable and bailable offences",
      "Police can arrest without warrant, but bail is a right"
     ]
    ],
    "data": [
     [
      "Up to 3 years + Rs 50,000",
      "Penalty for property grabbing, cruelty or abandonment of a resident",
      "IE"
     ],
     [
      "Up to 2 years + Rs 25,000",
      "Penalty for obstructing the Act's implementation",
      "IE"
     ],
     [
      "Rs 10,000",
      "Fine for failing to report suspected abuse",
      "IE"
     ]
    ],
    "examples": [
     [
      "Keralam Senior Citizens Bill, 2026",
      "First state-level elder-rights law; compare with the central Maintenance and Welfare of Parents and Senior Citizens Act, 2007"
     ],
     [
      "Caring for an elderly parent",
      "Use for compassion, duty and family values",
      "GS4"
     ]
    ]
   },
   {
    "id": "2026-10-27-08",
    "title": "TN defections: SC refuses CBI probe into 'horse-trading'",
    "section": "Nation",
    "page": "p. 9",
    "gs": [
     "GS2"
    ],
    "syllabus": "GS2 › Parliament and state legislatures; Anti-defection; Representation of the People Act",
    "themes": [
     "elections",
     "parl",
     "judiciary"
    ],
    "context": "The Supreme Court dismissed a plea for a CBI probe into alleged 'horse-trading' after six AIADMK MLAs resigned their seats and joined the ruling Tamilaga Vettri Kazhagam (TVK), leaving the petitioner free to pursue other remedies.",
    "ideas": [
     "Resignation as a route around the Tenth Schedule: legislators who resign before switching parties avoid disqualification for defection, but force by-elections and raise questions about the voter's mandate.",
     "Courts are reluctant to order investigations into political realignment through writ petitions; other legal remedies remain.",
     "Electoral reform debate: proposals include barring resigning legislators from contesting by-elections or holding office for a period."
    ],
    "keywords": [
     [
      "Tenth Schedule",
      "Anti-defection law (52nd Amendment, 1985)"
     ],
     [
      "Horse-trading",
      "Inducing legislators to switch sides"
     ],
     [
      "Voluntarily giving up membership",
      "A ground for disqualification under the Tenth Schedule"
     ]
    ],
    "data": [
     [
      "6",
      "AIADMK MLAs who resigned between May and June 2026 and joined the TVK",
      "IE"
     ]
    ],
    "examples": [
     [
      "Tamil Nadu resignations, 2026",
      "Example of the resign-and-rejoin route around the anti-defection law"
     ]
    ]
   },
   {
    "id": "2026-10-27-09",
    "title": "China says it is strictly abiding by pacts with India amid LAC face-offs in Arunachal",
    "section": "Nation",
    "page": "p. 10",
    "gs": [
     "GS2",
     "GS3"
    ],
    "syllabus": "GS2 › India and its neighbourhood · GS3 › Security challenges in border areas",
    "themes": [
     "neighbour",
     "border"
    ],
    "context": "Days after the ITBP chief spoke of face-offs at several locations in Arunachal Pradesh, China said it strictly abides by agreements and conducts normal patrols. India's MEA said friction occurs when Chinese forces depart from established patrolling patterns in border pockets.",
    "ideas": [
     "Normalisation is fragile: both sides have rebuilt ties since Galwan (2020) through talks and summits, but patrolling friction keeps recurring.",
     "Mechanisms matter: diplomatic and military channels, such as Corps Commander talks, are needed to avoid 'misunderstanding and miscalculation' along the LAC.",
     "The 'three mutuals' (mutual respect, mutual sensitivity, mutual interest) remain India's framework for the relationship.",
     "Border management and capacity: the ITBP's Shaurya commando teams handled the situation, which links to border infrastructure and policing."
    ],
    "keywords": [
     [
      "Line of Actual Control (LAC)",
      "De facto India-China boundary"
     ],
     [
      "Patrolling points / friction points",
      "Areas where patrols of the two sides meet"
     ],
     [
      "Corps Commander-level talks",
      "Senior military dialogue mechanism"
     ],
     [
      "'Three mutuals'",
      "India's formula: mutual respect, sensitivity and interest"
     ]
    ],
    "data": [
     [
      "6 September 2026",
      "Corps Commander talks at the Wacha-Damai border meeting point",
      "IE"
     ],
     [
      "Over 4 years",
      "Duration of the post-Galwan military stand-off",
      "IE"
     ]
    ],
    "examples": [
     [
      "Taksing area, Arunachal Pradesh",
      "Recent reports of tension; ITBP response"
     ],
     [
      "Modi-Xi talks at BRICS summit, New Delhi",
      "Emphasis on sensitivity to each other's core issues"
     ]
    ]
   },
   {
    "id": "2026-10-27-10",
    "title": "Lula wins a record fourth term: what it means for the Global South and India",
    "section": "Editorial; World; Explained",
    "page": "p. 12, 14, 16",
    "gs": [
     "GS2"
    ],
    "syllabus": "GS2 › Effect of policies of other countries on India's interests; Regional and global groupings (BRICS, IBSA)",
    "themes": [
     "groupings",
     "powers",
     "intl"
    ],
    "context": "Brazil's Luiz Inácio Lula da Silva won the presidential runoff with 51.79% of the vote against Flávio Bolsonaro, interrupting a right-wing wave in Latin America. The Indian Express editorial calls it 'heartening for India'.",
    "ideas": [
     "Multipolarity: Lula's win keeps Brazil on a Global South-oriented course, sustaining BRICS and IBSA as vehicles for a more multipolar order (IE editorial).",
     "Strategic autonomy: Lula resisted US tariffs of up to 50% and stayed out of a US-led security coalition, framing the election around sovereignty ('Brazil is no one's backyard').",
     "Democratic resilience: Flávio Bolsonaro's call to annul the result revives tensions over peaceful transfer of power, as after 2022.",
     "Domestic limits: a slowing economy, public debt above 82% of GDP and the most conservative Congress since the 1980s will constrain reforms.",
     "India link: at the BRICS Parliamentary Forum in New Delhi, Lok Sabha Speaker Om Birla said BRICS must amplify the voice of the Global South."
    ],
    "keywords": [
     [
      "Global South",
      "Developing countries seeking a greater say in global governance"
     ],
     [
      "IBSA",
      "India-Brazil-South Africa dialogue forum"
     ],
     [
      "'Donroe Doctrine'",
      "Term for Trump's assertive policy in the Western Hemisphere"
     ],
     [
      "Runoff",
      "Second-round election between the top two candidates"
     ]
    ],
    "data": [
     [
      "51.79%",
      "Lula's vote share in the runoff",
      "IE Explained"
     ],
     [
      "~3 million",
      "Additional voters in the runoff compared with the first round",
      "Brazil's Superior Electoral Court, via IE"
     ],
     [
      "82%+",
      "Brazil's public debt as share of GDP",
      "IE Explained"
     ],
     [
      "49.5%",
      "Share of world population BRICS represents",
      "RS Deputy Chairman Harivansh, via IE p. 8"
     ]
    ],
    "examples": [
     [
      "12th BRICS Parliamentary Forum, New Delhi",
      "Theme: 'Strengthening Parliaments for People-Centric Development'"
     ],
     [
      "First runoff win by a second-placed candidate since 1989",
      "Shows the effect of mobilisation and youth turnout"
     ]
    ]
   },
   {
    "id": "2026-10-27-11",
    "title": "To ease energy transition, ramp up storage, strengthen transmission",
    "section": "Editorial page (Somit Dasgupta)",
    "page": "p. 12",
    "gs": [
     "GS3"
    ],
    "syllabus": "GS3 › Infrastructure: energy; Investment models; Conservation",
    "themes": [
     "energy",
     "climate",
     "invest"
    ],
    "context": "A former CEA member writes that India has moved from chronic power deficits to a solar-hour glut and night-time deficits. The answer, he argues, is storage, stronger transmission, demand-side management and markets that reward flexibility.",
    "ideas": [
     "From deficit to glut: massive capacity growth cut peak and energy deficits to about 1-2%, but created a mismatch between solar hours and evening demand.",
     "Double loss: backing down solar wastes clean power, and frequent ramping of coal plants shortens their life.",
     "Storage economics: storage, especially pumped storage, is slow to build, and prices discovered through competitive bids are said to be non-remunerative, so projects may stall.",
     "Reform history: the Electricity Act, 2003 unbundled SEBs and created regulators, but government interference in tariffs left discoms financially unsustainable.",
     "Lesson from the 2010s: lending without power purchase agreements and fuel linkages stranded capacity and raised bank NPAs."
    ],
    "keywords": [
     [
      "Curtailment",
      "Forcing generators to back down output the grid cannot absorb"
     ],
     [
      "Minimum technical load",
      "Lowest level a coal plant can safely run at"
     ],
     [
      "Pumped storage",
      "Hydro storage using surplus power to pump water uphill"
     ],
     [
      "Demand-side management",
      "Shifting or reducing consumer demand to balance the grid"
     ],
     [
      "Unbundling",
      "Separating generation, transmission and distribution"
     ]
    ],
    "data": [
     [
      "~292 GW (53%)",
      "Renewable capacity including large hydro, share of total capacity",
      "IE op-ed"
     ],
     [
      "~162 GW",
      "Solar capacity",
      "IE op-ed"
     ],
     [
      "1,00,000+ MW",
      "Coal capacity added 2010-2020, about equal to 1947-2010",
      "IE op-ed"
     ],
     [
      "40%",
      "Share of Indians without electricity 30 years ago",
      "World Bank, via IE op-ed"
     ]
    ],
    "examples": [
     [
      "Electricity exchanges (2008)",
      "Spot prices drove a capacity boom"
     ],
     [
      "Solar glut and night deficits, 2026",
      "Example for energy transition and grid-flexibility answers"
     ]
    ]
   },
   {
    "id": "2026-10-27-12",
    "title": "Russian crude purchases may fall in November as West Asian oil becomes more viable: BPCL",
    "section": "Economy",
    "page": "p. 15",
    "gs": [
     "GS3",
     "GS2"
    ],
    "syllabus": "GS3 › Energy security · GS2 › Effect of policies of other countries on India's interests",
    "themes": [
     "energy",
     "regions",
     "powers"
    ],
    "context": "BPCL expects Russian crude purchases to drop significantly in November because of high freight costs and supplier premiums, as West Asian supplies recover after the Strait of Hormuz disruptions.",
    "ideas": [
     "Energy security through flexibility: refiners keep a diversified basket and switch suppliers as prices, freight and route risks change.",
     "Discount turned premium: Russian oil, discounted for over four years, has recently carried a premium because of the global supply crunch and surging freight.",
     "Chokepoint dependence: Iraq, Kuwait and Qatar depend on the Strait of Hormuz, while Saudi Arabia and the UAE have bypass pipelines.",
     "Ship-to-ship (STS) transfers have helped move oil from inside the strait, showing logistical adaptation in a crisis."
    ],
    "keywords": [
     [
      "Crude basket",
      "Mix of crude grades a refiner buys"
     ],
     [
      "Supplier premium",
      "Price above the benchmark charged by sellers"
     ],
     [
      "Ship-to-ship (STS) transfer",
      "Moving cargo between tankers at sea"
     ],
     [
      "Chokepoint",
      "Narrow sea passage vital to trade, such as the Strait of Hormuz"
     ]
    ],
    "data": [
     [
      "~37%",
      "Russian grades' share in BPCL's crude procurement, July-September",
      "BPCL, via IE"
     ],
     [
      "67%",
      "BPCL's spot crude share in Q2",
      "BPCL, via IE"
     ],
     [
      "$12-13 → $1-2/bbl",
      "Premium on Russian oil, October vs December cargoes",
      "BPCL, via IE"
     ],
     [
      "56.3% → 36.7%",
      "Share of five Hormuz-route West Asian suppliers in India's oil imports, February vs September",
      "Kpler, via IE"
     ]
    ],
    "examples": [
     [
      "Saudi Arabia (19%) and UAE (17%)",
      "Their shares of BPCL's imports in July-September, showing recovery of Gulf volumes"
     ]
    ]
   },
   {
    "id": "2026-10-27-13",
    "title": "Govt notifies E100 as auto fuel for flex-fuel vehicles",
    "section": "Economy",
    "page": "p. 15",
    "gs": [
     "GS3"
    ],
    "syllabus": "GS3 › Infrastructure: energy; Environment (pollution); Agriculture-linked industry",
    "themes": [
     "energy",
     "climate",
     "pollution"
    ],
    "context": "The Ministry of Road Transport and Highways amended the Central Motor Vehicle Rules to allow flex-fuel vehicles to run on up to E100 (nearly pure ethanol). Ordinary petrol or E20 vehicles cannot use E100.",
    "ideas": [
     "Import substitution: higher ethanol blends reduce dependence on imported crude, which is especially relevant amid West Asia supply shocks.",
     "Emissions: ethanol has a lower fossil carbon footprint and can cut tailpipe carbon monoxide and some hydrocarbons, depending on feedstock and production pathway.",
     "Ecosystem push: the rule paves the way for flex-fuel components, ethanol production infrastructure and vehicles.",
     "Trade-offs to examine: feedstock competition with food and water use (sugarcane, grains), and vehicle compatibility debates seen with E20."
    ],
    "keywords": [
     [
      "Flex-fuel vehicle (FFV)",
      "Vehicle that can run on varying petrol-ethanol blends"
     ],
     [
      "E20 / E85 / E100",
      "Petrol with 20%, 85% or ~100% ethanol"
     ],
     [
      "Lifecycle emissions",
      "Emissions across production, transport and use"
     ]
    ],
    "data": [
     [
      "Up to E100",
      "Blend now permitted for flex-fuel vehicles",
      "MoRTH, via IE"
     ]
    ],
    "examples": [
     [
      "Fuel compatibility sticker",
      "Motorists must check vehicle stickers and owner's manuals before choosing fuel"
     ]
    ]
   },
   {
    "id": "2026-10-27-14",
    "title": "Rs 2.12 lakh crore defence procurement cleared; Rajnath calls for 'Aatmanirbharta 2.0'",
    "section": "Nation",
    "page": "p. 9",
    "gs": [
     "GS3"
    ],
    "syllabus": "GS3 › Security forces and their mandate; Indigenisation of technology",
    "themes": [
     "border",
     "industry"
    ],
    "context": "The Defence Acquisition Council (DAC) gave Acceptance of Necessity to proposals worth about Rs 2.12 lakh crore, with about 82% from Indian industry. Defence Minister Rajnath Singh said self-reliance is entering a 'second phase' focused on top-end technology.",
    "ideas": [
     "Self-reliance phase 2: from assembling to designing cost-effective, operationally superior and globally competitive products.",
     "Supply chains are a strategic imperative linked to national security, not just a technical issue.",
     "Dual-use roadmap: identify technologies serving both civil and military needs to spread cost and spur innovation.",
     "Modern warfare priorities: counter-drone systems, very short-range air defence and kamikaze drones reflect lessons from recent conflicts."
    ],
    "keywords": [
     [
      "Acceptance of Necessity (AoN)",
      "In-principle approval to start procurement"
     ],
     [
      "Defence Acquisition Council (DAC)",
      "Highest procurement decision body, chaired by the Defence Minister"
     ],
     [
      "C-UAS",
      "Counter-unmanned aerial systems"
     ],
     [
      "VSHORADS",
      "Very short-range air defence system"
     ]
    ],
    "data": [
     [
      "~Rs 2,12,000 crore",
      "Value of AoNs accorded",
      "Defence Ministry, via IE"
     ],
     [
      "~82%",
      "Share of procurement from Indian industry",
      "Defence Ministry, via IE"
     ]
    ],
    "examples": [
     [
      "Swavlamban 2026",
      "Indian Navy seminar on indigenisation where 'Aatmanirbharta 2.0' was outlined"
     ],
     [
      "Mobile X-band Doppler weather radar",
      "Dual-use example: localised weather surveillance in forward areas"
     ]
    ]
   },
   {
    "id": "2026-10-27-15",
    "title": "RELIEF scheme for West Asia exporters extended as low-margin exports struggle",
    "section": "Economy",
    "page": "p. 15",
    "gs": [
     "GS3"
    ],
    "syllabus": "GS3 › Effects of global events on the economy; Export promotion",
    "themes": [
     "industry",
     "regions",
     "growth"
    ],
    "context": "The Commerce Ministry extended a relief scheme for exporters to 10 West Asian countries until March 2027, citing continued disruption to maritime logistics. Under it, ECGC gives up to 100% compensation for war-related losses with premiums frozen at pre-disruption levels.",
    "ideas": [
     "Shocks hit low-margin exporters hardest: garments, food items and ceramics cannot absorb high freight rates and port congestion.",
     "Risk insurance as policy tool: export credit guarantees and premium freezes keep exporters in the market during conflict.",
     "Depreciation is not enough: a weaker rupee did not offset logistics costs, as garment exports still fell."
    ],
    "keywords": [
     [
      "ECGC",
      "Export Credit Guarantee Corporation of India"
     ],
     [
      "Export Promotion Mission",
      "Budget initiative under which the relief scheme operates"
     ],
     [
      "War-related political risk",
      "Losses from conflict that commercial insurance may not cover"
     ]
    ],
    "data": [
     [
      "10 countries",
      "Eligible destinations including the UAE, Saudi Arabia, Kuwait, Qatar and Iran",
      "Commerce Ministry, via IE"
     ],
     [
      "Up to 100% / 95%",
      "Compensation for war-related losses / risk cover under Component II",
      "IE"
     ],
     [
      "-20.6%",
      "Fall in ceramic and glass exports, April-September",
      "Commerce Ministry data, via IE"
     ],
     [
      "-6%",
      "Fall in ready-made garment exports, April-September",
      "IE"
     ]
    ],
    "examples": [
     [
      "RELIEF scheme",
      "Example of trade policy response to geopolitical disruption"
     ]
    ]
   },
   {
    "id": "2026-10-27-16",
    "title": "Govt to study hurdles faced by women-led informal businesses",
    "section": "Economy",
    "page": "p. 15",
    "gs": [
     "GS1",
     "GS3"
    ],
    "syllabus": "GS1 › Role of women; Women's issues · GS3 › Employment; Inclusive growth",
    "themes": [
     "women",
     "jobs",
     "inclusive"
    ],
    "context": "The Statistics Ministry plans to add questions to its Annual Survey of Unincorporated Sector Enterprises (ASUSE) on 'women-specific constraints' such as restrictions on time and mobility and household responsibilities.",
    "ideas": [
     "Data drives policy: measuring constraints on women entrepreneurs is the first step to designing targeted support.",
     "Care burden: household responsibilities are a key barrier to raising the female Labour Force Participation Rate (link: 2023 GS3 Q12 on the care economy).",
     "Youth gap is widest: the gender gap in participation is largest among 15-29 year olds."
    ],
    "keywords": [
     [
      "ASUSE",
      "Annual Survey of Unincorporated Sector Enterprises"
     ],
     [
      "Female LFPR",
      "Share of women working or seeking work"
     ],
     [
      "Women-specific constraints",
      "Time, mobility and household-responsibility barriers"
     ]
    ],
    "data": [
     [
      "27%",
      "Informal enterprises headed by female proprietors",
      "ASUSE 2025, via IE"
     ],
     [
      "34.6% vs 77.4%",
      "Female vs male LFPR, September",
      "PLFS, via IE"
     ],
     [
      "21.5% vs 61.1%",
      "Female vs male LFPR, ages 15-29",
      "PLFS, via IE"
     ]
    ],
    "examples": [
     [
      "ASUSE questionnaire revision",
      "Comments invited till 15 November; example of gender-responsive statistics"
     ]
    ]
   },
   {
    "id": "2026-10-27-17",
    "title": "Punjab's drug crisis: activist's murder, chemists' strike and a disputed drug survey",
    "section": "Region",
    "page": "p. 4",
    "gs": [
     "GS3",
     "GS2"
    ],
    "syllabus": "GS3 › Organised crime and narco-trade · GS2 › Health; Issues in policy implementation",
    "themes": [
     "border",
     "health"
    ],
    "context": "Protests over the murder of anti-drug activist Parvinder Singh Jhota in Mansa have entered their 14th day, with a CBI probe under way. The Punjab Chemist Association halted Pregabalin sales alleging harassment during a crackdown, and the BJP's Sunil Jakhar demanded that the government make public its state-wide drug survey.",
    "ideas": [
     "Shift to pharmaceutical drugs: misuse of prescription medicines complicates enforcement, which must target illicit sale without denying patients legitimate medicines.",
     "Enforcement versus livelihoods: aggressive raids may hurt licensed chemists while unauthorised sellers escape.",
     "Transparency of evidence: making survey findings public enables evidence-based de-addiction and supply-control policy.",
     "Civil society under threat: the killing of an activist shows the risks faced by people confronting drug networks."
    ],
    "keywords": [
     [
      "Pregabalin",
      "Prescription drug for neurological and diabetic nerve pain; misused as an intoxicant"
     ],
     [
      "Prescription drug misuse",
      "Non-medical use of licensed medicines"
     ],
     [
      "NDPS Act, 1985",
      "Main law on narcotic drugs and psychotropic substances"
     ]
    ],
    "data": [
     [
      "80%",
      "Share of substance abuse now involving pharmaceutical drugs, per Punjab DGP (as cited by Jakhar)",
      "IE"
     ],
     [
      "Rs 250 crore, 28,000 staff",
      "Spent and deployed on the drug survey, per Jakhar",
      "IE"
     ],
     [
      "12 of 14",
      "Demands the action committee says remain unfulfilled",
      "IE"
     ]
    ],
    "examples": [
     [
      "Parvinder Singh Jhota case",
      "Use for civil society activism against drugs and the state's duty to protect"
     ]
    ]
   },
   {
    "id": "2026-10-27-18",
    "title": "Climate justice needs quicker compensation: first Loss and Damage payout to Nepal",
    "section": "Editorial",
    "page": "p. 12",
    "gs": [
     "GS3",
     "GS2"
    ],
    "syllabus": "GS3 › Environment; Disaster management · GS2 › International institutions; India's neighbourhood",
    "themes": [
     "climate",
     "disaster",
     "intl",
     "neighbour"
    ],
    "context": "The UN's Fund for Loss and Damage has allocated $21.6 million (about Rs 190 crore) to Nepal after the August floods. It is the first time the Fund has earmarked a grant for a disaster-affected nation. The Indian Express argues the episode should become a case study for reforming the Fund.",
    "ideas": [
     "Compensation, not charity: the Fund rests on the principle of climate compensation, which raises the uncomfortable question of responsibility for climate change.",
     "Equity: Nepal accounts for barely 0.1% of global emissions yet is on the frontline of Himalayan climate risk.",
     "Speed is justice: delays aggravate hardship, slow restoration of services and raise rebuilding costs, especially for poor countries with little fiscal room.",
     "Precedent politics: developed countries agreed only after insisting Nepal's case is an exception, not a precedent for a permanent rapid-response mechanism.",
     "Finance gap: pledges of $822 million cover only about a third of the claims pending; compensation will be on the agenda at COP31 in Antalya."
    ],
    "keywords": [
     [
      "Loss and damage",
      "Climate impacts beyond what mitigation and adaptation can prevent"
     ],
     [
      "Fund for Loss and Damage",
      "Created at COP27 (2022), operationalised a year later"
     ],
     [
      "Climate reparations",
      "Payments based on historical responsibility for emissions"
     ],
     [
      "Rapid-response mechanism",
      "Proposed fast window for disaster payouts"
     ]
    ],
    "data": [
     [
      "$21.6 million",
      "Grant to Nepal (about Rs 190 crore)",
      "IE editorial"
     ],
     [
      "~0.1%",
      "Nepal's share of global emissions",
      "IE editorial"
     ],
     [
      "1,400+",
      "Deaths in the Bhotekoshi and Trishuli floods",
      "IE editorial"
     ],
     [
      "10%+",
      "Share of Nepal's hydropower facilities lost",
      "IE editorial"
     ],
     [
      "$5 billion",
      "Conservative estimate of Nepal's recovery needs",
      "IE editorial"
     ],
     [
      "119 countries",
      "Claims awaiting approval when Nepal sought emergency funds",
      "IE editorial"
     ],
     [
      "$822 million",
      "Pledges to the Fund, about a third of pending claims",
      "IE editorial"
     ]
    ],
    "examples": [
     [
      "Ice-and-rock avalanche, Bhotekoshi-Trishuli",
      "Example of cascading Himalayan hazards"
     ],
     [
      "Nepal's application invoking climate justice",
      "Use for fairness and intergenerational equity",
      "GS4"
     ]
    ]
   },
   {
    "id": "2026-10-27-19",
    "title": "Punjab farm fires: why most stubble-burning incidents are in two districts",
    "section": "Region (Express special)",
    "page": "p. 6",
    "gs": [
     "GS3"
    ],
    "syllabus": "GS3 › Environmental pollution; Cropping patterns; Agricultural technology",
    "themes": [
     "pollution",
     "agri",
     "climate"
    ],
    "context": "Punjab has recorded 684 farm fires this season, 457 of them (69%) in Tarn Taran and Amritsar. Early harvesting of short-duration paddy in the Majha region lets farmers fit in a third crop of peas or potatoes before wheat, which leaves little time to clear fields without burning.",
    "ideas": [
     "The problem is the crop calendar, not just machines: both districts have enough residue machines, but farmers squeezing in a third crop won't lose even a day.",
     "Cost and convenience: hiring machinery can cost more than burning, so subsidies and timing matter as much as availability.",
     "Behaviour change: farmers need awareness of the health, soil-fertility and pollution costs of burning.",
     "Progress is visible: fires so far are below last year's 743 and far below 2024's 1,857 for the same period.",
     "Diversification as a long-term fix: moving away from the paddy-wheat cycle reduces residue load (see the Haryana sweet-corn example)."
    ],
    "keywords": [
     [
      "Crop residue management (CRM)",
      "Machines and methods to handle straw without burning"
     ],
     [
      "Short-duration paddy (Pusa 1509)",
      "Variety that frees fields early"
     ],
     [
      "Majha, Doaba, Malwa",
      "Punjab's three regions"
     ],
     [
      "Satellite monitoring of fires",
      "Tracking from 15 September each year"
     ]
    ],
    "data": [
     [
      "684 / 457 (69%)",
      "Farm fires this season / share in Tarn Taran and Amritsar",
      "IE"
     ],
     [
      "743 and 1,857",
      "Fires in the same period last year and in 2024",
      "IE"
     ],
     [
      "1.25 lakh",
      "Operational residue-management machines in Punjab",
      "IE"
     ],
     [
      "60 days",
      "Duration of the green-pea crop fitted between paddy and wheat",
      "IE"
     ]
    ],
    "examples": [
     [
      "Sanjha Mittar helpline (+91 79737 27514)",
      "Clean Air Punjab initiative guiding farmers to alternatives"
     ],
     [
      "Manauli, Sonipat: 'sweet corn village' (IE p. 4)",
      "70% of 2,000 acres moved from paddy to sweet corn and vegetables; FPO and e-commerce tie-ups; ~Rs 50,000 profit per acre"
     ]
    ]
   },
   {
    "id": "2026-10-27-20",
    "title": "Delhi plans a bottle-return scheme, taking a cue from Uttarakhand and Goa",
    "section": "Nation (Express special)",
    "page": "p. 11",
    "gs": [
     "GS3"
    ],
    "syllabus": "GS3 › Solid waste management; Conservation",
    "themes": [
     "pollution",
     "urban"
    ],
    "context": "Delhi is considering a Deposit Refund Scheme (DRS) in which consumers pay an extra Re 1 or Rs 2 for a plastic bottle and get it back on return, possibly using QR codes and starting with tourist spots.",
    "ideas": [
     "Circular economy through price signals: a refundable deposit turns 'use and throw' into 'use, return and recover'.",
     "Proven models: Uttarakhand's Kedarnath pilot raised return rates from about 20-22% to nearly 90%.",
     "Behaviour change needs institutions: schools, colleges and RWAs are to be involved in awareness.",
     "Complements the 2022 single-use plastic ban by tackling items that remain legal."
    ],
    "keywords": [
     [
      "Deposit Refund Scheme (DRS)",
      "Refundable deposit on containers to encourage return"
     ],
     [
      "Extended Producer Responsibility (EPR)",
      "Producers' responsibility for post-consumer waste"
     ],
     [
      "Circular economy",
      "Reusing and recycling materials to cut waste"
     ]
    ],
    "data": [
     [
      "~1,500 tonnes/day",
      "Plastic waste generated in Delhi",
      "Delhi govt report, via IE"
     ],
     [
      "19%",
      "Share of Delhi's plastic waste left unprocessed",
      "IE"
     ],
     [
      "~20-22% → ~90%",
      "Bottle return rate in Uttarakhand after DRS",
      "Uttarakhand official, via IE"
     ],
     [
      "Rs 10 / Rs 5",
      "Deposit per bottle in Uttarakhand / Goa",
      "IE"
     ]
    ],
    "examples": [
     [
      "Kedarnath DRS pilot (2022)",
      "Won a Digital India Award; expanded across Uttarakhand"
     ],
     [
      "Singapore, Hong Kong, UK",
      "International examples of deposit-return systems"
     ]
    ]
   },
   {
    "id": "2026-10-27-21",
    "title": "Ahead of Cyclone Arnab, Andhra evacuates pregnant women; Odisha deploys ministers",
    "section": "Nation",
    "page": "p. 11",
    "gs": [
     "GS3"
    ],
    "syllabus": "GS3 › Disaster management",
    "themes": [
     "disaster"
    ],
    "context": "With the IMD forecasting landfall of Cyclone Arnab on the Andhra Pradesh coast on 28 October, Andhra Pradesh began evacuating vulnerable people, and Odisha banned sea fishing and tourist entry in six districts.",
    "ideas": [
     "Targeted, people-first preparedness: moving pregnant women to health facilities before landfall reflects vulnerability-based planning.",
     "Layered response: NDRF, SDRF, closure of schools, fishing bans and ministers deputed to districts show coordinated governance.",
     "Odisha's model of zero-casualty planning relies on early warning, evacuation and community readiness."
    ],
    "keywords": [
     [
      "Landfall",
      "When a cyclone's centre crosses the coast"
     ],
     [
      "Severe / very severe cyclonic storm",
      "IMD intensity categories"
     ],
     [
      "NDRF / SDRF",
      "National and State Disaster Response Forces"
     ]
    ],
    "data": [
     [
      "4,711",
      "Pregnant women in vulnerable areas moved to PHCs, CHCs and hospitals",
      "AP officials, via IE"
     ],
     [
      "7 NDRF + 8 SDRF",
      "Teams deployed in Andhra Pradesh",
      "IE"
     ],
     [
      "15 kmph",
      "Speed of the system's movement over the previous six hours",
      "IMD, via IE"
     ]
    ],
    "examples": [
     [
      "Evacuation of pregnant women, AP",
      "Example of gender-sensitive disaster response"
     ]
    ]
   },
   {
    "id": "2026-10-27-22",
    "title": "'Godzilla' El Niño effects to be felt into 2027: decoding the WMO warning",
    "section": "Explained",
    "page": "p. 16",
    "gs": [
     "GS1",
     "GS3"
    ],
    "syllabus": "GS1 › Important geophysical phenomena; Climatology · GS3 › Food security; Disaster management",
    "themes": [
     "physgeo",
     "climate",
     "food",
     "disaster"
    ],
    "context": "The World Meteorological Organization has warned that the intense 2026 El Niño will peak around year-end and affect weather well into 2027. It has already weakened India's southwest monsoon.",
    "ideas": [
     "Teleconnections: Pacific warming suppresses the Indian monsoon, raises temperatures and causes heatwaves.",
     "Food and water security risks, plus higher fertiliser and fuel prices, are likely into 2027.",
     "Record intensity: anomalies may exceed anything seen in four decades of ocean monitoring.",
     "Compound crises: El Niño adds strain on global resources already stretched by conflicts such as the Strait of Hormuz crisis."
    ],
    "keywords": [
     [
      "ENSO",
      "El Niño Southern Oscillation: warm, neutral and cool (La Niña) phases"
     ],
     [
      "Niño 3.4 region",
      "Pacific region used to declare ENSO phases"
     ],
     [
      "RONI",
      "Relative Oceanic Niño Index; above +0.5°C over three months signals El Niño"
     ],
     [
      "Long period average (LPA)",
      "Benchmark for monsoon rainfall"
     ]
    ],
    "data": [
     [
      "87% of LPA",
      "India's 2026 southwest monsoon, fourth driest since 2001",
      "IE Explained"
     ],
     [
      "~70%",
      "Share of annual rainfall from the southwest monsoon",
      "IE Explained"
     ],
     [
      "2-2.8°C",
      "July-September RONI warming",
      "IE Explained"
     ],
     [
      "3.8°C",
      "Expected anomaly at El Niño's epicentre, never recorded before",
      "WMO, via IE"
     ],
     [
      "2.3°C",
      "Peak of the 2014-15 El Niño",
      "NOAA, via IE"
     ]
    ],
    "examples": [
     [
      "WMO warning of 21 October 2026",
      "Use in answers on climate variability and food security"
     ]
    ]
   },
   {
    "id": "2026-10-27-23",
    "title": "A new antibody 'cocktail' could help treat cobra bites",
    "section": "Explained",
    "page": "p. 16",
    "gs": [
     "GS3"
    ],
    "syllabus": "GS3 › Developments in biotechnology and their applications; Health",
    "themes": [
     "biotech",
     "health"
    ],
    "context": "Scientists from IISc Bengaluru and the Technical University of Denmark have created an antibody cocktail effective against the venom of India's diverse cobra species. In mice it worked even 30 minutes after venom injection.",
    "ideas": [
     "Regional venom diversity defeats one-size-fits-all antivenom; polyvalent antivenom does not work against king cobras.",
     "Access gap: rural victims often reach health centres late or find no antivenom, so delivery systems matter as much as discovery.",
     "Antivenom treatment has changed little in a century; this new approach uses antibodies from animals such as alpacas and llamas.",
     "Snakebite is a neglected public health problem that falls mostly on the rural poor."
    ],
    "keywords": [
     [
      "Polyvalent antivenom",
      "Antivenom effective against several species"
     ],
     [
      "'Big Four'",
      "Spectacled cobra, common krait, Russell's viper, saw-scaled viper"
     ],
     [
      "Neurotoxin",
      "Venom that paralyses nerves and breathing"
     ]
    ],
    "data": [
     [
      "50,000",
      "Estimated annual snakebite deaths in India",
      "Government data (2024), via IE"
     ],
     [
      "12.5%+",
      "Share of snakebite deaths caused by the spectacled cobra",
      "IE"
     ],
     [
      "30 minutes",
      "Delay after venom injection at which the cocktail still saved mice",
      "IE"
     ]
    ],
    "examples": [
     [
      "IISc-DTU antibody cocktail",
      "Published in Science Translational Medicine; example of S&T for public health"
     ]
    ]
   },
   {
    "id": "2026-10-27-24",
    "title": "Brought in to repopulate Buxa, tigress T-138 wanders into Assam",
    "section": "Nation",
    "page": "p. 11",
    "gs": [
     "GS3"
    ],
    "syllabus": "GS3 › Conservation; Biodiversity",
    "themes": [
     "biodiv"
    ],
    "context": "Tigress T-138, airlifted from Bihar's Valmiki Tiger Reserve to West Bengal's Buxa Tiger Reserve to begin a reintroduction programme, has travelled about 35 km into Assam's Raimona National Park.",
    "ideas": [
     "Reintroduction must restore habitat first: Buxa lost its resident tigers to habitat degradation, land-use change and fall in prey.",
     "Landscape and corridor conservation: tigers ignore state boundaries, so states (and Bhutan) must coordinate.",
     "Human-wildlife conflict: residents near Raimona have asked for the tigress to be tranquilised, which tests community trust.",
     "Monitoring technology: GPS collars allow tracking without disturbing the animal's exploration."
    ],
    "keywords": [
     [
      "Reintroduction",
      "Releasing a species into an area where it has become locally extinct"
     ],
     [
      "Wildlife corridor",
      "Habitat link allowing animals to move between protected areas"
     ],
     [
      "Translocation",
      "Moving animals from one site to another for conservation"
     ]
    ],
    "data": [
     [
      "35 km",
      "Distance T-138 travelled into Assam",
      "IE"
     ],
     [
      "~760 sq km",
      "Area of Buxa Tiger Reserve",
      "IE"
     ],
     [
      "300 km / 21 days",
      "Distance travelled by tigress Zeenat from Similipal in 2024, and days before capture",
      "IE"
     ]
    ],
    "examples": [
     [
      "T-138: first inter-state tiger airlift for reintroduction",
      "Example for conservation answers"
     ],
     [
      "Tigress Zeenat (2024)",
      "Previous inter-state dispersal case from Odisha to Bengal"
     ]
    ]
   },
   {
    "id": "2026-10-27-25",
    "title": "Jogen Chowdhury's art of the personal, political and social",
    "section": "Editorial page (R Siva Kumar)",
    "page": "p. 12",
    "gs": [
     "GS1"
    ],
    "syllabus": "GS1 › Indian art forms from ancient to modern times",
    "themes": [
     "heritage"
    ],
    "context": "Painter Jogen Chowdhury, one of Bengal's leading modern artists, has died in Kolkata at 87. The tribute traces how Partition, folk traditions and politics shaped his art.",
    "ideas": [
     "Folk roots of modern art: he built a personal idiom from kantha embroidery and alpona floor art practised by village women in Bengal.",
     "Art as social commentary: as Keeper of Art at Rashtrapati Bhavan (1972) his work turned satirical about politics, and later critiqued middle-class life.",
     "Institution building: at Santiniketan's Kala Bhavan he mentored artists and founded an artist-run centre, inspired by Tagore's vision."
    ],
    "keywords": [
     [
      "Kantha",
      "Bengal's running-stitch embroidery tradition"
     ],
     [
      "Alpona",
      "Ritual floor art of Bengal"
     ],
     [
      "Kala Bhavan, Santiniketan",
      "Art institution founded in Tagore's Visva-Bharati"
     ]
    ],
    "data": [
     [
      "87",
      "Age at death",
      "IE"
     ],
     [
      "1972",
      "Became Keeper of Art at Rashtrapati Bhavan",
      "IE"
     ],
     [
      "1987",
      "Joined Kala Bhavan, Santiniketan",
      "IE"
     ]
    ],
    "examples": [
     [
      "Jogen Chowdhury",
      "Example of Partition's influence on modern Indian art"
     ]
    ]
   }
  ]
 }
]
};
