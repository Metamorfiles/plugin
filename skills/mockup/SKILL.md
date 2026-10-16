---
name: mockup
description: Use to show a brand on its real objects in Metamorfiles Studio, as photography a design publication would feature: a pack, a tin, a bottle, a box, a range, a bag, a sign, a card, a tag, a cup, a garment, merchandise. Each shot is art-directed and made whole by the image model from one prompt and the brand's real files as references (the logo, artwork designed flat, the mascot), then checked and fixed by an edit; placed by Studio on a blank photo only when the model can't make it exact. Use it for a new brand's mockups and whenever the user wants to see their brand, a product or a range on the real thing, even if they only say "a mockup" or "show it on a can".
license: MIT
---

# Mockups

A mockup sells the brand made real. The best ones are art-directed photographs: one clear idea per
shot, light with intent, a backdrop that makes the object sing, and what's printed on it designed as
a system. The image model makes each photograph whole, from one prompt that directs the shot and the
brand's real files given as references; what it prints is checked against those files and fixed by an
edit. Only a print it can't make exact is placed by Studio on a blank photo.

## Checklist

```
- [ ] 1. The shots chosen: one idea each, different from each other; the packs one system
- [ ] 2. What's printed on each object decided: the logo alone, or artwork with it
- [ ] 3. Each photograph made whole, from its prompt and the brand's files; all together
- [ ] 4. Each one checked: the logo, the words, the physics, the photograph
- [ ] 5. Fixed by an edit, or placed when an edit can't; reviewed; then the user sees them
```

### 1. The shots

Read [references/taste.md](references/taste.md) first: what strong mockups do, and the weak ones to
recognise. One idea per photograph, each a different idea and a different part of the system, from the brand's
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

Across the shots, the brand's products are one packaging system, as a real range is: every pack is
the same design, and a shot shows a line or a variant of it (a flavour in its colour, another size,
the pouch beside the cup), never a new pack design. Or show one product, or none, and give the other
shots to what the business uses besides its packs: merch, a sign, a shelf strip, a bag, a placement
(a poster, a bus shelter, a post on a phone).

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
- **The object designed in full** (a can's wrap, a box, a label, a poster, merch): the image model
  designs it in the photograph, the way the best packaging and posters in its category are designed.
  The brand's files are its references, not its limits: its imagery, character, pattern, palette and
  type inspire the design, in variants and adaptations made for this object (a new pose of the
  mascot, the pattern scaled to the box, an illustration in the imagery's style). Only the logo and
  the words are exact.
- **Artwork that must be exact** (a label a printer would get as a file, a precise illustration):
  designed flat first with the `artwork` skill, then given to the model as the object's print.

Then the surface: what it is, its material, how the brand is applied (print, screen-print,
thermal-print, paint, vinyl, sticker, embroidery, engraving, emboss, foil, display, lightbox), how worn
(`new` or `used` for a business starting out; `worn` or `weathered` only when its age or trade is the
point) and its form (flat, curved or soft). You decide them, never the image model. Real words only:
the brand's name, the brief's words and its product names; when the brief gives none, the copywriter
proposes names in the brand's voice (the `copywriting` skill), recorded for the user to confirm (a new brand's brief,
`**Product names (proposed):** …`). Never a weight, price, ingredient, claim or small print.

### 3. Make each photograph

All the shots together, except those that show a pack another shot shows: make the shot that
designs the pack first and, once it passes its check, give it to the others as a reference ("Image
2 is the brand's pack: the same design, only the flavour's colour and name change"). Each
`metamorfiles_generate_image { prompt, width: 1600, height: 2000, references: ["brand/logos/logo.svg", "brand/artwork/can-wrap.png"], folder: "brand/mockups", name: "can-on-peppers", wait: false }`,
collected with `metamorfiles_image_status { id }`. The references are the brand's real files, numbered
by role: image 1 the logo file the object's ground calls for (the reversed one on a dark object), kept
exact; then what the design draws on, as inspiration: the artwork made flat when there is one, the
character sheet, a pattern, one or two of the imagery's anchors. Write the prompt in labelled
sections, in this order:

- **Shot:** "Editorial product photograph", its shape, the idea in one line, the camera and the lens.
- **Set and light:** the backdrop, the light and where the shadows fall.
- **Objects:** what's in frame and how each really sits, opens and holds its contents.
- **The print:** what is on the object and how it's designed: the logo from image 1, where and how
  large (as "Placing it" says); the design around it, drawn from which images and how it adapts them
  (the mascot from image 3 in a new pose, the imagery of image 4 as the label's illustration); how
  it's applied (printed, screen-printed, embroidered, painted, a sticker, a screen).
- **Words:** every word that appears, quoted exactly, and that no other word, number or label does.
- **Keep:** the logo from image 1 exactly as drawn (every letter, shape and colour, its proportions),
  and artwork made flat exactly as designed; the rest is designed freely in the brand's style. No
  other logo, mark, badge, claim, price or small print.

### 4. Check each one

Look at each with `metamorfiles_read_file`, as the photograph a design publication would run:
- **The logo:** against the logo file, letter by letter, accents included, at the size a viewer sees
  it: no letter wrong, missing or added, no shape changed, the right colours.
- **The words:** character by character, against the words the prompt quoted; nothing else written.
- **The physics:** the object as the real one is made and used.
- **The photograph:** the idea reads at a glance, the light is real, the print looks made, not pasted.

### 5. Fix, place when it can't be fixed, and review

- **A logo or word wrong:** an edit of that place only, the image first and the logo file after it:
  `metamorfiles_generate_image { prompt: "Make the logo on the can exactly the logo in image 2", references: ["brand/mockups/can-on-peppers-1a2b3c4d.png", "brand/logos/logo.svg"], edit: true, region: { x: 0.3, y: 0.2, width: 0.4, height: 0.4 }, width: 1600, height: 2000, folder: "brand/mockups" }`.
- **Still wrong after two edits** (long copy, small type, a screen of text): place it. Make the photo
  with the print's surface left blank (the same prompt, the surface "completely blank, fully in frame
  and unobstructed", into `brand/mockups/blanks`), then
  `metamorfiles_make_mockup { name: "can-on-peppers", photo: "brand/mockups/blanks/can-on-peppers-blank-5e6f7a8b.png", surface: { object: "a drinks can", material: "aluminium", method: "print", condition: "new", form: "curved", text: ["Hearth"] }, layers: [{ file: "brand/artwork/can-wrap.png", corners: [[385, 260], [746, 260], [746, 1140], [385, 1140]], cover: true, curve: { wrap: 150, bend: [8, 14] } }], replaces: "brand/mockups/can-on-peppers-1a2b3c4d.png" }`:
  `corners` the surface's top-left, top-right, bottom-right and bottom-left in the photo's pixels,
  `size` and `at` to place a logo in it, `cover` to fill it, `curve` for a can, cup or bottle; Studio
  bakes the files in and the model finishes the photograph.
- **A weak shot:** made again with `replaces`; the one it replaces stays on the board as an earlier
  take the user can pick back.

Then get the review (the `review` skill): in a new brand the `handover` queue holds them, and
anywhere else the page or template they're in. Fix what it sends back. The user sees them last.

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

