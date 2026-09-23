---
name: metamorfiles-review
description: Use before delivering a new or changed Metamorfiles template, page or repurposed set, again after any layout change to one, or when the user asks for a design review. Gets an independent review of the renders against brand/DESIGN.md, with fixes, from a reviewer that didn't make the design.
---

# Independent design review

Whoever made a design is the worst judge of it. The review looks only at the rendered images, the check findings and `brand/DESIGN.md`, never at your reasoning.

## When

- Before you deliver a new template, page or repurposed set.
- **Again after any layout change**, even a small one after a review said ship: moving or resizing anything, a new format, a different image or crop, a structural fix, or the user's own change you build on. A reviewed design that then changes is an unreviewed design. Only copy changes that fit their `maxLength` in a layout the review already saw skip it.

## Run it

1. Finish your own loop first: every `metamorfiles_render_preview` check error fixed.
2. Hand the review to a reviewer that didn't make the design, and wait for its verdict in the same turn:
   - **Claude Code, Cursor or Gemini CLI:** use the `design-reviewer` agent from the Metamorfiles plugin. In Claude Code, run it in the foreground, never in the background: the delivery waits for the verdict, and a background review arrives after you have already answered, splitting the handover across turns.
   - **ChatGPT desktop app or Codex CLI:** spawn a subagent with the rubric below as its instructions, in a read-only sandbox. Their plugins can't include agents, but they delegate to a subagent when a skill asks.
   - **Anywhere else:** do the review yourself as a separate pass. Judge only the images, the findings and DESIGN.md.
3. Give the reviewer only this: the project path, the template id or page id, the formats, and the user's brief in one sentence. Don't explain your design choices.
4. Fix every issue the reviewer marks **must fix** in the template or page itself, with `metamorfiles_write_file` and a `note` such as "Review fixes: phone pinned to the bottom". It is a new version of the same item, never a copy. Render again, and review again if anything structural changed.
5. Deliver once: the control panel link first, then what the review changed in a line, and one question. The user doesn't need the review's list.

## Rubric

The reviewer works like this:

1. Call `metamorfiles_get_project` for the project, then `metamorfiles_read_file` `brand/DESIGN.md`.
2. Call `metamorfiles_render_preview` for the template in every format it declares. For a page, `metamorfiles_read_file` its `page.json` and preview the page (`page`, `variant`) in every format for its two riskiest variants: the longest copy, the busiest image. Read the check findings in each result.
3. Judge each image on:
   1. **Checks:** no check errors left. Every remaining warning is a deliberate choice.
   2. **Brand:**
      - only DESIGN.md colors and fonts, used as its Colors and Components prose says (text on a surface in its on- color or a component's pair);
      - the action color used as the brand's rules say (usually one per image);
      - copy that holds against the Voice chart in DESIGN.md: it could sit in the Do column, and none of it reads like a Don't. No claim, price or fact that isn't in the brief, the brand or the data.
      - no AI copy tells the brand never uses itself: "Elevate", "Seamless", "Unleash", "Next-Gen", "Discover", and no invented figure — uptimes, percentages, response times, counts.
   3. **Logo:**
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
      - subjects (faces, products) not cut off;
      - crops look intentional, and nothing is stretched or soft;
      - text over photos sits on a calm area or a scrim.
   8. **Legibility:** the headline still reads at phone-feed size (about 360 px wide).
   9. **Formats:** every format looks designed for its size. Landscape isn't a shrunken portrait, and the formats read as one family.
4. Never change files. Report only.
5. Reply with a verdict (**ship** or **fix first**), then at most 10 issues, most important first. For each: **must fix** or **suggestion**, the format and the element, what's wrong, and the concrete fix, using DESIGN.md tokens (for example "use `--brand-on-muted` for the product name").
