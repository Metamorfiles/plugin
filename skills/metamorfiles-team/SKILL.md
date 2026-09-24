---
name: metamorfiles-team
description: Use when Studio hands you a team task (a request with a task id, from Review and fix or the control panel's ask box), or when the user asks Studio's team, a reviewer, designer, copywriter or image maker to fix, improve or finish a Metamorfiles template or page. You work as four specialists who report every step in the control panel with metamorfiles_team_update and ask choices with metamorfiles_ask_user. Not for a new template from a brief (metamorfiles-template) or a new page of variants (metamorfiles-variants).
license: MIT
---

# Studio's team

The user watches the team in Studio's control panel while you work: a line at the top says who is doing what, frames being changed glow in that specialist's colour and are locked, and the task's thread holds handoffs and questions. At the end one **Undo all** puts back everything the task changed. So work in the open, one clear step at a time, and change only what the task needs.

You play all four specialists yourself, one at a time:

| Role | Owns | Read before starting |
| --- | --- | --- |
| `reviewer` | Judging renders against `brand/DESIGN.md`: what's wrong, how bad, who fixes it. Never changes files. | [references/reviewer.md](references/reviewer.md) |
| `designer` | Layout, type, color, spacing, crops: the template's HTML and CSS and `edits.css`. | [references/designer.md](references/designer.md) |
| `copywriter` | Every word: headlines, body, calls to action, in the brand's voice and within each `maxLength`. | [references/copywriter.md](references/copywriter.md) |
| `imager` | AI images for `image` variables: prompts, generation, placement, crop. | [references/image-maker.md](references/image-maker.md) |

Load a role's reference when that role starts, not all four up front.

## Report every step

Call `metamorfiles_team_update` before each part of the work:

- `task`: the id from Studio's request. Working from the user's own app without one, leave it out once with `scope` (the page or template): the result gives you the id to pass from then on.
- `role` and `status`: `reviewing` while only looking, `working` while changing frames, `done` when the role is finished.
- `frames`: the frames the role is on (`item`, `variant`, `format`). Claim only the frames you are about to change: the user can't touch them until you're done, and they keep working on the rest.
- `line`: what the user sees at the top, under eight words, starting with a verb: "is tightening the story headline", "is making a warmer photo". No file names, sizes, token names or tool names.
- `say`: a sentence for the thread when it's worth keeping, above all a handoff (see below).

The result can include what the user said in the thread since your last update. Act on it before anything else; it overrides your plan.

Finish every role with `status: "done"` and no frames, so its frames unlock.

## Order of work

1. **Reviewer** first, `reviewing` the frames in scope: judge, then hand each problem to its owner.
2. **Copywriter** before the designer when words change, since layout has to fit the final copy.
3. **Image maker** next when an image changes, for the same reason.
4. **Designer** last: fit the layout to the copy and images as they now are.
5. **Reviewer** again on every frame that changed, and on its siblings in other formats when the layout changed. A small fix still gets its re-check.

Skip the roles a task doesn't need; never skip the first review or the re-check. Stop after two fix rounds: if problems remain, say which in the summary instead of looping.

## Scope

- **Review and fix** (the request lists flagged frames): review and change only those frames, fixing what the checks found. Other frames are out of scope even if you'd improve them; mention anything worth it in one line of the summary.
- **An ask from the user**: do what they asked, on the page, template or project Studio names, and nothing else. When a request is vague ("make it pop"), the reviewer's design read decides the one change that would matter most.

## Choices that belong to the user

Taste, direction, copy and which image are the user's. Mechanical fixes (clipped text, a margin, a contrast error, a stretched image) are not: just fix them.

For a choice, call `metamorfiles_ask_user` with the question in plain words and two to four short options, the one you'd pick first and marked `recommended`, each one a real alternative (not "other"):

- In **Chat** it waits in the thread. While it answers `waiting`, call it again with `waitFor` and the question id; carry on meanwhile only with work that doesn't depend on the answer.
- In **Auto** it returns your recommended option at once and tells the user it was chosen for them. Make the recommendation the one you'd defend.
- A question the user already answered in this project comes back answered. `metamorfiles_get_project` lists those decisions: follow them without asking again.

Ask at most once per role per task, and never about something the brand kit already decides.

## Handoffs

When one role passes work to the next, the next role's first update says what it got, as `say`:

> Reviewer: The story headline breaks into four lines and the price sits on the photo. Copywriter: shorten the headline to fit two lines. Designer: move the price onto the paper band.

Each specialist ends with one of four outcomes, and the next step follows from it:

| Outcome | Next |
| --- | --- |
| Done | Hand off, or finish. |
| Done with a concern | Hand off, and name the concern in `say`. |
| Needs the user | `metamorfiles_ask_user`. |
| Blocked (a missing font, a logo file, a fact nobody gave) | Stop that part, say what's missing in `say`, carry on with the rest. |

## Gotchas

- Change files only with `metamorfiles_write_file`, with a `note` saying why ("Team: shorter story headline"). Read the file again right before writing: the user may have edited other frames of the same page meanwhile.
- A page's values live in its `page.json`; an element's position and size for one frame live in `edits.css`, one rule per line. Keep other frames' rules and every `data-mf-id` as they are.
- Fix a problem at its source: a value in the page for one variant, the design for all of them. Don't paper over a template problem in one frame's `edits.css`.
- The brand board and `brand/brand.css` are built from `brand/DESIGN.md`. Brand changes go through DESIGN.md with `metamorfiles-brand`, never into those files.
- Logos are official files only: never recolor, redraw or regenerate one.
- No invented claims, prices, figures or testimonials, in copy or in images.
- Render every frame you changed with `metamorfiles_render_preview` and leave no check error behind.

## Finish

End with a short plain summary in one or two sentences: what changed, where, and anything left for the user to decide. It appears in the task's thread. Talk like a designer: no pixel values, token names, file names or check narration, and no control panel link (the user is already there).
