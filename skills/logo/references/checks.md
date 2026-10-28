# Checks

Every route is checked before anyone sees it, and checked again after every fix. Before the choice, a route's letters and its one-colour version
count; the reversed version counts after the choice, for the chosen route.

## The check loop

1. Run `metamorfiles_check_logo { file, ground: "#f6f1ea", dark: "#3b2e27" }` on the route's file,
   with its ground and the brand's dark colour.
2. Read the sheet: large on its ground and reversed (top), in one colour and blurred (bottom). Read
   the numbers: its colours, paths and pieces.
3. Fix what fails, the smallest change first, and run it again:

| It shows | Fix |
| --- | --- |
| The reversed version looks heavier | Set the reversed wordmark a weight lighter; fine lines on dark spread |
| The one-colour version loses a part | That part only worked through colour: give it a shape of its own, or a cut-out |
| The one-colour or reversed version is a silhouette (a drawing of lines and fills recoloured whole) | Make it line art: the line colour to the ink, every fill to `"knockout"` |
| The blurred version is a blob | The silhouette carries nothing recognisable: go back to the drawing |
| More colours than the brand's | A colour missing from the trace list, or a drawing with shading: draw again |
| A drawn letter wrong, an accent moved, words run together (route 1) | Draw it again; read every letter before anyone sees it |

## Looking at it

Then look at each route large, as a designer would: the spacing even, the parts drawn in one hand,
the drawn letters right, and the route true to the chosen direction. Name the logo you would have
made for any business like this one, and check none of the routes is it.

Look at every file with `metamorfiles_read_file { path, asImage: true }` and at the brand board's logo
frame with `metamorfiles_render_preview { item: "templates/brand-board", format: "process-logo" }`,
never through a script of your own.
