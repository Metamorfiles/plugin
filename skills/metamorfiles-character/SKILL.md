---
name: metamorfiles-character
description: Use to design a character in Metamorfiles Studio (a mascot, a creature, a person, an object with a face) for a brand's logo or its imagery, and to draw an existing character in new poses and expressions that stay on model. Describes it in words from the brand's brief and direction, draws candidates alone on a transparent background, traces the one kept into a vector, and grows every later pose from that anchor. Use it whenever a brand needs a mascot or character, or the user asks for one doing something new, even if they only describe what it should look like.
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
- [ ] 2. The character described in words
- [ ] 3. The style, in words the image model follows
- [ ] 4. Candidates drawn together, alone, on transparent; traced
- [ ] 5. Checked: silhouette, 32 px, true to the description; the best one kept
- [ ] 6. Shown to the user; the kept one is the anchor
- [ ] 7. Poses and expressions from the anchor, checked side by side
- [ ] 8. Placed: in the logo, in the imagery, as the small mark
```

### 1. The bible

Write it before drawing anything:
- its **name**, and **what it is**: an animal, a creature, a person, an object that came alive;
- **why it is this brand's**: taken from the business's own world (its product, its place, a story
  the user told), never the category's stock mascot;
- its **body**, part by part, with how many of each and what does the work of hands: for Lumen's
  moth, "two antennae, four wings, six thin legs, no hands: it holds things between its front
  legs". Image models add the part a pose seems to need (an arm on a bird holding a cup, a third
  wing), so every prompt carries this line, and the reviewer counts each drawing against it;
- its **personality** in one sentence, and how it shows (a wink, a lean, a grin);
- its **palette**: the brand's hex values, each for what it paints;
- **what it never does**.

Keep it in the notes of the step's file (below its YAML) while a brand is made. Once the kit is
written, the character folder's `note` in DESIGN.md `assets` holds its one-line identity and body
line (400 characters at most).

### 2. The description

Who it is, its silhouette, its pose and its face, in words: `references/design.md`.

### 3. The style

The families seen in strong work, and what makes a character strong or weak:
`references/taste.md`. One rendering, chosen for the brand: one even line, a solid silhouette with cut-out features, flat
shapes with inner colours, or a thick outline with flat fills. Each has its words and its trace
colours: `references/styles.md`. The style's paragraph is pasted unchanged into every prompt.

### 4. Draw candidates

Draw three candidates together (each with `wait: false`, then `metamorfiles_image_status { id }` for
each), each from the same full prompt: the bible's one-line identity, its body line, the
description, the style paragraph and the palette. Front or three-quarter view, standing, a neutral pose. It is drawn alone, never with any word; the name is composed around it
(`metamorfiles-logo`). In a logo drawn whole, where the character and the name are drawn as one,
use this same description and style in its prompt. Each one traced:
`metamorfiles_generate_image { prompt, width: 1024, height: 1024, folder: "brand/process/logo", trace: { colors: [...] }, wait: false }`,
with `folder: "brand/process/imagery"` for the imagery step; the path it returns is the traced .svg.
The prompt's shape: `references/styles.md`.

### 5. Check and keep one

For each candidate:
- read the trace at full size (`metamorfiles_read_file`, `asImage`);
- run `metamorfiles_check_logo` on it: the blurred and one-colour versions show the silhouette, the
  32 px one whether its face still reads;
- compare it with the description.

Keep the one that holds the description and the personality best. When none does, change the
description, never add a correction about the failed drawing, and draw again.

### 6. The anchor

Show the kept one (in a new brand, as a logo route or an imagery option). The one the user approves
is the **anchor**: every later drawing of the character is made from it. Put it in the character's
folder as `01-front`:
`metamorfiles_import_image { path: "<the kept .svg>", name: "01-front", folder: "brand/<the character's folder>" }`.
Studio adds a short id to the name, so list the full file name it returns (`01-front-1a2b3c4d.svg`)
in the folder's `anchors`.

### 7. Poses and expressions

Each new pose is a new drawing of the character with the anchor attached as image 1 and its
identity repeated word for word, checked side by side with the anchor; a small change that keeps the
pose (an expression, a prop) is an edit, the anchor first in `references` with `edit: true`:
`references/poses.md`.

### 8. Where it goes

- **In a logo**: composed with the name set in type (`references/lockups.md` of
  `metamorfiles-logo`); its head or bust alone is the route's small mark, made from the logo (or,
  beside a name in type, the anchor) first in `references` with `edit: true`, never drawn on its own.
- **In the imagery**: its folder listed in DESIGN.md `assets` with `kind: character`, the files named
  in order with `name` (`01-front`, `02-three-quarter`, `03-wave`), so the brand board shows the
  turnaround and the poses.

## References

| Read | When |
| --- | --- |
| [references/taste.md](references/taste.md) | What a strong character looks like, and what goes wrong |
| [references/design.md](references/design.md) | Describing the character |
| [references/styles.md](references/styles.md) | Choosing its rendering, and the prompt |
| [references/poses.md](references/poses.md) | New poses and expressions that stay on model |

How to prompt each image model is in `references/images.md` of the `metamorfiles` skill, and how a
drawing is traced in `references/vector.md` of `metamorfiles-logo`. In an app that didn't load a
skill, read it with `metamorfiles_get_guide`.
