# Styles and the prompt

One rendering per character, from the chosen direction and from what the character needs, written
once as a paragraph that is pasted unchanged into every prompt. A figure with limbs and a face holds
at 32 px through an outline, and goes to one colour as line art; flat shapes with inner colours suit
a simple, chunky body. Each style traces cleanly because it is flat: no gradient, shading or
texture.

## Some renderings that trace cleanly

**One even line.** The character drawn in a single continuous line of even thickness, round ends,
open shapes, no fill.
> Drawn in one even line with round ends; open shapes, no fill, no second line weight.

Trace colours: the line colour only.

**Solid silhouette.** One flat shape in one colour, for a faceless figure that reads by its outline
alone (a running fox, a leaping fish). A face cut into a silhouette as holes reads as a mask, so a
character with a face takes another style.
> One solid flat shape in a single colour, its pose readable from the outline alone; smooth edges,
> no inner lines.

Trace colours: the one colour.

**Flat shapes with inner colours.** Two or three flat colours, each shape one colour, the features in
the darkest; no outlines.
> Flat shapes in two or three colours, each area a single flat colour, the features in the darkest
> one; no outlines, no shading, no highlights.

Trace colours: every colour, the light ones inside it too.

**Thick outline with flat fills.** A heavy even outline in the darkest colour around flat fills, like
a sticker or a cartoon.
> A heavy, even outline in <ink> around flat fills of <colours>, round joins; no inner shading.

Trace colours: the outline colour and every fill.

Others are possible when the direction asks for them. A style anchor can sharpen the look, one at most: "in the manner of a 1930s rubber-hose cartoon", "a
mid-century flat illustration", "a Japanese mascot, round and soft". Never name a living artist or a
brand's mascot.

## The prompt

```
Draw one character on a transparent background, alone, centred, with space around it.
Who: <the brief: who it is, what it's like, the one thing that makes it itself, in two or three sentences>.
Face: <its expression in three to five concrete terms from its attitude: the lids, the brows, where it looks, the mouth, one thing uneven>.
Doing: <one gesture with this business's own object, smaller than the character; no scene around it>.
Look: <the rendering paragraph>.
Palette: <the brand's colours as hex, each with its job: the body in the product's own colour, the features in the ink>, flat.
Only the character: no letters, words or numbers, no ground line or shadow, no frame, no scenery.
```

- Describe it as a character, never as a logo or an icon: those words bring letters, frames and
  presentation boards.
- Colours are the palette with a job each, never a colour per limb: the model gives them to the
  shapes it draws, and a part in a colour the brand doesn't have is caught at the check.
- Each candidate has its own Who, Face and Doing (`design.md`, "Three ideas for one character");
  the Look and the Palette are the same in all three, and so is what it is and its build.
- A reference goes in only when it shows a figure drawn in the chosen look ("Image 1 is a style
  reference: take its drawing hand and line weight; never copy its character, pose or layout").
  Never the wordmark while the character is explored: the first image is the one the model keeps
  most, and a typeface isn't a drawing hand. With no such reference, the Look paragraph carries the
  hand alone. Once kept for a logo, it is fitted to the set word (`references/symbol.md` of
  `metamorfiles-logo`, "Fit it to the word").
- Draw it at `width: 1024, height: 1024` with `trace: { colors: [...] }` listing the style's trace
  colours, and the `folder` it belongs in (the call: step 3 of the skill). A model that can't draw
  on a transparent background (its own file says so) gets "on a plain flat field of <the paper's
  hex>" in place of the first line's transparent background, and `ground: "<the paper's hex>"` in
  the call, so the trace leaves the field out.
- Follow the image model's own file of the `metamorfiles` skill (`references/images.md` names it).
