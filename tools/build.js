/* The Mains Gazette: build the reading files from the daily editions.

   Source (written by the editor, one file per newspaper day):
     editions/YYYY-MM-DD.json   { date, paper, items:[...], ethics:[...], essay:[...] }

   Output (generated; never edit by hand):
     data/index.json            small summary: list of editions, counts per theme/area
     data/themes/<key>/<YYYY-MM>.json  stories filed under a GS theme, one file per month
                                       (for GS4 theme keys: Ethics Casebook cases under it)
     data/ethics/<area>/<YYYY-MM>.json Ethics Casebook cases in an area, per month
     data/essay/<key>/<YYYY-MM>.json   essay material under an essay theme, per month
   Month files keep past months unchanged, so the repository's history stays small.

   Run from the repository root:  node tools/build.js
*/
const fs = require('fs');
const path = require('path');

global.window = {};
eval(fs.readFileSync('data/themes.js', 'utf8'));
eval(fs.readFileSync('data/essay.js', 'utf8'));
const GS = new Set(window.MM.themes.map(t => t.k));
const ES = new Set(window.MM_ESSAY.themes.map(t => t.k));

const days = fs.readdirSync('editions').filter(f => /^\d{4}-\d{2}-\d{2}\.json$/.test(f)).sort().reverse();
const eds = days.map(f => JSON.parse(fs.readFileSync(path.join('editions', f), 'utf8')));

const themes = {}, areas = {}, essay = {};
const push = (o, k, v) => (o[k] = o[k] || []).push(v);
const problems = [];
const ids = new Set();

for (const ed of eds) {
  const stamp = { date: ed.date, paper: ed.paper };
  (ed.items || []).forEach(it => {
    if (ids.has(it.id)) problems.push('duplicate story id ' + it.id); ids.add(it.id);
    (it.themes || []).forEach(k => { if (!GS.has(k)) problems.push(`${it.id}: unknown theme "${k}"`); else push(themes, k, Object.assign({}, stamp, it)); });
  });
  (ed.ethics || []).forEach(c => {
    if (!c.id) problems.push(`${ed.date}: an ethics case has no id`);
    push(areas, c.area, Object.assign({}, stamp, c));
    (c.themes || []).forEach(k => { if (!GS.has(k)) problems.push(`${c.id}: unknown GS4 theme "${k}"`); else push(themes, k, Object.assign({}, stamp, c)); });
  });
  (ed.essay || []).forEach(f => {
    (f.themes || []).forEach(k => { if (!ES.has(k)) problems.push(`${f.id}: unknown essay theme "${k}"`); else push(essay, k, Object.assign({}, stamp, f)); });
  });
}

// Write <dir>/<key>/<YYYY-MM>.json; return { key: { 'YYYY-MM': count } } for the index.
function writeFolder(dir, obj) {
  fs.rmSync(dir, { recursive: true, force: true });
  const months = {};
  for (const [k, list] of Object.entries(obj)) {
    const byM = {};
    list.forEach(x => (byM[x.date.slice(0, 7)] = byM[x.date.slice(0, 7)] || []).push(x));
    fs.mkdirSync(path.join(dir, k), { recursive: true });
    months[k] = {};
    for (const [m, l] of Object.entries(byM)) { fs.writeFileSync(path.join(dir, k, m + '.json'), JSON.stringify(l)); months[k][m] = l.length; }
  }
  return months;
}
const mThemes = writeFolder('data/themes', themes);
const mAreas = writeFolder('data/ethics', areas);
const mEssay = writeFolder('data/essay', essay);

const count = o => Object.fromEntries(Object.entries(o).map(([k, v]) => [k, v.length]));
const index = {
  built: new Date().toISOString(),
  latest: eds[0] ? eds[0].date : null,
  editions: eds.map(e => ({ date: e.date, paper: e.paper, stories: (e.items || []).length, cases: (e.ethics || []).length, essay: (e.essay || []).length })),
  themes: count(themes), areas: count(areas), essay: count(essay),
  months: { themes: mThemes, areas: mAreas, essay: mEssay },
  totals: {
    stories: eds.reduce((s, e) => s + (e.items || []).length, 0),
    cases: eds.reduce((s, e) => s + (e.ethics || []).length, 0),
    essay: eds.reduce((s, e) => s + (e.essay || []).length, 0)
  }
};
fs.writeFileSync('data/index.json', JSON.stringify(index));

const kb = f => (fs.statSync(f).size / 1024).toFixed(1) + ' KB';
console.log(`${eds.length} editions · ${index.totals.stories} stories · ${index.totals.cases} cases · ${index.totals.essay} essay pieces`);
console.log(`index.json ${kb('data/index.json')} · ${Object.keys(themes).length} theme files · ${Object.keys(areas).length} area files · ${Object.keys(essay).length} essay files`);
if (problems.length) { console.error('PROBLEMS:\n  ' + problems.join('\n  ')); process.exit(1); }
