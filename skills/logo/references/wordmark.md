# The name in type

How the name is set from real fonts, and every supporting word in every route. A logo drawn whole
draws its name (`drawn.md`).

## The type study

`metamorfiles_type_study { text: "Lumen", faces: ["Host Grotesk", { family: "Schibsted Grotesk", weight: 700 }] }`
sets the name in many faces on one sheet, one row each. Faces the brand has are used from
`brand/fonts/`; any other open-licence Google Fonts family is fetched into a study folder and
becomes part of the brand only when you add it.

- Start from the faces the chosen direction names, and add others with the same qualities from
  `references/fonts.md` of the `new-brand` skill, each at the weight it would be used at.
- Set the name as it will be set: its case, its accents, its script. The sheet reports a face that
  can't set it.
- Read the word, not the letters: its shape, its pairs, its rhythm, and what could become the idea
  (two letters that could join, a letter that could be replaced, an alternate the face offers).

## The logo face

The logo's face is chosen for the one word it sets, so it can be louder than anything the brand sets
as text. Add it with `metamorfiles_add_font { family: "Host Grotesk" }`: the file it returns is the `font`
the name is set from. In the kit it is named for the logo.

## Setting the name

`metamorfiles_make_wordmark { text: "Lumen", font: "brand/fonts/HostGrotesk.woff2", color: "#1b1d1f", output: "brand/process/logo/minutes-word.svg" }`
sets the name as outlined letters, spaced optically for a logo, and lists the face's axes, features
and the alternates it has for these letters.

- **A moved letter** (`moves`) only when the route's composition has a reason for it, the letter that leans
  into the mark: a turn pivots on the letter's foot, so it stays on the line, and the result names
  every letter off its line.
- **A name that bounces, arches or waves is lettering,** drawn whole (`drawn.md`): drawn letters
  curve with their line, where bent type reads as WordArt.
- **A drawn part** in a letter's place or its accent's: `symbol.md`, "A drawn letter".

Every wordmark keeps its settings beside it (`<file>.svg.json`). Change one thing without restating
the rest: `metamorfiles_make_wordmark { from: "brand/process/logo/minutes-word.svg", kerning: { "Lu": -0.02 }, output: "brand/process/logo/minutes-word.svg" }`.
Objects merge key by key, so one kerning pair changes and the others stay.

## Supporting words

A tagline, the trade, the place, the words around a seal: real type, set as text parts of
`metamorfiles_compose_logo`, flat, with the wordmark's controls beside the part's own, and `curve`
to set them on an arc, each letter whole (a line under an arched drawing):
`{ text: "SKINCARE", font: "brand/fonts/HostGrotesk.woff2", color: "#1b1d1f", tracking: 0.12 }`.
Where they sit and how large is a design decision for this logo, set from the word's axis and the
spacing the lockup's result reports (`lockups.md`).
