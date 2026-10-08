---
name: metamorfiles-character
description: Use to design a character in Metamorfiles Studio (a mascot, a creature, a person, an object with a face) for a brand's logo or its imagery, and to draw an existing character in new poses and expressions that stay on model. Briefs it by who it is, its attitude, its face and its look, draws three ideas as candidates alone on a transparent background, traces the one kept into a vector, and grows every later drawing from its character sheet. Use it whenever a brand needs a mascot or character, or the user asks for one doing something new, even if they only describe what it should look like.
license: MIT
---

# Characters

A brand character is briefed the way an illustrator is briefed: who it is, what it's like, what it's
doing, its face, and the hand it's drawn in. The face carries the personality, so the brief says
how it looks in a few concrete terms; left to choose, the model draws its stock face (closed happy
crescents and a grin) on every character. Three candidates are three ideas, each with its own
brief. Then the character is drawn alone, traced, and every later drawing of it starts from the
character sheet the user approved.

## Checklist

Copy it into your notes and tick each step as you go:

```
- [ ] 1. The brief: who it is, why it's this brand's, what it's like, its face, what it's doing
- [ ] 2. The look: one rendering, chosen for this character, in the direction's words
- [ ] 3. Three ideas, a brief each; drawn together, alone, on transparent; traced
- [ ] 4. Judged against the defaults; one kept, or the briefs changed
- [ ] 5. Shown to the user; the kept one is the anchor
- [ ] 6. The character sheet from the anchor: every side and four poses, the reference for every image of it
- [ ] 7. Placed: in the logo, in the imagery, as the small mark
```

### 1. The brief

Write it before drawing anything, as `references/design.md` shows:
- its **name**, and **what it is**: an animal, a creature, a person, an object that came alive;
- **why it is this brand's**: taken from the business's own world (its product, its place, a story
  the user told), never the category's stock mascot;
- **what it's like**, as behaviour: how it carries itself, what it's feeling, and the one thing that
  makes it itself (a feature, a habit, a prop it's never without);
- **its face**, from what it's like: how its eyes, brows and mouth look at rest, in three to five
  concrete terms (half-lidded, one brow higher, eyes looking off to one side, a lopsided mouth),
  with one thing uneven. Eyes open, unless sleep is the idea. Words like "cheeky grin" or "happy
  eyes" leave the model its stock face;
- **what it's doing**: this business's thing, with the business's own object, in one gesture; the
  object smaller than the character, and no scene around it (no wave, ground or splash);
- **what it leaves out**: only what the brief and the category's codes rule out (`research.md` of
  `metamorfiles-brand-creation`). A list of bans invented against clichés leaves the model a thing
  standing still, and names the very things it then draws.

An object that comes alive is built from its own shape (a bottle's cap its hat, a bun's pleats its
hair, a fruit's stem a quiff), never a smiling lump with a face drawn on.

Keep it in the notes of the step's file (below its YAML) while a brand is made. Once the kit is
written, its two or three lines, the face included, are the **Character** section of
`brand/imagery-guide.md`, which every later image of the character pastes whole with "nothing about
<name> changes" (`images.md` of the `metamorfiles` skill), and the character folder's `note` in
DESIGN.md `assets` (400 characters at most).

### 2. The look

One rendering for this character, from the chosen direction and from what the character needs: the
direction's words for how its figures are drawn set the hand (the line, its weight, the edges), and
the character is drawn in the brand's colours, filled. A drawing in one ink, a line with no fills,
is for a brief that asks for it; the logo's one-colour version comes from the full-colour drawing
(`metamorfiles-logo`, step 5). A figure with limbs and a face holds at 32 px through an outline;
flat shapes with inner colours suit a simple, chunky body. The families, their words and their trace colours:
`references/styles.md`. The look's paragraph is pasted unchanged into every prompt. What a strong
character looks like, and what goes wrong: `references/taste.md`.

### 3. Three ideas, then draw

In the notes, name the character the category always gets (its codes in `research.md` of
`metamorfiles-brand-creation`): that one is the default, not a candidate. Then write three short
briefs of the same character, each a different idea: its attitude, its face and what it's doing
change; its name, what it is, its build (a body with legs has them in all three), the look and the
palette stay. One prompt drawn three times gives
three copies of one idea, and the user is left nothing to choose between.

Draw the three together (each with `wait: false`, then `metamorfiles_image_status { id }` for each),
each from its own prompt (`references/styles.md`, "The prompt"). A reference image goes in only
when it shows a figure drawn in the chosen look, as a style reference; the model copies the idea
and layout of what it's shown, so none is better than one in another hand. It is drawn alone, never
with any word; the name is composed around it (`metamorfiles-logo`). Each one traced:
`metamorfiles_generate_image { prompt, width: 1024, height: 1024, folder: "brand/process/logo", trace: { colors: [...] }, wait: false }`,
with `folder: "brand/process/imagery"` for the imagery step; the path it returns is the traced .svg.
In a logo drawn whole, where the character and the name are drawn as one, the same brief and look go
into its prompt (`references/drawn.md` of `metamorfiles-logo`).

### 4. Judge, and keep one

For each candidate:
- read the trace at full size (`metamorfiles_read_file`, `asImage`);
- run `metamorfiles_check_logo` on it: the blurred and one-colour versions show the silhouette, the
  32 px one whether its face still reads;
- hold it against `references/taste.md`: a personality in the pose and the face, one feature that
  makes it itself, doing this business's thing; none of its defaults to recognise, unless the brief
  asked for it; and not a character another business could use unchanged.

Keep the one that is most a character. When a candidate lands on a default, its brief is what's
wrong, not the model: change that brief (never describe the failed drawing back to the model) and
draw it again. When the user turns the candidates down, the briefs are rewritten: the attitude,
the face and the idea, keeping what they liked; a new look alone changes nothing they objected to.

### 5. The anchor

Show the kept one (in a new brand, as a logo route or an imagery option). The one the user approves
is the **anchor**: every later drawing of the character is made from it. Put it in the character's
folder as `01-front`:
`metamorfiles_import_image { path: "<the kept .svg>", name: "01-front", folder: "brand/<the character's folder>" }`.
Studio adds a short id to the name, so list the full file name it returns (`01-front-1a2b3c4d.svg`)
in the folder's `anchors`.

### 6. The character sheet

As soon as the anchor is approved (in a new brand, the logo with the character is chosen), draw the
**character sheet**: one image of the character from every side and in four poses, made in one
generation so all eight match. It is the character's reference from then on: every image of it,
any scene, any pose, any movement, passes the sheet as image 1, and a model that sees the character
from every side learns the character instead of copying one drawing. The grid, the prompt, the check
and where it goes: `references/sheet.md`.

A single new drawing for the brand's files (a pose for a sticker, the small mark's bust) is made
from the sheet too: `references/poses.md`.

### 7. Where it goes

- **In a logo**: composed with the name set in type (`references/lockups.md` of
  `metamorfiles-logo`); its head or bust alone is the route's small mark, made from the logo (or,
  beside a name in type, the anchor) first in `references` with `edit: true`, never drawn on its own.
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

How to prompt each image model is in `references/images.md` of the `metamorfiles` skill, and how a
drawing is traced in `references/vector.md` of `metamorfiles-logo`. In an app that didn't load a
skill, read it with `metamorfiles_get_guide`.
