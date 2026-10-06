# Palette and type

Read this for the direction step of `SKILL.md`: each direction's palette and type pairing, taken
from its references and set in the brand's own words.

## Palettes

Each direction has a complete palette, not a swatch list:
- **Colours named from the brand's world** (`paper`, `ink`, `clay`, never `primary-1`), in the
  order they are used, each with its **share**, as the direction's references use them.
- **Text pairs work:** the ink on the ground at 4.5:1 or more, the ground on the dark colour too.
  Check the accent: if it can't carry text, say so, and keep it for shapes.
- **Differ in logic, not in hue.** One direction warm and light, one dark or saturated, one built
  from the place or the product. Two palettes one tint apart are one direction.
- Avoid the generated-brand palettes unless the idea needs them: cream with a high-contrast serif
  and terracotta, indigo to violet, navy with electric blue, beige with sage, black with acid green.

## Type

Each direction comes with a pairing, and the pairings differ too:
- **A face with character for the one line that matters** (headlines, product names), and **a quiet
  workhorse for everything that informs.** Two faces for text; the logo gets its own face on the
  logo step (the `metamorfiles-logo` skill), never set as text.
- Choose the faces from `fonts.md`, by what the direction needs. Add each with
  `metamorfiles_add_font { family: "Fraunces" }` before you write the option, and give the option
  the file it returned (a static family has one per weight, such as `brand/fonts/Anton-400.woff2`).
- **Every face covers the languages the brand writes in.** A business in Seoul posts in Korean, one in
  Athens in Greek: each face has those letters, or the pairing names the face that sets them (a
  Korean face beside a Latin display face, sized to sit together). Set the option's `sample` in that
  language too, so the board shows it.
- **Set them in the brand's words,** the option's `sample`: a line from the brief or the brand's
  voice, never the alphabet or "Lorem".

## The option

With its references from `research.md`, a direction is one option. Each file is the path the tool
returned, as it returned it:

```yaml
  - id: morning
    title: Morning shelf
    line: Warm paper and ink with one clay accent; the calm of an early bathroom shelf.
    recommended: true
    files:
      - { file: brand/process/references/shelf-study/1.jpg, caption: "Shelf study · ink type on warm paper" }
      - { file: brand/process/references/linen-co/2.jpg, caption: "Linen Co · one accent, rationed" }
    colors:
      - { name: Paper, hex: "#f6f1ea", share: 55 }
      - { name: Ink, hex: "#1f1a17", share: 25 }
      - { name: Sand, hex: "#e9dccb", share: 12 }
      - { name: Clay, hex: "#c9785b", share: 8 }
    fonts:
      - { family: Fraunces, file: brand/fonts/Fraunces.woff2, role: headlines }
      - { family: Inter, file: brand/fonts/Inter.woff2, role: everything that informs }
    sample: Two minutes in the morning. Then get on with your day.
```

The user may ask for the palette of one direction with the type of another: write that mix as the
option, note what came from where under the YAML, and ask again.
