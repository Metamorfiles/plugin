---
name: mockup
description: Shows a brand on its real objects as real photographs in Metamorfiles Studio: a pack, tin, bottle, box, range, bag, sign, card, tag, cup, garment or merchandise. Use for a new brand's mockups and whenever the user wants to see their brand, a product or a range on the real thing, even if they only say "a mockup" or "show it on a bottle".
license: MIT
---

# Mockups

A mockup is a real photograph of the brand on a real object. The image model makes it whole, from
the brand's real files as references: nothing is ever pasted or placed onto a photograph. Its hard
part is the mark: image models redraw lettering, and no prompt holds a logo pixel-exact. So the
prompt gives the model the master file and says how the mark is physically made on the object, and
the reviewer holds the mark to that file.

## Checklist

```
- [ ] 1. The shots: one idea each, from the brand's world
- [ ] 2. Per shot, what's on the object: the logo alone, a face designed in place, or a flat design
- [ ] 3. Each photograph made whole from one prompt, all together
- [ ] 4. Reviewed; each must fix made once: the mark by an edit, anything else made again
```

### 1. The shots

Read [references/taste.md](references/taste.md) first. One idea per photograph, each a different
part of the system, from the brand's own world: what it really makes and the moments and places it
lives in. For skincare made for short mornings: the serum on a steamed-up bathroom shelf at seven,
one hand reaching in. Never a product standing alone on a plain floor. The brand's products are one
packaging system across the shots, as a real range is; a business with no product to show gives its
shots to what it uses (a sign, merch, a bag, a placement). People appear as cropped hands and arms,
a face only when the shot is about a person.

### 2. What's on the object

Decide it per object, from the shot's idea and the surface. The master is the file the model
reproduces exactly: image 1 of the photograph.

- **The logo alone** (a tag, a business card, an embroidered chest, a fascia with only the name):
  the master is the logo file the object's ground calls for (the reversed one on a dark object).
- **Designed in place** (a can, a box, a label, a deck's graphic, merch: a face whose only words are
  the logo and a short line the brief gives, seen in one shot): design the face as a packaging
  designer would, the way "The composition" in `references/design.md` of the `studio` skill decides
  any piece, measured against the best of its kind (its search, or the packs the brand's research
  collected): one graphic idea from the brand's world that carries the whole face (the mark at a
  scale the edges crop, a colour per variant, the name set huge, the pattern as the material), said
  in one line, and what reads first, second and third. The image model draws the face in the
  photograph from that idea and places the parts itself. The brand's imagery, character, pattern,
  palette and type inspire it, adapted for this object; only the logo and the words are exact. The
  master is the logo file.
- **A flat design** (a pack another shot shows too, a sticker with art, a poster that is a picture):
  drawn flat by the image model, the whole print straight on, on a plain field of the brand's paper
  colour, designed the same way, its prompt step 3's lines without Scene and Object:
  `metamorfiles_generate_image { prompt, references: ["brand/logos/logo.svg", "brand/refs/<an anchor>"], width: 1600, height: 1600, ground: "<the paper colour>", folder: "brand/mockups/artwork", name: "serum-label" }`.
  It's reviewed in the `mockups` queue before any photograph is made from it, and the passed flat
  is the master, with the logo file as image 2, so every shot shows the same pack. A face with set
  copy (a label's text, a menu) is a page in code, and a screen is the brand's real one or a page
  (the `artwork` skill, step 5); its file is the master the same way.

Placed as the business would really make it: where, how large and by what method a printer,
signwriter or factory puts a mark on this kind of object. Real words only: the brand's name, the
brief's words and its product names (proposed as the `copywriting` skill's Names says when the
brief gives none); small print only when its real words were supplied.

### 3. The photograph

All the shots together, each
`metamorfiles_generate_image { prompt, width: 1600, height: 2000, references: ["brand/logos/logo.svg", "brand/refs/<an anchor>"], folder: "brand/mockups", name: "serum-on-shelf", wait: false }`,
collected with `metamorfiles_image_status { id }`, its shape the object's (portrait for a bottle,
landscape for a sign). The master is image 1; then, each with one role, the logo when the
master is a flat, a passed flat when the brand's pack is in frame, and what a face designed in
place draws on (the character sheet, one or two of the imagery's anchors). Which images may go in:
`references/images.md` of the `studio` skill, "The prompt", with its model family's file. Write the
prompt in short labelled lines, in this order, each holding only its own:

- **Images:** each by number and role. "Image 1 is the brand's logo: reproduce it exactly."
- **Scene:** a real photograph of a real moment, as someone there would take it: the place (as
  "Scene" in `references/images.md` of the `studio` skill says), the light and its direction, the
  camera's distance and angle, and a sign of real use. Studio wording ("professional", "editorial",
  "studio", "cinematic") only for a shot that is a studio shot: it pulls toward a retouched ad.
- **Object:** the complete object as it's really made, with its parts and hardware, how it sits or
  is held, and the moment: a bottle's cap, glass and label stock; a box's folded seams; a tote's
  handles and stitching. The model fills whatever isn't said with its defaults.
- **Design** (a face designed in place): its idea in one line and what reads first, second and
  third; which images it draws from and how it adapts them (the mascot from the character sheet in
  a new pose, the anchor's imagery as the label's illustration). The model places the parts.
- **Print:** the method and material (a printed paper label, screen-print on cotton, embroidery, a
  foil stamp, paint on a sign), the master printed on it naturally:
  following the surface's curve, grain or folds, in the scene's light and shadow, under the
  object's hardware where it has some.
- **Words:** every word that appears, quoted, appearing once; the brand's name spelled letter by
  letter.
- **Keep:** by name, what the master fixes: the logo's letters, their shapes, colours and
  proportions; a passed flat as designed; the object's parts. The rest is designed freely in the
  brand's style. No other text, logos, badges or watermarks.

Describe what you want; never a guard like "only on the label", which makes the model lay the design
over the photograph.

### 4. Review, and fix

Reviewed in the `mockups` queue (the `review` skill; in a new brand, `handover` is the final gate).
A piece changes only for a must fix or the user's word, and each must fix gets one fix, as the
image's new take (`references/images.md` of the `studio` skill, "Edit or redraw"):

- **The mark or a word wrong:** an edit of the take the reviewer sent back, its master after it,
  in the region around the mark (the rest stays exactly as it was), naming the fault and restating
  the Keep line:
  `metamorfiles_generate_image { prompt: "Edit image 1: the label's wordmark is redrawn; draw the logo's letters as image 2 does, in the label's curve and light. Keep the bottle, the hand and the light.", references: ["brand/mockups/serum-on-shelf-1a2b3c4d.png", "brand/logos/logo.svg"], edit: true, region: { x: 0.3, y: 0.2, width: 0.4, height: 0.4 }, width: 1600, height: 2000, replaces: "brand/mockups/serum-on-shelf-1a2b3c4d.png" }`.
- **Anything else** (a print laid over the photograph or made another way than named, the object
  or its physics, a figure, the brand's products): made again from its prompt, with the line that
  caused it said fully (`references/taste.md` names each fault's cause), never from the faulty take.

A piece looked at twice without
passing goes to the user as the `review` skill's Run it, step 4, says. Back to an earlier take,
when the user asks:
`metamorfiles_use_take { step: "mockups", option: "brand/mockups/serum-on-shelf-1a2b3c4d.png", take: 1 }`.
