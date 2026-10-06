# Imagery

Read this for the imagery step of `SKILL.md`, after `images.md` of the `metamorfiles` skill, which
holds how to prompt each image model. This file is what a new brand's imagery needs on top: a
locked style, anchors the user approves, and a library grown from them.

## The mode

Decide it from the chosen direction and the brief, and say it in the thread:
- **Illustration:** drawings carry the brand. Common for food, kids, community and culture brands,
  and any brand with humour.
- **Photography:** real product, place and people. Lumen, the example brand, is photographic.
- **A character:** one recurring figure or a family of them hosts the brand (below).
- **Graphic:** shapes, a pattern, or type itself as the image, with no pictures at all. Common for
  technology, finance, professional services and cultural institutions. Seeds are compositions:
  made with the image model in a flat graphic style, or drawn by you as SVG when they are pure
  geometry.
- **3D:** rendered objects and materials, for products and technology that live in them.

Most brands lead with one and let another support it. Say which. The rest of this file holds for
every mode: a locked style, seeds the user approves, and a library grown from them.

## The style block

One paragraph, written once and pasted unchanged after every scene, so every image is drawn by the
same hand. Describe the look the way an art director briefs an illustrator, in what it is ("flat
cut-paper shapes in a few colours, little or no shading"), not as a list of bans: a model draws
what it reads, and a ban names the very thing it then draws. The reviewer reads it the same way, as
a look to recognise, not rules to count.
- **For illustration:** the line (its weight as a share of the width, caps, how loose), the fills
  (flat, in the palette's colours, plus a material colour such as wood when the drawings need one),
  how much light and texture there is, where the accent falls, how people are drawn, and a calm
  ground in the brand's paper colour.
- **For photography:** the light (hard morning sun, on-camera flash), the lens and distance, the grade,
  real materials, how many props at most.
- **For both:** no text, letters or logos anywhere. Keep the category's and the place's clichés
  out by choosing the subjects, not by listing them.

## Seeds, then anchors

1. Make four seeds together (`wait: false`), each a different job: a scene with people, an object
   alone, an interior, a character, a detail. Save them in `brand/process/imagery/` with a `ground`
   of the brand's paper colour, so they already sit on it; the step's frame fills as each arrives.
2. Each seed is one option of the imagery step, titled by what it shows ("The knit close-up"). The
   user uses them all, or has single ones redone first ("Redo the knit close-up").
3. Redo a rejected seed from the ones the user liked, passed as references, never from the rejected
   one. Say what to keep ("the same composition") and what to change ("fewer, bolder lines"). The
   new take goes first in the option's `files` and the earlier one stays after it: the board shows
   it small and dimmed under "Earlier takes", so the user can ask for it back, and then it moves
   first again. Remove a take only when it has an image-model mistake.
4. The seeds the user keeps are the **anchors**. Every later image is made with two or three of them as
   references: "draw a new scene in exactly the drawing style of the reference images".

## Check every image before anyone sees it

Look at each image at full size, and redo it from the anchors when it shows any of the mistakes
image models make (the list is in `images.md` of the `metamorfiles` skill, under Check): a cup with
two handles, a hand with six fingers, a limb that bends the wrong way, a warped object, garbled
letters, a stray figure in the background. The user should never be the one to find it. When they
do, the redo comes before anything else. After your own look, the reviewer checks the seeds and
each batch of the library before the user sees them (`SKILL.md`, "Reviewed before the user sees
it").

## The library

Grow six to ten images from the anchors into `brand/refs/` (or the imagery folder the kit lists), each
with the same style block, `folder` set to that folder so its ground is the brand's paper:
- **Spots:** single objects the business sells or uses, centred with space around them.
- **Scenes:** the business's moments and people, with calm space above for a headline.
- The accent colour on the one object each image is about.

Check each one against the anchors: the same medium, line and fills. Redo from the anchors when one
has an image-model mistake or is plainly in another medium; a small drift in a tint or a detail is
not worth a redo.

## A character

A brand whose imagery is a character designs it with the `metamorfiles-character` skill: its bible,
its construction, candidates drawn alone and traced, one anchor the user approves, and every pose
from that anchor. Its seeds on this step are the character in the brand's moments, each made from
the anchor, and every image of it, seeds and library alike, carries the bible's body line, so the
model adds nothing a pose seems to need. List its folder in `assets` with `kind: character`, its
`note` holding the body line, which the reviewer counts against.

## In the kit

- DESIGN.md's Imagery section describes the mode and the look, and names the anchors.
- `assets` lists the folder with `kind: imagery` (or `character`) and its `anchors`.
- `brand/imagery-guide.md` holds the style block and how to write a scene, for anyone who makes the
  next image.
