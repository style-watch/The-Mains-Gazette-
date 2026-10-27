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
   "paper": "The Indian Express",
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
      [
       "Slow courts create a 'parallel justice' system: police summons, threats of arrest and pressure to settle, often without an FIR.",
       "GS2 answers on judicial pendency, police reforms and access to justice."
      ],
      [
       "Too few judges is a big cause: 15 per million people in Maharashtra and only 1.9 in the Bombay High Court, against about 157 in New York state.",
       "GS2 answers on judicial vacancies and judicial infrastructure."
      ],
      [
       "Turning a civil dispute into a criminal case is 'abuse of process', which the Supreme Court has repeatedly discouraged, but practice differs from the law.",
       "GS2 rule of law; GS4 probity and misuse of power."
      ]
     ],
     "keywords": [
      [
       "Abuse of process",
       "Misusing legal procedure for an improper aim",
       "Any answer on misuse of police or criminal law."
      ],
      [
       "Law on the books vs law in action",
       "Gap between what the law says and how it works",
       "Introductions or conclusions on implementation gaps."
      ],
      [
       "Execution of decree",
       "Enforcing a civil court's judgment",
       "Answers on delays after a case is won."
      ]
     ],
     "data": [
      [
       "79 years",
       "Bombay HC suit filed in 1947, settled out of court this year",
       "IE, The Ideas Page",
       "Opening line for judicial delay."
      ],
      [
       "1.9 judges per million",
       "Bombay High Court (Maharashtra: 15; New York state: about 157)",
       "IE, The Ideas Page",
       "Argument for more judges."
      ],
      [
       "6,48,725",
       "Cases pending at Bombay HC, incl. 9,454 civil suits",
       "NJDG, via IE",
       "Scale of pendency."
      ]
     ],
     "examples": [
      [
       "The Godfather (Puzo, 1969)",
       "The undertaker turns to the mafia don when courts fail him; used by the author to explain why litigants seek other routes",
       "",
       "Essay or GS2 introduction on institutional failure."
      ],
      [
       "Officer pressed by an influential complainant",
       "The author notes that not all police officers give in to such pressure",
       "GS4",
       "Case studies on integrity and impartiality."
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
      ],
      [
       "GS4-2023/Q5b",
       "The police-as-debt-collector trend shows why probity matters for governance and public trust."
      ]
     ],
     "where": "The Ideas Page, page 13 (Abhinav Chandrachud)",
     "summary": "Civil cases in India can take decades. The Bombay High Court settled a suit filed in 1947 only this year. Writing on the Ideas page, Abhinav Chandrachud says that because courts are so slow, well-connected creditors go to the police instead, and the police turn simple money disputes into criminal cases to force a settlement.",
     "evolution": [
      [
       "1872",
       "The Privy Council observed that a litigant's difficulties in India begin when he has obtained a decree."
      ],
      [
       "1947 to 2026",
       "A Bombay High Court suit took 79 years before it was settled out of court."
      ],
      [
       "Today",
       "Bombay HC has 6,48,725 pending cases; practitioners estimate a suit there usually takes over 20 years."
      ]
     ],
     "fmt": 2
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
      [
       "Elder care is shifting from charity and family duty alone to legal rights backed by the state.",
       "GS2 answers on welfare of vulnerable sections."
      ],
      [
       "Ageing in place: care at home first, institutions as the last resort.",
       "GS1 answers on demographic transition and changing family structure."
      ],
      [
       "The care economy needs regulation: standards for care homes and certified, fairly paid caregivers.",
       "GS2 health and social sector; GS3 jobs in the care economy."
      ]
     ],
     "keywords": [
      [
       "Living will",
       "A person's written choices on life-sustaining treatment",
       "GS2 answers on passive euthanasia and dignity."
      ],
      [
       "Ageing in place",
       "Older people living independently at home",
       "GS1 ageing and family answers."
      ],
      [
       "Cognisable and bailable",
       "Police can arrest without warrant; bail is a right",
       "Explaining how a welfare law is enforced."
      ]
     ],
     "data": [
      [
       "Up to 3 years + Rs 50,000",
       "Penalty for property grabbing, cruelty or abandonment of an elderly resident",
       "IE p. 8",
       "Shows the law has teeth."
      ],
      [
       "Rs 10,000",
       "Fine for failing to report suspected abuse",
       "IE p. 8",
       "Duty to report as a protection tool."
      ]
     ],
     "examples": [
      [
       "Keralam Senior Citizens Bill, 2026",
       "First state-level elder-rights framework",
       "",
       "Best-practice example in GS2 answers."
      ],
      [
       "Caring for an elderly parent",
       "Compassion and duty within the family",
       "GS4",
       "GS4 answers on family as a source of values."
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
     "where": "Politics, page 8",
     "summary": "The Keralam Assembly passed the Senior Citizens (Care and Protection of Rights) Bill, 2026, India's first state-level legal framework for elder welfare. It recognises the right to live safely and independently at home, allows living wills, regulates care homes and caregivers, and sets penalties for abuse or abandonment.",
     "evolution": [
      [
       "2007",
       "Central Maintenance and Welfare of Parents and Senior Citizens Act focused on maintenance by children (background, not from the report)."
      ],
      [
       "2026",
       "Keralam moves to a rights-based law covering care standards, caregivers and living wills."
      ]
     ],
     "fmt": 2
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
      [
       "Relations are being rebuilt, but friction on the ground keeps returning; normalisation is fragile.",
       "GS2 answers on India-China relations."
      ],
      [
       "Talks at many levels (Corps Commander, diplomatic, leaders) are needed to stop small incidents from escalating.",
       "GS2/GS3 answers on border management mechanisms."
      ]
     ],
     "keywords": [
      [
       "LAC",
       "Line of Actual Control, the de facto India-China boundary",
       "Any India-China answer."
      ],
      [
       "'Three mutuals'",
       "Mutual respect, mutual sensitivity, mutual interest",
       "Conclusion of India-China answers."
      ],
      [
       "Corps Commander talks",
       "Senior military dialogue on border issues",
       "Answers on conflict management."
      ]
     ],
     "data": [
      [
       "Over 4 years",
       "Length of the military face-off after Galwan",
       "IE p. 10",
       "Shows how long normalisation took."
      ]
     ],
     "examples": [
      [
       "Taksing area, Arunachal Pradesh",
       "Recent face-offs; ITBP's Shaurya commando teams handled the situation",
       "",
       "GS3 answers on border security."
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
     "where": "Nation, page 10",
     "summary": "After the ITBP chief spoke of face-offs at several places in Arunachal Pradesh, including the Taksing area, China said it strictly follows agreements and carries out normal patrols. India's MEA said friction arises when Chinese forces depart from established patrolling patterns, and that talks should continue to avoid 'misunderstanding and miscalculation'.",
     "evolution": [
      [
       "2020",
       "Deadly Galwan clashes, followed by a military face-off that lasted over four years."
      ],
      [
       "Last two years",
       "Both sides took measures to rebuild relations."
      ],
      [
       "6 Sep 2026",
       "Corps Commander talks at the Wacha-Damai border meeting point."
      ],
      [
       "Sep 2026",
       "Modi and Xi met at the BRICS summit in New Delhi; Modi stressed the 'three mutuals'."
      ],
      [
       "Oct 2026",
       "Fresh face-offs reported in Arunachal."
      ]
     ],
     "fmt": 2
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
      [
       "Adding capacity is not enough; power must be available when people need it, at night as well as during the day.",
       "GS3 answers on energy transition and energy security."
      ],
      [
       "Storage is the missing piece, but pumped storage is slow to build and storage prices from bids are said to be unremunerative.",
       "GS3 answers on infrastructure investment."
      ],
      [
       "Wasted solar power and frequent ramping of coal plants are a double loss.",
       "GS3 answers on efficient use of resources."
      ]
     ],
     "keywords": [
      [
       "Pumped storage",
       "Hydro storage that pumps water uphill with surplus power",
       "Solutions part of energy answers."
      ],
      [
       "Demand-side management",
       "Shifting or cutting demand to balance the grid",
       "Energy efficiency answers."
      ],
      [
       "Curtailment",
       "Forcing generators to cut output the grid cannot absorb",
       "Explaining wasted solar power."
      ]
     ],
     "data": [
      [
       "~292 GW (53%)",
       "Renewable capacity incl. large hydro, share of total",
       "IE, The Editorial Page",
       "Progress on clean energy."
      ],
      [
       "~162 GW",
       "Solar capacity",
       "IE, The Editorial Page",
       "Scale of solar growth."
      ],
      [
       "40%",
       "Indians without electricity 30 years ago",
       "World Bank, via IE",
       "Contrast: deficit to surplus."
      ]
     ],
     "examples": [
      [
       "Solar glut by day, deficit by night (2026)",
       "Surplus during solar hours, shortage at night",
       "",
       "Illustration in energy-transition answers."
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
     "where": "The Editorial Page, page 12 (Somit Dasgupta (teaser on page 1))",
     "summary": "A former Central Electricity Authority member writes that India has moved from chronic power shortages to surplus power during solar hours, but shortages at night. He argues for storage, a stronger transmission network, demand-side management and markets that reward flexibility.",
     "evolution": [
      [
       "30 years ago",
       "40% of Indians had no electricity (World Bank, cited in the article)."
      ],
      [
       "2003",
       "Electricity Act allowed state electricity boards to be split into separate companies."
      ],
      [
       "Around 2008",
       "Power exchanges in Delhi and Mumbai led to a capacity boom; over 1,00,000 MW of coal capacity added 2010-2020."
      ],
      [
       "2026",
       "About 292 GW renewables (53% of capacity), 162 GW solar; daytime glut, night deficit."
      ]
     ],
     "fmt": 2
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
      [
       "Ethanol reduces dependence on imported crude oil.",
       "GS3 answers on energy security."
      ],
      [
       "Lower lifecycle emissions are possible, but they depend on the crop and the production process.",
       "GS3 environment answers; give a balanced view."
      ]
     ],
     "keywords": [
      [
       "Flex-fuel vehicle (FFV)",
       "Vehicle built to run on different petrol-ethanol blends",
       "Clean transport answers."
      ],
      [
       "E20 / E100",
       "Petrol with 20% ethanol / nearly pure ethanol",
       "Precise terms in biofuel answers."
      ],
      [
       "Lifecycle emissions",
       "Emissions across production, transport and use",
       "Balanced evaluation of biofuels."
      ]
     ],
     "data": [
      [
       "Up to E100",
       "Blend now allowed for flex-fuel vehicles",
       "MoRTH, via IE p. 15",
       "Latest policy step."
      ]
     ],
     "examples": [
      [
       "Fuel compatibility sticker",
       "Motorists must check the vehicle sticker and manual before choosing fuel",
       "",
       "Consumer-awareness point in policy answers."
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
     ],
     "summary": "The Road Transport Ministry amended the Central Motor Vehicle Rules to allow flex-fuel vehicles to run on up to E100, nearly pure ethanol. Ordinary petrol or E20 vehicles cannot use it. The Ministry says higher ethanol blends cut dependence on imported crude and can reduce some tailpipe emissions.",
     "evolution": [
      [
       "Before Oct 2026",
       "Ongoing debate over the use of E20 fuel (as the report notes)."
      ],
      [
       "26 Oct 2026",
       "E100 notified, but only for vehicles built as flex-fuel."
      ]
     ],
     "fmt": 2
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
      [
       "What is not measured is rarely fixed; better data is the first step to targeted support for women entrepreneurs.",
       "GS1 women's issues; GS3 inclusive growth."
      ],
      [
       "Household and care responsibilities hold back women's work; the gap is widest among the young.",
       "GS3 answers on female labour force participation."
      ]
     ],
     "keywords": [
      [
       "ASUSE",
       "Annual Survey of Unincorporated Sector Enterprises",
       "Data source to cite in informal-sector answers."
      ],
      [
       "Female LFPR",
       "Share of women working or looking for work",
       "Any women-and-work answer."
      ]
     ],
     "data": [
      [
       "27%",
       "Informal enterprises headed by women",
       "ASUSE 2025, via IE p. 15",
       "Women's presence in the informal economy."
      ],
      [
       "34.6% vs 77.4%",
       "Female vs male labour force participation, September",
       "PLFS, via IE",
       "The gender gap in work."
      ],
      [
       "21.5% vs 61.1%",
       "Same, for ages 15-29",
       "PLFS, via IE",
       "The gap is widest among youth."
      ]
     ],
     "examples": [
      [
       "Gender-responsive statistics",
       "Adding women-specific questions to a national survey",
       "",
       "Good-governance example in GS1/GS3 answers."
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
     "where": "Economy, page 15",
     "summary": "The Statistics Ministry plans to add questions on 'women-specific constraints', such as limits on time and mobility and household responsibilities, to its survey of informal businesses. About 27% of informal enterprises are headed by women. Comments on the new questionnaire are invited until 15 November.",
     "evolution": [
      [
       "2021-22",
       "First Annual Survey of Unincorporated Sector Enterprises (ASUSE)."
      ],
      [
       "2025",
       "Latest round: 27% of informal enterprises women-headed."
      ],
      [
       "2026",
       "Survey to measure women-specific constraints."
      ]
     ],
     "fmt": 2
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
      [
       "Loss and damage is compensation, not charity, because it rests on responsibility for climate change.",
       "GS3 climate answers; GS2 global governance."
      ],
      [
       "Speed is justice: delays raise hardship and rebuilding costs, especially for poor countries.",
       "GS3 disaster management; GS4 fairness."
      ],
      [
       "Money is short: $822 million pledged, about a third of pending claims.",
       "GS3 answers on climate finance."
      ]
     ],
     "keywords": [
      [
       "Loss and damage",
       "Climate impacts beyond what mitigation and adaptation can prevent",
       "Climate-finance answers."
      ],
      [
       "Climate justice",
       "Fair sharing of climate burdens by responsibility and capacity",
       "Ethics and climate answers."
      ]
     ],
     "data": [
      [
       "$21.6 million",
       "First grant, to Nepal",
       "IE, The Editorial Page",
       "Latest development."
      ],
      [
       "~0.1%",
       "Nepal's share of global emissions",
       "IE, The Editorial Page",
       "The equity argument."
      ],
      [
       "1,400+",
       "Lives lost in the floods",
       "IE, The Editorial Page",
       "Scale of disaster."
      ],
      [
       "$822 million",
       "Pledges to the Fund, about a third of claims",
       "IE, The Editorial Page",
       "The finance gap."
      ]
     ],
     "examples": [
      [
       "Ice-and-rock avalanche, Bhotekoshi-Trishuli",
       "Triggered flash floods; Nepal lost at least 10% of its hydropower facilities",
       "",
       "Himalayan cascading hazards."
      ],
      [
       "Nepal's climate-justice plea",
       "Low emitter, high impact",
       "GS4",
       "Fairness and intergenerational equity."
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
      ],
      [
       "GS4-2024/Q2b",
       "Nepal's case shows who pays for 'development' driven by greed: low emitters, high losses."
      ]
     ],
     "where": "The Editorial Page, page 12 (editorial)",
     "links": [
      [
       "Related Explained (Telegram): Why Rs 190 crore payout to Nepal matters",
       "https://t.me/indianexpress_explained/16643"
      ]
     ],
     "summary": "The UN's Fund for Loss and Damage gave Nepal $21.6 million after devastating floods, the first time it has earmarked a grant for a disaster-hit country. Nepal had invoked climate justice: it produces barely 0.1% of global emissions. The Indian Express editorial says payouts must come much faster and the Fund needs reform.",
     "evolution": [
      [
       "2022",
       "Fund for Loss and Damage created at COP27, after a nearly three-decade campaign by vulnerable nations."
      ],
      [
       "2023",
       "Fund operationalised."
      ],
      [
       "2026",
       "First grant earmarked, to Nepal; developed countries insisted it is an exception, not a precedent."
      ],
      [
       "9 Nov 2026",
       "COP31 begins in Antalya, Turkey, with compensation on the agenda."
      ]
     ],
     "fmt": 2
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
      [
       "The real cause here is the crop calendar, not only a lack of machines.",
       "GS3 answers on stubble burning and air pollution."
      ],
      [
       "Fewer fires each year shows progress, but support and awareness matter as much as penalties.",
       "GS3 answers on policy design."
      ],
      [
       "Moving away from the paddy-wheat cycle is the long-term fix (see Manauli's sweet-corn shift).",
       "GS3 answers on crop diversification."
      ]
     ],
     "keywords": [
      [
       "Crop residue management",
       "Machines and methods to handle straw without burning",
       "Solutions in stubble answers."
      ],
      [
       "Short-duration paddy",
       "Varieties like Pusa 1509 that free fields early",
       "Explaining the timing problem."
      ]
     ],
     "data": [
      [
       "684 (69% in two districts)",
       "Farm fires this season; Tarn Taran and Amritsar",
       "IE p. 6",
       "Current picture."
      ],
      [
       "1,857 → 743 → 684",
       "Fires in the same period, 2024 → 2025 → 2026",
       "IE p. 6",
       "Trend line for progress."
      ],
      [
       "1.25 lakh",
       "Operational residue-management machines in Punjab",
       "IE p. 6",
       "Shows machines alone are not enough."
      ]
     ],
     "examples": [
      [
       "Manauli, Haryana's 'sweet corn village'",
       "About 70% of 2,000 acres moved from paddy to sweet corn and vegetables; farmers formed an FPO",
       "",
       "Crop diversification success story (IE p. 4)."
      ],
      [
       "Sanjha Mittar Farmer Support Centre",
       "New helpline guiding farmers to alternatives",
       "",
       "Example of persuasion over punishment."
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
     "where": "Region, page 6 (Express special)",
     "summary": "Punjab has recorded 684 farm fires this season, 69% of them in Tarn Taran and Amritsar. Farmers in this Majha region harvest short-duration paddy early and squeeze in a third crop of peas or potatoes before wheat, leaving little time to clear fields without burning. An official says machines are available; the challenge is time and awareness.",
     "evolution": [
      [
       "2024",
       "1,857 fires by this point in the season."
      ],
      [
       "2025",
       "743 fires in the same period."
      ],
      [
       "2026",
       "684 fires so far, but an early spike in Majha."
      ]
     ],
     "fmt": 2
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
      [
       "A small refundable deposit changes behaviour better than appeals alone.",
       "GS3 answers on solid waste management."
      ],
      [
       "It moves people from 'use and throw' to 'use, return and recover', a circular economy.",
       "GS3 environment; essay on sustainability."
      ]
     ],
     "keywords": [
      [
       "Deposit refund scheme",
       "Refundable deposit on containers to encourage return",
       "Waste-management solutions."
      ],
      [
       "Circular economy",
       "Reusing and recycling materials to cut waste",
       "Sustainability answers."
      ]
     ],
     "data": [
      [
       "~1,500 tonnes a day",
       "Plastic waste generated in Delhi",
       "Delhi govt report, via IE p. 11",
       "Scale of the problem."
      ],
      [
       "19%",
       "Share of Delhi's plastic waste left unprocessed",
       "IE p. 11",
       "The processing gap."
      ],
      [
       "~20-22% → ~90%",
       "Bottle return rate in Uttarakhand after the scheme",
       "Uttarakhand official, via IE",
       "Proof that it works."
      ]
     ],
     "examples": [
      [
       "Kedarnath deposit refund pilot (2022)",
       "Won a Digital India Award; expanded across Uttarakhand",
       "",
       "Best practice from India."
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
      ],
      [
       "GS4-2015/Q1a",
       "Use the bottle-return scheme as an environmental issue seen through environmental ethics."
      ]
     ],
     "where": "Nation, page 11 (Express special)",
     "summary": "Delhi is considering a deposit refund scheme: buyers would pay Re 1 or Rs 2 extra for a plastic bottle and get it back on returning it. It would start at tourist spots, possibly using QR codes. The idea is borrowed from Uttarakhand and Goa, where similar schemes already run.",
     "evolution": [
      [
       "2022",
       "Single-use plastic items banned across India."
      ],
      [
       "2022",
       "Uttarakhand's pilot at Kedarnath; returns rose from about 20-22% to nearly 90%."
      ],
      [
       "Now",
       "Goa runs a Rs 5 deposit; Delhi plans its own scheme."
      ]
     ],
     "fmt": 2
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
      [
       "Good preparedness protects the most vulnerable first, before landfall.",
       "GS3 answers on disaster management."
      ],
      [
       "Many layers act together: early warning, NDRF and SDRF teams, school closures, fishing bans and ministers on the ground.",
       "GS3 answers on coordinated disaster response."
      ]
     ],
     "keywords": [
      [
       "Landfall",
       "When a cyclone's centre crosses the coast",
       "Cyclone answers."
      ],
      [
       "NDRF / SDRF",
       "National and State Disaster Response Forces",
       "Institutional framework in disaster answers."
      ]
     ],
     "data": [
      [
       "4,711",
       "Pregnant women moved to health centres before landfall",
       "AP officials, via IE p. 11",
       "Vulnerability-based planning."
      ],
      [
       "7 NDRF + 8 SDRF",
       "Teams deployed in Andhra Pradesh",
       "IE p. 11",
       "Scale of response."
      ]
     ],
     "examples": [
      [
       "Evacuating pregnant women ahead of a cyclone",
       "Andhra Pradesh, October 2026",
       "GS4",
       "Compassion in administration; gender-sensitive disaster response."
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
      ],
      [
       "GS4-2019/Q7",
       "Prioritising pregnant women before landfall: compassion and planning in disaster response."
      ]
     ],
     "where": "Nation, page 11",
     "summary": "With Cyclone Arnab expected to make landfall on the Andhra Pradesh coast on 28 October, Andhra moved 4,711 pregnant women from vulnerable areas to health centres and hospitals and closed schools in the affected districts. Odisha's Chief Minister sent eight ministers to districts to oversee preparedness and banned sea fishing and tourist entry in six districts.",
     "evolution": [],
     "fmt": 2
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
      [
       "El Niño weakens the Indian monsoon, causing drought and heatwaves.",
       "GS1 answers on climatology; GS3 drought management."
      ],
      [
       "Effects into 2027 threaten food and water security and could push up fertiliser and fuel prices.",
       "GS3 food security answers."
      ]
     ],
     "keywords": [
      [
       "El Niño (ENSO)",
       "Warming of the central-eastern Pacific that affects global weather",
       "GS1 climatology."
      ],
      [
       "Long period average (LPA)",
       "Benchmark for normal monsoon rainfall",
       "Monsoon performance answers."
      ]
     ],
     "data": [
      [
       "87% of LPA",
       "India's 2026 southwest monsoon, fourth driest since 2001",
       "IE p. 16",
       "Impact on India."
      ],
      [
       "3.8°C",
       "Expected warming at El Niño's centre, never recorded before",
       "WMO, via IE p. 16",
       "Intensity of this event."
      ],
      [
       "~70%",
       "Share of India's annual rain from the southwest monsoon",
       "IE p. 16",
       "Why the monsoon matters."
      ]
     ],
     "examples": [
      [
       "WMO warning, 21 October 2026",
       "Effects to last well into 2027",
       "",
       "Recent example in climate answers."
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
     "where": "Explained, page 16",
     "summary": "The World Meteorological Organization warned on 21 October that the intense 2026 El Niño will peak around year-end and affect weather well into 2027. It has already weakened India's monsoon, which ended at 87% of the long period average. The Pacific is expected to be 3.8°C warmer than normal at El Niño's centre, a level never recorded before.",
     "evolution": [
      [
       "2014-15",
       "El Niño peaked at 2.3°C (NOAA data, cited in the report)."
      ],
      [
       "June 2026",
       "Current El Niño emerged and intensified rapidly."
      ],
      [
       "2026 monsoon",
       "Ended at 87% of LPA, the fourth driest since 2001."
      ],
      [
       "Into 2027",
       "WMO expects effects to continue."
      ]
     ],
     "fmt": 2
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
      [
       "Spending is shifting to AI, and big firms are reshaping their workforce around it.",
       "GS3 answers on technology and employment."
      ],
      [
       "Even voluntary exits shrink jobs; workers need reskilling and social security for the AI era (editor's view).",
       "GS3 answers on employment policy and skilling."
      ]
     ],
     "keywords": [
      [
       "Voluntary exit / VRS",
       "A package offered to staff who choose to leave",
       "Answers on restructuring."
      ],
      [
       "Structural unemployment",
       "Job loss from changes in technology or the economy",
       "GS3 unemployment answers."
      ]
     ],
     "data": [
      [
       "~60,000",
       "Employees eligible for the offer",
       "CNBC; company to GeekWire",
       "Scale of restructuring."
      ],
      [
       "About a quarter",
       "Share of Microsoft's 223,000 workforce eligible",
       "CNBC, GeekWire",
       "Size relative to the company."
      ]
     ],
     "examples": [
      [
       "Microsoft's Voluntary Exit Offer, Oct 2026",
       "Covers staff in India among four countries",
       "",
       "Example of AI-era workforce change."
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
     ],
     "summary": "Microsoft has offered a voluntary exit to about 60,000 employees, roughly a quarter of its workforce, in the US, Canada, the UK and India. Those who accept leave on 31 December with standard severance. Reports link the move to the company's costly spending on AI infrastructure.",
     "evolution": [
      [
       "Spring 2026",
       "Microsoft's first-ever voluntary retirement programme for long-serving US staff (GeekWire)."
      ],
      [
       "26 Oct 2026",
       "Wider Voluntary Exit Offer covering four countries including India."
      ]
     ],
     "fmt": 2
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
