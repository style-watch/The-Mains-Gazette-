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
     "section": "The Ideas Page",
     "page": "Page 13",
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
     ],
     "pyqs": [
      [
       "GS2-2023/Q2",
       "Free legal aid is not enough if justice takes decades: cite the 79-year Bombay HC suit and 1.9 judges per million."
      ],
      [
       "GS2-2024/Q2",
       "Argue for Lok Adalats and ADR: when civil suits take 20+ years, settlements move to police stations instead."
      ],
      [
       "GS2-2026/Q16",
       "Rule of law: 'law on the books' versus 'law in action' when police turn debt disputes into criminal cases."
      ]
     ],
     "where": "The Ideas Page, page 13 (Abhinav Chandrachud)"
    },
    {
     "id": "2026-10-27-07",
     "title": "Keralam passes India's first state law to protect senior citizens' rights",
     "section": "Politics",
     "page": "Page 8",
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
     ],
     "pyqs": [
      [
       "GS1-2026/Q19",
       "Ageing is a core challenge of the demographic transition; Keralam's law is a policy response."
      ],
      [
       "GS1-2013/Q17",
       "As family support weakens, the state steps in with a rights framework for the aged."
      ],
      [
       "GS2-2026/Q12",
       "The Bill recognises living wills for senior citizens, linking to the passive-euthanasia debate."
      ]
     ],
     "where": "Politics, page 8"
    },
    {
     "id": "2026-10-27-09",
     "title": "China says it is strictly abiding by pacts with India amid LAC face-offs in Arunachal",
     "section": "Nation",
     "page": "Page 10",
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
     ],
     "pyqs": [
      [
       "GS3-2024/Q19",
       "Face-offs in Arunachal's Taksing area and the ITBP's role on the China border."
      ],
      [
       "GS3-2016/Q19",
       "Border management needs mechanisms like Corps Commander talks to avoid 'misunderstanding and miscalculation'."
      ]
     ],
     "where": "Nation, page 10"
    },
    {
     "id": "2026-10-27-11",
     "title": "To ease energy transition, ramp up storage, strengthen transmission",
     "section": "The Editorial Page",
     "page": "Page 12",
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
     ],
     "pyqs": [
      [
       "GS3-2022/Q12",
       "Capacity is not the only target: a solar-hour glut with night deficits shows storage and transmission are the bottleneck."
      ],
      [
       "GS3-2026/Q11",
       "Grid flexibility and storage as part of energy security."
      ],
      [
       "GS3-2015/Q9",
       "Cheap solar now forces coal plants to ramp up and down, shortening their life."
      ]
     ],
     "where": "The Editorial Page, page 12 (Somit Dasgupta (teaser on page 1))"
    },
    {
     "id": "2026-10-27-13",
     "title": "Govt notifies E100 as auto fuel for flex-fuel vehicles",
     "section": "Economy",
     "page": "Page 15",
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
     ],
     "pyqs": [
      [
       "GS3-2026/Q11",
       "Higher ethanol blends reduce dependence on imported crude."
      ],
      [
       "GS3-2023/Q15",
       "Flex-fuel vehicles as a parallel route to cleaner transport alongside EVs."
      ]
     ],
     "where": "Economy, page 15",
     "links": [
      [
       "Related Explained: Centre clears way for flex-fuel up to E100",
       "https://indianexpress.com/article/explained/centre-flex-fuel-e100-why-what-changes-10937588/"
      ]
     ]
    },
    {
     "id": "2026-10-27-16",
     "title": "Govt to study hurdles faced by women-led informal businesses",
     "section": "Economy",
     "page": "Page 15",
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
     ],
     "pyqs": [
      [
       "GS3-2023/Q12",
       "Measuring household responsibilities makes the care burden on women entrepreneurs visible."
      ],
      [
       "GS1-2024/Q8",
       "Use the LFPR gap (34.6% women vs 77.4% men) to show equity needs targeted support."
      ],
      [
       "GS3-2016/Q1",
       "27% of informal enterprises are headed by women; informality shapes their constraints."
      ]
     ],
     "where": "Economy, page 15"
    },
    {
     "id": "2026-10-27-18",
     "title": "Climate justice needs quicker compensation: first Loss and Damage payout to Nepal",
     "section": "The Editorial Page",
     "page": "Page 12",
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
     "context": "The UN's Fund for Loss and Damage has allocated $21.6 million (about Rs 190 crore) to Nepal, nearly two months after devastating floods. It is the first time the Fund has earmarked a grant for a disaster-affected nation. The Indian Express argues the episode should become a case study for reforming the Fund.",
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
     ],
     "pyqs": [
      [
       "GS3-2025/Q18",
       "Loss-and-damage finance as part of climate commitments: first grant, $822 million pledged against far larger claims."
      ],
      [
       "GS3-2017/Q17",
       "Nepal's avalanche-triggered floods as a Himalayan climate hazard with cross-border lessons."
      ],
      [
       "GS3-2026/Q7",
       "Nepal lost at least 10% of its hydropower facilities: infrastructure in fragile terrain."
      ]
     ],
     "where": "The Editorial Page, page 12 (editorial)",
     "links": [
      [
       "Related Explained (Telegram): Why Rs 190 crore payout to Nepal matters",
       "https://t.me/indianexpress_explained/16643"
      ]
     ]
    },
    {
     "id": "2026-10-27-19",
     "title": "Punjab farm fires: why most stubble-burning incidents are in two districts",
     "section": "Region",
     "page": "Page 6",
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
      "The problem is the crop calendar, not just machines: an Agriculture Department official says stubble-management machinery is available, but farmers squeezing in a third crop won't lose even a day.",
      "Cost and convenience: some farmers see hiring machinery as costlier than burning, so subsidies and timing matter as much as availability.",
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
     ],
     "pyqs": [
      [
       "GS3-2021/Q14",
       "Majha's third crop and Manauli's shift to sweet corn show diversification in practice."
      ],
      [
       "GS3-2025/Q3",
       "Why farmers choose high-value crops: Manauli's returns and market links."
      ],
      [
       "GS3-2020/Q17",
       "Farm fires and clean air: 684 fires so far against 743 last year and 1,857 in 2024."
      ]
     ],
     "where": "Region, page 6 (Express special)"
    },
    {
     "id": "2026-10-27-20",
     "title": "Delhi plans a bottle-return scheme, taking a cue from Uttarakhand and Goa",
     "section": "Nation",
     "page": "Page 11",
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
     ],
     "pyqs": [
      [
       "GS3-2026/Q17",
       "Directly usable: Delhi's 1,500 tonnes of plastic waste a day, 19% unprocessed, and the deposit-refund fix."
      ],
      [
       "GS3-2018/Q6",
       "Deposit-refund schemes as a collection model: Uttarakhand's returns rose from about 20% to nearly 90%."
      ]
     ],
     "where": "Nation, page 11 (Express special)"
    },
    {
     "id": "2026-10-27-21",
     "title": "Ahead of Cyclone Arnab, Andhra evacuates pregnant women; Odisha deploys ministers",
     "section": "Nation",
     "page": "Page 11",
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
     ],
     "pyqs": [
      [
       "GS3-2020/Q18",
       "Proactive rather than reactive: 4,711 pregnant women moved to health centres before landfall."
      ],
      [
       "GS3-2024/Q17",
       "Resilience means protecting the most vulnerable first; NDRF and SDRF teams in place early."
      ],
      [
       "GS1-2022/Q5",
       "IMD forecasts and warnings driving early action in Andhra Pradesh and Odisha."
      ]
     ],
     "where": "Nation, page 11"
    },
    {
     "id": "2026-10-27-22",
     "title": "'Godzilla' El Niño effects to be felt into 2027: decoding the WMO warning",
     "section": "Explained",
     "page": "Page 16",
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
     ],
     "pyqs": [
      [
       "GS3-2014/Q14",
       "El Niño as a drought driver: the 2026 monsoon ended at 87% of LPA."
      ],
      [
       "GS1-2014/Q16",
       "WMO warning: anomaly of 3.8°C expected, never recorded in four decades of monitoring."
      ],
      [
       "GS1-2023/Q4",
       "Effects into 2027 on food and water security."
      ]
     ],
     "where": "Explained, page 16"
    },
    {
     "id": "2026-10-27-26",
     "title": "Microsoft offers voluntary exit to about 60,000 employees, including staff in India",
     "section": "Shared link",
     "page": "Online, 26-27 Oct",
     "gs": [
      "GS3"
     ],
     "syllabus": "GS3 › Indian economy: employment; Science and technology: developments and their effects (AI)",
     "themes": [
      "jobs",
      "techai"
     ],
     "context": "Microsoft announced a 'Voluntary Exit Offer' for eligible employees in the US, Canada, the UK and India, at its experience level 70 or below. About 60,000 people, roughly a quarter of its 223,000 workforce, are eligible. Reports link the move to the company's effort to balance a costly AI infrastructure build-out with capital efficiency.",
     "ideas": [
      "Technology and jobs: big firms are reshaping their workforce as spending shifts to AI infrastructure, a live example of technology-driven restructuring (editor's framing).",
      "A softer tool than layoffs: a voluntary exit with standard severance lets employees choose, but it still shrinks the workforce; this is the company's second such programme in six months.",
      "India angle: India is one of only four countries covered, a reminder that India's large tech workforce is exposed to decisions taken by global firms (editor's framing).",
      "Policy response to discuss: reskilling for AI-era roles and social security for white-collar and tech workers (editor's framing)."
     ],
     "keywords": [
      [
       "Voluntary Exit Offer / VRS",
       "Employer offers a package to employees who choose to leave"
      ],
      [
       "Severance",
       "Payment given to an employee on leaving the job"
      ],
      [
       "Structural unemployment",
       "Job loss caused by changes in technology or the structure of the economy, not by a downturn"
      ],
      [
       "Reskilling",
       "Training workers for new kinds of work"
      ]
     ],
     "data": [
      [
       "~60,000",
       "Employees eligible for the Voluntary Exit Offer",
       "CNBC (person familiar); company to GeekWire"
      ],
      [
       "About a quarter (27%)",
       "Share of Microsoft's 223,000 workforce eligible",
       "CNBC, GeekWire"
      ],
      [
       "Early December / 31 December",
       "Decision deadline / exit date for those who accept",
       "CNBC (person familiar)"
      ],
      [
       "4 countries",
       "US, Canada, UK and India",
       "Microsoft memo, via CNBC"
      ]
     ],
     "examples": [
      [
       "Microsoft's spring 2026 voluntary retirement programme",
       "Its first-ever such programme, six months earlier, for long-serving US staff (GeekWire)"
      ]
     ],
     "paper": "Indian Express Explained (online, shared by you)",
     "sources": "Facts from CNBC (26 Oct 2026), GeekWire and CBS News. The Indian Express explainer you shared could not be opened here, so its India-specific details are not included.",
     "pyqs": [
      [
       "GS3-2026/Q16",
       "AI is reshaping work: firms are cutting staff to fund AI infrastructure."
      ],
      [
       "GS3-2023/Q11",
       "Technology-driven job loss as structural unemployment."
      ],
      [
       "GS1-2021/Q17",
       "India's tech workforce in IT cities is exposed to global restructuring."
      ]
     ],
     "links": [
      [
       "Indian Express Explained (the link you shared)",
       "https://indianexpress.com/article/explained/explained-sci-tech/microsoft-india-voluntary-exit-offer-eligibility-deadline-10938408/"
      ],
      [
       "CNBC report, 26 Oct 2026",
       "https://www.cnbc.com/2026/10/26/microsoft-msft-voluntary-buyouts.html"
      ],
      [
       "GeekWire report",
       "https://www.geekwire.com/2026/microsoft-makes-new-voluntary-exit-offer-to-more-than-a-quarter-of-its-workforce-including-some-execs/"
      ]
     ]
    }
   ],
   "ethics": [
    {
     "area": "env",
     "title": "Manauli, Haryana's 'sweet corn village'",
     "card": "2026-10-27-19",
     "src": "IE p. 4",
     "case": "In Manauli village (Sonipat), about 70% of 2,000 acres has moved from paddy to sweet corn and vegetables over two decades. Farmer Arun Chauhan switched after seeing a friend's success with strawberries; the farmers formed an FPO and now sell directly to e-commerce firms.",
     "lesson": "Sustainable change lasts when it also pays, and it spreads by example among peers rather than by order. Leaving the paddy cycle also eases the straw that drives stubble burning (our link, not the report's).",
     "values": [
      "Environmental stewardship",
      "Collective action",
      "Learning from peers"
     ]
    },
    {
     "area": "env",
     "title": "The stubble dilemma in Punjab",
     "card": "2026-10-27-19",
     "src": "IE p. 6",
     "case": "Of 684 farm fires this season, 457 (69%) are in Tarn Taran and Amritsar. Early paddy lets farmers fit in a third crop of peas or potatoes before wheat, leaving little time to clear fields without burning. A new helpline from the Sanjha Mittar Farmer Support Centre (associated with Clean Air Punjab) supports farmers. An official says the challenge is not only machinery but making farmers aware of the health and environmental harm of burning.",
     "lesson": "A choice that is rational for one farmer imposes a health cost on millions: private gain against public harm. Support and persuasion address the farmer's constraint; punishment alone does not.",
     "values": [
      "Public interest",
      "Empathy",
      "Responsibility for consequences"
     ]
    },
    {
     "area": "env",
     "title": "From 'use and throw' to 'use, return and recover'",
     "card": "2026-10-27-20",
     "src": "IE p. 11",
     "case": "Delhi plans a Deposit Refund Scheme: Re 1 or Rs 2 extra on a plastic bottle, refunded on return. Uttarakhand began one at Kedarnath in 2022 with a Rs 10 deposit; bottle returns rose from about 20-22% to nearly 90%. Delhi generates about 1,500 tonnes of plastic waste a day, 19% of it unprocessed.",
     "lesson": "A small refundable deposit turns a civic duty into a habit: a nudge rather than a ban. Waste becomes a shared responsibility of producer, consumer and state.",
     "values": [
      "Civic responsibility",
      "Sustainability",
      "Nudge in public policy"
     ]
    },
    {
     "area": "justice",
     "title": "Nepal and the first Loss and Damage payout",
     "card": "2026-10-27-18",
     "src": "IE p. 12",
     "case": "The UN Fund for Loss and Damage allocated $21.6 million (about Rs 190 crore) to Nepal nearly two months after devastating floods, the first time it has earmarked a grant for a disaster-hit nation. The Indian Express argues that compensation must come faster.",
     "lesson": "Those who emitted least often suffer most. Climate justice rests on common but differentiated responsibilities and on fairness to future generations; relief that comes late is justice delayed.",
     "values": [
      "Fairness",
      "Intergenerational equity",
      "Global responsibility"
     ]
    },
    {
     "area": "public",
     "title": "When police become debt collectors",
     "card": "2026-10-27-04",
     "src": "IE p. 13 (Abhinav Chandrachud)",
     "case": "With civil suits taking years (the Bombay High Court has 9,454 civil suits among about 6.49 lakh pending cases), well-connected creditors push police to turn simple debt disputes into 'cheating' or 'breach of trust' cases. The author writes that officers are sometimes offered a cut, and that not all officers give in.",
     "lesson": "Discretion used for a private party is abuse of power, even when the law is technically invoked. Integrity means refusing to be an instrument of the powerful; a good case-study setting for an officer under pressure from an influential complainant.",
     "values": [
      "Integrity",
      "Rule of law",
      "Impartiality"
     ]
    },
    {
     "area": "care",
     "title": "Keralam makes elder care a right",
     "card": "2026-10-27-07",
     "src": "IE p. 8",
     "case": "The Keralam Assembly passed the Senior Citizens (Care and Protection of Rights) Bill, 2026, the first state-level law framing elder welfare as rights, with regulated and professional care.",
     "lesson": "Dignity in old age moves from charity to entitlement. The state supports the family's duty of care rather than replacing it.",
     "values": [
      "Dignity",
      "Compassion",
      "Duty of care"
     ]
    },
    {
     "area": "care",
     "title": "Cyclone Arnab: the most vulnerable first",
     "card": "2026-10-27-21",
     "src": "IE p. 11",
     "case": "Before landfall, Andhra Pradesh moved 4,711 pregnant women from vulnerable areas to health centres and hospitals. Odisha's Chief Minister deputed eight ministers to districts to oversee preparedness.",
     "lesson": "Compassion in administration means planning for the weakest first (Antyodaya). Leaders on the ground make accountability visible.",
     "values": [
      "Compassion",
      "Antyodaya",
      "Accountability"
     ]
    },
    {
     "area": "gender",
     "title": "Counting what women carry",
     "card": "2026-10-27-16",
     "src": "IE p. 15",
     "case": "The Statistics Ministry plans to add questions on 'women-specific constraints' (limits on time and mobility, household responsibilities) to its survey of unincorporated enterprises.",
     "lesson": "What is not measured is rarely addressed. Equity needs the invisible burden of unpaid care to be seen first.",
     "values": [
      "Gender justice",
      "Equity",
      "Evidence-based policy"
     ]
    },
    {
     "area": "lives",
     "title": "Two fathers behind two India cricketers",
     "card": null,
     "src": "IE p. 17 (Sports)",
     "case": "Tilak Varma and Nitish Kumar Reddy won a T20I for India in New Zealand. The report notes that both fathers had hard years: Nitish's father, Mutyala Reddy, left a stable job at Hindustan Zinc Limited to support his son's practice in Visakhapatnam; Tilak's father, Nagaraju, an electrician, spent sleepless nights making ends meet so that his son could concentrate on cricket.",
     "lesson": "Parents and family are the first shapers of a child's future. Their quiet sacrifice, made years before any success is visible, is how values like commitment and perseverance are passed on.",
     "values": [
      "Parental sacrifice",
      "Role of family",
      "Commitment"
     ]
    }
   ]
  }
 ]
};
