# Seals, badges, monograms and icons

The compact route: a logo that fills a round sticker, a stamp, a cup lid or an app icon, where a long
name can't. It is built by Studio from real type, shapes and one drawn mark, never drawn whole.

## A seal or badge

A `badge` composition with `metamorfiles_compose_logo`:
- a `ring` or a `disc` as its edge, in the brand's colour;
- the name, and a second line if the brief gives one (the place, a year the user gave, the trade),
  as text parts set `around: true`, reading clockwise from the top;
- one element in the middle: the mark, the monogram or the name stacked short, never two of them
  (a letter and an ornament under it compete for the centre);
- small ornaments between the words where the circle's text meets: a `star`, a `diamond` or a
  `facet`.

Between a ring outside it and a ring or disc inside it, text around the circle is centred in their
band by Studio, as far from each; give the rings the sizes you want and the text a size between
them. Nothing crosses the letters. Keep it to two rings at most, and one colour plus the ground,
so it survives a stamp and a one-colour print. Never invent a founding year or a claim.

## A monogram

The brand's initials, or its first letter, in the logo face, set with `metamorfiles_make_wordmark`:
each letter its own file when they overlap or stack, put together with the `place` layout. One idea
joins them: a shared stroke, a letter inside another's counter, a cut where they cross. It sits in
the seal or alone as the icon.

## A stacked sign

The name broken over two or three lines and fitted into a simple shape from the brand's world (a
door's arch, a lozenge, a ticket), with the lines aligned so the block reads as one object. Each line
is a text part of a `stack`; set each line's size so the block's edges are even.

## The carved or painted look

Any part can take `depth` (its side, in a darker colour, down and to the right) and an `inline` (a
line inside the strokes, set in from the edge). Together they give the letters of an old carved or
painted sign. The `facet` shape is a cut diamond in two tones for its ornament. Use one finish per
logo, and look at it at 32 px: an inline disappears first, so the small version leaves it out.

## An icon

The icon is the route's small mark alone (the drawing, the character's head, the monogram, the
seal), as its own file. Studio shows it as a profile picture and at the small sizes on the brand
board, so leave the square or circle around it to the board. When it sits on a brand colour, make it
in the colour that reads there with `metamorfiles_make_logo_variant`, and check it at 16 and 32 px.

## Where they go

Save them in `brand/process/logo/` beside the route's other files, marked `small: true` when they are
the route's small mark. A seal is used on stickers, stamps and packaging, never beside the wordmark
it repeats.
