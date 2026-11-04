# The character sheet

One image of the character from every side and in four poses, drawn in one generation from the
chosen drawing (`SKILL.md`, step 4; for a logo that carries the character, the character cut from
it). Image models redraw a character a little differently every time, and given one drawing as a
reference they copy it, head angle and face included. Given the same character from
every side, they learn it, and draw it anew in any scene. So the sheet, not the chosen drawing, is
what every later image of the character starts from.

## The grid

Landscape 3:2, four columns and two rows, eight full-body figures of the same character at the same
scale, standing on one shared ground line, evenly spaced, on the brand's plain paper colour. No
labels, numbers or panel borders: lettering comes out garbled, and the order below is fixed.

| Row | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- |
| The turnaround, its own resting face | front | three-quarter, facing left | side profile, facing left | back |
| The range | walking | sitting, holding a small object from the brand's world | cheering | thinking, sceptical |

The top row gives every angle of the head and body, with the face the chosen drawing has (a
neutral face there would teach the model a blank character); the bottom one gives motion, a seated body, a
held object and three expressions. Each figure is named by what it is doing, never by where a limb
goes: the drawing finds the limbs, and a character built without hands does each with what it has.
The one object is there because holding is that figure's action, and it is said not to be part of
the character.

## The prompt

The chosen drawing first, the prompt in the labelled parts of `references/images.md` of the `studio`
skill:

```
Image 1 is <name>, the brand's character: keep its identity, anatomy and colours exactly.
Draw a character sheet of <name>: one landscape image, four columns and two rows, eight full-body
figures of the same <name> at the same scale on one shared ground line, evenly spaced, on plain
<paper hex>, no labels, numbers or borders.
Top row, with <name>'s resting face as in image 1: front; three-quarter facing left; side profile facing left; back.
Bottom row: walking; sitting, holding a small object from the brand's world, which is not part of
<name>; cheering; thinking, sceptical.
<name>: <its Character lines>; nothing about <name> changes.
Style: <the style block>.
Constraints: <name>'s colours and proportions never change between figures; exactly eight figures;
nothing added but the one small object; no text.
```

`metamorfiles_generate_image { prompt, width: 1536, height: 1024, references: ["<the chosen drawing>"], folder: "brand/process/character", name: "<name>-sheet" }`

It is raster, never traced: a reference, not artwork.

The reviewer looks at it before anything is built on it (the `review` skill).

## Where it goes

- **While a brand is made:** on the logo step, beside the chosen logo, as `sheet` in
  `brand/process/logo.md` (`sheet: { file: "process/character/<name>-sheet-….png", name: "<name>" }`).
  The board shows it under the logos, with Edit.
- **In the kit:** brought into the character's folder,
  `metamorfiles_import_image { path: "<the sheet>", name: "00-sheet", folder: "brand/<the character's folder>" }`,
  and listed first in that folder's `anchors`, so it heads the character's frame on the brand board.
- **Using it:** every image of the character passes the sheet as image 1, "Image 1 is the reference
  sheet of <name> from every side: draw exactly one <name>, in this scene's own pose", and the pose,
  the head's angle and the expression come from the scene's prompt, never from the sheet
  (`references/images.md` of the `studio` skill).
