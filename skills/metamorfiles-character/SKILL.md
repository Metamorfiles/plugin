---
name: metamorfiles-character
description: Use to design a character in Metamorfiles Studio (a mascot, a creature, a person, an object with a face) for a brand's logo or its imagery, and to draw an existing character in new poses and expressions that stay on model. Designs it from its construction (shapes, proportions, one defining feature), draws candidates alone on a transparent background, traces the one kept into a vector, and grows every later pose from that anchor. Use it whenever a brand needs a mascot or character, or the user asks for one doing something new, even if they only describe what it should look like.
license: MIT
---

# Characters

A brand character is designed, not described. The difference between a mascot people remember and
one that looks generated is decided before any image is made: what it is built from, the one
feature that makes it itself, and what it leaves out. Then it is drawn alone, as a clean vector, and
every later drawing of it starts from the one the user approved.

## Checklist

Copy it into your notes and tick each step as you go:

```
- [ ] 1. The bible: who it is and why it is this brand's
- [ ] 2. The construction, in shapes and proportions
- [ ] 3. The style, in words the image model follows
- [ ] 4. Candidates drawn together, alone, on transparent; traced
- [ ] 5. Checked: silhouette, 32 px, the construction kept; the best one kept
- [ ] 6. Shown to the user; the kept one is the anchor
- [ ] 7. Poses and expressions from the anchor, checked side by side
- [ ] 8. Placed: in the logo, in the imagery, as the small mark
```

### 1. The bible

Write it before drawing anything:
- its **name**, and **what it is**: an animal, a creature, a person, an object that came alive;
- **why it is this brand's**: taken from the business's own world (its product, its place, a story
  the user told), never the category's stock mascot;
- its **personality** in one sentence, and how it shows (a wink, a lean, a grin);
- its **palette**: the brand's hex values, each for what it paints;
- **what it never does**.

Keep it in the notes of the step's file (below its YAML) while a brand is made, and in the
character folder's `note` in DESIGN.md `assets` once the kit is written.

### 2. The construction

How it is built, in measurable words: the primitives, the ratios, the face, the one defining
feature, the one asymmetry, what is left out, and a complexity budget it stays within. This is the
part that makes it good: `references/construction.md`.

### 3. The style

One rendering, chosen for the brand: one even line, a solid silhouette with cut-out features, flat
shapes with inner colours, or a thick outline with flat fills. Each has its words and its trace
colours: `references/styles.md`. The style's paragraph is pasted unchanged into every prompt.

### 4. Draw candidates

Draw three candidates together (`wait: false`), each from the same full prompt: the bible's one-line
identity, the construction, the style paragraph and the palette. Front or three-quarter view,
standing, a neutral pose. It is drawn alone, never with the brand's name or any word; the lettering
is set from a font and composed around it (`metamorfiles-logo`). Save each with
`trace: { colors: [...] }` into `brand/process/logo/` for a logo, or the imagery step's folder. The
prompt's shape: `references/styles.md`.

### 5. Check and keep one

For each candidate:
- read the trace at full size (`metamorfiles_read_file`, `asImage`);
- run `metamorfiles_check_logo` on it: the blurred and one-colour versions show the silhouette, the
  32 px one whether its face still reads;
- compare it with the construction: the ratios, the feature count, what was to be left out.

Keep the one that holds the construction and the personality best. When none does, change one line
of the construction, never add a correction about the failed drawing, and draw again.

### 6. The anchor

Show the kept one (in a new brand, as a logo route or an imagery option). The one the user approves
is the **anchor**: every later drawing of the character is made from it. Name its file
`01-front.png` or `01-front.svg` in the character's folder.

### 7. Poses and expressions

Each new pose is an edit of the anchor, with its identity repeated word for word, one change at a
time, and checked side by side with the anchor: `references/poses.md`.

### 8. Where it goes

- **In a logo**: composed with the name set in type (`references/lockups.md` of
  `metamorfiles-logo`); its head or bust alone is the route's small mark.
- **In the imagery**: its folder listed in DESIGN.md `assets` with `kind: character`, the files named
  in order (`01-front`, `02-three-quarter`, `03-wave`), so the brand board shows the turnaround and
  the poses.

## References

| Read | When |
| --- | --- |
| [references/construction.md](references/construction.md) | Designing the character's build: shapes, proportions, face, budget |
| [references/styles.md](references/styles.md) | Choosing its rendering, and the prompt |
| [references/poses.md](references/poses.md) | New poses and expressions that stay on model |

How to prompt each image model is in `references/images.md` of the `metamorfiles` skill, and how a
drawing is traced in `references/vector.md` of `metamorfiles-logo`. In an app that didn't load a
skill, read it with `metamorfiles_get_guide`.
