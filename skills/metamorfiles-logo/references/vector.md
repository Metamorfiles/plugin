# From drawing to vector

A mark, a character or a logo drawn whole is drawn by the image model and traced by
Studio into a vector in the brand's exact colours. Type set from a font is never traced, and
supporting words are never drawn: they are set from fonts (`wordmark.md`).

## Drawn to be traced

The trace keeps what the drawing gives it, so the drawing is made clean:
- **Alone, on a transparent background.** Studio asks the model for it when `trace` is set. A result
  that comes back on an opaque background can't be traced: draw it again.
- **Flat colour only.** Each area one of the listed colours, with no gradient, shading, texture,
  glow or drop shadow.
- **No line thinner than about a hundredth of the drawing's width.** Thinner lines break up in the
  trace and vanish at small sizes anyway.
- **Large and centred**, with space around it: a detail drawn small is traced small.

## Tracing

`metamorfiles_generate_image { prompt, width: 1024, height: 1024, folder: "brand/process/logo", trace: { colors: [...] } }`
(a logo drawn whole at its lockup's shape, such as 1536 by 1024), listing every colour the drawing uses: the light ones inside it too (an eye's white, a shape cut into
a badge in the ground colour). Without `folder` it lands in `assets/`, where the logo tools can't
read it. Studio traces each area into the nearest of them, stacked so no gap opens between colours,
and what is transparent stays so; the path it returns is the traced .svg. It keeps the drawing in
`.metamorfiles/traces/`, named as `drawing` in the record `<file>.svg.json` beside the SVG.

The result says how much of the drawing the trace kept. A clean drawing keeps all of it. Less than
90% means the drawing isn't what was listed: a colour missing from the list, a soft gradient, a
shadow. Draw it again with the fix in the prompt; never adjust a trace by hand.

## Looking at it

Open the SVG with `metamorfiles_read_file` (`asImage`) at full size: the curves smooth, the corners
where the drawing has corners, no specks. Then run `metamorfiles_check_logo` on it (`checks.md`).
