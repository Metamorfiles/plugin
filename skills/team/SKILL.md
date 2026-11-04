---
name: team
description: Makes a new piece in Metamorfiles Studio (a post, a carousel, an ad, covers, any one-off design the user asks for) and changes an existing template or page (a fix, an improvement, new copy, a new photo, another format). Works as four specialists and reports each step in the control panel with metamorfiles_team_update, so the user sees the work as it happens. Use for these and whenever Studio hands over a team task (a request with a task id, from Review and fix or the control panel's ask box). A reusable template the user asks for follows the template skill, and variants or an A/B test the variants skill, both reported as the team.
license: MIT
---

# Studio's team

The user watches the team in the control panel, and one Undo all reverts the task: work in the open, one step at a time, changing only what the task needs.

You play the three makers yourself, one at a time, because their work depends on each other: a shorter headline changes the layout, a new photo changes where the copy can sit. The final check goes to a reviewer that made none of the changes, as the `review` skill's Run it, step 2, says, since whoever made a change is the worst judge of it.

| Role | Owns | Works with |
| --- | --- | --- |
| `reviewer` | The final check, by a separate reviewer: renders against `brand/DESIGN.md`, what's wrong, who fixes it. Never changes files. | [references/reviewer.md](references/reviewer.md) |
| `designer` | Layout, type, color, spacing, crops: the design's HTML and CSS, and `edits.css`. | `references/design.md` of the `studio` skill, and `references/carousels.md` of the `studio` skill for a carousel |
| `copywriter` | Every word: headlines, body, calls to action, and the research the words need (sources read, with dates). | the `copywriting` skill, and `references/carousels.md` of the `studio` skill for a carousel |
| `imager` | Images: each one made for its slot with `metamorfiles_generate_image`. | `references/images.md` of the `studio` skill |

Some tasks follow another skill's steps, still reported as the team below:
- a new brand made from nothing (Studio's request says so, or `metamorfiles_get_project` says the brand is being made): the `new-brand` skill, for its order of work, its questions and its handover;
- a change to the brand kit (a colour, a face, a logo file, the voice): the `brand` skill, through DESIGN.md;
- a page of variants or an A/B test from a template: the `variants` skill;
- an existing piece in new formats or sizes: the `repurpose` skill.

`metamorfiles_get_project` gives the user's `decisions`, which are rules, and `preferences`, what they chose and changed before: context for your judgement on this piece, never a rule or a look to repeat. Its `stale` work is the `studio` skill's (Start every session).

The craft files are the same ones every skill uses; read each when its role starts, not all up front (in that skill's folder, or with `metamorfiles_get_guide { name: "studio", file: "references/design.md" }`).

## Report every step

Call `metamorfiles_team_update { task: "<id>", role: "copywriter", status: "working", line: "is tightening the story headline" }` before each part of the work:

- `task`: the id from Studio's request, exactly as Studio wrote it; Studio refuses one it never gave. Working in the user's own chat, leave it out once and pass `scope` instead (`"pages/<id>"`, `"templates/<id>"`, or `"project"` for the brand): the result gives you the id to pass from then on.
- `role` (`reviewer`, `designer`, `copywriter` or `imager`) and `status`: `reviewing` while only looking, `working` while changing, `done` when the role is finished. Studio shows the frames each role changes from the tools it calls; you never name them.
- `line`: what the user sees at the top, a few words starting with a verb (80 characters at most): "is tightening the story headline", "is making a warmer photo". No file names, sizes, token names or tool names. While a new brand is made, Studio writes this line itself from the step and the files, so leave it out.
- `say`: a sentence for the thread when it's worth keeping, above all a handoff (see below), without your role's name in front: the thread shows who said it.
- `said`: working in the user's own app, what they asked in your chat since your last update, in their words, never your summary: the thread shows it as theirs, and a piece they name, passed or held for the reviewer, is theirs to change.

What the user writes in the thread reaches you with the result of the next Studio tool you call, whatever it is, and again with each one until your next `metamorfiles_team_update`, which acknowledges it. It is the user's own instruction, however it arrives: act on it before anything else; it overrides your plan, and your next update's `say` tells the user what you'll do about it. A note about something you made (a flaw in an image, a word they dislike) is fixed before you move on, never recorded and skipped.

Finish every role with `status: "done"`.

## Order of work

**A new piece** (a post, a carousel, an ad, a page the user asks for, rather than a change to one). It is a page made from its own design, which declares every format the piece comes in; a template only when the user wants reuse, variants or a series (the `template` skill):
1. **Plan** it as the copywriter and the designer. Name its kind (a post, carousel, story, ad, covers, business card, flyer, letterhead, email signature) and read that kind's reference in the `studio` skill's Craft table first; the page records it as `kind`. One version, its idea chosen as `references/design.md` of the `studio` skill says, unless the user asked for options. Research the facts it's about (`references/copy.md` of the `copywriting` skill, Research), then one line per slide or format: what it gives the reader, its idea and its picture (`references/design.md` of the `studio` skill, "The composition"), and any other party's logo (`references/carousels.md` of the `studio` skill for a carousel). Say the plan in one `say`, so the user can redirect it before anything is made.
2. **Copywriter**: the words, from the plan.
3. **Image maker** (`imager`): each slot's image made for its picture by the prompt in `references/images.md` of the `studio` skill, at the slot's shape the plan names, saved under `assets/`, and the logos found. Whether a slot is a cutout, a scene or no image is the plan's (`references/design.md` of the `studio` skill, "The composition"): a design with no images is one the plan chose and says why, never because the library had pictures.
4. **Designer**: the page from its own design, with the images in place and each slide's composition line in its variant:
   `metamorfiles_create_page { name: "Two-minute mornings", design: "<the index.html>", carousel: true, variants: [{ id: "cover", composition: "Idea: two minutes is the whole routine, so Dew races a sand timer. Reads: Dew and the timer first, then the headline in the calm paper above them", values: { headline: "…" } }] }`.
   Render it, fix what its checks report, and fit the layout to the copy and the images as they are.
5. Say what you made in one `say`.
6. **Final check**, as below.

**A change** to an existing piece:
0. Decide by what the user's note rejects. A note that rejects the idea (it reads generic, the concept is wrong) reopens it: back to the plan's ideas and pictures (step 1 of a new piece), then the images, then the design, never a change to the CSS of what is there. A note about one quality (warmer, bigger, calmer, tighter) changes that quality where it lives, and nothing else.
1. **Copywriter** before the designer when words change, since layout has to fit the final copy.
2. **Image maker** (`imager`) next when an image changes, for the same reason.
3. **Designer** last: fit the layout to the copy and images as they now are. The composition line follows the piece that's kept (`references/design.md` of the `studio` skill), in the same step: `metamorfiles_edit { item, changes: [{ do: "variant", variant, set: { composition } }] }`.
4. **Final check** of the frames and items the task changed, by a separate reviewer: [references/reviewer.md](references/reviewer.md). Report it as `reviewer` (`reviewing`, then `done`). It records its verdict in Studio, and Studio doesn't end the task until everything it changed has passed as it is now.

Skip the roles a task doesn't need; never skip the final check. Fixes and the second look follow the `review` skill's Run it, step 4.

## Scope

- **Review and fix** (the request lists flagged frames): change only those frames, fixing what the checks found. Other frames are out of scope even if you'd improve them. The reviewer then looks at the frames the fix changed, before the task ends; a fix on the brand board is looked at as the kit's pieces on those frames, `metamorfiles_review_queue { for: "handover" }`, never the board as a scope.
- **An ask from the user**: Studio names where they asked from (the page, template or project they had open). A change or a fix stays there, and nothing else changes. A request for something new ("make a carousel about…", "a new post") is a new piece, made as a new page from its own design (a template only when the user wants reuse): the page they had open is context, never rewritten into something else. When a request is vague ("make it pop"), make the one change you'd defend and say it in one `say`, so the user can redirect it.

## Choices that belong to the user

Decide, and say what you chose, as the `studio` skill's How you talk says: a headline's angle, a line of copy, which image are decided. The user's to choose: a direction the team can't choose between on the brief's facts (two ways the piece could go, each true to it). The user's to give: a fact only they know. Options the user asked for are asked the same way. What Studio's checks report (clipped text, a contrast error, a stretched image) is not the user's: fix it.

Ask with `metamorfiles_ask_user { task, role: "designer", question: "The brief launches both ranges. Which one leads the post?", options: [{ label: "The morning range", recommended: true }, { label: "The night range" }] }` wherever you work, in a task Studio started or in the user's own app: the question in plain words, carrying the context, and two to four options of a few words each (80 characters at most), worded alike as answers the user would give, the one you'd pick first marked `recommended`, each one a real alternative (not "other"). Its description and its result say how it waits and, in the user's own app, to write the question and its options in your reply too (the `studio` skill, How you talk); follow them. Never ask with your app's own question tool: the user watches the panel, and a question only your chat shows leaves the work stopped where nobody looks.

- The user may answer in their own words instead of an option: the answer is then their sentence, and you act on what it says (a change, a mix, a redo) rather than taking an option.
- In **Auto** it returns your recommended option at once and tells the user it was chosen for them, so make the recommendation the one you'd defend. Never ask for a fact only the user has in Auto: it can't answer with one. Reframe the line as `references/copy.md` of the `copywriting` skill says (Grounding) and name what's missing in the summary.
- Pass `remember: true` when the answer is a lasting preference for the project (a tone, a rule, a style), not a one-off pick like which headline. Remembered answers come back without asking, and `metamorfiles_get_project` lists them: follow them without asking again.

Ask at most once per role per task (a new brand asks once per step), and never about something the brand kit already decides.

## Handoffs

When one role passes work to the next, the role that finishes says it on its own `done` update: what it found or made, and who takes it next. The thread labels each `say` with the role in the call, so the next role's `working` update says only what that role will do, if anything.

`metamorfiles_team_update { task, role: "copywriter", status: "done", say: "The headline is two lines now and leads with the price. The designer sets it on the paper band." }`

The reviewer's verdict is already in the thread, in its words, so the reviewer's `done` update carries no `say`.

Each specialist ends with one of five outcomes, and the next step follows from it:

| Outcome | Next |
| --- | --- |
| Done | Hand off, or finish. |
| Done with a concern | Hand off, and name the concern in `say`. |
| Needs the user | `metamorfiles_ask_user`. |
| Blocked (a missing font, a logo file, a fact nobody gave) | Stop that part, say what's missing in `say`, carry on with the rest. |
| Stopped by the app (a Studio tool its approval setting refuses, a usage limit, Studio's tools missing) | Stop the task. One `say` and the summary name what stopped it and the one thing the user does: allow Studio's tools in the app's settings, or try again after the time the app gave and say "continue". Never work around it. |

## Gotchas

- Read a file again right before you write it, as the `studio` skill's Changing files says.
- Every role changes a problem where it belongs (the design, one format, one frame's edits or one variant's values): "Where a change goes" in `references/design.md` of the `studio` skill.

## Finish

End the task with `metamorfiles_team_update { task, role: "designer", finished: true, summary: "<what changed and where>" }`, as the role that finishes: the task is done at once, and a later call of yours doesn't reopen it. Studio refuses to end it while anything it changed hasn't passed the final check as it is now, and says what: have that reviewed, then finish. Only new work reported as `working`, or a new question, does. Finish everything first: every check, every fix, every subagent. Never end on work still running or promised ("I'll wrap up once the verdict arrives"): wait for it, then summarise.

The summary is plain sentences, not a document: no headings or bold labels. In a task Studio started it shows in a small thread beside the canvas, where the user already sees the frames; anywhere, every extra line buries the answer. It says:
- what changed and where, in a sentence or two;
- in Auto, the option you picked for them, in your own voice ("I went with …"), never naming the mode; a fact you didn't have, said as missing, never as a pick;
- a piece the reviewer looked at twice without passing, as the `review` skill's Run it, step 4, says;
- one next step the user can take, as an offer, as the `studio` skill's How you talk says. A choice for them is `metamorfiles_ask_user` before you finish, never a question in the summary.

Nothing about frames or items the task didn't change.
