# The logo

Read this for the logo step of `create.md`. A new brand's logo has letterforms or a drawing of its
own: never a stock face set untouched, never the headline face with nothing done to it, and never
geometry drawn from scratch as SVG.

## The logo's own face

A brand usually has a face for its logo, one for headlines and one for text. The logo's face is
chosen for the one word it sets, so it can be louder than anything the brand could set as text: a
brush script, a heavy serif, a condensed or extended grotesque, a stencil (`fonts.md`). Add it with
`metamorfiles_add_font` like the others. In the kit it is named for the logo and never set as text.

## Routes

Two or three routes, of at least two kinds, chosen for the brief:

1. **Drawn.** The image model draws a mark, a symbol, a character or hand lettering. Ask
   `metamorfiles_generate_image` for it in solid black on plain white, flat, no grey, no texture, no
   shadow, the shapes bold enough to read small, and save it with `trace`: `{ ink, paper }` from the
   chosen palette, into `brand/process/logo/`. Studio traces it into a clean SVG: the black in the
   ink, the white it encloses (a face, a counter) in the paper, and the white around it see-through.
   Make the reversed and one-colour versions from that SVG with `metamorfiles_make_logo_variant`,
   into the same folder. Right for a character brand, a symbol-led brand and lettering with a hand
   in it.
2. **A wordmark with one drawn part.** The name in the logo's face with one part that takes a
   letter's place or its accent's: a flame for an acute, a drop for a dot, a sun for an o. Draw the
   part as a small SVG in `brand/process/logo/` (one simple shape with a `viewBox` and a fill), or
   have it drawn and traced as above, and pass it as the wordmark's `part`. It comes from the brand's
   idea, never from the category's clichés.
3. **Pure typography.** The name in the logo's face, set the way a designer sets a wordmark with
   `metamorfiles_make_wordmark`: its weight, width and italic on the face's axes (the result lists
   them), tracking (tighten a script or a bold face by 1 to 3%, open capitals by 5 to 15%), kerning
   by the pair where the face's own leaves a gap, and the face's alternates and OpenType features (an
   `S.alt`, a swash `R`, `ss01`). One changed letter is often the whole idea.

## Putting it together

A route is rarely one file: the name, a mark or character, a tagline, a seal. Put the parts together
with `metamorfiles_compose_logo`:
- `stack`: a character over the name, a tagline under it;
- `row`: a mark beside the name, ornaments around a word;
- `badge`: a seal, with rings, a disc, text set around the circle and a monogram in the middle;
- `place`: letters sitting on a drawn line, a part at a point of another;
- `pattern`: the small mark repeated, turned one way and the other.

Text parts take the wordmark's controls. Any part can take `depth` and an `inline`, together the
carved or painted letters of an old sign. Ornaments are shapes: a star, a diamond, a `facet` (a cut
diamond in two tones), a ring, a disc, a rule. A hairline script or a face a weight too light takes
`thicken`, in the wordmark and in a text part alike.

## A character

A character that is the brand (a mascot, a face between the words) is drawn once, then shown doing
what the brand does. Draw the first pose as a drawn route (above). Then draw two or three more
together (`wait: false`), each passing the first pose's SVG as a reference and saying: "Exactly the
same character as in the reference image: the same shape, proportions, face and style. Only the pose
changes:" and the pose. Save each with the same `trace` colours. Look at them side by side: a pose
that changed the character is drawn again. The poses are the route's other files; the first pose is
its small mark.

## Each route's files

The option's first file is the logo in colour on the paper it's made for; after it, reversed on the
dark colour and in one colour on white (a part in the letters' colour), every file with its `ground`.
Mark the route's small mark (the character, the replaced letter, the monogram, the badge) with
`small: true`: the profile picture and the small sizes use it, since a whole lockup can't be read at
16 px. Studio shows each route large, in use and at the small sizes it will meet, all at the same
weight whatever their shape, so leave the presenting to the frame.

## Checks before you show it

Look at each file with `metamorfiles_read_file` (`asImage` for an SVG) and at the logo's frame with
`metamorfiles_render_preview`, never through a script of your own.

- **Small:** it still reads at 32 px, and the part or the drawing still reads as itself at 16. A
  detail that turns into a blob needs a simpler shape or a bigger one.
- **One colour:** it is still what it is in one colour.
- **The tweak shows:** someone who knows the face would see what was changed.
- **Drawn, not clip-art:** a traced drawing has the brand's idea in it, clean curves and no stray
  specks. Draw it again when it could be any business's.
- **Not a cliché:** no category symbol, swoosh, orbit, sparkle or initials in a circle.

## A seal or an icon

A long wordmark can't fill a round sticker, a stamp or an app icon. Add a compact mark only when the
brand's touchpoints need one:
- **An icon** from the part or the drawing alone (the flame, the drop, the character's head), filling
  a rounded square on a brand colour.
- **A seal**: the name stacked inside a simple shape from the brand's world, for stickers, stamps and
  packaging only, never beside the wordmark.

Make them the same way as the route (a seal is a `badge` composition), into `brand/process/logo/`,
and add them to the route's files.

## After the choice

Make the chosen route's final files in `brand/logos/` (`logo.svg`, the reversed and one-colour
versions, the icon or seal): a wordmark with `metamorfiles_make_wordmark` again, a composition with
`metamorfiles_compose_logo`, the other colours with `metamorfiles_make_logo_variant` from its SVG. Show them, and declare them in DESIGN.md
`logos` with their grounds and the source: "set in <face> as outlines with a drawn part" or "drawn
by <model> and traced", "created and approved by the user on <date>". The clear space is the height
of the name's capital, or a quarter of the mark's height, on every side.
