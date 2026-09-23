---
name: metamorfiles-variants
description: Use when the user wants variations of a Metamorfiles template as a deliverable, for example A/B test creatives from a thesis, copy or image alternatives for client approval, one asset per row of a CSV or product feed, or a set of social or ad images in several formats to export. Plans the variants, makes a page from the template with them and exports it.
---

# Make a page of variants

A page is one deliverable made from a template: its own copy of the design, and every variant in every format. You write the variant values yourself. Images are generated only for variables whose source is `ai`.

## Steps

1. Call `metamorfiles_get_project`. Read the brand guide, the template's variables and sources, and the pages that already exist. If the right template doesn't exist, use the `metamorfiles-template` workflow first.
2. Agree the plan with the user in one message:
   - **Goal:** A/B test, client options, catalog fill or campaign set.
   - **Axes:** what varies. For A/B tests, one thesis per variant, and change one idea at a time so results are readable.
   - **Size:** variants × formats × rows. Confirm before exporting more than 50 files.
3. Fill values per variant:
   - `string` variables with an `ai` source: write the copy yourself from the variable's `instruction`, the brand voice and the thesis. Respect `maxLength`.
   - `image` variables with an `ai` source: call `metamorfiles_generate_image` with a prompt built from the instruction, the thesis and the Imagery section of DESIGN.md, at the size of the largest format. Use the returned path as the value; if it's still generating, wait with `metamorfiles_image_status`. Reuse one image across variants when the thesis is not about the image. Before making more than a few images, tell the user how many and what the result said each costs.
   - `table` variables: don't set them. Pass the table and each row becomes a variant filled from its columns. Call `metamorfiles_read_table` first to check columns and rows.
   - Only set the values that differ from the template defaults.
4. Preview before making the page: `metamorfiles_render_preview` two or three representative variants (the template plus their `values`) in the most constrained format. Fix copy that overflows, then continue.
5. Call `metamorfiles_create_page` with a `name` for the deliverable as the user would say it ("Spring headline test", not a date or an id), the `template`, and the `variants` (or the `table`). Read the check in the result and fix any error by changing `page.json`.
6. Call `metamorfiles_export_page` with the page id. Pass `zip: true` when the user wants to send the files. If it reports the export is still running, call `metamorfiles_export_status` until it's done.
7. Read the `checks` in the result: files with errors need their values fixed (usually copy that's too long) or the page's design fixed. Fix them in the page and export again. Then look at the contact sheet for anything the checks can't judge.
8. Get an independent review with `metamorfiles-review` before you deliver it.
9. Hand it over: the control panel link first, where the user sees every variant in every format side by side, then what each variant tests and one question.

## page.json

```json
{
  "name": "Spring headline test",
  "template": { "id": "launch-post", "hash": "…" },
  "variants": [
    { "id": "price-led", "name": "Price-led", "thesis": "Price makes the decision easy", "values": { "headline": "Half the price, all the glow" } },
    { "id": "ritual-led", "name": "Ritual-led", "thesis": "A two-minute routine fits any morning", "values": { "headline": "Your two-minute morning ritual" } }
  ],
  "output": { "type": "png", "quality": 90, "scale": 1 }
}
```

- Studio writes it when it makes the page; `template.hash` is how it tells that the template changed since.
- Variant ids are short kebab-case and unique; `name` is what the user sees. Exported files are named `<page>-<variant>-<format>.<ext>`.
- `output.type` is `png`, `jpeg` or `webp`, `scale` from 0.25 to 4.
- The page's formats are in the manifest of its own `index.html`, as in a template. Pass `formats` to `metamorfiles_create_page` when the page needs different ones.
- With `table` (`{ "file": "data/products.csv", "rows": "1-20", "idColumn": "sku" }`), each row becomes a variant named by `idColumn` or `row-N`, with its values copied in, so the page doesn't change when the CSV does. Listed `variants` then apply to every row, giving rows × variants.

## Changing a page

The user changes pages in the control panel too: values, variants, element positions and styles. So read `page.json` (and the page's `index.html` or `edits.css`) with `metamorfiles_read_file` right before you change it, change it in place with `metamorfiles_write_file` and a `note`, and export again. A review fix, a new photo or a copy change is a new version of the same page, never a new page: the history keeps the old one, and the user's list stays one page per deliverable. Make a new page only for a new deliverable, or to follow a changed template.

## Rules

- Copy follows the Voice and Do's and Don'ts in DESIGN.md. No claims, prices or facts that are not in the brief, the brand guide or the table.
- Name each A/B variant by its thesis so the results can be traced.
- One page per deliverable. Post and story of the same campaign are two formats of one page, not two pages.
