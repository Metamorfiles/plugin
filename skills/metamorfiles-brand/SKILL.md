---
name: metamorfiles-brand
description: Use when the user wants to set up, import or change the brand in a Metamorfiles project, for example from their website, their app's theme or styles, a brand guidelines PDF, logos or reference images. Translates the brand into brand/DESIGN.md (the design.md format), from which Studio generates the brand tokens and the brand board.
---

# Translate the brand

The brand kit is `brand/DESIGN.md`, in Google Labs' design.md format (version `alpha`, github.com/google-labs-code/design.md), so it also works in Stitch and other design tools. Studio checks it, runs the official design.md linter on it, and generates from it the `--brand-*` tokens in `brand/brand.css` and the `brand-board` template.

Three principles:
- **Translate, never invent.** Every value comes from a source. You assign meaning and write intent; you never make up a color, size, component, rule or claim.
- **Record where everything came from**, in `## Sources`, and what's missing, in `## Known gaps`.
- **Logos are sacred.** Only official files and the brand's own variants. Anything generated needs the user's approval first.

## Steps

1. Call `get_project` and read `brand`. When you rebuild an existing kit, take every value again from the brand's sources as below; never copy values from the previous DESIGN.md.
2. Gather the sources: the app's theme (for example a shadcn or Tailwind `globals.css`), the logo files or logo component, the live website, guidelines, fonts and reference images. Ask for anything essential that's missing, such as the logo or the font files.
3. Copy the files into the project, unchanged:
   - fonts as WOFF2 in `brand/fonts/` (local files only; for Google Fonts, download the WOFF2 files or ask the user to);
   - official logos in `brand/logos/`;
   - reference images in `brand/refs/`;
   - the files you translate from (theme CSS, a logo component, a guidelines PDF) in `brand/sources/`, so the values can be checked later.
4. Take the values from each source as described below.
5. Write `brand/DESIGN.md` with `write_file`, following the template.
6. Read the check in the result. Fix every error and write again. Warnings starting with `design.md lint` come from the official linter: fix them, or leave them only when the Sources explain why.
7. Call `render_preview` on `brand-board`. Show the user the image and the control panel link. Name what they should double-check, list the Known gaps, and offer the logo variants you could generate (see Logos). Wait for their answer before generating any.

## Taking values from each source

| Source | How | Confidence |
|---|---|---|
| Code theme: shadcn or Tailwind CSS, CSS variables, `tokens.json`, Figma variables | Read the exact values, following `var()` chains to the literal value. Keep the original variable names in Sources. | exact |
| Website | Computed styles of real elements (headings, body text, buttons, cards, bands) at desktop width, plus its CSS | exact |
| Guidelines PDF | Values as stated. A CMYK or Pantone value without its RGB or hex goes to Known gaps. | exact |
| Images, screenshots, logo files | `extract_brand_values`: exact pixel colors with their coverage, and SVG fill and stroke values. Never pick a color by eye. | exact for flat files, sampled for paintings and photos |
| Fonts recognized by eye | "Looks like X". Ask for the files. | inferred |

Evidence rules:
- A value seen once is a value. A literal color in a component (for example `text-[#eef0ea]` on a band) belongs in `components`.
- Don't create what wasn't observed: no tints, shades, hover states, extra type sizes, spacing scales or dark palettes.
- When sources disagree, the brand's own files win over the website, and the website over screenshots. Note the other value in Sources.
- Overview, Voice and Audience may be interpreted from the brand's own copy and code comments; mark them inferred in Sources.
- Leave out interface plumbing with no brand meaning, such as shadcn's `--ring`, `--input`, `--popover`, `--sidebar-*`, `--chart-*` and its hover `--accent`. List them in Sources as not carried over.

## Tokens

- **`colors`**, hex, in two layers:
  - the source's own names for its palette (`chalk`, `ink`, `laurel`);
  - the role keys every design.md tool expects: `primary`/`on-primary` (the main brand and action color, as in Material 3, shadcn and Stitch), `secondary`/`on-secondary`, `tertiary`, `background`/`on-background`, `surface`/`on-surface`, `outline` and `error`. A role repeats its brand color's value.
  - Text colors are `on-<surface>` (Material's naming), never `<surface>-foreground`. From shadcn, map by the source's own meaning: `--background` → `background`, `--foreground` → `on-background`, `--card` → `surface`, `--card-foreground` → `on-surface`, `--primary-foreground` → `on-primary`, `--muted-foreground` → `on-muted`, `--border` → `outline`, `--destructive` → `error`.
  - A dark theme the brand defines (a `.dark` block) becomes a group with the same names: `colors.dark.chalk`, `colors.dark.primary`.
  - Numeric scales stay scales (`blue-50` … `blue-900`).
- **`typography`**: the roles the source actually uses (such as `display`, `headline-lg`, `body`, `label`, `code`), in px as the source defines them (1rem is 16px). `lineHeight` unitless or in px, `letterSpacing` in em. Only the spec's properties: fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, fontFeature and fontVariation. Casing rules, such as "labels in capitals", go in the prose.
- **`rounded`** and **`spacing`**: as the source defines them. When the brand has none, list the key in `omitted` with a reason. Only colors, typography, spacing, rounded and components can be omitted.
- **`components`**: only usage pairs you observed, such as `button-primary`, `card`, `band` or `badge-winner`, with `backgroundColor`, `textColor`, `typography`, `rounded` and `padding`. Reference tokens (`"{colors.primary}"`); use a literal value only when the source hardcodes one.
- **`fonts`** (Studio): every family the roles use, with its local file (relative to `brand/`) and weight range.
- **`logos`** (Studio): each file with the `background` it's made for (a token reference) and its `source`.

Never write vmin, vw or any image-frame size in DESIGN.md. Studio adapts the brand to each image: the body size becomes the frame's body size (`--brand-type-base`, 3vmin), and every other size, radius and space keeps its ratio to it.

## Prose

- The spec's sections, in order, only those the brand has: Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, Do's and Don'ts.
- Then Studio's sections: Logo, Imagery, Voice, Audience, Sources, Known gaps.
- Name tokens instead of repeating values: `**Ink** {colors.ink} carries all text`. Values belong in the tokens and in Sources.
- Describe rules and intent, not layouts, unless the brand really has a fixed layout rule. A specific reference ("a 1970s lecture handout") carries more than adjectives ("clean, modern").
- Keep Do's and Don'ts short and intentional, and never add brand facts such as claims, prices or awards.
- **Sources** is a table: value, origin (file or URL), original name (variable, class or element), confidence (exact, sampled or inferred), plus what was deliberately not carried over.
- **Known gaps** lists what the brand doesn't define and what you need from the user.

## Logos

- Use only official files, copied unchanged. Never recolor, redraw, retype, stretch or crop a logo, add effects, or place it on a background it isn't made for.
- **Variants the brand defines are official.** For example, a logo component drawn with CSS variables (`fill="var(--indigo)"`, `currentColor`) has one version per theme: call `make_logo_variant` with that theme's exact values, one file per theme, and record it as the brand's own variant.
- **Generated variants need the user's approval, each one, before you make it.** Offer only what's missing:
  - one-color black and white versions (map `"*"` to the color, and paper-colored inner shapes to `"knockout"`);
  - a dark or light version from the brand's palette;
  - a derived dark palette, when the brand has no dark theme, with every on-* pair at 4.5:1 or more.

  Show the preview from `make_logo_variant`, check that its colors meeting the background reach 3:1, and wait for a yes. Then write `generated from <file>, approved by the user on <date>` in the logo's `source` and in Sources.
- When no file suits a background and the user declines a variant, the official logo sits on a plate of its own background color.
- The Logo section says which file goes on which background, the clear space, and that logos are never recolored.

## DESIGN.md template

```md
---
version: alpha
name: Brand name
description: One line on what the brand does, in its own words.
colors:
  chalk: "#eeefea"
  ink: "#1a1c20"
  indigo: "#4f46e5"
  primary: "#4f46e5"
  on-primary: "#ffffff"
  background: "#eeefea"
  on-background: "#1a1c20"
typography:
  display: { fontFamily: Young Serif, fontSize: 73.6px, fontWeight: 400, lineHeight: 1.02, letterSpacing: -0.012em }
  body: { fontFamily: Hanken Grotesk, fontSize: 16px, fontWeight: 400, lineHeight: 1.55 }
  label: { fontFamily: Hanken Grotesk, fontSize: 14px, fontWeight: 500, lineHeight: 20px }
rounded:
  lg: 14px
  full: 9999px
omitted:
  - section: spacing
    reason: The brand defines no spacing scale.
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.label}", rounded: "{rounded.full}" }
fonts:
  - { family: Young Serif, file: fonts/YoungSerif.woff2, weight: 400 }
  - { family: Hanken Grotesk, file: fonts/HankenGrotesk.woff2, weight: 100 900 }
logos:
  primary: { file: logos/logo.svg, background: "{colors.background}", source: the site's logo component with the light theme's values }
---

## Overview
## Colors
## Typography
## Layout
## Components
## Do's and Don'ts
## Logo
## Imagery
## Voice
## Audience
## Sources
## Known gaps
```

The tokens become CSS variables in `brand/brand.css`:
- `--brand-<color>`, such as `--brand-on-primary`; grouped colors join with a dash, like `--brand-dark-chalk`;
- `--brand-<role>-font`, `-size`, `-weight`, `-line-height` and `-tracking`; `--brand-font` and `--brand-font-display` for the body and display families;
- `--brand-radius-<name>` and `--brand-space-<name>`;
- `--brand-<component>-background`, `-text`, `-radius` and `-padding`;
- Studio's frame values: `--brand-type-base`, `--brand-unit` (one source px), `--brand-safe-margin` and `--brand-gap`.

## Rules

- Never edit the generated block of `brand.css` (between the `metamorfiles:tokens` markers) or `templates/brand-board/`: both are rebuilt from DESIGN.md. Put the brand's own CSS, such as textures and logo lockups, in `brand.css` below the markers.
- Changing DESIGN.md changes every template. Tell the user which templates will look different, and re-render them.
- Write DESIGN.md with `write_file`, which returns the check. If you write it with other tools, call `get_project` afterwards to see the check.
