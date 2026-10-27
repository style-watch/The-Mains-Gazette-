# Morning Edition 27 Oct 2026, v2 format (reader feedback):
#  - summary: 2-3 plain sentences on what happened (facts from the paper / named sources only)
#  - evolution: how the story has developed, only where the issue recurs (facts from the paper unless marked)
#  - ideas: at most 3, plain language, each with a one-line "use it in"
#  - keywords [term, meaning, use]; data [figure, what, source, use]; examples [title, what, "GS4"|"", use]
import json
ed=json.load(open('/home/claude/mm/build/ed_20261027.json'))
V={
"04":dict(
 summary="Civil cases in India can take decades. The Bombay High Court settled a suit filed in 1947 only this year. Writing on the Ideas page, Abhinav Chandrachud says that because courts are so slow, well-connected creditors go to the police instead, and the police turn simple money disputes into criminal cases to force a settlement.",
 evolution=[["1872","The Privy Council observed that a litigant's difficulties in India begin when he has obtained a decree."],["1947 to 2026","A Bombay High Court suit took 79 years before it was settled out of court."],["Today","Bombay HC has 6,48,725 pending cases; practitioners estimate a suit there usually takes over 20 years."]],
 ideas=[["Slow courts create a 'parallel justice' system: police summons, threats of arrest and pressure to settle, often without an FIR.","GS2 answers on judicial pendency, police reforms and access to justice."],
        ["Too few judges is a big cause: 15 per million people in Maharashtra and only 1.9 in the Bombay High Court, against about 157 in New York state.","GS2 answers on judicial vacancies and judicial infrastructure."],
        ["Turning a civil dispute into a criminal case is 'abuse of process', which the Supreme Court has repeatedly discouraged, but practice differs from the law.","GS2 rule of law; GS4 probity and misuse of power."]],
 keywords=[["Abuse of process","Misusing legal procedure for an improper aim","Any answer on misuse of police or criminal law."],["Law on the books vs law in action","Gap between what the law says and how it works","Introductions or conclusions on implementation gaps."],["Execution of decree","Enforcing a civil court's judgment","Answers on delays after a case is won."]],
 data=[["79 years","Bombay HC suit filed in 1947, settled out of court this year","IE, The Ideas Page","Opening line for judicial delay."],["1.9 judges per million","Bombay High Court (Maharashtra: 15; New York state: about 157)","IE, The Ideas Page","Argument for more judges."],["6,48,725","Cases pending at Bombay HC, incl. 9,454 civil suits","NJDG, via IE","Scale of pendency."]],
 examples=[["The Godfather (Puzo, 1969)","The undertaker turns to the mafia don when courts fail him; used by the author to explain why litigants seek other routes","","Essay or GS2 introduction on institutional failure."],["Officer pressed by an influential complainant","The author notes that not all police officers give in to such pressure","GS4","Case studies on integrity and impartiality."]]),
"07":dict(
 summary="The Keralam Assembly passed the Senior Citizens (Care and Protection of Rights) Bill, 2026, India's first state-level legal framework for elder welfare. It recognises the right to live safely and independently at home, allows living wills, regulates care homes and caregivers, and sets penalties for abuse or abandonment.",
 evolution=[["2007","Central Maintenance and Welfare of Parents and Senior Citizens Act focused on maintenance by children (background, not from the report)."],["2026","Keralam moves to a rights-based law covering care standards, caregivers and living wills."]],
 ideas=[["Elder care is shifting from charity and family duty alone to legal rights backed by the state.","GS2 answers on welfare of vulnerable sections."],
        ["Ageing in place: care at home first, institutions as the last resort.","GS1 answers on demographic transition and changing family structure."],
        ["The care economy needs regulation: standards for care homes and certified, fairly paid caregivers.","GS2 health and social sector; GS3 jobs in the care economy."]],
 keywords=[["Living will","A person's written choices on life-sustaining treatment","GS2 answers on passive euthanasia and dignity."],["Ageing in place","Older people living independently at home","GS1 ageing and family answers."],["Cognisable and bailable","Police can arrest without warrant; bail is a right","Explaining how a welfare law is enforced."]],
 data=[["Up to 3 years + Rs 50,000","Penalty for property grabbing, cruelty or abandonment of an elderly resident","IE p. 8","Shows the law has teeth."],["Rs 10,000","Fine for failing to report suspected abuse","IE p. 8","Duty to report as a protection tool."]],
 examples=[["Keralam Senior Citizens Bill, 2026","First state-level elder-rights framework","","Best-practice example in GS2 answers."],["Caring for an elderly parent","Compassion and duty within the family","GS4","GS4 answers on family as a source of values."]]),
"09":dict(
 summary="After the ITBP chief spoke of face-offs at several places in Arunachal Pradesh, including the Taksing area, China said it strictly follows agreements and carries out normal patrols. India's MEA said friction arises when Chinese forces depart from established patrolling patterns, and that talks should continue to avoid 'misunderstanding and miscalculation'.",
 evolution=[["2020","Deadly Galwan clashes, followed by a military face-off that lasted over four years."],["Last two years","Both sides took measures to rebuild relations."],["6 Sep 2026","Corps Commander talks at the Wacha-Damai border meeting point."],["Sep 2026","Modi and Xi met at the BRICS summit in New Delhi; Modi stressed the 'three mutuals'."],["Oct 2026","Fresh face-offs reported in Arunachal."]],
 ideas=[["Relations are being rebuilt, but friction on the ground keeps returning; normalisation is fragile.","GS2 answers on India-China relations."],
        ["Talks at many levels (Corps Commander, diplomatic, leaders) are needed to stop small incidents from escalating.","GS2/GS3 answers on border management mechanisms."]],
 keywords=[["LAC","Line of Actual Control, the de facto India-China boundary","Any India-China answer."],["'Three mutuals'","Mutual respect, mutual sensitivity, mutual interest","Conclusion of India-China answers."],["Corps Commander talks","Senior military dialogue on border issues","Answers on conflict management."]],
 data=[["Over 4 years","Length of the military face-off after Galwan","IE p. 10","Shows how long normalisation took."]],
 examples=[["Taksing area, Arunachal Pradesh","Recent face-offs; ITBP's Shaurya commando teams handled the situation","","GS3 answers on border security."]]),
"11":dict(
 summary="A former Central Electricity Authority member writes that India has moved from chronic power shortages to surplus power during solar hours, but shortages at night. He argues for storage, a stronger transmission network, demand-side management and markets that reward flexibility.",
 evolution=[["30 years ago","40% of Indians had no electricity (World Bank, cited in the article)."],["2003","Electricity Act allowed state electricity boards to be split into separate companies."],["Around 2008","Power exchanges in Delhi and Mumbai led to a capacity boom; over 1,00,000 MW of coal capacity added 2010-2020."],["2026","About 292 GW renewables (53% of capacity), 162 GW solar; daytime glut, night deficit."]],
 ideas=[["Adding capacity is not enough; power must be available when people need it, at night as well as during the day.","GS3 answers on energy transition and energy security."],
        ["Storage is the missing piece, but pumped storage is slow to build and storage prices from bids are said to be unremunerative.","GS3 answers on infrastructure investment."],
        ["Wasted solar power and frequent ramping of coal plants are a double loss.","GS3 answers on efficient use of resources."]],
 keywords=[["Pumped storage","Hydro storage that pumps water uphill with surplus power","Solutions part of energy answers."],["Demand-side management","Shifting or cutting demand to balance the grid","Energy efficiency answers."],["Curtailment","Forcing generators to cut output the grid cannot absorb","Explaining wasted solar power."]],
 data=[["~292 GW (53%)","Renewable capacity incl. large hydro, share of total","IE, The Editorial Page","Progress on clean energy."],["~162 GW","Solar capacity","IE, The Editorial Page","Scale of solar growth."],["40%","Indians without electricity 30 years ago","World Bank, via IE","Contrast: deficit to surplus."]],
 examples=[["Solar glut by day, deficit by night (2026)","Surplus during solar hours, shortage at night","","Illustration in energy-transition answers."]]),
"13":dict(
 summary="The Road Transport Ministry amended the Central Motor Vehicle Rules to allow flex-fuel vehicles to run on up to E100, nearly pure ethanol. Ordinary petrol or E20 vehicles cannot use it. The Ministry says higher ethanol blends cut dependence on imported crude and can reduce some tailpipe emissions.",
 evolution=[["Before Oct 2026","Ongoing debate over the use of E20 fuel (as the report notes)."],["26 Oct 2026","E100 notified, but only for vehicles built as flex-fuel."]],
 ideas=[["Ethanol reduces dependence on imported crude oil.","GS3 answers on energy security."],
        ["Lower lifecycle emissions are possible, but they depend on the crop and the production process.","GS3 environment answers; give a balanced view."]],
 keywords=[["Flex-fuel vehicle (FFV)","Vehicle built to run on different petrol-ethanol blends","Clean transport answers."],["E20 / E100","Petrol with 20% ethanol / nearly pure ethanol","Precise terms in biofuel answers."],["Lifecycle emissions","Emissions across production, transport and use","Balanced evaluation of biofuels."]],
 data=[["Up to E100","Blend now allowed for flex-fuel vehicles","MoRTH, via IE p. 15","Latest policy step."]],
 examples=[["Fuel compatibility sticker","Motorists must check the vehicle sticker and manual before choosing fuel","","Consumer-awareness point in policy answers."]]),
"16":dict(
 summary="The Statistics Ministry plans to add questions on 'women-specific constraints', such as limits on time and mobility and household responsibilities, to its survey of informal businesses. About 27% of informal enterprises are headed by women. Comments on the new questionnaire are invited until 15 November.",
 evolution=[["2021-22","First Annual Survey of Unincorporated Sector Enterprises (ASUSE)."],["2025","Latest round: 27% of informal enterprises women-headed."],["2026","Survey to measure women-specific constraints."]],
 ideas=[["What is not measured is rarely fixed; better data is the first step to targeted support for women entrepreneurs.","GS1 women's issues; GS3 inclusive growth."],
        ["Household and care responsibilities hold back women's work; the gap is widest among the young.","GS3 answers on female labour force participation."]],
 keywords=[["ASUSE","Annual Survey of Unincorporated Sector Enterprises","Data source to cite in informal-sector answers."],["Female LFPR","Share of women working or looking for work","Any women-and-work answer."]],
 data=[["27%","Informal enterprises headed by women","ASUSE 2025, via IE p. 15","Women's presence in the informal economy."],["34.6% vs 77.4%","Female vs male labour force participation, September","PLFS, via IE","The gender gap in work."],["21.5% vs 61.1%","Same, for ages 15-29","PLFS, via IE","The gap is widest among youth."]],
 examples=[["Gender-responsive statistics","Adding women-specific questions to a national survey","","Good-governance example in GS1/GS3 answers."]]),
"18":dict(
 summary="The UN's Fund for Loss and Damage gave Nepal $21.6 million after devastating floods, the first time it has earmarked a grant for a disaster-hit country. Nepal had invoked climate justice: it produces barely 0.1% of global emissions. The Indian Express editorial says payouts must come much faster and the Fund needs reform.",
 evolution=[["2022","Fund for Loss and Damage created at COP27, after a nearly three-decade campaign by vulnerable nations."],["2023","Fund operationalised."],["2026","First grant earmarked, to Nepal; developed countries insisted it is an exception, not a precedent."],["9 Nov 2026","COP31 begins in Antalya, Turkey, with compensation on the agenda."]],
 ideas=[["Loss and damage is compensation, not charity, because it rests on responsibility for climate change.","GS3 climate answers; GS2 global governance."],
        ["Speed is justice: delays raise hardship and rebuilding costs, especially for poor countries.","GS3 disaster management; GS4 fairness."],
        ["Money is short: $822 million pledged, about a third of pending claims.","GS3 answers on climate finance."]],
 keywords=[["Loss and damage","Climate impacts beyond what mitigation and adaptation can prevent","Climate-finance answers."],["Climate justice","Fair sharing of climate burdens by responsibility and capacity","Ethics and climate answers."]],
 data=[["$21.6 million","First grant, to Nepal","IE, The Editorial Page","Latest development."],["~0.1%","Nepal's share of global emissions","IE, The Editorial Page","The equity argument."],["1,400+","Lives lost in the floods","IE, The Editorial Page","Scale of disaster."],["$822 million","Pledges to the Fund, about a third of claims","IE, The Editorial Page","The finance gap."]],
 examples=[["Ice-and-rock avalanche, Bhotekoshi-Trishuli","Triggered flash floods; Nepal lost at least 10% of its hydropower facilities","","Himalayan cascading hazards."],["Nepal's climate-justice plea","Low emitter, high impact","GS4","Fairness and intergenerational equity."]]),
"19":dict(
 summary="Punjab has recorded 684 farm fires this season, 69% of them in Tarn Taran and Amritsar. Farmers in this Majha region harvest short-duration paddy early and squeeze in a third crop of peas or potatoes before wheat, leaving little time to clear fields without burning. An official says machines are available; the challenge is time and awareness.",
 evolution=[["2024","1,857 fires by this point in the season."],["2025","743 fires in the same period."],["2026","684 fires so far, but an early spike in Majha."]],
 ideas=[["The real cause here is the crop calendar, not only a lack of machines.","GS3 answers on stubble burning and air pollution."],
        ["Fewer fires each year shows progress, but support and awareness matter as much as penalties.","GS3 answers on policy design."],
        ["Moving away from the paddy-wheat cycle is the long-term fix (see Manauli's sweet-corn shift).","GS3 answers on crop diversification."]],
 keywords=[["Crop residue management","Machines and methods to handle straw without burning","Solutions in stubble answers."],["Short-duration paddy","Varieties like Pusa 1509 that free fields early","Explaining the timing problem."]],
 data=[["684 (69% in two districts)","Farm fires this season; Tarn Taran and Amritsar","IE p. 6","Current picture."],["1,857 → 743 → 684","Fires in the same period, 2024 → 2025 → 2026","IE p. 6","Trend line for progress."],["1.25 lakh","Operational residue-management machines in Punjab","IE p. 6","Shows machines alone are not enough."]],
 examples=[["Manauli, Haryana's 'sweet corn village'","About 70% of 2,000 acres moved from paddy to sweet corn and vegetables; farmers formed an FPO","","Crop diversification success story (IE p. 4)."],["Sanjha Mittar Farmer Support Centre","New helpline guiding farmers to alternatives","","Example of persuasion over punishment."]]),
"20":dict(
 summary="Delhi is considering a deposit refund scheme: buyers would pay Re 1 or Rs 2 extra for a plastic bottle and get it back on returning it. It would start at tourist spots, possibly using QR codes. The idea is borrowed from Uttarakhand and Goa, where similar schemes already run.",
 evolution=[["2022","Single-use plastic items banned across India."],["2022","Uttarakhand's pilot at Kedarnath; returns rose from about 20-22% to nearly 90%."],["Now","Goa runs a Rs 5 deposit; Delhi plans its own scheme."]],
 ideas=[["A small refundable deposit changes behaviour better than appeals alone.","GS3 answers on solid waste management."],
        ["It moves people from 'use and throw' to 'use, return and recover', a circular economy.","GS3 environment; essay on sustainability."]],
 keywords=[["Deposit refund scheme","Refundable deposit on containers to encourage return","Waste-management solutions."],["Circular economy","Reusing and recycling materials to cut waste","Sustainability answers."]],
 data=[["~1,500 tonnes a day","Plastic waste generated in Delhi","Delhi govt report, via IE p. 11","Scale of the problem."],["19%","Share of Delhi's plastic waste left unprocessed","IE p. 11","The processing gap."],["~20-22% → ~90%","Bottle return rate in Uttarakhand after the scheme","Uttarakhand official, via IE","Proof that it works."]],
 examples=[["Kedarnath deposit refund pilot (2022)","Won a Digital India Award; expanded across Uttarakhand","","Best practice from India."]]),
"21":dict(
 summary="With Cyclone Arnab expected to make landfall on the Andhra Pradesh coast on 28 October, Andhra moved 4,711 pregnant women from vulnerable areas to health centres and hospitals and closed schools in the affected districts. Odisha's Chief Minister sent eight ministers to districts to oversee preparedness and banned sea fishing and tourist entry in six districts.",
 evolution=[],
 ideas=[["Good preparedness protects the most vulnerable first, before landfall.","GS3 answers on disaster management."],
        ["Many layers act together: early warning, NDRF and SDRF teams, school closures, fishing bans and ministers on the ground.","GS3 answers on coordinated disaster response."]],
 keywords=[["Landfall","When a cyclone's centre crosses the coast","Cyclone answers."],["NDRF / SDRF","National and State Disaster Response Forces","Institutional framework in disaster answers."]],
 data=[["4,711","Pregnant women moved to health centres before landfall","AP officials, via IE p. 11","Vulnerability-based planning."],["7 NDRF + 8 SDRF","Teams deployed in Andhra Pradesh","IE p. 11","Scale of response."]],
 examples=[["Evacuating pregnant women ahead of a cyclone","Andhra Pradesh, October 2026","GS4","Compassion in administration; gender-sensitive disaster response."]]),
"22":dict(
 summary="The World Meteorological Organization warned on 21 October that the intense 2026 El Niño will peak around year-end and affect weather well into 2027. It has already weakened India's monsoon, which ended at 87% of the long period average. The Pacific is expected to be 3.8°C warmer than normal at El Niño's centre, a level never recorded before.",
 evolution=[["2014-15","El Niño peaked at 2.3°C (NOAA data, cited in the report)."],["June 2026","Current El Niño emerged and intensified rapidly."],["2026 monsoon","Ended at 87% of LPA, the fourth driest since 2001."],["Into 2027","WMO expects effects to continue."]],
 ideas=[["El Niño weakens the Indian monsoon, causing drought and heatwaves.","GS1 answers on climatology; GS3 drought management."],
        ["Effects into 2027 threaten food and water security and could push up fertiliser and fuel prices.","GS3 food security answers."]],
 keywords=[["El Niño (ENSO)","Warming of the central-eastern Pacific that affects global weather","GS1 climatology."],["Long period average (LPA)","Benchmark for normal monsoon rainfall","Monsoon performance answers."]],
 data=[["87% of LPA","India's 2026 southwest monsoon, fourth driest since 2001","IE p. 16","Impact on India."],["3.8°C","Expected warming at El Niño's centre, never recorded before","WMO, via IE p. 16","Intensity of this event."],["~70%","Share of India's annual rain from the southwest monsoon","IE p. 16","Why the monsoon matters."]],
 examples=[["WMO warning, 21 October 2026","Effects to last well into 2027","","Recent example in climate answers."]]),
"26":dict(
 summary="Microsoft has offered a voluntary exit to about 60,000 employees, roughly a quarter of its workforce, in the US, Canada, the UK and India. Those who accept leave on 31 December with standard severance. Reports link the move to the company's costly spending on AI infrastructure.",
 evolution=[["Spring 2026","Microsoft's first-ever voluntary retirement programme for long-serving US staff (GeekWire)."],["26 Oct 2026","Wider Voluntary Exit Offer covering four countries including India."]],
 ideas=[["Spending is shifting to AI, and big firms are reshaping their workforce around it.","GS3 answers on technology and employment."],
        ["Even voluntary exits shrink jobs; workers need reskilling and social security for the AI era (editor's view).","GS3 answers on employment policy and skilling."]],
 keywords=[["Voluntary exit / VRS","A package offered to staff who choose to leave","Answers on restructuring."],["Structural unemployment","Job loss from changes in technology or the economy","GS3 unemployment answers."]],
 data=[["~60,000","Employees eligible for the offer","CNBC; company to GeekWire","Scale of restructuring."],["About a quarter","Share of Microsoft's 223,000 workforce eligible","CNBC, GeekWire","Size relative to the company."]],
 examples=[["Microsoft's Voluntary Exit Offer, Oct 2026","Covers staff in India among four countries","","Example of AI-era workforce change."]]),
}
for it in ed["items"]:
    k=it["id"][-2:]
    v=V[k]
    it["summary"]=v["summary"]; it["evolution"]=v["evolution"]
    it["ideas"]=v["ideas"]; it["keywords"]=v["keywords"]; it["data"]=v["data"]; it["examples"]=v["examples"]
    it["fmt"]=2
open('/home/claude/mm/build/ed_20261027.json','w').write(json.dumps(ed,ensure_ascii=False,indent=1))
print("v2 applied to",len(ed["items"]))
