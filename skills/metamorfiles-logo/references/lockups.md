# Lockups

A route is often more than one file: a name, a mark or a mascot, a supporting line.
`metamorfiles_compose_logo` puts them together as one SVG, each part nested untouched, and every text
part set from a real font. A logo drawn whole (route 1) is one part, with its supporting words
composed around it.

## Layouts

- `stack`: parts one under the other, centred. `size` is a share of the widest part's width.
- `row`: parts side by side, centred on a line. `size` is a share of the tallest part's height.
- `badge`: layers on one circle (`seal.md`).
- `place`: parts at points of the first one (`at`, shares of its width and height): letters on a
  drawn line, a monogram's letters overlapping.
- `pattern`: the small mark repeated in a grid, turned one way and the other.

`gap` is the space after a part and `shift` moves it across the flow, in the layout's units.

## Judging it

Sizes, gaps and positions are decided by eye for this logo, not by formula. Look at the lockup large
and at 64 px: the parts should feel like one piece with room to breathe; a round or pointed part
centred on its box can look low and needs a `shift`; the part that disappears first when small is
too small or too light.

## The set

Each route has the lockup, and the name alone and the mark alone when it has a mark (the small mark,
`small: true`). Once fixed, the parts' sizes and positions stay the same from file to file.
