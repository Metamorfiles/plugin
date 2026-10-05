# The brand in use

Read this for the kit, after the three choices of `SKILL.md`. Mockups show the new brand made real on
this business's own objects, so the user can judge the whole system at a glance. They are
presentation, never the brand's imagery: Studio keeps them in their own folder and refuses them in
templates.

The bar is packaging photography a design publication would feature: a real object, designed in
full, shot with intent. Each mockup is one photograph the image model makes whole, with the brand's
exact logo and the brand board as its references. Studio places nothing on it.

## Which three

Three mockups, from the brief's touchpoints (`research.md`), each a different part of the system:

- **The hero:** the most public object, designed in full: the pack, the bottle, the can, the box.
- **The range or the set:** the hero's family together (flavours, sizes, variants), or the hero with
  what travels with it (a bag, a sleeve, a gift box).
- **The everyday:** a small, frequent touchpoint that shows another part of the system: a sticker,
  a tag, a sign, a card, a screen.

Never a stock set (a business card, a tote and a phone), and never an object this business doesn't
use. Choose them without asking: the user sees each one arrive on the brand board and can ask for a
change. Say which you chose in one `say` for the thread ("The bottle, the gift box and the market
sign. Ask me to swap any of them.").

## Art direction, before any prompt

Decide each one as an art director would, in your notes:

- **The packaging design.** Designed in full, the way real packaging in this category is: the brand's
  imagery or character at work across the object, its palette, its type style, and a hierarchy that
  reads from a shelf: the brand, then what the product is, then one descriptor. A logo alone on a
  flat field of colour is not packaging design.
- **The shot.** A controlled studio set (a seamless or tonal ground in a brand colour, soft directional
  light, a real shadow) or a styled scene from the business's own world. One idea per shot: a
  three-quarter hero, a tight group of the range, a top-down flat lay, a detail close-up.
- **The materials and finishes,** named as a printer would: uncoated paper, matte laminate, kraft,
  foil, emboss, glass, brushed aluminium. They are what make it read as made, not rendered.
- **Restraint.** Room around the object, few props and only ones that belong to it, nothing that
  competes with the brand.

What strong and weak work look like is in `references/taste.md` of `metamorfiles-artwork`.

## Make them

1. **The folder.** List it in DESIGN.md `assets`: `{ folder: mockups, kind: in-use, title: In use }`.
   Each image in it is a frame of the brand board.
2. **Each photograph,** with `metamorfiles_generate_image` into `brand/mockups/`, all three together
   with `wait: false`, at the shot's shape (a landscape hero, a square group, a portrait detail). The
   references, in this order, and the prompt says what each one is:
   1. **The logo file** the object carries (DESIGN.md `logos`): "image 1 is the logo".
   2. **The brand board,** `templates/brand-board#board`: "image 2 is the brand system: its colours,
      type and imagery".
   3. **The imagery anchors or the character's anchor,** when they appear on the object.
3. **The prompt,** in this order:
   - the photograph: the shot, the set, the light, the angle, the camera;
   - the object and its packaging design: its form, its materials and finishes, how the design
     covers it, and where the brand, the product name and the descriptor sit;
   - the logo: "the logo from image 1 exactly as drawn: the same shapes, letters, colours and
     proportions, never redrawn, restyled or retyped", and where it sits and how big;
   - the words: only these, exactly (the brand's name, and the product names the brief gives), and
     no other text: no small print, barcodes, prices, nutrition panels or claims;
   - the brand's look from image 2: its palette by name, its type's character, its imagery's style.

## Check, fix, review

4. **Look at each one first,** as the photograph a design publication would run: the logo against its
   file, every word, the object a real printer could make, the light and the set. A take that misses
   is made again before review, and the one it replaces is removed (`metamorfiles_write_file` with
   `remove: true`).
5. **The reviewer** checks the three `mockup-` frames before the user sees them (`SKILL.md`, "Reviewed
   before the user sees it").
6. **Fix what it sends back** with the method that can fix it:
   - **A wrong logo or word** on an otherwise good photograph: an edit of it. Call
     `metamorfiles_generate_image` with `edit: true`, the mockup first and the logo file second in
     `references`, and a prompt that changes only that ("Change only the logo on the bottle's label
     so it is exactly the logo in image 2; keep everything else as it is").
   - **A weak design, shot or object:** a new take, with the art direction changed where it fell short.
   - Two rounds at most; then a new take from scratch, as `SKILL.md` says.

The user reviews them last, on the board, and asks for any change in their own words.
