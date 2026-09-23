---
name: metamorfiles-repurpose
description: Use when the user wants to adapt one existing image, ad or design to other platforms and sizes with Metamorfiles, for example turning an Instagram post into a story, LinkedIn, X, Pinterest and YouTube versions, or resizing a key visual for a whole campaign.
---

# Repurpose one design into every format

Resizing is a layout job, not a crop. Rebuild the design as a template whose structure adapts per format, then render it once in every size.

## Steps

1. Call `metamorfiles_get_project` and read the brand guide.
2. Get the source design into the project:
   - A template that already exists: `metamorfiles_read_file` it and skip to step 4.
   - An image file: save it to `assets/` with `metamorfiles_write_file` using `base64` if it is not in the project already.
3. Rebuild the source as a template with the `metamorfiles-template` workflow:
   - Separate the parts: background or photo, headline, supporting copy, call to action, logo, badges.
   - Recreate the text as live text with the brand fonts, so it reflows per format instead of being stretched.
   - If the source is a flat image with text baked in, ask the user for the clean photo or logo files. Without them, generate a clean background with `metamorfiles_generate_image` that follows the original, using the source image as a reference.
   - Make the photo an `image` variable and the copy `string` variables, so the result can also feed pages of variants.
4. Declare the target formats. Default set when the user does not say: `instagram-post`, `instagram-square`, `instagram-story`, `facebook-post`, `linkedin-post`, `x-post`, `pinterest-pin`, `youtube-thumbnail`. Use inline formats for custom sizes.
5. Design each aspect ratio family on purpose:
   - **Tall** (9:16, 2:3): stack content, keep the top 14% and bottom 20% clear in stories.
   - **Portrait and square** (4:5, 1:1): the source layout usually fits with spacing adjustments.
   - **Landscape** (1.9:1, 16:9): place copy beside the image. Headlines get shorter lines and larger relative size.
   - Adjust `object-position` so the subject stays in frame in every crop.
6. `metamorfiles_render_preview` every format, fix every check error, compare each with the source, and fix until they read as one family. Then get an independent review with `metamorfiles-review`.
7. Make the set a page with `metamorfiles_create_page`, named for the deliverable ("Spring key visual, every format"), from the template with its default values, then export it with `metamorfiles_export_page` (and `metamorfiles_export_status` while it runs).
8. Hand it over: the control panel link first, where every format sits side by side, then a line on how each family adapts, and one question. Offer the zip when the user wants to send the files.
