# The look

Read this for the second step of `create.md`: the palette and the type, taken from the chosen
territory and set in the brand's own words.

## Palettes

Two or three options, each a complete palette, not a swatch list:
- **Four or five colours, named from the brand's world** (`paper`, `ink`, `clay`, never
  `primary-1`), in the order they are used, each with its **share**: a ground at about half, an ink
  at a quarter, one accent rationed to a tenth or less, and a supporting colour.
- **One accent does the recognising.** Say what it is for (the one thing each piece is about) and
  what it is never for (small text, a whole background).
- **Text pairs work:** the ink on the ground at 4.5:1 or more, the ground on the dark colour too.
  Check the accent: if it can't carry text, say so, and keep it for shapes.
- **Differ in logic, not in hue.** One option warm and light, one dark or saturated, one built from the
  place or the product. Two palettes one tint apart are one option.
- Avoid the generated-brand palettes unless the idea needs them: cream with a high-contrast serif
  and terracotta, indigo to violet, navy with electric blue, beige with sage, black with acid green.

## Type

Each palette comes with a pairing, and the pairings differ too:
- **A face with character for the one line that matters** (headlines, product names), and **a quiet
  workhorse for everything that informs.** Two faces; three only when the wordmark's face is a
  third, and then it is never set as text.
- Choose the faces from `fonts.md`, by what the territory needs. Add each with
  `metamorfiles_add_font` before you write the option.
- **Every face covers the languages the brand writes in.** A business in Seoul posts in Korean, one in
  Athens in Greek: each face has those letters, or the pairing names the face that sets them (a
  Korean face beside a Latin display face, sized to sit together). Set the option's `sample` in that
  language too, so the board shows it.
- **Set them in the brand's words,** the option's `sample`: a line from the brief or the brand's
  voice, never the alphabet or "Lorem".

## The option

```yaml
  - id: morning
    title: Morning shelf
    line: Warm paper and ink with one clay accent; the calm of an early bathroom shelf.
    recommended: true
    colors:
      - { name: Paper, hex: "#f6f1ea", share: 55 }
      - { name: Ink, hex: "#1f1a17", share: 25 }
      - { name: Sand, hex: "#e9dccb", share: 12 }
      - { name: Clay, hex: "#c9785b", share: 8 }
    fonts:
      - { family: Fraunces, file: fonts/Fraunces.woff2, role: headlines }
      - { family: Inter, file: fonts/Inter.woff2, role: everything that informs }
    sample: Two minutes in the morning. Then get on with your day.
```

The user may take a palette from one option and a pairing from another; the step's `chosen` names
the option whose palette they took, and the notes under the YAML record the rest.
