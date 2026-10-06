# Seals, badges and monograms

For a logo that has to fill a round sticker, a stamp, a cup lid or an app icon, built by Studio from
real type, shapes and drawn marks.

## A seal or badge

A `badge` composition, its layers centred on one circle: `ring` and `disc` shapes, text parts set
`around: true`, and whatever sits in the middle (a mark, a monogram, the name):
`metamorfiles_compose_logo { layout: "badge", parts: [{ shape: "ring", color: "#3b2e27", size: 1 }, { text: "HEARTH BAKERY · EST 2024 ·", font: "brand/fonts/Fraunces.woff2", color: "#3b2e27", around: true, size: 0.94 }, { shape: "ring", color: "#3b2e27", size: 0.7 }, { file: "<the mark .svg>", size: 0.4 }], output: "brand/process/logo/seal.svg" }`.
Sizes are shares of the badge's width. What goes in it, and how much, is the design's decision.

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

Any part can take `depth: { color, amount: 0.08 }` (a side in a second colour) and
`inline: { color, inset: 0.035, width: 0.025 }` (a line inside the strokes), as shares of the part's
height. The shapes `star`, `diamond`, `facet` (a cut diamond in two tones, `color` and `shade`),
`ring`, `disc` and `rule` need no drawing: a part `{ shape: "ring", color, size }`.

## Small

A seal's lettering is usually too small to read at 32 px: the check shows it. Its small mark is then
what sits in its middle, or the seal without its lettering.
