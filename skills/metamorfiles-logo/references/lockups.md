# Lockups

A route is rarely one file: a name, a mark, ornaments or a character, a tagline. `metamorfiles_compose_logo` puts
them together as one SVG, each part nested untouched, and every text part set from a real font. A
logo drawn whole (route 2) is one part: its supporting words are text parts composed around it.

## Layouts

- `stack`: parts one under the other, centred: a character over the name, a tagline under it. `size`
  is a share of the widest part's width.
- `row`: parts side by side, centred on a line: a mark beside the name. `size` is a share of the
  tallest part's height.
- `badge`: a seal (`seal.md`).
- `place`: parts at points of the first one (`at`, shares of its width and height): letters sitting
  on a drawn line, a monogram's letters overlapping.
- `pattern`: the small mark repeated in a grid, turned one way and the other.

`gap` is the space after a part and `shift` moves it across the flow, in the layout's units.

## Balance

Balance by weight, never just fit. A drawing is lighter than a word of the same height, and a
detailed one lighter still:
- in a **stack**, a character or mark is about half the name's width, the tagline a third to a half;
- in a **row**, a mark is about one and a half times the capitals' height, and a character as tall as
  the lines of the name beside it;
- an ornate mark pairs with plain type, a bold mark with a lighter weight of the face: complement, not
  compete.

Look at the lockup at 64 px: the part that disappears first is too small or too light.

## Spacing and alignment

- **The gap comes from the logo**: the width of the name's stem, the height of its x-height, or a
  fraction of the mark's width, so it stays the same relation at every size. Between a mark and the
  name, about the capital's height in a row, half of it in a stack.
- **Centre by eye.** A round or pointed mark centred on the box looks low; in a row, lift it with a
  negative `shift` until it sits centred on the capitals. A heavy part sits a little closer than a light one.
- A mark beside capitals spans baseline to cap height, or overhangs both a little when it is round.

## The set

Each route in the kit has:
- **the lockup**: the full logo, and a horizontal and a stacked version when the touchpoints need both;
- **the name alone** and **the mark alone** (the small mark, `small: true`);
- the tagline version only when the brand uses it, never in the small ones.

Once fixed, the parts' sizes and positions don't change from file to file.
