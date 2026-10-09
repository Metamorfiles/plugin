---
name: metamorfiles-mockup
description: Use to show a brand on its real objects in Metamorfiles Studio, as photography a design publication would feature: a pack, a tin, a bottle, a box, a range, a bag, a sign, a card, a tag, a cup, a garment, merchandise. Each shot is art-directed, made as a blank photo, and the brand's real files (the logo, or artwork designed flat) are placed on it exactly by Studio and finished into a photograph by the image model. Use it for a new brand's mockups and whenever the user wants to see their brand, a product or a range on the real thing, even if they only say "a mockup" or "show it on a can".
license: MIT
---

# Mockups

A mockup sells the brand made real. The best ones are art-directed photographs: one clear idea per
shot, light with intent, a backdrop that makes the object sing, and what's printed on it designed as
a system. What must match a file exactly (the logo, a label, its words) is never drawn by the image
model: the photo is made blank, Studio places the real files on it in perspective and bakes them in,
and the model only finishes the result into a photograph.

## Checklist

```
- [ ] 1. The shots chosen: one idea each, different from each other
- [ ] 2. What's printed on each object decided: the logo alone, or artwork with it
- [ ] 3. Each blank photo made; all together
- [ ] 4. The brand placed on each, then finished
- [ ] 5. Each one checked: placement, words, physics, the photograph
- [ ] 6. Fixed; reviewed; then the user sees them
```

### 1. The shots

One idea per photograph, each a different idea and a different part of the system, from the brand's
own world: what it really makes (its brief, its touchpoints) and the moments and places it lives in.
The kinds of shot below are cameras and sets to build an idea with, never the idea itself. Never a
plain product standing on a plain floor:

| Shot | What it is |
|---|---|
| **The range as a pattern** | many units tiled edge to edge or on a diagonal, cropped by the frame, top-down or straight on, each variant in its own colour |
| **A playful stack** | packs and lids piled at angles, the lids' tops showing |
| **On its own ingredient** | the pack lying on a deep bed of what's inside it, seen from above |
| **In use** | a cropped hand pouring, opening, holding, carrying an armful; clothing and set in the brand's colours |
| **The family lineup** | the range's different forms in a row on a seamless sweep, a faint reflection |
| **The detail** | a macro of the print, the paper, the emboss or the foil, shallow depth |
| **In its place** | on the shelf, the counter, the door, the street; real light and shadows falling across it |
| **One witty moment** | a single unexpected prop or balance, used once, when the brand's voice allows it |

For each, decide in your notes:
- **The backdrop:** a saturated seamless colour picked from the palette or set against it, or a real
  place. Never flat grey.
- **The light:** hard sun or window light with crisp shadows, or one dramatic studio light. Never
  flat, even light.
- **The people:** cropped hands, arms and sleeves; a face only when the shot is about a person.
- **The idea:** one line, the shot's composition: what it shows, from where, what leads.
- **The physics:** how this object really sits, opens and holds its contents: a lid off rests beside
  its container, an opened pack shows its real contents, a card's corners are as the brand cuts them,
  nothing floats unless the shot is meant to.

### 2. What's printed on each object

Decide it per object, from the shot's goal, its composition and the surface, as the business would
really make it:
- **The logo alone** (a sign, a tag, a card, a sticker, an embroidered chest): the logo file the
  ground calls for, placed the way a printer or signwriter would put it ("Placing it", below).
- **Artwork with the logo** (a can's wrap, a box's face, a bottle's label, merch with an
  illustration, a pattern with the logo): designed flat first with `metamorfiles-artwork`, where the
  image model paints the picture and Studio sets the real logo and words on it, then exported and
  placed as the object's whole printed face (`cover`).
- **Html artwork** for a surface that carries a few words and the logo (a card's back, a receipt):
  plain markup with inline styles in the brand's tokens (`var(--brand-…)`) and files (`../../brand/…`),
  at the surface's proportions.

Then the surface: what it is, its material, how the brand is applied (print, screen-print,
thermal-print, paint, vinyl, sticker, embroidery, engraving, emboss, foil, display, lightbox), how worn
(`new` or `used` for a business starting out; `worn` or `weathered` only when its age or trade is the
point) and its form (flat, curved or soft). You decide them, never the image model. Real words only:
the brand's name, the brief's words and its product names; when the brief gives none, the copywriter
proposes names in the brand's voice, recorded for the user to confirm (a new brand's brief,
`**Product names (proposed):** …`). Never a weight, price, ingredient, claim or small print.

### 3. The blank photo

All the shots together, each
`metamorfiles_generate_image { prompt, width: 1600, height: 2000, references: ["templates/brand-board#board"], folder: "brand/mockups/blanks", name: "card-at-door", wait: false }`,
collected with `metamorfiles_image_status { id }`. Write the prompt in this order: the shot
("Editorial photograph", its shape, the idea, the camera); the backdrop and the light, with where the
shadows fall; the objects and how they sit, physics said plainly; then the surface where the brand
goes, **completely blank, fully in frame and unobstructed**: an object whose print covers it (a can,
a box, a label) in its base material (a plain aluminium can, a white box), one that carries only a
mark in its own colour and material (a sign as a board painted its colour, an apron in its cloth).
The brand board gives the palette and the look; no logo goes in as a reference, since none is
drawn. `blanks/` keeps the blank photos off the board.

### 4. Place and finish

Look at each blank photo with `metamorfiles_read_file`, then
`metamorfiles_make_mockup { name: "membership-card", photo: "brand/mockups/blanks/card-at-door-1a2b3c4d.png", surface: { object: "a membership card held at the door", material: "matte card", method: "print", condition: "new", form: "flat", text: ["Hearth Bakery"] }, layers: [{ file: "brand/logos/logo.svg", corners: [[412, 610], [980, 598], [990, 940], [420, 955]], size: 0.6, at: [0.5, 0.35] }], wait: false }`:
- `corners`: the whole surface, top-left, top-right, bottom-right, bottom-left, in the photo's pixels;
  `size` and `at` place the artwork in it as a real one sits, at its own proportions, never stretched.
  A `cover` layer fills its surface instead.
- `text`: the words a file layer shows (a logo's name); an html layer's words are read from it.
- The result shows the placement over the photo, the surface dashed and the artwork solid, each with
  its centre line: check both against the object's own edges and centre first.
- Studio bakes the artwork into the photo's light, then the image model finishes it, checked against
  the bake (the artwork in place, no mark added, the photo around it unchanged), once more when it
  fails, the exact bake kept after two failures. The mockup is saved in the in-use folder.

### 5. Check each one

As the photograph a design publication would run, before review:
- **The placement:** where the real object carries the brand, at the size a customer sees it.
- **The words:** read the enlarged crop the result shows, character by character, accents included,
  against the words it lists.
- **The physics:** the object as the real one is made and used.
- **The photograph:** the idea reads at a glance, the light is real, the print looks made, not placed.

### 6. Fix and review

- **A word or mark the finish changed:** `metamorfiles_make_mockup` again with `replaces` for a new
  finish, or `finish: false` to keep the exact bake.
- **A placement off:** the same call with its corners, `size` or `at` changed, and `replaces`.
- **A weak shot or object:** a new blank photo, then the brand placed on it again, with `replaces`.
  The one it replaces stays on the board as an earlier take the user can pick back.

Then get the review (`metamorfiles-review`) of the mockups' board, the brand board's frame named for
their folder (`mockups`), and fix what it sends back. The user sees them last.

## Placing it

Mockups look made when the brand sits on the object the way a printer or signwriter would put it:

- **A garment or apron** carries a small mark on the chest, high and to one side; a back print is the
  one place a large one goes.
- **A box, bag or lid** holds the logo with generous room around it; a pattern or a flood of colour
  is what covers it edge to edge.
- **A sticker, badge, tag or label** fills its die-cut with a border of the material showing.
- **A sign or fascia** sets the name large but with breathing room to its frame.
- **A cup, can or bottle** keeps the logo within the face you see.
- **Small type stays small,** as on the real thing: a line under a logo, an address.

## Made whole

A shot where nothing printed has to read exactly (the brand's colours in a busy place, an object
seen far off) may be one photograph the image model makes whole:
`metamorfiles_generate_image { prompt, width: 1600, height: 2000, references: ["brand/logos/logo.svg", "templates/brand-board#board"], folder: "brand/mockups", name: "market-stall" }`,
the prompt saying "the logo from image 1 exactly as drawn" where it shows, then checked against the
logo file and fixed by an edit of that region (`edit: true`, `region`).

What strong and weak mockups look like is in [references/taste.md](references/taste.md).
