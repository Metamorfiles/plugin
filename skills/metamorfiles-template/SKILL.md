---
name: metamorfiles-template
description: Use when the user wants a new Metamorfiles template, for example a social post, ad or banner design from a brief, a reference image, a screenshot or an existing design. Writes the template's index.html following the contract, checks it in every format and gets it reviewed. To change an existing template, use metamorfiles-team.
license: MIT
---

# Create a template

A template is a reusable design whose changeable parts are declared variables. The contract, the craft and the quality loop are in the `metamorfiles` skill; follow them exactly.

## Steps

1. Call `metamorfiles_get_project`. Read `brand`: the DESIGN.md tokens tell you every `--brand-*` variable, and its prose tells you how to use them. If there's no brand kit, build it first with `metamorfiles-brand`.
2. Settle the brief: the channel and formats, the message, and what must change between variants. Everything that changes becomes a variable; everything else stays fixed in the design. Ask only for what you can't infer (see How you talk in `metamorfiles`).
3. If the user gives a reference image, study its layout, hierarchy, spacing and mood. Recreate the structure with the brand's fonts and colors, not a pixel copy.
   For a carousel, plan its slides first with `references/carousels.md` of the `metamorfiles` skill, and the Carousels section of `metamorfiles-variants`: the plan decides the template's slide layouts.
4. Plan the variables before writing HTML:
   - Copy that varies becomes `string` variables with `maxLength`, sized so the longest value still fits.
   - Photos and illustrations become `image` variables. One that carries the piece gets `"source": { "kind": "ai", "instruction": "…" }`, the instruction naming what it shows and its slot (shape, where it stays calm), so each variant's image is composed for its frame and made with the library's sheet as the reference (`references/images.md`, "Compose it, then make it"). A library image as its default only shows the look. Other parties' logos are separate `image` variables, filled with `metamorfiles_find_mark`.
   - Values coming from a CSV use `"source": { "kind": "table", "column": "…" }`. Call `metamorfiles_read_table { file: "data/products.csv" }` first to get the exact column names.
   - Useful design switches become `enum`, `boolean`, `anchor`, `color` or `number` variables. Keep them few and meaningful.
   - Defaults must be real, on-brand content, so the default render is a finished design: write them with `references/design.md` and `references/copy.md` of the `metamorfiles` skill, and images with `references/images.md`.
5. Choose a short kebab-case id and write the template with `metamorfiles_write_file { path: "templates/launch-post/index.html", content, note }`. Link `../../brand/brand.css`. Use the brand's own images where they are, as `../../brand/refs/…` and `../../brand/logos/…`: never copy them, since a copy drifts from the brand and later needs deleting. Save only other images into the template folder, or generate one and use the `/assets/…` path it returns exactly as given.
6. Read the check in the `metamorfiles_write_file` result. Fix every error and warning, then write again.
7. Run the quality loop in every declared format, until every format looks designed for its size.
8. Get the independent review with `metamorfiles-review` and fix every **must fix**.
9. Hand it over: what the design does, the variables the user can change in the panel, and one question, usually whether to make the first page from it.
