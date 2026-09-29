# The logo

Read this for the third step of `create.md`. A new brand's logo is its name set in a face with real
character, tweaked the way a designer tweaks type: never a symbol drawn from scratch as geometry,
and never a stock face set untouched.

## Routes

Two or three routes, each a different move on the chosen look:
- **The face.** The display face from the look, or a face chosen for the logo alone: a brush script,
  a heavy serif, a condensed grotesque, a stencil (`fonts.md`). Scripts and loud display faces are at
  their best here, where one word is all they set.
- **The tweak, one or two per route:**
  - **Tracking:** tighten a script or a bold face by 1 to 3%; open capitals by 5 to 15%.
  - **The font's own alternates and features.** `metamorfiles_make_wordmark` lists the face's
    alternate glyphs for these letters (an `S.alt`, a swash `R`) and its OpenType features (`ss01`,
    `dlig`). One changed letter is often the whole idea.
  - **One drawn part** that takes a letter's place or its accent's: a flame for an acute, a drop for
    a dot, a sun for an o. Draw it as a small SVG in `brand/process/logo/`, one simple shape with a
    `viewBox` and a fill, and pass it as the wordmark's `part`. It comes from the brand's idea, never
    from the category's clichés.
- **Each route is shown as a set,** every file with its `ground`, and the board also shows the first
  at 24, 16 and 12 px:
  - in colour on the ground it is made for;
  - reversed, on the dark colour;
  - in one colour, on white, with the part in the letters' colour (the part's `color`).

## Checks before you show it

Look at each file with `metamorfiles_read_file` (`asImage` for an SVG) and at the board with
`metamorfiles_render_preview`, never through a script of your own.

- **Small:** it still reads at 32 px, and the part still reads as itself. A detail that turns into a
  blob at 16 px needs a simpler part or a bigger one.
- **One colour:** the part is still what it is when it's the same colour as the letters.
- **The tweak shows:** someone who knows the face would see what was changed.
- **Not a cliché:** no category symbol, swoosh, orbit, sparkle or initials in a circle.

## A seal or an icon

A long wordmark can't fill a round sticker, a stamp or an app icon. Add a compact mark only when the
brand's touchpoints need one:
- **An icon** from the part alone (the flame, the drop), filling a rounded square on a brand colour.
- **A seal**: the name stacked inside a simple shape from the brand's world, for stickers, stamps and
  packaging only, never beside the wordmark.

Write them as SVGs in `brand/process/logo/` and show them as part of the route.

## After the choice

Set the chosen route's final files into `brand/logos/` with the same tool (`wordmark.svg`, the
reversed and one-colour versions, the icon or seal), show them, and declare them in DESIGN.md
`logos` with their grounds and the source "set in <face> as outlines with a drawn part, created and
approved by the user on <date>". The clear space is the height of the name's capital on every side.
