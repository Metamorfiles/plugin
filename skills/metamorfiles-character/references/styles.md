# Styles and the prompt

One rendering per character, chosen for the brand and written once as a paragraph that is pasted
unchanged into every prompt. Each style traces cleanly because it is flat: no gradient, shading or
texture.

## The four styles

**One even line.** The character drawn in a single continuous line of even thickness, round ends,
open shapes, no fill. Friendly, quick, handmade; suits bakeries, cafés, small shops.
> Drawn in one thin, even line with round ends, like a quick marker doodle, the line about a
> twelfth of the head's width and as thick as the stems of the letters in image 1; open shapes, no
> fill, no second line weight.

Trace colours: the line colour only.

**Solid silhouette with cut-out features.** One flat shape in one colour, its eyes, mouth and other
features cut out as holes through to the ground. Bold, loud, reads from far away; suits late-night
food, streetwear, sport.
> One solid flat shape in a single colour, with its eyes, mouth and features cut out of it as holes;
> smooth edges, no outline, no inner lines.

Trace colours: the one colour; the holes stay transparent.

**Flat shapes with inner colours.** Two or three flat colours, each shape one colour, the features in
the darkest; no outlines. Warm, polished, versatile; suits most brands.
> Flat shapes in two or three colours, each area a single flat colour, the features in the darkest
> one; no outlines, no shading, no highlights.

Trace colours: every colour, the light ones inside it too.

**Thick outline with flat fills.** A heavy even outline in the darkest colour around flat fills, like
a sticker or a cartoon. Playful, retro; suits kids, games, snacks.
> A heavy, even outline in <ink> around flat fills of <colours>, the outline about a tenth of the
> head's width, round joins; no inner shading.

Trace colours: the outline colour and every fill.

A style anchor can sharpen the look, one at most: "in the manner of a 1930s rubber-hose cartoon", "a
mid-century flat illustration", "a Japanese mascot, round and soft". Never name a living artist or a
brand's mascot.

## The prompt

```
Draw one character on a transparent background, alone, centred, standing, with space around it.
Who: <the bible's one-line identity>.
Construction: <the construction, as written>.
Style: <the style paragraph>.
Colours: <each hex and what it paints>, flat, nothing else.
Only the character: no letters, words or numbers, no ground line or shadow, no frame, no scenery, no gradient or texture.
```

- Describe it as a character, never as a logo or an icon: those words bring letters, frames and
  presentation boards.
- Pass the name's wordmark as image 1 when it will sit beside it, so its weight matches; say it draws
  only the character.
- Save it with `trace: { colors: [...] }` listing the style's trace colours.
- Follow the image model's own file of the `metamorfiles` skill (`references/images.md` names it).
