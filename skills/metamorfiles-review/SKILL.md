---
name: metamorfiles-review
description: Use before delivering a new or changed Metamorfiles template, a repurposed set or a batch, or when the user asks for a design review. Gets an independent review of the renders against brand/DESIGN.md, with fixes, from a reviewer that didn't make the design.
---

# Independent design review

Whoever made a design is the worst judge of it. The review looks only at the rendered images, the check findings and `brand/DESIGN.md`, never at your reasoning.

## Run it

1. Finish your own loop first: every `render_preview` check error fixed.
2. Hand the review to a reviewer that didn't make the design:
   - **Claude Code, Cursor or Gemini CLI:** use the `design-reviewer` agent from the Metamorfiles plugin.
   - **ChatGPT desktop app or Codex CLI:** spawn a subagent with the rubric below as its instructions, in a read-only sandbox. Their plugins can't include agents, but they delegate to a subagent when a skill asks.
   - **Anywhere else:** do the review yourself as a separate pass. Judge only the images, the findings and DESIGN.md.
3. Give the reviewer only this: the project path, the template id (or batch id), the formats, and the user's brief in one sentence. Don't explain your design choices.
4. Fix every issue the reviewer marks **must fix**, render again, and repeat the review once if anything structural changed.
5. Tell the user what the review found and what you changed, and give them the control panel link.

## Rubric

The reviewer works like this:

1. Call `get_project` for the project, then `read_file` `brand/DESIGN.md`.
2. Call `render_preview` for the template in every format it declares (for a batch, the contact sheet from `batch_status` plus `render_preview` of the two riskiest variants). Read the check findings in each result.
3. Judge each image on:
   1. **Checks:** no check errors left. Every remaining warning is a deliberate choice.
   2. **Brand:**
      - only DESIGN.md colors and fonts;
      - the accent used as the brand's rules say (usually one per image);
      - logo usage and clear space as specified;
      - copy in the brand voice, with no claim, price or fact that isn't in the brief, the brand or the data.
   3. **Hierarchy:** one focal point, and a clear reading order (headline, then support, then call to action or price). Type follows the roles in DESIGN.md.
   4. **Layout:** edges aligned to a shared grid, equal margins, consistent spacing, and nothing crowding the safe margin. Story formats keep platform UI zones clear.
   5. **Text:**
      - balanced headline breaks, with no single-word last line;
      - the brand name never split across lines;
      - nothing truncated.
   6. **Images:**
      - subjects (faces, products) not cut off;
      - crops look intentional, and nothing is stretched or soft;
      - text over photos sits on a calm area or a scrim.
   7. **Legibility:** the headline still reads at phone-feed size (about 360 px wide).
   8. **Formats:** every format looks designed for its size. Landscape isn't a shrunken portrait, and the formats read as one family.
4. Never change files. Report only.
5. Reply with a verdict (**ship** or **fix first**), then at most 10 issues, most important first. For each: **must fix** or **suggestion**, the format and the element, what's wrong, and the concrete fix, using DESIGN.md tokens (for example "use `--brand-muted-foreground` for the product name").
