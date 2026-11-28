# Lockups

A route is often more than one file: a name, a mark or a mascot, a supporting line.
`metamorfiles_compose_logo` puts them together as one SVG, each part nested untouched, and every text
part set from a real font: a mark beside the name, the supporting words, a seal. A part that meets the
letters is drawn onto the set word instead (`symbol.md`, "Compose it on the word"). The route's
composition (`SKILL.md`, step 3) says what leads and how the parts meet.

`metamorfiles_compose_logo { layout: "row", align: "baseline", parts: [{ file: "<the wordmark .svg>" }, { file: "<the mark .svg>" }], output: "brand/process/logo/minutes.svg" }`
sets a mark standing on the word's baseline, after it. A logo drawn whole is one part, with its
route's supporting words, if any, composed with it.

## Choosing a layout

- `row`, for a mark beside or after the name. `baseline` when the mark stands on the word's line,
  `cap` when its top meets the capitals', `centre` for a mark that floats level with a word.
- `stack`, for a mark above the name, or a name broken over lines.
- `badge`, for a seal (`seal.md`).
- `place`, for parts set at points of the first one: a monogram's letters overlapping, a mark in a
  space the word leaves.
- `pattern`, for the logo's mark repeated as a surface.

## Spacing it

Sizes and positions are set for this logo, and both come from the name, as designers balance a
lockup. Studio knows the brand's name: in a row or a stack with it, a mark's `gap` and `shift` are
measured in the name's average height (its letters' tops above the baseline, averaged), and its `size`
too beside the name; above it, `size` is a share of the name's width. Left unset, Studio balances them,
as the tool's description says, and its reply says what it placed. Leave them unset, and set them only
when the composition means otherwise (a mark that leads the name, a mark meant to be read as a letter,
a part that meets or overlaps the letters). A round or pointed part standing on the baseline
overshoots it a little (`shift`), as round letters do. Supporting words follow the word's own axis:
centred under a word with no straight edge (a drawn or slanted first letter), flush only to an edge
the word really has.

Every lockup keeps its settings beside it (`<file>.svg.json`); change one thing with
`metamorfiles_compose_logo { from: "brand/process/logo/minutes.svg", align: "cap", output: "brand/process/logo/minutes.svg" }`.
Every file made from the same parts keeps their sizes and positions. Which files a route has before
the choice: `SKILL.md`, step 6.
