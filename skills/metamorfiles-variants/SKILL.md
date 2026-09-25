---
name: metamorfiles-variants
description: Use when the user wants variations of a Metamorfiles template as a deliverable, for example A/B test creatives from a thesis, copy or image alternatives for client approval, one asset per row of a CSV or product feed, a carousel post (Instagram, LinkedIn, TikTok), or a set of social or ad images in several formats to export. Plans the variants, makes a page from the template with them and exports it. To change a page that exists, use metamorfiles-team.
license: MIT
---

# Make a page of variants

A page is one deliverable made from a template: its own copy of the design, and every variant in every format. You write the variant values yourself. Images are generated only for variables whose source is `ai`.

## Steps

1. Call `metamorfiles_get_project`. Read the brand guide, the template's variables and sources, and the pages that already exist. If the right template doesn't exist, use the `metamorfiles-template` workflow first.
2. Plan it, and say the plan in one message as you start:
   - **Goal:** A/B test, client options, catalog fill or campaign set.
   - **Axes:** what varies. For A/B tests, one thesis per variant, and change one idea at a time so results are readable. Name each variant by its thesis, so results can be traced.
   - **Size:** variants × formats × rows. Confirm before exporting more than 50 files.
3. Fill values per variant:
   - `string` variables with an `ai` source: write the copy yourself from the variable's `instruction` and the thesis, with `references/copy.md` of the `metamorfiles` skill.
   - `image` variables with an `ai` source: make them with `references/images.md`, from the instruction and the thesis. Before making more than a few images, tell the user how many and what the result said each costs.
   - `table` variables: don't set them. Pass the table and each row becomes a variant filled from its columns. Call `metamorfiles_read_table` first to check columns and rows.
   - Only set the values that differ from the template defaults.
4. Preview before making the page: `metamorfiles_render_preview` two or three representative variants (the template plus their `values`) in the most constrained format. Fix copy that overflows, then continue.
5. Call `metamorfiles_create_page` with a `name` for the deliverable as the user would say it ("Spring headline test", not a date or an id), the `template`, and the `variants` (or the `table`). Read the check in the result and fix any error by changing `page.json`.
6. Call `metamorfiles_export_page` with the page id. Pass `zip: true` when the user wants to send the files. If it reports the export is still running, call `metamorfiles_export_status` until it's done.
7. Read the `checks` in the result: files with errors need their values fixed (usually copy that's too long) or the page's design fixed. Fix them in the page and export again. Then look at the contact sheet for anything the checks can't judge.
8. Get the independent review with `metamorfiles-review` before you deliver it.
9. Hand it over: every variant in every format sits side by side in the panel; say what each variant tests, and one question.

## Carousels

A carousel is a page whose variants are the slides of one post, in order: pass `carousel: true` to `metamorfiles_create_page`. The first slide is the cover, the last the end, the rest the body.

- **The template carries every slide.** Design it once with a layout per role: the frame gets `data-slide="cover|body|end"` and `--slide-index`, so the CSS can give the cover its headline and the end its action (`html[data-slide="cover"] .kicker { display: none }`). Slides differ in their values, never in copies of the design. A `layout` enum variable covers body slides that need different arrangements.
- **One story.** The cover stops the scroll and promises something specific; each body slide carries one idea; the end says what to do next. `references/design.md` and `references/copy.md` of the `metamorfiles` skill have the craft.
- **Seamless** carousels, where a background or an image runs across the seams, put that layer in an element with `data-span`: it spans every slide, and each slide shows its own part of it, lined up exactly.
- **Platform limits:** Instagram up to 20 slides, all in one shape; LinkedIn takes the carousel as a PDF, which the export writes; TikTok 35; Threads 20; Bluesky 10; Pinterest 5; X 4. The check warns past a platform's limit.
- The export names slides in order (`<page>-<format>-01.png` …) and writes one PDF per format.

## page.json

```json
{
  "name": "Spring headline test",
  "template": { "id": "launch-post", "hash": "…" },
  "values": { "badge": "New" },
  "variants": [
    { "id": "price-led", "name": "Price-led", "thesis": "Price makes the decision easy", "values": { "headline": "Half the price, all the glow" }, "caption": "Our Vitamin C serum, now half price for spring.", "alt": "An amber serum bottle on a stone ledge in warm morning light." },
    { "id": "ritual-led", "name": "Ritual-led", "thesis": "A two-minute routine fits any morning", "values": { "headline": "Your two-minute morning ritual" } }
  ],
  "output": { "type": "png", "quality": 90, "scale": 1 }
}
```

- Studio writes it when it makes the page; `template.hash` is how it tells that the template changed since.
- Variant ids are short kebab-case and unique; `name` is what the user sees. Exported files are named `<page>-<variant>-<format>.<ext>`. On a carousel, the order of `variants` is the order of the slides.
- Values stack from wide to narrow: the page's `values` (every frame), then a variant's `values` (every format of that variant), then its `formats: { "instagram-story": { "headline": "…" } }` (one frame). The narrower one wins. The user makes all three in the control panel; keep them when you change the page, and write to the level the user means: "everywhere", "in this variant" or "just the story".
- A variant's `caption` is the words posted with it, `captions` its own per platform (`{ "LinkedIn": "…" }`) where one needs different words, and `alt` its alt text; a carousel's caption is the page's `caption`, and each slide keeps its `alt`. Write them with `references/copy.md` of the `metamorfiles` skill whenever the user will post the page. The export writes them to `post.md` beside the images, and the alt text into each image file.
- `output.type` is `png`, `jpeg` or `webp`, `scale` from 0.25 to 4.
- The page's formats are in the manifest of its own `index.html`, as in a template. Pass `formats` to `metamorfiles_create_page` when the page needs different ones.
- With `table` (`{ "file": "data/products.csv", "rows": "1-20", "idColumn": "sku" }`), each row becomes a variant named by `idColumn` or `row-N`, with its values copied in, so the page doesn't change when the CSV does. Listed `variants` then apply to every row, giving rows × variants.
