---
name: logo
description: Designs a logo in Metamorfiles Studio for a brand that has none: three routes, three different ideas, each made by the method that serves it (drawn whole by the image model and traced, the name set from real fonts with a generated mark or letter, or type alone), then, once the user chooses, its final files and how it's used small. Use for the logo step of a new brand, or when the user asks for a logo, a wordmark, a mark, a symbol, a seal, a badge, a monogram or a lockup for a brand whose DESIGN.md already sets its look. A business with nothing made yet, even when the user asks only for a logo, starts with the new-brand skill, whose logo step this is. Not for a brand that already has a logo, whose official files are never redrawn (the brand skill), unless its owner asks for it drawn again.
license: MIT
---

# The logo

The logo is made from what the brand's earlier steps decided. In a new brand, the brief and the
chosen direction already hold the look: its references, palette, type pairing and voice. The logo
interprets that direction in at least three routes, and the user chooses.

## Checklist

Copy it into your notes and tick each step as you go:

```
- [ ] 1. The brief and the chosen direction read, its reference images looked at
- [ ] 2. Type study: the name in the faces the direction suggests and around them
- [ ] 3. Three ideas: each route's id, idea and composition written before anything is drawn (in a new brand, into logo.md)
- [ ] 4. Three routes made, each by its method
- [ ] 5. Every route checked with metamorfiles_check_logo: its letters and one colour
- [ ] 6. Each route's files: colour and one colour, plus the parts it shows
- [ ] 7. Routes shown and one recommended
- [ ] 8. After the choice: the mascot when the brand has one; then the final files and the logo used small (`references/final.md`)
```

### 1. What the brand already decided

Read `brand/process/brief.md` and the chosen option of `brand/process/direction.md`, and look at its
reference images with `metamorfiles_read_file`. They set the look. The logo's idea comes from the
brief: the business's own reality (its product, place, process, people) seen through the
direction's look. The category's usual symbol comes in only when the direction chose it, since the
image model reaches for it unasked. Outside a new brand, the
user's request and the brand's DESIGN.md do the same. With neither a brief nor a DESIGN.md, the
brand is new: follow the `new-brand` skill instead, which comes back here for its logo step. Read
`references/taste.md` before writing the ideas (step 3), for what a strong version of that look is;
the result is the reviewer's to judge.

When a route needs a part the references don't show well (the lettering, a mascot, a mark), start a
search for it in the background as you begin, with the category and the part:
`metamorfiles_search_references { query: "skincare lettering", wait: false }`.
Read it when you reach that route (`metamorfiles_search_references { id }`), and collect as
`references/research.md` of the `new-brand` skill says.

### 2. The type study

Study and choose each route's face: `references/wordmark.md`.

### 3. Three ideas

Before anything is drawn, write each route's idea and composition in one line in your notes. Three
different ideas: drawing them from different sources (the name's sound and letters, the product and
how it's made or used, the place, the people or the feeling it promises) keeps them apart, a habit
rather than a quota. How studios find such ideas: `references/principles.md` of the `new-brand`
skill. The composition says how the logo is built, in words: what leads, and how the other parts
meet the word (on its baseline, over it, tucked into a letter, or apart from it). It's the plan;
the made logo settles its proportions. It also says the route's
words. A logo carries the name, every word of it, and the route decides how they relate: one size,
or one word leading and another small beside it. Other words (a tagline, the trade, a place, a date)
join only when they are part of what the logo physically is, as the ring of a seal is, or when the
name alone wouldn't make sense to someone meeting it: a line says more on the brand's signs, posts
and messaging, and can change there without changing the logo. Then read the three together: each comes from this business's own
reality, each is built its own way (the parts meet differently), and each has letters made for its
idea, drawn or set in a face chosen and tuned for it (step 4). A route that shares its idea or its build with another is rewritten now, while it is a line.

Each line goes on its route's option as `composition` in `brand/process/logo.md`, for the reviewer;
the user sees the route's `line`, written for them. Name each route now with one lowercase word, its
`id` in `logo.md` (`list`, `minutes`): every file of the route starts with it (step 6), so the
board shows each route's work in its own band as it arrives.

In a new brand, write the three into `brand/process/logo.md` now, before anything is drawn: each
option's `id`, `title`, `line` and `composition`, no `files` yet, in the order the user will see them.
The board names each band from it while its work arrives, so the user watches each idea being made
in the place it keeps. Keep that order to the end. A route you drop is replaced in its own place,
under its new id.

### 4. Three routes

Three answers: each route is a different idea, made by the method that serves it, so the user
chooses between ideas. The three methods below are a toolset, picked for each idea. A fourth route
is for another idea; a variant of a route (its mark drawn longer, its lockup stacked) stays part of
that route. An idea the medium can't make (`references/drawn.md` says what the model
draws well) is replaced by another idea in its place, so three are still shown. Make each to pass the
Logo route checklist of the `review` skill's Rubric, which the reviewer holds it to.

- **Drawn whole by AI.** The image model draws the logo as one drawing: lettering alone, or
  lettering with a mark, a mascot or ornaments, all in one style. Studio traces it; its supporting
  words, if the route has them, are set in real type: `references/drawn.md`.
- **Real fonts with a generated part.** The name set first from real fonts (`references/wordmark.md`),
  then a mark or mascot drawn to go with it (`references/symbol.md`), now and then a drawn part in
  a letter's or its mark's place (`references/symbol.md`, "A drawn letter or mark"). A part that stands beside, after or
  above the name is locked up with it (`references/lockups.md`); one that meets the letters is drawn
  onto the set word (`references/symbol.md`, "Compose it on the word"). A mascot is briefed with the
  `character` skill.
- **Type alone.** The name set straight in its face with kerning, ligatures, alternates and the
  face's own features, at most one letter moved for a reason, simply arranged, or a seal or
  monogram when the brand needs one: `references/wordmark.md`, `references/seal.md`.

When the user asked for their own logo drawn again, it is one of the routes, its idea their logo
itself: `references/drawn.md`, "The user's own logo".

### 5. Check

Run `metamorfiles_check_logo` on every route's logo and act on what it reports:
`references/checks.md`. Before the review, a piece is made again only for a failure Studio measures
and reports: an opaque result, letters the check says the model redrew, or a trace the result says
falls short (a colour of the route's palette left out, a colour, shade or gradient the prompt
didn't ask for, a trace that strays from its drawing); how to make each again is in `references/vector.md`
and `references/checks.md`. Its look is the reviewer's to judge, so a maker draws a piece again only
for what the check reports. After the review, it changes only as the `review` skill's Run it, step
4, says.

### 6. Each route's files

A route's files before the choice: its logo in colour on the ground it's made for, and in one colour
on white, each with its `ground`, plus the parts it's built from (the name alone, the mark alone,
with `small: true` on the mark's entry so the board leads with the logo) when the route means to
show them. The reversed version and the version redrawn where one colour loses a part
(`references/drawn.md`, "Other versions of it") are made after the choice, for the chosen route only
(step 8).

One colour is what tells routes apart: it shows whether the drawing holds without its fills. A
drawing of lines with coloured fills becomes line art in one colour: its line colour to the ink and
every fill cut out (`metamorfiles_make_logo_variant`, each fill's colour to `"knockout"`), so the
ground shows through the drawing and keeps its details, which one colour on every paint would fill
into a silhouette. A drawing of solid shapes becomes one solid shape with its inner details
cut out.

Save every file under `brand/process/logo/`, its name starting with its route's id and a hyphen:
`folder: "brand/process/logo"` and `name: "shelf-drawn"` for an image, an `output` such as
`brand/process/logo/minutes-ink.svg` for the other tools.

### 7. Show them

Show every route the plan set, each checked and given its files (steps 5 and 6). The user chooses
between them.

In a new brand, give each option of `brand/process/logo.md` its files, in the order the plan set
(a further candidate after them), one `recommended: true`, with `mascot: true` at the top when the
brief asks for a mascot anywhere in it, and `mascot: true` on each route whose logo carries the
character, and ask as the `new-brand` skill says: Studio draws each large on its ground with its
one-colour version beside it on the brand board, a logo made from a drawing as the drawing itself
and its one-colour version from its trace. Outside it, show the check sheets and say in a line what
each is and why, the recommended one first.

### 8. After the choice

Start the chosen logo's cleanup at once (`references/final.md`), then go on. The brand has a mascot
when `logo.md` has `mascot: true` at the top or the chosen route has it (Studio checks both): then the
mascot comes first, the `character` skill, "In a new brand", and the imagery waits for its answer.

Then the imagery, while the final files are made (`references/final.md`): first the chosen logo's
redrawn version, when `metamorfiles_check_logo` reported a part lost in one colour
(`references/drawn.md`, "Other versions of it"). Everything this step and `references/final.md` make
is the planned flow and needs no extra word from the user: the mascot cut or drawn out of the chosen
logo, the version redrawn where one colour loses a part, and the final files. Only a new layout or
version the user didn't ask for needs their word first.

## References

| Read | When |
| --- | --- |
| [references/taste.md](references/taste.md) | What a strong logo, lockup and mark look like |
| [references/drawn.md](references/drawn.md) | A logo drawn whole by AI, and every other version of a logo |
| [references/wordmark.md](references/wordmark.md) | The type study, setting the name |
| [references/symbol.md](references/symbol.md) | A generated mark or mascot for a set name, or a drawn letter or mark |
| [references/lockups.md](references/lockups.md) | Putting the parts together |
| [references/seal.md](references/seal.md) | A seal, badge or monogram |
| [references/vector.md](references/vector.md) | How a drawing is made and traced, and what to do with the trace's result |
| [references/checks.md](references/checks.md) | What metamorfiles_check_logo reports, and the fix for each |
| [references/final.md](references/final.md) | Once the user has chosen a logo: cleaning, the final files, the logo used small |

The faces worth studying are in `references/fonts.md` of the `new-brand` skill; a
mascot is designed with the `character` skill; how to prompt each image model is in
`references/images.md` of the `studio` skill. In an app that didn't load a skill, read it with
`metamorfiles_get_guide`.

## Rules

- **Never redraw an existing logo unasked.** A brand that has one keeps its official files
  (the `brand` skill); a new seal or icon for it is a proposal the user approves first. Drawn
  again on its owner's word, it is a route (step 4).
- **A mark is drawn by the image model, never geometry typed as SVG by you.** Only Studio's shapes (a
  ring, a disc, a star, a diamond, a facet, a rule) are built without a drawing.
- **Supporting words are real type,** never drawn.
- **A route's logo is never drawn again whole to make another file** (a mark, a version): that file
  is made from the logo's own (step 8; `references/drawn.md`, "Other versions of it"), or the user
  hears what can't be made.
