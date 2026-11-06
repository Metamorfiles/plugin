# Palette and type

Read this for the direction step of `SKILL.md`: each direction's palette and faces, taken from its
references and set in the brand's own words.

## Palettes

Each direction has a complete palette, not a swatch list:
- **Colours named from the brand's world** (`paper`, `ink`, `clay`), in the
  order they are used, each with its **share**, as the direction's references use them.
- **Text pairs work:** the ink on the ground at 4.5:1 or more, the ground on the dark colour too.
  Check the accent: if it can't carry text, say so, and keep it for shapes.
- **Differ in logic, not in hue.** Each palette's logic comes from its path's source: the place's
  own colours, the product's material, the category's habit reversed. Two palettes one tint apart
  are one direction.

## Type

- **Each direction names its faces and the job of each,** chosen as `fonts.md` says ("Choosing"),
  and the directions' faces differ. The logo's lettering is made on the logo step (the `logo` skill).
- Add each face with `metamorfiles_add_font { family: "<family>" }` before you write the option, and
  give the option the file it returned.
- **Set them in the brand's words,** the option's `sample`: a line from the brief or the brand's
  voice, in the language the brand writes in, so the faces are judged on what they will set.

## The option

With its references from `research.md`, a direction is one option. Each file is the path the tool
returned, as it returned it. One direction for Lumen, from the path "every ingredient listed"; a
direction proposes its own colours and names, so this one isn't the example kit's palette:

```yaml
  - id: label
    title: The full label
    line: Lumen lists every ingredient, so the brand reads like an honest label, with the amber of its bottles as the one signal.
    recommended: true
    files:
      - { file: brand/process/references/label-works/1.jpg, caption: "Label Works · the list itself set as the design" }
      - { file: brand/process/references/glass-study/2.jpg, caption: "Glass Study · one colour taken from the product's own glass" }
    colors:
      - { name: Tile, hex: "#f4f3ef", share: 60 }
      - { name: Ink, hex: "#1b1d1f", share: 25 }
      - { name: Grout, hex: "#c9cac6", share: 10 }
      - { name: Amber, hex: "#b4621b", share: 5 }
    fonts:
      - { family: Host Grotesk, file: brand/fonts/HostGrotesk.woff2, role: "everything, in a few sizes: plain, so every line reads as fact" }
      - { family: Chivo Mono, file: brand/fonts/ChivoMono.woff2, role: "the ingredient lists and the minutes, set like a label's data" }
    sample: Two minutes in the morning. Then get on with your day.
```

The user may ask for the palette of one direction with the type of another: write that mix as the
option, note what came from where under the YAML, and ask again.
