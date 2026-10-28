# Template contract

What a template's or page's HTML must be, and how to check it. Read it before you write or change one.

## Contents
- The file
- Variable types
- Bindings
- Formats
- Rules the check enforces
- Element edits
- Layout rules
- Quality loop

## The file

A template is one HTML file. It declares formats and variables in a JSON script tag and binds them with attributes and CSS.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../brand/brand.css" />
    <script type="application/json" id="metamorfiles">
      {
        "formats": ["instagram-post", "instagram-story", "linkedin-link"],
        "variables": [
          { "id": "headline", "type": "string", "label": "Headline", "default": "Glow that lasts all day", "maxLength": 60,
            "source": { "kind": "ai", "instruction": "Benefit-led hook, max 6 words" } },
          { "id": "price", "type": "string", "label": "Price", "default": "$38", "source": { "kind": "table", "column": "price" } },
          { "id": "photo", "type": "image", "label": "Photo", "default": "photo.jpg" },
          { "id": "accent", "type": "color", "label": "Accent", "default": "#c9785b" },
          { "id": "headlineSize", "type": "number", "label": "Headline size", "default": 9, "min": 5, "max": 14, "step": 0.5, "unit": "vmin" },
          { "id": "showPrice", "type": "boolean", "label": "Show price", "default": true },
          { "id": "layout", "type": "enum", "label": "Layout", "default": "split",
            "options": [{ "value": "split", "label": "Split" }, { "value": "full", "label": "Full bleed" }] },
          { "id": "headlineFont", "type": "font", "label": "Headline font", "default": "Inter" },
          { "id": "logoPosition", "type": "anchor", "label": "Logo position", "default": "top-left" }
        ]
      }
    </script>
    <style>
      .headline { font-family: var(--headlineFont), var(--brand-font); font-size: var(--headlineSize); }
      .price { background: var(--accent); }
      html[data-layout="full"] .photo { position: absolute; inset: 0; }
      html[data-format="instagram-story"] .copy { padding-bottom: 20vmin; }
      .logo[data-anchor^="bottom-"] { bottom: 0; }
    </style>
  </head>
  <body>
    <img class="photo" data-var-src="photo" src="photo.jpg" alt="" />
    <h1 class="headline" data-var-text="headline">Glow that lasts all day</h1>
    <span class="price" data-var-show="showPrice" data-var-text="price">$38</span>
    <img class="logo" data-var-anchor="logoPosition" src="../../brand/logos/logo.svg" alt="" />
  </body>
</html>
```

## Variable types

| Type      | Fields                                   | Value                                                             |
| --------- | ---------------------------------------- | ----------------------------------------------------------------- |
| `string`  | `maxLength`, `multiline`                 | text                                                              |
| `number`  | `min`, `max`, `step`, `unit` (required min and max) | number; the CSS variable gets the unit                 |
| `color`   |                                          | hex color                                                         |
| `boolean` |                                          | true or false                                                     |
| `enum`    | `options` with `value` and `label`       | one option value                                                  |
| `image`   |                                          | path relative to the template folder, or project-absolute like `/assets/hero.png` |
| `font`    |                                          | a family listed in DESIGN.md `fonts`                              |
| `anchor`  |                                          | `top-left`, `top-center`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom-center`, `bottom-right` |

Every variable has `id`, `type`, `label` and `default`. An optional `source` says where variant values come from: `static` (the default), `ai` with an `instruction` for you, or `table` with a CSV `column`.

## Bindings

| Binding                | Effect                                                           |
| ---------------------- | ---------------------------------------------------------------- |
| `data-var-text="id"`   | sets the text of the element (string, number or enum)            |
| `data-var-src="id"`    | sets `src` (image)                                               |
| `data-var-show="id"`   | hides the element when false (boolean)                           |
| `data-var-anchor="id"` | sets `data-anchor` on the element for CSS (anchor)               |
| `var(--id)`            | every variable is a CSS custom property on `<html>`; images are `url(...)` |
| `html[data-id="value"]`| enum, boolean and anchor values are also attributes on `<html>`  |
| `html[data-format="…"]`| the current format id; `--format-width` and `--format-height` hold its size |

## Formats

A preset id, `<platform>-<shape>`: a `-post` is the platform's 4:5 feed post (1080×1350), a `-link` its link preview.
- Instagram: `instagram-post`, `instagram-tall` 1080×1440, `instagram-square`, `instagram-landscape` 1080×566, `instagram-story`, `instagram-reel-cover` (both 1080×1920).
- Facebook: `facebook-post`, `facebook-square`, `facebook-link` 1200×630, `facebook-story`, `facebook-cover` 851×315, `facebook-group-cover` 1640×856, `facebook-event-cover` 1920×1005.
- LinkedIn: `linkedin-post`, `linkedin-square`, `linkedin-link` 1200×627, `linkedin-cover` 1584×396, `linkedin-company-cover` 1512×256.
- X: `x-post`, `x-square`, `x-landscape` 1600×900, `x-header` 1500×500. Threads and Bluesky: `threads-link` 1200×600, `bluesky-header` 1500×500.
- Pinterest: `pinterest-pin` 1000×1500, `pinterest-cover` 800×450. TikTok: `tiktok-photo` 1080×1920. YouTube: `youtube-thumbnail` 1280×720, `youtube-banner` 2560×1440. Anywhere: `profile-photo` 800×800, shown in a circle.

The posts of Instagram, Facebook, LinkedIn and X are the same size, so one of them serves all four unless the user names a platform. Presets know what their platform covers (a story's profile bar, a banner's edges on phones, the profile circle); the checks name it when text or a logo sits there.

Any other size is inline: `{ "id": "banner", "width": 1500, "height": 500 }`. Print: a preset from `references/print.md` (`a4`, `us-letter`, `business-card`…), or an inline size in mm or in with `dpi` and `bleed` for a printer's own template. The design fills the bleed with background and keeps everything that matters inside the trim; the export adds a PDF at the physical size. A height of `"auto"` makes the image as tall as its content, for long pages such as a one-pager; size those in px or `vw`, since `vmin` follows the width.

## Rules the check enforces

- No remote URLs and no remote `@import`. Use brand images in place from `brand/refs/` and `brand/logos/`, never a copy (whether a library image fits or a new one is made: `references/images.md`, "Compose it, then make it"); save other images into the template folder or `assets/`, fonts into `brand/fonts/`.
- No `<script>` tags besides the manifest. Use variables and CSS.
- Every binding references a declared variable of a matching type. Unused variables are warnings.
- Default images must exist. Font defaults must be listed in DESIGN.md `fonts`.
- Variable ids can't start with `brand-`: that namespace belongs to the brand tokens.

## Element edits

Studio writes panel edits to `edits.css`: make them with `metamorfiles_edit`, never by hand; keep every `data-mf-id`; when you rework the layout, fold the edits into the template's CSS and remove those lines.

## Layout rules

These keep every format working.

- The body is exactly the format size. Size the root with `100vw` and `100vh`, and use `vmin` for type, spacing and radii.
- Adapt structure with `@media (min-aspect-ratio: 5/4)` for landscape formats and `html[data-format="…"]` for specific formats.
- Use brand tokens for colors, type and spacing: `--brand-<color>` (text on a surface uses its `on-` color, like `--brand-on-primary` on `--brand-primary`, or a component's pair), `--brand-<role>-font`, `-size`, `-weight`, `-tracking` and `-case` (the role's letter case, such as capitals for headlines: `text-transform: var(--brand-display-case, none)`), `--brand-safe-margin`. Never hardcode a color the brand already names.
- Keep every text inside `--brand-safe-margin`, and text and logos clear of what the platform covers: a story's profile and reply bars, a cover's cropped edges, a profile photo's corners. The checks name the zone.

## Quality loop

Every `metamorfiles_render_preview { item: "templates/launch-post", format: "instagram-story" }` (add `variant` for a page, `values` to try copy) returns design checks measured on the rendered image:
- **Errors:** clipped text, text that spills out of its box, text outside the image or the safe margin, fonts that fell back, broken or stretched images, contrast below 3:1 against what's actually behind the text, photo included.
- **Warnings:** upscaled images, small text below 4.5:1.

After every edit, preview the frames it changed: every declared format when you changed the design itself, only the variants and formats whose values or edits you changed otherwise. Fix every error, and every warning that isn't a deliberate choice, then preview again. The checks can't judge composition, so also look at each image as `references/design.md` says. Stress it once with the longest plausible copy and every boolean or enum option that changes the layout. Then get the independent review (the `review` skill says when) before you hand the work over.
