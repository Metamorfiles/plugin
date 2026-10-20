---
name: logo
description: Use to design a logo in Metamorfiles Studio for a brand that has none, including the logo step of a new brand, in three routes (a logo drawn whole by the image model and traced, the name set from real fonts with a generated mark or letter, and one in type alone), then, once the user chooses, its small mark and its small uses. Use it for the logo step of a new brand, or when the user asks for a logo, a wordmark, a mark, a symbol, a seal, a badge, a monogram or a lockup for a brand whose DESIGN.md already sets its look. A business with nothing made yet, even when the user asks only for a logo, starts with the new-brand skill, whose logo step this is. Not for a brand that already has a logo, whose official files are never redrawn (the brand skill).
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
- [ ] 3. Three ideas: each route's idea and composition written before anything is drawn
- [ ] 4. Three routes made: the word set first, a mark drawn to fit it
- [ ] 5. Every route checked with metamorfiles_check_logo: its letters and one colour
- [ ] 6. Each route's two files: colour, and one colour
- [ ] 7. Routes shown and one recommended
- [ ] 8. After the choice: the mascot first when the brand has one (the chosen logo's own, or three designs drawn from it) and asked; then the small mark (cut, drawn from the logo, or the mascot's head) and asked; then, while the imagery is made, cleaned, the final files, the small uses composed
```

### 1. What the brand already decided

Read `brand/process/brief.md` and the chosen option of `brand/process/direction.md`, and look at its
reference images with `metamorfiles_read_file`. They set the look; the logo's idea comes from the
brief, the business's own reality, not the category's usual symbol. Outside a new brand, the user's
request and the brand's DESIGN.md do the same. With neither a brief nor a DESIGN.md, the brand is new:
follow the `new-brand` skill instead, which comes back here for its logo step. Read `references/taste.md` for what a strong version
of that look is, and what the image model tends to get wrong.

When a route needs a part the references don't show well (the lettering, a mascot, a mark), start a
search for it in the background as you begin, with the category and the part:
`metamorfiles_search_references { query: "bakery lettering", wait: false }`.
Read it when you reach that route (`metamorfiles_search_references { id }`), and collect the two or
three projects worth studying: `metamorfiles_collect_references { links: [...], path: "Bakery lettering" }`.
When the index has nothing good for the part, find it with your own web search instead (the
category and the part, "branding" or "case study") and collect the best links the same way.

### 2. The type study

Set the name in the faces the direction suggests and others around them
(`metamorfiles_type_study { text: "Lumen Skincare", faces: ["Fraunces", { family: "Inter", weight: 800 }] }`),
and read the sheet: the word's shape, its pairs, its rhythm, and what could become the idea. Choose
each route's face and add it with `metamorfiles_add_font { family: "Fraunces" }`: the file it returns
is the `font` the wordmark is set from (`references/wordmark.md`).

### 3. Three ideas

Before anything is drawn, write each route's idea and composition in one line in your notes. Each
idea comes from a different source: one from the name (its sound, its letters, a pair that could
join), one from the product (what it is, how it's made, what it's used for), one from the place, the
people or the feeling it promises. The composition says how the logo is built: what leads, how big
the other parts are against the word's cap height, whether they share its baseline, overlap it, tuck
into a letter or stand apart. A name that arches or bounces is drawn whole (route 1). Read
the three together against `references/taste.md`, "Defaults to recognise": three ideas in one
arrangement (a mark centred above the word, three times) are one answer. Each line goes on its
route's option as `composition` in `brand/process/logo.md`, for the reviewer; the user sees the route's `line`, written for them.

### 4. Three routes

Three answers, not three versions: each route a different idea and a different lettering family or
composition move (`references/taste.md`), so the user chooses between ideas.

1. **Drawn whole by AI.** The image model draws the logo as one composition: lettering alone, or
   lettering with a mark, a mascot or ornaments, all in one style, with proper spacing between its
   parts. Studio traces it; supporting words are set in real type around it: `references/drawn.md`.
2. **Real fonts with a generated part.** The name set from real fonts with its kerning, ligatures and
   spacing, with a generated mark, a mascot or a drawn letter in a letter's place. The word comes
   first. A drawn letter is set into it (`references/symbol.md`, "A drawn letter"); a mark or mascot
   is drawn alone, kept, then drawn by the image model onto the set word as the route's composition
   says (`references/symbol.md`, "Compose it on the word"), so the two meet in one hand. The route
   keeps the name alone, the real wordmark file, beside the lockup and the mark: `references/wordmark.md`.
   A mascot is designed with the `character` skill.
3. **Type alone.** The name set straight in its face with kerning, ligatures, alternates and the
   face's own features, at most one letter moved for a reason, in a simple composition, or a seal or
   monogram when the brand needs one:
   `references/wordmark.md`, `references/seal.md`.

### 5. Check, fix, check again

Run `metamorfiles_check_logo` on every route's logo. Read the sheet and the numbers, fix what fails,
and run it again: `references/checks.md`. The user should never be the one to find a drawn letter
that's wrong or a one-colour version that doesn't read. The reversed version and the small mark are
made after the choice (step 8): a route is never drawn again for them.

### 6. Each route's files

Two files a route: the logo in colour on the ground it's made for, then in one colour on white,
each with its `ground`. One colour is what tells routes apart: it shows whether the drawing holds
without its fills. A drawing of lines with coloured fills becomes line art in one colour: its line
colour to the ink and every fill cut out (`metamorfiles_make_logo_variant`, each fill's colour to
`"knockout"`), so the ground shows through the drawing. Recolouring every paint to one colour turns
it into a silhouette, and the details are gone. A drawing of solid shapes becomes one solid shape
with its inner details cut out.

The reversed version, the small mark, and a version redrawn because it loses a part in one colour
are made after the choice, for the chosen route only (step 8). Save every file under
`brand/process/logo/`: `folder: "brand/process/logo"` for an image, an `output` there for the other tools.

### 7. Show them

Show every route, and every other candidate as good as one: a second drawing with every letter
right that holds the direction another way, a second mark that holds the idea. Each is its own
option, checked and given its files like a route (steps 5 and 6), up to six in all, so nothing worth
choosing stays in your notes.

In a new brand, write them as the options of `brand/process/logo.md`, one `recommended: true`, with
`mascot: true` at the top when the brief asks for a mascot, and `mascot: true` on each route whose
logo carries the character, and ask as the `new-brand` skill says: Studio draws each large on its ground with its
one-colour version beside it on the brand board, a logo made from a drawing as the drawing itself and its
one-colour version from its trace. Outside it, show the check sheets and say in a line what each is and why,
the recommended one first.

### 8. After the choice

When the brand has a mascot, it comes first, from the logo the user chose, never from a route they
passed over: the `character` skill, "In a new brand". A chosen route that carries the character
gives its poses and sheet, approved with "Use these"; any other gets three mascot designs drawn from
it, one chosen, then its sheet. Both are written into `brand/process/logo.md` as `characters` and
asked with `metamorfiles_ask_user { step: "character" }`; the small mark waits for the answer.

The small mark is next, before the imagery or anything else: it stands for the whole name, and with a
mascot it may be the mascot's head or bust, made from the chosen mascot as the `character` skill says.

- **A part of it stands for the brand on its own** (the logo's own mark, its first letter or a monogram
  of its initials, the seal's middle, or the whole logo when it's compact: about as tall as it is wide, never a wordmark or a logo wider than about 1.5:1): cut it from the logo's file,
  `metamorfiles_make_logo_variant { file: "brand/process/logo/<chosen>.svg", output: "brand/process/logo/<name>-mark.svg", keep: { x: 0, y: 0, width: 0.3, height: 1 }, square: true }`.
  A logo put together from parts (its `.svg.json` lists `parts`) is cut from the part's own file instead.
- **None does** (fine detail, texture, a long name): never clean or redraw the logo for it. Have the
  image model draw the mark from the logo, the prompt naming the part and saying it is simplified,
  in the logo's own drawing and colours, and trace it:
  `metamorfiles_generate_image { prompt, references: ["brand/process/logo/<chosen>.svg"], width: 1024, height: 1024, folder: "brand/process/logo", trace: { colors: [...] } }`.

Never another letter alone: a lone e reads as "e", not as the brand. Offer two or three, check each
with `metamorfiles_check_logo`, write them into `brand/process/logo.md` as `marks`, each
`{ file, title }` and one `recommended: true`, and ask with `metamorfiles_ask_user { step: "mark" }`.
Studio shows them on the `process-logo` frame's last page as a profile picture and an app icon, records the answer as
`mark`, and starts nothing of the imagery until it's answered. Then the imagery.

While the imagery is made, clean the chosen logo's traced files for the final files, in the
background: one `logo-cleaner` agent per file, given the project path, the traced file and what it is
in one sentence (in an app without the plugin's agents, a subagent whose instructions are exactly what
`metamorfiles_get_guide { name: "logo-cleaner" }` returns). Each writes `<name>-clean.svg` beside its
trace; look at it over the drawing with
`metamorfiles_compare_trace { file: "brand/process/logo/<name>-clean.svg", against: "brand/process/logo/<name>.svg" }`.
The cleaned file keeps every part of the drawing, with only its edges straightened or smoothed. Nothing
the user is asked waits for it.

Then make the final files in `brand/logos/` from the cleaned files, with the same tools and settings,
each with an `output` there. A cleaned drawing reaches it as one part:
`metamorfiles_compose_logo { layout: "stack", parts: [{ file: "<the cleaned .svg>" }], output: "brand/logos/logo.svg" }`
(`metamorfiles_generate_image` never saves into `brand/logos/`). The other colours come from
`metamorfiles_make_logo_variant { file, output: "brand/logos/logo-reversed.svg", colors: { ... } }`:
the reversed version is made here for the first time, the same way as the one colour, and a version
that loses a part in one colour is redrawn now. A version of a logo drawn whole: `references/drawn.md`, "Other versions of it". Run `metamorfiles_check_logo` on each. Declare them in
DESIGN.md `logos` with their grounds, sources ("set in <face> as outlines with a drawn part", "drawn
by <model> and traced", "created and approved by the user on <date>") and clear space, and the
small mark with `small: true`.

Last, compose the small mark for where it's used small: the profile picture, which platforms crop to
a circle, and the app icons, squares. Studio places the mark by its ink and shows each on the
guidelines' `mark` page
(`metamorfiles_render_preview { item: "templates/brand-board", format: "mark" }`). Look at each as
it will be seen and decide its composition for that mark: how much of the circle or square it fills,
where it sits, its ground, or another version of it (the reversed mark on a brand colour). Write what
differs from Studio's placement on the small mark's entry, `profile` and `icon`:
`{ file: logos/mark.svg, small: true, profile: { size: 0.9, ground: "{colors.ember}", file: logos/mark-reversed.svg }, icon: { size: 1 } }`
(`size` is the share of the circle, from its centre to the mark's farthest point, or of the square,
its longer side, that the mark spans; above 1 it is cropped; `at` its centre). The kit's profile
picture, favicon and app icons are exactly these.

## References

| Read | When |
| --- | --- |
| [references/taste.md](references/taste.md) | What a strong logo, lockup and mark look like |
| [references/drawn.md](references/drawn.md) | Route 1, the logo drawn whole by AI |
| [references/wordmark.md](references/wordmark.md) | The type study, setting the name, the small-size version |
| [references/symbol.md](references/symbol.md) | A generated mark or a drawn letter |
| [references/lockups.md](references/lockups.md) | Putting the parts together |
| [references/seal.md](references/seal.md) | A seal, badge or monogram |
| [references/vector.md](references/vector.md) | How a drawing is made and traced |
| [references/checks.md](references/checks.md) | The check loop |

The faces worth studying are in `references/fonts.md` of the `new-brand` skill; a
mascot is designed with the `character` skill; how to prompt each image model is in
`references/images.md` of the `studio` skill. In an app that didn't load a skill, read it with
`metamorfiles_get_guide`.

## Rules

- **Never redraw an existing logo.** A brand that has one keeps its official files
  (the `brand` skill); a new seal or icon for it is a proposal the user approves first.
- **A mark is drawn by the image model, never geometry typed as SVG by you.** Only Studio's shapes (a
  ring, a disc, a star, a diamond, a facet, a rule) are built without a drawing.
- **Supporting words are real type,** in every route.
- **A route's logo is never drawn again to fix another file** (a mark, a version, a small size): the
  file changes, or the user hears what can't be made.
