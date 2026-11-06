# Vector versions

Flat-colour artwork that is printed, cut or scaled (a T-shirt or tote print, a sticker, cut vinyl, a
poster, a pattern) is traced into an SVG as it's saved, with `trace` on `metamorfiles_generate_image`
or `metamorfiles_import_image`:

`metamorfiles_generate_image { prompt, width: 2048, height: 2048, name: "tee-front", trace: { colors: ["#1f1a17", "#f6f1ea"], inks: 6 } }`

- **`colors`:** the brand colours the piece uses, as DESIGN.md gives them. Each one the drawing has
  lands on its exact value; one it doesn't have takes nothing. List only what the piece is meant
  to use.
- **`inks`:** how many colours the trace has in all. Beyond the brand's, the drawing keeps its own
  colours (a sky, a skin tone, a shade), largest first, up to this number (eight beyond the listed
  ones when left out). Artwork may use any colour
  the composition needs, with the brand's colours as its guide. Ask the prompt for flat
  colour in about that many colours, with no gradient, shading or texture. Leave `colors` out to
  trace an image in its own colours alone (the user's own file, art with no brand tie).
- **`ground`:** an image on a paper or garment colour (an illustration from the library, a file on
  white) names it as `ground`, and that colour is left out of the trace, inside the drawing too, as a
  printer knocks out the garment.
- **Edge to edge:** a full-bleed picture (a poster, a wrap) with no paper to name is traced whole.
- **Kept a raster:** a photograph, a gradient or textured art, printed at its resolution: make it at the largest size the source gives.

The result lists each colour with its share, how much of the drawing the trace keeps and any
gradient, and says what to do about each. The brand's logo is made by the `logo` skill, never traced
from a render of it, and another party's mark is never traced (`metamorfiles_find_mark`).
