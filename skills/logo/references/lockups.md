# Lockups

A route is often more than one file: a name, a mark or a mascot, a supporting line.
`metamorfiles_compose_logo` puts them together as one SVG, each part nested untouched, and every text
part set from a real font: a mark beside the name, the supporting words, a seal. A mark or mascot
that meets the letters (lying on them, tucked under an arch) is drawn onto the set word by the image
model instead (`symbol.md`, "Compose it on the word"). Decide the route's composition first
(SKILL.md, step 3): what leads, and how the parts meet.

`metamorfiles_compose_logo { layout: "row", align: "baseline", parts: [{ file: "<the mark .svg>", size: 1.3, gap: 0.4 }, { file: "<the wordmark .svg>" }], output: "brand/process/logo/lumen.svg" }`
sets a mark standing on the word's baseline, a little taller than the word, apart from it. A logo drawn whole
(route 1) is one part, with its route's supporting words, if any, composed with it.

## Layouts

- `row`: parts side by side. `align` lines them up: `baseline` (a wordmark's baseline, curved or
  straight, with any other part standing on it), `cap` (a wordmark's cap height, any other part's top
  on it), `start` (tops), `end` (bottoms) or `centre`. `size` is a share of the tallest part's height.
- `stack`: parts one under the other, `align` `centre`, `start` (flush left) or `end` (flush right).
  `size` is a share of the widest part's width.
- `badge`: layers on one circle (`seal.md`).
- `place`: parts at points of the first one (`at: { x: 0.1, y: 0.6 }`, the part's left and bottom
  edges as shares of the first part's width and height): a monogram's letters overlapping, a mark set
  in a space the word leaves. A part that meets the letters (standing on one, peeking over the name)
  is drawn onto the word instead (`symbol.md`, "Compose it on the word").
- `pattern`: the small mark repeated in a grid, turned one way and the other, with
  `pattern: { columns: 4, rows: 3, turn: 15 }` beside `parts`.

`gap` is the space after a part (negative overlaps the next), and `shift` moves it across the flow,
in the layout's units. `behind: true` draws a part beneath the others; `knockout: { color }` cuts a
gap of the ground's colour around a part where it overlaps another.

## Judging it

Sizes, gaps and positions are decided by eye for this logo, not by formula. Look at the lockup large
and blurred: the parts should feel like one piece with room to breathe. A mark beside the name
stands apart from its letters: the space between them clearly wider than any space between two
letters, often about the name's x-height. At about a letter's space the mark reads as one more letter
of the word; only a mark meant to be read as a letter keeps the letters' spacing. A row's result
gives that space as `spacing`, against the word's widest letter space and its height. A round or pointed part
standing on the baseline looks short and overshoots it a little (`shift`); the part that disappears
first in the blur is too small or too light. Supporting words follow the word's own axis: centred
under a word with no straight edge (a drawn or slanted first letter), flush only to an edge the word
really has. The lockup is what the route's composition says: a part meant to meet the letters
touches them. `metamorfiles_check_logo` gives each part's stroke weight
and the thinnest's share of the heaviest: parts drawn in one hand are close to each other's weight.

Every lockup keeps its settings beside it (`<file>.svg.json`); change one thing with
`metamorfiles_compose_logo { from: "brand/process/logo/lumen.svg", align: "cap", output: "brand/process/logo/lumen.svg" }`.

## The set

Each route has the lockup, the lockup without its supporting words when it has them (they're dropped
at small sizes), and the name alone and the mark alone when it has a mark (`small: true`
on its entry in the option's `files` in `brand/process/logo.md`). Once fixed, the
parts' sizes and positions stay the same from file to file.
