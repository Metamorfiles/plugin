---
name: mockup
description: Shows a brand on its real objects as art-directed product photography in Metamorfiles Studio: a pack, tin, bottle, box, range, bag, sign, card, tag, cup, garment or merchandise. Use for a new brand's mockups and whenever the user wants to see their brand, a product or a range on the real thing, even if they only say "a mockup" or "show it on a can".
license: MIT
---

# Mockups

A mockup is an art-directed photograph: one clear idea per shot, light with intent, the print
designed as a system.

## Checklist

```
- [ ] 1. The shots chosen: one idea each, different from each other; the packs one system
- [ ] 2. What's printed on each object decided: the logo alone, designed in place, a flat print or exact artwork
- [ ] 3. Each photograph made whole, from its prompt and the brand's files; all together
- [ ] 4. Each one checked: the logo, the words, the physics, the scene
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
- **The physics:** how this object really sits and opens, said in the Subject (step 3).

### 2. What's printed on each object

Decide it per object, from the shot's goal, its composition and the surface, as the business would
really make it:
- **The logo alone** (a tag, a business card's face, an embroidered chest, a fascia with only the
  name): nothing but the logo file the ground calls for, placed the way a printer or signwriter would
  put it ("Placing it", below).
- **Designed in place** (a can's wrap, a box, a label, merch): design the face first, as a packaging
  designer would: one graphic idea from the brand that carries the whole face (the mark at a scale
  the edges crop, a colour per variant, the name set huge, the pattern as the material), said in one
  line, and what reads first, second and third. Every word and part sits as that designer would set
  it, aligned to the others, with a margin all round and room around what leads. The image model
  then draws the face in the photograph from the idea, the way the best packaging in its category
  is designed: give it the idea, what leads and the materials, never a layout measured out part by
  part, which it copies as given. The brand's files are its references, not its limits: its imagery,
  character, pattern, palette and type inspire the design, in variants and adaptations made for this
  object. Only the logo and the words are exact.
- **A flat print** (a sticker with art, a poster, a menu, a window vinyl with words, a sign with more
  than the name): two steps. First the image model designs it flat, the whole print straight on and filling the image, see-through
  around a die-cut, from the logo and the brand's files, as the best prints in its category are
  designed:
  `metamorfiles_generate_image { prompt, references: ["brand/logos/logo.svg", "brand/refs/serum-morning.jpg"], width: 1600, height: 1600, transparent: true, folder: "brand/mockups/artwork", name: "mirror-sticker" }`.
  Check its logo and words, then photograph it from that file (step 3). A flat print drawn in the
  photograph at once comes out as a graphic laid over it.
- **Exact artwork** (a label a printer would get as a file, a precise illustration):
  designed flat first with the `artwork` skill, then given to the model as the object's print.

Then the surface: what it is, its material, how the brand is applied (print, screen-print,
thermal-print, paint, vinyl, sticker, embroidery, engraving, emboss, foil, display, lightbox), how worn
(`new` or `used` for a business starting out; `worn` or `weathered` only when its age or trade is the
point) and its form (flat, curved or soft). You decide them, never the image model. Real words only:
the brand's name, the brief's words and its product names; when the brief gives none, names are
proposed as the `copywriting` skill's Names says. Never a weight, price, ingredient, claim or small
print.

### 3. Make each photograph

All the shots together, except those that show a pack another shot shows: make the shot that
designs the pack first and, once it passes its check, give it to the others as a reference ("Image
2 is the brand's pack: the same design, only the flavour's colour and name change"). Each
`metamorfiles_generate_image { prompt, width: 1600, height: 2000, references: ["brand/logos/logo.svg", "brand/artwork/can-wrap.png"], folder: "brand/mockups", name: "can-on-peppers", wait: false }`,
collected with `metamorfiles_image_status { id }`. The references are the brand's real files, numbered
by role: image 1 the logo file the object's ground calls for (the reversed one on a dark object), its
letters and parts kept; then what the design draws on, as inspiration: the artwork made flat when there is one, the
character sheet, a pattern, one or two of the imagery's anchors. Write the prompt in labelled
sections, in this order. Scene and Subject together stay near 100 words; The print, Words and Keep
add what the object needs, so a whole mockup prompt runs about 300 to 450 words.

- **Scene:** the frame as a photographer sets it up: "Editorial product photograph", its shape and lens;
  what leads and where it sits (a third, a corner, the centre), its scale and crop; what else is in
  frame and where; what stays empty. Then the set, the light and where its shadows fall. Weather or
  wear (rain, dust, steam, scuffs), when the shot has it, is said once here and stays light: it never
  covers the print.
- **Subject:** the one moment the shot catches, in one line, and every object as it is at that
  instant: a lid being lifted is still on its box, one lifted off rests beside it; a pack being opened
  is still closed, an open one shows its real contents. A part that hangs, runs or ties says what it
  is attached to and where it goes (a tag on the bag's handle, a strap from the bag to the shoulder).
  Hands as that Subject says: cropped, one action, never which finger does what.
- **The print:** what is on the object and how it's designed: the face's idea and what reads first;
  the logo from image 1, where and how
  large (as "Placing it" says); the design around it, drawn from which images and how it adapts them
  (the mascot from image 3 in a new pose, the imagery of image 4 as the label's illustration); how
  it's applied (printed, screen-printed, embroidered, painted, a sticker, a screen). A method that
  remakes the drawing (embroidery, emboss or deboss, engraving, foil, paint by hand) shows the logo
  as that method makes it: its letters, shapes and colours, in the method's own material (thread and
  stitches, a raised edge, cut metal, brushwork). A screen shows the brand's real screen when it has
  one: make the device photo with the screen blank and place the screenshot with
  `metamorfiles_make_mockup`. A screen the model designs gives each part of the interface (a button,
  a field, a card) the colours DESIGN.md gives it, its fill and its text alike, named as colours.
- **Words:** every word that appears, quoted exactly, and that no other word, number or label does.
- **Keep:** the logo from image 1, every letter and every part of its mark as image 1 draws them, in
  its colours and proportions, as its method makes it; its perspective, light and material are the
  photograph's. Artwork made flat as designed; the rest is designed freely in the brand's style. No
  other logo, mark, badge, claim, price or small print.

A flat print is photographed from its artwork, given as image 1 alone, with the camera the shot's
own (step 1). A flat print's prompt has Scene, Subject and a short Print line (image 1's design, its
material, light and foreshortening), with no Keep section. The print lies in its surface and turns
with it (a round sticker on a door that recedes reads as an ellipse in the plane of the glass), under
the shadows, glare and drops that fall on the surface around it. Name its colours, never as hex, and
never ask for it "exactly as drawn": either makes it a flat graphic laid over the photo.
`metamorfiles_generate_image { prompt, width: 1600, height: 2000, references: ["brand/mockups/artwork/mirror-sticker-1a2b3c4d.png"], folder: "brand/mockups", name: "mirror-sticker", wait: false }`

### 4. Check each one

Look at each with `metamorfiles_read_file`, as the photograph a design publication would run:
- **The logo, the words, the method and the print's fit:** as the Mockup checklist of the `review`
  skill says (`metamorfiles_get_guide { name: "review" }`).
- **The physics:** the object as the real one is made and used.
- **The scene:** it is the frame the Scene set up and the moment the Subject named: what leads and
  where, every object in its state, each attached part on what it's attached to. A photograph that
  dropped or rearranged them is made again before the review.

### 5. Fix, place when it can't be fixed, and review

- **A logo or word wrong:** an edit of that place only, the image first and the logo file after it,
  the prompt naming the fault and keeping the photograph's perspective and light:
  `metamorfiles_generate_image { prompt: "On the can, the logo's second r is missing: draw it as image 2 does, in the can's curve and light", references: ["brand/mockups/can-on-peppers-1a2b3c4d.png", "brand/logos/logo.svg"], edit: true, region: { x: 0.3, y: 0.2, width: 0.4, height: 0.4 }, width: 1600, height: 2000, folder: "brand/mockups" }`.
- **A print that floats:** an edit of its region, the photograph first and the print's artwork
  after it, saying only that the print sits on its surface in the scene's perspective and light.
  Never made again from the floating take: a reference carries its fault.
- **Still wrong after two edits** (long copy, small type, a screen of text): place it. Make the photo
  with the print's surface left blank (the same prompt, the surface "completely blank, fully in frame
  and unobstructed", into `brand/mockups/blanks`), then
  `metamorfiles_make_mockup { name: "can-on-peppers", photo: "brand/mockups/blanks/can-on-peppers-blank-5e6f7a8b.png", surface: { object: "a drinks can", material: "aluminium", method: "print", condition: "new", form: "curved", text: ["Lumen"] }, layers: [{ file: "brand/artwork/can-wrap.png", corners: [[385, 260], [746, 260], [746, 1140], [385, 1140]], cover: true, curve: { wrap: 150, bend: [8, 14] } }], replaces: "brand/mockups/can-on-peppers-1a2b3c4d.png" }`:
  `corners` the surface's top-left, top-right, bottom-right and bottom-left in the photo's pixels,
  read from the surface as it stands in the photo, turned and angled with it (an angled door's, or a
  fob held at a slant, are never an upright rectangle),
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

