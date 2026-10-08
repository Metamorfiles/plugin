# The brand in use

Read this for the mockups step, once the kit's DESIGN.md is written. Mockups show the new brand made
real on this business's own objects, so the user can judge the whole system at a glance. They are
presentation, never the brand's imagery: Studio keeps them in their own folder and refuses them in
templates.

## Which three

Three shots, from the brief's touchpoints (`research.md`), each a different part of the system and a
different kind of idea:

- **The hero:** the most public object, designed in full (the pack, the bottle, the tin, the box).
- **The range:** the hero's family together, a colour per variant.
- **The everyday:** a small, frequent touchpoint that shows another part of the system: a sign, a
  sticker, a cup, a card, a screen.

Each shot's idea comes from the brand's own world, the moments and places of this business, not from
a stock setup: for skincare made for short mornings, the jar on a steamed-up bathroom shelf at seven
with one hand reaching in; for a bakery opening at six, the bag on a bike's handlebar in the blue
light before dawn. A
pattern of the range is broken, when it is, by another object of the range for a reason the shot
says (a sachet among the bottles, a lid among the tins), never by the same unit turned. Never a stock
set (a business card, a tote and a phone), and never an object this business doesn't use.

## The step

Make them with `metamorfiles-mockup`, saved with `folder: "brand/process/mockups"`, and write
`brand/process/mockups.md`, one option per shot: its `title`, its `composition` (the idea and the
picture in one line, which the board shows under it) and its `files`, the takes newest first. A fix
or a new take goes first in its option's `files` and the earlier one stays after it: the user can
swap them on the board. Get the review of the `process-mockups` frame, then ask with
`metamorfiles_ask_user { task, step: "mockups" }`. Studio copies each kept shot's current take into
`brand/mockups/`, named for its option; then list the folder in DESIGN.md `assets` as
`{ folder: mockups, kind: in-use, title: In use }`.
