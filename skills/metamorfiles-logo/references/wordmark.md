# The name in type

How the name is set from real fonts in routes 2 and 3, and every supporting word in all three. Route 1
draws the name (`drawn.md`).

## The type study

`metamorfiles_type_study` sets the name in up to 24 faces on one sheet, one row each. Faces the brand
has are used from `brand/fonts/`; any other open-licence Google Fonts family is fetched into a study
folder and never becomes part of the brand until you add it.

- Start from the faces the chosen direction names, and add others with the same qualities from
  `references/fonts.md` of `metamorfiles-brand-creation`, each at the weight it would be used at.
- Set the name as it will be set: its case, its accents, its script. The sheet reports a face that
  can't set it.
- Read the word, not the letters: its shape, its pairs, its rhythm, and what could become the idea
  (two letters that could join, a letter that could be replaced, an alternate the face offers).

## The logo face

A brand usually has a face for its logo, one for headlines and one for text. The logo's face is
chosen for the one word it sets, so it can be louder than anything the brand sets as text. Add it
with `metamorfiles_add_font`. In the kit it is named for the logo. Only faces under the SIL Open Font
License, which allows logos and outlining the letters; the tool refuses any other.

## Setting the name

`metamorfiles_make_wordmark` sets the name as outlined letters, spaced for a logo, and lists the
face's axes, features and the alternates it has for these letters. Its controls:

- **Weight, width and italic** on a variable face's axes.
- **Spacing.** Optical by default: pairs a text face leaves loose at display size close to the
  face's own rhythm, and a script's joins are kept. `tracking` in em opens or closes the whole word
  (never applied between joined letters); `kerning` adjusts a pair (`{ "Te": -0.03 }`).
- **Alternates and features**: the face's own alternate glyphs (`{ "S": "S.alt" }`) and OpenType
  features (`ss01`, `dlig`, `liga`, a swash set).
- **`thicken`**, in em: heavier strokes for a face a little too light.
- **`moves`**: single letters lifted, dropped or turned after spacing, by their place in the text,
  for a bouncing word.
- **`part`**: a drawn shape in a letter's place or its accent's, spaced by its own shape
  (`symbol.md`).

`metamorfiles_compose_logo` adds finishes to a text part: `depth` (a side in a second colour, as on a
painted or carved sign) and `inline` (a line inside the strokes).

## Supporting words

A tagline, the trade, the place, the words around a seal: real type, set as text parts of
`metamorfiles_compose_logo` with the same controls. Where they sit and how large is a design decision
for this logo; look at the lockup large and small to judge it.

## The small-size version

A name set for 400 px can close up at 32. When the check shows it, set it again as its own file for
the small sizes (heavier, spaced a little looser, without the supporting words) and check both with
`metamorfiles_check_logo`.
