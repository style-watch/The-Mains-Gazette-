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
  "paper": "The Indian Express",
  "items": [
   {
    "id": "2026-10-27-01",
    "title": "Why the Rs 190 crore Loss and Damage Fund payout to Nepal matters",
    "section": "Editorial · Explained",
    "url": "",
    "gs": [
     "GS3",
     "GS2"
    ],
    "syllabus": "GS3 › Disaster management; Environment (climate change) · GS2 › India and its neighbourhood; International institutions",
    "themes": [
     "climate",
     "disaster",
     "intl",
     "neighbour"
    ],
    "context": "The UN Fund for Responding to Loss and Damage (FRLD) has provisionally set aside $21.6 million (about Rs 190 crore) for Nepal after the August 2026 Himalayan flash floods, its first-ever response to a specific disaster. The Indian Express editorial argues that climate justice needs quicker compensation.",
    "ideas": [
     "Climate justice in practice: the money goes to a country that contributed little to warming but bears its costs. Nepal's PM framed it as a crisis Nepal did not create.",
     "Historical responsibility: Nepal accounts for only about 0.1% of global emissions, so the case strengthens the demand that high-emitting countries pay more (IE editorial).",
     "Symbolic, not sufficient: the allocation is under 0.5% of Nepal's recovery needs, which shows the gap between climate finance pledged and what is needed.",
     "Speed matters in disaster response: campaigners criticised the seven-week wait for the board's first emergency meeting and want a permanent rapid-response window that pays out in days.",
     "Precedent politics: developed countries said the Nepal decision must not set a precedent, while developing countries see it as the start of a working loss-and-damage system.",
     "Cascading Himalayan hazards: a rock-ice collapse turned into a flash flood that destroyed hydropower dams and villages. This raises questions about infrastructure in ecologically fragile zones.",
     "Neighbourhood angle for India: Nepal is turning to India, China and multilateral banks for recovery money, which gives India room for disaster diplomacy in the neighbourhood.",
     "Aid versus compensation: whether such money is charity or a right based on historical responsibility shapes equitable burden-sharing in climate talks; this will be argued at COP31 in Antalya (IE editorial)."
    ],
    "keywords": [
     [
      "Loss and damage",
      "Climate impacts that cannot be avoided by mitigation or adaptation, and the finance to address them"
     ],
     [
      "Fund for Responding to Loss and Damage (FRLD)",
      "UN fund agreed at COP27 (2022), operationalised at COP28 (2023); World Bank is interim trustee"
     ],
     [
      "Barbados Implementation Modalities (BIM)",
      "The fund's initial operational phase, under which Nepal was allowed a pilot request"
     ],
     [
      "Rapid-response mechanism",
      "Proposed window to release money within days of a disaster"
     ],
     [
      "Climate attribution",
      "Science that measures how much climate change contributed to an event; here, a World Weather Attribution study"
     ],
     [
      "Rock-ice avalanche / cascading hazard",
      "One hazard triggering a chain of others: a glacier collapse leading to a flash flood and dam failures"
     ],
     [
      "Post-Disaster Needs Assessment (PDNA)",
      "Joint government estimate of recovery and reconstruction costs"
     ],
     [
      "Direct access",
      "Letting affected communities receive funds without going through intermediaries"
     ]
    ],
    "data": [
     [
      "~0.1%",
      "Nepal's share of global emissions",
      "Indian Express editorial, via Magme digest"
     ],
     [
      "$21.6 million",
      "Set aside for Nepal ($20 million plus $1.6 million administrative costs), about Rs 190 crore",
      "Down To Earth; Climate Home News"
     ],
     [
      "$4.77 billion",
      "Nepal's recovery and reconstruction needs (joint PDNA)",
      "Down To Earth"
     ],
     [
      "$2.7 billion",
      "Nepal's estimate of total loss and damage from the floods",
      "Down To Earth; Carbon Brief"
     ],
     [
      "1,451 dead, 5,745 missing",
      "Human toll of the August floods",
      "ICIMOD, via Down To Earth"
     ],
     [
      "$822 million vs $2.8 billion",
      "Pledged to the fund vs requested in 176 applications from developing countries",
      "AP; Carbon Brief"
     ],
     [
      "$20 million",
      "Current cap on a single request to the fund",
      "Carbon Brief"
     ],
     [
      "23%",
      "Fall in official development assistance from major donors in 2025",
      "OECD, via AP"
     ],
     [
      "$400 billion a year",
      "Estimated economic loss and damage in developing countries by 2030",
      "Research cited by Fill the Fund campaign"
     ]
    ],
    "examples": [
     [
      "Nepal floods, August 2026",
      "The first disaster-specific payout from the FRLD; use it in answers on climate finance and loss and damage"
     ],
     [
      "Langtang Lirung glacier collapse",
      "Rock-ice collapse near the Nepal-China border triggered the Bhote Koshi flash floods and destroyed hydropower dams on the Trishuli system; an example of cascading hazards and infrastructure in fragile zones"
     ],
     [
      "Nepal seeking help from India, China and multilateral banks",
      "Example of disaster recovery as a theme in neighbourhood diplomacy"
     ],
     [
      "“We did not create this crisis, yet we are paying a colossal price for it” — Nepal PM",
      "Use for climate justice, equity and fairness to future and vulnerable people",
      "GS4"
     ]
    ]
   },
   {
    "id": "2026-10-27-02",
    "title": "News publishers move Supreme Court against Digital Personal Data Protection Act provisions",
    "section": "Front page",
    "gs": [
     "GS2",
     "GS3"
    ],
    "syllabus": "GS2 › Fundamental rights (Art 19(1)(a), Art 21); Transparency and accountability (RTI) · GS3 › Basics of cyber security and data protection",
    "themes": [
     "rights",
     "cyber",
     "judiciary",
     "egov"
    ],
    "context": "The Digital News Publishers Association (DNPA), representing 21 publishers including The Indian Express, NDTV, Network18 and Times Internet, has challenged the DPDP Act, 2023 and DPDP Rules, 2025. The Supreme Court issued notice to the Centre on 27 October, declined interim relief, and listed the case for 17 November.",
    "ideas": [
     "Privacy versus press freedom: both are fundamental rights. The Court said 'a balance has to be struck' and asked publishers how they would guard against misuse of personal data.",
     "No journalism exemption: publishers argue that consent, notice and erasure duties could force newsrooms to seek consent from the subjects of investigations or take down reports, which their counsel called 'a complete regime of pre-censorship'.",
     "Source protection: obligations under the law could expose confidential sources and create a chilling effect on investigative journalism.",
     "Right to information: Section 44(3) of the DPDP Act amended RTI Section 8(1)(j) to exempt personal information; the separate Venkatesh Nayak case says this weakens transparency.",
     "Earlier drafts of the data law exempted journalistic activity; media are already regulated by the Press Council, cable TV rules and the IT Rules (publishers' argument).",
     "Proportionality is the likely test: any restriction on speech must be reasonable under Article 19(2) and proportionate under the Puttaswamy privacy framework."
    ],
    "keywords": [
     [
      "Data principal",
      "The person whose personal data is processed; consent is built around them"
     ],
     [
      "Data fiduciary",
      "The entity that decides why and how personal data is processed, such as a newsroom"
     ],
     [
      "Journalistic exemption",
      "A carve-out for news gathering, present in earlier drafts but absent from the 2023 Act"
     ],
     [
      "Pre-censorship / prior restraint",
      "Restricting publication before it happens"
     ],
     [
      "Chilling effect",
      "When fear of legal consequences discourages legitimate speech"
     ],
     [
      "Section 8(1)(j) RTI",
      "The personal-information exemption, widened by DPDP Section 44(3)"
     ],
     [
      "Data Protection Board of India",
      "The adjudicating body under the Act; its independence is also under challenge"
     ]
    ],
    "data": [
     [
      "21",
      "News publishers represented by the DNPA",
      "Supreme Court Observer"
     ],
     [
      "9 sections + 3 rules",
      "Challenged: Sections 7, 17(2), 18, 19, 27, 29, 36, 37, 44(3) and Rules 16, 17, 23",
      "The420.in; Dynamite News"
     ],
     [
      "17 November 2026",
      "Next hearing date",
      "Deccan Herald; SC Observer"
     ]
    ],
    "examples": [
     [
      "DNPA v Union of India (2026)",
      "Described as the first comprehensive challenge to the data law by traditional media organisations"
     ],
     [
      "Venkatesh Nayak v Union of India",
      "Pending challenge by RTI activists and journalists on RTI dilution and state surveillance"
     ],
     [
      "Protecting a whistle-blower's identity",
      "Use for integrity, the public interest and confidentiality in public life",
      "GS4"
     ]
    ]
   },
   {
    "id": "2026-10-27-03",
    "title": "Bengal SIR tribunals ask EC to fix appeals portal, drop mandatory biometric authentication",
    "section": "Nation",
    "gs": [
     "GS2"
    ],
    "syllabus": "GS2 › Salient features of the Representation of People's Act; Constitutional bodies (ECI); Quasi-judicial bodies",
    "themes": [
     "elections",
     "bodies",
     "judiciary",
     "egov"
    ],
    "context": "Judges of the appellate tribunals set up on Supreme Court orders to hear appeals on voter deletions in West Bengal's Special Intensive Revision (SIR) have asked the Election Commission to fix its portal and drop Aadhaar-based biometric login, saying the system has left them unable to upload orders.",
    "ideas": [
     "Judicial independence of quasi-judicial bodies: the judges say requiring their personal Aadhaar credentials to upload decisions amounts to interference by an administrative body.",
     "Digital design can deny justice: with no notice mechanism, no virtual hearings and no option to restore a deleted voter, the right to appeal exists on paper but not in practice.",
     "Universal adult franchise (Art 326) depends on accurate rolls; reasoned, downloadable orders are part of due process for excluded voters.",
     "Institutional coordination: the tribunals were created under Supreme Court direction with the Calcutta High Court's involvement, so the ECI's technical choices cut across three institutions."
    ],
    "keywords": [
     [
      "Special Intensive Revision (SIR)",
      "A fresh, intensive revision of electoral rolls"
     ],
     [
      "Appellate tribunal",
      "Body hearing appeals against inclusion or exclusion decisions"
     ],
     [
      "Quasi-judicial authority",
      "A body with court-like powers to decide disputes"
     ],
     [
      "Logical discrepancy / unmapped voters",
      "ECI categories used to flag entries for scrutiny"
     ],
     [
      "Article 326",
      "Elections on the basis of adult suffrage"
     ]
    ],
    "data": [
     [
      "19",
      "Appellate tribunals set up in West Bengal (March 2026), mostly headed by former judges",
      "ECI notification via News On AIR"
     ],
     [
      "27.16 lakh",
      "Electors deleted after judicial scrutiny of 60.06 lakh flagged voters",
      "NewsBytes, citing The Indian Express"
     ],
     [
      "13",
      "Tribunal judges who resolved on 25 September not to share personal credentials",
      "Report summarised by Urban Acres"
     ]
    ],
    "examples": [
     [
      "West Bengal SIR appeals portal standoff",
      "Use for e-governance designed around the user (link to 2025 GS2 Q7 on back-end-centric e-governance)"
     ],
     [
      "Supreme Court's 10 March 2026 order",
      "Directed independent appellate tribunals and asked the ECI to fix portal disruptions"
     ]
    ]
   },
   {
    "id": "2026-10-27-04",
    "title": "When courts are too slow, police replace judges",
    "section": "Opinion",
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
    "context": "An Indian Express opinion piece argues that decades-long delays in civil courts push litigants to the police, who turn civil and contract disputes (unpaid debts, property, contracts) into criminal cases and deliver quick but coercive 'justice'.",
    "ideas": [
     "Justice delayed creates parallel justice: when civil remedies take years, the criminal process becomes a recovery tool, and FIRs for cheating or breach of trust are used as leverage.",
     "Rule of law suffers twice: civil courts lose credibility, and the police gain discretionary power that invites intimidation and corruption.",
     "The Supreme Court has repeatedly condemned giving a 'criminal colour' to civil disputes as an abuse of process, but case-by-case quashing does not fix the incentive.",
     "Reform has to be systemic: more judges, simpler procedures, case management, and faster execution of decrees, so that the civil route is credible again."
    ],
    "keywords": [
     [
      "Criminalisation of civil disputes",
      "Filing criminal cases over essentially civil claims to get quick relief"
     ],
     [
      "Abuse of process",
      "Using legal proceedings for an improper purpose; grounds for quashing"
     ],
     [
      "Execution of decree",
      "The stage where a civil court's judgment is actually enforced"
     ],
     [
      "Judge-population ratio",
      "Judges per million people; a common measure of capacity"
     ],
     [
      "Case management",
      "Court-led scheduling of hearings to cut adjournments"
     ]
    ],
    "data": [
     [
      "4.99 crore",
      "Cases pending in district and subordinate courts (28 July 2026)",
      "Ministry of Law, Lok Sabha reply"
     ],
     [
      "64.67 lakh",
      "Cases pending in High Courts (28 July 2026)",
      "Ministry of Law, Lok Sabha reply"
     ],
     [
      "81,275",
      "District-court cases pending for over 30 years",
      "Rajya Sabha reply via Bar & Bench"
     ],
     [
      "~21 per million",
      "Judges per million people (on 2011 population)",
      "Ministry of Law, earlier Parliament reply"
     ]
    ],
    "examples": [
     [
      "Sudha Rakesh v State of Karnataka (2026)",
      "Supreme Court called the colourising of civil disputes as crimes an 'open secret' while quashing a land-sale cheating case"
     ],
     [
      "Nagarathna-Bhuyan bench, July 2026",
      "Quashed a Chennai cheating case as a purely civil dispute given a criminal colour"
     ],
     [
      "Police officer refusing to act as debt collector",
      "Use for impartiality and resisting improper pressure",
      "GS4"
     ]
    ]
   },
   {
    "id": "2026-10-27-05",
    "title": "Census duty: the government's powers and private citizens' rights",
    "section": "Explained",
    "gs": [
     "GS2",
     "GS1"
    ],
    "syllabus": "GS2 › Fundamental rights (Art 23(2)); Centre-State administration; Role of courts · GS1 › Population and associated issues",
    "themes": [
     "rights",
     "demography",
     "judiciary",
     "federal"
    ],
    "context": "On 16 October the Centre amended the Census Rules, 1990, so that states and UTs can appoint teachers of aided or unaided private institutions, and staff of PSUs, banks, companies and trusts, as enumerators for Census 2027. The move followed High Court orders staying the requisition of private-school teachers.",
    "ideas": [
     "Compulsory public service is constitutional within limits: Article 23(2) allows the State to impose compulsory service for public purposes, but without discrimination on grounds such as religion, race or caste.",
     "Rule versus statute: petitioners argued the Census Act, 1948 gives no power to requisition private unaided school staff; the amendment tries to fill that gap through rules, and courts may test whether the rules go beyond the Act.",
     "Census 2027 is a huge administrative exercise; adequate trained manpower directly affects data quality, which feeds delimitation, welfare targeting and planning.",
     "Learning costs: taking teachers away from classrooms during the school year raises Right to Education concerns that need balancing."
    ],
    "keywords": [
     [
      "Census officer / enumerator",
      "Person appointed to collect census data in a block"
     ],
     [
      "Requisition",
      "Compelling a person's services for a public purpose"
     ],
     [
      "Article 23(2)",
      "State may impose compulsory service for public purposes"
     ],
     [
      "Delegated legislation",
      "Rules made by the executive under powers given by an Act"
     ],
     [
      "Ultra vires",
      "Beyond the powers granted by the parent law"
     ]
    ],
    "data": [
     [
      "16 October 2026",
      "Date of the Census (Amendment) Rules notification by the Registrar General of India",
      "PTI; Business Standard"
     ],
     [
      "Section 18(1), Census Act 1948",
      "Rule-making power used for the amendment (Rule 3 revised)",
      "NewsBytes; Organiser"
     ],
     [
      "Two phases",
      "How Census 2027 will be conducted",
      "National Herald; India TV"
     ]
    ],
    "examples": [
     [
      "Haryana Progressive Schools Conference v State",
      "Punjab and Haryana High Court stayed Haryana's communications seeking private teachers for census duty"
     ],
     [
      "Teacher balancing census duty and classes",
      "Use for duty versus responsibility conflicts and public service values",
      "GS4"
     ]
    ]
   },
   {
    "id": "2026-10-27-06",
    "title": "Russian crude purchases may fall in November as West Asian grades become more viable: BPCL",
    "section": "Business",
    "gs": [
     "GS3",
     "GS2"
    ],
    "syllabus": "GS3 › Infrastructure: energy; Energy security · GS2 › Effect of policies of other countries on India's interests",
    "themes": [
     "energy",
     "powers",
     "regions"
    ],
    "context": "Bharat Petroleum expects its Russian crude purchases to drop significantly in November because higher freight costs and premiums make Russian cargoes less viable, while supplies from West Asia are recovering after the Hormuz disruptions.",
    "ideas": [
     "Energy security is about diversified, commercially driven sourcing: refiners switch suppliers as freight, premiums and route risks change.",
     "Strategic autonomy in practice: India's crude basket responds to market economics and geopolitics rather than to any single bloc.",
     "Chokepoint risk: the Strait of Hormuz disruptions showed how dependent India is on a few sea lanes, which strengthens the case for strategic reserves and alternative routes.",
     "Saudi Arabia's Yanbu pipeline (bypassing Hormuz) has helped restore West Asian volumes, showing the value of route redundancy."
    ],
    "keywords": [
     [
      "Crude basket",
      "The mix of crude grades a country or refiner buys"
     ],
     [
      "Freight premium",
      "Extra shipping cost that can erase a price discount"
     ],
     [
      "Urals",
      "Russia's main export crude grade"
     ],
     [
      "Chokepoint",
      "Narrow sea passage critical to trade, such as the Strait of Hormuz"
     ],
     [
      "Strategic Petroleum Reserve",
      "Government crude stock held for supply shocks"
     ]
    ],
    "data": [
     [
      "~37%",
      "Russian crude's share in BPCL's sourcing in July–September 2026",
      "BPCL finance head, via TradingView/Kalpana Pathak"
     ],
     [
      "$1–2 vs $12–13 per barrel",
      "Premium on Russian oil for December vs October cargoes",
      "BPCL, via TradingView"
     ],
     [
      "2.8 million barrels/day",
      "India's imports from the Middle East in September, highest since February",
      "Reuters vessel tracking, via OilPrice"
     ]
    ],
    "examples": [
     [
      "Yanbu pipeline (Saudi Arabia)",
      "Route that bypasses the Strait of Hormuz; example of supply-chain resilience"
     ],
     [
      "BPCL's November sourcing shift",
      "Example of market-led diversification of India's crude imports"
     ]
    ]
   }
  ]
 }
]
};
