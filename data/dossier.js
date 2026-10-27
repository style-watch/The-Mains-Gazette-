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
window.MM_DOSSIER={
 "editions": [
  {
   "date": "2026-10-27",
   "paper": "The Indian Express (Chandigarh)",
   "items": [
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
    }
   ]
  }
 ]
};
