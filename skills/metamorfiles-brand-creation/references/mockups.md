# The brand in use

Read this for the kit, after the three choices of `SKILL.md`. Mockups show the new brand on this business's
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
   unobstructed. The object is made in its own colour and material in the photo: a box printed in
   the brand's green is generated as a plain green box, a card as a plain card in the brand's
   paper, a sign as a board painted its colour. The surface may be flat, curved (a bottle, a cup, a cap's front) or soft (a
   garment, a tote); only a curve that turns away from the camera is out of reach. A screen is a
   device with a blank screen. Then list the folder in DESIGN.md `assets`:
   `{ folder: mockups, kind: in-use, title: In use }`.
2. **The artwork.** Only what is printed or painted on the object, on nothing: place the brand's
   own files (a logo, an image), or, for a surface that carries more than a mark, design its artwork
   as `html`: plain markup with inline styles, set in the brand's tokens (`var(--brand-…)`) with its
   files (`../../brand/…`), at the surface's proportions, with no background: the object's colour
   is the photo's, never a panel laid over it, and Studio refuses one. Real
   words only: the brand's voice lines and what the brief says, never an invented price, name,
   date or figure (a temperature, a weight, a size). A designed artwork has its own margins and
   hierarchy, like a printed label, rather than filling its box edge to edge.
3. **The brand on it.** `metamorfiles_make_mockup` takes each layer's four corners on the photo and
   the `surface`: what it is, its material, the method, the condition and its form (flat, curved or
   soft), and, for a file layer, the words it shows. The corners are the whole surface; `size` and
   `at` place the artwork in it the way a real one sits (below), at its own proportions, so a logo is
   never stretched. The result says how much of the surface each artwork covers, and shows the
   placement over the photo: the surface you gave dashed, the artwork solid, each with its centre
   line. Check both against the object's own edges and centre before anything else. When the
   artwork's words set badly (a block breaking into more lines than you set, a word alone on a line,
   words past its edge), Studio says so and doesn't finish it: fix the artwork and make it again. Studio places the artwork exactly and bakes it
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
   Change its size and place, or redo the photo, until it looks made, not placed. Each mockup is its own frame
   of the brand board.
6. **Then the reviewer.** Each batch of mockups goes to the reviewer before the user sees it, and
   again after any change to one (`SKILL.md`, "Reviewed before the user sees it").

## Placing it

Mockups look made when the brand sits on the object the way a printer or signwriter would put it,
and placed when everything is blown up to the edges. Look at the real object in your head: where its
brand goes, how big it is next to the object, how much room is around it.

- **A garment or apron** carries a small mark on the chest, high and to one side, or a modest one
  centred; a back print is the one place a large one goes.
- **A box, bag or lid** holds the logo with generous room around it, often centred, sometimes low or
  in a corner; a pattern or a flood of colour is what covers it edge to edge.
- **A sticker, badge or label** fills its die-cut with a border of the material showing.
- **A sign, lightbox or fascia** sets the name large but with breathing room to its frame, in the
  sign's own proportions.
- **A cup, can or bottle** keeps the logo within the face you see, never wrapping to its edges.
- **Small type stays small,** as on the real thing: a line under a logo, an address, a URL.
- **One hero per surface.** When the logo, a line and a drawing share a surface, one leads and the
  others are clearly smaller.

The artwork is never the size of the whole surface unless the real object is printed that way.

A model never draws the logo or the words into the blank photo: the mockup always starts from the
real files and the brand's own type, placed by Studio.
