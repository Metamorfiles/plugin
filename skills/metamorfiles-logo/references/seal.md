# Seals, badges and monograms

For a logo that has to fill a round sticker, a stamp, a cup lid or an app icon, built by Studio from
real type, shapes and drawn marks.

## A seal or badge

A `badge` composition with `metamorfiles_compose_logo`, its layers centred on one circle: `ring` and
`disc` shapes, text parts set `around: true`, and whatever sits in the middle (a mark, a monogram,
the name). What goes in it, and how much, is the design's decision.

Text around the circle reads from the top, its first phrase centred there. Between a ring outside it
and a ring or disc inside it, Studio sizes the letters to their band, centres them in it, and spaces
the words and separators evenly all the way round. Separators can be any mark (`·`, `•`, `★`). With
`bottom: "upright"`, a phrase on the bottom half turns to read left to right; by default the text
follows the circle all the way round.

## A monogram

The brand's initials, or its first letter, in the logo face, set with `metamorfiles_make_wordmark`:
each letter its own file when they overlap or stack, put together with the `place` layout.

## A stacked sign

The name broken over lines and fitted into a shape, each line a text part of a `stack`.

## Finishes

Any part can take `depth` (a side in a second colour) and an `inline` (a line inside the strokes).
The shapes `star`, `diamond`, `facet` (a cut diamond in two tones), `ring`, `disc` and `rule` need no
drawing.

## Small

A seal's lettering is usually too small to read at 32 px: the check shows it. Its small mark is then
what sits in its middle, or the seal without its lettering.
