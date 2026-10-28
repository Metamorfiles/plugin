# From drawing to vector

A mark, a character or a logo drawn whole is drawn by the image model and traced by
Studio into a vector in the brand's exact colours. Type set from a font is never traced, and
supporting words are never drawn: they are set from fonts (`wordmark.md`).

## Drawn to be traced

The trace keeps what the drawing gives it, so the drawing is made clean:
- **Alone, on a transparent background.** Studio asks the model for it when `trace` is set. A result
  that comes back on an opaque background can't be traced: draw it again.
- **Flat colour only.** Each area a flat colour, with no gradient, shading, texture, glow or drop
  shadow. The brand's colours and any others the design needs (a gem's facets in six greens): every
  flat area is kept as drawn.
- **No line thinner than about a hundredth of the drawing's width.** Thinner lines break up in the
  trace.
- **Large and centred**, with space around it: a detail drawn small is traced small.

## Tracing

`metamorfiles_generate_image { prompt, width: 1024, height: 1024, folder: "brand/process/logo", trace: { colors: [...] } }`
(a logo drawn whole at its lockup's shape, such as 1536 by 1024), listing the brand colours the
drawing uses, the light ones inside it too (an eye's white, a shape cut into a badge in the ground
colour). Always pass `folder`: without it the file lands in `assets/`, where the logo tools can't
read it. How the trace works, what its result reports and what to do about it: `references/vector.md`
of the `studio` skill. The drawing is kept in `.metamorfiles/traces/`, named as `drawing` in the
record `<file>.svg.json`: a colour of the design the trace missed is traced again from it with more
`inks`, `metamorfiles_import_image { path: "<the drawing>", folder: "brand/process/logo", trace: { colors: [...], inks: 12 } }`.
A trace that falls short otherwise is drawn again with the fix in the prompt, never adjusted by hand.

## Looking at it

Open the SVG with `metamorfiles_read_file` (`asImage`) at full size: the curves smooth, the corners
where the drawing has corners, no specks. Then run `metamorfiles_check_logo` on it (`checks.md`).
