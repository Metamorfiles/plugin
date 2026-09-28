# Create a brand

Only when the user asks for a new brand, or says there is nothing to translate. The name of a company
that exists, a website, a logo, files or images all mean Translate: follow `SKILL.md`, and invent
nothing.

A created brand is made the way a studio makes one: real references first, then a look, a logo from
a good face with a real tweak, imagery from a few approved anchors, and a kit that works in
production. The user's taste decides every step. You prepare two or three strong options, recommend
one with a reason, and do what they choose. You never judge taste for them.

The examples below use Lumen Skincare, Studio's made-up example brand.

## Five choices

| Step | You prepare | Speaks as | Read | The user |
|---|---|---|---|---|
| 1. Direction | two or three territories, each a moodboard of real references by attribute | `designer` | `research.md` | picks one, or says what to mix |
| 2. Look | two or three palettes in proportion, each with a type pairing, set in the brand's words | `designer` | `look.md`, `fonts.md` | picks a palette and a pairing |
| 3. Logo | two or three wordmark routes, tested small and in one colour, and a seal or icon when the brand needs one | `designer` | `logo.md` | picks a route, and tweaks in words |
| 4. Imagery | the style in words and three to five seed images | `imager` | `imagery.md` | approves them, or names the ones to redo |
| 5. Kit | DESIGN.md and the brand board: the guide, the images, the brand in use | `designer`, `copywriter` for the voice | `SKILL.md`, `mockups.md` | approves, or names what to change |

A new brand is made, not reviewed: the team skill's first review doesn't apply. The `reviewer` speaks
only for the final check of the kit.

Each step is one board and one question. Studio draws the board from the step's file (below); you
never lay it out yourself.

## Where it starts, and where you ask

- **From the panel.** The user filled in "New brand": their brief is in `brand/process/brief.md`, and
  Studio started you on a task, whose id is in your request.
- **From the chat.** Call `metamorfiles_get_project` with `create: true` and the brand's name. Ask one
  message with your proposal in it: what it is, who it's for, how it should feel, the name, and
  anything true and specific (the place, the founder, the process, the hours). Write your reading as
  the proposal, so "go" is a full answer. Then write `brand/process/brief.md` with their answers.

Before the first step, say in one line how long it takes (about half an hour) and roughly how many
images it makes on their image source (twenty to thirty).

At every step:
- **Say where you are.** Call `metamorfiles_team_update` before the step's work, with a line like
  "is gathering references, step 1 of 5". Working from the chat, it starts a task on the first call
  and returns its id; pass it every time after. The panel shows the step in the team pill.
- **Ask with `metamorfiles_ask_user`**, as `metamorfiles-team` says, the options being the option
  titles, the recommended one marked, so the user answers in the chat or on the board's panel. From
  the user's own app, your reply carries the same question first: the panel link to the board, then
  the options as a short numbered list, the recommended one first with its reason. One question,
  answered in a word. In Auto the recommended one is taken at once; say so in the thread.
- **An answer in their own words is the answer.** "A is better but not good enough" means rework A
  and ask again; "C has a cup with two handles" means redo C before anything else.
- **Record the answer** as `chosen` in the step's file (the imagery step lists the approved seeds,
  comma-separated). Studio moves the board on to the next step.
- **A change is local.** "Warmer", "the other S", "redo the second one": rework that step only, and
  what depends on it. A new palette recolours the logo routes; it never restarts the research.
- **Going back is one sentence.** "Back to the logo": remove its `chosen`, and the board shows it again.

A brand started in one place can continue in the other: `metamorfiles_get_project` lists which
steps are chosen in `brand.creating`. Continue from the first one that isn't.

## The steps' files

The brief and every step live in `brand/process/`. A step is a Markdown file named for it
(`direction.md`, `look.md`, `logo.md`, `imagery.md`) with its options in YAML. Paths are relative to
`brand/`. Write it with `metamorfiles_write_file`; the result says what is wrong with it, or that the
board shows it.

```md
---
question: Which logo should Lumen use?
options:
  - id: rising
    title: Rising u
    line: The u's bowl opens like light over a horizon; quiet and exact.
    recommended: true
    files:
      - { file: process/logo/rising.svg, ground: "#f6f1ea" }
      - { file: process/logo/rising-paper.svg, ground: "#1f1a17" }
      - { file: process/logo/rising-ink.svg, ground: "#ffffff" }
  - id: spaced
    title: Spaced capitals
    line: LUMEN in open capitals; calm, a little clinical.
    files: [{ file: process/logo/spaced.svg, ground: "#f6f1ea" }]
---

Notes for the record: why each route, what the user said.
```

Each option can carry:
- `files`: images or SVGs, each with an optional `caption` (a credit, what to take) and `ground` (the
  colour a logo file is shown on);
- `colors`: `{ name, hex, share }`, in the order and proportion they are used;
- `fonts`: `{ family, file, role }`, the file under `brand/fonts/`;
- `sample`: the words the fonts are set in, from the brand's own voice.

Up to four options; two or three is right.

## The steps

1. **Direction** (`research.md`). The brief's facts and category codes go into `brief.md`. Collect
   references with `metamorfiles_collect_references`: one search on the business's words, or the
   user's own links, and a few projects. Group what's good into two or three territories that differ
   in feel, each an option whose files are six to ten references by attribute (logo, colour, type,
   imagery, layout), captioned with the project and what to take.
2. **Look** (`look.md`). Two or three options, each a palette with its shares and a type pairing,
   the faces added with `metamorfiles_add_font`, set in a line of the brand's own voice.
3. **Logo** (`logo.md`). Two or three routes set with `metamorfiles_make_wordmark`, each in colour,
   reversed and in one colour, every file with its `ground`: the board also shows each at 64, 32
   and 16 px. A seal or icon only when the brand needs a compact mark.
4. **Imagery** (`imagery.md`). The mode the brand needs (illustration, photography, a character,
   graphic or 3D), the style block, and three to five seeds, one per option, saved in
   `brand/process/imagery/`. The approved ones are the anchors; grow the library from them into
   `brand/refs/`.
5. **Kit.** The chosen look, logo and imagery become `brand/DESIGN.md` as `SKILL.md` describes, with
   the logos in `brand/logos/`, the library as an imagery folder in `assets` with its anchors, and
   an in-use folder of mockups (`mockups.md`): first ask which of the brief's touchpoints to show
   it on and how each is made, then make them. Write `brand/imagery-guide.md` with the style block.
   The brand board then holds it all as one item: the guide, the images and each mockup as its own
   frame. Get the final check (`metamorfiles-review`, in the foreground, waiting for its verdict),
   fix what it marks, and hand over as `presenting.md` says: in a Studio task, its short form for
   the thread, with the question asked through `metamorfiles_ask_user`. Make no templates or pages:
   the kit is the brand. The one question offers the first posts; when the user says yes, make
   them in the same task.

## Rules

- **Facts are never created**: no claims, prices, awards, history, addresses or customers beyond
  what the user gave. What a template will need goes to Known gaps.
- **References are for study.** Never copy a reference's mark, layout or artwork, never pass one to
  an image model, and never put one in the kit.
- **The web is used lightly.** Every page you open comes from the project's daily budget, because it
  opens from the user's own address and busy sites block it. One search and a few projects is enough;
  links the user pastes cost the same and are often better.
- **A model never draws the logo or words.** Logos come from `metamorfiles_make_wordmark`; words are
  set in the brand's fonts; mockups place the real files (`mockups.md`).
- **Authorship.** Images made with an image model and chosen with the user are fine for the brand's
  posts and pages. For a sign, packaging or anything trademarked, say in Known gaps that an
  illustrator or photographer should redo the final artwork from the approved one.
