---
name: template
description: Writes a reusable Metamorfiles template's index.html following the contract, from a brief, a reference image, a screenshot or an existing page, checks it in every format and gets it reviewed. Use when the user wants a reusable template: a key visual, a series they will repeat, or a design to make variants and A/B tests from. A one-off post or carousel is a page from its own design (the team skill, A new piece); to change an existing template, use the team skill.
license: MIT
---

# Create a template

A template is a reusable design whose changeable parts are declared variables, made when the user wants reuse: a one-off piece is a page from its own design instead (the `team` skill, A new piece). From an existing page, read its `index.html`, declare as variables what will change between uses, and write the template. The contract and the quality loop are in `references/contract.md` of the `studio` skill, the craft in its other references; follow them exactly.

## Steps

1. Call `metamorfiles_get_project`. Read `brand`: the DESIGN.md tokens tell you every `--brand-*` variable, and its prose tells you how to use them. If there's no brand kit, build it first with the `brand` skill.
2. Settle the brief: the channel and formats, the message, and what must change between variants. Everything that changes becomes a variable; everything else stays fixed in the design. Ask only for what you can't infer (the `studio` skill, How you talk).
3. If the user gives a reference image, study its layout, hierarchy, spacing and mood. Recreate the structure with the brand's fonts and colors, not a pixel copy.
   For a carousel, plan its slides first with `references/carousels.md` of the `studio` skill, and the Carousels section of the `variants` skill: the plan decides the template's slide layouts.
4. Plan the variables before writing HTML:
   - Copy that varies becomes `string` variables with `maxLength`, sized so the longest value still fits.
   - Photos and illustrations become `image` variables: an image made for each variant's slot, as `references/images.md` of the `studio` skill says ("Compose it, then make it"); never the same image on two variants. One that carries the piece gets `"source": { "kind": "ai", "instruction": "…" }`, naming what it shows and its slot. A library image as its default only shows the look. Other parties' logos are separate `image` variables, filled with `metamorfiles_find_mark`.
   - Values coming from a CSV use `"source": { "kind": "table", "column": "…" }`. Call `metamorfiles_read_table { file: "data/products.csv" }` first to get the exact column names.
   - Useful design switches become `enum`, `boolean`, `anchor`, `color` or `number` variables. Keep them few and meaningful.
   - Defaults must be real, on-brand content, so the default render is a finished design: write them with `references/design.md` of the `studio` skill and the `copywriting` skill, and images with `references/images.md` of the `studio` skill.
5. Choose a short kebab-case id and write the template with `metamorfiles_write_file { path: "templates/launch-post/index.html", content, note }`. Link `../../brand/brand.css`, and use brand images and logos in place, as the contract says.
6. Read the check in the `metamorfiles_write_file` result. Fix every error and warning, then write again.
7. Run the quality loop in every declared format, until every format looks designed for its size.
8. Get the independent review with the `review` skill and fix every **must fix**.
9. Hand it over: what the design does, the variables the user can change in the panel, and one question, usually whether to make the first page from it.
