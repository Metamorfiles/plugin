# Create a brand

Only when the user asks for a new brand, or says there is nothing to translate. The name of a company
that exists, a website, a logo, files or images all mean Translate: follow `SKILL.md`, and invent
nothing.

A created brand is made the way a studio makes one: real references first, then a direction, a logo
with its own letterforms or drawing, imagery from a few approved anchors, and a kit that works in
production. The user's taste decides every step. You prepare two or three strong options, recommend
one with a reason, and do what they choose. You never judge taste for them.

The examples below use Lumen Skincare, Studio's made-up example brand.

## Three choices, then the kit

| Step | You prepare | Speaks as | Read | The user |
|---|---|---|---|---|
| 1. Direction | two or three directions, each its references, palette in proportion and type pairing, set in the brand's words | `designer` | `research.md`, `look.md`, `fonts.md` | chooses one, or says what to change or mix |
| 2. Logo | two or three routes, of at least two kinds, each in colour, reversed and in one colour | `designer` | `logo.md` | chooses one, or asks for another |
| 3. Imagery | the style in words and four seed images | `imager` | `imagery.md` | uses them, or has single ones redone |
| Kit | DESIGN.md and the brand board: the guide, the images, the brand in use | `designer`, `copywriter` for the voice | `SKILL.md`, `mockups.md` | asks for any change they want |

A new brand is made, not reviewed: the team skill's first review doesn't apply. The `reviewer` speaks
only for the final check of the kit.

Studio draws everything on one item, the brand board: the brief first, then each step as its own
frame, then the kit's frames. A step's frame shows its slots while you make it, its options once you
write its file, and stays as the record after the choice. You never lay any of it out yourself.

## Where it starts

- **From the panel.** The user filled in "New brand": their brief is in `brand/process/brief.md`, and
  Studio started you on a task, whose id is in your request.
- **From the chat.** Call `metamorfiles_get_project` with `create: true` and the brand's name. Ask one
  message with your proposal in it: what it is, who it's for, how it should feel, the name, and
  anything true and specific (the place, the founder, the process, the hours). Write your reading as
  the proposal, so "go" is a full answer. Then write `brand/process/brief.md` with their answers.

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
    title: Rising u
    line: The u's bowl opens like light over a horizon; quiet and exact.
    recommended: true
    files:
      - { file: process/logo/rising.svg, ground: "#f6f1ea" }
      - { file: process/logo/rising-paper.svg, ground: "#1f1a17" }
      - { file: process/logo/rising-ink.svg, ground: "#ffffff" }
  - id: sun
    title: The morning sun
    line: A drawn sun rising behind the name; warm, and it reads as an icon alone.
    files: [{ file: process/logo/sun.svg, ground: "#f6f1ea" }]
---

Notes for the record: why each option, what the user said.
```

Each option can carry:
- `files`: images or SVGs, each with an optional `caption` (a credit, what to take), `ground` (the
  colour a logo file is shown on) and, for a logo route's small mark, `small: true`;
- `colors`: `{ name, hex, share }`, in the order and proportion they are used;
- `fonts`: `{ family, file, role }`, the file under `brand/fonts/`;
- `sample`: the words the fonts are set in, from the brand's own voice.

Up to four options; two or three is right, and the imagery step has one per seed. Each `title` is at
most 60 characters, what the user will call it, and each `line` at most 200, one sentence on why it
fits the brief. Exactly one option is `recommended`. Writing the direction step also returns the
contrast of every pair in each palette, so there is nothing to work out by hand.

Save what a step makes in its own folder as you go (`brand/process/logo/`, `brand/process/imagery/`):
its frame shows each file as it arrives, so the user watches the step come together.

## The steps

1. **Direction** (`research.md`, `look.md`). The brief's facts, touchpoints and category codes go into
   `brief.md`. Collect references with `metamorfiles_collect_references`: one search on the
   business's words, or the user's own links, and a few projects; they appear on the brief's frame as
   they arrive. Group what's good into two or three directions that differ in feel. Each option is a
   whole direction: four to eight references by attribute (logo, colour, type, imagery, layout),
   captioned with the project and what to take; its palette with shares; its type pairing, the faces
   added with `metamorfiles_add_font`; and its `sample`.
2. **Logo** (`logo.md`). Two or three routes of at least two kinds, each with its own letterforms or
   drawing, in colour on its paper first, then reversed and in one colour, every file with its
   `ground`. Studio shows each route in use and at the small sizes it will meet.
3. **Imagery** (`imagery.md`). The mode the brand needs (illustration, photography, a character,
   graphic or 3D), the style block, and four seeds made together, one per option, saved in
   `brand/process/imagery/`. The seeds the user keeps are the anchors; grow the library from them
   into `brand/refs/`.
4. **Kit.** The chosen direction, logo and imagery become `brand/DESIGN.md` as `SKILL.md` describes,
   with the logos in `brand/logos/`, every face with its role (the logo's own face named for it), the
   library as an imagery folder in `assets` with its anchors, and an in-use folder of mockups
   (`mockups.md`) on the touchpoints the brief names, made without asking first. Write
   `brand/imagery-guide.md` with the style block. The brand board then holds it all after the steps:
   the guide, the images and each mockup as its own frame. Get the final check (`metamorfiles-review`,
   in the foreground, waiting for its verdict), fix what it marks, and hand over as `presenting.md`
   says. Make no templates or pages: the kit is the brand.

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
- **Logos come from Studio's tools.** A wordmark is set with `metamorfiles_make_wordmark`; a drawn
  mark is drawn by the image model in black on white and traced (`logo.md`). Words are set in the
  brand's fonts; mockups place the real files (`mockups.md`).
- **Authorship.** Images made with an image model and chosen with the user are fine for the brand's
  posts and pages. For a sign, packaging or anything trademarked, say in Known gaps that an
  illustrator or photographer should redo the final artwork from the approved one; a drawn logo
  should be registered only after a designer has refined it.
