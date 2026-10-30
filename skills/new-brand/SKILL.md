---
name: new-brand
description: Creates a new brand from nothing in Metamorfiles Studio: three choices the user makes on the brand board (direction, logo, imagery), then the kit, its mockups last. Use when the user asks for a new brand or identity, says there is nothing to translate, or the project holds a brief in brand/process/brief.md (Studio's "New brand"), and for "make me a brand", "I'm starting a bakery and need everything", "we need a logo" for a business with no logo, site or files yet, or a business name alone. Not for an existing company, website, logo or guidelines, which are translated (the brand skill).
license: MIT
---

# Create a brand

Only when the user asks for a new brand, or says there is nothing to translate. The name of a company
that exists, a website, a logo, files or images all mean Translate: follow the `brand` skill, and
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
- [ ] 1. Direction: three paths in the brief, references collected for each, directions written, asked, chosen
- [ ] 2. Logo: three routes with the `logo` skill (a character with the `character` skill), reviewed, asked, chosen
- [ ] 3. Imagery: mode, style block, four seeds, reviewed, asked, anchors kept
- [ ] Kit: DESIGN.md (its prose by the copywriter), final logos, fonts, library (each batch reviewed), imagery guide
- [ ] Mockups: three shots of the brand on its own objects, last, reviewed
- [ ] Final check: every planned change made first, then the `review` skill of the `handover` queue, fixes made
- [ ] Handover: finished: true with the summary
```

| Step | You prepare | Speaks as | Read | The user |
|---|---|---|---|---|
| 1. Direction | two or three directions, each its references, palette in proportion and type pairing, set in the brand's words | `designer` | `references/research.md`, `references/look.md`, `references/fonts.md` | chooses one, or says what to change or mix |
| 2. Logo | three routes or more from the chosen direction: drawn whole by AI, real fonts with a generated part, type alone; each in colour and in one colour | `designer` | the `logo` skill; the `character` skill for a mascot | chooses one, or asks for another |
| 3. Imagery | the style in words and four seed images | `imager` | `references/imagery.md` | uses them, or has single ones redone |
| Kit | DESIGN.md and the brand board: the guideline pages and the images | `designer`, `copywriter` for the prose | `brand`, `copywriting` | asks for any change they want |
| Mockups, last | three shots of the brand on its own objects, on their own board | `designer`, `imager` for the photographs | `references/mockups.md`, the `mockup` skill | redoes one, or picks an earlier take back |

`references/principles.md` holds what separates studio work from generated work, with tests for each
step; read it before the first step and use it to make each step's options stronger. Its
`library/` describes published identities by kind of business, for study.

This skill is the order of work for a new brand, in place of the team skill's: there is no first
review (a new brand is made, not reviewed), the reviewer checks each piece once it's made (below),
it asks once per step rather than once per role, and its handover is the one
`references/presenting.md` of the `brand` skill describes.

Studio draws everything on one item, the brand board: the brief first, then each step as its own
frame, then the kit's frames. A step's frame shows its slots while you make it, its options once you
write its file, and stays as the record after the choice. You never lay any of it out yourself.
Render a frame by its name, as `metamorfiles_get_project` lists them in `board.frames`: `process-brief`,
`process-direction`, `process-logo` (its last pages hold the mascot and the small marks, which live in
`logo.md`), `process-imagery`, then the kit's pages; a page that runs on is `<name>-2`.

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

**Asking for the brief:**

1. Call `metamorfiles_ask_user { brief: { name, what, who, feel, own, links } }` with your reading
   of what the user said: the brand's name, what it is, who it's for, how it should feel, where it is
   today (its site, profiles or handles, as they gave them) and the work they love as full https
   links (`name` and `what` are required). Studio draws the brief on the board at once and opens the
   same questions as New brand, filled in with your reading, for the user to complete, above all the
   work they like.
2. When it says Studio's team makes the brand once the brief is answered, write what it asks and end
   your turn: the brand is made in Studio, and when you're told so later, leave it there.
3. Otherwise (from the user's own app it returns at once with the panel link and a question id),
   write the link in your reply, say the questions are open there and that they can answer in the
   chat instead, and keep waiting as the `team` skill says ("Choices that belong to the user").
4. An answer in the chat goes back as `metamorfiles_ask_user { task, waitFor, answer }`.
5. Studio writes `brand/process/brief.md`: read it before the direction.

Never write the brief yourself: the user's taste is what the direction starts from. The brief's first line (`# <name>`) is the brand's name
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
- **Say what's on the board.** Once a step's options are written, the role that made them says in
  its `done` update what each one is, in the board's order, and why the recommended one leads:
  exactly the options offered, never one you dropped; when they change before you ask (one dropped
  or redrawn after the review), say them again. What you said you'd make before the work never
  stands in for it. Studio asks only what the thread last said.
- **Ask with `metamorfiles_ask_user { task, step: "logo" }`** (`direction`, `logo` or `imagery`).
  Studio asks the step's own question with the options' titles, the panel offers to bring the step's
  frame into view, and the user chooses there, in the thread or in your chat. From the user's own app
  it returns at once: write the panel link and the options in your reply as Studio lettered them,
  the recommended one first with its reason, then wait as the `team` skill says ("Choices that
  belong to the user").
- **Studio records the choice** in the step's file, however the user made it, and the next step's
  frame appears. Never write `chosen` yourself.
- **An answer in their own words is the answer.** "A is better but not good enough" means rework A
  and ask again; "the palette of A with the type of B" means write that option and ask again; "C has
  a cup with two handles" means redo C before anything else.
- **From the frame** the answer can also be "Try another logo instead of <title>" or "Redo <title>":
  replace that one option, keep the others as they are, and ask again. "Edit <title> (<file>),
  keeping the earlier take: <what to change>" is an edit of that image as image 1
  (`metamorfiles_generate_image { prompt, references: ["<file>"], edit: true, replaces: "<file>" }`), only what
  the user named changing; the others stay, and ask again. "Direction: <title>" means
  the user went back and chose again on an earlier step: Studio has cleared the steps after it, so
  make them again from the new choice.
- **A verdict on quality is a rethink.** "Redo all, the quality is low", "none of these work": write
  what they rejected again from its brief (its idea; a character's attitude, face and pose; the
  lettering's idea), keep what they praised, and say in a line what changed. A new rendering of the
  same ideas doesn't answer it.
- **Fonts are Studio's to tidy.** It deletes the fonts a brand doesn't use: a direction's when another
  is chosen, every face the kit doesn't list when the brand is handed over. Never remove a font yourself.
- **Back to a version they saw is a swap.** "Change it back", "the earlier one was better": put that
  version back, `metamorfiles_use_take { step: "logo", option: "rising", take: 1 }` (a route's
  `takes` in `logo.md`, a seed's earlier files), and ask again. Never make it again.
- **A change is local.** "Warmer", "the other S", "redo the second one": rework that step only, and
  what depends on it. A new palette recolours the logo routes; it never restarts the research.
- **Going back from the chat.** "Back to the logo": write the logo step's file again without its
  `chosen`, and ask again.

## Reviewed before the user sees it

Whoever made something is the worst judge of it, and the user should never be the one to find its
mistakes, so the reviewer looks at each piece of work before the user does, and at whatever is made again: a logo tried again, an image redone, a mockup remade,
any change the user asks for in their own words. Finish every change you plan to a piece (its
wording, a size, a crop) before it goes to the reviewer: a change after a pass sends that piece back.
Studio keeps what waits, piece by piece; run the `review` skill on the queue and wait for its verdict:

| When | Queue |
|---|---|
| `logo.md` written, before asking | `logo` |
| The mascots, and in the logo's own case their sheet, before asking | `character` |
| The small marks, before asking | `mark` |
| `imagery.md` written, before asking | `imagery` |
| The library and the mockups made, then the kit written | `handover` |

Report it as the reviewer: `metamorfiles_team_update { task, role: "reviewer", status: "reviewing" }`,
then the same with `status: "done"` and no `say`. The reviewer records its verdict in Studio, and
the thread shows what it caught. Fix as step 4 of the `review` skill's Run it says, as the role that
made the piece, with a method that can fix it (a recolour that turns muddy is redrawn from the logo).
A piece looked at twice without passing is asked as it is, with
`metamorfiles_ask_user { task, step: "logo", cannot: "<one line>" }`. Nothing reaches the user
with a must fix standing: Studio won't ask a step, or hand the brand over, while a piece waits. The
brief and the directions aren't reviewed: they are the user's taste. The reviewer judges the work
in each option, never which option is better.

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
  colour a logo file is shown on) and, for a logo route's mark, `small: true`;
- `colors`: up to 10, each `{ name, hex: "#rrggbb", share }` with `share` 0 to 100, in the order and
  proportion they are used;
- `fonts`: up to 4, each `{ family, file, role }`, `file` the one `metamorfiles_add_font` returned;
- `sample`: at most 120 characters, the words the fonts are set in, from the brand's own voice.

Up to six options: two or three directions; every logo route and every other candidate as good, at
least three; one per seed on the imagery step.
Each `title` is at most 60 characters, what the user will call it, and each `line` at most 200, one
sentence on why it fits the brief; the board marks the recommended one itself, so the line never
says so. On the direction and logo steps one option is `recommended: true`; the imagery step asks
whether to use the seeds, so none is. Writing the direction step
also returns the contrast of every pair in each palette, so there is nothing to work out by hand.

Save what a step makes in its own folder as you go (`brand/process/logo/`, `brand/process/imagery/`):
its frame shows each file as it arrives, so the user watches the step come together.

## The steps

1. **Direction:** brief facts, touchpoints, codes and three paths into `brief.md`; references per
   path; one option per path that holds up (`references/research.md`, then `references/look.md`).
2. **Logo** (the `logo` skill, steps 1-7, written into `logo.md`), then its step 8 once one is chosen.
   When `logo.md` has `mascot: true` at the top, the mascot comes first: the `character` skill, "In a new brand".
3. **Imagery** (`references/imagery.md`). The mode the brand needs (illustration, photography, a
   character, graphic or 3D), the style block, and four seeds made together, one per option, saved in
   `brand/process/imagery/`. The seeds the user keeps are the anchors. Start the seeds once the small
   mark is answered. The chosen logo's cleanup (step 8 of the `logo` skill) runs in the
   background from the logo's answer on, and its final logo files wait for the kit.
4. **Kit.** The words are the copywriter's, always: report as `copywriter` while you write
   DESIGN.md's prose (Overview, Colors, Typography, Logo, Imagery, Voice and Messaging) with the
   `copywriting` skill, from the brief's facts and the chosen steps, then hand back to the designer.
   The chosen direction, logo and imagery become `brand/DESIGN.md` as the `brand` skill
   describes, with the final logos in `brand/logos/` (step 8 of the `logo` skill) and every face
   with its role (the logo's own face named for it). A folder in `assets` must exist, and its frame
   appears once it is listed, so work in this order:
   - Bring each kept seed into the library with
     `metamorfiles_import_image { path: "<seed>", name: "serum-close-up", folder: "brand/refs" }`,
     and list the folder with the file names it returned as its anchors:
     `{ folder: refs, kind: imagery, title: Imagery, anchors: [...] }`. A character's folder is
     listed the same way, the character sheet brought in first and listed first in its `anchors`
     (`references/sheet.md` of the `character` skill).
   - Grow the library from the anchors into `brand/refs/` (`references/imagery.md`).

   Write `brand/imagery-guide.md`, the brand's image contract (`references/imagery.md`, "In the kit").
   - Last, the mockups (`references/mockups.md`): three shots of the brand on its own objects, on
     their own board, never asked.

   The brand board then holds it all after the steps, as the brand's guideline pages: the logo,
   colour, type, voice, the images and the mockups. Get the final check (the `review` skill of the `handover` queue, waiting for its verdict),
   fix what it marks, and hand over as `references/presenting.md` of the `brand` skill says. Make
   no templates or pages: the kit is the brand.

## Ending

Finish the kit before you hand it over. An image that fails is retried by Studio; if its source
keeps failing, wait a minute and make it again, and if it still fails, ask the user
(`metamorfiles_ask_user { task, question, options: [{ label: "Wait and try again", recommended: true }, { label: "Another image model" }] }`)
rather than handing over a kit with parts missing. An image that doesn't hold the style is made
again or taken out, never left for the user to find or listed for them to remove.

The last call is `metamorfiles_team_update { task, role: "designer", finished: true, summary }`, with
your handover as `summary`. The run ends there: Studio tells the user the brand is ready and offers
to make the first posts, so the handover asks nothing. The user downloads the kit from the brand
board in the panel, or any app writes it into `kit/` with `metamorfiles_export_kit {}` (what it holds:
`references/presenting.md` of the `brand` skill).

## Rules

- **Facts are never created**: no claims, prices, awards, history, addresses or customers beyond
  what the user gave. What a template will need goes to Known gaps.
- With no products in the brief, the copywriter proposes names (the `copywriting` skill, Names); the
  handover names them as proposals.
- **References are for study.** Never copy a reference's mark, layout or artwork, and never put one
  in the kit. An image model sees them only as style references for a logo's first drawings, told
  never to copy their letters, marks or layout (`references/drawn.md` of the `logo` skill).
- **Logos are made only with the `logo` skill**; words outside the logo are set in the brand's fonts,
  and mockups keep the logo's identity, checked as the `review` skill's Mockup checklist says.
