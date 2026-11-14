# The chosen logo's final files

Read once the user has chosen a logo (`SKILL.md`, step 8): cleaning its traced files, the final files
in `brand/logos/`, and the logo used small, composed for where it's seen small.

## Cleaning

Clean each traced file of the chosen logo for the final files as soon as the user chooses it. Start
one `logo-cleaner` agent per file in the background and go on with the next step while it works (in Claude Code, the
Agent tool with `run_in_background: true`; in an app without the plugin's agents, a subagent whose
instructions are exactly what `metamorfiles_get_guide { name: "logo-cleaner" }` returns, started
without your conversation, which it doesn't need: in Codex, `fork_turns: "none"`), given the
project path, the traced file and what it is in one sentence. Each writes `<name>-clean.svg` beside its
trace and replies with its match against the drawing. Nothing the user is asked waits for it, and a
cleaner still at work ends with your run: before the final files, wait for every one you started.
A cleaner is done when it replies (in Claude Code, the notice that the background agent finished),
never when its file appears: the clean file appears with its first draft and changes until then.

## The final files

Make the final files in `brand/logos/` from the cleaned files, with the same tools and settings,
each with an `output` there. A cleaned drawing reaches it as one part:
`metamorfiles_compose_logo { layout: "stack", parts: [{ file: "<the cleaned .svg>" }], output: "brand/logos/logo.svg" }`
(`metamorfiles_generate_image` never saves into `brand/logos/`). The other colours come from
`metamorfiles_make_logo_variant { file, output: "brand/logos/logo-reversed.svg", colors: { ... } }`:
the reversed version is made here for the first time, the same way as the one colour, both from the
redrawn version's cleaned copy when the chosen logo has one (`drawn.md`, "Other versions of it"). Run
`metamorfiles_check_logo` on each. Declare them in DESIGN.md `logos` with their
grounds, sources ("set in <face> as outlines with a drawn part", "drawn by <model> and traced",
"created and approved by the user on <date>") and clear space.

The logo used small, where it's seen small (a profile picture, an app icon, a favicon), is the chosen
route's own mark when it has one: its file marked `small: true` in the route's files. Make it into
`brand/logos/` with its versions like the others and declare it with `small: true`. A logo without a
mark of its own declares none: Studio uses the main logo, and nothing is made or asked for it. A new
avatar, favicon or icon the user asks for later is made as a page.

## Where it's seen small

Last, compose the logo used small for where it's seen small: in a circle (`profile`), the profile
picture platforms crop to one and the phone's app icon, which keeps the circle's placement inside
its rounded corners; in a square (`icon`), the favicon and the browser's icons, clear unless it names
a ground. Studio places it by its ink, on the guidelines' Logo versions page. Where its shape asks
for another placement (a long wordmark fills less of a circle than a round mark; a logo with no ground
of its own may want the brand colour behind it), decide it from its shape and the brand's colours:
how much of the circle or square it fills, where it sits, its ground, or another version of it (the
reversed logo on a brand colour). Write what differs from Studio's placement on its entry in
DESIGN.md `logos`, `profile` and `icon`:
`{ file: logos/mark.svg, small: true, profile: { size: 0.9, ground: "{colors.ink}", file: logos/mark-reversed.svg }, icon: { size: 1 } }`
(`size` is the share of the circle, from its centre to the mark's farthest point, or of the square,
its longer side, that the mark spans; above 1 it is cropped; `at` its centre). The kit's profile
picture, favicon and app icons are exactly these.
