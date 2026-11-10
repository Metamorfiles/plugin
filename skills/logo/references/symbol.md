# Generated marks and letters

What is drawn to go with a name set in real type: a mark or a mascot, and now and then a drawn part
in a letter's place or its mark's. The name is set first (`wordmark.md`); the image model draws the part from it;
Studio traces it (`vector.md`); it is composed with the name (`lockups.md`) or drawn onto it (below).
Its idea comes from the brief (`SKILL.md`, step 1).

## The prompt

Every part drawn to go with a set name, a mark or a mascot, is drawn with the set name as image 1
and the chosen direction's card as image 2, each with its role line (a part in a letter's or a
mark's place is drawn from that letter instead: "A drawn letter or mark"): the part then shares the
letters' hand, which words alone don't carry. A mascot is briefed and prompted with the `character`
skill, these two images first, with its own line for image 1: "Image 1 is the brand's name as it is
set: draw <name> to go with it, in its hand (its line weight, ends and corners), never its letters."
and image 2's line as below.

Describe a mark concretely, as a picture rather than a logo: what it shows, the shapes it is made of
and how they meet, whether it is a solid shape, shapes cut out of it or one line, its corners, and
what it leaves out. The words "logo" and "icon" invite letters, a frame and a presentation board, so
describe the drawing itself, for a mark and a mascot alike.

```
Image 1 is the brand's name as it is set: draw the mark to go with it, in its hand (its stroke
weight, ends and corners), never its letters. Image 2 is the chosen direction: take its palette and mood.
Draw a flat graphic drawing on a transparent background, centred with space around it.
Subject: <the drawing, described concretely>.
Style: <from the chosen direction>, like a clean vector drawing.
Colours: <each hex and what it paints>, flat, nothing else.
Only the drawing: no letters, words or numbers, no frame, no shadow, no gradient or texture.
```

- List every colour it uses in `trace`, the light ones inside it too:
  `metamorfiles_generate_image { prompt, references: ["<the wordmark .svg>", "templates/brand-board#process-direction:<chosen id>"], width: 1024, height: 1024, folder: "brand/process/logo", trace: { colors: [...] } }`.
  The path it returns is the traced .svg.
- Follow the image model's own file, which `references/images.md` of the `studio` skill names.

## Compose it on the word

A mark or mascot that meets the letters, as the route's composition says (lying along its letters,
leaning on one, tucked under an arch of the word), is drawn onto the set word, so they meet as one
drawing.
One that stands beside or above the name is composed with it instead (`lockups.md`). Image 1 is the
wordmark, image 2 the mark or mascot drawn for it (above):
`metamorfiles_generate_image { prompt, references: ["<the wordmark .svg>", "<the traced mark .svg>"], edit: true, width: 1024, height: 1024, folder: "brand/process/logo", trace: { colors: [...] } }`.
The prompt keeps the letters and places the part by the route's composition: "Edit image 1: keep
every letter exactly as it is, the same shapes, size and place. Add <the mark> from image 2, <where
and how it meets the letters>, drawn as image 2 draws it, its lines as heavy as the letters'
strokes." Then check the letters against the font:
`metamorfiles_check_logo { file: "<the lockup .svg>", word: "<the wordmark .svg>" }` finds the word
in the drawing and reports how much of its letters were kept (`checks.md`).

## A drawn letter or mark

A drawn part can stand in for a letter, or for a letter's mark (an accent, or the dot of i or j),
while the word still reads at a glance. In a letter's place it works when the object already has
that letter's simple shape (a round drop for an o) and the letter is neither the name's first nor
its last, which the eye reads the word by. A mark's place takes a small object (a flame for an
acute, a sleeping cat for an i's dot). A shape the letter doesn't have goes beside or above the
name instead.

The letter itself is the drawing's guide to its place, size and stroke weight, followed closely but
not exactly. Set that letter alone in the name's face, the accented letter or the i for a mark,
`metamorfiles_make_wordmark { text: "o", font, color, output: "brand/process/logo/<route>-letter.svg" }`,
and draw the part with it as image 1 and the set name as image 2, in place of the two images above:

```
Image 1 is the letter "o" as the brand's name sets it: draw <the object> in its place, about its
size and outline, its strokes about as heavy as the letter's, so the word still reads that letter.
Image 2 is the brand's name as it is set: take its hand (its stroke weight, ends and corners), never
its letters.
```

For a mark, image 1's line names the mark: "draw <the object> as the i's dot, about the dot's size
or a little larger". Then set the wordmark again with it:
`metamorfiles_make_wordmark { text, font, color, output, part: { file: "<the traced .svg>", replaces: "o" } }`,
its file under `brand/process/` or `brand/logos/`. Studio sets the part on the letter's own lines
(baseline to x-height or cap height, centred where the letter stood), or in the mark's place
(centred where it stood, standing where it sat; `scale` makes a mark larger, growing up from there),
however the drawing is padded, and spaces it by its own shape. `dx`, `dy` and `rotate` move it only
when the move is the idea, said in the route's `composition`.
