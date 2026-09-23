---
name: metamorfiles-brand
description: Use when the user wants to set up, import or change the brand in a Metamorfiles project, for example from their website, their app's theme or styles, a brand guidelines PDF, logos or reference images. Translates the brand into brand/DESIGN.md (the design.md format), from which Studio generates the brand tokens and the brand board.
---

# Translate the brand

The brand kit is `brand/DESIGN.md`, in Google Labs' design.md format (version `alpha`, github.com/google-labs-code/design.md), so it also works in Stitch and other design tools. Studio checks it, runs the official design.md linter on it, and generates from it the `--brand-*` tokens in `brand/brand.css` and the `brand-board` template.

Your goal is a complete board the user can use, quickly. Four principles:
- **What the brand defines is exact.** Copy an observed color, size or file as it is. Never adjust, round or replace it to fit a scale you like better.
- **What the brand leaves open, you supply.** A kit with no radii, no dark theme or no component pairs isn't faithful, it just moves the guessing into every template. Derive the missing part from what the brand does show, mark it `proposed` in Sources, and tell the user what to look at.
- **Never invent a fact.** Claims, prices, awards, positioning and logos are not yours to make up. Logos are sacred: only official files and the brand's own variants, and anything generated needs approval first.
- **Record where everything came from**, in `## Sources`, and what you still need from the user, in `## Known gaps`.

## Steps

1. Call `metamorfiles_get_project` and read `brand`. When you rebuild an existing kit, take every value again from the brand's sources as below; never copy values from the previous DESIGN.md.
2. Gather the sources: the app's theme (for example a shadcn or Tailwind `globals.css`), the logo files or logo component, the live website, guidelines, fonts and reference images. **Go and find the imagery, don't wait to be handed it**: look in `public/`, `static/`, `assets/` and `src/assets/`; follow what the app's own components reference (a component naming `/images/serum-morning.jpg` is telling you that file is brand imagery); read the Open Graph and Twitter card images in the app's metadata; and take what the live site renders in its hero and section bands. Icons, favicons, UI chrome and framework defaults (`next.svg`, `vercel.svg`) are not imagery. Ask only for what you cannot find and cannot do without, such as the font files or the logo.
3. Copy the files into the project, unchanged:
   - fonts as WOFF2 in `brand/fonts/` (local files only; for Google Fonts, download the WOFF2 files or ask the user to);
   - official logos in `brand/logos/`;
   - reference images in `brand/refs/`;
   - the files you translate from (theme CSS, a logo component, a guidelines PDF) in `brand/sources/`, so the values can be checked later.
4. Take the values from each source as described below.
5. Write `brand/DESIGN.md` with `metamorfiles_write_file`, following the template. If `metamorfiles.json` names the brand differently from DESIGN.md (other spelling or capitals), write it with the brand's own name, so the control panel and the kit agree.
6. Read the check in the result. Fix every error and write again. Warnings starting with `design.md lint` come from the official linter: fix them, or leave them only when the Sources explain why.
7. Present it. Call `metamorfiles_render_preview` on `brand-board`: it is one square image of the whole brand, and its result has the control panel link where the user sees it. Lead with that link, then write the note in `references/presenting.md` — what the brand is, what you decided for them, what genuinely needs them, one question. Read that file before you write the message. Never hold the board back for an answer, and never list your own values, checks or tools.

## Taking values from each source

| Source | How | Confidence |
|---|---|---|
| Code theme: shadcn or Tailwind CSS, CSS variables, `tokens.json`, Figma variables | Read the exact values, following `var()` chains to the literal value. Keep the original variable names in Sources. | exact |
| Website | Computed styles of real elements (headings, body text, buttons, cards, bands) at desktop width, plus its CSS | exact |
| Guidelines PDF | Values as stated. A CMYK or Pantone value without its RGB or hex goes to Known gaps. | exact |
| Images, screenshots, logo files | `metamorfiles_extract_brand_values`: exact pixel colors with their coverage, and SVG fill and stroke values. Never pick a color by eye. | exact for flat files, sampled for paintings and photos |
| Fonts recognized by eye | "Looks like X". Ask for the files. | inferred |

Evidence rules:
- A value seen once is a value. A literal color in a component (for example `text-[#eef0ea]` on a band) belongs in `components`.
- Take the whole scale a source defines, not only the steps it happens to use. A radius scale with a step missing is a hole a template will fill badly.
- What the source leaves open, derive in proportion to what it shows and mark `proposed`. What the source contradicts, don't.
- When sources disagree, the brand's own files win over the website, and the website over screenshots. Note the other value in Sources.
- Overview, Voice and Audience may be interpreted from the brand's own copy and code comments; mark them inferred in Sources.
- Leave out interface plumbing with no brand meaning, such as shadcn's `--ring`, `--input`, `--popover`, `--sidebar-*`, `--chart-*` and its hover `--accent`. List them in Sources as not carried over.

## Complete the kit

A finished kit defines colors (with the role keys), typography, rounded and components, plus fonts and at least one logo. Studio warns when one of those areas is neither defined nor listed in `omitted`, so each one is a decision rather than an oversight.

When the source is thin — a photograph, a screenshot, a one-page brief, a site built without tokens — take what it gives exactly, then derive the rest in proportion and mark it `proposed`:

- one radius on a card → the scale around it, at the source's own ratio;
- two type sizes → the roles between them on the same ratio, and the roles the templates need above and below;
- a light palette only → a dark theme, every `on-` pair at 4.5:1 or more;
- an action color with no text pair → the pair, at 4.5:1 or more.

Ask the user only for what you cannot derive and what changes the result: the font files, the logo, what the brand is actually about. Never hold the board for something you can propose and they can correct in one line.

## Tokens

- **`colors`**, hex, in two layers:
  - the source's own names for its palette (`paper`, `ink`, `clay`);
  - the role keys every design.md tool expects: `primary`/`on-primary` (the main brand and action color, as in Material 3, shadcn and Stitch), `secondary`/`on-secondary`, `tertiary`, `background`/`on-background`, `surface`/`on-surface`, `outline` and `error`. A role repeats its brand color's value.
  - Text colors are `on-<surface>` (Material's naming), never `<surface>-foreground`. From shadcn, map by the source's own meaning: `--background` → `background`, `--foreground` → `on-background`, `--card` → `surface`, `--card-foreground` → `on-surface`, `--primary-foreground` → `on-primary`, `--muted-foreground` → `on-muted`, `--border` → `outline`, `--destructive` → `error`.
  - A dark theme the brand defines (a `.dark` block) becomes a group with the same names: `colors.dark.paper`, `colors.dark.primary`.
  - Numeric scales stay scales (`blue-50` … `blue-900`).
- **`typography`**: the roles the source actually uses (such as `display`, `headline-lg`, `body`, `label`, `code`), in px as the source defines them (1rem is 16px). `lineHeight` unitless or in px, `letterSpacing` in em. Only the spec's properties: fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, fontFeature and fontVariation. Casing rules, such as "labels in capitals", go in the prose.
- **`rounded`** and **`spacing`**: as the source defines them, whole scales. When the source shows only one or two steps, derive the rest around them and mark them `proposed`; when the brand truly has none (square corners everywhere), list the key in `omitted` with a reason. Only colors, typography, spacing, rounded and components can be omitted.
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
- **Voice is a chart, not a paragraph**: three concepts, each with its characteristics and the lines the brand does and doesn't say. Every Do is quoted from the brand's own copy. See `references/voice-chart.md`; the board draws the chart and the templates write to it.
- **Sources** is a table: value, origin (file or URL), original name (variable, class or element), confidence (exact, sampled, inferred or proposed), plus what was deliberately not carried over. `proposed` is anything you supplied rather than observed; say what you derived it from.
- **Known gaps** lists what the brand doesn't define and what you need from the user.

## Logos

- Use only official files, copied unchanged. Never recolor, redraw, retype, stretch or crop a logo, add effects, or place it on a background it isn't made for.
- **Variants the brand defines are official.** For example, a logo component drawn with CSS variables (`fill="var(--clay)"`, `currentColor`) has one version per theme: call `metamorfiles_make_logo_variant` with that theme's exact values, one file per theme, and record it as the brand's own variant.
- **Generated variants need the user's approval, each one, before you make it.** Offer only what's missing:
  - one-color black and white versions (map `"*"` to the color, and paper-colored inner shapes to `"knockout"`);
  - a dark or light version from the brand's palette;
  - a derived dark palette, when the brand has no dark theme, with every on-* pair at 4.5:1 or more.

  Show the preview from `metamorfiles_make_logo_variant`, check that its colors meeting the background reach 3:1, and wait for a yes. Then write `generated from <file>, approved by the user on <date>` in the logo's `source` and in Sources.
- When no file suits a background and the user declines a variant, the official logo sits on a plate of its own background color.
- The Logo section says which file goes on which background, the clear space, and that logos are never recolored.

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
- `--brand-<color>`, such as `--brand-on-primary`; grouped colors join with a dash, like `--brand-dark-paper`;
- `--brand-<role>-font`, `-size`, `-weight`, `-line-height` and `-tracking`; `--brand-font` and `--brand-font-display` for the body and display families;
- `--brand-radius-<name>` and `--brand-space-<name>`;
- `--brand-<component>-background`, `-text`, `-radius` and `-padding`;
- Studio's frame values: `--brand-type-base`, `--brand-unit` (one source px), `--brand-safe-margin` and `--brand-gap`.

## Rules

- The brand board is one 1920x1920 image of nine panels: cover, palette, typefaces, type scale, imagery, surfaces, a second theme, voice and rules. Panels the brand has nothing for are left out, so a missing image or an empty Voice section costs a panel. It is a composition, not a reference — DESIGN.md holds every token — and none of it is yours to lay out.
- `templates/brand-board/` and the block of `brand.css` between the `metamorfiles:tokens` markers are built from DESIGN.md, so fix them through DESIGN.md: a hand edit is rebuilt away. Never fix one by changing a token to a value the sources don't have. Put the brand's own CSS, such as textures and logo lockups, in `brand.css` below the markers.
- Fix every check error on the brand board before moving on. One you can't fix through DESIGN.md is a Studio defect: tell the user plainly, don't walk past it.
- Changing DESIGN.md changes every template. Tell the user which templates will look different, and re-render them.
- Write and change DESIGN.md only with `metamorfiles_write_file`: it returns the check and rebuilds the tokens and the board at once. A shell edit skips both, and outside auto mode the user has to approve it.
