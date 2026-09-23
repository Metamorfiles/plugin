---
name: metamorfiles-template
description: Use when the user wants a new or changed Metamorfiles template, for example a social post, ad or banner design from a brief, a reference image, a screenshot or an existing design, or a change to the layout, formats or defaults of one. Writes the template's index.html following the contract, checks it visually in every format and gets it reviewed.
---

# Create a template

A template is a reusable design whose changeable parts are declared variables. The contract is in the `metamorfiles` skill. Follow it exactly.

## Steps

1. Call `metamorfiles_get_project`. Read `brand`: the DESIGN.md tokens tell you every `--brand-*` variable, and its prose tells you how to use them. If there's no brand kit, build it first with `metamorfiles-brand`.
2. Clarify the brief in one short exchange if needed: the channel and formats, the message, and what must change between variants. Everything that changes becomes a variable. Everything else stays fixed in the design.
3. If the user gives a reference image, study its layout, hierarchy, spacing and mood. Recreate the structure with the brand's fonts and colors, not a pixel copy.
4. Plan the variables before writing HTML:
   - Copy that varies becomes `string` variables with `maxLength`, sized so the longest value still fits.
   - Photos and illustrations become `image` variables. Add `"source": { "kind": "ai", "instruction": "…" }` when new images should be generated per variant.
   - Values coming from a CSV use `"source": { "kind": "table", "column": "…" }`. Call `metamorfiles_read_table` first to get the exact column names.
   - Useful design switches become `enum`, `boolean`, `anchor`, `color` or `number` variables. Keep them few and meaningful.
   - Defaults must be real, on-brand content, so the default render is a finished design.
5. Choose a short kebab-case id and write `templates/<id>/index.html` with `metamorfiles_write_file`. Link `../../brand/brand.css`. Use the brand's own images where they are, as `../../brand/refs/…` and `../../brand/logos/…`: never copy them, since a copy drifts from the brand and later needs deleting. Save only other images into the template folder, or generate one with `metamorfiles_generate_image` and use its `/assets/…` path.
6. Read the check in the `metamorfiles_write_file` result. Fix every error and warning, then write again.
7. Run the quality loop:
   - Call `metamorfiles_render_preview` for every declared format.
   - Fix every check error in the result, and every warning that isn't a deliberate choice.
   - Look at each image for what the checks can't judge: hierarchy, alignment, crop of photos, logo clear space, balance.
   - Stress test: preview once with the longest plausible copy and with every boolean and enum option that changes layout.
   - Fix and repeat until every format looks intentionally designed for its size.
8. Get an independent review with `metamorfiles-review` and fix every **must fix**.
9. Hand it over: the control panel link first, then what the design does, the variables the user can change there, and one question, usually whether to make the first page from it. Don't say the images are above: in many apps the user can't see them.

## Design rules

- Use `100vw` and `100vh` for the root and `vmin` for type, spacing and radii, so one design scales across sizes.
- Landscape formats need a different structure, usually side by side. Use `@media (min-aspect-ratio: 5/4)`.
- Story formats (9:16) keep key content out of the top 14% and bottom 20%.
- Write every headline and call to action against the Voice chart in DESIGN.md: it should be at home in the Do column. What the brand never says, you never write — and neither of you invents a figure.
- One focal point per design. Headline, supporting line, then call to action or price.
- Use `text-wrap: balance` on headlines. Never let text touch the edges or overlap the logo.
- Photos use `object-fit: cover` with a deliberate `object-position`.
- Colors, type and spacing come from the brand tokens. Text on a surface uses its `on-` color (`--brand-on-surface` on `--brand-surface`) or a component's pair from DESIGN.md. Accent colors follow the brand's usage rules.
- Keep every text inside `--brand-safe-margin`; the checks flag anything outside it.

## Changing an existing template

1. `metamorfiles_read_file` the template (and its `edits.css`, if the user moved or restyled elements in the panel): the user may have changed it since you last looked.
2. Change it in place with `metamorfiles_write_file` and a `note` saying why. Never copy the template to keep the old version: the history keeps it, and the user can go back with one click. Keep variable ids and every `data-mf-id` stable, so the user's edits still apply.
3. Run the same check and preview loop, and a new review when the layout changed.
4. Pages made from the template keep their own copy of the design and don't change. If the user wants a delivered page to follow the change, make a new page from the template (`metamorfiles-variants`); both pages stay.
