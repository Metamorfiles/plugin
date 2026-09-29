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

Always three routes, one of each kind, so the user chooses between real alternatives: the name with
a drawn mark, a logo drawn whole, and one led by type. Most logos are the name set in type with
character plus one second mark (a character, a symbol, a replaced letter, a monogram, a seal), and
the register shapes each route: a playful, casual brand suits a character beside chunky, soft type;
a relaxed premium one suits refined type with one abstract mark or replaced letter; a heritage one
suits type dressed for its period.

1. **The name with a drawn mark.** Set the name first (`metamorfiles_make_wordmark`, below), then
   have the image model draw only the mark, a character, a symbol or an abstract shape, with the
   name's SVG passed as a reference (`references`), saying: "It sits beside the lettering in the
   reference image, so draw it to match that lettering as if one designer drew both: the same visual
   weight, its lines as thick as the letters' stems, the same corner roundness and the same
   character. Draw only the mark, never the letters." Describe it as designed, in the chosen
   palette's flat colours, each colour for what it paints, with no gradient, texture or shadow, and
   save it with `trace`: `{ colors: [every colour it uses] }`, the light ones inside it too (a face's
   white), into `brand/process/logo/`. Studio has it drawn on a transparent background and traces it
   into a clean SVG in those exact colours. A mark drawn without the name beside it comes out a
   different weight, and looks pasted on. The drawn part can also take a letter's place or its
   accent's (a flame for an acute, a coconut for an O): pass it as the wordmark's `part`, and Studio
   spaces it by its own shape. It still reads as that letter or accent, in its place. It comes from
   the brand's idea, never from the category's clichés, and alone it is the small mark.
2. **Drawn whole.** The image model draws the whole logo, lettering and all, and Studio makes it a
   vector: the route for hand lettering no face can set (a flowing script, a bouncy custom word) and
   for a character and a name drawn as one. Write the prompt as a brief, never a font's name: the
   look and feel, the lettering in a designer's words ("a loose, monoline, connected script, like a
   name written quickly with a thick marker"), the layout, the drawn element, each colour for what
   it paints, every word in quotes (an uncommon one spelled letter by letter), and "flat vector
   artwork, like a brand designer's final logo file". A joined script joins letters within a word,
   never across the space between words: say each word is written on its own with a clear space
   after it. Accents keep their shape and their place over their letter. Save it with `trace`:
   `{ colors: [every colour it uses] }`; Studio has it drawn on a transparent background and traces
   each colour in the brand's exact value. Then read every word in it letter by letter, accents
   included, see that the words stand apart, and draw it again when one differs: the user should
   never be the one to find it.
3. **Led by type.** Pure typography, a badge or seal, or a monogram: the name in the logo's face,
   set the way a designer sets a wordmark with `metamorfiles_make_wordmark`: its weight, width and
   italic on the face's axes (the result lists them), tracking (open capitals by 5 to 15%; never a
   joined script, whose letters keep their joins), kerning by the pair where a gap still shows, and
   the face's alternates and OpenType features (an `S.alt`, a swash `R`, `ss01`). One changed letter
   is often the whole idea. Dress it for its period with a composition's `depth`, `inline` and an
   ornament, or build it into a seal (below).

## Putting it together

A route is rarely one file: the name, a mark or character, a tagline, a seal. Put the parts together
with `metamorfiles_compose_logo`:
- `stack`: a character over the name, a tagline under it;
- `row`: a mark beside the name, ornaments around a word;
- `badge`: a seal, with rings, a disc, text set around the circle and a monogram in the middle;
- `place`: letters sitting on a drawn line, a part at a point of another;
- `pattern`: the small mark repeated, turned one way and the other.

Balance the parts, never just fit them: a character or a face carries as much weight as the name
beside it. In a stack a character is about half the name's width; in a row a face is about one and
a half times the capitals' height. Look at the lockup small: the part that disappears first is too
small or too light.

Text parts take the wordmark's controls. Any part can take `depth` and an `inline`, together the
carved or painted letters of an old sign. Ornaments are shapes: a star, a diamond, a `facet` (a cut
diamond in two tones), a ring, a disc, a rule. A hairline script or a face a weight too light takes
`thicken`, in the wordmark and in a text part alike.

## A character

A character that is the brand (a mascot, a face between the words) is drawn once, then shown doing
what the brand does. Draw the first pose as a drawn route (above). Then draw two or three more
together (`wait: false`), each passing the first pose's SVG as image 1 and saying: "Draw exactly the
same character as in image 1: the same shape, proportions, face and style. Only the pose changes:"
and the pose. Save each with the same `trace` colours. Look at them side by side: a pose
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
- **Even spacing:** Studio closes the pairs a face leaves loose at logo size and keeps a script's
  joins, whatever the tracking. Look at the name large all the same: a pair that still looks loose or
  cramped takes `kerning`; a script that should look spaced out is the wrong face, since its letters
  are drawn to join.
- **The tweak shows:** someone who knows the face would see what was changed.
- **Drawn, not clip-art:** a traced drawing has the brand's idea in it, clean curves and no stray
  specks. Draw it again when it could be any business's.
- **Not a cliché:** no category symbol, swoosh, orbit, sparkle or initials in a circle.

## A seal or an icon

A long wordmark can't fill a round sticker, a stamp or an app icon. Add a compact mark only when the
brand's touchpoints need one:
- **An icon** from the part or the drawing alone (the flame, the drop, the character's head), filling
  a rounded square on a brand colour.
- **A seal**: the name stacked inside a simple shape from the brand's world, or set around a circle,
  for stickers, stamps and packaging, never beside the wordmark. Nothing crosses its letters: text
  around a circle reaches the edge of the size you give it, so a ring goes a little larger.

Make them the same way as the route (a seal is a `badge` composition), into `brand/process/logo/`,
and add them to the route's files.

## After the choice

Make the chosen route's final files in `brand/logos/` (`logo.svg`, the reversed and one-colour
versions, the icon or seal): a wordmark with `metamorfiles_make_wordmark` again, a composition with
`metamorfiles_compose_logo`, the other colours with `metamorfiles_make_logo_variant` from its SVG.
Show them, and declare them in DESIGN.md `logos` with their grounds and the source: "set in <face>
as outlines with a drawn part", "drawn by <model> and traced" or "drawn whole by <model> and traced
in the brand's colours", "created and approved by the user on <date>". The clear space is the height
of the name's capital, or a quarter of the mark's height, on every side.
