# Carousels

For the copywriter and the designer alike: the plan, the words and the design are one piece. A carousel is a short sequence someone swipes on purpose, so it earns each
swipe, gives something on every slide and ends with a reason to keep it.

## Contents
- Plan it first
- Formats
- The words
- The design
- Strong, and weak

## Plan it first

Most weak carousels fail in the outline, before any design. Before anything is made, write the plan in your
notes, one line per slide: what the slide gives the reader, its pattern (below), its idea and its
picture (`design.md`, "The composition") and its image ("new:" with what it shows and its shape, or a
library file only when it already is that picture: "Compose it, then make it" in `images.md`);
and any other party's mark or photo it shows, found with `metamorfiles_find_mark { name }` or
imported with its credit ("Other parties' marks and images" in `images.md`).
Read it top to bottom: every slide earns its place, the order builds, and no two neighbours share
figure and ground unless they're a pair on purpose. Then make the images for the plan's pictures and
build the page with them (each slide's composition line in its variant). A template is made only when
the user wants a series to repeat, and an existing one is reused only when its layouts already serve
this plan, and the plan says so.

A slide that needs a fact only the user has follows "Grounding" in `references/copy.md` of the `copywriting` skill.

- **Length:** what the idea needs, and one idea per carousel.
- **Cover, then a promise:** the cover stops the scroll; slide 2 says exactly what the reader gets
  by the end, so they keep going.
- **The end** completes the argument and asks for the one action that fits it. A logo alone is not
  an ending.

## Formats

Pick the one the idea is, and say it in the plan:
- **List:** a number of tips, tools, mistakes or lessons, one per slide. The cover names the number.
- **Framework:** steps of a method in order, each slide one step and why it works.
- **Before and after:** the wrong way and the right way, in pairs or alternating.
- **Data:** one surprising figure per slide with one line on what it means, only from sources given.
- **Case:** problem, approach, result, lesson, each a slide or two.

## The words

- **The header carries the point.** Someone skimming reads only the big line of each slide: it must
  say the thing, not label it ("Two minutes is the whole routine", not "The routine").
- **Short:** a header of a few words and a line or two under it. More is two slides.
- **Something to use on every slide:** a name and what it does, a step, a prompt to copy, a number,
  an example. A slide that only announces what's coming is filler.
- **Slide patterns:** a tip (the point, then one line of example), a step ("Step 3" what to do, why),
  a contrast (wrong, then right), a figure (the number, then what it means), a quote or a prompt set
  as the object to copy.
- **A reason to swipe:** a slide can end on the next one's question.
- **Numbers only for steps.** Number the slides ("Step 3 of 5") only when they really are steps, as
  in a framework.
- **Nothing a reader needs is only on a later slide:** many never swipe.
- **The cover is written last,** once you know what the carousel delivers: specific and concrete,
  a number or a claim someone could disagree with, never a topic name.
- **The end asks for what the content earns:** save for something to come back to, share for
  something a friend needs, comment for an opinion, follow for a series. One ask.
- **The caption** opens with its own hook in the first line, says what's inside, and ends with the ask.
- Facts, research and voice: `references/copy.md` of the `copywriting` skill; a post about news is researched before it's planned.

## The design

One system, many arrangements. Readers feel the relationship between slides more than any slide, so
plan the slides side by side, as a reader swipes them.

- **Fixed:** the type families and scale, the palette, the margins and grid, and one running cue
  (a corner mark, an edge that carries on; a counter only when the slides are steps). These make it one post.
- **Varied:** each slide its own idea and picture over the shared system (its CSS by
  `data-variant`), or, in a series, two or three body layouts alternated by a `layout` enum. Change
  what is big, the crop and the surface every slide or two: type that fills the frame, then a quiet
  slide; the brand's ground, then its strongest colour.
- **A turn:** a slide that breaks the pattern, often past the middle, can keep people to the end,
  when the content has one.
- **The cover** is the boldest slide, built to read at thumbnail size: one large claim, high
  contrast, the brand present but small.
- **The end** carries the action. Echoing the cover is one way to close the post like it opened.
- **Across the seams:** a shape, an image or a line can run from one slide into the next
  (`data-span`), which pulls the swipe. Text never crosses a seam, since each slide is cut there.

## Strong, and weak

- **Strong:** a cover you'd stop for; slide 2 makes a clear promise; every slide useful on its own
  and worth a screenshot; a rhythm you can feel in the thumbnails; an end that pays off.
- **The same card five times:** one body layout repeated with new words. Vary the arrangement by
  what each slide does.
- **Title cards:** slides that name a topic ("Launches") and give nothing. Put the thing on the slide.
- **Filler lines:** sentences that sound smart and help no one. Cut them.
- **A logo for an ending:** the end is the payoff and the ask; the brand is already on every slide.
- **A dense slide:** a paragraph on a slide. Split it, or let the size of the type do the work.
