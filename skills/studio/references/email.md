# Email signatures

`design.md` and the `copywriting` skill still apply; this is what mail apps allow.

## What it holds

The person's name, then their role, then the contact lines they gave (email, phone, website, an address), and the brand's small mark or logo, small. Never invent a line: ask for what's missing, or leave it out. A link is a real link: `<a href="mailto:…">`, `<a href="https://…">`.

## How it's built

Mail apps keep little of the web: no style sheets, no web fonts in Gmail or Outlook, no flex, grid or positioning, no SVG.
- Lay it out with a `<table>`, one row or two; 320 to 450 px wide, never over 600: `{ "id": "signature", "width": 440, "height": 120 }` in the design's manifest.
- The brand's fonts with a plain fallback after them (`var(--brand-font)` has one): most readers see the fallback, so it must still look right in it.
- Images as PNG or JPEG, each with `alt`, `width` and `height`: the brand's small mark from the exported kit (`Website/icon-192.png`), never the SVG.
- Under 10,000 characters of HTML, Gmail's limit.

`metamorfiles_create_page { name: "Email signature", kind: "email-signature", design: "<index.html>", hosted: "https://example.com/email/", variants: [{ id: "ana" }] }`: a variant per person when there are several.

## The images

Studio can't host images. Ask the user once for a public folder on their own site where the images can go (`hosted`): the export points the signature's images there and puts the files beside it to upload. Without one, the files go beside the HTML and the user adds them in their mail app (Gmail's signature editor has an image button). Say which, in plain words, when you hand it over.

## The files

`metamorfiles_export_page` writes `<name>-<variant>-signature.html`, its images, and a PNG preview. The checks name an image without alt text, an SVG, a width over 600, layout Gmail drops and a signature over the limit.
