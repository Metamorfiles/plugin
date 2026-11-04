---
name: review
description: Gets an independent review of the renders against brand/DESIGN.md, with fixes, from a reviewer that didn't make the design. Use before delivering a new or changed Metamorfiles template, page, repurposed set or brand kit, a new brand's logo, mascot, imagery or mockups, or print artwork; again after any layout change to one; or when the user asks for a design review.
license: MIT
---

# Independent design review

Whoever made a design is the worst judge of it. The review looks only at the rendered images, the check findings and `brand/DESIGN.md`, never at your reasoning.

## When

- Once, after the last change and before you deliver a new template, page or repurposed set.
- In a new brand, before each question Studio asks (the logos, the mascot, the small marks, the sample images) and before the handover; Studio keeps what waits in each queue.
- For mockups, in any brand: their flat designs before a photograph is made from them, then the photographs (`mockups`).
- **Again after any layout change**, even a small one after a review said ship: moving or resizing anything, a new format, a different image or crop, a structural fix, or the user's own change you build on. A reviewed design that then changes is an unreviewed design.

## Run it

1. Finish your own loop first: every `metamorfiles_render_preview` check error fixed.
2. Hand the review to a reviewer that didn't make the design, and wait for its verdict before you go on. Never start it in the background, and run one reviewer at a time:
   - **Apps that load the plugin's agents** (Claude Code, Cursor, GitHub Copilot, and OpenCode or Antigravity after `metamorfiles setup`): use the `design-reviewer` agent, in the foreground (in Claude Code, `run_in_background: false`).
   - **ChatGPT desktop app or Codex:** their plugins can't include agents, so spawn a subagent whose instructions are exactly what `metamorfiles_get_guide { name: "design-reviewer" }` returns, started without your conversation (in Codex, `fork_turns: "none"`), and wait for it. A reviewer that has read how the design was made judges the reasoning, not the result, and reads all of it before it starts.
   - **Anywhere else:** do the review yourself as a separate pass. Judge only the images, the findings and DESIGN.md.
3. Give the reviewer only this: the project's absolute path, what to review (`pages/<id>` or `templates/<id>` and, for a change, the frames it touched, `mockups`, or in a new brand the queue: `logo`, `character`, `mark`, `imagery` or `handover`), the task id when there is one, the user's brief in one sentence, the task's decisions (what the user answered, and what was picked for them in Auto), and the sources researched for its facts (each fact with its link and date). Don't explain your design choices.
4. A piece changes only for a **must fix** or the user's word, in the piece itself, never a copy: a page or template with `metamorfiles_write_file` and a `note` such as "Review fixes: phone pinned to the bottom", a new version of the same item; an image or drawing as `references/images.md` of the `studio` skill says ("Edit or redraw"). Then it is looked at again: only what changed waits. A piece looked at twice without passing goes to the user as it is, the reviewer naming what's still off: a step is asked with `cannot`, one plain line on what couldn't be made; a page or template names it in the summary.
5. Deliver once, as `SKILL.md` of the `studio` skill says: what the review changed in a line, and one next step for the user (a brand kit's handover: `references/presenting.md` of the `brand` skill). The user doesn't need the review's list.

## Rubric

The reviewer works like this:

### How you look

1. Call `metamorfiles_get_project { path: "<the absolute project path you were given>" }`. A brand still being made has no DESIGN.md yet: read `brand/process/brief.md` and the chosen option of each step in `brand/process/`. Any other brand: `metamorfiles_read_file { path: "brand/DESIGN.md" }`. Note the name exactly as written, the colours, the fonts, and what the brief says the business and its products are.
2. Get what waits: `metamorfiles_review_queue { for: "logo" }`, with what you were given (`pages/<id>`, `templates/<id>`, `mockups`, or `logo`, `character`, `mark`, `imagery`, `handover`). It lists each piece not passed as it is now, its kind, where to see it whole, what it shows, and the checklist for each kind; judge those pieces and nothing else. A page is every frame of it, with `metamorfiles_render_preview { item: "pages/<id>", variant: "<id>", format: "instagram-story" }`: its two riskiest variants (the longest copy, the busiest image) in every format, and a carousel in every slide. A template is every format it declares, with its own defaults. A change to a page or template is judged in the frames the change touched: a fault in a frame it didn't touch is a suggestion, never a must fix.
3. DESIGN.md's colours are the brand's foundation, never a limit: a layout or a picture may use any colour its goal needs, so a colour is never a fault on its own. A rule DESIGN.md's Do's and Don'ts set is the brand's own, and the checklists below hold every piece to it.
4. Read what each piece was meant to be first, as an art director reads a brief: its prompt, its line or its composition is the plan it was made from, and you judge whether the result carries the plan's idea, never whether it matches each detail or proportion the plan describes (words set in a picture are held exactly: Lettering). Open the images it was made from when it is meant to match one (the same product, the logo). Say in one plain sentence what a viewer should see: what kind of picture it is (a photograph, an illustration, a render), what the idea rests on, and how those things meet (what holds, hangs from or runs to what). Then look at that piece on its own, never as one of a set: whole first, then closely, before its check findings. The sentence holds or it doesn't: a thing the idea rests on that is missing, or that doesn't meet what it should, fails Subject or Physics. Where the result departs from the plan in a size, a placement, a prop or a detail and the idea still holds, it is the result's decision, never a fault; so is a difference only in taste. Judge the look by eye: a size, ratio or count the plan wrote down is never the reason for a must fix.
5. A second look holds the same bar as the first and judges what the fix changed. A part the fix didn't touch keeps its first verdict: never judged again a second way. The one exception is a plain fault the first look missed (a limb too many, a misspelled word, a part that can't hold together): it is a must fix whenever it's seen. A piece the queue marks as looked at twice is not sent back again: say what's still wrong in your summary.
6. Hold each piece to its kind's checklist below. A failed item is a **must fix**. Nothing else is a must fix.
7. Anything else worth the user's attention in the piece as it is shown here is a **suggestion**, never a guess about how it would work somewhere else: three at most for the whole look, each one sentence, and most looks have none.
8. A fact only the user can give is never a must fix: name it once as **needs the user**.
9. The task's decisions, what the user answered or chose, stand: never send one back.
10. Never change files. Report only.
11. Record your verdict before you reply, every time: `metamorfiles_review_verdict { for: "logo", summary: "<one plain line>", must: [{ piece: "logo:cut", fix: "<where, what's wrong, the fix>" }], suggestions: [{ piece: "logo:cut", note: "<where, what could be better>" }], task: "<id>" }`. `for` is the queue you looked at; every piece in it passes but those you name in `must`, each by its id from the queue, as each suggestion is; `summary` is the line for the user's thread (what you checked, and what you found); `task`, when you were given one.
12. Reply with **ship** or **fix first**, then each must fix: the piece, where, what's wrong, the fix in one sentence (with DESIGN.md tokens where it's about colour or type), then the suggestions.

### Calibration

How the rubric reads, in examples. Hold every look to the same bar:

- A mark set beside the name came out smaller and closer than its composition planned, still clearly apart from the letters and reading as one piece: **passes**. The plan was a plan.
- A machine missing a part it needs to work, or a part with nothing holding it (a bicycle with no chain, a wheel beside its stand with nothing holding the axle): **must fix** (Physics). A part that passed the first look and the fix didn't touch: **passes** again, never judged a second way.
- A figure with a limb too many, even where the fix you're checking is elsewhere in the picture: **must fix** (Anatomy), whenever it's seen.
- A tool drawn bending where a rigid one can't: **must fix** (Physics).

### Checklists

#### Every picture an image model made

Sample images, library images, mascots, character sheets, mockups, and the pictures in a page or template.

- **Anatomy:** every figure is whole and possible: count each one's limbs, hands, fingers and head on its own body, also where figures overlap. A part hidden behind something or cut by the frame is fine.
- **Physics:** every object is possible and works the way its kind works: it holds together, rests on something, opens where it opens.
- **Lettering:** every line set in the picture says exactly what it was asked to say, unless the brief gives the words. Read words at the size the viewer meets them, and enlarge only to confirm a fault you suspect (`metamorfiles_read_file { path: "<the picture>", region: { x: 0.3, y: 0.4, width: 0.3, height: 0.15 } }`), letter by letter, accents and punctuation included, never to look for differences from a file: a stray, missing or doubled mark is a fault, as a misspelled word is.
- **Subject:** it shows the figures, objects and action its idea rests on. What was meant as distinct is distinct: a set is never one figure or object repeated.
- **Character:** the brand's character is itself, as its sheet shows it, in every figure of a sheet and every picture. In a mockup or a print it stays recognisably itself: a stylisation the design means is not a fault.
- **Medium:** the brand's own imagery (sample images, library images, mascots, sheets) is in the same medium as its other pictures. Mockups and flat prints are designed freely: their medium is never a fault.
- **Real people and events:** no generated photograph of a real person or a real event.
- **The brand's own rules:** once DESIGN.md exists, the picture keeps every rule its Do's and Don'ts set for a piece like it (a colour used once per piece). The logo or the name set large, tight, edge to edge, bled or cropped as the composition's idea is design, never a fault: the logo's clear space guides where a logo is placed, not how a design may use it, and whether that composition is the best one is the user's call.

#### Logo route

- The name is spelled exactly as the brief writes it.
- Letters set in a font are the font's own: their shapes are never judged. Drawn letters each read as themselves.
- Nothing is taken from a reference the direction shows.
- The lockup carries its composition's idea and reads as one piece: a part meant to meet the letters touches them, never floats beside them; a mark set beside the name stands clearly apart from its letters, never at a letter's space where it reads as one more letter; supporting words sit on the word's axis or on an edge it really has.

#### Small mark

- It is the chosen logo, a part of it, or drawn from it in the same hand and colours.

#### Final logo file

- It is the chosen logo, in DESIGN.md's colours. Its other versions are recolours of it: what a recolour can't keep is never a fault. A colour in the brand's own file (one it brought in) that DESIGN.md doesn't name is fixed by naming it there, never by recolouring the file: say so in the fix.
- A cleaned file is its trace: hold it over the trace, `metamorfiles_compare_trace { file: "brand/process/logo/<name>-clean.svg", against: "brand/process/logo/<name>.svg" }`. A part lost or added, or a part redesigned (a shape that changes what the drawing shows), is a must fix; the cleaning (truer edges, straighter stems, even strokes, letters on their shared lines) never is.

#### Mockup

- The picture checks above.
- The logo is this brand's logo, applied the way the shot means it. Read what the shot intends from what it shows, look at the photograph whole first, and read its words as Lettering says.
  - A fault breaks its identity: a letter wrong, missing, extra or merged, or the words changed; a part of the mark added, missing, doubled, merged or moved; stretched or squashed beyond what its surface's shape explains; colours other than its own, beyond what the light and the method explain; an effect on the artwork itself (an outline, a glow, a drop shadow).
  - Never a fault, since the shot means it: perspective and the logo turning with its object; the scene's light, shadows, glare and reflections; its surface's curves, folds and creases; cut by the frame or covered by a hand or an object; its method's look (thread and stitches, ink in the fibre, one-colour relief, detail the method can't hold); wear on a used object; a small drift in a curve or a proportion that leaves every part where it is.
- The brand's own products match what the brief and the brand's files say they are.
- The only words are the brand's or the brief's, spelled right.
- What is printed lies in its surface's plane and turns with it, in the photograph's light, made the way the shot names its method: embroidery shows its stitched thread, a print is ink in the surface, a sign a built object. A print in another plane than its surface's, a different method from the one named (a smooth felt or printed patch where embroidery was asked), or a flat graphic laid on top, is a fault.

#### Flat design

A print or a face the image model drew flat, that a mockup's photograph will be made from.

- The picture checks above.
- The logo is this brand's logo: every letter and every part of its mark as its file draws them, in its own colours and proportions, with no effect laid on it (an outline, a glow, a drop shadow).
- The only words are the brand's or the brief's, spelled right, read as Lettering says.
- It reads as the print it's for: whole, and nothing that matters cut by the trim or the die-cut.

#### DESIGN.md section

- It reads as guidance for people using the brand: no notes on how it was made, no file paths.
- Every fact in it is right, and every sentence reads one way only.

#### Page or template

- Something clearly leads and the rest follow in order, or the layout's idea is an equal set (a comparison, a list) built as one: nothing competes by accident.
- Levels of text step clearly apart in size or weight; type set as the picture is design.
- Elements share alignment lines and the margins match; a break that is the composition's idea (a cutout off the frame, type over the picture) is design.
- A photograph's subject reads in each format's crop: cut only as the composition means it, never by accident.
- No check errors left. Text a reader needs (a headline, a name, a date, a call to action) is whole and readable: nothing they need is cut by its box or the frame, hidden, or run into other text by accident. Type cropped, bled or overlapped as part of the composition is design, never a fault.
- DESIGN.md's fonts in the layout; the brand's real logo file, unaltered, on a ground DESIGN.md allows.
- No claim, price or fact that the brief, the brand, the data or a source read for it doesn't give.
- Another party's mark is its real file, never redrawn or larger than the brand's logo; another party's image carries the credit its licence asks for.
- Its pictures pass the picture checks.
- A template passes these with its own defaults, in every format it declares.
- It keeps every rule DESIGN.md's Do's and Don'ts set for a piece like it.
