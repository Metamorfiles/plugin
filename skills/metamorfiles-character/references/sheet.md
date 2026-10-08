# The character sheet

One image of the character from every side and in four poses, drawn in one generation from the
approved anchor. Image models redraw a character a little differently every time, and given one
drawing as a reference they copy it, head angle and face included. Given the same character from
every side, they learn it, and draw it anew in any scene. So the sheet, not the anchor, is what
every later image of the character starts from.

## The grid

Landscape 3:2, four columns and two rows, eight full-body figures of the same character at the same
scale, standing on one shared ground line, evenly spaced, on the brand's plain paper colour. No
labels, numbers or panel borders: lettering comes out garbled, and the order below is fixed.

| Row | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| The turnaround, its own resting face | front | three-quarter, facing left | side profile, facing left | back |
| The range | walking mid-stride | sitting, holding a small object in both hands | arms up, cheering, mouth open | thinking, one hand on the chin, sceptical |

The top row gives every angle of the head and body, with the face the anchor has (a neutral face
there would teach the model a blank character); the bottom one gives motion, hands, a seated body
and three expressions. A character with no hands (a moth, a fish) does the bottom row with
what it has, as its brief says.

## The prompt

The anchor first, the prompt in the labelled parts of `references/images.md` of the `metamorfiles`
skill:

```
Image 1 is <name>, the brand's character: keep its identity, anatomy and colours exactly.
Draw a character sheet of <name>: one landscape image, four columns and two rows, eight full-body
figures of the same <name> at the same scale on one shared ground line, evenly spaced, on plain
<paper hex>, no labels, numbers or borders.
Top row, with <name>'s resting face as in image 1: front; three-quarter facing left; side profile facing left; back.
Bottom row: walking mid-stride; sitting, holding a small cup in both hands; arms up, cheering, mouth
open; thinking, one hand on the chin, sceptical.
<name>: <the brief's lines: who it is, the one thing that makes it itself, how its face is made, its palette>; nothing about <name> changes.
Style: <the character's style paragraph>.
Constraints: <name>'s colours and proportions never change between figures; exactly eight figures;
nothing added that a pose seems to need; no text.
```

`metamorfiles_generate_image { prompt, width: 1536, height: 1024, references: ["<the anchor>"], folder: "brand/process/character", name: "<name>-sheet" }`

It is raster, never traced: a reference, not artwork.

## Check it

At full size (`metamorfiles_read_file { path, asImage: true }`), figure by figure:
- exactly eight figures, in the grid's order;
- the same character in all eight as the anchor, by eye: the face, the one feature, the markings,
  the colours; nothing added that a pose seemed to need (a hand, a prop, a nose);
- the same proportions in all eight (head to body, ear size, tail length), and the same face shape
  across the turnaround;
- the three expressions of the bottom row clearly different from each other and from the top row.

A figure that drifted means the sheet is drawn again, with the drifted part named in the
Constraints. Then the reviewer checks it before anyone builds on it.

## Where it goes

- **While a brand is made:** on the logo step, beside the chosen logo, as `sheet` in
  `brand/process/logo.md` (`sheet: { file: "process/character/<name>-sheet-….png", name: "<name>" }`).
  The board shows it under the logos, with Redo.
- **In the kit:** brought into the character's folder,
  `metamorfiles_import_image { path: "<the sheet>", name: "00-sheet", folder: "brand/<the character's folder>" }`,
  and listed first in that folder's `anchors`, so it heads the character's frame on the brand board.
- **Using it:** every image of the character passes the sheet as image 1, "Image 1 is the reference
  sheet of <name> from every side: draw exactly one <name>, in this scene's own pose", and the pose,
  the head's angle and the expression come from the scene's prompt, never from the sheet
  (`references/images.md` of the `metamorfiles` skill).
