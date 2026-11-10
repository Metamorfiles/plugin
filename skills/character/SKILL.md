---
name: character
description: Designs a brand character (a mascot, a creature, a person, an object with a face) in Metamorfiles Studio and draws it on model in new poses and expressions, for a brand's logo or its imagery. Briefs it by who it is, its attitude, its face and its look; when the character is chosen on its own, draws three designs alone on a transparent background, traced into vectors, for the user to choose from, and when a chosen logo carries it, takes it from the logo; then grows every later drawing from its character sheet. Use whenever a brand needs a mascot or character, or the user asks for one doing something new, even if they only describe what it should look like.
license: MIT
---

# Characters

A brand character is briefed the way an illustrator is briefed: who it is, what it's like, what it's
doing, its face, and the hand it's drawn in. The face carries the personality, so the brief says
how it looks in a few concrete terms. Three candidates are three designs, each with its own
brief, and the user chooses. Then every later drawing of it starts from the character sheet.

## Checklist

Copy it into your notes and tick each step as you go:

```
- [ ] 1. The brief: who it is, why it's this brand's, what it's like, its face, what it's doing
- [ ] 2. The look: one rendering, chosen for this character, in the direction's words
- [ ] 3. Chosen on its own: three designs, a brief each; drawn together, alone, on transparent; traced. Carried by the chosen logo: taken from it ("In a new brand"). For a brand that has its kit: drawn into the character's own folder ("For a brand that has one")
- [ ] 4. Reviewed, then shown to the user; the one chosen, or the one taken from the logo, is the chosen drawing
- [ ] 5. The character sheet from the chosen drawing: every side and four poses, the reference for every image of it
- [ ] 6. Placed: in the logo, in the imagery
```

### 1. The brief

Write the brief before drawing anything (`references/design.md`). Keep it in the notes of the step's
file (below its YAML) while a brand is made. From it come the **Character lines**, the character's
fixed description: who it is, the one feature that makes it itself, how its face is made (the shape
of its eyes and pupils, its brows, its mouth), its markings, its palette, its look (line, fill and
rendering), and that nothing about it changes. The expression and the head angle are each
drawing's own, since a fixed one makes every drawing the same face. They are pasted word for word
into every prompt for this character: a synonym is a different instruction. A character that
already exists in a drawing (one in the user's own logo) needs no brief: its Character lines say
what that drawing shows, part by part, and add nothing, since every word becomes a part of each
drawing of it. Once the
kit is written, they are the **Character** section of `brand/imagery-guide.md` (`images.md` of the
`studio` skill) and the character folder's `note` in DESIGN.md `assets` (400 characters at most).

### 2. The look

One rendering for this character, from the chosen direction and from what the character needs: the
direction's words for how its figures are drawn set the hand (the line, its weight, the edges), and
the character is drawn in the brand's colours, filled. A drawing in one ink, a line with no fills,
is for a brief that asks for it; the logo's one-colour version comes from the full-colour drawing
(the `logo` skill, step 6). The families, which suits which body, their words and their trace
colours: `references/styles.md`. Its style block is pasted unchanged into every prompt. What a
strong character looks like, to read while writing the brief: `references/taste.md`; the drawing is
the reviewer's to judge.

### 3. Three designs, then draw

In the notes, name the character the category always gets (its codes in `research.md` of
the `new-brand` skill), so the three designs start from what only this business has instead. Then
write three briefs, each a
different design (`references/design.md`, "Three designs for one character"), and draw the three
together, each from its own prompt (`references/styles.md`, "The prompt"), each with `wait: false`,
then `metamorfiles_image_status { id }` for each:
`metamorfiles_generate_image { prompt, width: 1024, height: 1024, folder: "brand/process/logo", trace: { colors: [...] }, wait: false }`;
the path it returns is the traced .svg.

Three designs are drawn where the character is chosen on its own: a new brand's mascot after the
logo choice ("In a new brand"), or a character the user asks for. Inside a logo route, before the
choice, a mascot is part of that route's one idea: one design, briefed here (steps 1 and 2) and drawn
once as the logo skill draws the route's part, with the references it gives
(`references/symbol.md` of the `logo` skill for a name set in type, `references/drawn.md` of the
`logo` skill for a logo drawn whole).

### 4. The chosen drawing

Have the reviewer look at the three (the `review` skill), then show them all to the user (in a new
brand, as "In a new brand" says). The one the user chooses is the **chosen drawing**:
every later drawing of the character is made from it, through its sheet. When a drawing or all three
are sent back: `references/design.md`, "When a drawing is sent back". Put the chosen drawing in the
character's folder as `01-front`:
`metamorfiles_import_image { path: "<the chosen .svg>", name: "01-front", folder: "brand/<the character's folder>" }`.
Studio adds a short id to the name, so list the full file name it returns (`01-front-1a2b3c4d.svg`)
in the folder's `anchors`.

### In a new brand

When the brand has a mascot (step 8 of the `logo` skill says when). The mascot is decided once the
logo is chosen, from the logo the user chose, never from a route they passed over unless they ask
for it. Which case it is shows in `brand/process/logo.md`: the chosen route has `mascot: true` when
its character is in the logo.

- **The chosen logo carries the character:** that character is the mascot, so there is nothing to
  choose. Its drawing is taken from the chosen logo, a planned step (step 8 of the `logo` skill).
  In a logo built from parts, the character's own part file is it, and nothing is cut. In
  a drawn logo, it is cut out of the logo's own file as a part taken out (`references/drawn.md` of
  the `logo` skill, "Other versions of it"):
  `metamorfiles_make_logo_variant { file: "brand/process/logo/<chosen>.svg", output: "brand/process/logo/<name>-character.svg", keep: { x, y, width, height } }`.
  Where the letters touch it, so no box holds it alone, the image model draws it out of the logo as
  an edit, the logo's file first in `references`, the prompt asking for the character alone, whole
  and exactly as the logo draws it, traced in the logo's colours. That file is the chosen drawing:
  draw the sheet from it (step 5), write it as `sheet` and have the reviewer pass it; then one to
  three poses from the passed sheet (`references/poses.md`). Write the poses as `characters`, have
  the reviewer check them, and ask with `metamorfiles_ask_user { step: "character" }`: the user
  approves them with "Use these", like the imagery.
- **Otherwise:** write this brand's briefs (step 1) and draw three designs (step 3), each with the
  chosen logo as image 1, so it is drawn in its hand: "Image 1 is the brand's chosen logo: take its
  drawing hand, line weight, corners and colours, never its letters or its layout."
  `metamorfiles_generate_image { prompt, references: ["brand/process/logo/<chosen>.svg"], width: 1024, height: 1024, folder: "brand/process/logo", trace: { colors: [...] }, wait: false }`
  Write them as `characters`, each `{ file, title, line }` (the line: the idea, in the user's words)
  and one `recommended: true`, have the reviewer check them, and ask with
  `metamorfiles_ask_user { step: "character" }`. The one chosen (`character`) is the chosen drawing:
  draw its sheet from it (step 5) and have the reviewer check it.

Studio checks that each was drawn from the chosen logo, and the sheet from the mascot. The imagery
comes next: step 3 of the `new-brand` skill.

### For a brand that has one

A character the user asks for once the brand has its kit lives in its own folder of the kit from
the start, so the board shows it and the kit's review sees it:

1. Its look (step 2) comes from `brand/imagery-guide.md`. Draw the three designs (step 3) into the
   character's folder, each with the brand's logo file as image 1, as "In a new brand" says:
   `metamorfiles_generate_image { prompt, references: ["brand/logos/logo.svg"], width: 1024, height: 1024, folder: "brand/<name>", name: "<design's title>", trace: { colors: [...] }, wait: false }`.
2. List the folder in DESIGN.md `assets` (`kind: character`, its Character lines as `note`). The
   three then show on its frame and wait in the kit's queue, `metamorfiles_review_queue { for: "handover" }`
   (the `review` skill).
3. Once they pass, the user chooses:
   `metamorfiles_ask_user { task, role: "designer", question: "Which one is <name>?", options: [{ label: "<title>", recommended: true }, { label: "<title>" }, { label: "<title>" }] }`.
   The two passed over go to the trash, where they can be brought back:
   `metamorfiles_write_file { path: "brand/<name>/<file>", remove: true }`.
4. The sheet from the chosen drawing (step 5), into the folder as `00-sheet` (`references/sheet.md`),
   reviewed the same way; then `anchors` as step 6 says. New poses come from the sheet
   (`references/poses.md`).

### 5. The character sheet

As soon as the chosen drawing is there (in a new brand: the mascot chosen, or the character taken
from the chosen logo), draw the
**character sheet**: one image of the character from every side and in four poses, made in one
generation so all eight match. It is the character's reference from then on: every image of it,
any scene, any pose, any movement, passes the sheet as image 1, and a model that sees the character
from every side learns the character instead of copying one drawing. The grid, the prompt and
where it goes: `references/sheet.md`. A single new drawing for the brand's files (a pose for a
sticker) is made from the sheet too: `references/poses.md`.

### 6. Where it goes

- **In a logo**: composed with the name set in type (`references/lockups.md` of the `logo` skill).
- **In the imagery**: its folder listed in DESIGN.md `assets` with `kind: character`, the sheet first
  in its `anchors` and the chosen drawing second, so the brand board shows the sheet first.

## References

| Read | When |
| --- | --- |
| [references/taste.md](references/taste.md) | What a strong character looks like |
| [references/design.md](references/design.md) | Writing the brief, and changing it when a drawing is sent back |
| [references/styles.md](references/styles.md) | Choosing its rendering, and the prompt |
| [references/sheet.md](references/sheet.md) | The character sheet: its grid, the prompt, where it goes |
| [references/poses.md](references/poses.md) | A single new drawing for the brand's files, from the sheet |

How to prompt each image model is in `references/images.md` of the `studio` skill, and how a
drawing is traced, and what to do with the trace's result, in `references/vector.md` of the `logo`
skill. In an app that didn't load a skill, read it with `metamorfiles_get_guide`.
