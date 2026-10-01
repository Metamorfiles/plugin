---
name: metamorfiles-brand-creation
description: Use to create a new brand from nothing in Metamorfiles Studio, when the user asks for a new brand or identity, says there is nothing to translate, or the project holds a brief in brand/process/brief.md (Studio's "New brand"). Three choices the user makes on the brand board (direction, logo, imagery), then the kit. Use it for "make me a brand", "I'm starting a bakery and need everything", or a business name with no logo, site or files yet. Not for an existing company, website, logo or guidelines, which are translated (metamorfiles-brand).
license: MIT
---

# Create a brand

Only when the user asks for a new brand, or says there is nothing to translate. The name of a company
that exists, a website, a logo, files or images all mean Translate: follow `metamorfiles-brand`, and
invent nothing.

A created brand is made the way a studio makes one: real references first, then a direction, a logo
with the name set in a chosen face and a drawing of its own, imagery from a few approved anchors, and
a kit that works in production. The user's taste decides every step. You prepare two or three strong
options, recommend one with a reason, and do what they choose. You never judge taste for them.

The examples below use Lumen Skincare, Studio's made-up example brand.

## Checklist

Copy it into your notes and tick each step as you go:

```
- [ ] Brief: brand/process/brief.md, the user's answers and facts
- [ ] 1. Direction: references collected, 2 or 3 directions written, asked, chosen
- [ ] 2. Logo: three routes with metamorfiles-logo (a character with metamorfiles-character), asked, chosen
- [ ] 3. Imagery: mode, style block, four seeds, asked, anchors kept
- [ ] Kit: DESIGN.md, final logos, fonts, library, mockups, imagery guide
- [ ] Final check: metamorfiles-review in the foreground, fixes made
- [ ] Handover: finished: true with the summary
```

| Step | You prepare | Speaks as | Read | The user |
|---|---|---|---|---|
| 1. Direction | two or three directions, each its references, palette in proportion and type pairing, set in the brand's words | `designer` | `references/research.md`, `references/look.md`, `references/fonts.md` | chooses one, or says what to change or mix |
| 2. Logo | three routes from the chosen direction: drawn whole by AI, real fonts with a generated part, type alone; each in colour, reversed and in one colour | `designer` | the `metamorfiles-logo` skill; `metamorfiles-character` for a mascot | chooses one, or asks for another |
| 3. Imagery | the style in words and four seed images | `imager` | `references/imagery.md` | uses them, or has single ones redone |
| Kit | DESIGN.md and the brand board: the guide, the images, the brand in use | `designer`, `copywriter` for the voice | `metamorfiles-brand`, `references/mockups.md` | asks for any change they want |

`references/principles.md` holds what separates studio work from generated work, with tests for each
step; read it before the first step and use it to make each step's options stronger. Its
`library/` describes published identities by kind of business, for study.

A new brand is made, not reviewed: the team skill's first review doesn't apply. The `reviewer` speaks
only for the final check of the kit.

Studio draws everything on one item, the brand board: the brief first, then each step as its own
frame, then the kit's frames. A step's frame shows its slots while you make it, its options once you
write its file, and stays as the record after the choice. You never lay any of it out yourself.

## Where it starts

- **From the panel.** The user filled in "New brand": their brief is in `brand/process/brief.md`, and
  Studio started you on a task, whose id is in your request.
- **From the chat.** Call `metamorfiles_get_project` with `create: true` and the brand's name, then
  `metamorfiles_team_update` to start the task. Ask for the brief with `metamorfiles_ask_user` and
  `brief`: your reading of what the user said (what it is, who it's for, how it should feel, links
  they gave). Studio opens the same brief questions the panel's New brand asks, filled in with your
  reading; the user completes them, above all the work they like, and Studio writes
  `brand/process/brief.md`. In your reply give the panel link and say the questions are open there;
  they can also answer in the chat, which keeps your reading. Never write the brief yourself before
  they answer: their taste is what the direction starts from.

Before the first step, say in one line that it takes about half an hour and makes twenty to thirty
images on their image source.

## At every step

- **Say who is at work.** Call `metamorfiles_team_update` with the `role` and `status` before each
  part of the work. Studio writes what the user reads at the top, from the step and the files you
  make, so leave out `line`. Working from the chat, the first call starts a task and returns its id;
  pass it every time after.
- **Write the step's file** (below). The result says what's wrong with it, or gives the question
  Studio will ask and the options as the user will see them.
- **Ask with `metamorfiles_ask_user` and `step`.** Studio asks the step's own question with the
  options' titles, and the user chooses on the step's frame, in the thread or in your chat. From the
  user's own app, first write in your reply what the write result gave you: the panel link, then the
  options as a short list, the recommended one first with its reason. In Auto the recommended option
  is taken at once; say so in the thread.
- **Studio records the choice** in the step's file, however the user made it, and the next step's
  frame appears. Never write `chosen` yourself.
- **An answer in their own words is the answer.** "A is better but not good enough" means rework A
  and ask again; "the palette of A with the type of B" means write that option and ask again; "C has
  a cup with two handles" means redo C before anything else.
- **From the frame** the answer can also be "Try another route instead of <title>" or "Redo <title>":
  replace that one option, keep the others as they are, and ask again. "Direction: <title>" means
  the user went back and chose again on an earlier step: Studio has cleared the steps after it, so
  make them again from the new choice.
- **A change is local.** "Warmer", "the other S", "redo the second one": rework that step only, and
  what depends on it. A new palette recolours the logo routes; it never restarts the research.
- **Going back from the chat.** "Back to the logo": write the logo step's file again without its
  `chosen`, and ask again.

A brand started in one place can continue in the other: `metamorfiles_get_project` lists where each
step stands in `brand.creating`. Continue from the first one that isn't chosen.

## The steps' files

The brief and every step live in `brand/process/`: `direction.md`, `logo.md` and `imagery.md`, each a
Markdown file with its options in YAML. Paths are relative to `brand/`. Write them with
`metamorfiles_write_file`.

```md
---
options:
  - id: rising
    title: Rising sun
    line: A half-risen sun beside the name set in a calm serif; quiet and exact.
    recommended: true
    files:
      - { file: process/logo/rising.svg, ground: "#f6f1ea" }
      - { file: process/logo/rising-paper.svg, ground: "#1f1a17" }
      - { file: process/logo/rising-ink.svg, ground: "#ffffff" }
      - { file: process/logo/rising-mark.svg, ground: "#f6f1ea", small: true }
  - id: lumen-u
    title: The open u
    line: The name alone, its u opened like light over a horizon.
    files: [{ file: process/logo/open-u.svg, ground: "#f6f1ea" }]
---

Notes for the record: why each option, what the user said.
```

Each option can carry:
- `files`: images or SVGs, each with an optional `caption` (a credit, what to take), `ground` (the
  colour a logo file is shown on) and, for a logo route's small mark, `small: true`;
- `colors`: `{ name, hex, share }`, in the order and proportion they are used;
- `fonts`: `{ family, file, role }`, the file under `brand/fonts/`;
- `sample`: the words the fonts are set in, from the brand's own voice.

Up to four options: two or three directions, three logo routes, one per seed on the imagery step.
Each `title` is at most 60 characters, what the user will call it, and each `line` at most 200, one
sentence on why it fits the brief. Exactly one option is `recommended`. Writing the direction step
also returns the contrast of every pair in each palette, so there is nothing to work out by hand.

Save what a step makes in its own folder as you go (`brand/process/logo/`, `brand/process/imagery/`):
its frame shows each file as it arrives, so the user watches the step come together.

## The steps

1. **Direction** (`references/research.md`, `references/look.md`). The brief's facts, touchpoints and
   category codes go into `brief.md`. Search with `metamorfiles_search_references` on the business's plain
   words, choose the projects worth opening from the covers, and collect them with
   `metamorfiles_collect_references`, the user's own links first; they appear on the brief's frame as
   they arrive. Group what's good into two or three directions that differ in feel.
   Each option is a whole direction: four to eight references by attribute (logo, colour, type,
   imagery, layout), captioned with the project and what to take; its palette with shares; its type
   pairing, the faces added with `metamorfiles_add_font`; and its `sample`.
2. **Logo** (the `metamorfiles-logo` skill), made from the brief and the chosen direction. Three
   routes: a logo drawn whole by the image model and traced; the name set from real fonts with a
   generated mark, mascot or letter; and the name in type alone. Supporting words are always real
   type. Each route checked with `metamorfiles_check_logo`, in colour on its paper,
   reversed and in one colour, every file with its `ground`, its small mark marked `small: true`. A
   mascot is designed with `metamorfiles-character`.
3. **Imagery** (`references/imagery.md`). The mode the brand needs (illustration, photography, a
   character, graphic or 3D), the style block, and four seeds made together, one per option, saved in
   `brand/process/imagery/`. The seeds the user keeps are the anchors; grow the library from them
   into `brand/refs/`.
4. **Kit.** The chosen direction, logo and imagery become `brand/DESIGN.md` as `metamorfiles-brand`
   describes, with the final logos in `brand/logos/` (step 8 of `metamorfiles-logo`), every face with
   its role (the logo's own face named for it), the library as an imagery folder in `assets` with its
   anchors, a character folder when there is one, and an in-use folder of mockups
   (`references/mockups.md`) on the touchpoints the brief names, made without asking first. Write
   `brand/imagery-guide.md` with the style block. The brand board then holds it all after the steps:
   the guide, the images and each mockup as its own frame. Get the final check (`metamorfiles-review`,
   in the foreground, waiting for its verdict), fix what it marks, and hand over as
   `references/presenting.md` of `metamorfiles-brand` says. Make no templates or pages: the kit is
   the brand.

## Ending

The last `metamorfiles_team_update` has `finished: true` and your handover as `summary`. The run
ends there: Studio tells the user the brand is ready and offers to make the first posts, so the
handover asks nothing. The user downloads the kit (the logo for each use, the fonts, the colours and
a page that says what's what) from the brand board in the panel.

## Rules

- **Facts are never created**: no claims, prices, awards, history, addresses or customers beyond
  what the user gave. What a template will need goes to Known gaps.
- **References are for study.** Never copy a reference's mark, layout or artwork, never pass one to
  an image model, and never put one in the kit.
- **The web is used lightly.** Every page you open comes from the project's daily budget, because it
  opens from the user's own address and busy sites block it. One search and a few projects is enough;
  links the user pastes cost the same and are often better.
- **Logos come from Studio's tools.** A name is set with `metamorfiles_make_wordmark`, or drawn in a
  logo drawn whole and read letter by letter; marks and characters are drawn and traced;
  every supporting word is set from a font (`metamorfiles-logo`). Words outside the logo are set in
  the brand's fonts; mockups place the real files (`references/mockups.md`).
