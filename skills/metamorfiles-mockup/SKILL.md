---
name: metamorfiles-mockup
description: Use to show a brand on its real objects in Metamorfiles Studio, as packaging photography a design publication would feature: a pack, a tin, a bottle, a box, a range, a bag, a sign, a cup, merchandise. The image model makes each photograph whole, with the brand's exact logo file and its brand board as references, art-directed shot by shot, then it's checked against the logo and fixed by an edit. Use it for a new brand's mockups and whenever the user wants to see their brand, a product or a range on the real thing, even if they only say "a mockup" or "show it on a can".
license: MIT
---

# Mockups

A mockup sells the brand made real. The best ones are art-directed photographs: one clear idea per
shot, light with intent, a backdrop that makes the pack sing, and the packaging itself designed as a
system across a range. Each one here is one photograph the image model makes whole, with the
brand's exact logo and its brand board as references. Studio places nothing on it, so every
photograph is checked against the logo file before anyone sees it.

## Checklist

```
- [ ] 1. The shots chosen: one idea each, different from each other
- [ ] 2. The packaging designed as a system, in words
- [ ] 3. Each prompt written, in order; all made together
- [ ] 4. Each one checked: logo, words, physics, the photograph
- [ ] 5. Fixed: an edit for a detail, a new take for a weak shot
- [ ] 6. Reviewed; then the user sees them
```

### 1. The shots

Pick one idea per photograph, each a different idea and a different part of the system, from what
the brand really makes (its brief, its touchpoints). Never a plain product standing on a plain floor:

| Shot | What it is |
|---|---|
| **The range as a pattern** | many units tiled edge to edge or on a diagonal, cropped by the frame, top-down or straight on, each variant in its own colour; one unit breaks the pattern: standing up, opened, showing what's inside |
| **A playful stack** | packs and lids piled at angles, the lids' tops showing |
| **On its own ingredient** | the pack lying on a deep bed of what's inside it, seen from above |
| **In use** | a cropped hand pouring, opening, holding, carrying an armful; clothing and set in the brand's colours |
| **The family lineup** | the range's different forms in a row on a seamless sweep, a faint reflection |
| **The detail** | a macro of the print, the paper, the emboss or the foil, shallow depth |
| **In its place** | on the shelf, the counter, the fridge door, the street; real light and shadows falling across it |
| **One witty moment** | a single unexpected prop or balance, used once, when the brand's voice allows it |

For each, decide in your notes:
- **The backdrop:** a saturated seamless colour picked from the palette or set against it, or a real
  place. Never flat grey.
- **The light:** hard sun or window light with crisp shadows, or one dramatic studio light (a
  backlight, a single colour-gradient ground). Never flat, even light.
- **The people:** cropped hands, arms and sleeves; a face only when the shot is about a person.
- **The physics:** how this object really sits, opens and holds its contents: a lid off rests beside
  its container or tilts on it, an opened pack shows its real contents inside, a tin lying down shows
  its side and its rim the right way round, a pouch stands on its gusset, nothing floats unless the
  shot is meant to (ingredients falling through the air).

### 2. The packaging, as a system

Design what's printed on the object before the shot, as a packaging designer would, in words the
prompt carries:
- **One bold idea across the range:** a repeated shape, a pattern, a scene in the brand's own
  illustration style, or the wordmark itself, big, wrapping the pack. A colour per variant within the
  palette.
- **The logo from the logo file, big and confident,** where this object carries it.
- **A hierarchy that reads from a shelf:** the brand, then what the product is, then a seal or one
  descriptor. A logo alone on a flat field of colour is not packaging design.
- **The material and finish,** named: uncoated paper, paper tube, kraft, matte laminate, ceramic,
  brushed aluminium, foil, emboss. Textured and matte reads as made; glossy and smooth reads as
  rendered.
- **Real words only:** the brand's name, what the product is in the brief's words, and the product
  names the brief gives. When the brief gives none, a pack still names its product: the copywriter
  proposes names in the brand's voice, a few words each, recorded as proposals for the user to
  confirm (a new brand's brief, `**Product names (proposed):** …`; otherwise said in your reply).
  Never a weight, price, ingredient, claim or garbled small print.

### 3. The prompt

All the shots together, each
`metamorfiles_generate_image { prompt, width: 1600, height: 2000, references: ["brand/logos/logo.svg", "templates/brand-board#board"], folder: "brand/mockups", name: "tin-on-leaves", wait: false }`:
`width` and `height` the shot's shape (1600 × 2000 for 4:5, 2000 × 1600 for 5:4), `folder` the
brand's in-use folder (DESIGN.md `assets`, kind `in-use`). Collect each with
`metamorfiles_image_status { id }`. The references are project paths, in this order, and the prompt
says what each one is:

1. **The logo file** DESIGN.md `logos` names, such as `brand/logos/logo.svg`: "image 1 is the logo".
2. **The brand board,** `templates/brand-board#board`: "image 2 is the brand system".
3. **The imagery anchors or the character's anchor,** when they appear on the object, by their place
   in the folder DESIGN.md lists them in, such as `brand/refs/<anchor>`.

Write it in this order:
1. The shot: "Editorial packaging photograph", its shape, the idea, the camera (from above, straight
   on, a low three-quarter angle).
2. The backdrop and the light, with where the shadows fall.
3. The objects and how they sit, with their physics said plainly.
4. The packaging design: its system, its colours, its material and finish.
5. The logo: "the logo from image 1 exactly as drawn: the same shapes, letters, colours and
   proportions, never redrawn, restyled or retyped", where it sits and how big.
6. The words: only these, exactly (the brand, the product names, one descriptor), and "no other text,
   no small print, no barcode".
7. The brand's look from image 2: its palette by name, its type's character, its imagery's style.

### 4. Check each one

As the photograph a design publication would run, before review:
- **The logo** against its file, shape by shape and letter by letter.
- **The words:** only the allowed ones, every letter right, nothing garbled.
- **The physics:** the object as the real one is made and used; the opening, the lid, the contents,
  how it rests.
- **The photograph:** the idea reads at a glance, the light is real, the packaging looks designed.

### 5. Fix what fails, with the method that can fix it

- **A wrong logo, word or detail** on an otherwise good photograph: an edit of it,
  `metamorfiles_generate_image { prompt, width, height, edit: true, references: ["<mockup>", "brand/logos/logo.svg"], folder: "brand/mockups" }`,
  the mockup first, at its own size, and a prompt that changes only that ("Change only the lid so it
  lies flat beside the tin, open side up; keep everything else exactly as it is").
- **A weak shot, design or object:** a new take, with the art direction changed where it fell short.
- Two rounds at most, then a new take from scratch. An edit or a new take is a new file: remove the
  one it replaces with `metamorfiles_write_file { path: "<mockup>", remove: true }`.

### 6. Review

Get the review (`metamorfiles-review`) of each mockup's frame of the brand board,
`mockup-<file name without extension>` (`mockup-tin-on-leaves-3f2a9c1d`), and fix what it
sends back as above. The user sees them last and asks for any change in their own words.

What strong and weak mockups look like is in [references/taste.md](references/taste.md).
