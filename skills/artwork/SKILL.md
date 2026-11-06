---
name: artwork
description: Makes artwork in Metamorfiles Studio: print and packaging to print for real with the logo and set copy on it (a label with its text, a box's face, a poster or menu with copy, merch with the logo and words, a screen for a mockup), branded artwork without the logo (a stylised mascot or logo for a T-shirt, a branded pattern) and free artwork in the brand's drawing style alone (a one-colour print, a themed piece). The image model paints the picture and Studio sets the real logo and type exactly, so nothing reads as drawn in code. Use whenever an object's printed face or a piece of art is designed, even if the user only says "a label", "the packaging" or "a shirt design".
license: MIT
---

# Artwork

Real packaging is a picture and a hierarchy working together: an illustration, a pattern or a
photograph that fills the face, and the brand, the product and its words set on it with care. So the
work is split by what each does best: the image model paints the picture, in the brand's own style,
and Studio sets the logo and every word exactly, from the real files and fonts. Each keeps to its
job: every letter and the logo are Studio's, the picture always the model's. (A print whose only words are the logo and a short line is drawn whole instead: step 2 of the `mockup` skill.)

## Which artwork

| Kind | For | How |
|---|---|---|
| **With the logo** | a label with its text, a box's face, a poster or a menu with copy, merch with the logo and words, a mockup's screen | the picture painted by the image model, the real logo and words set on it: the steps below |
| **Branded** | a stylised logo or mascot for merch, a branded pattern | made whole by the image model from the brand's own references |
| **Free** | a one-colour print, a themed piece (a Halloween poster) in the brand's drawing style | made whole from the style alone |

**Branded:**
`metamorfiles_generate_image { prompt, width: 2400, height: 2400, references: ["<the character sheet>", "templates/brand-board#<library folder>"], name: "mascot-tee" }`,
written as `references/images.md` of the `studio` skill says (the character sheet first when it
appears), with the logo file as a reference for a stylised version of it and the brand's colours
named. Its words, when it has any, are set in a page as below. New poses of the mascot are made
with the `character` skill (`references/poses.md` of the `character` skill).

**Free:** the same call with the library's sheet alone, named "only its style, never its subjects or
colours", and the piece's own colours (one ink for a one-colour print). Brand colours and the logo
only when the user asks.

Printed in flat colour: traced as step 2 says.

A mockup's flat whose only words are the logo and at most a short line (a sticker with art, a poster
that is a picture) is drawn by the image model instead: which way each flat is made, the `mockup` skill decides
(step 2).

## With the logo

```
- [ ] 1. The piece planned: its idea, its face, its hierarchy, its zones
- [ ] 2. The picture painted by the image model, with calm room for the type
- [ ] 3. Composed as a page: the picture full bleed, the real logo and type on it
- [ ] 4. Its check errors fixed, reviewed as its page, then exported (a mockup's face brought into the brand)
- [ ] 5. A screen for a mockup: the brand's real one brought in, or designed in code the same way
```

### 1. Plan the piece

Read [references/taste.md](references/taste.md) before planning the piece. Before any image,
decide, as a packaging designer would, in your notes:

- **The idea.** One idea that holds the picture, the logo and the words together, decided as "The
  composition" in `references/design.md` of the `studio` skill decides any piece: from the brand's
  world, measured against the best pieces of its kind, said in one sentence. The rest of the plan
  serves it.
- **The face.** Its real proportions: a box's dieline, a label's shape, a bottle's wrap, at its
  printed size.
- **The category's codes.** How packaging in this category looks on a shelf, and which code the
  brand keeps or breaks (the brief's research, `references/research.md` of the `new-brand` skill).
  The picture's kind follows: an illustration, a repeat pattern, a scene, or a photograph.
- **The hierarchy,** read from a shelf or across a room: the brand, then what the product is (its
  name or variant), then only the other words the brief and the brand give. Small print only when
  its real content was supplied; never an invented price, figure, ingredient or claim. One hero.
- **The zones.** Where the idea puts the logo and the words, and where the picture has the stage,
  in plain positions ("the top third calm for the logo, the picture's stage below it, a clear band at the foot for the product's name"):
  Studio sets the type there, so the picture has to leave that room.

### 2. The picture

Generate it with
`metamorfiles_generate_image { prompt, width: 1600, height: 2400, references: ["brand/refs/<an anchor>"], name: "serum-box" }`, written as `references/images.md` of the `studio` skill says ("The prompt": the brand's image contract, which images may go in, and the character sheet first when it appears).
It saves into `assets/` (or a brand folder given as `folder`), and the page uses the path it
returned as the image's value.

- **At the face's shape:** `width` and `height` at its ratio. A face longer than the image model
  makes is planned as `references/images.md` of the `studio` skill says ("Generate and place, edit
  or redraw").
- **In the brand's imagery style,** with the style references `references/images.md` of the
  `studio` skill allows ("The prompt", References).
- **No words, letters, numbers, logos or labels in it,** asked for plainly: they are set in step 3.
- **The zones in the prompt,** as part of what the picture shows (its Scene): where its subject sits,
  and what stays calm and open there for the logo and the type. A picture that fills every corner
  leaves the type nowhere to go.
- **The brand's colours as its guide,** named as the brand names them; the picture may bring
  colours of its own where the composition needs them.
- **Printed in flat colour** (screen print, cut vinyl, apparel): traced as it's made, with `trace`
  (`references/vector.md` of the `studio` skill), the brand's colours listed and `inks` the number of
  colours the print allows.

### 3. Compose

A one-off face is a page, its design following `references/contract.md` of the `studio` skill, its format the
piece's printed size in mm with its bleed:
`metamorfiles_create_page { name: "Serum box face", design: "<the index.html>" }`. The picture full
bleed as the face's background, and on it the brand's real logo file and its words in the brand's
own fonts and tokens (`var(--brand-…)`, files from `../../brand/…`).

- The picture as it came back, fitted as `references/images.md` of the `studio` skill says
  ("Generate and place, edit or redraw").
- The logo at the size this object carries it, in the version made for the ground it sits on.
- Every word from the hierarchy (step 1), real.
- Type sits straight on the calm zones the picture left.
- Margins and bleed as `references/print.md` of the `studio` skill says.

### 4. Review, then export

Fix the check errors `metamorfiles_render_preview { item: "pages/<id>" }` reports, then get the
review (the `review` skill) of `pages/<id>`, once, before anything is exported. Then export it,
`metamorfiles_export_page { page: "<id>" }`: a print size comes with a PDF for the printer.

A face made for a mockup is then brought into the brand as the mockup's flat:
`metamorfiles_import_image { path: "pages/<id>/exports/<file>.png", folder: "brand/mockups/artwork", name: "<name>" }`.
Its page has passed, so the imported file isn't reviewed again; give it to the `mockup` skill as the
object's print. After any later change to the page (reviewed again as its page), export it and
bring it in as the flat's new take:
`metamorfiles_import_image { path: "pages/<id>/exports/<file>.png", replaces: "brand/mockups/artwork/<flat>.png" }`.

### 5. A screen for a mockup

The brand's real screen, when it has one, is the brand's own file: the flat as it is, with no page,
and never reviewed (Studio leaves the brand's own files out of the queue). A screenshot
`metamorfiles_look_at_page` saved is in `brand/sources/<site>/` already; one the user gave comes
into `brand/sources/yours/` first,
`metamorfiles_write_file { path: "brand/sources/yours/<name>.png", from: "<absolute path>" }`.
Then bring it in from there:
`metamorfiles_import_image { path: "brand/sources/<site or yours>/<file>.png", folder: "brand/mockups/artwork", name: "<name>" }`.
Otherwise its interface is a page at the device's screen size in points, designed with the
`frontend-design` skill where the app has it (else `references/design.md` of the `studio` skill),
inside the brand's DESIGN.md (its fonts, colours and tokens lead), then reviewed, exported and
brought in as step 4 says.
