# Lockups

A route is often more than one file: a name, a mark or a mascot, a supporting line.
`metamorfiles_compose_logo` puts them together as one SVG, each part nested untouched, and every text
part set from a real font:
`metamorfiles_compose_logo { layout: "stack", parts: [{ file: "<the mark .svg>" }, { text: "Lumen Skincare", font: "brand/fonts/Fraunces.woff2", color: "#3b2e27" }], output: "brand/process/logo/lockup.svg" }`.
A logo drawn whole (route 1) is one part, with its supporting words composed around it.

## Layouts

- `stack`: parts one under the other, centred. `size` is a share of the widest part's width.
- `row`: parts side by side, centred on a line. `size` is a share of the tallest part's height.
- `badge`: layers on one circle (`seal.md`).
- `place`: parts at points of the first one (`at: { x: 0.1, y: 0.6 }`, the part's left and bottom
  edges as shares of the first part's width and height): letters on a drawn line, a monogram's
  letters overlapping.
- `pattern`: the small mark repeated in a grid, turned one way and the other, with
  `pattern: { columns: 4, rows: 3, turn: 15 }` beside `parts`.

`gap` is the space after a part and `shift` moves it across the flow, in the layout's units.

## Judging it

Sizes, gaps and positions are decided by eye for this logo, not by formula. Look at the lockup large
and at 64 px: the parts should feel like one piece with room to breathe; a round or pointed part
centred on its box can look low and needs a `shift`; the part that disappears first when small is
too small or too light.

## The set

Each route has the lockup, and the name alone and the mark alone when it has a mark (the small mark,
`small: true` on its entry in the option's `files` in `brand/process/logo.md`). Once fixed, the
parts' sizes and positions stay the same from file to file.
