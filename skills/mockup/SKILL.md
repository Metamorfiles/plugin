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
- [ ] 3. Each face designed in your notes before any image: the best of its kind, its idea, its composition
- [ ] 4. Each photograph made whole from one prompt, all together
- [ ] 5. Reviewed; each image fixed once per look, every must fix together: an edit when only the mark or a word is wrong, else made again
```

### 1. The shots

Read [references/taste.md](references/taste.md) for what strong packaging photography looks like.
One idea per photograph, each a different part of the system, from the brand's own world: what it
really makes and the moments and places it lives in. For skincare made for short mornings: the
serum on a steamed-up bathroom shelf at seven, one hand reaching in. Each object is shown in a
moment of its real use, where it lives, since that moment is what makes the shot this brand's. The
brand's products are one packaging system across the shots, as a real range is; a business with no
product to show gives its shots to what it uses (a sign, merch, a bag, a placement). People appear
as cropped hands and arms, a face only when the shot is about a person.

### 2. What's on the object

Decide it per object, from the shot's idea and the surface. The master is the file the model
reproduces exactly: image 1 of the photograph.

- **The logo alone** (a tag, a business card, an embroidered chest, a fascia with only the name):
  the master is the logo file the object's ground calls for (the reversed one on a dark object).
- **Designed in place** (a can, a box, a label, a deck's graphic, merch: a face whose only words are
  the logo and a short line the brief gives, seen in one shot): designed in step 3, then drawn by
  the image model in the photograph, which places the parts itself. Only the logo and the words are
  exact. The master is the logo file.
- **A flat design** (a pack another shot shows too, a sticker with art, a poster that is a picture):
  designed in step 3, then drawn flat by the image model, the whole print straight on. The passed
  flat is the master, with the logo file as image 2, so every shot shows the same pack. A face with
  set copy (a label's text, a menu) is a page in code, and a screen is the brand's real one or a page
  (the `artwork` skill, step 5); its file is the master the same way.

Placed as the business would really make it: where, how large and by what method a printer,
signwriter or factory puts a mark on this kind of object. Real words only: the brand's name, the
brief's words and its product names (proposed as the `copywriting` skill's Names says when the
brief gives none); small print only when its real words were supplied.

### 3. Design each face

The image model draws a face the way its prompt describes it: given one idea, it composes the face
around that idea; given a list of parts, it stacks them. So each face designed in place and each
flat is designed first, as a packaging designer would, and written in your notes before any image:

1. **The best of its kind.** Start from the brand's references, which `metamorfiles_get_project`
   lists with what to take from each, and when none shows this kind of object, search for it:
   `metamorfiles_search_references { query: "skincare packaging" }`. Name
   how the strongest use the face's space (how they compose it, not what they show) and take that
   way of composing whole. Their subjects and marks stay theirs.
2. **The idea.** One graphic idea that carries the whole face, from what only this business has: its
   name and what it means, its place, what it makes and from what, its rituals and its people. Say
   it as what of the subject becomes what on the face: "the morning's two minutes become the
   label's clock face". Weigh two or three ideas of different kinds (a metaphor, an exaggeration,
   type as the image, the object itself large, a pattern as the material) and keep the strongest for
   this brand. A sentence that would fit a competitor's pack names the category; keep looking until
   it fits only this one.
3. **The composition,** for how the object is met: picked from a shelf, it reads from a few metres;
   turned in the hand, up close; on a body or a wall, across a room. Say what reads first, second
   and third, and which of the brand's imagery, character, pattern, palette and type it adapts for
   this object. Then look at the plan as it will be met: what does someone take in first, and with
   the logo covered, is it still this brand? Change the plan now, while it is words.

A flat is then drawn from its design, on a plain field of the brand's paper colour, its prompt
step 4's lines without Scene and Object:
`metamorfiles_generate_image { prompt, references: ["brand/logos/logo.svg", "brand/refs/<an anchor>"], width: 1600, height: 1600, ground: "<the paper colour>", folder: "brand/mockups/artwork", name: "serum-label" }`.
It's reviewed in the `mockups` queue before any photograph is made from it.

### 4. The photograph

All the shots together, each
`metamorfiles_generate_image { prompt, width: 1600, height: 2000, references: ["brand/logos/logo.svg", "brand/refs/<an anchor>"], folder: "brand/mockups", name: "serum-on-shelf", wait: false }`,
collected with `metamorfiles_image_status { id }`, its shape the object's (portrait for a bottle,
landscape for a sign). The master is image 1; then, each with one role, the logo when the
master is a flat, a passed flat when the brand's pack is in frame, and what a face designed in
place draws on (the character sheet, one or two of the imagery's anchors). Which images may go in:
`references/images.md` of the `studio` skill, "The prompt", with its model family's file.

The prompt says what the photograph is for, its subject, what is happening, where, and how it
looks, in plain words: the model follows a prompt stated clearly and simply more closely than a
long one, and fills whatever isn't said with its defaults. Write it in short labelled lines, in this
order, each a sentence or two holding only its own:

- **Images:** each by number and role. "Image 1 is the brand's logo: reproduce it exactly."
- **Scene:** a real photograph of a real moment, as someone there would take it: the place (as
  "Scene" in `references/images.md` of the `studio` skill says), the light and its direction, the
  camera's distance and angle, and a sign of real use. A studio shot is the one place for studio
  wording ("professional", "editorial", "cinematic"), since it pulls toward a retouched ad.
- **Object:** the complete object as it's really made, with its parts, hardware and materials you
  can feel (a bottle's cap, glass and label stock; a box's folded seams; a tote's handles and
  stitching), and what is happening: how it sits or is held, the action, and where each thing is
  once the action is done. The model draws the action's result only when the prompt says it.
- **Design** (a face designed in place, or a flat's own prompt): the design from step 3 in a
  sentence or two, the idea first, then what reads first; which images it draws from and how it
  adapts them (the mascot from the character sheet in a new pose, the anchor's imagery as the
  label's illustration). The idea in words lets the model compose the face; positions measured out
  part by part are copied as given and read as parts stacked.
- **Print:** the method and material (a printed paper label, screen-print on cotton, embroidery, a
  foil stamp, paint on a sign), the master printed into it: following the surface's curve, grain or
  folds, in the scene's light and shadow, under the object's hardware where it has some. A print
  described as made into the object is drawn as part of it; one fenced in by words like "only on
  the label" is laid over the photograph.
- **Words:** every word that appears, quoted, appearing once; the brand's name spelled letter by
  letter.
- **Keep:** what must stay fixed, by name: the logo's letters, their shapes, colours and
  proportions; a passed flat as designed; the object's parts. The rest is designed freely in the
  brand's style. No other text, logos, badges or watermarks.

### 5. Review, and fix

Reviewed in the `mockups` queue (the `review` skill; in a new brand, `handover` is the final gate).
A piece changes only for a must fix or the user's word, and an image gets one new take for each
look, every must fix in it together (`references/images.md` of the `studio` skill, "Edit or redraw"):

- **Only the mark or a word wrong:** an edit of the take the reviewer sent back, its master after it,
  as "Edit or redraw" says, naming the fault where it is and restating the Keep line:
  `metamorfiles_generate_image { prompt: "Edit image 1: on the label at the centre of the bottle, redraw the wordmark with the logo's letters as image 2 draws them, in the label's curve and light. Keep the bottle, the hand and the light exactly as they are.", references: ["brand/mockups/serum-on-shelf-1a2b3c4d.png", "brand/logos/logo.svg"], edit: true, width: 1600, height: 2000, replaces: "brand/mockups/serum-on-shelf-1a2b3c4d.png" }`.
- **Anything else wrong** (a print laid over the photograph or made another way than named, the object
  or its physics, a figure, the brand's products): made again from its prompt as a new image, answering
  every must fix the look named, the mark's too (an edit would keep the faulty take's composition), with the line that should have said it rewritten to describe what the photograph shows
  instead (the design, the object and its moment, or the print, as step 4 says).

A piece looked at twice without
passing goes to the user as the `review` skill's Run it, step 4, says. Back to an earlier take,
when the user asks:
`metamorfiles_use_take { step: "image", option: "brand/mockups/serum-on-shelf-1a2b3c4d.png", take: 1 }`.
