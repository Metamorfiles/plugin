---
name: review
description: Gets an independent review of the renders against brand/DESIGN.md, with fixes, from a reviewer that didn't make the design. Use before delivering a new or changed Metamorfiles template, page, repurposed set or brand kit, a new brand's logo, mascot, imagery or mockups, or print artwork; again after any layout change to one; or when the user asks for a design review.
license: MIT
---

# Independent design review

Whoever made a design is the worst judge of it. The review looks only at the rendered images, the check findings and `brand/DESIGN.md`, never at your reasoning.

## When

- Once, after the last change and before you deliver a new template, page or repurposed set.
- Each piece of a brand as it's made, in its own queue, never beside what's made from it. Studio keeps what waits in each queue, refuses a step's question or a task's end while a piece waits, and makes a brand's mockups only once its guideline has passed:

  | Piece | When | Queue |
  |---|---|---|
  | A new brand's logo routes, mascots and character sheet, sample images | before Studio asks that step | `logo`, `character`, `imagery` |
  | DESIGN.md's sections and the logo files it lists | once it's written, before anything is made from it | `guideline` |
  | The brand's own pictures in its folders (library, poses, icons, pattern) | once the ones being made are in | `library` |
  | Mockups: each flat design, then its photograph | as each is made | `mockups` |
- **Again after any layout change**, even a small one after a review said ship: moving or resizing anything, a new format, a different image or crop, a structural fix, or the user's own change you build on. A reviewed design that then changes is an unreviewed design.

## Run it

1. Finish your own loop first: every `metamorfiles_render_preview` check error fixed.
2. Hand the review to a reviewer that didn't make the design, and wait for its verdict before you go on: run it in the foreground, one reviewer at a time:
   - **Apps that load the plugin's agents** (Claude Code, Cursor, GitHub Copilot, and OpenCode or Antigravity after `metamorfiles setup`): use the `design-reviewer` agent, in the foreground (in Claude Code, `run_in_background: false`).
   - **ChatGPT desktop app or Codex:** their plugins can't include agents, so spawn a subagent whose instructions are exactly what `metamorfiles_get_guide { name: "design-reviewer" }` returns, started without your conversation (in Codex, `fork_turns: "none"`), and wait for it.
   - **Anywhere else:** do the review yourself as a separate pass. Judge only the images, the findings and DESIGN.md.
3. Give the reviewer only this: the project's absolute path, what to review (`pages/<id>` or `templates/<id>` and, for a change, the frames it touched, or a brand's queue from "When"), the task id when there is one, the user's brief in one sentence, the task's decisions (what the user answered, and what was picked for them in Auto), and the sources researched for its facts (each fact with its link and date).
4. A piece changes only for a **must fix** or the user's word, in the piece itself: a page or template as `references/design.md` of the `studio` skill says ("Where a change goes"), with a `note` such as "Review fixes: phone pinned to the bottom", a new version of the same item; a new brand's step with `metamorfiles_change_step`; a section of DESIGN.md by the copywriter, written again as the guideline (`references/guidelines.md` of the `copywriting` skill) from what the review found; an image or drawing as `references/images.md` of the `studio` skill says ("Edit or redraw"). Then it is looked at again: only what changed waits, and a piece sent back that hasn't changed isn't looked at again. A piece looked at twice without passing, or one whose fix its maker can't make, goes to the user as it is, the reviewer or the maker naming what the reviewer still sees, as the reviewer's view: a step is asked with `cannot`, one plain line on what couldn't be made; a page or template names it in the summary. Studio shows the reviewer's suggestions to the user in its words, on the review in the task's thread: that is their one place, and whatever you say of a piece, in the thread or in your own reply, is the piece as it is. They reach you with the user's own words when the user answers one. With no task, your reply gives them as the reviewer wrote them.
5. Deliver once, as `SKILL.md` of the `studio` skill says: what the review changed in a line, and one next step for the user (a brand kit's handover: `references/presenting.md` of the `brand` skill). The user doesn't need the review's list.

## Rubric

The reviewer works like this:

### How you look

1. Call `metamorfiles_get_project { path: "<the absolute project path you were given>" }`. Read `metamorfiles_read_file { path: "brand/DESIGN.md" }`; when there is none yet, `brand/process/brief.md` and the chosen option of each step in `brand/process/`. Note the name exactly as written, the colours, the fonts, and what the brief says the business and its products are.
2. Get what waits: `metamorfiles_review_queue { for: "logo" }`, with what you were given (`pages/<id>`, `templates/<id>`, or a brand's queue). It lists each piece not passed as it is now, its kind, where to see it whole, what it shows, and the checklist for each kind; judge those pieces and nothing else. A page is every frame of it, with `metamorfiles_render_preview { item: "pages/<id>", variant: "<id>", format: "instagram-story" }`: its two riskiest variants (the longest copy, the busiest image) in every format, and a carousel in every slide. A template is every format it declares, with its own defaults. A change to a page or template is judged in the frames the change touched: a fault in a frame it didn't touch is at most a suggestion.
3. DESIGN.md is the brand's foundation. A layout or a picture may use any colour its goal needs, and how much of a colour it uses, the case and size of its lines and where things sit are its composition: they pass as the piece's decisions. What a piece keeps exactly is what its checklist names.
4. Read what each piece was meant to be first, as an art director reads a brief: its prompt, its line or its composition is the plan it was made from, and you judge whether the result carries the plan's idea (words set in a picture are held exactly: Lettering). Open the images it was made from when it is meant to match one (the same product, the logo). Say in one plain sentence what a viewer should see: what kind of picture it is (a photograph, an illustration, a render), what the idea rests on, and how those things meet (what holds, hangs from or runs to what). Then look at that piece on its own, apart from its set: whole first, then closely, before its check findings. The sentence holds or it doesn't: a thing the idea rests on that is missing, or that doesn't meet what it should, fails Subject or Physics. Where the result departs from the plan in a size, a placement, a prop or a detail and the idea still holds, nothing in it contradicting it, it passes as the result's decision, as a difference only in taste does. Judge the look by eye: a size, ratio or count the plan wrote down guided the maker and is no measure for a must fix.
5. A second look holds the same bar as the first and judges what the fix changed. A first finding that doesn't hold on the piece as it is now is withdrawn, and the piece passes; where the fix left a picture worse than its earlier take, say so in your summary. A part the fix didn't touch keeps its first verdict. The one exception is a plain fault the first look missed (a limb too many, a misspelled word, a part that can't hold together): it is a must fix whenever it's seen. A piece the queue marks as looked at twice goes to the user as it is: say what's still wrong in your summary.
6. Hold each piece to its kind's checklist below. A failed item is a **must fix**. Nothing else is a must fix.
7. Anything else worth the user's attention is a **suggestion**, about how the piece serves its own brief and brand: Studio judges a brand on its own, never against other brands. The user reads it beside the piece and weighs it by eye, and a piece that passed stays as it is unless they ask: so a suggestion says what a viewer sees in the piece as it is shown here, and where. Three at most for the whole look, each one sentence, and most looks have none.
8. A fact only the user can give goes to them: name it once as **needs the user**, in place of a must fix.
9. The task's decisions, what the user answered or chose, stand: judge the piece with them in place.
10. Never change files. Report only.
11. Record your verdict before you reply, every time: `metamorfiles_review_verdict { for: "logo", summary: "<one plain line>", must: [{ piece: "logo:minutes", fix: "<where, what's wrong, the fix>" }], suggestions: [{ piece: "logo:minutes", note: "<where, what a viewer sees>" }], task: "<id>" }`. `for` is the queue you looked at; every piece in it passes but those you name in `must`, each by its id from the queue, as each suggestion is; `summary` is the line for the user's thread (what you checked, and what you found); `task`, when you were given one.
12. Reply with **ship** or **fix first**, then each must fix: the piece, where, what's wrong, the fix in one sentence (with DESIGN.md tokens where it's about colour or type; for a picture, the one edit the image model makes from words: what to redraw, and where; for a section of DESIGN.md, what the line gets wrong and what it must say, its wording left to the copywriter). The verdict's result says what the reply holds: write exactly that.

### Calibration

How the rubric reads, in examples. Hold every look to the same bar:

- An object missing a part it needs to work, or a part with nothing holding it (a pump bottle with no pump on its neck, a dropper hanging in the air above its bottle): **must fix** (Physics). A part that passed the first look and the fix didn't touch: **passes** again.
- A figure with a limb too many, even where the fix you're checking is elsewhere in the picture: **must fix** (Anatomy), whenever it's seen.
- A glass dropper drawn bending where glass can't: **must fix** (Physics).
- The Lumen wordmark printed on the serum's label, its letters lighter, narrower and more open than its file's, one stroke at another angle and its drawn part a little straighter, every letter and part in place, reading as the logo at the size the photograph shows it: **passes**. The model redraws a logo, and an edit chasing a difference seen only enlarged leaves the photograph worse.
- The same word printed in another kind of letter at the size shown (light where the logo is heavy, a serif where it's a sans): **must fix** (The logo).

### Checklists

#### Every picture an image model made

Sample images, library images, mascots, character sheets, mockups, and the pictures in a page or template.

- **Anatomy:** every figure is whole and possible in its pose: no limb, hand, finger or head extra, missing or on the wrong body, also where figures overlap. A part hidden the way a real body hides it (a thumb behind what it holds, fingers curled into a fist), behind something else, or past the frame's edge is right as it is; judge each hand by whether a real hand looks like that in its pose and angle, never by how many fingers show, whatever the plan said.
- **Physics:** every object is possible and works the way its kind works: it holds together, rests on something, opens where it opens.
- **Lettering:** every line set in the picture says exactly what it was asked to say, unless the brief gives the words. Read words at the size the picture shows them, and enlarge only to confirm a fault you suspect (`metamorfiles_read_file { path: "<the picture>", region: { x: 0.3, y: 0.4, width: 0.3, height: 0.15 } }`), letter by letter, accents and punctuation included: a stray, missing or doubled mark is a fault, as a misspelled word is.
- **The logo:** a logo in a picture is the image model's redrawing of its file, so open the file, then judge the logo at the size the picture shows it. It is the logo when, at that size, the word, its kind of letters (sans or serif, heavy or light, upright or script, capitals or lowercase), each part of its mark and its colours are the file's. Enlarge only to confirm a fault you saw at that size. The redrawing passes: a letter a little lighter, narrower or more open than the file's within its kind (a heavy sans drawn a step less heavy is still a heavy sans), a curve or a stroke at another angle. A fault at that size: a letter missing, extra, merged or another letter; the word in another kind of letter (a serif for a sans, a light face for a heavy one, capitals for lowercase); a part of the mark missing, added, doubled, merged, moved or another shape; colours other than its own, beyond what the light and a print method explain; an effect laid on the artwork (an outline, a glow, a drop shadow). The logo or the name set large, tight, edge to edge, bled or cropped as the composition's idea is design and passes: the logo's clear space guides where a logo is placed, not how a design may use it, and whether that composition is the best one is the user's call.
- **Subject:** it shows the figures, objects and action its idea rests on, and nothing in it contradicts what the idea means. What was meant as distinct is distinct: each figure or object of a set is its own.
- **Character:** the brand's character is itself, as its sheet shows it, in every figure of a sheet and every picture. In a mockup or a print it stays recognisably itself: a stylisation the design means passes.
- **Medium:** the brand's own imagery (sample images, library images) is in the mode its imagery guide names for a picture like it, the one it leads with or the one that supports it; a mascot and its sheet are drawn as the character's sheet draws it, even where the brand's photographs lead. Mockups and flat prints are designed freely, in any medium.
- **Real people and events:** no generated photograph of a real person or a real event.
- **A brought-in brand's rules:** the picture keeps each rule DESIGN.md quotes from guidelines the brand was brought in with, where it applies to a piece like it.

#### Logo route

- Each word the image model drew is spelled as the brief writes it: every letter there, in order. Words set in a font are the font's own (the queue says which) and pass as the font draws them.
- A route that draws the user's own logo again holds to their file, side by side: every word and every part of its drawing as the file draws it, in its colours, nothing added; only the drawing is cleaner.

#### Final logo file

- A cleaned file is its trace: hold it over the trace, `metamorfiles_compare_trace { file: "brand/process/logo/<name>-clean.svg", against: "brand/process/logo/<name>.svg" }`. A part lost or added, or a part redesigned (a shape that changes what the drawing shows), is a must fix; the cleaning (truer edges, straighter stems, even strokes, letters on their shared lines) passes.

#### Mockup

- The picture checks above.
- The logo passes **The logo** above, applied the way the shot means it: perspective and the logo turning with its object; the scene's light, shadows, glare and reflections; its surface's curves, folds and creases; cut by the frame or covered by a hand or an object; its method's look (thread and stitches, ink in the fibre, one-colour relief, detail the method can't hold); wear on a used object. Stretched or squashed beyond what its surface's shape explains is a fault.
- What is printed is part of the object: it lies in its surface's plane and turns with it, in the photograph's light, made the way the shot names its method: embroidery shows its stitched thread, a print is ink in the surface, a sign a built object. It is judged as the logo is, at the size the picture shows it: a print that takes the surface's light and follows its shape where the shape is plain (a band's edges, a fold) passes, however little it turns, since the camera's angle sets how much. A print in another plane or light than its surface, or made another way than the shot names, is a fault.

#### Flat design

A print or a face the image model drew flat, that a mockup's photograph will be made from.

- The picture checks above.
- The logo passes **The logo** above, at the size the flat shows it, neither stretched nor squashed.
- It reads as the print it's for: whole, and nothing that matters cut by the trim or the die-cut.

#### DESIGN.md section

- It reads as the brand's guideline, for whoever designs with the brand: what the brand is and what its look leaves out, in the present tense and the brand's own words. The logo's own rules (its grounds, its clear space, what never changes) and which text reads on which colour are the brand, and stay. How much of a colour a piece uses, the case and size of its lines and where things sit are left to each piece, unless the brand was brought in with guidelines of its own that set them: a sentence that sets them is fixed by saying what the colour or face is instead.
- Every sentence is true of the brand as the kit has it: what it says of the logo, the colours, the type and the pictures holds for its tokens, the logo files, the character's sheet and the brand's own imagery, and each fact about the business is one the brief or a source gives; Voice's example lines show how the brand sounds, and what they say isn't held as a fact. A picture that fails its own checklist is that picture's fix, never the sentence's.

#### Page or template

- Something clearly leads and the rest follow in order, or the layout's idea is an equal set (a comparison, a list) built as one: nothing competes by accident.
- Levels of text step clearly apart in size or weight; type set as the picture is design.
- Elements share alignment lines and the margins match; a break that is the composition's idea (a cutout off the frame, type over the picture) is design.
- A photograph's subject reads in each format's crop: cut only where the composition means it.
- No check errors left. Text a reader needs (a headline, a name, a date, a call to action) is whole and readable: nothing they need is cut by its box or the frame, hidden, or run into other text by accident. Type cropped, bled or overlapped as part of the composition is design and passes.
- DESIGN.md's fonts in the layout; the brand's real logo file, unaltered, on a ground DESIGN.md allows.
- Every claim, price and fact comes from the brief, the brand, the data or a source read for it.
- Another party's mark is its real file, unaltered and no larger than the brand's logo; another party's image carries the credit its licence asks for.
- Its pictures pass the picture checks.
- It keeps each rule DESIGN.md quotes from guidelines the brand was brought in with, where it applies to a piece like it.
- A template passes these with its own defaults, in every format it declares.
