---
name: metamorfiles-variants
description: Use when the user wants variations of a Metamorfiles template as a deliverable, for example A/B test creatives from a thesis, copy or image alternatives for client approval, one asset per row of a CSV or product feed, a carousel post (Instagram, LinkedIn, TikTok), or a set of social or ad images in several formats to export. Plans the variants, makes a page from the template with them and exports it. To change a page that exists, use metamorfiles-team.
license: MIT
---

# Make a page of variants

A page is one deliverable made from a template: its own copy of the design, and every variant in every format. You write the variant values yourself, and make each variant's images composed for its frame, with the library's sheet as the reference (`references/images.md` of the `metamorfiles` skill, "Compose it, then make it").

## Steps

1. Call `metamorfiles_get_project`. Read the brand guide, the template's variables and sources, and the pages that already exist. If the right template doesn't exist, use the `metamorfiles-template` workflow first.
2. Plan it, and say the plan in one message as you start:
   - **Goal:** A/B test, client options, catalog fill or campaign set.
   - **Axes:** what varies. For A/B tests, one thesis per variant, and change one idea at a time so results are readable. Name each variant by its thesis, so results can be traced.
   - **Size:** variants × formats × rows. Confirm before exporting more than 50 files.
3. Fill values per variant:
   - `string` variables with an `ai` source: write the copy yourself from the variable's `instruction` and the thesis, with `references/copy.md` of the `metamorfiles` skill.
   - `image` variables: for each variant, make the image composed for its slot (what this variant is about, the slot's shape, where the copy sits), with the library's sheet as the reference (`templates/brand-board#refs`), saved into the library folder (`references/images.md`, "Compose it, then make it"); a library file only when it already is that composition, and never the same image on two variants of one post. Other parties' logos come from `metamorfiles_find_mark { name }`.
   - `table` variables: don't set them. Pass the table and each row becomes a variant filled from its columns. Call `metamorfiles_read_table { file: "data/products.csv" }` first to check columns and rows.
   - Only set the values that differ from the template defaults.
4. Preview before making the page: two or three representative variants as `metamorfiles_render_preview { item: "templates/launch-post", format: "instagram-story", values: { headline: "…" } }` in the most constrained format. Fix copy that overflows, then continue.
5. Call `metamorfiles_create_page { name: "Spring headline test", template: "launch-post", variants: [{ id: "price-led", name: "Price-led", thesis: "…", values: { headline: "…" } }] }` (or `table` in place of `variants`), named for the deliverable as the user would say it, not a date or an id. When a variant's values don't fit the template, it refuses and names them: fix those variants and call it again. Fix any warning in its check by changing `page.json`. Make each deliverable once: when the design needs fixing, fix the template and bring the page along with `metamorfiles_update_page { page: "<id>" }` (new `variants` too, if they change), never a new page, so the user keeps watching the same one.
6. Call `metamorfiles_export_page { page: "<id>" }`, with `zip: true` when the user wants to send the files. If it reports the export is still running, call `metamorfiles_export_status { page: "<id>" }` until it's done.
7. Read the `checks` in the result: files with errors need their values fixed (usually copy that's too long) or the page's design fixed. Fix them in the page and export again. Then look at the contact sheet for anything the checks can't judge.
8. Get the independent review with `metamorfiles-review` before you deliver it.
9. Hand it over: every variant in every format sits side by side in the panel; say what each variant tests, and one question.

## Carousels

A carousel is a page whose variants are the slides of one post, in order: pass `carousel: true` to `metamorfiles_create_page`. The first slide is the cover, the last the end, the rest the body.

- **Plan it first.** Before the template, plan the slides as `references/carousels.md` of the `metamorfiles` skill describes (`metamorfiles_get_guide { name: "metamorfiles", file: "references/carousels.md" }`): one line per slide with what it gives, its pattern and its layout. The copywriter and the designer both work from that plan, and say it in one message as you start.
- **The template carries every slide.** Design it once with a layout per role, and two or three body layouts chosen per slide by a `layout` enum variable, as the plan alternates them: the frame gets `data-slide="cover|body|end"` and `--slide-index`, so the CSS can give the cover its headline and the end its action (`html[data-slide="cover"] .kicker { display: none }`). Slides differ in their values, never in copies of the design. On its own, the template shows its cover, a body slide and its end with its defaults (`metamorfiles_render_preview { item: "templates/<id>", variant: "body" }`; `cover` and `end` likewise): each must read right with those defaults, since that's what the user sees when they open the template.
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

- Studio writes it when it makes the page; `template.hash` is how it tells that the template changed since. `metamorfiles_create_page` takes no page-wide `values`, `caption` or `captions`: add those after it, by reading `page.json`, adding them and writing it back.
- Variant ids are short kebab-case and unique; `name` is what the user sees. Exported files are named `<page>-<variant>-<format>.<ext>`. On a carousel, the order of `variants` is the order of the slides.
- Values stack from wide to narrow: the page's `values` (every frame), then a variant's `values` (every format of that variant), then its `formats: { "instagram-story": { "headline": "…" } }` (one frame). The narrower one wins. The user makes all three in the control panel; keep them when you change the page, and write to the level the user means: "everywhere", "in this variant" or "just the story".
- A variant's `caption` is the words posted with it, `captions` its own per platform where one needs different words, keyed by Studio's platform names exactly (`{ "LinkedIn": "…" }`; also Instagram, Facebook, X, Threads, Bluesky, Pinterest, TikTok, YouTube), and `alt` its alt text, each set in its entry of `variants`; a carousel's caption is the page's `caption`, and each slide keeps its `alt`. Write them with `references/copy.md` of the `metamorfiles` skill whenever the user will post the page. The export writes them to `post.md` beside the images, and the alt text into each image file.
- `output.type` is `png`, `jpeg` or `webp`, `scale` from 0.25 to 4.
- The page's formats are in the manifest of its own `index.html`, as in a template. Pass `formats` to `metamorfiles_create_page` when the page needs different ones.
- With `table` (`{ "file": "data/products.csv", "rows": "1-20", "idColumn": "sku" }`), each row becomes a variant named by `idColumn` or `row-N`, with its values copied in, so the page doesn't change when the CSV does. Listed `variants` then apply to every row, giving rows × variants.
