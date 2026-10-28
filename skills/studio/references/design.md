# Design

The brand kit sets the materials; you decide how they're used in this frame. A social image gets about a second in a feed, so every choice serves what the reader takes in during that second. The contract (`references/contract.md`) says what the HTML must be; this says how to make it good.

## Contents
- Before you touch anything
- Where a change goes
- Judge with the render, not the code
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

Fix at the widest level the problem really has. A headline that overflows in every story frame is a story-format rule, not four frame edits.

## Judge with the render, not the code

After each change, render the frames you changed and look at them the way a reader would:

- **At a glance**: shrink the image in your mind to a phone in a feed. The first thing you notice should be the thing the reading path starts with, and the rest should follow in order.
- **Type**: sizes and weights from DESIGN.md's type roles, with a visible step between levels. If a line needs a size no role has, the layout is asking for too much.
- **Edges**: elements share alignment lines and the margins match. The safe margin and what each platform covers are the contract's rules (`references/contract.md`, "Layout rules"), and the checks enforce both.
- **Text**: headlines use `text-wrap: balance`, and no text touches an edge or runs into the logo.
- **Photos**: an `object-position` chosen for this subject, checked in every format that shows it.

## Taste

- **One hero per frame.** Decide the single thing that has to register in that second (the product, the price, a face, the offer) and make it unmistakably the strongest element; everything else supports it. Then take away the weakest element and look again: if the frame reads better, leave it out.
- **Improve what's there first.** Tighter alignment, a better crop or a clearer size step usually does more than a new shape, badge or line.
- **Each format is composed for its size.** A landscape frame isn't a shrunken portrait: put the image beside the copy rather than above it, and let a story use its height.
- **Only this brand.** Build from what the brand has and a competitor doesn't: its photography, its colors in their stated roles, its type, its voice. A decorative device the brand kit doesn't use (a badge, a card, a gradient, an icon, numbering, an emoji) needs a reason in the content, not just empty space to fill. The brand kit and the brief always win over these preferences.

## The composition

Every frame is decided as an idea, then as a picture, in your notes, before any image or CSS exists.
Imagine it from what the piece is for: its goal (what the viewer should feel, know or do), its format
and how it's met (a feed post judged in a second, a story seen full height, a carousel swiped on
purpose, a print held in the hand), and the story it tells (one beat, or a sequence with a cover, a
build and an end). Then build it with the tools.

**The idea.** One visual idea per frame, from what this frame says and the brand's own world (its
objects, place, name, people, character), named in a phrase: "the parcel too big to carry" for a post
about shipping costs. A layout name (a statement, a figure, a split) is not an idea: it draws the same
card with new words. Ideas come in kinds, and three ideas of one kind are one idea:
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
among the kinds, and none is a default. The user sees finished work, never a wireframe or a choice
between empty layouts; a note from them about the look is a rethink of the idea. A carousel's slides:
`references/carousels.md`.

**The composition decides the image.** The image is made for its slot, and its prompt's Scene is the
composition line's picture, word for word: where the subject is, its scale, its crop, which way it
faces and what stays empty (`references/images.md`, "The prompt").

- **Three modes that never collide.** A character or product is a **cutout** (a transparent image),
  placed and scaled by the layout: it can run off the frame, sit huge, or overlap the headline on
  purpose. A **scene** made for its frame keeps the type's region empty in the picture itself (plain
  ground, a sky, a wall), named in its Scene; a band, a plate or a scrim, when the type needs one, is
  CSS. A **type-led** frame has no image and says why. Shapes, fields and bands are CSS, never painted
  into the image: a shape in the pixels makes every change a new image.
- **A crop is a choice.** A subject cut by the frame's edge is fine when the composition names it; a
  cut through a face, a hand or a product's label never is.
- **Type can be composition.** A numeral cropped by the frame, letters laid over each other, a word
  bled off the edge: mark that element `aria-hidden="true"` and say its message in the variant's `alt`.
  Studio's checks then leave it to the design. Text the reader needs (the headline, a name, a date, the
  call to action) is never marked: it stays whole and readable.
- **Other parties are shown by their real marks**, set in the layout beside the image, never drawn in
  it: `metamorfiles_find_mark { name }` (`references/images.md`, "Other parties' marks and images").

## A carousel

The slides' shared system, the cover, the end and the seams: `references/carousels.md`.

## Done

Every frame you changed renders with no check error, every **must fix** for your frames is solved, and what worked still works. Then the review your skill asks for.
