# Carousels

Read this for any carousel, as the copywriter and as the designer: the plan, the words and the
design are one piece. A carousel is a short sequence someone swipes on purpose, so it earns each
swipe, gives something on every slide and ends with a reason to keep it.

## Contents
- Plan it first
- Formats
- The words
- The design
- Strong, and weak

## Plan it first

Most weak carousels fail in the outline, before any design. Before the template, write the plan in
your notes, one line per slide: what the slide gives the reader, its pattern (below), its layout and
its image: composed for this slide's slot and made with the library's sheet as reference ("new:" with what it
shows and its shape), a library file only when it already is that composition ("Compose it, then make
it" in `images.md`); and any other party's mark or photo it shows, found with
`metamorfiles_find_mark { name }` or imported with its credit ("Other parties' marks and images" in
`images.md`).
Read it top to bottom: every slide earns its place, the order builds, and no two neighbours share a
layout unless they're a pair on purpose. Then design the template from the plan, and fill the page's
variants from it. An existing template is reused only when its layouts already serve this plan, and
the plan says so; new content, or a request for a new post or design, gets its own template.

When the brief asks for something only the user knows and didn't give it (their routine, a result,
a date), the plan says so once, with the exact question, and the slide is reframed to what's true
and still useful ("Grounding" in `copy.md`), never invented and never a line repeating another.

- **Length:** what the idea needs, usually 6 to 10 slides; one idea per carousel.
- **Cover, then a promise:** the cover stops the scroll; slide 2 says exactly what the reader gets
  by the end, so they keep going.
- **The end** completes the argument and asks for the one action that fits it.

## Formats

Pick the one the idea is, and say it in the plan:
- **List:** a number of tips, tools, mistakes or lessons, one per slide. The cover names the number.
- **Framework:** steps of a method in order, each slide one step and why it works.
- **Before and after:** the wrong way and the right way, in pairs or alternating.
- **Data:** one surprising figure per slide with one line on what it means, only from sources given.
- **Case:** problem, approach, result, lesson, each a slide or two.

## The words

- **The header carries the point.** Someone skimming reads only the big line of each slide: it must
  say the thing, not label it ("Granola writes the meeting notes", not "Meeting notes").
- **Short:** a header of a few words and at most about 30 words under it. More is two slides.
- **Something to use on every slide:** a name and what it does, a step, a prompt to copy, a number,
  an example. A slide that only announces what's coming is filler.
- **Slide patterns:** a tip (the point, then one line of example), a step ("Step 3" what to do, why),
  a contrast (wrong, then right), a figure (the number, then what it means), a quote or a prompt set
  as the object to copy.
- **A reason to swipe:** a slide can end on the next one's question or a count ("3 of 5").
- **The cover is written last,** once you know what the carousel delivers: specific and concrete,
  a number or a claim someone could disagree with, never a topic name.
- **The end asks for what the content earns:** save for something to come back to, share for
  something a friend needs, comment for an opinion, follow for a series. One ask.
- **The caption** opens with its own hook in the first line, says what's inside, and ends with the ask.
- Every fact comes from the brief, the brand, the user or research done for this post, kept with its source and date ("Research" in `copy.md`); a post about news is researched before it's planned. Copy craft and voice: `copy.md`.

## The design

One system, many arrangements. Readers feel the relationship between slides more than any slide.

- **Fixed:** the type families and scale, the palette, the margins and grid, and one running cue
  (a counter, a corner mark, an edge that carries on). These make it one post.
- **Varied:** the arrangement, by the slide's job. Design two or three body layouts in the template
  (a `layout` enum variable) and alternate them by the plan: the big statement, the item with its
  example, the pair, the figure, the full-bleed image. Change scale or surface every slide or two:
  type that fills the frame, then a quiet slide; the brand's ground, then its strongest colour.
- **One surprise** past the middle, a slide that breaks the pattern, keeps people to the end.
- **The cover** is the boldest slide and reads at thumbnail size: one large claim, high contrast,
  the brand present but small.
- **The end** mirrors the cover, so the post closes like it opened.
- **Across the seams:** a shape, an image or a line can run from one slide into the next
  (`data-span`), which pulls the swipe.

## Strong, and weak

- **Strong:** a cover you'd stop for; slide 2 makes a clear promise; every slide useful on its own
  and worth a screenshot; a rhythm you can feel in the thumbnails; one surprise; an end that pays off.
- **The same card five times:** one body layout repeated with new words. Vary the arrangement by
  what each slide does.
- **Title cards:** slides that name a topic ("Launches") and give nothing. Put the thing on the slide.
- **Filler lines:** sentences that sound smart and help no one. Cut them.
- **A logo for an ending:** the end is the payoff and the ask; the brand is already on every slide.
- **A dense slide:** a paragraph on a slide. Split it, or let the size of the type do the work.
