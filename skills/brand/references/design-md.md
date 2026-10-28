# Writing DESIGN.md

The tokens, the prose and the template of `brand/DESIGN.md`, and the CSS variables Studio makes
from it. Read it before you write DESIGN.md.

## Contents
- Tokens
- Prose
- DESIGN.md template
- CSS variables

## Tokens

- **`colors`**, hex, in two layers:
  - the source's own names for its palette (`paper`, `ink`, `clay`);
  - the role keys every design.md tool expects: `primary`/`on-primary` (the main brand and action color, as in Material 3, shadcn and Stitch), `secondary`/`on-secondary`, `tertiary`, `background`/`on-background`, `surface`/`on-surface`, `outline` and `error`. A role repeats its brand color's value.
  - Text colors are `on-<surface>` (Material's naming), never `<surface>-foreground`. From shadcn, map by the source's own meaning: `--background` → `background`, `--foreground` → `on-background`, `--card` → `surface`, `--card-foreground` → `on-surface`, `--primary-foreground` → `on-primary`, `--muted-foreground` → `on-muted`, `--border` → `outline`, `--destructive` → `error`.
  - A dark theme the brand defines (a `.dark` block) becomes a group with the same names: `colors.dark.paper`, `colors.dark.primary`.
  - Numeric scales stay scales (`blue-50` … `blue-900`).
- **`typography`**: the roles the source actually uses (such as `display`, `headline-lg`, `body`, `label`, `code`), in px as the source defines them (1rem is 16px). `lineHeight` unitless or in px, `letterSpacing` in em. Only the spec's properties: fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, fontFeature and fontVariation. Letter case goes in `casing`.
- **`rounded`** and **`spacing`**: as the source defines them, whole scales. When the source shows only one or two steps, derive the rest around them and mark them `proposed`; when the brand truly has none (square corners everywhere), list the key in `omitted` with a reason. Only colors, typography, spacing, rounded and components can be omitted.
- **`components`**: only usage pairs you observed, such as `button-primary`, `card`, `band` or `badge-winner`, with `backgroundColor`, `textColor`, `typography`, `rounded` and `padding`. Reference tokens (`"{colors.primary}"`); use a literal value only when the source hardcodes one.
- **`fonts`** (Studio): every family the roles use, with its local file (relative to `brand/`) and weight range.
- **`logos`** (Studio): each file with the `background` it's made for (a token reference) and its `source`; the brand's small mark (its icon, the mark alone, a monogram) with `small: true`, since the favicon and profile picture are made from it. Look at them on the guidelines' `mark` page, at their real sizes, and set each use's composition where Studio's placement isn't right for this mark (`profile` and `icon`, as `references/final.md` of the `logo` skill says, "The small uses").
- **`casing`** (Studio): the letter case a role is set in, when the brand sets one: `upper`, `lower` or `title`, such as `display: upper` for headlines in capitals (a site's `text-transform`, or copy typed in capitals). The spec's typography has no case, so without it every template and the board guess.
- **`assets`** (Studio): list an imagery folder only for imagery the brand has, or that the user had the team make. The brand's asset folders under `brand/`, each drawn as a frame of the brand board: `{ folder, kind, title, note?, anchors? }`, the kind one of `imagery` (photos or drawings, whole and framed, with the `anchors` that set its look marked), `character` (a mascot's turnaround and poses), `icons`, `pattern` and `in-use` (mockups of the brand on its objects, never imagery). Without it, `brand/refs/` is the brand's imagery, so anything else (a share image, screenshots) stays in `brand/sources/`. Each folder is shown whole on pages of its own, and the about page shows the first imagery folder's first anchor.

Never write vmin, vw or any image-frame size in DESIGN.md. Studio adapts the brand to each image: the body size becomes the frame's body size (`--brand-type-base`, 3vmin), and every other size, radius and space keeps its ratio to it.

## Prose

- The prose is the copywriter's: write every section with the `copywriting` skill (Overview, Colors, Typography, Logo, Imagery, Voice and Messaging), as the brand's guideline.
- The spec's sections, in order, only those the brand has: Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, Do's and Don'ts.
- Then Studio's sections: Logo, Imagery, Voice, Messaging, Audience, Sources, Known gaps. Imagery describes the brand's own pictures, or those the imagery step made; a brand with neither has no Imagery section.
- Describe rules and intent, not layouts, unless the brand really has a fixed layout rule.
- Keep Do's and Don'ts short and intentional, and never add brand facts such as claims, prices or awards. It isn't printed: it holds the rules agents follow when they design.
- For a brand that exists, every Do of the Voice chart is quoted from its own copy and recorded in Sources.
- **Sources** is a table: value, origin (file or URL), original name (variable, class or element), confidence (exact, sampled, inferred or proposed), plus what was deliberately not carried over. `proposed` is anything you supplied rather than observed; say what you derived it from.
- **Known gaps** lists what the brand doesn't define and what you need from the user.

## DESIGN.md template

```md
---
version: alpha
name: Lumen Skincare
description: Calm, specific skincare for a short morning routine.
colors:
  paper: "#f6f1ea"
  ink: "#1f1a17"
  clay: "#c9785b"
  primary: "#c9785b"
  on-primary: "#1f1a17"
  background: "#f6f1ea"
  on-background: "#1f1a17"
typography:
  display: { fontFamily: Fraunces, fontSize: 64px, fontWeight: 400, lineHeight: 1.02, letterSpacing: -0.015em }
  body: { fontFamily: Inter, fontSize: 17px, fontWeight: 400, lineHeight: 1.5 }
  label: { fontFamily: Inter, fontSize: 12px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0.12em }
rounded:
  lg: 18px
  full: 9999px
omitted:
  - section: spacing
    reason: The brand defines no spacing scale.
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.label}", rounded: "{rounded.full}" }
fonts:
  - { family: Fraunces, file: fonts/Fraunces.woff2, weight: 100 900 }
  - { family: Inter, file: fonts/Inter.woff2, weight: 100 900 }
assets:
  - { folder: refs, kind: imagery, title: Photographs, anchors: [serum-morning.jpg] }
logos:
  primary: { file: logos/logo.svg, background: "{colors.background}", source: the site's logo component with the light theme's values }
  mark: { file: logos/mark.svg, background: "{colors.background}", source: the app icon, as the site serves it, small: true }
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
## Messaging
## Audience
## Sources
## Known gaps
```

## CSS variables

The tokens become CSS variables in `brand/brand.css`:
- `--brand-<color>`, such as `--brand-on-primary`; grouped colors join with a dash, like `--brand-dark-paper`;
- `--brand-<role>-font`, `-size`, `-weight`, `-line-height`, `-tracking` and `-case` (from `casing`); `--brand-font` and `--brand-font-display` for the body and display families;
- `--brand-radius-<name>` and `--brand-space-<name>`;
- `--brand-<component>-background`, `-text`, `-radius` and `-padding`;
- Studio's frame values: `--brand-type-base`, `--brand-unit` (one source px), `--brand-safe-margin` and `--brand-gap`.
