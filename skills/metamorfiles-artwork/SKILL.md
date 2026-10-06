---
name: metamorfiles-artwork
description: Use to design print and packaging artwork in Metamorfiles Studio to print for real, such as a can's wrap, a box's face, a bottle's label, a bag, a sticker, a poster or a menu. The image model paints the artwork's picture (illustration, pattern or scene) in the brand's own style and Studio sets the real logo and type on it exactly, so the result looks designed and printed, not drawn in code. Use it whenever an object's printed face is designed in full, even if the user only says "a label" or "the packaging".
license: MIT
---

# Print and packaging artwork

Real packaging is a picture and a hierarchy working together: an illustration, a pattern or a
photograph that fills the face, and the brand, the product and its words set on it with care. Built
from flat boxes of colour and type alone, it looks made by code. So the work is split by what each
does best: the image model paints the picture, in the brand's own style, and Studio sets the logo
and every word exactly, from the real files and fonts. Neither does the other's job: the model never
draws a letter or the logo, and the picture is never a CSS gradient.

## Checklist

```
- [ ] 1. The piece planned: its face, its zones, its hierarchy, its picture
- [ ] 2. The picture painted by the image model, with calm room for the type
- [ ] 3. Composed: the picture full bleed, the real logo and type on it
- [ ] 4. Checked flat, as a printed piece, then reviewed
- [ ] 5. A template to print
```

### 1. Plan the piece

Before any image, decide, as a packaging designer would, in your notes:

- **The face.** Its real proportions: a can's full wrap, a box's dieline, a label's shape, at its
  printed size.
- **The category's codes.** How packaging in this category looks on a shelf, and which code the
  brand keeps or breaks (the brief's research, `references/research.md` of
  `metamorfiles-brand-creation`). Craft drinks wear full illustration; skincare leans on type and
  space; snacks on bold colour and appetite. The picture's kind follows: an illustration, a repeat
  pattern, a scene, or a photograph.
- **The hierarchy,** read from a shelf or across a room: the brand, then what the product is (its
  name, flavour or variant), then one descriptor line, then the small print. One hero.
- **The zones.** Where the logo and the words sit, and where the picture has the stage. Write them
  as plain positions ("the top third calm, the otter low on the right, a clear band under the logo").

### 2. The picture

Generate it with
`metamorfiles_generate_image { prompt, width: 2400, height: 1000, references: ["templates/brand-board#refs"], name: "can-wrap" }`.
It saves into `assets/` (or a brand folder given as `folder`), and the template uses the path it
returned as the image's value.

- **At the face's proportions,** `width` and `height` in pixels at the face's ratio, the long side
  at most 4096, so nothing is stretched or cropped to fit.
- **In the brand's imagery style,** with the library's sheet as the reference (its frame on the brand
  board, `templates/brand-board#refs`, or the character's folder frame when it appears) and the
  Imagery section's words, so it belongs with the rest of the brand. A character keeps its body
  line in the prompt (`metamorfiles-character`).
- **No words, letters, numbers, logos or labels in it,** asked for plainly: they are set in step 3.
- **The zones in the prompt:** where it stays calm and open for the logo and the type, and where its
  subject sits. A picture that fills every corner leaves the type nowhere to go.
- **Its colours from the palette,** named as the brand names them.

Look at it before going on, with the image-model mistakes in mind (`references/images.md` of
`metamorfiles`): a wrong body, an extra part, garbled marks, a gradient the brand rules out. Make
it again rather than covering a flaw with type.

### 3. Compose

Write the artwork as the template's `index.html`, with
`metamorfiles_write_file { path: "templates/<id>/index.html", content }`, following the contract
of `metamorfiles-template`, its format the piece's size in mm (step 5): the picture full bleed as
the face's background, and on it the brand's real logo file and its words in the brand's own fonts
and tokens (`var(--brand-…)`, files from `../../brand/…`).

- The logo at the size this object carries it, in the version made for the ground it sits on.
- Every word real: the brand's voice and what the brief says, never an invented price, figure,
  ingredient or claim.
- Type sits on the calm zones the picture left. When it doesn't read there, change the picture's
  zones and paint it again, rather than laying a box under the words.
- Margins and a bleed edge like a real print: nothing that matters near the edge.

### 4. Check it, flat

Render it with `metamorfiles_render_preview { item: "templates/<id>" }` and look at it flat, as the
printed piece, before it goes anywhere: the hierarchy from a shelf, every word, the logo intact, the
picture on brand. Then get the review (`metamorfiles-review`) of `templates/<id>` as a printed
piece.

### 5. A template to print

A template (`metamorfiles-template`) whose format is the piece's size in mm with its bleed, the
composition in its `index.html`, exported as PDF. To show it on the object, a mockup of it is made
with `metamorfiles-mockup`, with the flat artwork as a reference.

What strong and weak artwork looks like is in [references/taste.md](references/taste.md).
