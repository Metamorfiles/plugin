---
name: metamorfiles-review
description: Use before delivering a new or changed Metamorfiles template, page or repurposed set, again after any layout change to one, or when the user asks for a design review. Gets an independent review of the renders against brand/DESIGN.md, with fixes, from a reviewer that didn't make the design.
license: MIT
---

# Independent design review

Whoever made a design is the worst judge of it. The review looks only at the rendered images, the check findings and `brand/DESIGN.md`, never at your reasoning.

## When

- Once, after the last change and before you deliver a new template, page or repurposed set.
- **Again after any layout change**, even a small one after a review said ship: moving or resizing anything, a new format, a different image or crop, a structural fix, or the user's own change you build on. A reviewed design that then changes is an unreviewed design. Only a copy change that keeps the same line breaks, in a layout the review already saw, skips it.

## Run it

1. Finish your own loop first: every `metamorfiles_render_preview` check error fixed.
2. Hand the review to a reviewer that didn't make the design, and wait for its verdict in the same turn:
   - **Apps that load the plugin's agents** (Claude Code, Cursor, GitHub Copilot, and OpenCode or Antigravity after `metamorfiles setup`): use the `design-reviewer` agent, in the foreground: in Claude Code, call the Agent tool with `run_in_background: false`, since it starts agents in the background otherwise. The delivery waits for the verdict; a background review arrives after you have already answered, splitting the handover across turns.
   - **ChatGPT desktop app or Codex:** their plugins can't include agents, so spawn a subagent whose instructions are exactly what `metamorfiles_get_guide` returns for name `design-reviewer`: the same agent, word for word.
   - **Anywhere else:** do the review yourself as a separate pass. Judge only the images, the findings and DESIGN.md.
3. Give the reviewer only this: the project path, the template id or page id, the frames to review (the ones that changed; none for a whole new template or page), and the user's brief in one sentence. Don't explain your design choices.
4. Fix every issue the reviewer marks **must fix** in the template or page itself, with `metamorfiles_write_file` and a `note` such as "Review fixes: phone pinned to the bottom". It is a new version of the same item, never a copy. Render again, and review again if anything structural changed.
5. Deliver once, as `SKILL.md` of `metamorfiles` says: what the review changed in a line, and one question. The user doesn't need the review's list.

## Rubric

The reviewer works like this:

1. Call `metamorfiles_get_project` for the project, then `metamorfiles_read_file` `brand/DESIGN.md`.
2. Review exactly what you were given, with `metamorfiles_render_preview`: the frames you were named (item, variant, format) and nothing else, and judge only what's in them, not the item's other frames, its template or its history. Given a whole template, preview it in every format it declares; given a whole page, `metamorfiles_read_file` its `page.json` and preview it (`page`, `variant`) in every format for its two riskiest variants: the longest copy, the busiest image.
3. Look at each image before you read its check findings, so the findings don't decide what you see. Start with one line on what it is, who it's for and what it has to do. Then read the findings and merge: a finding you also saw is one problem; one you missed is usually real; a warning the design chose on purpose isn't a problem. Judge each image on:
   1. **Checks:** no check errors left. Every remaining warning is a deliberate choice.
   2. **Brand:**
      - it belongs to this brand: another brand couldn't post it unchanged;
      - only DESIGN.md colors and fonts, used as its Colors and Components prose says (text on a surface in its on- color or a component's pair);
      - the action color used as the brand's rules say (usually one per image);
      - copy that holds against the Voice chart in DESIGN.md: it could sit in the Do column, and none of it reads like a Don't. No claim, price or fact that isn't in the brief, the brand or the data.
      - none of the marks of generated copy listed in `references/copy.md` of the `metamorfiles` skill (`metamorfiles_get_guide`, name `metamorfiles`, file `references/copy.md`), and no invented figure.
   3. **Logo:**
      - where the layout has a logo, the real file renders there, never the name typed out or an initial;
      - only a file declared in DESIGN.md `logos`, on the background it's made for, or on a plate of that background;
      - never recolored, redrawn, stretched, cropped or given effects: compare it with the file in `brand/logos/`;
      - clear space as the Logo section says;
      - a generated variant only if its source says the user approved it.
   4. **Hierarchy:** one focal point, and a clear reading order (headline, then support, then call to action or price). Type follows the roles in DESIGN.md.
   5. **Layout:** edges aligned to a shared grid, equal margins, consistent spacing, and nothing crowding the safe margin. Story formats keep platform UI zones clear.
   6. **Text:**
      - balanced headline breaks, with no single-word last line;
      - the brand name never split across lines;
      - nothing truncated.
   7. **Images:**
      - a product shown is the real one, from its photo, never a generated stand-in;
      - subjects (faces, products) not cut off;
      - crops look intentional, and nothing is stretched or soft;
      - text over photos sits on a calm area or a scrim.
   8. **Legibility:** the headline still reads at phone-feed size (about 360 px wide).
   9. **Formats:** every format looks designed for its size. Landscape isn't a shrunken portrait, and the formats read as one family.
4. Never change files. Report only.
5. Reply with a verdict (**ship** or **fix first**), then at most 10 issues, most important first. For each: **must fix** (anything broken, off brand, hard to read or untrue) or **suggestion** (the rest), the format and the element, what's wrong, and the concrete fix, using DESIGN.md tokens (for example "use `--brand-on-muted` for the product name"). The verdict is **ship** when nothing is must fix.
