# The chosen logo's final files

Read once the user has chosen a logo (`SKILL.md`, step 8): cleaning its traced files, the final files
in `brand/logos/`, and the small mark composed for where it's used small.

## Cleaning

Clean each traced file of the chosen logo for the final files from the moment it's chosen: the logo's
as soon as the user chooses it, a traced small mark's as soon as it's chosen. Start one `logo-cleaner`
agent per file in the background and go on with the next step while it works (in Claude Code, the
Agent tool with `run_in_background: true`; in an app without the plugin's agents, a subagent whose
instructions are exactly what `metamorfiles_get_guide { name: "logo-cleaner" }` returns, started
without your conversation, which it doesn't need: in Codex, `fork_turns: "none"`), given the
project path, the traced file and what it is in one sentence. Each writes `<name>-clean.svg` beside its
trace. Nothing the user is asked waits for it, and a cleaner still at work ends with your run: before
the final files, wait for every one you started, then look at each over the drawing with
`metamorfiles_compare_trace { file: "brand/process/logo/<name>-clean.svg", against: "brand/process/logo/<name>.svg" }`.
The cleaned file keeps every part of the drawing, with only its edges straightened or smoothed.

## The final files

Make the final files in `brand/logos/` from the cleaned files, with the same tools and settings,
each with an `output` there. A cleaned drawing reaches it as one part:
`metamorfiles_compose_logo { layout: "stack", parts: [{ file: "<the cleaned .svg>" }], output: "brand/logos/logo.svg" }`
(`metamorfiles_generate_image` never saves into `brand/logos/`). The other colours come from
`metamorfiles_make_logo_variant { file, output: "brand/logos/logo-reversed.svg", colors: { ... } }`:
the reversed version is made here for the first time, the same way as the one colour, and a version
that loses a part in one colour is redrawn now. A version of a logo drawn whole: `drawn.md`, "Other
versions of it". Run `metamorfiles_check_logo` on each. Declare them in DESIGN.md `logos` with their
grounds, sources ("set in <face> as outlines with a drawn part", "drawn by <model> and traced",
"created and approved by the user on <date>") and clear space, and the small mark with `small: true`.

## The small uses

Last, compose the small mark for where it's used small: in a circle (`profile`), the profile
picture platforms crop to one and the phone's app icon, which keeps the circle's composition inside
its rounded corners; in a square (`icon`), the favicon and the browser's icons, clear unless it names
a ground. Studio places the mark by its ink and shows each on the guidelines' `mark` page
(`metamorfiles_render_preview { item: "templates/brand-board", format: "mark" }`). Look at each as
it will be seen and decide its composition for that mark: how much of the circle or square it fills,
where it sits, its ground, or another version of it (the reversed mark on a brand colour). Write what
differs from Studio's placement on the small mark's entry, `profile` and `icon`:
`{ file: logos/mark.svg, small: true, profile: { size: 0.9, ground: "{colors.ember}", file: logos/mark-reversed.svg }, icon: { size: 1 } }`
(`size` is the share of the circle, from its centre to the mark's farthest point, or of the square,
its longer side, that the mark spans; above 1 it is cropped; `at` its centre). The kit's profile
picture, favicon and app icons are exactly these.
