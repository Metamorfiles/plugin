# Imagery

Read this for the imagery step of `SKILL.md`, after `images.md` of the `studio` skill, which
holds how to prompt each image model and which images may be passed as references. This file is
what a new brand's imagery needs on top: a locked style, anchors the user approves, and a library
grown from them.

## Contents
- The mode
- The style block
- Seeds, then anchors
- The library
- In the kit

## The mode

Decide it from the chosen direction and the brief, and say it in the thread:
- **Illustration:** drawings carry the brand. Common for food, kids, community and culture brands,
  and any brand with humour.
- **Photography:** real product, place and people. Lumen, the example brand, is photographic.
- **A character:** the brand's mascot hosts its pictures. Only when the logo step gave the brand one
  (step 8 of the `logo` skill); otherwise the imagery takes another mode.
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
cut-paper shapes in a few colours, little or no shading"), not as a list of bans
(`images.md` of the `studio` skill, "The prompt"). The reviewer reads it the same way, as
a look to recognise, not rules to count.
- **For illustration:** the line as a look (heavy and even, thin and wavering, like a felt pen), its
  ends and how loose it is; the fills (flat, plus a material colour such as wood when the drawings
  need one); how much light and texture there is; how people are drawn; and a calm ground in the
  brand's paper colour.
- **Colours and the accent** as `images.md` of the `studio` skill says ("The prompt", Concrete
  words; "The brand's image contract", Colour roles).
- **For photography:** the light (hard morning sun, on-camera flash), the lens and distance, the grade,
  real materials, how many props at most.
- **For both:** keep the category's and the place's clichés out by choosing the subjects, not by
  listing them; words and logos stay out as `images.md` of the `studio` skill says.

## Seeds, then anchors

1. Make four seeds together, each testing the style on a different job the brand's images will
   really do (the touchpoints and the kit's uses: a different subject, scale and framing each), so
   the user sees whether the style holds across them. Their props come from the brief's own world:
   what the business makes and uses. A character brand's seeds are the character in the brand's
   moments, each made from its sheet (`images.md` of the `studio` skill, "The prompt"). Each is
   `metamorfiles_generate_image { prompt, width: 1600, height: 2000, references: ["templates/brand-board#process-direction:<chosen id>"], folder: "brand/process/imagery", ground: "<the direction's paper>", wait: false }`,
   the prompt starting "Image 1 is the chosen direction: take its palette, light and mood, never its
   pictures"; the logo never goes in, since a model shown a logo draws it into the picture;
   each at the shape the brand's images will mostly be used at (here 4:5), `ground` the chosen
   direction's paper for drawings on a flat paper field, so they already sit on it (a photograph
   takes no `ground`); collect each with `metamorfiles_image_status { id }`. The step's
   frame fills as each arrives.
2. Each seed is one option of the imagery step, titled by what it shows ("The serum close-up"). The
   user uses them all, or has single ones redone or edited first ("Redo the serum close-up", "Edit
   the serum close-up …: warmer light"), each the seed's new take with `replaces` (`SKILL.md`,
   "At every step"). A redo takes as references only images the user approved or the reviewer
   passed (`images.md` of the `studio` skill): the other seeds the reviewer passed, or for a seed
   with the character its sheet alone, since a seed passed in brings its figure's face with it;
   never the seed it replaces. Say what to keep ("the same composition")
   and what to change ("fewer, bolder lines").
3. The seeds the user keeps are the **anchors**: the kit brings each into the library folder
   (`SKILL.md`, Kit) and DESIGN.md lists the file names that returned. The library below is grown
   from two or three of them (`references: ["brand/refs/<anchor>", ...]`), since the library sheet
   doesn't exist yet; every image after the kit takes the library's sheet instead (`images.md` of
   the `studio` skill, "The prompt").

## The library

Grow six to ten images from the anchors into the imagery folder DESIGN.md lists, each with the same
style block:
`metamorfiles_generate_image { prompt, width, height, references: ["brand/refs/<anchor>", ...], folder: "brand/refs" }`.
A drawing on a flat paper field also passes `ground: "{colors.background}"`, so it sits on the
brand's paper; a photograph never takes a `ground`. Each is made at the shape
it will be used at (1024 × 1024 for a spot, 1600 × 2000 for a 4:5 scene):
- **Spots:** single objects the business sells or uses, centred with space around them.
- **Scenes:** the business's moments and people, with calm space above for a headline.

A character's images carry its sheet first and its Character lines (`images.md` of the `studio`
skill, "The prompt").

## In the kit

- DESIGN.md's Imagery section describes the mode and the look, and names the anchors.
- `assets` lists the folder with `kind: imagery` and its `anchors`; a character's folder as
  `references/sheet.md` of the `character` skill says, its `note` holding the Character lines.
- `brand/imagery-guide.md` is the brand's image contract, which every later image reads first
  (`images.md` of the `studio` skill). Write it with these sections, in this order:
  - **Style:** the style block, word for word as the seeds used it.
  - **Character** (a character brand): its Character lines, word for word.
  - **Colour roles:** each colour's hex and what it paints in a scene, as `images.md` of the
    `studio` skill says.
  - **Writing a scene:** one or two example scenes in the brand's words, subject first.
