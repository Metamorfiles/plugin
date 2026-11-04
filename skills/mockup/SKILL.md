---
name: mockup
description: Shows a brand on its real objects as art-directed product photography in Metamorfiles Studio: a pack, tin, bottle, box, range, bag, sign, card, tag, cup, garment or merchandise. Use for a new brand's mockups and whenever the user wants to see their brand, a product or a range on the real thing, even if they only say "a mockup" or "show it on a bottle".
license: MIT
---

# Mockups

A mockup is an art-directed photograph: one clear idea per shot, light with intent, the print
designed as a system. The image model always makes it whole. The brand's real files and the flat
designs made for it are references it draws from: nothing is ever pasted, placed or baked onto a
photograph, as a default or as a fallback.

## Checklist

```
- [ ] 1. The shots chosen: one idea each, different from each other; the packs one system
- [ ] 2. What's printed on each object decided: the logo alone, designed in place, a flat print, set copy or a screen
- [ ] 3. The flat designs made and reviewed first
- [ ] 4. Each photograph made whole, from its prompt, the brand's files and the passed flats; all together
- [ ] 5. Reviewed (the `mockups` queue); each must fix made once, the way its fault calls for
```

### 1. The shots

Read [references/taste.md](references/taste.md) first: what strong mockups do, and the weak ones to
recognise. One idea per photograph, each a different idea and a different part of the system, from
the brand's own world: what it really makes (its brief, its touchpoints) and the moments and places
it lives in. For skincare made for short mornings: the serum on a steamed-up bathroom shelf at
seven, one hand reaching in. Never a plain product standing on a plain floor.

Cameras and sets to build an idea with, never the idea itself: the range as a pattern cropped by the
frame; a stack; the product on what's inside it; in use, a cropped hand acting on it; the family
in a row; a detail of the print or the material, shallow depth; in its place, real light falling
across it; one witty moment, when the brand's voice allows it.

Across the shots, the brand's products are one packaging system, as a real range is: every pack is
the same design, and a shot shows a line or a variant of it (a variant in its colour, another size),
never a new pack design. Or show one product, or none, and give the other shots to what the
business uses besides its packs: merch, a sign, a shelf strip, a bag, a placement (a poster, a bus
shelter, a post on a phone).

For each, decide in your notes:
- **The backdrop and the light:** from the brand's direction and the shot's idea, a real place or a
  set built for it. Never the weak default: flat, unconsidered light, or a void with no intent.
- **The people:** cropped hands, arms and sleeves; a face only when the shot is about a person.
- **The idea:** one line, the shot's composition: what it shows, from where, what leads.
- **The physics:** how this object really sits and opens, said in the Subject (step 4).

### 2. What's printed on each object

Decide it per object, from the shot's goal, its composition and the surface, as the business would
really make it:
- **The logo alone** (a tag, a business card's face, an embroidered chest, a fascia with only the
  name): nothing but the logo file the ground calls for, applied the way a printer or signwriter would
  put it ("On the object", below).
- **Designed in place** (a box, a label or merch shown in one shot, its only words the logo and a
  short line the brief gives): design the face first, as a
  packaging designer would, the way "The composition" in `references/design.md` of the `studio`
  skill decides any piece: one graphic idea from the brand's world, measured against the best packs
  of its kind, that carries the whole face (the mark at a scale the edges crop, a colour per
  variant, the name set huge, the pattern as the material), said in one line, and what reads first,
  second and third. The image model draws the face in the photograph from that idea, its hierarchy
  and the materials, and places the parts itself. The brand's files are its references, not its
  limits: its imagery, character, pattern, palette and type inspire the design, in variants and
  adaptations made for this object. Only the logo and the words are exact.
- **A flat print** (a sticker with art, a sign with the name, a poster that is a picture and the
  name, and any pack another shot shows too, when its only words are the logo and at most a short
  line the brief gives): the image model draws it flat, the whole print straight on and filling the
  image, see-through around a die-cut, from the logo and the brand's files, decided as "The
  composition" says and prompted with its idea, what reads first, second and third, and the
  brand's materials:
  `metamorfiles_generate_image { prompt, references: ["brand/logos/logo.svg", "brand/refs/<an anchor>"], width: 1600, height: 1600, transparent: true, folder: "brand/mockups/artwork", name: "mirror-sticker" }`.
  A flat print drawn in the photograph at once comes out as a graphic laid over it.
- **Set copy** (a menu, a label's text, a poster with copy, exact artwork a printer would get as a
  file): designed in code as a page with the `artwork` skill, which brings it into
  `brand/mockups/artwork`.
- **A screen** (a phone, a laptop, a display, a kiosk): the brand's real screen when it has one,
  brought in as it is; else its interface designed in code as a page, as step 5 of the `artwork`
  skill says, never by the image model.

Then the surface: what it is, its material, how the brand is applied (print, screen-print,
thermal-print, paint, vinyl, sticker, embroidery, engraving, emboss, foil, display, lightbox), how worn
(`new` or `used` for a business starting out; `worn` or `weathered` only when its age or trade is the
point) and its form (flat, curved or soft). You decide them, never the image model. Real words only:
the brand's name, the brief's words and its product names; when the brief gives none, names are
proposed as the `copywriting` skill's Names says. Small print (a weight, an ingredient list, an
address) only when its real words were supplied; never an invented price, claim or figure.

### 3. The flat designs, reviewed first

A design other pieces are made from is reviewed before it's reused, so the flats come first and
the photographs only from passed flats. A flat drawn by the image model is reviewed in the
`mockups` queue (the `review` skill; the reviewer reads it with
`metamorfiles_review_queue { for: "mockups" }`), its must fixes made as step 5 says. A flat made as a
page is reviewed once, as its page, before it's exported (the `artwork` skill); the file it brings
in isn't looked at again. A brand's real screen, brought in as it is (step 5 of the `artwork`
skill), waits in the `mockups` queue with the drawn flats.

### 4. Make each photograph

Make each to pass the Mockup checklist of the `review` skill's Rubric, which the reviewer holds it
to. All the shots together, each from the passed flats it shows: a pack in several shots is given
to each as its passed flat ("Image 2 is the brand's pack: the same design, only the variant's
colour and name change"), and that holds wherever the brand's products appear, behind another piece
too: they're the packs the brand designed, never blank stand-ins. An unreviewed photograph is never
a reference for another shot. Each
`metamorfiles_generate_image { prompt, width: 1600, height: 2000, references: ["brand/logos/logo.svg", "brand/mockups/artwork/serum-box-1a2b3c4d.png"], folder: "brand/mockups", name: "serum-on-shelf", wait: false }`,
collected with `metamorfiles_image_status { id }`. The references are the brand's real files, numbered
by role: image 1 the logo file the object's ground calls for (the reversed one on a dark object), its
letters and parts kept; then the passed flats, and what the design draws on as inspiration: the
character sheet, one or two of the imagery's anchors (which images may go in:
`references/images.md` of the `studio` skill, "The prompt"). Write the prompt in labelled
sections, in this order; each carries only what its label says, and nothing else goes in.

- **Scene:** the frame as a photographer sets it up: "Editorial product photograph", its shape and
  lens; what leads and what stays empty; the set, the light and where its shadows fall. Weather or
  wear (rain, dust, steam, scuffs), when the shot has it, is said once here and stays light: it never
  covers the print.
- **Subject:** the one moment the shot catches, in one line, and every object as it is at that
  instant: a lid being lifted is still on its jar, one lifted off rests beside it; a pack being
  opened is still closed, an open one shows its real contents. A part that hangs, runs or ties says
  what it is attached to and where it goes (a tag on the bag's handle, a strap from the bag to the
  shoulder). Hands as that Subject says: cropped, one action, never which finger does what.
- **The print:** what is on the object and how it's designed. The logo alone: from image 1, placed
  as "On the object" says. A designed face: its idea and what reads first, second and third, the
  model placing the parts; the design drawn from which images and how it adapts them (the mascot
  from image 3 in a new pose, the imagery of image 4 as the label's illustration). A passed flat:
  that image's design, as it is. How it's applied (printed, screen-printed, embroidered, painted, a
  sticker, a screen). A method that remakes the drawing (embroidery, emboss or deboss, engraving,
  foil, paint by hand) shows the logo as that method makes it: its letters, shapes and colours, in
  the method's own material (thread and stitches, a raised edge, cut metal, brushwork).
- **Words:** every word that appears, quoted exactly, and that no other word, number or label does.
- **Keep:** the logo from image 1, every letter and every part of its mark as image 1 draws them, in
  its colours and proportions, as its method makes it; its perspective, light and material are the
  photograph's. A passed flat as designed; the rest is designed freely in the brand's style. No
  other logo, mark, badge, claim, price or small print.

A flat print photographed on its own (a sticker on a mirror, a poster on a wall) is given as image 1,
with the camera the shot's own (step 1); the brand's pack is image 2 when its products are in frame.
Its prompt has Scene, Subject and a short Print line (image 1's design, its material, light and
foreshortening), with no Keep section. The print lies in its surface's plane and turns with it,
under the shadows, glare and drops that fall on the surface around it. Name its colours, never as
hex, and never ask for it "exactly as drawn": either makes it a flat graphic laid over the photo.
`metamorfiles_generate_image { prompt, width: 1600, height: 2000, references: ["brand/mockups/artwork/mirror-sticker-1a2b3c4d.png"], folder: "brand/mockups", name: "mirror-sticker", wait: false }`

### 5. Review, and fix

Get the review of the `mockups` queue (the `review` skill); in a new brand, `handover` is the final
gate for the whole kit. A piece changes only for a must fix the Mockup or Flat design checklist
names (its picture checks included), or for the user's word. Each must fix gets one fix, its method
chosen from what the fault is before you act, never from looking at a failed attempt. A fix is the
image's new take, as `references/images.md` of the `studio` skill says ("Edit or redraw"):

- **The logo or a word wrong** (a letter, a part of the mark, a word): an edit of that place only,
  the image first and the logo file after it, the prompt naming the fault and keeping the
  photograph's perspective and light:
  `metamorfiles_generate_image { prompt: "On the box, the logo's last letter is missing: draw it as image 2 does, in the box's plane and light", references: ["brand/mockups/serum-on-shelf-1a2b3c4d.png", "brand/logos/logo.svg"], edit: true, region: { x: 0.3, y: 0.2, width: 0.4, height: 0.4 }, width: 1600, height: 2000, replaces: "brand/mockups/serum-on-shelf-1a2b3c4d.png" }`.
- **The method wrong, or a print that floats:** an edit of its region, the photograph first and the
  print's passed flat after it, saying only that the print lies in its surface in the scene's
  perspective and light, made by the method named.
- **A figure or the character wrong** (Anatomy, Character): an edit of its region, the character
  sheet after the image when it's the character; made again from its prompt when the pose or the
  figure itself is the fault, since an edit keeps the old figure.
- **The physics or the subject wrong** (an object that couldn't exist, the moment missing): made
  again from its prompt with the physics or the moment said plainly, never from the faulty take: a
  reference carries its fault.

A mockup or flat still failing after its two looks stays as it is and goes to the user: the
handover summary names it in a new brand, anywhere else the task's `done` update or your reply. Its size, its
place, the idea or the composition change only on the user's word, made again as its new take.
Back to an earlier take, when the user asks:
`metamorfiles_use_take { step: "mockups", option: "brand/mockups/serum-on-shelf-1a2b3c4d.png", take: 1 }`;
nothing is asked after it.

## On the object

For the logo alone: it looks made when it sits on the object the way a printer or signwriter would
put it.

- **A garment or apron** carries a small mark on the chest, high and to one side; a back print is the
  one place a large one goes.
- **A box, bag or lid** holds the logo with generous room around it.
- **A sticker, badge, tag or label** fills its die-cut with a border of the material showing.
- **A sign or fascia** sets the name large but with breathing room to its frame.
- **A cup, jar or bottle** keeps the logo within the face you see.
- **Small type stays small,** as on the real thing: a line under a logo, an address.
