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
| The turnaround, standing at rest with its everyday face | front | three-quarter, facing left | side profile, facing left | back |
| The range, each with its own mood | walking | sitting, holding a small object from the brand's world | cheering | thinking, sceptical |

The top row gives every angle of the head and body, with the character's everyday face: the look
it has when nothing is happening, said in a few words from who it is (a blank face would teach the
model a blank character); the bottom one gives motion, a seated body, a held object and three
expressions. Each figure is named by what it is doing and, where the action doesn't say it, how it
feels: the drawing finds the limbs and the face, and a character built without hands does each with
what it has. Image 1 is named by what the model takes from it, the character, never its pose: any
figure the prompt leaves without its own face and action is copied from image 1, arms and expression
included.
The one object is there because holding is that figure's action, and it is said not to be part of
the character.

## The prompt

The chosen drawing first, the prompt in the labelled parts of `references/images.md` of the `studio`
skill:

```
Image 1 is <name>, the brand's character, in one drawing: take who it is from it exactly, its body,
how its face is built, its colours and its line. Its pose and expression are that drawing's alone.
Draw a character sheet of <name>: one landscape image, four columns and two rows, eight full-body
figures of the same <name> at the same scale on one shared ground line, evenly spaced, on plain
<paper hex>, no labels, numbers or borders.
Top row, standing at rest, with <name>'s everyday face, <that face in a few words, from who it is>: front;
three-quarter facing left; side profile facing left; back.
Bottom row: walking, <its mood>; sitting, holding a small object from the brand's world, which is not
part of <name>, <its mood>; cheering; thinking, sceptical.
<name>: <its Character lines>; nothing about <name> changes.
Style: <the style block>.
Constraints: <name>'s colours and proportions never change between figures; exactly eight figures;
nothing added but the one small object; no text.
```

`metamorfiles_generate_image { prompt, width: 1536, height: 1024, references: ["<the chosen drawing>"], folder: "brand/process/character", name: "<name>-sheet" }`

It stays raster: a reference, not artwork.

The reviewer looks at it before anything is built on it (the `review` skill).

## Where it goes

- **While a brand is made:** on the logo step, beside the chosen logo, as its sheet:
  `metamorfiles_change_step { step: "logo", changes: [{ do: "sheet", file: "<the path it returned>", name: "<name>" }] }`.
  An edit of the sheet under its own name takes its place by itself.
  The board shows it under the logos, with Edit.
- **In the kit:** brought into the character's folder,
  `metamorfiles_import_image { path: "<the sheet>", name: "00-sheet", folder: "brand/<the character's folder>" }`,
  and listed first in that folder's `anchors`, so it heads the character's frame on the brand board.
- **Using it:** every image of the character passes the sheet as image 1, and the pose and the
  expression come from the scene's prompt alone (`references/images.md` of the `studio` skill).
