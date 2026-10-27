# Exact question wording and GS4 themes

Run order after `research/build_data.py`:
1. `bank.py`: reads three public compilations (cloned separately into /home/claude/src) and builds a combined bank.
   - UPSC-2K25/PYQMains
   - nononsenseupsctamil/upsc-gs-mains
   - sauravanandb2w/upsc-mains-pyq
2. `match.py`: matches each GS1-3 question to its exact wording and counts how many compilations agree.
3. `add_verbatim.py data/themes.js`: writes the wording into the app (`pyq[id][4]`) with a source count (`pyq[id][5]`).
4. `gs4.py`, `gs4_final.py`, `gs4_tag.py`: build the GS4 bank (sub-questions and case studies) and tag it to Ethics themes.
5. `add_gs4.py data/themes.js`: adds the GS4 themes and questions to the app.

Known gaps:
- Two 2020 GS4 case studies are not in any of the compilations.
- For 2013-2018 GS4, only one compilation is available, so question numbers are not shown.
- 2024 GS4 Q6 was corrected by hand, after checking two coaching sites.
