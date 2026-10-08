# The name in type

How the name is set from real fonts in routes 2 and 3, and every supporting word in all three. Route 1
draws the name (`drawn.md`).

## The type study

`metamorfiles_type_study { text: "Lumen Skincare", faces: ["Fraunces", { family: "Inter", weight: 800 }] }`
sets the name in up to 24 faces on one sheet, one row each: each face a family name, or
`{ family, weight, italic }` to judge it at a weight. Faces the brand has are used from
`brand/fonts/`; any other open-licence Google Fonts family is fetched into a study folder and never
becomes part of the brand until you add it.

- Start from the faces the chosen direction names, and add others with the same qualities from
  `references/fonts.md` of `metamorfiles-brand-creation`, each at the weight it would be used at.
- Set the name as it will be set: its case, its accents, its script. The sheet reports a face that
  can't set it.
- Read the word, not the letters: its shape, its pairs, its rhythm, and what could become the idea
  (two letters that could join, a letter that could be replaced, an alternate the face offers).

## The logo face

A brand usually has a face for its logo, one for headlines and one for text. The logo's face is
chosen for the one word it sets, so it can be louder than anything the brand sets as text. Add it
with `metamorfiles_add_font { family: "Fraunces" }`: the file it returns (`brand/fonts/Fraunces.woff2`,
or `brand/fonts/Anton-400.woff2` for a face with one file per weight) is the `font` the name is set
from. In the kit it is named for the logo. Only faces under the SIL Open Font
License, which allows logos and outlining the letters; the tool refuses any other.

## Setting the name

`metamorfiles_make_wordmark { text: "Lumen Skincare", font: "brand/fonts/Fraunces.woff2", color: "#3b2e27", output: "brand/process/logo/wordmark.svg" }`
(all four required) sets the name as outlined letters, spaced for a logo, and lists the face's axes,
features and the alternates it has for these letters. Its controls:

- **Weight, width and italic** on a variable face's axes.
- **Spacing.** Optical by default: pairs a text face leaves loose at display size close to the
  face's own rhythm, and a script's joins are kept. `tracking` in em opens or closes the whole word
  (never applied between joined letters); `kerning` adjusts a pair (`{ "Te": -0.03 }`).
- **Alternates and features**: the face's own alternate glyphs (`{ "S": "S.alt" }`) and OpenType
  features (`ss01`, `dlig`, `liga`, a swash set).
- **`thicken`**, in em: heavier strokes for a face a little too light.
- **`moves`**: single letters turned or lifted, for a hand-set word:
  `moves: [{ at: 2, rotate: -4 }]`, `at` counting every character from 1, spaces included. A turn
  pivots on the letter's foot, so it stays on the line; `dy` lifts it off, and the result names
  every letter that sits off its line. Each move is part of the composition and says why (the letter
  that leans into the mark, a joyful word that bounces as a whole); a lone letter off the line reads
  as a mistake, and every letter moved in an up-down pattern reads as jitter. A face whose own shapes
  bounce carries the movement better. Judge it at 64 px as well as large.
- **`curve`**: the word on a line other than straight. `letters: "bend"` draws every outline through
  the curve, as an envelope warps type: stems bend and strokes stretch, which suits chunky retro and
  sign lettering and looks cheap on a high-contrast serif. `letters: "turn"` keeps each letter whole,
  standing on the curve, as type is set on a path: seals, scripts, a name arched over a character.
  `letters: "upright"` keeps them whole and upright, stepping along it.
  `curve: { kind: "arc", amount: 0.3, letters: "turn" }` arches the name; `kind` is also `arch`,
  `bulge`, `wave`, `rise` or `envelope` (with `top` and `bottom` heights). The file records the curve
  as its baseline, and a lockup lines up to it.
- **`part`**: a drawn shape in a letter's place or its accent's, spaced by its own shape
  (`symbol.md`).

`metamorfiles_compose_logo` adds finishes to a text part: `depth: { color, amount }` (a side in a
second colour, as on a painted or carved sign) and `inline: { color, inset, width }` (a line inside
the strokes).

## Adjusting it

Every wordmark keeps its settings beside it (`<file>.svg.json`). Change one thing without restating
the rest: `metamorfiles_make_wordmark { from: "brand/process/logo/route-2.svg", kerning: { "ol": -0.02 }, output: "brand/process/logo/route-2.svg" }`.
Objects merge key by key, so one kerning pair changes and the others stay.

## Supporting words

A tagline, the trade, the place, the words around a seal: real type, set as text parts of
`metamorfiles_compose_logo`, flat, with the same controls beside the part's own (`size`, `gap`,
`shift`): `{ text: "SINCE 2024", font: "brand/fonts/Inter.woff2", color: "#3b2e27", tracking: 0.12, size: 0.3 }`.
Where they sit and how large is a design decision for this logo; look at the lockup large and small
to judge it.

## The small-size version

A name set for 400 px can close up at 32. When the check shows it, set it again as its own file for
the small sizes (heavier, spaced a little looser, without the supporting words) and check both with
`metamorfiles_check_logo`.
