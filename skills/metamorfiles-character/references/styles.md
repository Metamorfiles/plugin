# Styles and the prompt

One rendering per character, from the chosen direction and from what the character needs, written
once as a paragraph that is pasted unchanged into every prompt. A figure with limbs and a face holds
at 32 px and in one colour through an outline or a solid silhouette; flat shapes with inner colours
suit a simple, chunky body. Each style traces cleanly because it is flat: no gradient, shading or
texture.

## Some renderings that trace cleanly

**One even line.** The character drawn in a single continuous line of even thickness, round ends,
open shapes, no fill.
> Drawn in one even line with round ends; open shapes, no fill, no second line weight.

Trace colours: the line colour only.

**Solid silhouette with cut-out features.** One flat shape in one colour, its eyes, mouth and other
features cut out as holes through to the ground.
> One solid flat shape in a single colour, with its eyes, mouth and features cut out of it as holes;
> smooth edges, no outline, no inner lines.

Trace colours: the one colour; the holes stay transparent.

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
Doing: <this business's thing, with its own object, and the attitude in the pose and the face>.
Look: <the rendering paragraph>.
Palette: <the brand's colours as hex, each with its job: the body in the product's own colour, the features in the ink>, flat.
Only the character: no letters, words or numbers, no ground line or shadow, no frame, no scenery.
```

- Describe it as a character, never as a logo or an icon: those words bring letters, frames and
  presentation boards.
- Colours are the palette with a job each, never a colour per limb: the model gives them to the
  shapes it draws, and a part in a colour the brand doesn't have is caught at the check.
- Pass two or three of the direction's references that show a figure or the hand, and the name's
  wordmark when the character will sit beside it ("Image 1 is the brand's wordmark: draw only the
  character, matching its weight; do not draw any letters").
- Draw it at `width: 1024, height: 1024` with `trace: { colors: [...] }` listing the style's trace
  colours, and the `folder` it belongs in (the call: step 3 of the skill).
- Follow the image model's own file of the `metamorfiles` skill (`references/images.md` names it).
