# Imagery

Read this for the imagery step of `create.md`, after `images.md` of the `metamorfiles` skill, which
holds how to prompt each image model. This file is what a new brand's imagery needs on top: a
locked style, anchors the user approves, and a library grown from them.

## The mode

Decide it from the chosen direction and the brief, and say it in the thread:
- **Illustration:** drawings carry the brand. Common for food, kids, community and culture brands,
  and any brand with humour.
- **Photography:** real product, place and people. Lumen, the example brand, is photographic.
- **A character:** one recurring figure or a family of them hosts the brand. It needs a character
  bible (below).
- **Graphic:** shapes, a pattern, or type itself as the image, with no pictures at all. Common for
  technology, finance, professional services and cultural institutions. Seeds are compositions:
  made with the image model in a flat graphic style, or drawn by you as SVG when they are pure
  geometry.
- **3D:** rendered objects and materials, for products and technology that live in them.

Most brands lead with one and let another support it. Say which. The rest of this file holds for
every mode: a locked style, seeds the user approves, and a library grown from them.

## The style block

One paragraph, written once and pasted unchanged after every scene, so every image is drawn by the
same hand:
- **For illustration:** the line (its weight as a share of the width, caps, how loose), the fills
  (flat, the palette's hex values only, plus a material colour such as wood when the drawings need
  one), what never appears (hatching, gradients, shading, texture), the one accent on the one object
  each image is about, how people are drawn, and a calm ground in the brand's paper colour.
- **For photography:** the light (hard morning sun, on-camera flash), the lens and distance, the grade,
  real materials, how many props at most.
- **For both:** no text, letters or logos anywhere; and the category's and the place's clichés,
  named, as what never appears.

## Seeds, then anchors

1. Make four seeds together (`wait: false`), each a different job: a scene with people, an object
   alone, an interior, a character, a detail. Save them in `brand/process/imagery/` with a `ground`
   of the brand's paper colour, so they already sit on it; the step's frame fills as each arrives.
2. Each seed is one option of the imagery step, titled by what it shows ("The knit close-up"). The
   user uses them all, or has single ones redone first ("Redo the knit close-up").
3. Redo a rejected seed from the ones the user liked, passed as references, never from the rejected
   one. Say what to keep ("the same composition") and what to change ("fewer lines, no texture").
   Expect one in three to need a redo.
4. The seeds the user keeps are the **anchors**. Every later image is made with two or three of them as
   references: "draw a new scene in exactly the drawing style of the reference images".

## Check every image before anyone sees it

Look at each image at full size, and redo it from the anchors when it shows any of the mistakes
image models make (the list is in `images.md` of the `metamorfiles` skill, under Check): a cup with
two handles, a hand with six fingers, a limb that bends the wrong way, a warped object, garbled
letters, a stray figure in the background. The user should never be the one to find it. When they
do, the redo comes before anything else.

## The library

Grow six to ten images from the anchors into `brand/refs/` (or the imagery folder the kit lists), each
with the same style block, `folder` set to that folder so its ground is the brand's paper:
- **Spots:** single objects the business sells or uses, centred with space around them.
- **Scenes:** the business's moments and people, with calm space above for a headline.
- The accent colour on the one object each image is about.

Check each one against the anchors: the same line and fills, no colours outside the palette, nothing
drawn that the style block forbids. Redo from the anchors when it drifts.

## A character

A brand with a mascot writes its **character bible** in the imagery folder's `note`: its name, shape,
proportions, colours, features, what it wears, how it moves and what it never does. Then:
1. One approved front view: the anchor.
2. The turnaround, one view at a time from the anchor (three-quarter, side, back), each passed the
   anchor as a reference and told to change only the angle.
3. Poses and expressions the same way, from the anchor.

List the character's folder in `assets` with `kind: character`, the files named in order
(`01-front.png`, `02-three-quarter.png`), and its board shows the turnaround and the poses.

## In the kit

- DESIGN.md's Imagery section says the mode, the rules and what never appears, and names the anchors.
- `assets` lists the folder with `kind: imagery` (or `character`) and its `anchors`.
- `brand/imagery-guide.md` holds the style block and how to write a scene, for anyone who makes the
  next image.
