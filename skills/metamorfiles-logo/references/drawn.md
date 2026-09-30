# The logo drawn whole

Route 2. The image model draws the whole logo, lettering and all, and Studio makes it a vector: the
route for hand lettering no face can set (a flowing script, a bouncy custom word, letters that look
cut from dough) and for a character and a name drawn as one.

## What it draws, and what it doesn't

- **The name, drawn, when its look is expressive**: a loose or joined script, chubby, soft, bouncy or
  hand-cut letters, where the hand's irregularity is the point.
- **Never precise letters.** Carved or faceted strokes, engraved capitals, high-contrast serifs with
  hairlines, geometric capitals of perfectly even strokes: the model draws them nearly right, and
  nearly right shows. Those are set from a real face (`wordmark.md`), with a drawn detail at most,
  and this route is left out for that brand.
- **Never the supporting words.** A tagline, the trade, the place, a second script: set them from a
  real font and compose them around the traced drawing (`lockups.md`). The drawing holds the name and
  its drawn element only.

## The prompt

Write the prompt as a brief, never a font's name:
- the look and feel;
- the lettering in a designer's words ("a loose, monoline, connected script, like a name written
  quickly with a thick marker"; "heavy, condensed, bouncy capitals with soft corners and a slightly
  jumping baseline");
- the layout: where the drawn element sits against the name, and their sizes;
- the drawn element, described by its construction (`symbol.md`; a character by
  `metamorfiles-character`), and any ornament the brief asks for (a laurel round the name, steam
  rising from a letter, stars beside it), drawn in the same hand and weight as the letters;
- each colour for what it paints;
- the name in quotes, exactly as written, an uncommon one spelled letter by letter;
- "flat vector artwork, like a brand designer's final logo file", and no other text.

A joined script joins letters within a word, never across the space between words: say each word is
written on its own with a clear space after it. Accents keep their shape and their place over their
letter.

Save it with `trace: { colors: [every colour it uses] }`; Studio has it drawn on a transparent
background and traces each colour in the brand's exact value (`vector.md`).

## Read every letter

Then read every word in it letter by letter, accents included, see that the words stand apart, and
draw it again when one differs: the user should never be the one to find it. Draw two or three
together (`wait: false`) and keep the one whose letters are right and whose drawing holds the idea;
then compose the supporting words around it and run `metamorfiles_check_logo`.
