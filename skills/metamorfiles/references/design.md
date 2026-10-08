# Design

Read this whenever you lay out a frame: a new template, a page's formats, a repurposed set, or the designer's part of a team task. It covers layout, type, color, spacing and crops. The brand kit sets the materials; you decide how they're used in this frame. A social image gets about a second in a feed, so every choice serves what the reader takes in during that second. The contract (`SKILL.md`) says what the HTML must be; this says how to make it good.

## Before you touch anything

1. Know what already works and what's wrong: the brief, or the review's problems for your frames.
2. Name the frame's **reading path** in one line: what the eye hits first, what comes next, and how full the frame should feel ("product first, then the headline on the paper band, price last; lots of air").
3. Read `brand/DESIGN.md` (type roles, colors and their on- colors, components, spacing) and the item's HTML, CSS and `edits.css`.

## Where a change goes

- **Every variant and format**: the template's (or page's) `index.html` and its CSS.
- **One format**: a rule scoped to that format in the design's CSS (`html[data-format="instagram-story"] …`).
- **One frame's element** (position, size, one style): `edits.css`, one line per element and frame, keeping every other line and every `data-mf-id`.
- **One variant's content**: that variant's values in `page.json`, which is the copywriter's or image maker's unless the value is visual (a color, an anchor, a size).

Fix at the widest level the problem really has. A headline that overflows in every story frame is a story-format rule, not four frame edits.

## Judge with the render, not the code

After each change, render the frames you changed and look at them the way a reader would:

- **At a glance**: shrink the image in your mind to a phone in a feed. The first thing you notice should be the thing the reading path starts with, and the rest should follow in order.
- **Grouping**: a price belongs to its product, a name to its title. Distance says what belongs together, so the space inside a group is clearly smaller than the space between groups.
- **Spacing**: a few steps from the brand's spacing scale, used on purpose. One identical gap everywhere reads as unplanned.
- **Type**: sizes and weights from DESIGN.md's type roles, with a visible step between levels. If a line needs a size no role has, the layout is asking for too much.
- **The hardest variant**: check the one with the longest copy and the busiest image. A layout that only works with the default copy isn't done.
- **Edges**: elements share alignment lines and the margins match. The safe margin and what each platform covers are the contract's rules (Layout rules in `SKILL.md`), and the checks enforce both.
- **Text**: headlines use `text-wrap: balance`, and no text touches an edge or runs into the logo.
- **Photos**: `object-fit: cover` with an `object-position` chosen for this subject, checked in every format that shows it.

## Taste

- **One hero per frame.** Decide the single thing that has to register in that second (the product, the price, a face, the offer) and make it unmistakably the strongest element; everything else supports it. Then take away the weakest element and look again: if the frame reads better, leave it out.
- **Improve what's there first.** Tighter alignment, a better crop or a clearer size step usually does more than a new shape, badge or line.
- **Each format is composed for its size.** A landscape frame isn't a shrunken portrait: put the image beside the copy rather than above it, and let a story use its height.
- **Only this brand.** Build from what the brand has and a competitor doesn't: its photography, its colors in their stated roles, its type, its voice. A decorative device the brand kit doesn't use (a badge, a card, a gradient, an icon, numbering, an emoji) needs a reason in the content, not just empty space to fill. The brand kit and the brief always win over these preferences.

## The composition

Every frame is decided as an idea, then as a picture, before any image or CSS exists.

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

**What composition does**, so you can choose by the effect you need:
- one focal point, the strongest by size, contrast or isolation; everything else quieter;
- contrast of scale and weight makes the order of reading; even sizes make none;
- tension: a crop by the frame's edge, a diagonal, a subject entering the frame, against the calm of a
  centred, framed subject;
- empty space is a shape, placed where the eye should rest or the words should go;
- a gaze, a gesture or a line leads the eye, so point it at the words;
- symmetry reads calm and formal, asymmetry reads alive;
- in a sequence, rhythm: the same grid and type roles on every frame, and what is big, the crop and
  figure and ground changing with what each frame does.
The brand's direction and the brief choose among them; none is a default.

**Three comps.** For a single post or a carousel's cover, build three comps, each a different kind of
idea, as one page from its own design with three variants (`comp-a`, `comp-b`, `comp-c`), each laid
out by its own rules (`html[data-variant="comp-b"] …`), its type set and every image an empty
placeholder of its size and place, and each variant's `composition` line saying the idea and the
picture ("Idea: the parcel too big to carry. Frame: Dew hugging a parcel twice its size, cut by the
right edge; the headline across the top third of plain paper"). Render them and judge them side by side
at phone size. In Chat, ask which one with `metamorfiles_ask_user`; in Auto, choose and say why in one
line. The body slides of a carousel follow the chosen comp's system (`references/carousels.md`).

**The composition decides the image.** The image is made for its slot, and its prompt's Scene is the
composition line's picture, word for word: where the subject is, its scale, its crop, which way it
faces and what stays empty (`references/images.md`, "The prompt"). A picture picked from `brand/refs/`
because it's there is a stock photo of your own brand.

- **Three modes that never collide.** A character or product is a **cutout** (a transparent image),
  placed and scaled by the layout: it can run off the frame, sit huge, or overlap the headline on
  purpose. A **scene** made for its frame keeps the type's region empty in the picture itself (plain
  ground, a sky, a wall), named in its Scene; a band, a plate or a scrim, when the type needs one, is
  CSS. A **type-led** frame has no image and says why. Shapes, fields and bands are CSS, never painted
  into the image: a shape in the pixels makes every change a new image.
- **A crop is a choice.** A subject cut by the frame's edge is fine when the composition names it; a
  cut through a face, a hand or a product's label never is.
- **Other parties are shown by their real marks**, set in the layout beside the image, never drawn in
  it: `metamorfiles_find_mark { name }` (`references/images.md`, "Other parties' marks and images").

## A carousel

- **One system, read as a swipe.** Every slide keeps the same margins, grid and type roles, so the eye finds the text in the same place each time. Judge the slides side by side in the panel, as a reader swipes them, not one at a time.
- **The cover is the loud one.** It has to stop the scroll on its own in the feed; body slides are quieter and carry one idea each; the end slide carries the action and the logo.
- **Across a seam**, only the spanning layer (`data-span`) crosses: an image or a shape that continues into the next slide invites the swipe. Text never crosses a seam, since each slide is cut there.

## Done

Every frame you changed renders with no check error, every **must fix** for your frames is solved, and what worked still works. Then the review your workflow asks for.
