# Poses and expressions

A single new drawing of the character for the brand's files: a pose for a sticker, a bust for the
small mark. Every scene of it in a post is an image, made from the character sheet
(`references/sheet.md`). A new drawing stays on model when it starts from the sheet, repeats the
character's identity word for word, and states its own pose, head angle and expression.

## The identity block

Write it once from the bible and the description, a short paragraph of what never changes: the
shapes and their ratios, the defining feature, the face's construction (the eyes' shape and size,
the markings), the colours of each part, the style. Never an expression or a head angle: those are
each drawing's own, and a fixed one makes every drawing the same face. Paste it unchanged
into every prompt for this character, with no rewording. A synonym is a different instruction.

## A new pose

A new drawing of the character, with the sheet attached first in `references`:
`metamorfiles_generate_image { prompt, references: ["<the character sheet>"], width: 1024, height: 1024, folder: "brand/<the character's folder>", name: "02-wave", trace: { colors: [...] } }`.

```
Image 1 is the reference sheet of the character from every side: draw exactly one of it, in a new
pose, the same character in every way.
Who it is: <the identity block>.
Its body, exactly: <the bible's body line>; nothing added to hold or do anything.
The pose: <the pose, in one sentence: what it does, where its limbs are, which way it and its head face>.
Alone on a transparent background, flat colours only, no letters, no ground line or shadow.
```

Draw it anew rather than editing image 1. An edit keeps what is already in the image, so the head
stays at its old angle and size while a new body is painted under it, and the pose looks pasted
together. A new drawing lets the head turn and the body move, and image 1 with the identity block
keeps it the same character. Edit (`edit: true`, the image to change first in `references`, the
prompt starting "Edit image 1:", then what stays exactly as it is) only for a change that keeps the
pose: an expression, a prop swapped, a colour fixed.

- **One change per drawing.** A new pose, or a new expression, or a prop: never two at once.
- **Always from the sheet**, never from a pose or a scene made from it: copies of copies drift.
- **Several at once**: start each with `wait: false`, each from the sheet, then wait for each with
  `metamorfiles_image_status { id }`.
- Save each into the character's folder with the same `trace` colours as the anchor.

## The set

The sheet already holds the turnaround and the range. Draw single poses only for what the brand uses
as artwork on its own (a sticker, a sign): serving, waving, carrying the one product. An expression
on a pose already drawn is an edit: "Change only the expression: surprised, round eyes and a small O
mouth".

## Checking the set

Look at every new drawing beside the sheet, at the same size (`metamorfiles_read_file`, `asImage`,
or the character's frame on the brand board,
`metamorfiles_render_preview { item: "templates/brand-board", format: "<folder>" }`, its folder's path
under `brand/` with `-` for `/`):
- the same proportions and the same number of features;
- the defining feature the same shape and size;
- the same colours, each for what it paints, and nothing added (a nose, fingers, an outline);
- the same line weight, or the same flat fills;
- no mistakes of the image model (a third arm, a limb bending the wrong way; the list is in
  `references/images.md` of the `metamorfiles` skill).

A drawing that drifted is drawn again from the sheet, with the drifted part named in its "Keep
exactly" line. The user should never be the one to find it.

## Files

In the character's folder, numbered in the order the board shows them, by `name`: `00-sheet`,
`01-front` (the anchor), `02-wave`; Studio adds a short id to each. The sheet and the anchor are
listed, in that order, by their full file names in the folder's `anchors`.
