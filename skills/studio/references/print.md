# Print

Read before you make anything printed: a business card, a flyer, a poster, a letterhead. `design.md` and the `copywriting` skill still apply; this is what paper adds.

## Contents
- Sizes and the printer's template
- The page
- A business card
- A flyer or a poster
- A letterhead
- Images on paper
- The files

## Sizes and the printer's template

Use a preset (`business-card`, `business-card-us`, `a6` to `a3`, `dl`, `us-letter`, `tabloid`): each has its bleed and keeps the edge printers cut into clear. When the user names a printer and its template differs (MOO's card is 84 × 55 mm with 2 mm bleed), declare that size instead: `{ id: "card-moo", width: 84, height: 55, unit: "mm", bleed: 2 }`.

## The page

- A background, a band or a photo that meets an edge runs on to the edge of the image, through the bleed: the cut wanders, and a background that stops at the trim leaves a white line.
- Nothing that matters in the bleed or within 3 mm (⅛ in) inside the trim: the checks name both.
- Type at 8 pt or more; 6 pt is the least that prints readably. A frame's px size converts as px × 72 / dpi.
- Colour: design in the brand's colours as on screen. The kit gives the printer coated and uncoated CMYK; never convert colours yourself.

## A business card

Two sides, one page, its design's manifest declaring `"formats": ["business-card"]`: `metamorfiles_create_page { name: "Business card", kind: "business-card", design: "<index.html>", sides: true, variants: [{ id: "front" }, { id: "back" }] }`. The variants are the sides in order and export as one PDF with a page per side.

A card is read in two seconds and kept for months. One side carries the brand (the logo or the small mark, or a pattern from the kit); the other carries the person: name, role, then the contact lines the user gave, in the order someone would use them. Never invent a phone, an address or a title: ask, or leave the line out.

## A flyer or a poster

One message a passer-by reads from a distance: the headline the largest thing, the date or the offer second, the rest small. A poster is read at three metres; a flyer in the hand. The brand's imagery leads when it carries the message; type alone is often stronger.

## A letterhead

The brand at the top or the foot, small; the contact line at the foot; the rest is room to write, at least two thirds of the page. A4 for most of the world, US Letter for the US and Canada: ask when it isn't clear.

## Images on paper

An image needs about 300 pixels per inch at the size it prints; under 150 it looks soft, and the checks say so. An image the model makes is about 1,500 to 2,000 px: enough for a card, a small flyer panel or a postcard's corner, not a full-page photo on A4. Compose large pieces around type, the brand's graphics and vector artwork (the `artwork` skill), and use the user's own high-resolution photos for full-bleed photography.

## The files

`metamorfiles_export_page` writes a PNG per side and a vector PDF at the physical size with its trim and bleed marked, ready for an online printer's file check. The brand's open-licence fonts are embedded as fixed fonts where the layout allows; one that can't be (its optical size follows the type size) stays as it is, and the export's checks name it. Say so to the user in plain words when it happens: most online printers accept it; a printing house may ask for the text outlined.
