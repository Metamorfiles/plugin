# Poses and expressions

A single new drawing of the character for the brand's files, such as a pose for a sticker. Every
scene of it in a post is an image, made from the character sheet too (`references/sheet.md`). A new
drawing stays on model when it starts from the sheet, repeats its Character lines word for word
(`SKILL.md`, step 1), and states its own pose and expression.

## A new pose

A new drawing of the character, with the sheet attached first in `references`:
`metamorfiles_generate_image { prompt, references: ["<the character sheet>"], width: 1024, height: 1024, folder: "brand/<the character's folder>", name: "02-stirring", trace: { colors: [...] } }`,
with `folder: "brand/process/character"` while a brand is made, before the kit lists its folder.

```
Image 1 is the reference sheet of the character from every side: draw exactly one of it, in a new
pose, the same character in every way.
Who it is: <the Character lines>.
Nothing about it changes.
The pose: <in one sentence, what it is doing and feeling>.
<Only when the pose's idea needs a prop: it holds <the brand's own object>, which is not part of it.>
Alone on a transparent background, flat colours only, no letters, no ground line or shadow.
```

The pose line says what the character is doing and feeling, never where its limbs go: the drawing
finds them (`design.md`, "What the brief says"). In any drawing of the character, a candidate or a
pose, a prop is named only when the drawing's idea needs it (the brand's own object), and the prompt
says it isn't part of the character, so the model doesn't merge the two and carry the prop into
every later drawing.

A new pose is drawn anew from the sheet, never as an edit (why: `references/images.md` of the
`studio` skill, "Edit or redraw"). An edit (`edit: true`, the image to change first in `references`, the
prompt starting "Edit image 1:", then what stays exactly as it is) is only for a change that keeps
the pose: an expression, a prop swapped, a colour fixed.

- **One change per drawing.** A new pose, or a new expression, or a prop: never two at once.
- **Always from the sheet**: which images may be references is `references/images.md` of the `studio` skill's ("The prompt").
- **Several at once**: start each with `wait: false`, each from the sheet, then wait for each with
  `metamorfiles_image_status { id }`.
- Save each into the character's folder with the same `trace` colours as the chosen drawing.
- **Reviewed before it's delivered**: outside a new brand, each new pose waits in the `handover`
  queue (the `review` skill; the reviewer reads it with `metamorfiles_review_queue { for: "handover" }`),
  and Studio holds the task until it passes.

## The set

The sheet already is the proof that the character holds across poses, its turnaround and its range.
Draw single poses only for what the brand uses as artwork on its own (a sticker, a sign), each doing
one of the brand's own things. An expression on a pose already drawn is an edit: "Change only the
expression: surprised, round eyes and a small O mouth".

## Files

In the character's folder, numbered in the order the board shows them, by `name`: `00-sheet`,
`01-front` (the chosen drawing), `02-stirring`; Studio adds a short id to each. The sheet and the
chosen drawing are listed, in that order, by their full file names in the folder's `anchors`.
