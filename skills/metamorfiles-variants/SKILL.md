---
name: metamorfiles-variants
description: Use when the user wants variations of a Metamorfiles template, for example A/B test creatives from a thesis, copy or image alternatives for client approval, one asset per row of a CSV or product feed, or a batch of social or ad images in several formats. Plans variants, writes the batch spec and renders it with a review page.
---

# Generate variants and batches

A batch renders every variant of one template in every chosen format. You write the variant values yourself. Images are generated only for variables whose source is `ai`.

## Steps

1. Call `get_project`. Read the brand guide and the template's variables and sources. If the right template does not exist, use the `metamorfiles-template` workflow first.
2. Agree the plan with the user in one message:
   - **Goal:** A/B test, client options, catalog fill or campaign set.
   - **Axes:** what varies. For A/B tests, one thesis per variant, and change one idea at a time so results are readable.
   - **Size:** variants × formats × rows. Confirm before rendering more than 50 files.
3. Fill values per variant:
   - `string` variables with an `ai` source: write the copy yourself from the variable's `instruction`, the brand voice and the thesis. Respect `maxLength`.
   - `image` variables with an `ai` source: call `generate_image` with a prompt built from the instruction, the thesis and the Imagery section of DESIGN.md, at the size of the largest format. Use the returned path as the value. Reuse one image across variants when the thesis is not about the image.
   - `table` variables: do not set them. List the table in the spec and they fill from each row. Call `read_table` first to check columns and rows.
   - Only set the values that differ from the template defaults.
4. Preview before the full run: `render_preview` two or three representative variants in the most constrained format. Fix copy that overflows, then continue.
5. Write the batch spec to `batches/specs/<name>.json` with `write_file`, then call `render_batch` with that `path`. Pass `zip: true` when the user wants to send the files.
6. If `render_batch` reports the batch is still rendering, call `batch_status` with its id until it's done.
7. Read the `checks` in the result: files with errors need their values fixed (usually copy that's too long) or the template fixed. Re-render them. Then look at the contact sheet for anything the checks can't judge.
8. Report the batch folder, the file count and the review page path `batches/<id>/index.html`, and give the user the panel link from the result.

## Batch spec

```json
{
  "template": "launch-post",
  "name": "spring-hooks",
  "formats": ["instagram-post", "instagram-story"],
  "output": { "type": "png", "quality": 90, "scale": 1 },
  "variants": [
    { "id": "price-led", "thesis": "Price makes the decision easy", "values": { "headline": "Half the price, all the glow" } },
    { "id": "ritual-led", "thesis": "A two-minute routine fits any morning", "values": { "headline": "Your two-minute morning ritual" } }
  ],
  "table": { "file": "data/products.csv", "rows": "1-20", "idColumn": "sku" }
}
```

- `formats` defaults to all the template's formats. `output.type` is `png`, `jpeg` or `webp`. `scale` from 0.25 to 4.
- Variant ids are short kebab-case and unique. Files are named `<variant>__<format>.<ext>`.
- With `table`, each row is a variant filled from its columns, named by `idColumn` or `row-N`. Listed `variants` then apply as overlays to every row, giving rows × variants.
- The panel saves hand-made variants to `drafts/<template>.json` in the same shape. Read it when the user refers to variants they made in the panel.

## Rules

- Copy follows the Voice and Do's and Don'ts in DESIGN.md. No claims, prices or facts that are not in the brief, the brand guide or the table.
- Name each A/B variant by its thesis so the results can be traced.
- Never overwrite a previous batch. Each render gets its own dated folder.
