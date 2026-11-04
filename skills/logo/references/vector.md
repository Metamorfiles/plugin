# From drawing to vector

A mark, a character or a logo drawn whole is drawn by the image model and traced by Studio into a
vector in the brand's exact colours. Type set from a font is never traced, and supporting words are
never drawn: they are set from fonts (`wordmark.md`).

## Drawn to be traced

The trace keeps what the drawing gives it, so the drawing is made clean:
- **Alone, on a transparent background.** Studio asks the model for it when `trace` is set. A model
  that can't draw one (its `transparent` flag in `metamorfiles_image_models` is false), or a result
  Studio reports as opaque, gets "on a plain flat field of <the paper's hex>" in the prompt in place
  of the transparent background, and `ground: "<the paper's hex>"` in the call, so the trace leaves
  the field out.
- **Flat colour only.** Each area a flat colour, with no gradient, shading, texture, glow or drop
  shadow. The brand's colours and any others the design needs: every flat area is kept as drawn.
- **No hairlines.** A line too thin breaks up in the trace.
- **Large and centred**, with space around it: a detail drawn small is traced small.

## Tracing

`metamorfiles_generate_image { prompt, width: 1024, height: 1024, folder: "brand/process/logo", trace: { colors: [...] } }`
(a logo drawn whole at its lockup's shape, such as 1536 by 1024), listing the brand colours the
drawing uses, the light ones inside it too (an eye's white, a shape cut into a badge in the ground
colour). Always pass `folder`: without it the file lands in `assets/`, where the logo tools can't
read it.

## The trace's result

The result lists each colour with its share and how much of the drawing the trace keeps, and names
any colour the drawing has beyond the ones listed. Act on those colours against the route's own
palette (the brief's and the chosen direction's colours, and any other the prompt asked for), never
by looking at the drawing:
- **A colour of that palette the trace left out:** traced again from the drawing, which Studio keeps
  in `.metamorfiles/traces/` (named as `drawing` in the record `<file>.svg.json`), with it listed or
  with more `inks`:
  `metamorfiles_import_image { path: "<the drawing>", folder: "brand/process/logo", trace: { colors: [...], inks: 12 } }`.
- **Any other colour, a shade of a palette colour, or a gradient the result names:** the model added
  it where flat colour was meant, so the drawing is made again, the prompt asking for flat colour.
- **A trace the result says strays from its drawing:** drawn again with the fix the result names in
  the prompt, never adjusted by hand.

These are among the failures `SKILL.md`, step 5, lists as reasons to make a piece again before the
review. Then run `metamorfiles_check_logo` on it (`checks.md`).
