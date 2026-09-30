# Checks

Every route is checked before anyone sees it, and checked again after every fix. The user should
never be the one to find what fails.

## The check loop

1. Run `metamorfiles_check_logo` on the route's file, with its `ground` and the brand's `dark`
   colour.
2. Read the sheet: large on its ground and reversed (top), in one colour and at 64, 32 and 16 px
   (middle), blurred (bottom). Read the numbers: its colours, paths, pieces, and the pieces too small
   to read at 32 and 16 px.
3. Fix what fails, the smallest change first, and run it again:

| It shows | Fix |
| --- | --- |
| A piece lost at 32 px (a dot, a crumb, a fine line) | Enlarge it, merge it into a larger shape, or leave it out, in the drawing's construction; draw again |
| The name closing up at 32 px | The small-size version (`wordmark.md`) |
| A lockup unreadable at 32 px | That's expected: the small mark is used there. Check the small mark instead |
| The reversed version looks heavier | Set the reversed wordmark a weight lighter; fine lines on dark spread |
| The one-colour version loses a part | That part only worked through colour: give it a shape of its own, or a cut-out |
| The blurred version is a blob | The silhouette carries no idea: go back to the construction |
| More colours than the brand's | A colour missing from the trace list, or a drawing with shading: draw again |

Pieces lost only at 16 px are fine in a lockup, which is never used that small, and a problem in the
small mark, which is.

## The craft pass

Then look at each route large, as a designer would:

- **Spacing is even.** No pair looser or tighter than the rest; `kerning` for the one that is.
- **The tweak shows.** Someone who knows the face would see what was changed.
- **One hand.** The mark's line, weight and corners match the letters'.
- **Balanced.** No part louder than the one the logo is about.
- **Drawn, not clip-art.** The mark has the brand's idea in it, clean curves, no stray specks.
- **Not a cliché.** No category symbol, swoosh, orbit, sparkle, globe or initials in a plain circle.
- **Not the default.** Name the logo you would have made for any business like this one, and check
  none of the routes is it.
- **The three routes differ in kind,** not in colour or face alone.

Look at every file with `metamorfiles_read_file` (`asImage`) and at the brand board's logo frame with
`metamorfiles_render_preview`, never through a script of your own.
