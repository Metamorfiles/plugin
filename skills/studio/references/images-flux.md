# FLUX

For `flux` models, reached through Black Forest Labs, fal, Replicate, Together or DeepInfra. Read with [images.md](images.md), whose rules still hold.

- **Word order is everything.** The main subject first, then what it does, the style, the setting, the light, the technical details. What comes early wins.
- Describe what is there: FLUX has no negative prompt, and a negation tends to add the thing.
- **Brand colors by hex work** after the word "color", tied to one object ("the backdrop in color #e9dccb").
- **Length.** 30 to 80 words for most images.
- **Photography.** Camera, lens and film names are welcome and help realism.
- **Words in an image that carries them**: the exact words in quotes.
- **References.** "image 1", "image 2", each with a role ("the bottle from image 1, the light from image 2"). For an edit from one image, say what changes and that everything else stays as it is.

## Model notes

- **FLUX 3 Image** expands every prompt itself, so a short prompt works; quality tags ("masterpiece", "highly detailed") add nothing. Put the image an edit changes first: its framing is kept. A row at the end of the prompt can place an element in a box, `[top, left, bottom, right]` on a 0 to 1000 grid; the model takes it as a strong hint.
- **Kontext** edits one image: name only the change and what stays; for words, `Replace 'old' with 'new'`.
- A klein model doesn't expand prompts: give it fuller sentences (about 40 to 70 words).
- **Sizes, from Black Forest Labs.** FLUX 3 Image makes up to 16.8 megapixels in any shape to 8:1 (4 megapixels with references), FLUX.2 4 megapixels in any shape, Kontext about one megapixel from 21:9 to 9:21; Studio asks each for its largest. Other sources serve FLUX at their own limits (DeepInfra and Together hold an edge to 1440 or 1920 px).
- **No transparent backgrounds**: the model always draws a ground.

Sources: Black Forest Labs' [FLUX.2 prompting guide](https://docs.bfl.ml/guides/prompting_guide_flux2), [prompt reference](https://docs.bfl.ml/guides/prompting_unified_reference.md), [multi-reference editing](https://docs.bfl.ml/guides/prompting_editing_multi_reference.md), [Kontext editing](https://docs.bfl.ml/kontext/kontext_image_editing.md), [output sizes](https://help.bfl.ai/articles/8916739058-what-aspect-ratios-and-output-dimensions-are-supported), [FLUX 3 Image](https://docs.bfl.ml/flux_3/flux3_image_generate.md) and their [prompting skills](https://github.com/black-forest-labs/skills).
