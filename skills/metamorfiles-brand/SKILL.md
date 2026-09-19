---
name: metamorfiles-brand
description: Use when the user wants to set up, import or change the brand in a Metamorfiles project, for example from their website, their app's styles, a brand guidelines PDF, a style guide, logos or reference images. Writes brand/DESIGN.md, from which Studio generates the brand tokens and the brand board.
---

# Build the brand kit

The brand kit is `brand/DESIGN.md`, in the design.md format: YAML tokens, then prose. Studio checks it, and generates from it the `--brand-*` tokens in `brand/brand.css` and the `brand-board` template. Every template uses only those tokens, so the kit is what keeps every image on brand.

## Steps

1. Call `get_project` and read `brand`. If it reports `brand/brand.md`, the project has an older kit: convert it (see below).
2. Gather the sources the user gives you: website pages, the app's theme or CSS (for example a Tailwind or shadcn `globals.css`), guidelines, past posts, logos and reference images. Take exact values from them; never approximate a color. Ask for anything essential that's missing, such as the logo or the font files.
3. Save the brand files:
   - Fonts as WOFF2 files in `brand/fonts/`. They must be local. For Google Fonts, save the WOFF2 files with `write_file` using `base64` if your tools can fetch them, or ask the user to download them.
   - Logos in `brand/logos/`, SVG when possible: one for light backgrounds, one for dark backgrounds, and the mark alone if the brand has one.
   - Reference images in `brand/refs/`.
4. Write `brand/DESIGN.md` with `write_file`, following the template below.
   - **Colors** are hex. Map the brand's roles:
     - `background` and `foreground`: the main canvas and its text.
     - `primary`: the main brand surface, such as a dark band.
     - `secondary`: cards and panels.
     - `accent`: the one highlight or call to action.
     - `muted`: quiet surfaces.
     - `border`: lines and dividers.
     - Extra named colors for special roles, such as a color reserved for winners, explained in `## Colors`.
   - **Every surface color has its `-foreground` text color** with at least 4.5:1 contrast. 3:1 is acceptable only if that pair is used just for large display text.
   - **Typography roles** are `display`, `headline`, `body` and `label`, plus others the brand uses, such as `code`. Sizes are numbers in vmin, sized for social images: display 8 to 12, headline 5 to 7, body 2.8 to 3.6, label 1.8 to 2.4.
   - **`fonts`** lists every family the roles use, with its file (relative to `brand/`) and weight range.
   - **`spacing.safe-margin`** is usually 5 to 7 vmin. Renders flag any text inside it.
   - **`rounded`** holds the brand's radii.
5. Write the prose in this order:
   - Overview, Colors, Typography, Layout, Shapes (only if the brand has a shape language), Do's and Don'ts.
   - Then Audience, Voice, Logo usage and Image prompts.

   Keep it to about a page of concrete, testable rules. Never invent brand facts such as claims, prices or awards; mark unknowns and ask.
6. Read the check in the `write_file` result. Fix every error, such as a missing file or low contrast, and write again.
7. Call `render_preview` on the `brand-board` template and look at it. Show the user the image, give them the control panel link from the result, and name what they should double-check: colors, fonts and logos.

## DESIGN.md template

```md
---
name: Brand name
description: One line on what the brand does.
colors:
  background: "#EEEFEA"
  foreground: "#1A1C20"
  primary: "#23413A"
  primary-foreground: "#ECEEE8"
  secondary: "#F9F9F6"
  secondary-foreground: "#1A1C20"
  accent: "#4F46E5"
  accent-foreground: "#FFFFFF"
  muted: "#E2E4DC"
  muted-foreground: "#5F636A"
  border: "#D8DAD2"
typography:
  display: { fontFamily: Young Serif, fontWeight: 400, size: 9, lineHeight: 1.02, letterSpacing: -0.01em }
  headline: { fontFamily: Young Serif, fontWeight: 400, size: 5.5, lineHeight: 1.1 }
  body: { fontFamily: Hanken Grotesk, fontWeight: 400, size: 3, lineHeight: 1.45 }
  label: { fontFamily: Hanken Grotesk, fontWeight: 600, size: 1.8, letterSpacing: 0.12em, uppercase: true }
fonts:
  - { family: Young Serif, file: fonts/YoungSerif.woff2, weight: 400 }
  - { family: Hanken Grotesk, file: fonts/HankenGrotesk.woff2, weight: 100 900 }
logos:
  primary: logos/logo.svg
  on-dark: logos/logo-light.svg
  mark: logos/icon.svg
rounded:
  md: 1.4vmin
  full: 999px
spacing:
  safe-margin: 6vmin
  gap: 3vmin
---

## Overview
## Colors
## Typography
## Layout
## Do's and Don'ts
## Audience
## Voice
## Logo usage
## Image prompts
```

The tokens become CSS variables:
- `--brand-<color>`, such as `--brand-accent-foreground`
- `--brand-<role>-font`, `-size`, `-weight`, `-line-height`, `-tracking` and `-transform`
- `--brand-radius-<name>`
- `--brand-<spacing name>`, such as `--brand-safe-margin`
- `--brand-font` and `--brand-font-display`, short names for the body and display families

## Converting an older brand kit

An older kit has `brand/brand.md` and a hand-written `brand/brand.css`.

1. Write `brand/DESIGN.md` from their values.
2. Studio regenerates the token block of `brand.css`. It keeps the rest of the brand's CSS below the block, and keeps old variables that DESIGN.md doesn't define, so existing templates still render.
3. Old variables whose value changed are marked `metamorfiles:changed` in `brand.css`, and every template that uses them gets a check warning. For example, `--brand-muted` meant supporting text in many older kits, but now it's a surface color.
4. Update those templates to the new token names (supporting text is `--brand-muted-foreground`), then `render_preview` each one until its checks pass.

## Rules

- Never edit the generated block of `brand.css` (between the `metamorfiles:tokens` markers) or `templates/brand-board/`: both are rebuilt from DESIGN.md. Put the brand's own CSS, such as gradients, textures and logo lockups, in `brand.css` below the markers.
- Changing DESIGN.md changes every template. Tell the user which templates will look different, and re-render them.
- Write DESIGN.md with `write_file`, which returns the check. If you write it with other tools, call `get_project` afterwards to see the check.
