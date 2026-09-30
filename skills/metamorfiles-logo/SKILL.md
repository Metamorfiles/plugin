---
name: metamorfiles-logo
description: Use to design a logo in Metamorfiles Studio for a brand that has none, including the logo step of a new brand, with the name set from a real typeface after a type study, drawn marks and characters traced into vectors, lockups, seals, monograms and icons, each route checked at every size it will meet. Use it whenever the user asks for a logo, a wordmark, a mark, a symbol, a seal, a badge, a monogram or a lockup for a new brand, even if they describe the look they want in their own words. Not for a brand that already has a logo, whose official files are never redrawn (metamorfiles-brand).
license: MIT
---

# The logo

A logo is made the way a designer makes one: an idea first, the name set in a face chosen from a
study, a mark drawn to sit beside it, and the parts put together and tested small before anyone sees
them. You prepare three strong routes and recommend one; the user chooses.

## Words are type

Every word in a logo is real type set from a font: the name, a tagline, the words around a seal, a
monogram's letters, words in any script. Set them with `metamorfiles_make_wordmark`, or as text
parts of `metamorfiles_compose_logo`. The image model draws only what no font has: a mark, a
character, a shape that takes a letter's place. It draws it alone, on a transparent background, and
Studio traces it into a vector.

This is the rule the rest of the skill is built on. Image models draw letters that are nearly right:
stems that vary, curves that wobble, spacing no one chose, and a trace keeps every flaw. A look that
seems to need drawn letters (a carved sign, a marker script, bouncy hand-set capitals) is found in a
real face and finished with Studio's controls (`references/wordmark.md`).

## Checklist

Copy it into your notes and tick each step as you go:

```
- [ ] 1. Idea: one sentence, a few concepts, clichés named
- [ ] 2. Type study: the name in 12 to 24 faces; the logo face chosen and added
- [ ] 3. Three routes, one of each kind, each drawn and set
- [ ] 4. Lockups composed
- [ ] 5. Every route checked with metamorfiles_check_logo, fixed, checked again
- [ ] 6. Each route's files: colour, reversed, one colour, small mark
- [ ] 7. Routes shown and one recommended
- [ ] 8. After the choice: the final files in brand/logos/
```

### 1. The idea

Read the brief (in a new brand, `brand/process/brief.md` and the chosen direction). Write one
sentence the logo is about, taken from the business's own reality: its product, place, process or
people. Then list eight to twelve concepts in a line each, and the category's clichés by name (a
coffee bean for a café, a scissors for a barber, a leaf for anything natural), so no route uses one.
The three routes come from the strongest concepts.

### 2. The type study

Set the name in 12 to 24 faces across classes with `metamorfiles_type_study`, at the weights the
look asks for, and read the sheet: the word's shape as a whole, the pairs, the rhythm, and what could
become the idea (a counter to hold a shape, two letters to join, a letter to replace). Shortlist
three to five, choose the logo face for each route, and add it with `metamorfiles_add_font`. How to
choose and set it: `references/wordmark.md`.

### 3. Three routes

One of each kind, so the user chooses between real alternatives:

1. **The name with a drawn mark.** A symbol, an abstract shape or a character beside or above the
   name, or a drawn part taking one letter's place. Set the name first, then draw the mark to match
   it: `references/symbol.md`. A character is designed with the `metamorfiles-character` skill.
2. **Led by type.** The name alone, with one idea in the letters: an alternate, a joined pair, a
   letter replaced by a drawn part, a carved or inline finish, a bounce. `references/wordmark.md`.
3. **A compact emblem.** A seal, a badge, a monogram or a stacked sign that fills a round sticker, a
   stamp or an app icon: `references/seal.md`.

The register shapes each route: a playful brand suits chunky, soft type beside a character; a
relaxed premium one refined type with one abstract mark; a heritage one type dressed for its period.

### 4. Lockups

Put each route's parts together with `metamorfiles_compose_logo`, balanced by weight rather than
fitted: `references/lockups.md`. A traced drawing is a part like any other: `references/vector.md`
says how drawings are made to trace cleanly.

### 5. Check, fix, check again

Run `metamorfiles_check_logo` on every route file. Read the sheet and the numbers, fix what fails,
and run it again until it passes: `references/checks.md`. The user should never be the one to find
a piece that vanishes at 32 px or a reversed version that doesn't read.

### 6. Each route's files

The route's first file is the logo in colour on the ground it's made for; after it, reversed on the
dark colour and in one colour on white, each with its `ground`. Mark the route's small mark (the
symbol, the character's head, the replaced letter, the monogram, the seal) with `small: true`: the
profile picture and the small sizes use it, since a whole lockup can't be read at 16 px. Save every
file under `brand/process/logo/`.

### 7. Show them

In a new brand, write the routes as the options of `brand/process/logo.md` and ask as the
`metamorfiles-brand-creation` skill says: Studio draws each route large, in use and at the small
sizes on the brand board. Outside it, show the check sheets and say in a line what each route is
and why, the recommended one first.

### 8. After the choice

Make the chosen route's final files in `brand/logos/`: `logo.svg`, the reversed and one-colour
versions, the small mark and the icon or seal, with the same tools and settings, and the other
colours with `metamorfiles_make_logo_variant`. Run `metamorfiles_check_logo` on each. Declare them in
DESIGN.md `logos` with their grounds and sources ("set in <face> as outlines with a drawn part",
"drawn by <model> and traced", "created and approved by the user on <date>"). The clear space is the
height of the name's capital, or a quarter of the mark's height, on every side.

## References

| Read | When |
| --- | --- |
| [references/wordmark.md](references/wordmark.md) | Choosing the logo face, setting and customising the name, taglines, the small-size version |
| [references/symbol.md](references/symbol.md) | Drawing a mark or a part that takes a letter's place |
| [references/seal.md](references/seal.md) | A seal, badge, monogram or icon |
| [references/lockups.md](references/lockups.md) | Putting the parts together |
| [references/vector.md](references/vector.md) | How a drawing is made and traced |
| [references/checks.md](references/checks.md) | The check loop and the craft pass |

The faces worth studying, by character, are in `references/fonts.md` of the
`metamorfiles-brand-creation` skill; a character is designed with `metamorfiles-character`; how to
prompt each image model is in `references/images.md` of the `metamorfiles` skill. In an app that
didn't load a skill, read it with `metamorfiles_get_guide`.

## Rules

- **Never redraw an existing logo.** A brand that has one keeps its official files
  (`metamorfiles-brand`); a new seal or icon for it is a proposal the user approves first.
- **A mark is drawn, never geometry typed as SVG by you.** Only Studio's shapes (a ring, a disc, a
  star, a diamond, a facet, a rule) are built without a drawing.
- **Authorship.** Say in Known gaps that a drawn logo should be refined by a designer before it is
  registered as a trademark.
