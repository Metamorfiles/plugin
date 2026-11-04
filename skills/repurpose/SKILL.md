---
name: repurpose
description: Adapts one existing design (a page, a template or an image) to other platforms and sizes in Metamorfiles Studio, composing each format for its shape, gets the set reviewed and exports it. Use when the user wants to adapt one existing image, ad or design to other platforms and sizes, for example turning an Instagram post into a story, LinkedIn, X, Pinterest and YouTube versions, or resizing a key visual or covers for a whole campaign.
license: MIT
---

# Repurpose one design into every format

Resizing is a layout job, not a crop. A piece in several formats is one page whose design declares them, so the new formats join the piece where it is, and each is composed for its shape. A template is made only when the user wants to reuse the design (the `template` skill). Changing a page or template, report each step as the `team` skill says.

## Steps

1. Call `metamorfiles_get_project` and read `brand` (DESIGN.md).
2. Find the design:
   - **A page or a template:** it is adapted in place, as new versions of the same item. Add the formats first, `metamorfiles_edit { item: "pages/<id>", changes: [{ do: "add_format", format: "instagram-story" }] }` (or `"templates/<id>"`), one change per format; then `metamorfiles_read_file` its `index.html` and write the CSS of step 4 into that copy, never into one read before the edit. A page made from a template that changes comes along as the `studio` skill's Templates, pages and history says.
   - **An image file** (a flat design with no page): bring it in with `metamorfiles_import_image { path: "<absolute path>" }`, which keeps it whole, and rebuild it as a page from its own design, every target format in its manifest: `metamorfiles_create_page { name: "Spring key visual, every format", design: "<the index.html>" }`. Separate the parts (the photo or background, the headline, the supporting copy, the call to action, the logo) and set the text live in the brand fonts, so it reflows per format instead of being stretched. If the text is baked into the picture, ask the user for the clean photo or logo files; without them, generate a clean background that follows the original with `metamorfiles_generate_image { prompt, width, height, references: ["/assets/<source>.png"] }`, at the size of the format it matters most in (`references/images.md` of the `studio` skill).
3. The target formats, when the user doesn't say, one per shape: `instagram-post` (the 4:5 post every feed takes), `instagram-square`, `instagram-story`, `linkedin-link`, `x-landscape`, `pinterest-pin`, `youtube-thumbnail`. Inline formats for custom and print sizes.
4. Compose each aspect ratio family on purpose, with `references/design.md` of the `studio` skill, in the design's CSS (`html[data-format="…"]`, and `@media (min-aspect-ratio: 5/4)` for landscape):
   - **Tall** (9:16, 2:3): stack content, clear of what the platform covers (the checks name it).
   - **Portrait and square** (4:5, 1:1): the source layout usually fits with spacing adjustments.
   - **Landscape** (1.9:1, 16:9): place copy beside the image. Headlines get shorter lines and larger relative size.
   - Set each format's crop with `object-position`, from where the subject sits.
5. Get every format's check findings and fix them (`references/contract.md` of the `studio` skill, "The checks"). Then one independent review (the `review` skill) of the page or template as it is with its new formats, and fix every **must fix**.
6. Export the page with `metamorfiles_export_page { page: "<id>" }` (and `metamorfiles_export_status { page }` while it runs). A template's set is exported as a page made from it, `metamorfiles_create_page { name: "Spring key visual, every format", template: "<id>" }`: the template and that page are two pieces, each reviewed once, the page before it's exported.
7. Hand it over as the `studio` skill's How you talk says: every format sits side by side in the panel; say in a line how each family adapts, and the next step as an offer (the zip, when the user wants to send the files).
