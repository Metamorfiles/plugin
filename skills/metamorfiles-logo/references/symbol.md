# Generated marks and letters

What route 2 draws to go with a name set in real type: a mark, a mascot, or a drawn letter in a
letter's place. The image model draws it alone; Studio traces it (`vector.md`) and it is composed
with the name (`lockups.md`). A mascot is designed with the `metamorfiles-character` skill and then
placed the same way.

## The idea

The mark comes from the brief and the chosen direction: the business's own reality (its product,
place, process, people) seen through the direction's look, rather than the category's usual symbol.
`references/principles.md` of `metamorfiles-brand-creation` holds how studios find those ideas.

## The prompt

Describe the drawing concretely, as a picture rather than a logo: what it shows, the shapes it is
made of and how they meet, whether it is a solid shape, shapes cut out of it or one line, its
corners, and what it leaves out. The words "logo" and "icon" invite letters, a frame and a
presentation board, so describe the drawing itself:

```
Draw a flat graphic drawing on a transparent background, centred with space around it.
Subject: <the drawing, described concretely>.
Style: <from the chosen direction>, like a clean vector drawing, drawn in the same hand and weight as the lettering in image 1.
Colours: <each hex and what it paints>, flat, nothing else.
Only the drawing: no letters, words or numbers, no frame, no shadow, no gradient or texture.
```

- Pass the name's wordmark SVG as image 1 (`references`) so the weight matches. Draw only the mark.
- Save it with `trace: { colors: [...] }` listing every colour it uses, the light ones inside it too,
  into `brand/process/logo/`.
- Follow the image model's own file of the `metamorfiles` skill (`references/images.md` names it).

## A drawn letter

A drawn part can take a letter's place (a donut for an O) or its accent's (a flame for an acute).
Draw it at the letter's proportions against the wordmark in image 1, then pass it as the wordmark's
`part` with `replaces`. Studio sizes it to the letter's box and spaces it by its own shape; adjust
with `scale`, `dx` and `dy`. It still reads as that letter in the word.

## Draw several, keep one

Draw two or three versions together (`wait: false`) from the same prompt. Keep the one that holds
the idea and passes `metamorfiles_check_logo`; the others stay in the folder. When all miss, change
the description and draw again, never describing the failed drawing.
