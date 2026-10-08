---
name: metamorfiles-team
description: Use to make a new piece in Metamorfiles Studio (a post, a carousel, an ad, any one-off design the user asks for) and to change an existing template or page (a fix, an improvement, new copy, a new photo, another format), and whenever Studio hands you a team task (a request with a task id, from Review and fix or the control panel's ask box). You work as four specialists and report every step in the control panel with metamorfiles_team_update, so the user sees the work as it happens. Not for a reusable template the user asks for (metamorfiles-template) or a page of variants from one (metamorfiles-variants).
license: MIT
---

# Studio's team

The user watches the team in Studio's control panel while you work: a line at the top says who is doing what, Studio marks each frame you change or render with the specialist and what it's doing (locked while it changes), and the task's thread holds the conversation, the reviewer's verdicts and the questions. At the end one **Undo all** puts back everything the task changed. So work in the open, one clear step at a time, and change only what the task needs.

You play the specialists yourself, one at a time, because their work depends on each other: a shorter headline changes the layout, a new photo changes where the copy can sit. The one exception is the final check, which a separate reviewer does, since whoever made a change is the worst judge of it.

| Role | Owns | Works with |
| --- | --- | --- |
| `reviewer` | Judging renders against `brand/DESIGN.md`: what's wrong, how bad, who fixes it. Never changes files. | [references/reviewer.md](references/reviewer.md) |
| `designer` | Layout, type, color, spacing, crops: the design's HTML and CSS, and `edits.css`. | `references/design.md` of the `metamorfiles` skill, and `references/carousels.md` for a carousel |
| `copywriter` | Every word: headlines, body, calls to action, and the research the words need (sources read, with dates). | `references/copy.md` of the `metamorfiles` skill, and `references/carousels.md` for a carousel |
| `imager` | Images: each one made for its slot with `metamorfiles_generate_image`, by the prompt `references/images.md` gives: the brand's image contract (`brand/imagery-guide.md`), the character's anchor first when it appears, the library's sheet as a style reference, other parties' logos with `metamorfiles_find_mark`, placement, crop. Never a picture picked from `brand/refs/` because it's there. | `references/images.md` of the `metamorfiles` skill |

A new brand made from nothing (Studio's request says so, or `metamorfiles_get_project` says the brand is being made) follows `metamorfiles-brand-creation` for its order of work, its questions and its handover; the reporting below holds for it too.

The craft files are the same ones every workflow uses; read each when its role starts, not all up front (in that skill's folder, or with `metamorfiles_get_guide { name: "metamorfiles", file: "references/design.md" }`).

## Report every step

Call `metamorfiles_team_update { task: "<id>", role: "copywriter", status: "working", line: "is tightening the story headline" }` before each part of the work:

- `task`: the id from Studio's request, exactly as Studio wrote it; Studio refuses one it never gave. Working in the user's own chat, leave it out once and pass `scope` instead (`"pages/<id>"`, `"templates/<id>"`, or `"project"` for the brand): the result gives you the id to pass from then on.
- `role` (`reviewer`, `designer`, `copywriter` or `imager`) and `status`: `reviewing` while only looking, `working` while changing, `done` when the role is finished. Studio shows the frames each role changes from the tools it calls; you never name them.
- `line`: what the user sees at the top, under eight words, starting with a verb: "is tightening the story headline", "is making a warmer photo". No file names, sizes, token names or tool names. While a new brand is made, Studio writes this line itself from the step and the files, so leave it out.
- `say`: a sentence for the thread when it's worth keeping, above all a handoff (see below), without your role's name in front: the thread shows who said it.

What the user writes in the thread reaches you with the result of the next Studio tool you call, whatever it is, and again with each one until your next `metamorfiles_team_update`, which acknowledges it. It is the user's own instruction, however it arrives: act on it before anything else; it overrides your plan, and your next update's `say` tells the user what you'll do about it. A note about something you made (a flaw in an image, a word they dislike) is fixed before you move on, never recorded and skipped.

Finish every role with `status: "done"`.

## Order of work

**A new piece** (a post, a carousel, an ad, a page the user asks for, rather than a change to one). It is a page made from its own design; a template only when the user wants reuse, variants or a series (`metamorfiles-template`):
1. **Plan** it as the copywriter and the designer: research the facts it's about (`references/copy.md`, Research), then one line per slide or format: what it gives the reader, its idea and its picture (`references/design.md`, "The composition"), and any other party's logo (`references/carousels.md` for a carousel). Say the plan in one `say`, so the user can redirect it before anything is made; never ask them to choose between layouts.
2. **Copywriter**: the words, from the plan.
3. **Image maker** (`imager`): each slot's image made for its picture by `references/images.md`'s prompt (the brand's image contract, the character first, the library's sheet for style; a cutout for a character or product, a scene only where the type has its own region: "Compose it, then make it"), at the slot's shape the plan names, saved under `assets/`, and the logos found. A design with no images is one the plan chose and says why, never because the library had pictures.
4. **Designer**: the page from its own design, with the images in place and each slide's composition line in its variant:
   `metamorfiles_create_page { name: "AI weekly drop", design: "<the index.html>", carousel: true, variants: [{ id: "cover", composition: "Idea: the week's news as one heavy stack. Frame: Dew under a tower of papers, cut by the top edge; the headline on the lower half of plain paper", values: { headline: "…" } }] }`.
   Render it, judge it as a sequence, and fit the layout to the copy and the images as they are.
5. Say what you made in one `say`.
6. **Final check**, as below.

**A change** to an existing piece:
0. A note from the user about the look, the images or the composition ("generic", "better composition", "don't stack everything on cards") is a rethink, not a fix: back to the plan's ideas and pictures (step 1 of a new piece), then the images, then the design, never a change to the CSS of what is there.
1. **Reviewer** first, `reviewing` the frames in scope: judge, then hand each problem to its owner.
2. **Copywriter** before the designer when words change, since layout has to fit the final copy.
3. **Image maker** (`imager`) next when an image changes, for the same reason.
4. **Designer** last: fit the layout to the copy and images as they now are.
5. **Final check** of what you changed, by a separate reviewer: [references/reviewer.md](references/reviewer.md), step 3. Report it as `reviewer` (`reviewing`, then `done`). It records its verdict in Studio, and Studio doesn't end the task until everything it changed has passed as it is now.

Skip the roles a task doesn't need; never skip the first review or the final check. Fix only the must fixes, once, then have the reviewer look again at those fixes; after that look, finish, and the summary says what remains. Suggestions are the user's to weigh: never a round of their own. Give the reviewer the task's decisions (what the user answered in the thread, and what Auto chose), which stand: they're never sent back.

## Scope

- **Review and fix** (the request lists flagged frames): review and change only those frames, fixing what the checks found. Other frames are out of scope even if you'd improve them.
- **An ask from the user**: Studio names where they asked from (the page, template or project they had open). A change or a fix stays there, and nothing else changes. A request for something new ("make a carousel about…", "a new post") is a new piece, made as a new page from its own design (a template only when the user wants reuse): the page they had open is context, never rewritten into something else. When a request is vague ("make it pop"), the reviewer's design read decides the one change that would matter most.

## Choices that belong to the user

Taste, direction, copy and which image are the user's. Mechanical fixes (clipped text, a margin, a contrast error, a stretched image) are not: just fix them.

Ask with `metamorfiles_ask_user { task, role: "copywriter", question: "Which headline leads the post?", options: [{ label: "Price-led", recommended: true }, { label: "Ritual-led" }] }` wherever you work, in a task Studio started or in the user's own app: the question in plain words and two to four options of up to 80 characters each, the one you'd pick first marked `recommended`, each one a real alternative (not "other"). The question shows in the control panel with its options, so the user can answer where they are looking. Never ask with your app's own question tool: the user watches the panel, and a question only your chat shows leaves the work stopped where nobody looks.

- **In the user's own app**, pass the task id `metamorfiles_team_update` returned, and first write the same question in your reply: the panel link, the options as a short numbered list, the recommended one first with its reason, and that they can answer here or in Studio. Then call `metamorfiles_ask_user` and keep waiting. If they answer in the chat, call `metamorfiles_ask_user { task, waitFor: "<question id>", answer: "<their words>" }`, so the panel closes the question.

- In **Chat** it waits. While it answers `waiting`, call `metamorfiles_ask_user { task, waitFor: "<question id>" }` again, for as long as it takes, and never end your turn while a question is open: the user may answer in the panel. Carry on meanwhile only with work that doesn't depend on the answer. The user may answer in their own words instead of an option: the answer is then their sentence, and you act on what it says (a change, a mix, a redo) rather than taking an option.
- In **Auto** it returns your recommended option at once and tells the user it was chosen for them. Make the recommendation the one you'd defend. Never ask for a fact only the user has (their routine, a result, a price, a date) in Auto: it can't answer with one. Reframe the line as `references/copy.md` says (Grounding) and name what's missing in the summary.
- Pass `remember: true` when the answer is a lasting preference for the project (a tone, a rule, a style), not a one-off pick like which headline. Remembered answers come back without asking, and `metamorfiles_get_project` lists them: follow them without asking again.

Ask at most once per role per task (a new brand asks once per step), and never about something the brand kit already decides.

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

End the task with `metamorfiles_team_update { task, role: "designer", finished: true, summary: "<what changed and where>" }`, as the role that finishes: the task is done at once, and a later call of yours doesn't reopen it. Studio refuses to end it while anything it changed hasn't passed the final check as it is now, and says what: have that reviewed, then finish. Only new work reported as `working`, or a new question, does. Finish everything first: every check, every fix, every subagent, in the foreground. Never end on work still running or promised ("I'll wrap up once the verdict arrives"): wait for it, then summarise.

End with a plain summary of one or two sentences: what changed and where. Plain sentences, not a document: no headings or bold labels. A question for the user at the end is `metamorfiles_ask_user` before you finish, never a line of the summary. In a task Studio started it shows in a small thread beside the canvas, where the user already sees the frames; anywhere, every extra line buries the answer. The only third sentence allowed is a choice the user still has about this task (in Auto, the option you picked for them). Nothing about other frames, items, or problems that were there before the task, even ones the final check found. Talk as `SKILL.md` of `metamorfiles` says.
