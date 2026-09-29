# The brand in use

Read this for the kit, after the three choices of `create.md`. Mockups show the new brand on this business's
own objects and screens, so the user can judge the whole system before anything is made for real.
They are presentation, never the brand's imagery: Studio keeps them in their own folder and refuses
them in templates.

## Which surfaces

- **From the brief's touchpoints** (`research.md`): four to six of them. Never a stock set (a
  business card, a tote and a phone), and never an object this business doesn't use.
- **A spread:** the most public surface (a sign, a store listing, a pack front), the humblest and
  most frequent (a tag, a receipt, a notification), one held in the hand, and one on a screen when the
  brand lives online.
- **Each shows a different part of the system,** so together they prove it works:

  | Part | For example |
  |---|---|
  | the wordmark at scale | a sign, a pack front |
  | the icon or seal, small | a sticker, a tag, an app icon |
  | a voice line as the headline | a report card, a poster, an email |
  | the imagery or the character, in a scene | a poster, a pack side, an onboarding screen |
  | the accent on one thing | a collar, a price, a button |
  | the ground colour as a flood | a box, a wall, a splash screen |
  | the pattern or graphic system | a wrap, a lining, a background |

  A surface that carries only the logo happens once at most.

## Decide them, then say so

Choose the surfaces from the brief and make them without asking first: the user sees each one
arrive on the brand board and can ask the team to change any of them. Say which you chose in one
`say` for the thread ("The swing tag, the tote, the invoice and the studio door. Ask me to swap any
of them."). For each surface, decide:
- the part of the system it shows;
- what it's made of and how the brand is applied, from the list `metamorfiles_make_mockup` takes
  (print, screen-print, thermal-print, paint, vinyl, sticker, embroidery, engraving, emboss, foil,
  display, lightbox), as the business would really make it;
- how worn it is, from the brief: `new` or `used` for a business that is starting, `worn` or
  `weathered` only when the brand's age or trade is the point. You decide it, never the image
  model.

## How

1. **The photo, blank.** Generate it with `metamorfiles_generate_image` into `brand/mockups/`: the
   object in the business's own world (its place, its light, its customers), as it is really used,
   and the surface where the brand goes described as completely blank, fully in frame and
   unobstructed. The surface may be flat, curved (a bottle, a cup, a cap's front) or soft (a
   garment, a tote); only a curve that turns away from the camera is out of reach. A screen is a
   device with a blank screen. Then list the folder in DESIGN.md `assets`:
   `{ folder: mockups, kind: in-use, title: In use }`.
2. **The artwork.** Place the brand's own files (a logo, an image), or, for a surface that carries
   more than a mark, design its artwork as `html`: plain markup with inline styles, set in the brand's
   tokens (`var(--brand-…)`) with its files (`../../brand/…`), at the surface's proportions. Real
   words only: the brand's voice lines and what the brief says, never an invented price, name,
   date or figure (a temperature, a weight, a size). Place it at the size and position a real one
   would have: that is what the mockup shows.
3. **The brand on it.** `metamorfiles_make_mockup` takes each layer's four corners on the photo and
   the `surface`: what it is, its material, the method, the condition and its form (flat, curved or
   soft), and, for a file layer, the words it shows. The corners are the whole surface; the artwork
   goes inside at its own proportions, as large as fits and centred, so a logo is never stretched. Studio places the artwork exactly and bakes it
   into the photo's light, then the user's image model finishes it into a photograph of the finished
   object. Studio checks the finish against its bake (the artwork in place on a flat surface, no
   mark added, the photo around it unchanged), tries once more when it fails, and keeps its exact
   bake after two failures. Start several mockups together with `wait: false`, then wait for each
   with `metamorfiles_image_status`.
4. **Read every word.** The result comes with the artwork's area enlarged and the words it must
   show. Read each one character by character, accents included. If any differs, call
   `metamorfiles_make_mockup` again for a new finish, or with `finish: false` to keep the exact bake.
   The user should never be the one to find it.
5. **Look at it as a photograph of the finished object.** The artwork sits where it belongs, at the
   size a customer would see it, and the photo has none of the image-model mistakes (`imagery.md`).
   Move the corners or redo the photo until it looks made, not placed. Each mockup is its own frame
   of the brand board.

A model never draws the logo or the words into the blank photo: the mockup always starts from the
real files and the brand's own type, placed by Studio.
