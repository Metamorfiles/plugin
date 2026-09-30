# The name in type

How the logo face is chosen and the name set, customised and finished: the name in routes 1 and 3,
and every supporting word in all three. Only route 2 draws the name (`drawn.md`).

## Contents

- The type study
- The logo face
- Setting the name
- One idea in the letters
- Looks that seem drawn
- Taglines and other words
- The small-size version

## The type study

`metamorfiles_type_study` sets the name in up to 24 faces on one sheet, one row each. Faces the brand
has are used from `brand/fonts/`; any other open-licence Google Fonts family is fetched into a study
folder and never becomes part of the brand until you add it.

- **Cast wide.** 12 to 24 faces across the classes the look allows: if the brief says heavy and
  rounded, try rounded sans, fat display, soft slabs and a bouncy script at their heavy weights, not
  twelve rounded sans. Pick them from `references/fonts.md` of `metamorfiles-brand-creation`, by
  character, and pass the weight each is judged at.
- **Set the name as it will be set**: its case, its accents, its script. A name in Japanese, Greek or
  Cyrillic is studied in faces that have those letters; the sheet reports a face that can't set it.
- **Read the word, not the letters.** The shape of the whole word, the pairs, the rhythm, how it
  sounds, and whether it still reads small. Then look for the opportunity: a counter that could hold
  a shape, two letters that could share a stroke, a letter that could be replaced, a repeated letter
  that makes a rhythm.
- **Shortlist three to five**, and choose one face per route. Two routes can share a face only when
  they do very different things with it.

## The logo face

A brand usually has a face for its logo, one for headlines and one for text. The logo's face is
chosen for the one word it sets, so it can be louder than anything the brand sets as text: a brush
script, a fat display, a condensed grotesque, an engraved capital. Add it with
`metamorfiles_add_font`. In the kit it is named for the logo and never set as text.

Only faces under the SIL Open Font License, which allows logos and outlining the letters. The tool
refuses any other.

## Setting the name

`metamorfiles_make_wordmark` sets the name as outlined letters, spaced for a logo, and lists the
face's axes, features and the alternates it has for these letters. Its controls:

- **Weight, width and italic** on a variable face's axes. A weight between the named ones is often
  the right one.
- **Spacing.** Optical by default: pairs a text face leaves loose at display size close to the face's
  own rhythm, and a script's joins are kept. Then:
  - `tracking`, in em: open capitals by 0.05 to 0.15; lowercase stays tight; a joined script is never
    tracked, since its letters are drawn to join.
  - `kerning`, by the pair, where a gap still shows at full size (`{ "Te": -0.03 }`).
- **Alternates and features**: the face's own alternate glyphs (`{ "S": "S.alt" }`) and OpenType
  features (`ss01`, `dlig`, a swash set).
- **`thicken`**, in em (0.01 to 0.04): heavier strokes for a hairline script or a face one weight too
  light.
- **`moves`**: single letters lifted, dropped or turned after spacing, by their place in the text,
  for a bouncy, hand-set word. Small moves (0.02 to 0.06 em, 2 to 8 degrees), alternating up and
  down, never two neighbours the same way, the first and last letters moved least so the word keeps
  its line.
- **`part`**: one drawn shape that takes a letter's place or its accent's, spaced by its own shape
  (`references/symbol.md`).

## One idea in the letters

An untouched face can be typed by anyone. Customise it one level, no more, so someone who knows the
face would see what changed and no one else would struggle to read it:

1. **Spacing and kerning** set for this word at logo size. Always.
2. **One or two letters changed**: an alternate, a swash, a ligature the face offers, a drawn part in
   a letter's place, a letter lifted or turned.
3. **The mark's logic in the letters**: the same corner roundness, the same weight, one cut angle
   shared by the mark and the type.

Redrawing the whole word is lettering: expressive lettering is route 2 (`drawn.md`); precise
lettering is found in a face (below).

## Looks that seem drawn

In routes 1 and 3, a look that seems to need drawn letters is built from a real face. Route 2 can
draw the expressive ones (a script, bouncy or dough-like letters) instead; the precise ones are
always built this way.

| The brief says | Build it from |
| --- | --- |
| Carved, chiselled, engraved sign | A condensed or engraved capital from the study, with `inline` (a line inside the strokes) and `depth` (the carved side) as a compose text part; a `facet` diamond as its ornament |
| Painted sign, shadow letters | A display face with `depth` in a second colour |
| A marker or brush script | A script or brush face (`fonts.md`, Scripts and brush), `thicken` if its strokes are too thin |
| Handwritten, casual | A hand face (`fonts.md`, Hands), for the name or one line only |
| Bouncy, jumping capitals | A heavy or condensed display face with `moves` |
| Letters cut from dough, inflated, soft | A fat rounded display face (`fonts.md`, Geometric and rounded, Loud and playful display) |
| A letter that is an object | The face, with the object drawn as a `part` in that letter's place |

When no face in the study carries a precise look, say so and show the closest, rather than drawing
the letters.

## Taglines and other words

A tagline, a place, a year, the words around a seal: real type, set as text parts of
`metamorfiles_compose_logo` with the wordmark's controls. Much smaller than the name (a quarter to a
third of its capital height), in a quieter face or the brand's text face, capitals tracked open. It
is dropped from the small versions, where it can't be read.

## The small-size version

A name set for 400 px closes up at 32. For the small sizes, set it again as its own file
(`wordmark-small.svg`): a weight heavier on the axis, tracking opened by 0.02 to 0.04, hairlines
thickened, and the tagline left out. Check both with `metamorfiles_check_logo`.
