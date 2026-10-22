---
name: review
description: Use before delivering a new or changed Metamorfiles template, page, repurposed set or brand kit, again after any layout change to one, or when the user asks for a design review. Gets an independent review of the renders against brand/DESIGN.md, with fixes, from a reviewer that didn't make the design.
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
   - **ChatGPT desktop app or Codex:** their plugins can't include agents, so spawn a subagent whose instructions are exactly what `metamorfiles_get_guide { name: "design-reviewer" }` returns, and wait for it.
   - **Anywhere else:** do the review yourself as a separate pass. Judge only the images, the findings and DESIGN.md.
3. Give the reviewer only this: the project's absolute path, what to review (`pages/<id>` or `templates/<id>`, or in a new brand the queue: `logo`, `character`, `mark`, `imagery` or `handover`), the task id when there is one, the user's brief in one sentence, the task's decisions (what the user answered, and what was picked for them in Auto), and the sources researched for its facts (each fact with its link and date). Don't explain your design choices.
4. Fix every **must fix**, once, in the piece itself (a page or template with `metamorfiles_write_file` and a `note` such as "Review fixes: phone pinned to the bottom", a new version of the same item, never a copy), and have it looked at again: only what changed waits. A piece looked at twice without passing goes to the user as it is: a step is asked with `cannot`, one plain line on what couldn't be made; a page or template names it in the summary. Act on a suggestion only when it's worth that piece's next look.
5. Deliver once, as `SKILL.md` of the `studio` skill says: what the review changed in a line, and one question. The user doesn't need the review's list.

## Rubric

The reviewer works like this:

### How you look

1. Call `metamorfiles_get_project { path: "<the absolute project path you were given>" }`. A brand still being made has no DESIGN.md yet: read `brand/process/brief.md` and the chosen option of each step in `brand/process/`. Any other brand: `metamorfiles_read_file { path: "brand/DESIGN.md" }`. Note the name exactly as written, the colours, the fonts, and what the brief says the business and its products are.
2. Get what waits: `metamorfiles_review_queue { for: "logo" }`, with what you were given (`pages/<id>`, `templates/<id>`, or `logo`, `character`, `mark`, `imagery`, `handover`). It lists each piece not passed as it is now, its kind, where to see it whole, what it shows, and the checklist for each kind; judge those pieces and nothing else. A page is every frame of it, with `metamorfiles_render_preview { item: "pages/<id>", variant: "<id>", format: "instagram-story" }`: its two riskiest variants (the longest copy, the busiest image) in every format, and a carousel in every slide. A template is every format it declares, with its own defaults.
3. DESIGN.md's colours are the brand's foundation, never a limit: a layout or a picture may use any colour its goal needs, so a colour is never a fault on its own.
4. Look at each piece whole first, then closely, before you read its check findings or what it was meant to show. What it was meant to show tells you what the picture is of; it is not a contract, and a result that differs from it in taste is not a fault. A piece the queue marks as looked at twice is not sent back again: say what's still wrong in your summary.
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

#### Logo route

- The name is spelled exactly as the brief writes it.
- Letters set in a font are the font's own: their shapes are never judged. Drawn letters each read as themselves.
- Nothing is taken from a reference the direction shows.

#### Small mark

- It is the chosen logo, a part of it, or drawn from it in the same hand and colours.

#### Final logo file

- It is the chosen logo, in DESIGN.md's colours. Its other versions are recolours of it: what a recolour can't keep is never a fault.
- A cleaned file is its trace: hold it over the trace, `metamorfiles_compare_trace { file: "brand/process/logo/<name>-clean.svg", against: "brand/process/logo/<name>.svg" }`. A part lost, added or changed in shape is a must fix.

#### Mockup

- The picture checks above.
- The logo is the brand's own: the same letters in the same order, its parts and its colours. A generated photograph always drifts a little from the real file; only a clear mistake is a fault.
- The brand's own products match what the brief and the brand's files say they are.
- The only words are the brand's or the brief's, spelled right.
- What is printed sits on its surface, in the photograph's light, made the way its method makes it: stitched thread for embroidery, ink in the surface for a print, a built object for a sign; never a flat graphic laid on top.

#### DESIGN.md section

- It reads as guidance for people using the brand: no notes on how it was made, no file paths.

#### Page or template

- No check errors left. Text a reader needs (a headline, a name, a date, a call to action) is whole and readable: nothing they need is cut by its box or the frame, hidden, or run into other text by accident. Type cropped, bled or overlapped as part of the composition is design, never a fault.
- DESIGN.md's fonts in the layout; the brand's real logo file, unaltered, on a ground DESIGN.md allows.
- No claim, price or fact that the brief, the brand, the data or a source read for it doesn't give.
- Another party's mark is its real file, never redrawn or larger than the brand's logo; another party's image carries the credit its licence asks for.
- Its pictures pass the picture checks.
- A template looks right with its own defaults, in every format it declares.
