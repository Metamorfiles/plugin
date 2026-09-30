---
name: metamorfiles-logo
description: Use to design a logo in Metamorfiles Studio for a brand that has none, including the logo step of a new brand, in three routes (a logo drawn whole by the image model and traced, the name set from real fonts with a generated mark or letter, and one in type alone), each checked at every size it will meet. Use it whenever the user asks for a logo, a wordmark, a mark, a symbol, a seal, a badge, a monogram or a lockup for a new brand, even if they describe the look they want in their own words. Not for a brand that already has a logo, whose official files are never redrawn (metamorfiles-brand).
license: MIT
---

# The logo

The logo is made from what the brand's earlier steps decided. In a new brand, the brief and the
chosen direction already hold the look: its references, palette, type pairing and voice. The logo
interprets that direction in three routes, and the user chooses.

## Checklist

Copy it into your notes and tick each step as you go:

```
- [ ] 1. The brief and the chosen direction read, its reference images looked at
- [ ] 2. Type study: the name in the faces the direction suggests and around them
- [ ] 3. Three routes made
- [ ] 4. Every route checked with metamorfiles_check_logo, fixed, checked again
- [ ] 5. Each route's files: colour, reversed, one colour, small mark
- [ ] 6. Routes shown and one recommended
- [ ] 7. After the choice: the final files in brand/logos/
```

### 1. What the brand already decided

Read `brand/process/brief.md` and the chosen option of `brand/process/direction.md`, and look at its
reference images with `metamorfiles_read_file`. They set the look; the logo's idea comes from the
brief, the business's own reality, not the category's usual symbol. Outside a new brand, the user's
request and the brand's DESIGN.md do the same.

When a route needs a part the references don't show well (the lettering, a mascot, a mark), start a
search for it in the background as you begin: `metamorfiles_search_references` with the category and
the part ("pizza mascot", "bakery lettering"), sorted by `recommended`, and `wait: false`. Read it
when you reach that route, and collect the two or three projects worth studying.

### 2. The type study

Set the name in the faces the direction suggests and others around them with
`metamorfiles_type_study`, and read the sheet: the word's shape, its pairs, its rhythm, and what could
become the idea. Choose each route's face and add it with `metamorfiles_add_font`
(`references/wordmark.md`).

### 3. Three routes

1. **Drawn whole by AI.** The image model draws the logo as one composition: lettering alone, or
   lettering with a mark, a mascot or ornaments, all in one style, with proper spacing between its
   parts. Studio traces it; supporting words are set in real type around it: `references/drawn.md`.
2. **Real fonts with a generated part.** The name set from real fonts with its kerning, ligatures and
   spacing, composed with a generated mark, a mascot or a drawn letter in a letter's place:
   `references/wordmark.md`, `references/symbol.md`, `references/lockups.md`. A mascot is designed
   with the `metamorfiles-character` skill.
3. **Type alone.** The name in its face with kerning, ligatures, alternates, a bounce and the face's
   own features, in a simple composition, or a seal or monogram when the brand needs one:
   `references/wordmark.md`, `references/seal.md`.

### 4. Check, fix, check again

Run `metamorfiles_check_logo` on every route file. Read the sheet and the numbers, fix what fails,
and run it again: `references/checks.md`. The user should never be the one to find a piece that
vanishes at 32 px, a drawn letter that's wrong, or a reversed version that doesn't read.

### 5. Each route's files

The route's first file is the logo in colour on the ground it's made for; after it, reversed on the
dark colour and in one colour on white, each with its `ground`. Mark the route's small mark (the
mark, the mascot's head, the monogram, the seal) with `small: true`: the profile picture and the
small sizes use it. Save every file under `brand/process/logo/`.

### 6. Show them

In a new brand, write the routes as the options of `brand/process/logo.md` and ask as the
`metamorfiles-brand-creation` skill says: Studio draws each route large, in use and at the small
sizes on the brand board. Outside it, show the check sheets and say in a line what each route is and
why, the recommended one first.

### 7. After the choice

Make the chosen route's final files in `brand/logos/` with the same tools and settings, and the other
colours with `metamorfiles_make_logo_variant`. Run `metamorfiles_check_logo` on each. Declare them in
DESIGN.md `logos` with their grounds, sources ("set in <face> as outlines with a drawn part", "drawn
by <model> and traced", "created and approved by the user on <date>") and clear space.

## References

| Read | When |
| --- | --- |
| [references/drawn.md](references/drawn.md) | Route 1, the logo drawn whole by AI |
| [references/wordmark.md](references/wordmark.md) | The type study, setting the name, the small-size version |
| [references/symbol.md](references/symbol.md) | A generated mark or a drawn letter |
| [references/lockups.md](references/lockups.md) | Putting the parts together |
| [references/seal.md](references/seal.md) | A seal, badge or monogram |
| [references/vector.md](references/vector.md) | How a drawing is made and traced |
| [references/checks.md](references/checks.md) | The check loop |

The faces worth studying are in `references/fonts.md` of the `metamorfiles-brand-creation` skill; a
mascot is designed with `metamorfiles-character`; how to prompt each image model is in
`references/images.md` of the `metamorfiles` skill. In an app that didn't load a skill, read it with
`metamorfiles_get_guide`.

## Rules

- **Never redraw an existing logo.** A brand that has one keeps its official files
  (`metamorfiles-brand`); a new seal or icon for it is a proposal the user approves first.
- **A mark is drawn by the image model, never geometry typed as SVG by you.** Only Studio's shapes (a
  ring, a disc, a star, a diamond, a facet, a rule) are built without a drawing.
- **Supporting words are real type,** in every route.
