---
name: metamorfiles-review
description: Use before delivering a new or changed Metamorfiles template, page, repurposed set or brand kit, again after any layout change to one, or when the user asks for a design review. Gets an independent review of the renders against brand/DESIGN.md, with fixes, from a reviewer that didn't make the design.
license: MIT
---

# Independent design review

Whoever made a design is the worst judge of it. The review looks only at the rendered images, the check findings and `brand/DESIGN.md`, never at your reasoning.

## When

- Once, after the last change and before you deliver a new template, page or repurposed set.
- In a new brand, at each checkpoint `metamorfiles-brand-creation` names: the logos and the sample images before the user chooses, each batch of the library and the mockups, and the whole kit.
- **Again after any layout change**, even a small one after a review said ship: moving or resizing anything, a new format, a different image or crop, a structural fix, or the user's own change you build on. A reviewed design that then changes is an unreviewed design. Only a copy change that keeps the same line breaks, in a layout the review already saw, skips it.

## Run it

1. Finish your own loop first: every `metamorfiles_render_preview` check error fixed.
2. Hand the review to a reviewer that didn't make the design, and wait for its verdict in the same turn:
   - **Apps that load the plugin's agents** (Claude Code, Cursor, GitHub Copilot, and OpenCode or Antigravity after `metamorfiles setup`): use the `design-reviewer` agent, in the foreground: in Claude Code, call the Agent tool with `run_in_background: false`, since it starts agents in the background otherwise. The delivery waits for the verdict; a background review arrives after you have already answered, splitting the handover across turns.
   - **ChatGPT desktop app or Codex:** their plugins can't include agents, so spawn a subagent whose instructions are exactly what `metamorfiles_get_guide { name: "design-reviewer" }` returns: the same agent, word for word.
   - **Anywhere else:** do the review yourself as a separate pass. Judge only the images, the findings and DESIGN.md.
3. Give the reviewer only this: the project's absolute path, the item as `templates/<id>` or `pages/<id>`, the frames to review (the ones that changed; none for a whole new template or page), the task id when there is one, and the user's brief in one sentence. Don't explain your design choices.
4. Fix every issue the reviewer marks **must fix** in the template or page itself, with `metamorfiles_write_file` and a `note` such as "Review fixes: phone pinned to the bottom". It is a new version of the same item, never a copy. Render again, and review again if anything structural changed.
5. Deliver once, as `SKILL.md` of `metamorfiles` says: what the review changed in a line, and one question. The user doesn't need the review's list.

## Rubric

The reviewer works like this:

1. Call `metamorfiles_get_project { path: "<the absolute project path you were given>" }`, then `metamorfiles_read_file { path: "brand/DESIGN.md" }`.
2. Review exactly what you were given, with `metamorfiles_render_preview { item: "pages/<id>", variant: "<id>", format: "instagram-story" }`: the frames you were named and nothing else (a brand board frame is `{ item: "templates/brand-board", format: "process-logo" }`), and judge only what's in them, not the item's other frames, its template or its history. Given a whole template, preview it in every format it declares (a carousel template as each slide role too, `variant: "cover"`, `"body"` and `"end"`), with its own defaults: they're what every new page starts from and what the user sees when they open the template, so a template that only looks right with a page's values is a **must fix**; given a whole page, read its `pages/<id>/page.json` and preview it (`item`, `variant`) in every format for its two riskiest variants: the longest copy, the busiest image.
3. Look at each image before you read its check findings, so the findings don't decide what you see. Start with one line on what it is, who it's for and what it has to do. Then read the findings and merge: a finding you also saw is one problem; one you missed is usually real; a warning the design chose on purpose isn't a problem. Judge each image on:
   1. **Checks:** no check errors left. Every remaining warning is a deliberate choice.
   2. **Brand:**
      - it belongs to this brand: another brand couldn't post it unchanged;
      - only DESIGN.md colors and fonts, used as its Colors and Components prose says (text on a surface in its on- color or a component's pair);
      - the action color used as the brand's rules say (usually one per image);
      - copy that holds against the Voice chart in DESIGN.md: it could sit in the Do column, and none of it reads like a Don't. No claim, price or fact that isn't in the brief, the brand or the data.
      - none of the marks of generated copy listed in `references/copy.md` of the `metamorfiles` skill (`metamorfiles_get_guide { name: "metamorfiles", file: "references/copy.md" }`), and no invented figure.
   3. **Logo:**
      - where the layout has a logo, the real file renders there, never the name typed out or an initial;
      - only a file declared in DESIGN.md `logos`, on the background it's made for, or on a plate of that background;
      - never recolored, redrawn, stretched, cropped or given effects: compare it with the file in `brand/logos/`;
      - nothing crowds or touches the logo, and where the brand's own guidelines set a clear space, that space;
      - a generated variant only if its source says the user approved it.
   4. **Hierarchy:** one focal point, and a clear reading order (headline, then support, then call to action or price). Type follows the roles in DESIGN.md.
   5. **Layout:** edges aligned to a shared grid, equal margins, consistent spacing, and nothing crowding the safe margin. Story formats keep platform UI zones clear.
   6. **Text:**
      - balanced headline breaks, with no single-word last line;
      - the brand name never split across lines;
      - nothing truncated.
   7. **Images:**
      - every figure has the body it should: before you look at an image with figures (people, animals, a character), write down each one's body, part by part with how many of each, from the character's body line in the brand (its folder's note in DESIGN.md, or the notes of `brand/process/logo.md` or `imagery.md`) or else from the real person or species: a loon has two wings, two legs and a beak, and no arms. Then count the parts you can see of every figure against it, and list the counts in your report. A part that isn't on the list (an arm on a bird, a third wing, a sixth finger) or that is wrong (a limb bending the wrong way, two heads) is a **must fix**, and so is anything you'd have to explain away: if you need to argue that something isn't an extra limb, the user will see one. A part hidden by the pose, another object or the image's edge is not missing: a paw behind a laptop or legs below the crop are fine, and an awkward crop is at most a suggestion;
      - no other image-model mistakes: fused fingers, limbs bending the wrong way, duplicated parts (a cup with two handles), warped objects, garbled lettering, stray figures or objects in the background;
      - a product shown is the real one, from its photo, never a generated stand-in;
      - subjects (faces, products) not cut off;
      - crops look intentional, and nothing is stretched or soft;
      - text over photos sits on a calm area or a scrim.
   8. **Legibility:** the headline still reads at phone-feed size (about 360 px wide).
   9. **Formats:** every format looks designed for its size. Landscape isn't a shrunken portrait, and the formats read as one family.
   10. **Carousels:** judge the sequence as `references/carousels.md` of the `metamorfiles` skill describes it: a cover that promises something specific, each slide giving the reader something, an end that pays off. A slide that only names a topic, one body arrangement repeated on every slide, or an end that is only the logo are **suggestions**: the sequence is the author's to weigh with the user.

   Judge what a viewer sees. Never fault by measurement something that reads well. Hold the design to the brand, not to the kit's guesses: a rule DESIGN.md's Sources marks `proposed` was supplied by whoever built the kit, so departing from it is at most a suggestion. One marked `created` is the brand's own, chosen with the user for a new brand.

   The brand board (`templates/brand-board`, one frame per part) is drawn by Studio from DESIGN.md and the brand's files, so its layout isn't the author's. On it, judge whether DESIGN.md and the files say the brand right; report what is wrong in how the board draws it as **Studio's**, never as a must fix for the author. On a new brand's steps (its `process-` frames), which option to take is the user's choice and never judged, and the brief and the directions aren't reviewed: they are the user's taste. The work in each option is the author's, and is judged when you are named its frame. On `process-logo`, read every letter of each logo against the brand's name in `brand/process/brief.md`, accents included; a logo whose letters, mark or layout are taken from one of the direction's references (`brand/process/references/`) is a **must fix**; the small mark on each card (its profile picture and the 32 and 16 px sizes) must be the very mark that logo shows, never another drawing of it; it must still read at 32 and 16 px, and the reversed and one-colour versions on their grounds. Judge only each seed's current take: its earlier takes, small and dimmed under it, are there for the user to ask back. On `process-imagery`, and on an imagery folder's frame, every image-model mistake (Images above) is a **must fix**, and so is an image plainly in another medium from the rest (a rendered 3D object among flat drawings, a photograph among illustrations). Everything else about how they belong together (an exact tint, a motif, how many accents, the angle a thing is drawn from, a detail the style block didn't expect) is a **suggestion**: the style block describes a look, it isn't a list of rules to enforce, and the user judges taste when they choose. Any failure on a logo card is a **must fix**. A mockup (a `mockup-<id>` frame of the brand board) is a photograph the image model made of the brand on a real object, and the author's. Its logo must be the brand's own: compare it with the logo file named in DESIGN.md `logos`, letter by letter, accents included, at the size a viewer sees it; a different logo is a **must fix**: a letter wrong, missing or added, a different mark, or the wrong colours. How big the logo sits, its spacing and the proportions between its parts drift a little in any photograph and are **suggestions**, never measured as ratios; so are treatments the object gives any print (a sticker's die-cut outline, embroidery, an emboss, a fold in the fabric). A fix on a finished photograph is an edit that redraws all of it, so ask for one only for a must fix; and so is any word that is neither the brand's nor the brief's (the product names it gives or lists as proposed count) or that is garbled small print, an invented claim, price or figure. An object that couldn't exist is a **must fix**: it must sit, open and hold its contents the way the real one does (a lid where it opens, an opened pack showing its real contents, nothing floating that isn't meant to). Judge the rest as packaging photography a design publication would feature, as **suggestions**: the object designed in full, the way real packaging in its category is (the brand's imagery, colours and type at work, a hierarchy that reads from a shelf, never the logo alone on a flat field where the object is printed all over), and the light, set and materials of a considered studio or styled shot.

4. Never change files. Report only.
5. Record your verdict before you reply, every time, whatever you reviewed: `metamorfiles_review_verdict { item: "pages/<id>", verdict: "fix first", summary: "<one plain line>", must: ["<where, what's wrong, the fix>"], task: "<id>" }`. The keys are exactly these: `item` (`pages/<id>` or `templates/<id>`), or `frames: ["process-logo"]` for the brand board's frames by id; `verdict`, `"ship"` or `"fix first"`; `summary`, the line for the user's thread (what you checked when it ships, what you found when it doesn't); `must`, each must fix, only what the author can fix (what is **Studio's** is never one); `task`, when you were given one. Studio holds the work to it: a new brand's logos and sample images aren't asked, and no task ends, until what it changed passes as it is now.
6. Reply with a verdict (**ship** or **fix first**), then at most 10 issues, most important first. For each: **must fix** (anything a viewer would see is broken, off brand, hard to read or untrue; on an image the model made, only what is objectively wrong, as above) or **suggestion** (the rest, including every matter of taste), or **Studio's** on a brand board, the format and the element, what's wrong, and the concrete fix, using DESIGN.md tokens (for example "use `--brand-on-muted` for the product name"). The verdict is **ship** when nothing is must fix.
