---
name: metamorfiles-brand
description: Use when the user wants to set up or update the brand in a Metamorfiles project, for example from their website, a brand guidelines PDF, a style guide, logos or reference images. Writes brand/brand.md and brand/brand.css so every template and variant stays on brand.
---

# Build the brand kit

The brand kit is what keeps every template and variant consistent. Templates read `brand/brand.css`. You read `brand/brand.md` before writing any copy.

## Steps

1. Call `get_project`. Read the current `brand` text, then `read_file` on `brand/brand.css`.
2. Gather the sources the user gives you: website pages, guidelines, past posts, logos, reference images. Read what you can with your own tools. Ask for anything essential that is missing, such as the logo file or the main font.
3. Write `brand/brand.md` with `write_file`. Use these sections and keep each rule concrete and testable:
   - **Who we talk to:** audience, their situation and what they care about.
   - **Voice:** tone, sentence length, words to use and avoid, capitalization, punctuation habits.
   - **Do** and **Don't:** rules for copy and imagery, such as claims to avoid or how the product is shown.
   - **Visual system:** what each color is for, type hierarchy, logo usage and clear space, photo style.
   - **Image prompts:** lighting, backdrop, composition and mood to use when generating images.
4. Write `brand/brand.css`:
   - One `@font-face` rule per font file under `brand/fonts/`, with `font-weight` ranges for variable fonts. Fonts must be local files. If the brand uses a Google font, ask the user to download the WOFF2 files into `brand/fonts/`, or save them with `write_file` using `base64` if your tools can fetch them.
   - `:root` variables named `--brand-*`: colors (ink, paper, accent and any secondary colors), `--brand-font` and `--brand-font-display` with fallbacks, and optional radii.
5. Put logos in `brand/logos/` and reference images in `brand/refs/`. SVG logos are best. Use `write_file` with `content` for SVG text or `base64` for PNG files.
6. Call `get_project` again and confirm there are no font errors. If templates exist, call `render_preview` on one of them to confirm the new fonts and colors apply, and show the user.

## Rules

- Keep brand.md short enough to read before every task, about one page.
- Never invent brand facts such as claims, prices or awards. Mark unknowns and ask.
- Colors in brand.css are the only colors templates should use.
- Changing brand.css changes every template. Tell the user which templates will look different.
