# Poses and expressions

Image models redraw a character a little differently every time. It stays on model only when every
new drawing starts from the approved anchor, repeats its identity word for word, and changes one
thing.

## The identity block

Write it once from the bible and the description, a short paragraph of what never changes: the
shapes and their ratios, the defining feature, the face, the colours, the style. Paste it unchanged
into every prompt for this character, with no rewording. A synonym is a different instruction.

## A new pose

A new drawing of the character, with the anchor attached: its SVG first in `references`, which
Studio sends on a ground the model reads it against:
`metamorfiles_generate_image { prompt, references: ["<the anchor .svg>"], width: 1024, height: 1024, folder: "brand/<the character's folder>", name: "02-three-quarter", trace: { colors: [...] } }`.

```
Draw the character from image 1 again, in a new pose, the same character in every way.
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
- **Always from the anchor**, never from a pose made from it: copies of copies drift.
- **Several at once**: start each with `wait: false`, each from the anchor, then wait for each with
  `metamorfiles_image_status { id }`.
- Save each into the character's folder with the same `trace` colours as the anchor.

## The set

Start with what the brand will use, not a full sheet:
- **The turnaround**: three-quarter, side and back, each told to change only the angle. Needed when
  the character appears in scenes or in 3D.
- **Poses** from what the brand does: serving, waving, carrying the one product, pointing at a
  headline's space.
- **Expressions**: only the eyes and mouth change ("Change only the expression: surprised, round eyes
  and a small O mouth"). Three or four are enough: happy, surprised, thinking, winking.

## Checking the set

Look at every new drawing beside the anchor, at the same size (`metamorfiles_read_file`, `asImage`,
or the character's frame on the brand board,
`metamorfiles_render_preview { item: "templates/brand-board", format: "<folder>" }`, its folder's path
under `brand/` with `-` for `/`):
- the same proportions and the same number of features;
- the defining feature the same shape and size;
- the same colours, each for what it paints, and nothing added (a nose, fingers, an outline);
- the same line weight, or the same flat fills;
- no mistakes of the image model (a third arm, a limb bending the wrong way; the list is in
  `references/images.md` of the `metamorfiles` skill).

A drawing that drifted is drawn again from the anchor, with the drifted part named in its "Keep
exactly" line. The user should never be the one to find it.

## Files

In the character's folder, numbered in the order the board shows them, by `name`: `01-front`,
`02-three-quarter`, `03-side`, `04-wave`, `05-surprised`; Studio adds a short id to each. The anchor
is `01-front`, listed by its full file name in the folder's `anchors`.
