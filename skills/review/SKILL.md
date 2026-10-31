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
- **Again after any layout change**, even a small one after a review said ship: moving or resizing anything, a new format, a different image or crop, a structural fix, or the user's own change you build on. A reviewed design that then changes is an unreviewed design.

## Run it

1. Finish your own loop first: every `metamorfiles_render_preview` check error fixed.
2. Hand the review to a reviewer that didn't make the design, and wait for its verdict before you go on. Never start it in the background, and run one reviewer at a time:
   - **Apps that load the plugin's agents** (Claude Code, Cursor, GitHub Copilot, and OpenCode or Antigravity after `metamorfiles setup`): use the `design-reviewer` agent, in the foreground (in Claude Code, `run_in_background: false`).
   - **ChatGPT desktop app or Codex:** their plugins can't include agents, so spawn a subagent whose instructions are exactly what `metamorfiles_get_guide { name: "design-reviewer" }` returns, started without your conversation (in Codex, `fork_turns: "none"`), and wait for it. A reviewer that has read how the design was made judges the reasoning, not the result, and reads all of it before it starts.
   - **Anywhere else:** do the review yourself as a separate pass. Judge only the images, the findings and DESIGN.md.
3. Give the reviewer only this: the project's absolute path, what to review (`pages/<id>` or `templates/<id>`, or in a new brand the queue: `logo`, `character`, `mark`, `imagery` or `handover`), the task id when there is one, the user's brief in one sentence, the task's decisions (what the user answered, and what was picked for them in Auto), and the sources researched for its facts (each fact with its link and date). Don't explain your design choices.
4. Fix every **must fix**, once, in the piece itself (a page or template with `metamorfiles_write_file` and a `note` such as "Review fixes: phone pinned to the bottom", a new version of the same item, never a copy), and have it looked at again: only what changed waits. A piece looked at twice without passing goes to the user as it is: a step is asked with `cannot`, one plain line on what couldn't be made; a page or template names it in the summary. Act on a suggestion only when it's worth that piece's next look.
5. Deliver once, as `SKILL.md` of the `studio` skill says: what the review changed in a line, and one question (a brand kit's handover: `references/presenting.md` of the `brand` skill). The user doesn't need the review's list.

## Rubric

The reviewer works like this:

### How you look

1. Call `metamorfiles_get_project { path: "<the absolute project path you were given>" }`. A brand still being made has no DESIGN.md yet: read `brand/process/brief.md` and the chosen option of each step in `brand/process/`. Any other brand: `metamorfiles_read_file { path: "brand/DESIGN.md" }`. Note the name exactly as written, the colours, the fonts, and what the brief says the business and its products are.
2. Get what waits: `metamorfiles_review_queue { for: "logo" }`, with what you were given (`pages/<id>`, `templates/<id>`, or `logo`, `character`, `mark`, `imagery`, `handover`). It lists each piece not passed as it is now, its kind, where to see it whole, what it shows, and the checklist for each kind; judge those pieces and nothing else. A page is every frame of it, with `metamorfiles_render_preview { item: "pages/<id>", variant: "<id>", format: "instagram-story" }`: its two riskiest variants (the longest copy, the busiest image) in every format, and a carousel in every slide. A template is every format it declares, with its own defaults.
3. DESIGN.md's colours are the brand's foundation, never a limit: a layout or a picture may use any colour its goal needs, so a colour is never a fault on its own. A rule DESIGN.md's Do's and Don'ts set is the brand's own, and the checklists below hold every piece to it.
4. Read what each piece was meant to be first, as an art director reads a brief, and open the images it was made from when it is meant to match one (the same product, the logo). Say in one plain sentence what a viewer should see: what kind of picture it is (a photograph, an illustration, a render), what is in it, and how each thing meets the next (what holds, hangs from or runs to what). Then look at that piece on its own, never as one of a set: whole first, then closely, before its check findings. The sentence holds or it doesn't: a thing it names that is missing, or that doesn't meet what it should, fails Subject or Physics. A result that differs from the brief only in taste is not a fault. A piece the queue marks as looked at twice is not sent back again: say what's still wrong in your summary.
5. Hold each piece to its kind's checklist below. A failed item is a **must fix**. Nothing else is a must fix.
6. Anything else worth the user's attention in the piece as it is shown here is a **suggestion**, never a guess about how it would work somewhere else: three at most for the whole look, each one sentence, and most looks have none.
7. A fact only the user can give is never a must fix: name it once as **needs the user**.
8. The task's decisions, what the user answered or chose, stand: never send one back.
9. Never change files. Report only.
10. Record your verdict before you reply, every time: `metamorfiles_review_verdict { for: "logo", summary: "<one plain line>", must: [{ piece: "logo:cut", fix: "<where, what's wrong, the fix>" }], suggestions: ["<where, what could be better>"], task: "<id>" }`. `for` is the queue you looked at; every piece in it passes but those you name in `must`, each by its id from the queue; `summary` is the line for the user's thread (what you checked, and what you found); `task`, when you were given one.
11. Reply with **ship** or **fix first**, then each must fix: the piece, where, what's wrong, the fix in one sentence (with DESIGN.md tokens where it's about colour or type), then the suggestions.

### Checklists

#### Every picture an image model made

Sample images, library images, mascots, character sheets, mockups, and the pictures in a page or template.

- **Anatomy:** every figure is whole and possible: count each one's limbs, hands, fingers and head on its own body, also where figures overlap. A part hidden behind something or cut by the frame is fine.
- **Physics:** every object is possible and works the way its kind works: it holds together, rests on something, opens where it opens.
- **Lettering:** every line set in the picture says exactly what it was asked to say, unless the brief gives the words. Read each line enlarged, letter by letter, accents and punctuation included: a stray, missing or doubled mark is a fault, as a misspelled word is.
- **Subject:** it shows the figures, objects and action it was meant to show. What was meant as distinct is distinct: a set is never one figure or object repeated.
- **Character:** the brand's character is itself, as its sheet shows it, in every figure of a sheet and every picture.
- **Medium:** the same medium as the brand's other pictures.
- **Real people and events:** no generated photograph of a real person or a real event.
- **The brand's own rules:** once DESIGN.md exists, the picture keeps every rule its Do's and Don'ts set for a piece like it (a colour used once per piece). The logo or the name set large, tight, edge to edge, bled or cropped as the composition's idea is design, never a fault: the logo's clear space guides where a logo is placed, not how a design may use it, and whether that composition is the best one is the user's call.

#### Logo route

- The name is spelled exactly as the brief writes it.
- Letters set in a font are the font's own: their shapes are never judged. Drawn letters each read as themselves.
- Nothing is taken from a reference the direction shows.
- The lockup is what its composition line says and reads as one piece: a part meant to meet the letters touches them, never floats beside them; a mark set beside the name stands clearly apart from its letters, never at a letter's space where it reads as one more letter; supporting words sit on the word's axis or on an edge it really has.

#### Small mark

- It is the chosen logo, a part of it, or drawn from it in the same hand and colours.

#### Final logo file

- It is the chosen logo, in DESIGN.md's colours. Its other versions are recolours of it: what a recolour can't keep is never a fault. A colour in the brand's own file (one it brought in) that DESIGN.md doesn't name is fixed by naming it there, never by recolouring the file: say so in the fix.
- A cleaned file is its trace: hold it over the trace, `metamorfiles_compare_trace { file: "brand/process/logo/<name>-clean.svg", against: "brand/process/logo/<name>.svg" }`. A part lost, added or changed in shape is a must fix.

#### Mockup

- The picture checks above.
- The logo is this brand's logo, applied the way the shot means it. Read what the shot intends from what it shows, look at the photograph whole first, and enlarge only to confirm a fault you suspect (`metamorfiles_read_file { path: "brand/mockups/<file>.png", region: { x: 0.3, y: 0.4, width: 0.3, height: 0.15 } }`), never to look for differences from the file. Before judging, say which side of its surface is nearer (the larger side; edges and lines above the eye run down toward the far side) and which side of the logo is: they are the same side.
  - A fault breaks its identity: a letter wrong, missing, extra or merged, or the words changed; a part of the mark added, missing, doubled, merged or moved; stretched or squashed beyond what its surface's shape explains; colours other than its own, beyond what the light and the method explain; an effect on the artwork itself (an outline, a glow, a drop shadow); its axis not its surface's: upright while the object it's printed on is turned, or turned on an upright one; or its plane not its surface's: turned the other way from it (its larger, nearer side on the surface's far side; inside a ring, a centre shifted toward the surface's near side), flat to the camera while the wall, box side or page it's on recedes, or foreshortened on a surface that faces the camera.
  - Never a fault, since the shot means it: perspective and the logo turning with its object; the scene's light, shadows, glare and reflections; its surface's curves, folds and creases; cut by the frame or covered by a hand or an object; its method's look (thread and stitches, ink in the fibre, one-colour relief, detail the method can't hold); wear on a used object; a small drift in a curve or a proportion that leaves every part where it is.
- The brand's own products match what the brief and the brand's files say they are.
- The only words are the brand's or the brief's, spelled right.
- What is printed sits on its surface and turns with it, in the photograph's light, made the way the shot names its method: embroidery shows its stitched thread, a print is ink in the surface, a sign a built object. A different method from the one named (a smooth felt or printed patch where embroidery was asked), or a flat graphic laid on top, is a fault.

#### DESIGN.md section

- It reads as guidance for people using the brand: no notes on how it was made, no file paths.
- Every fact in it is right, and every sentence reads one way only.

#### Page or template

- No check errors left. Text a reader needs (a headline, a name, a date, a call to action) is whole and readable: nothing they need is cut by its box or the frame, hidden, or run into other text by accident. Type cropped, bled or overlapped as part of the composition is design, never a fault.
- DESIGN.md's fonts in the layout; the brand's real logo file, unaltered, on a ground DESIGN.md allows.
- No claim, price or fact that the brief, the brand, the data or a source read for it doesn't give.
- Another party's mark is its real file, never redrawn or larger than the brand's logo; another party's image carries the credit its licence asks for.
- Its pictures pass the picture checks.
- A template looks right with its own defaults, in every format it declares.
- It keeps every rule DESIGN.md's Do's and Don'ts set for a piece like it.
