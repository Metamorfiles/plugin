# The logo drawn whole

The image model draws the logo as one drawing, lettering and all, and Studio makes it a vector:
lettering alone, or lettering with a mark, a mascot or ornaments, drawn in one style so every part
belongs to the others.

## What the model draws well

- **Expressive lettering draws well**: scripts, chubby, soft, bouncy or hand-cut letters, where the
  hand's irregularity is part of the look.
- **Precise lettering** (carved or faceted strokes, engraved capitals, fine hairline serifs,
  perfectly even geometric capitals) is made with real fonts and a generated part, or the idea is
  replaced by another (`SKILL.md`, step 4): the model draws it nearly right, and a trace keeps
  every flaw.
- **Supporting words** (a tagline, the trade, the place), when the route has them, are set in real
  type and composed with the traced drawing (`lockups.md`).

## The prompt

Write the prompt from the chosen direction and the brief, as a designer's brief:
- the look and feel, in the direction's own terms;
- the lettering, described by its shapes in a designer's words, since the model draws shapes, not
  font names;
- the layout: how the parts sit together and the space between them;
- any mark, mascot or ornament, in the same hand and weight as the letters, and how it meets them
  (over the word, closing it, beside it); a mascot is briefed with the `character` skill, by who it
  is, its face, what it's doing and its look, so the drawing finds its parts;
- each colour for what it paints, from the direction's palette;
- the name in quotes, exactly as written, an uncommon one spelled letter by letter;
- "flat vector artwork, like a brand designer's final logo file", and no other text.

A joined script joins letters within each word: say each word is written on its own. Accents keep their shape and their place over their letter.

Show the model the look, not only describe it: the chosen direction's card first, then two or three
of its reference images that show lettering, a mark or a mascot, and start the prompt with "Image 1
is the chosen direction: take its palette, type character and mood. Images 2 to 4 are style
references: take their drawing hand, letter weight, colour handling and how the parts lock together.
Never copy their letters, names, marks or layout." Words alone lose what made the user pick the
direction.

Draw it at the lockup's shape, listing every colour it uses:
`metamorfiles_generate_image { prompt, references: ["templates/brand-board#process-direction:<chosen id>", "brand/process/references/<project>/2.jpg"], width: 1536, height: 1024, folder: "brand/process/logo", trace: { colors: [...] } }`.
Studio has it drawn on a transparent background and traces each colour in the brand's exact value
(`vector.md`); the path it returns is the traced .svg. The logo step shows the user the drawing
itself. Run `metamorfiles_check_logo` on it (`checks.md`).

## Other versions of it

Every other version of a logo is made the cheapest way that keeps it the logo's own drawing.

### Every route, before the choice

What `SKILL.md`, step 6, gives each route:

- **Its one colour**, a recolour: `metamorfiles_make_logo_variant` with `colors`, as step 6 says.
- **A part taken out as it is** (the mark alone, the name alone): `metamorfiles_make_logo_variant`
  with `keep`. Its box always comes from the `boxes` `metamorfiles_check_logo` reports for that file,
  around that part's pieces. A part sitting on a shape of another colour (a
  letter on a band, a mark on a badge) is freed first by cutting that colour out,
  `metamorfiles_make_logo_variant { file: "brand/process/logo/<file>.svg", output: "brand/process/logo/<file>-free.svg", colors: { "<the shape's colour>": "knockout" } }`,
  then `keep` on that file. No image is made.

### The chosen logo, after the choice

The planned flow, with no extra word from the user:

- **The reversed version**, a recolour made with the final files (`final.md`).
- **The small mark** (`SKILL.md`, step 8) and **the character** of a logo that carries one (the
  `character` skill, "In a new brand"): parts taken out as above, or drawn from the logo as an edit
  where no box holds them alone.
- **The version redrawn where one colour loses a part**: when `metamorfiles_check_logo` reported
  `lostInOneColour` with `merged` boxes (features that merge into one ink), the one-colour version is
  drawn as an edit of the logo's own drawing (`edit: true`, the traced file first in `references`,
  the same `folder` and `trace` colours, saying only what changes in the merged parts: an outline cut
  between the features, a gap left open) and traced, then lined up with the logo:
  `metamorfiles_align_version { file: "brand/process/logo/<file>.svg", version: "brand/process/logo/<file>-ink-draft.svg", output: "brand/process/logo/<file>-ink.svg", redrawn: [<the merged boxes>] }`.
  Every piece outside them is the logo's own file. It takes the place of the one-colour file in the
  chosen option's `files` in `logo.md`, its entry carrying the same boxes as `redrawn`, so the card
  says what was redrawn and the reviewer judges only that. It is a traced file of the chosen logo, so
  it is cleaned like the logo (`final.md`, "Cleaning"), and the final one-colour and reversed files
  are recoloured from its cleaned copy.

### Only on the user's word

**Another layout** (one line, stacked), drawn at its new shape and checked like the original.
