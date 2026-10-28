---
name: character
description: Designs a brand character (a mascot, a creature, a person, an object with a face) in Metamorfiles Studio and draws it on model in new poses and expressions, for a brand's logo or its imagery. Briefs it by who it is, its attitude, its face and its look, draws three designs as candidates alone on a transparent background, traces the one kept into a vector, and grows every later drawing from its character sheet. Use whenever a brand needs a mascot or character, or the user asks for one doing something new, even if they only describe what it should look like.
license: MIT
---

# Characters

A brand character is briefed the way an illustrator is briefed: who it is, what it's like, what it's
doing, its face, and the hand it's drawn in. The face carries the personality, so the brief says
how it looks in a few concrete terms. Three candidates are three designs, each with its own
brief. Then the character is drawn alone, traced, and every later drawing of it starts from the
character sheet the user approved.

## Checklist

Copy it into your notes and tick each step as you go:

```
- [ ] 1. The brief: who it is, why it's this brand's, what it's like, its face, what it's doing
- [ ] 2. The look: one rendering, chosen for this character, in the direction's words
- [ ] 3. Three designs, a brief each; drawn together, alone, on transparent; traced
- [ ] 4. Judged against the defaults; one kept, or the briefs changed
- [ ] 5. Shown to the user; the kept one is the anchor
- [ ] 6. The character sheet from the anchor: every side and four poses, the reference for every image of it
- [ ] 7. Placed: in the logo, in the imagery, as the small mark
```

### 1. The brief

Write the brief before drawing anything (`references/design.md`). Keep it in the notes of the step's
file (below its YAML) while a brand is made. Its **Character lines** are the character's fixed
description: who it is, its one feature, how its face is made, its palette, its look (line, fill and
rendering), and that nothing about it changes. Once the kit is written, they are the **Character** section of
`brand/imagery-guide.md`, which every later image of the character pastes whole with "nothing about
<name> changes" (`images.md` of the `studio` skill), and the character folder's `note` in
DESIGN.md `assets` (400 characters at most).

### 2. The look

One rendering for this character, from the chosen direction and from what the character needs: the
direction's words for how its figures are drawn set the hand (the line, its weight, the edges), and
the character is drawn in the brand's colours, filled. A drawing in one ink, a line with no fills,
is for a brief that asks for it; the logo's one-colour version comes from the full-colour drawing
(the `logo` skill, step 6). A figure with limbs and a face reads through an outline;
flat shapes with inner colours suit a simple, chunky body. The families, their words and their trace colours:
`references/styles.md`. Its style block is pasted unchanged into every prompt. What a strong
character looks like, and what goes wrong: `references/taste.md`.

### 3. Three designs, then draw

In the notes, name the character the category always gets (its codes in `research.md` of
the `new-brand` skill): that one is the default, not a candidate. Then write three briefs, each a
different design (`references/design.md`, "Three designs for one character"), and draw the three
together, each from its own prompt (`references/styles.md`, "The prompt"), each with `wait: false`,
then `metamorfiles_image_status { id }` for each:
`metamorfiles_generate_image { prompt, width: 1024, height: 1024, folder: "brand/process/logo", trace: { colors: [...] }, wait: false }`,
with `folder: "brand/process/imagery"` for the imagery step; the path it returns is the traced .svg.
In a logo drawn whole, where the character and the name are drawn as one, the same brief and look go
into its prompt (`references/drawn.md` of the `logo` skill).

### 4. Judge, and keep one

For each candidate:
- read the trace at full size (`metamorfiles_read_file`, `asImage`);
- run `metamorfiles_check_logo` on it: the blurred and one-colour versions show the silhouette;
- hold it against `references/taste.md`: a personality in the pose and the face, one feature that
  makes it itself, doing this business's thing; none of its defaults to recognise, unless the brief
  asked for it; and not a character another business could use unchanged.

Keep the one that is most a character. When a candidate lands on a default, change its brief and
draw it again (`references/design.md`, "When a drawing misses"). When the user turns the candidates down, the briefs are rewritten: the attitude,
the face and the idea, keeping what they liked; a new look alone changes nothing they objected to.

### 5. The anchor

Show the kept one (in a new brand, as a logo route or an imagery option). The one the user approves
is the **anchor**: every later drawing of the character is made from it. Put it in the character's
folder as `01-front`:
`metamorfiles_import_image { path: "<the kept .svg>", name: "01-front", folder: "brand/<the character's folder>" }`.
Studio adds a short id to the name, so list the full file name it returns (`01-front-1a2b3c4d.svg`)
in the folder's `anchors`.

### In a new brand

Only when `brand/process/logo.md` has `mascot: true` at the top (the brief asks for a mascot). The mascot is decided once the logo is chosen, from the logo the user chose, never from a route they
passed over unless they ask for it. Which case it is shows in `brand/process/logo.md`: the chosen
route has `mascot: true` when its character is in the logo.

- **The chosen logo carries the character:** that character is the mascot, so there is nothing to
  choose. Draw it in one to three poses (`references/poses.md`, from its traced drawing in the logo)
  and its sheet (step 6), write the poses as `characters` and the sheet as `sheet`, have the
  reviewer check them, and ask with `metamorfiles_ask_user { step: "character" }`: the user approves
  them with "Use these", like the imagery.
- **Otherwise:** write this brand's briefs (step 1) and draw three designs (step 3), each with the
  chosen logo as image 1, so it is drawn in its hand: "Image 1 is the brand's chosen logo: take its
  drawing hand, line weight, corners and colours, never its letters or its layout."
  `metamorfiles_generate_image { prompt, references: ["brand/process/logo/<chosen>.svg"], width: 1024, height: 1024, folder: "brand/process/logo", trace: { colors: [...] }, wait: false }`
  Write them as `characters`, each `{ file, title }` and one `recommended: true`, have the reviewer
  check them, and ask with `metamorfiles_ask_user { step: "character" }`. The one chosen
  (`character`) is the anchor: draw its sheet from it (step 6) and have the reviewer check it.

Studio checks that each was drawn from the chosen logo, and the sheet from the mascot. The small mark
comes next: step 8 of the `logo` skill.

### 6. The character sheet

As soon as the anchor is approved (in a new brand, the mascot is chosen), draw the
**character sheet**: one image of the character from every side and in four poses, made in one
generation so all eight match. It is the character's reference from then on: every image of it,
any scene, any pose, any movement, passes the sheet as image 1, and a model that sees the character
from every side learns the character instead of copying one drawing. The grid, the prompt, the check
and where it goes: `references/sheet.md`.

A single new drawing for the brand's files (a pose for a sticker) is made from the sheet too:
`references/poses.md`. The small mark is made as step 8 of the `logo` skill says.

### 7. Where it goes

- **In a logo**: composed with the name set in type (`references/lockups.md` of the `logo` skill).
- **As the small mark**: its head or bust, made as step 8 of the `logo` skill says.
- **In the imagery**: its folder listed in DESIGN.md `assets` with `kind: character`, the sheet first
  in its `anchors` and the anchor drawing second, so the brand board shows the sheet first.

## References

| Read | When |
| --- | --- |
| [references/taste.md](references/taste.md) | What a strong character looks like, and what goes wrong |
| [references/design.md](references/design.md) | Writing the brief |
| [references/styles.md](references/styles.md) | Choosing its rendering, and the prompt |
| [references/sheet.md](references/sheet.md) | The character sheet: its grid, the prompt, the check, where it goes |
| [references/poses.md](references/poses.md) | A single new drawing for the brand's files, from the sheet |

How to prompt each image model is in `references/images.md` of the `studio` skill, and how a
drawing is traced in `references/vector.md` of the `logo` skill. In an app that didn't load a
skill, read it with `metamorfiles_get_guide`.
