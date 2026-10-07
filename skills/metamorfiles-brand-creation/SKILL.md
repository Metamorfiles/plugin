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
- [ ] 2. Logo: three routes with metamorfiles-logo (a character with metamorfiles-character), reviewed, asked, chosen
- [ ] 3. Imagery: mode, style block, four seeds, reviewed, asked, anchors kept
- [ ] Kit: DESIGN.md (its voice by the copywriter), final logos, fonts, library and mockups (each batch reviewed), imagery guide
- [ ] Final check: metamorfiles-review of the whole kit in the foreground, fixes made
- [ ] Handover: finished: true with the summary
```

| Step | You prepare | Speaks as | Read | The user |
|---|---|---|---|---|
| 1. Direction | two or three directions, each its references, palette in proportion and type pairing, set in the brand's words | `designer` | `references/research.md`, `references/look.md`, `references/fonts.md` | chooses one, or says what to change or mix |
| 2. Logo | three routes from the chosen direction: drawn whole by AI, real fonts with a generated part, type alone; each in colour, reversed and in one colour | `designer` | the `metamorfiles-logo` skill; `metamorfiles-character` for a mascot | chooses one, or asks for another |
| 3. Imagery | the style in words and four seed images | `imager` | `references/imagery.md` | uses them, or has single ones redone |
| Kit | DESIGN.md and the brand board: the guide, the images, the brand in use | `designer`, `copywriter` for the voice | `metamorfiles-brand`, `references/mockups.md`, `metamorfiles-mockup` | asks for any change they want |

`references/principles.md` holds what separates studio work from generated work, with tests for each
step; read it before the first step and use it to make each step's options stronger. Its
`library/` describes published identities by kind of business, for study.

This skill is the order of work for a new brand, in place of the team skill's: there is no first
review (a new brand is made, not reviewed), the reviewer checks each piece once it's made (below),
it asks once per step rather than once per role, and its handover is the one
`references/presenting.md` of `metamorfiles-brand` describes.

Studio draws everything on one item, the brand board: the brief first, then each step as its own
frame, then the kit's frames. A step's frame shows its slots while you make it, its options once you
write its file, and stays as the record after the choice. You never lay any of it out yourself.

## Where it starts

A brand can start, and continue, anywhere: Studio's panel, the user's terminal or desktop app, any
app with Studio's tools. Whatever the start, there is one task for the brand and the user sees it on
the brand board.

- **Studio's New brand.** The user answered the brief questions in the panel: their brief is in
  `brand/process/brief.md`, and Studio started you on a task whose id is in your request. Begin with
  the direction.
- **Studio's Ask box, or a request with no brief.** Studio started you on a task, but there is no
  `brand/process/brief.md` yet: ask for it as below, with the task id from your request. The user is
  in the panel already, so the questions open in front of them.
- **The user's own app** (a terminal, a desktop app, any chat with Studio's tools). Call
  `metamorfiles_get_project { create: true, name: "<brand>" }`, then
  `metamorfiles_team_update { role: "designer", status: "working", scope: "project" }`, which starts
  the task and returns its id. Ask for the brief as below.
- **Continuing**, in a new chat, another app, or after Studio restarted. `metamorfiles_get_project`
  says the brand is being made, with its `task` and where each step stands in `creating`. Pass that
  id as `task` to every `metamorfiles_team_update` and `metamorfiles_ask_user`, never start a second
  one, and continue from the first step that isn't chosen.

**Asking for the brief.** Call `metamorfiles_ask_user { brief: { name, what, who, feel, links } }`
with your reading of what the user said: the brand's name, what it is, who it's for, how it should
feel, and the links they gave as full https addresses (`name` and `what` are required). Studio draws
the brief on the board at once and opens the same questions as New brand, filled in with your
reading, for the user to complete, above all the work they like. From the user's own app it returns
at once with the panel link and a question id: write the link in your reply, say the questions are
open there and that they can answer in the chat instead, then keep calling
`metamorfiles_ask_user { task, waitFor: "<id>" }` until they answer. An answer in the chat goes back
as `metamorfiles_ask_user { task, waitFor, answer }`. Either way Studio writes
`brand/process/brief.md`; read it before the direction. Never write the brief yourself: the user's
taste is what the direction starts from. The brief's first line (`# <name>`) is the brand's name
everywhere Studio shows it until DESIGN.md names it: a name is a word or two, never the user's
request, so when they name the brand later, change that line.

Before the first step, tell the user in one line that it takes about half an hour and makes twenty
to thirty images on their image source: in your reply in their own app, or as `say` in a task Studio
started.

## At every step

- **Say who is at work.** Call `metamorfiles_team_update { task, role: "designer", status: "working" }`
  before each part of the work, with the role doing it. Studio writes what the user reads at the
  top, from the step and the files you make, so leave out `line`.
- **Write the step's file** (below). The result says what's wrong with it, or gives the question
  Studio will ask and the options as the user will see them.
- **Ask with `metamorfiles_ask_user { task, step: "logo" }`** (`direction`, `logo` or `imagery`).
  Studio asks the step's own question with the options' titles, the panel offers to bring the step's
  frame into view, and the user chooses there, in the thread or in your chat. From the user's own app
  it returns at once: write the panel link and the options in your reply as Studio lettered them,
  the recommended one first with its reason, then keep calling
  `metamorfiles_ask_user { task, waitFor: "<id>" }`. In Auto the recommended option is taken at once;
  say so in the thread.
- **Studio records the choice** in the step's file, however the user made it, and the next step's
  frame appears. Never write `chosen` yourself.
- **An answer in their own words is the answer.** "A is better but not good enough" means rework A
  and ask again; "the palette of A with the type of B" means write that option and ask again; "C has
  a cup with two handles" means redo C before anything else.
- **From the frame** the answer can also be "Try another logo instead of <title>" or "Redo <title>":
  replace that one option, keep the others as they are, and ask again. "Direction: <title>" means
  the user went back and chose again on an earlier step: Studio has cleared the steps after it, so
  make them again from the new choice.
- **A change is local.** "Warmer", "the other S", "redo the second one": rework that step only, and
  what depends on it. A new palette recolours the logo routes; it never restarts the research.
- **Going back from the chat.** "Back to the logo": write the logo step's file again without its
  `chosen`, and ask again.

## Reviewed before the user sees it

Whoever made something is the worst judge of it, so the reviewer looks at each piece of work before
the user does, and at whatever is made again: a logo tried again, an image redone, a mockup remade,
any change the user asks for in their own words. Run `metamorfiles-review` in the foreground and
wait for its verdict, naming only the frames that are new or changed:

| When | Frames | What it judges |
|---|---|---|
| `logo.md` written, before asking | `process-logo` | every letter; each route's small mark is the very mark its logo shows; the small sizes, reversed and one colour |
| The character sheet written, before the imagery | `process-logo` | eight figures in the grid's order, each part and its colour against the character's sheet, the same proportions in all |
| `imagery.md` written, before asking | `process-imagery` | image-model mistakes; none in another medium; a character's seeds not the same head angle and face |
| Each batch of the library | the imagery folder's frame, by the folder's name (`refs`) | the same, against the anchors |
| The three mockups | each `mockup-<file name without extension>` | the logo against its file, every word, the packaging designed in full, how each object sits and opens, the photograph |
| The finished kit | the whole board | the final check, under Kit |

Report it as the reviewer: `metamorfiles_team_update { task, role: "reviewer", status: "reviewing" }`,
then the same with `status: "done"`; Studio shows the frames being checked as the reviewer renders
them. The reviewer records its verdict in Studio, and the thread shows what it caught. Fix only the **must fixes**,
once, as the role that made the piece, with a method that can fix it (a version that recolouring
makes muddy is drawn again from the logo), and have it reviewed again; if that look still sends one
back, make the failing option again from scratch. Suggestions are taste: weigh them, but never
remake work for one before the user has seen it. The user's choice is the judgement that counts. Nothing reaches the user with a must fix standing: Studio won't ask a step, or
let the brand be handed over, until its frames pass as they are now. Only when an option made
again still fails is the step asked anyway, with
`metamorfiles_ask_user { task, step: "logo", cannot: "<one line>" }`: one plain line on what
couldn't be made, which the user reads beside the question. The brief and the directions aren't
reviewed: they are the user's taste. The reviewer judges the work in each option, never which option is better.

## The steps' files

The brief and every step live in `brand/process/`: `direction.md`, `logo.md` and `imagery.md`, each a
Markdown file with its options in YAML, written with
`metamorfiles_write_file { path: "brand/process/logo.md", content }`. Each `file` is the path the
tool that made it returned, as it returned it.

```md
---
options:
  - id: rising
    title: Rising sun
    line: A half-risen sun beside the name set in a calm serif; quiet and exact.
    recommended: true
    files:
      - { file: brand/process/logo/rising.svg, ground: "#f6f1ea" }
      - { file: brand/process/logo/rising-paper.svg, ground: "#1f1a17" }
      - { file: brand/process/logo/rising-ink.svg, ground: "#ffffff" }
      - { file: brand/process/logo/rising-mark.svg, ground: "#f6f1ea", small: true }
  - id: lumen-u
    title: The open u
    line: The name alone, its u opened like light over a horizon.
    files: [{ file: brand/process/logo/open-u.svg, ground: "#f6f1ea" }]
---

Notes for the record: why each option, what the user said.
```

Each option can carry:
- `files`: up to 16 images or SVGs, each `{ file, caption, ground, small }` with all but `file`
  optional: `caption` (at most 140 characters: a credit, what to take), `ground` (`"#rrggbb"`, the
  colour a logo file is shown on) and, for a logo route's small mark, `small: true`;
- `colors`: up to 10, each `{ name, hex: "#rrggbb", share }` with `share` 0 to 100, in the order and
  proportion they are used;
- `fonts`: up to 4, each `{ family, file, role }`, `file` the one `metamorfiles_add_font` returned (a
  static family has one per weight, such as `brand/fonts/Anton-400.woff2`);
- `sample`: at most 120 characters, the words the fonts are set in, from the brand's own voice.

Up to four options: two or three directions, three logo routes, one per seed on the imagery step.
Each `title` is at most 60 characters, what the user will call it, and each `line` at most 200, one
sentence on why it fits the brief; the board marks the recommended one itself, so the line never
says so. On the direction and logo steps one option is `recommended: true`; the imagery step asks
whether to use the seeds, so none is. Writing the direction step
also returns the contrast of every pair in each palette, so there is nothing to work out by hand.

Save what a step makes in its own folder as you go (`brand/process/logo/`, `brand/process/imagery/`):
its frame shows each file as it arrives, so the user watches the step come together.

## The steps

1. **Direction** (`references/research.md`, `references/look.md`). First the subject: look it up, or
   for a new brand what is real around it (`references/research.md`, "The subject, first"), even when
   the user didn't ask. The brief's facts
   with their sources, touchpoints and category codes go into `brief.md`. Search with `metamorfiles_search_references { query: "bakery" }`
   on the business's plain words, choose the projects worth opening from the covers, and collect
   them with `metamorfiles_collect_references { links: [...] }`, the user's own links first; they
   appear on the brief's frame as they arrive. Group what's good into two or three directions that
   differ in feel. Each option is a whole direction: four to eight references by attribute (logo,
   colour, type, imagery, layout), captioned with the project and what to take; its palette with
   shares; its type pairing, each face added with `metamorfiles_add_font { family: "Fraunces" }`; and
   its `sample`.
2. **Logo** (the `metamorfiles-logo` skill), made from the brief and the chosen direction. Three
   routes: a logo drawn whole by the image model and traced; the name set from real fonts with a
   generated mark, mascot or letter; and the name in type alone. Supporting words are always real
   type. Each route checked with one
   `metamorfiles_check_logo { file, ground: "#f6f1ea", dark: "#1f1a17" }`, which draws it in colour
   on its paper, reversed and in one colour on one sheet; in `logo.md` every file has its `ground`,
   its small mark `small: true`. A mascot is designed with `metamorfiles-character`.
   **Once a logo with a character is chosen,** draw its character sheet (`references/sheet.md` of
   `metamorfiles-character`) before anything else, write it into `logo.md` as `sheet`, and have the
   reviewer check it: every image of the character after that is made from it.
3. **Imagery** (`references/imagery.md`). The mode the brand needs (illustration, photography, a
   character, graphic or 3D), the style block, and four seeds made together, one per option, saved in
   `brand/process/imagery/`. The seeds the user keeps are the anchors.
4. **Kit.** The voice is the copywriter's, always: report as `copywriter` while you write DESIGN.md's
   Voice (the chart in `references/voice-chart.md` of `metamorfiles-brand`, and its lines in the
   brand's own words, `references/copy.md` of `metamorfiles`), then hand back to the designer.
   The chosen direction, logo and imagery become `brand/DESIGN.md` as `metamorfiles-brand`
   describes, with the final logos in `brand/logos/` (step 8 of `metamorfiles-logo`) and every face
   with its role (the logo's own face named for it). A folder in `assets` must exist, and its frame
   appears once it is listed, so work in this order:
   - Bring each kept seed into the library with
     `metamorfiles_import_image { path: "<seed>", name: "knit-close-up", folder: "brand/refs" }`,
     and list the folder with the file names it returned as its anchors:
     `{ folder: refs, kind: imagery, title: Imagery, anchors: [...] }`. A character's folder is
     listed the same way, the character sheet brought in first and listed first in its `anchors`
     (`references/sheet.md` of `metamorfiles-character`).
   - Grow the library from the anchors into `brand/refs/` (`references/imagery.md`).
   - Make the mockups (`references/mockups.md`) on the touchpoints the brief names, without asking
     first, and list their folder once the first is saved:
     `{ folder: mockups, kind: in-use, title: In use }`.

   Write `brand/imagery-guide.md`, the brand's image contract, with its four sections (`references/imagery.md`,
   In the kit): style, the character sheet with each part's colour, colour roles, writing a scene. The brand board then holds it all after the
   steps: the guide, the images and each mockup as its own frame. Get the final check (`metamorfiles-review`,
   in the foreground, waiting for its verdict), fix what it marks, and hand over as
   `references/presenting.md` of `metamorfiles-brand` says. Make no templates or pages: the kit is
   the brand.

## Ending

Finish the kit before you hand it over. An image that fails is retried by Studio; if its source
keeps failing, wait a minute and make it again, and if it still fails, ask the user
(`metamorfiles_ask_user { task, question, options: [{ label: "Wait and try again", recommended: true }, { label: "Another image model" }] }`)
rather than handing over a kit with parts missing. An image that doesn't hold the style is made
again or taken out, never left for the user to find or listed for them to remove.

The last call is `metamorfiles_team_update { task, role: "designer", finished: true, summary }`, with
your handover as `summary`; when the
mockups carry proposed product names, it names them as proposals for the user to confirm, one of the
things that need them. The run ends there: Studio tells the user the brand is ready and offers to make the first posts, so the
handover asks nothing. The user downloads the kit (the logo for each use, the fonts, the colours and
a page that says what's what) from the brand board in the panel.

## Rules

- **Facts are never created**: no claims, prices, awards, history, addresses or customers beyond
  what the user gave. What a template will need goes to Known gaps.
- **Product names can be proposed, never presented as facts.** When the brief names no products,
  the copywriter proposes three or four names for the range in the brand's voice, for the mockups'
  packaging, and writes them in the brief's research as `**Product names (proposed):** …`. The
  handover names them as proposals for the user to confirm. Weights, prices, ingredients and claims
  are never proposed.
- **References are for study.** Never copy a reference's mark, layout or artwork, and never put one
  in the kit. An image model sees them only as style references for a logo's first drawings, told
  never to copy their letters, marks or layout (`references/drawn.md` of `metamorfiles-logo`).
- **The web is used lightly.** Every page you open comes from the project's daily budget, because it
  opens from the user's own address and busy sites block it. One search and a few projects is enough;
  links the user pastes cost the same and are often better.
- **Logos come from Studio's tools.** A name is set with `metamorfiles_make_wordmark`, or drawn in a
  logo drawn whole and read letter by letter; marks and characters are drawn and traced;
  every supporting word is set from a font (`metamorfiles-logo`). Words outside the logo are set in
  the brand's fonts; mockups carry the logo file exactly, with the reviewer comparing it (`references/mockups.md`).
