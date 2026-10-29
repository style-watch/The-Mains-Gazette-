# The Mains Gazette

Today's news, tomorrow's answers. A UPSC Mains current-affairs app.

## How the data is stored

One file per newspaper day is the only thing the editor writes:

    editions/YYYY-MM-DD.json   { date, paper, items: [...], ethics: [...], essay: [...] }

`node tools/build.js` then files everything automatically (never edit these by hand):

    data/index.json                    small summary: editions list and counts
    data/themes/<theme>/<YYYY-MM>.json every story under a theme, month by month (the Almanac)
    data/ethics/<area>/<YYYY-MM>.json  Ethics Casebook cases by area
    data/essay/<theme>/<YYYY-MM>.json  essay material by essay theme

The app downloads only what a page needs: the Morning Edition loads one day; an Almanac theme
page loads that theme's months and shows its whole trajectory. Past months never change, so the
repository stays small (roughly 50-60 MB of data a year, against GitHub Pages' 1 GB limit).

## Daily workflow
1. The owner sends the newspaper (PDF, photos or links) and the list of items to cover.
2. Write `editions/YYYY-MM-DD.json` (copy the latest one for the field format).
   Story ids start with the date (`2026-10-28-01`); ethics ids are `2026-10-28-e1`.
3. Run `node tools/build.js`. It stops and lists any unknown theme key or duplicate id.
4. Rules:
   - Work only from the article itself. Never add figures or examples that are not in the source.
   - Ideas must be tied to a specific GS syllabus line, and `syllabus` names that line.
   - Mark Ethics-usable examples with a third value: `"GS4"`.
   - `summary` is ONE line. Readers read the paper; the app is a reminder.
   - Data: only figures that can be quoted in many answers (national, priority themes such as women). Leave `data: []` if nothing qualifies; the card says so.
   - Examples: relatable and broadly usable, not narrow. Keywords: terms that sharpen an answer (e.g. 'duck curve', 'time poverty'), not the obvious ones.
   - Ideas: about five, crisp, that together cover the article's MAIN arguments (merge related ones); never drop a key point (e.g. the civil authority's role in negotiation). Do not stretch to ten: aspirants' time matters.
   - Every idea, keyword, data point and example ends with two parts: a short tag (where it fits, e.g. "GS2 · India–Pakistan") and a "Write" line, ONE sentence (under ~25 words) the candidate can put straight into an answer. Entry format: ideas [text, tag, write]; keywords [term, meaning, tag, write]; data [figure, measure, source, tag, write]; examples [name, what, "GS4"|"", tag, write]. Keep the main text to one line.
   - The learning loop on each key story: past questions (`pyqs`) → a brief trend reading (`trend`: {t, focus[]}, 2–3 sentences plus 3–4 focus areas) → `potential` questions (3–4, UPSC pattern, with marks) → ONE of them as `practice` with a model answer.
   - Section names on the card: From the Archives (past questions) → The Trendline (trend) → On the Radar (potential questions) → The Answer Desk (practice question with model answer).
   - Card layout: only the four core blocks (ideas, data, keywords, examples) show in full. The four learning-loop sections sit below them in a "Go deeper" strip, closed, each with a one-line teaser (Archives: count and years; Trendline: first sentence of `watch`; Radar: count; Answer Desk: marks and question). Write `watch` so its first sentence works on its own. To override a teaser, add `teasers: {arc, trend, radar, desk}` (or `trend.line`). The first story of the day opens Archives by default. Each section has a shareable link: `#day-YYYY-MM-DD/<story id>/<arc|trend|radar|desk>`.
   - Trendline: simple yet analytical. `trend` = {t: the trajectory in 2–3 sentences with years (e.g. bilateral India–Pakistan → groupings and regions such as the SCO and Central Asia); watch: what repeats, so it is a must-study topic (e.g. SCO twice in three years); focus: 3–4 areas to focus on}. Read the whole run of questions; do not over-weight any single year or the day's news. Name the NATURE of the questions too (e.g. rights questions: a right stated, then tested against a specific law or a competing right).
   - Introduction and conclusion: ONE line each, fact-driven (dates, names). Challenges and way forward are full parts with about 6 points each; for 10 marks the way forward still gets its own points, followed by a one-line conclusion.
   - Model answers answer the QUESTION, not the news: draw on the whole syllabus for multi-dimensional points; the news supplies examples. Keep each point to about two lines: key phrase, one explaining sentence, a short example (examples optional where the point stands alone).
   - Practice questions (`practice` on a story): 1–2 per key story, in UPSC's pattern and directive words, labelled as the editor's. Each has `q`, `marks` (10 = 150 words, 15 = 250 words), `parts` and `answer` (sections of {h, t} or {h, pts}).
   - Model answers, the owner's rules:
     1. First understand the flow of the question and identify its parts; each part becomes a small heading.
     2. Introduction: set up the question's premise (e.g. tensions, yet engagement).
     3. Each main part: about 6 points, multi-dimensional (diplomatic, connectivity, trade, security, cultural, economic...), each a point plus example. Use frameworks named in the news (e.g. "connectivity, transit and trade").
     4. "Discuss" means two sides: positives, then limits/challenges.
     5. 10 marks: way forward is combined with the conclusion. 15 marks: way forward is its own part, then a final conclusion.
     6. No one-liners: each point is self-explanatory: a key phrase, then one or two explaining sentences using sharp keywords, then an example. Word limit is not a constraint.
     7. Facts only from the news or well-established sources.
     8. Where it helps (processes, cycles, cause-effect), add a simple diagram: a section's `flow` list, drawn as boxes joined by arrows.
     Point format in `pts`: {"k": key phrase, "t": explanation, "ex": example}.
   - Fit check before filing: link an essay topic only if the story genuinely illustrates it (e.g. a delayed reform fits 'Shelving hard decisions', not 'A ship in harbour'); file an ethics case under the dimension it truly shows (pollution → environmental ethics, not work culture); name the GS4 value directly where it applies (e.g. compassion towards the weaker sections for elder care).
   - Look for the GS4 angle in every story and add an `ethics` case for it.
   - Ethics cases: `id`, `news` (one line), `syllabus` (GS4 line), `link` (the connection), `question` (practice), `pyq` (GS4 ids), `keywords`, `themes` (g4 keys), `area`, `card` (story id). No ideas, data or examples.
   - `themes` must use keys from `data/themes.js` (essay material: keys from `data/essay.js`).
5. Commit and push to `main`. GitHub Pages updates in about a minute.

Check theme keys:

    node -e "global.window={};require('./data/themes.js');console.log(window.MM.themes.map(t=>t.k+'  '+t.n).join('\n'))"

## Theme data
`data/themes.js` is generated by `research/build_data.py (run research/tag2.py first)` from the topic-wise list of UPSC Mains GS 1–3 questions (2013–2026). The source is Education Province, spot-checked against published papers. Question texts are short paraphrases, not the official wording.
