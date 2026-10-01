# The logo drawn whole

Route 1. The image model draws the logo as one composition, lettering and all, and Studio makes it a
vector: lettering alone, or lettering with a mark, a mascot or ornaments, drawn in one style so every
part belongs to the others.

## What the model draws well, and what it doesn't

- **Expressive lettering draws well**: scripts, chubby, soft, bouncy or hand-cut letters, where the
  hand's irregularity is part of the look.
- **Precise lettering doesn't**: carved or faceted strokes, engraved capitals, fine hairline serifs,
  perfectly even geometric capitals come out nearly right, and a trace keeps every flaw. When the
  direction's lettering is like that, draw only what the model can draw (a mark, a mascot, a
  detail) and set the name in route 2, or leave this route out and say why.
- **Supporting words** (a tagline, the trade, the place) are set in real type and composed around the
  traced drawing (`lockups.md`), not drawn.

## The prompt

Write the prompt from the chosen direction and the brief, as a designer's brief, never a font's name:
- the look and feel, in the direction's own terms;
- the lettering, described in a designer's words;
- the layout: how the parts sit together and the space between them;
- any mark, mascot or ornament, in the same hand and weight as the letters (a mascot is designed
  with `metamorfiles-character`);
- each colour for what it paints, from the direction's palette;
- the name in quotes, exactly as written, an uncommon one spelled letter by letter;
- "flat vector artwork, like a brand designer's final logo file", and no other text.

A joined script joins letters within a word, never across the space between words: say each word is
written on its own. Accents keep their shape and their place over their letter.

Save it with `trace: { colors: [every colour it uses] }`; Studio has it drawn on a transparent
background and traces each colour in the brand's exact value (`vector.md`).

## Read every letter

Read every word letter by letter, accents included, and see that the words stand apart; draw it
again when one differs. Draw two or three together (`wait: false`) and keep the one whose letters
are right and whose drawing holds the direction best; then compose the supporting words around it
and run `metamorfiles_check_logo`.

## Other versions of it

A logo drawn whole is one traced drawing whose parts overlap and share outlines, so a version with a
part left out (the name alone, the mark alone) or laid out another way (one line, stacked) can't be
cut from its paths. Draw it again from the chosen logo: pass the drawing it was traced from (its
record's `traceDrawing`) or the traced file as image 1 and edit it ("Edit image 1: the same
lettering, letter for letter and shape for shape, without the character; close the outline
where the character covered it"). Save it with the same `trace` colours, read every letter against the
original, and check it like the original. Recolourings stay `metamorfiles_make_logo_variant`.

