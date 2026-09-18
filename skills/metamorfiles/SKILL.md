---
name: metamorfiles
description: Use for any Metamorfiles Studio work, such as on-brand social posts, ad creatives, image templates, A/B variants, batches from a data table, or resizing a design into other platform formats. Explains the project layout, the template contract and the tools, then routes to the right workflow skill.
---

# Metamorfiles Studio

Metamorfiles turns a brand and a brief into HTML image templates, then renders batches of variants as pixel-exact PNG, JPEG or WebP files. Everything runs on the user's machine through the `metamorfiles` MCP server.

## Start every session

1. Call `get_project`. If it says no project is open, ask the user for the project folder and call `get_project` with its absolute `path`. If they have no project yet, suggest an empty folder and pass `create: true`.
2. Read the returned `brand` guide before writing any copy or design.
3. Pick the workflow below.

## Workflows

| The user wants                                                         | Use                        |
| ---------------------------------------------------------------------- | -------------------------- |
| Set up or change the brand: voice, colors, fonts, logos                | `metamorfiles-brand`       |
| A new template from a brief, a reference image or an existing design   | `metamorfiles-template`    |
| Copy or image variants, A/B test grids, fills from a CSV, a batch      | `metamorfiles-variants`    |
| One image or design adapted to other platforms and sizes               | `metamorfiles-repurpose`   |
| Hands-on tweaking of variables, saving defaults, reviewing batches     | `open_panel`, give the URL |

If the workflow skill is not loaded, follow the rules in this file and the tool descriptions.

## Tools

| Tool             | Use it to                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| `get_project`    | Open or create the project. Returns brand.md, templates, variables and batches.              |
| `read_file`      | Read templates, brand.css, CSVs and batch specs. Paths are project-relative.                   |
| `write_file`     | Create or replace files. Writing `templates/<id>/index.html` returns the contract check.       |
| `read_table`     | Read CSV columns and rows before planning a table batch.                                       |
| `generate_image` | Create an image for a variable whose source is `ai`. Saves under `assets/`.                    |
| `render_preview` | Render one template in one format with given values and look at the result.                   |
| `render_batch`   | Render every variant in every format. Writes a review page and returns a contact sheet.        |
| `open_panel`     | Start the local control panel and return its URL.                                              |

## Project layout

```
metamorfiles.json          project marker: name, imageModel
brand/brand.md             voice, audience, do and don't rules
brand/brand.css            @font-face rules and --brand-* CSS variables
brand/fonts/ logos/ refs/  local brand files
templates/<id>/index.html  one template per folder, plus its local images
data/*.csv                 data tables
assets/                    uploaded and generated images
drafts/<template>.json     variants saved from the control panel
batches/<date>-<name>/     rendered files, batch.json, contact-sheet.jpg, index.html
```

## Template contract

A template is one HTML file. It declares formats and variables in a JSON script tag and binds them with attributes and CSS.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../brand/brand.css" />
    <script type="application/json" id="metamorfiles">
      {
        "formats": ["instagram-post", "instagram-story", "linkedin-post"],
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

**Variable types**

| Type      | Fields                                   | Value                                                             |
| --------- | ---------------------------------------- | ----------------------------------------------------------------- |
| `string`  | `maxLength`, `multiline`                 | text                                                              |
| `number`  | `min`, `max`, `step`, `unit` (required min and max) | number; the CSS variable gets the unit                 |
| `color`   |                                          | hex color                                                         |
| `boolean` |                                          | true or false                                                     |
| `enum`    | `options` with `value` and `label`       | one option value                                                  |
| `image`   |                                          | path relative to the template folder, or project-absolute like `/assets/hero.png` |
| `font`    |                                          | a family declared with `@font-face` in brand/brand.css            |
| `anchor`  |                                          | `top-left`, `top-center`, `top-right`, `center-left`, `center`, `center-right`, `bottom-left`, `bottom-center`, `bottom-right` |

Every variable has `id`, `type`, `label` and `default`. An optional `source` says where variant values come from: `static` (the default), `ai` with an `instruction` for you, or `table` with a CSV `column`.

**Bindings**

| Binding                | Effect                                                           |
| ---------------------- | ---------------------------------------------------------------- |
| `data-var-text="id"`   | sets the text of the element (string, number or enum)            |
| `data-var-src="id"`    | sets `src` (image)                                               |
| `data-var-show="id"`   | hides the element when false (boolean)                           |
| `data-var-anchor="id"` | sets `data-anchor` on the element for CSS (anchor)               |
| `var(--id)`            | every variable is a CSS custom property on `<html>`; images are `url(...)` |
| `html[data-id="value"]`| enum, boolean and anchor values are also attributes on `<html>`  |
| `html[data-format="…"]`| the current format id; `--format-width` and `--format-height` hold its size |

**Formats:** `instagram-post` 1080×1350, `instagram-square` 1080×1080, `instagram-story` 1080×1920, `facebook-post` 1200×630, `linkedin-post` 1200×627, `x-post` 1600×900, `pinterest-pin` 1000×1500, `youtube-thumbnail` 1280×720, or inline `{ "id": "banner", "width": 1500, "height": 500 }`.

**Rules the check enforces**

- No remote URLs and no remote `@import`. Save images into the template folder or `assets/`, fonts into `brand/fonts/`.
- No `<script>` tags besides the manifest. Use variables and CSS.
- Every binding references a declared variable of a matching type. Unused variables are warnings.
- Default images must exist. Font defaults must have an `@font-face` in brand/brand.css.

**Layout rules that keep every format working**

- The body is exactly the format size. Size the root with `100vw` and `100vh`, and use `vmin` for type, spacing and radii.
- Adapt structure with `@media (min-aspect-ratio: 5/4)` for landscape formats and `html[data-format="…"]` for specific formats.
- Use brand variables from brand.css for colors and fonts. Never hardcode a color the brand already names.
- Keep text away from the edges: at least 5vmin of padding. Story formats need extra room at the top and bottom for platform UI.

## Quality loop

After every template edit, call `render_preview` in every declared format, look at each image, and fix clipping, overlap, weak contrast, awkward line breaks or off-brand choices. Repeat until the check passes with no warnings and every format looks designed for its size. Show the final previews to the user.

