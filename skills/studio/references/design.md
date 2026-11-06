# Design

The brand kit sets the materials; you decide how they're used in this piece: a social frame, a print, a pack's face, a sticker, a sign. A social image gets about a second in a feed and a sticker a glance across a shop, so every choice serves what the reader takes in during that moment. The contract (`references/contract.md`) says what the HTML must be; this says how to make any designed piece good, whether Studio sets it in code or the image model draws it whole.

## Contents
- Before you touch anything
- Where a change goes
- What a render is for
- Taste
- The composition
- A carousel
- Done

## Before you touch anything

1. Know what already works and what's wrong: the brief, or the review's problems for your frames.
2. Name the frame's **reading path** in one line: what the eye hits first, what comes next, and how full the frame should feel ("product first, then the headline on the paper band, price last; lots of air").
3. Read `brand/DESIGN.md` (type roles, colors and their on- colors, components, spacing) and the item's HTML, CSS and `edits.css`. `metamorfiles_inspect_frame { item: "pages/<id>", format: "instagram-story" }` lists each element of a frame with its id or path and its box.

## Where a change goes

- **Every variant and format**: the template's (or page's) `index.html` and its CSS.
- **One format**: a rule scoped to that format in the design's CSS (`html[data-format="instagram-story"] …`).
- **One frame's element** (position, size, one style, hidden): `metamorfiles_edit { item: "pages/<id>", changes: [{ do: "place", element: "e1", x: 80, y: 120, variant: "<id>", format: "instagram-story" }] }`, with `style`, `hide` and `show` the same way; Studio writes it to `edits.css`.
- **One variant's content**: `metamorfiles_edit { item: "pages/<id>", changes: [{ do: "value", variable: "headline", value: "…", variant: "<id>" }] }`, which is the copywriter's or image maker's unless the value is visual (a color, an anchor, a size).

Fix at the widest level the problem really has. A headline that overflows in every story frame is one story-format rule.

## What a render is for

Render the frames you change (as `references/contract.md` says) for Studio's check findings and for the facts your next decision needs: where a picture's subject sits, for the crop and the type. Never to judge the look: the reviewer judges it (the `review` skill), and once you hand the piece over it changes as that skill's Run it, step 4, says. The judgment you bring is in the plan, before anything is made ("The composition").

Decide in this order, since a later choice can't rescue an earlier one: the idea, the hierarchy, the composition, the type, the imagery, the colour, the details. Headlines use `text-wrap: balance`. If a line needs a size no type role has, the layout is asking for too much.

## Taste

- **One hero per frame.** Decide the single thing that has to register in that second (the product, the price, a face, the offer) and make it unmistakably the strongest element; everything else supports it. Plan without the weakest element: what the frame doesn't need, it leaves out. When leaving something out leaves a gap, enlarge what's left or give the room to a picture or a field of colour.
- **Improve what's there first.** Tighter alignment, a better crop or a clearer size step usually does more than a new shape, badge or line.
- **Each format is composed for its size.** A landscape frame isn't a shrunken portrait: put the image beside the copy rather than above it, and let a story use its height.
- **Only this brand.** Build from what the brand has and a competitor doesn't: its photography, its colors in their stated roles, its type, its voice. A decorative device the brand kit doesn't use (a badge, a card, a gradient, an icon, numbering, an emoji) needs a reason in the content. The brand kit and the brief always win over these preferences.

## The composition

Every piece is decided as an idea, then as a picture, in your notes, before any image or CSS exists:
a frame, a print, a pack's face, a sticker or a sign alike, whether Studio sets it in code or the
image model draws it. Imagine it from what the piece is for: its goal (what the viewer should feel,
know or do), its format and how it's met (a feed post judged in a second, a story seen full height, a
carousel swiped on purpose, a print held in the hand, a sticker read across a shop), and the story it
tells (one beat, or a sequence with a cover, a build and an end). Then build it with the tools.

**The subject.** Ideas come from what only this business has: its name and what it means, its place,
what it makes and from what, its rituals and its people, the printed things of its world (a tag, a
receipt, a crate's stamp). Note the few that fit this piece. The category's usual symbol is what
every competitor already has.

**The best of its kind.** Before deciding a piece, see how the best designers made one: search
Studio's index for that kind of piece in that kind of business,
`metamorfiles_search_references { query: "skincare poster" }`, and look at the covers (a search
spends none of the day's pages), or at the references the brand's research already collected when
they show this kind of piece. Name what the strongest do with the space (how they compose, not what
they show), and take one way of composing on whole: blended with your usual layout, it becomes the
usual layout. They set the standard to reach; their subjects and marks stay theirs.

**The idea.** One visual idea per piece, from what this piece says and the subject, named in a phrase:
"the cream at work while the clock sleeps" for a post about the night cream. Say it as what of the subject becomes
what in the piece ("the morning's two minutes become the poster's clock face"): a picture only this
business could make, since a layout name (a statement, a figure, a split) draws the same card with
new words. Ideas come in kinds, and three
ideas of one kind are one idea:
- a metaphor: the subject stands for the point (a maze for a confusing process);
- an exaggeration: one thing at an impossible scale or amount;
- the demonstration: the thing doing what the copy says, literally;
- a visual pun: a shape that reads two ways;
- before and after, or a contrast set side by side;
- type as the image: the words are the picture, set big and placed;
- the object itself, alone and large, when it is the news;
- the empty frame: one small subject in a lot of space, when the point is calm or absence.

**Choose the idea yourself.** Weigh two or three ideas of different kinds in your notes and keep the
strongest for this frame, this brand and what it says; the brand's direction and the brief choose
among all the kinds. The user sees only finished work. A carousel's slides: `references/carousels.md`.

**Full.** The idea fills the piece: its hero at a scale that takes the space, type large enough to
be part of the picture, colour as whole fields, the brand's real imagery. One idea holds every part
(the logo, a picture, the name) together, since correct parts stacked in bands read as a template.

**Ask it of the plan, before anything is made.** At a glance, the way the piece is met (a phone in a
feed, a print across a room), what does the reader take in? Squinted until the words are grey bars,
does the hierarchy still hold? With the logo covered, is it still this brand's? A plan that fails one
is changed now, while it is words.

**The composition line is a plan.** Each frame's line (its variant's `composition`) says the idea,
the reading order (what reads first, second and third) and the room the type needs, in words, since
a layout measured out part by part is copied as given and reads as parts stacked. The image is made
for its slot from it: its prompt carries the idea, what reads first and the room the type needs
(`references/images.md`, "The prompt"). When the image model draws the whole piece itself (a flat
print, a pack's face drawn in its photograph), its prompt adds the brand's materials and leaves the
placing to the model. When the piece that's kept differs from its
plan, the line follows the piece.

- **Three modes, kept apart.** A character or product is a **cutout** (a transparent image),
  placed and scaled by the layout: it can run off the frame, sit huge, or overlap the headline on
  purpose. A **scene** made for its frame keeps the type's region empty in the picture itself (plain
  ground, a sky, a wall), named in its Scene; a band, a plate or a scrim, when the type needs one, is
  CSS. A **type-led** frame has no image and says why. Shapes, fields and bands are CSS, so changing
  one stays an edit: a shape in the pixels makes every change a new image.
- **A crop is a choice.** The frame's edge cuts a subject where the composition names it, and keeps
  faces, hands and a product's label whole.
- **Type can be composition.** A numeral cropped by the frame, letters laid over each other, a word
  bled off the edge: mark that element `aria-hidden="true"` and say its message in the variant's `alt`.
  Studio's checks then leave it to the design. Text the reader needs (the headline, a name, a date, the
  call to action) stays unmarked, whole and readable.
- **Other parties are shown by their real marks**, set in the layout beside the image, never drawn in
  it: `metamorfiles_find_mark { name }` (`references/images.md`, "Other parties' marks and images").

## A carousel

The slides' shared system, the cover, the end and the seams: `references/carousels.md`.

## Done

Every frame you changed renders with no check error and every **must fix** for your frames is solved. Then the review your skill asks for.
