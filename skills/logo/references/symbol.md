# Generated marks and letters

What is drawn to go with a name set in real type: a mark or a mascot, and now and then a drawn letter
in a letter's place. The name is set first (`wordmark.md`); the image model draws the part from it;
Studio traces it (`vector.md`); it is composed with the name (`lockups.md`) or drawn onto it (below).
Its idea comes from the brief (`SKILL.md`, step 1).

## The prompt

Every part drawn to go with a set name, a mark or a mascot, is drawn with the set name as image 1
and the chosen direction's card as image 2, each with its role line: the part then shares the
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

## A drawn letter

A drawn part can take a letter's place or its accent's only when the object already has that
letter's shape (a round drop for an o, a dropper's bulb for an i's dot) and the word still reads at a glance. A
shape the letter doesn't have goes beside or above the name instead.
Draw it at the letter's proportions against the wordmark in image 1, then set the wordmark again
with it: `metamorfiles_make_wordmark { text, font, color, output, part: { file: "<the traced .svg>", replaces: "o" } }`,
its file under `brand/process/` or `brand/logos/`. Studio fits its ink to the letter's lines (its
baseline and x-height, or cap height), however the drawing is padded or turned, and spaces it by its
own shape. It stays on the letter's lines: `dx`, `dy` and `rotate` move it off them only when the
move is the idea, said in the route's `composition`. It still reads as that letter in the word.
