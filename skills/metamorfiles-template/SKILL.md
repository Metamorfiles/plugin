---
name: metamorfiles-template
description: Use when the user wants a new or changed Metamorfiles template, for example a social post, ad or banner design from a brief, a reference image, a screenshot or an existing design. Writes templates/<id>/index.html following the contract and checks it visually in every format.
---

# Create a template

A template is a reusable design whose changeable parts are declared variables. The contract is in the `metamorfiles` skill. Follow it exactly.

## Steps

1. Call `get_project`. Read the brand guide. `read_file` brand/brand.css to learn the font families and `--brand-*` variables.
2. Clarify the brief in one short exchange if needed: the channel and formats, the message, and what must change between variants. Everything that changes becomes a variable. Everything else stays fixed in the design.
3. If the user gives a reference image, study its layout, hierarchy, spacing and mood. Recreate the structure with the brand's fonts and colors, not a pixel copy.
4. Plan the variables before writing HTML:
   - Copy that varies becomes `string` variables with `maxLength`, sized so the longest value still fits.
   - Photos and illustrations become `image` variables. Add `"source": { "kind": "ai", "instruction": "…" }` when new images should be generated per variant.
   - Values coming from a CSV use `"source": { "kind": "table", "column": "…" }`. Call `read_table` first to get the exact column names.
   - Useful design switches become `enum`, `boolean`, `anchor`, `color` or `number` variables. Keep them few and meaningful.
   - Defaults must be real, on-brand content, so the default render is a finished design.
5. Choose a short kebab-case id and write `templates/<id>/index.html` with `write_file`. Link `../../brand/brand.css`. Save any default images into the template folder, or generate one with `generate_image` and use its `/assets/…` path.
6. Read the check in the `write_file` result. Fix every error and warning, then write again.
7. Run the quality loop:
   - Call `render_preview` for every declared format.
   - Look at each image. Check text fit, hierarchy, contrast, safe margins, crop of photos and logo clear space.
   - Stress test: preview once with the longest plausible copy and with every boolean and enum option that changes layout.
   - Fix and repeat until every format looks intentionally designed for its size.
8. Show the user the final previews, list the variables, and offer `open_panel` for hands-on tweaks.

## Design rules

- Use `100vw` and `100vh` for the root and `vmin` for type, spacing and radii, so one design scales across sizes.
- Landscape formats need a different structure, usually side by side. Use `@media (min-aspect-ratio: 5/4)`.
- Story formats (9:16) keep key content out of the top 14% and bottom 20%.
- One focal point per design. Headline, supporting line, then call to action or price.
- Use `text-wrap: balance` on headlines. Never let text touch the edges or overlap the logo.
- Photos use `object-fit: cover` with a deliberate `object-position`.
- Colors and fonts come from brand.css variables. Accent colors follow the brand's usage rules.

## Changing an existing template

`read_file` the template, make the change, keep variable ids stable so drafts and batches still work, then run the same check and preview loop.
