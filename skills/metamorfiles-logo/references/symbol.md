# Drawn marks

What route 1 draws beside a name set in type: a mark with one idea (a symbol, an abstract shape) or a
part that takes a letter's place. The image model draws it alone; Studio traces it (`vector.md`) and
it is composed with the name (`lockups.md`). A character is designed with the
`metamorfiles-character` skill and then placed the same way. Ornaments are never drawn apart: drawn
separately, they don't belong to the name, so they are part of a logo drawn whole (`drawn.md`).

## Contents

- What makes a mark
- Describe its construction
- The prompt
- A part in a letter's place
- Draw several, keep one

## What makes a mark

- **One idea from the business's own reality**, never the category's symbol: not a cup for a café or
  a tooth for a dentist, but the thing only this business has (its street's arches, its oven's door,
  the way it folds its bags). `references/principles.md` of `metamorfiles-brand-creation`, sections
  3 and 4.
- **A complexity budget.** Four to seven large shapes. One defining feature. One or two colours plus
  the ground. No detail smaller than a twentieth of the mark's height. It reads as a solid black
  silhouette, and at 32 px.
- **One anomaly.** A perfectly symmetrical mark is dead; one deliberate asymmetry (a tilt, a bite, a
  shape that breaks the grid) is what the eye remembers.
- **The same hand as the type.** Its lines as thick as the name's stems, its corners as round as the
  letters' corners, its weight equal to the word's.

## Describe its construction

Say how the drawing is built, in shapes and proportions, never in moods. For each mark, write:

- the **primitives** it is made from and how they meet ("a half-disc on a straight horizon line");
- the **ratios** between them ("the rays half as long as the disc's radius, five of them, evenly
  spread over the top half");
- the **line or fill**: a solid flat shape, shapes cut out of it as holes, or one even line with
  round ends, and its thickness against the lettering ("its lines as thick as a stem of the letters
  in image 1");
- the **corners**: sharp, softly rounded, fully round;
- the **anomaly**: the one thing that breaks the symmetry;
- **what is left out**: no outline around a fill, no shading, no second detail.

Example, for Lumen's rising-sun mark: "A half-disc sitting on a straight horizontal line, the line
extending past the disc by a third of its width on each side. Five short rays above it, each a
rounded bar half the disc's radius long, spread evenly over the top half, the rightmost ray a little
shorter. One flat colour, softly rounded corners, no outline, no other detail."

## The prompt

Write it as a picture, not as a logo. The words "logo" and "icon" invite letters, a frame and a
presentation board, so describe the drawing itself:

```
Draw a flat graphic drawing on a transparent background, centred with space around it.
Subject: <the construction, as above>.
Style: <solid flat shapes | one even line with round ends>, like a clean vector drawing; the same visual weight as the lettering in image 1, its lines as thick as the letters' stems and its corners as round.
Colours: <each hex and what it paints>, flat, nothing else.
Only the drawing: no letters, words or numbers, no frame, no shadow, no gradient or texture.
```

- Pass the name's wordmark SVG as image 1 (`references`) so the weight matches. Draw only the mark.
- Save it with `trace: { colors: [...] }` listing every colour it uses, the light ones inside it too,
  into `brand/process/logo/`.
- Follow the image model's own file of the `metamorfiles` skill (`references/images.md` names it).

## A part in a letter's place

A drawn part can take a letter's place (a donut for an O, a crest inside an O) or its accent's (a
flame for an acute). Never in a script or hand-lettered name: a drawn shape in joined or handwritten letters breaks
their flow, and a mark over a letter (a drop for an i's dot) never sits where the hand would have
put it. A script's route 1 puts its mark beside or under the name instead, or the route is led by
type. Draw it at the letter's proportions ("as wide as it is tall, the size of a
capital O in image 1, its ring as thick as the letters' stems"), then pass it as the wordmark's
`part` with `replaces`. Studio sizes it to the letter's box and spaces it by its own shape; adjust
with `scale`, `dx` and `dy`. It must still read as that letter in the word. Alone, it is the route's
small mark.

## Draw several, keep one

Draw two or three versions of the mark together (`wait: false`), from the same prompt. Keep the one
that holds the idea with the fewest shapes and passes `metamorfiles_check_logo` at 32 px; the others
stay in the folder. When all miss, change one thing in the construction and draw again. Never ask
for the fix by describing the failed drawing.
