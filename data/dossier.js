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
  editions: []
};
