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
  "paper": "Articles you shared",
  "items": [
   {
    "id": "2026-10-27-01",
    "title": "Why the Rs 190 crore Loss and Damage Fund payout to Nepal matters",
    "section": "Environment · International",
    "url": "https://www.downtoearth.org.in/climate-change/loss-and-damage-fund-sets-aside-216-million-for-nepal-floods-a-fraction-of-recovery-needs",
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
    "context": "The UN Fund for Responding to Loss and Damage (FRLD) has provisionally set aside $21.6 million (about Rs 190 crore) for Nepal after the August 2026 Himalayan flash floods. It is the fund's first-ever response to a specific disaster.",
    "ideas": [
     "Climate justice in practice: the money goes to a country that contributed little to warming but bears its costs. Nepal's PM framed it as a crisis Nepal did not create.",
     "Symbolic, not sufficient: the allocation is under 0.5% of Nepal's recovery needs, which shows the gap between climate finance pledged and what is needed.",
     "Speed matters in disaster response: campaigners criticised the seven-week wait for the board's first emergency meeting and want a permanent rapid-response window that pays out in days.",
     "Precedent politics: developed countries said the Nepal decision must not set a precedent, while developing countries see it as the start of a working loss-and-damage system.",
     "Cascading Himalayan hazards: a rock-ice collapse turned into a flash flood that destroyed hydropower dams and villages. This raises questions about infrastructure in ecologically fragile zones.",
     "Neighbourhood angle for India: Nepal is turning to India, China and multilateral banks for recovery money, which gives India room for disaster diplomacy in the neighbourhood."
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
   }
  ]
 }
]
};
