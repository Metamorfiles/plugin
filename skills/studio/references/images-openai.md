# OpenAI GPT Image

For ChatGPT Images (`chatgpt/images`, the user's ChatGPT plan) and `gpt-image` models through an OpenAI key or OpenRouter. Read with [images.md](images.md), whose rules still hold.

## Prompting

- **Start with the verb.** "Draw…" for a new image, "Edit image 1…" to change one. To combine images, edit one with the other: "Edit image 1 by adding the ceramic cup from image 2 on the left of the counter", never "combine" or "merge".
- **Order and labels.** Scene first, then the subject, the details, then the constraints on a line of their own. Short labeled parts ("Use: background for a feed post. Constraints: …") are read well.
- **Photo look.** Say it's a photograph (professional product photography, photorealistic), with real texture (the grain of the stone, the wear on the handle), or it drifts toward illustration.
- **Keeping things exact.** List what must not change ("the bottle's shape, label and color stay exactly as in image 1") and repeat the list every time you change something else; this family follows such lists better than most.
- **Exclusions work here.** Unlike other families, a short "no extra text, no watermark" at the end is respected. Still describe clean surfaces first.
- **References.** Label each by number and role ("Image 1: the product photo, keep it exactly. Image 2: only the light and palette"), then say how they combine. A reference an edit changes is image 1.
- **Words in the image** only where the image carries them (a logo drawn whole): the exact words in quotes, an uncommon one spelled letter by letter, and where they sit.
- **Camera words** set framing loosely; they don't produce an exact lens.
- Weak at exact positions in dense layouts, and at the same person or character across images: pass the character's sheet as image 1 each time, say "do not redesign the character", and name each part with its colour ("two arms with dark #2b1d14 paws") rather than describing it in general.

## Model notes (checked 2026-10)

- **On a ChatGPT plan, a chat model writes the image prompt from yours.** It keeps what is stated first and plainly, so put the subject and the hard constraints there. The prompt the image model received is saved in the image's record (`<image>.json`, `revisedPrompt`): read it when a result misses something, to see whether the rewrite dropped it before you change your own prompt.
- When a colour lands wrong, read `revisedPrompt` to see which rule the rewrite kept.
- **Transparent backgrounds** are asked for, not guaranteed: when the result says it came back opaque, it isn't a cutout. Tell the user, and use it only where its background belongs.
- **On a ChatGPT plan, OpenAI sets the size**, about 1.6 megapixels in the shape the prompt names: enough for a feed post, not for a 9:16 story's full width or anything printed.

Sources: OpenAI's [image generation tool](https://developers.openai.com/api/docs/guides/tools-image-generation), [image generation guide](https://developers.openai.com/api/docs/guides/image-generation) and [image prompting guide](https://developers.openai.com/cookbook/examples/multimodal/image-gen-models-prompting-guide).
