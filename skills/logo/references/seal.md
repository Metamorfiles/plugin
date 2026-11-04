# Seals, badges and monograms

For a logo that has to fill a round sticker, a stamp, a lid or an app icon, built by Studio from
real type, shapes and drawn marks.

## A seal or badge

A `badge` lockup, its layers centred on one circle: `ring` and `disc` shapes, text parts set
`around: true`, and whatever sits in the middle (a mark, a monogram, the name):
`metamorfiles_compose_logo { layout: "badge", parts: [{ shape: "ring", color: "#3b2e27" }, { text: "LUMEN SKINCARE · MADE FOR MORNINGS ·", font: "brand/fonts/Fraunces.woff2", color: "#3b2e27", around: true, size: <its share> }, { shape: "ring", color: "#3b2e27", size: <its share> }, { file: "<the mark .svg>", size: <its share> }], output: "brand/process/logo/rising-seal.svg" }`,
each layer's `size` its share of the badge's width, set for this seal. What goes in it, and how
much, is the design's decision; Studio fits and spaces the text in its band.
A phrase on the bottom half follows the ring or turns to read upright (`bottom: "upright"`), as the
brand's register asks.

## A monogram

The brand's initials, or its first letter, in the logo face, set with `metamorfiles_make_wordmark`:
each letter its own file when they overlap or stack, put together with the `place` layout.

## A stacked sign

The name broken over lines and fitted into a shape, each line a text part of a `stack`.

## Finishes

Any part can take `depth` (a side in a second colour, as on a painted or carved sign) and `inline` (a
line inside the strokes). Studio's shapes (`star`, `diamond`, `facet`, `ring`, `disc`, `rule`) need
no drawing: a part `{ shape: "ring", color, size }`.
