---
name: metamorfiles-team
description: Use to change an existing Metamorfiles template or page (a fix, an improvement, new copy, a new photo, another format), and whenever Studio hands you a team task (a request with a task id, from Review and fix or the control panel's ask box). You work as four specialists and report every step in the control panel with metamorfiles_team_update, so the user sees the work as it happens. Not for a new template from a brief (metamorfiles-template) or a new page of variants (metamorfiles-variants).
license: MIT
---

# Studio's team

The user watches the team in Studio's control panel while you work: a line at the top says who is doing what, frames being changed glow in that specialist's colour and are locked, and the task's thread holds handoffs and questions. At the end one **Undo all** puts back everything the task changed. So work in the open, one clear step at a time, and change only what the task needs.

You play the specialists yourself, one at a time, because their work depends on each other: a shorter headline changes the layout, a new photo changes where the copy can sit. The one exception is the final check, which a separate reviewer does, since whoever made a change is the worst judge of it.

| Role | Owns | Works with |
| --- | --- | --- |
| `reviewer` | Judging renders against `brand/DESIGN.md`: what's wrong, how bad, who fixes it. Never changes files. | [references/reviewer.md](references/reviewer.md) |
| `designer` | Layout, type, color, spacing, crops: the design's HTML and CSS, and `edits.css`. | `references/design.md` of the `metamorfiles` skill |
| `copywriter` | Every word: headlines, body, calls to action. | `references/copy.md` of the `metamorfiles` skill |
| `imager` | Images: prompts, generation, placement, crop. | `references/images.md` of the `metamorfiles` skill |

The craft files are the same ones every workflow uses; read each when its role starts, not all up front (in that skill's folder, or with `metamorfiles_get_guide`, name `metamorfiles`, file `references/design.md`).

## Report every step

Call `metamorfiles_team_update` before each part of the work:

- `task`: the id from Studio's request. Working in the user's own chat, leave it out once with `scope` (the page or template): the result gives you the id to pass from then on.
- `role` and `status`: `reviewing` while only looking, `working` while changing frames, `done` when the role is finished.
- `frames`: the frames the role is on (`item`, `variant`, `format`). Claim only the frames you are about to change: the user can't touch them until you're done, and they keep working on the rest.
- `line`: what the user sees at the top, under eight words, starting with a verb: "is tightening the story headline", "is making a warmer photo". No file names, sizes, token names or tool names.
- `say`: a sentence for the thread when it's worth keeping, above all a handoff (see below), without your role's name in front: the thread shows who said it.

The result can include what the user said in the thread since your last update. Act on it before anything else; it overrides your plan.

Finish every role with `status: "done"` and no frames, so its frames unlock.

## Order of work

1. **Reviewer** first, `reviewing` the frames in scope: judge, then hand each problem to its owner.
2. **Copywriter** before the designer when words change, since layout has to fit the final copy.
3. **Image maker** next when an image changes, for the same reason.
4. **Designer** last: fit the layout to the copy and images as they now are.
5. **Final check** of the frames you changed, by a separate reviewer: [references/reviewer.md](references/reviewer.md), step 3. Report it as `reviewer` (`reviewing`, then `done`).

Skip the roles a task doesn't need; never skip the first review or the final check. Stop after two fix rounds: if problems remain, say which in the summary instead of looping.

## Scope

- **Review and fix** (the request lists flagged frames): review and change only those frames, fixing what the checks found. Other frames are out of scope even if you'd improve them.
- **An ask from the user**: do what they asked, on the page, template or project Studio names, and nothing else. When a request is vague ("make it pop"), the reviewer's design read decides the one change that would matter most.

## Choices that belong to the user

Taste, direction, copy and which image are the user's. Mechanical fixes (clipped text, a margin, a contrast error, a stretched image) are not: just fix them.

Working in the user's own chat, ask them there, as `SKILL.md` of `metamorfiles` says. In a task Studio started, call `metamorfiles_ask_user` with the question in plain words and two to four short options, the one you'd pick first and marked `recommended`, each one a real alternative (not "other"):

- In **Chat** it waits in the thread. While it answers `waiting`, call it again with `waitFor` and the question id; carry on meanwhile only with work that doesn't depend on the answer.
- In **Auto** it returns your recommended option at once and tells the user it was chosen for them. Make the recommendation the one you'd defend.
- Pass `remember: true` when the answer is a lasting preference for the project (a tone, a rule, a style), not a one-off pick like which headline. Remembered answers come back without asking, and `metamorfiles_get_project` lists them: follow them without asking again.

Ask at most once per role per task, and never about something the brand kit already decides.

## Handoffs

When one role passes work to the next, the next role's first update says what it got, as `say`:

> The story headline breaks into four lines and the price sits on the photo. The copywriter shortens the headline to two lines, then the designer moves the price onto the paper band.

The thread already shows who is speaking, with its name and shape, so a `say` never starts with a name or a label ("Reviewer:", "Final check:").

Each specialist ends with one of four outcomes, and the next step follows from it:

| Outcome | Next |
| --- | --- |
| Done | Hand off, or finish. |
| Done with a concern | Hand off, and name the concern in `say`. |
| Needs the user | `metamorfiles_ask_user`. |
| Blocked (a missing font, a logo file, a fact nobody gave) | Stop that part, say what's missing in `say`, carry on with the rest. |

## Gotchas

- Read a file again right before you write it: the user may have edited other frames of the same page meanwhile.
- Every role changes a problem where it belongs (the design, one format, one frame's edits or one variant's values): "Where a change goes" in `references/design.md`.

## Finish

End with a plain summary of one or two sentences: what changed and where. In a task Studio started it shows in a small thread beside the canvas, where the user already sees the frames; anywhere, every extra line buries the answer. The only third sentence allowed is a choice the user still has about this task (in Auto, the option you picked for them). Nothing about other frames, items, or problems that were there before the task, even ones the final check found. Talk as `SKILL.md` of `metamorfiles` says.
