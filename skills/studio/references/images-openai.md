# OpenAI GPT Image

For ChatGPT Images (`chatgpt/images`, the user's ChatGPT plan) and `gpt-image` models through an OpenAI key or OpenRouter. Read with [images.md](images.md), whose rules still hold.

## Prompting

- **An edit starts with its verb**, "Edit image 1…". To combine images, edit one with the other: "Edit image 1 by adding the serum bottle from image 2 to the shelf".
- **Photo look.** The word "photorealistic" switches on the model's photographic mode; with it, a moment caught as it happens and real texture and signs of use (the grain of the stone, the wear on the handle), or it drifts toward illustration. Words that imply studio polish ("professional", "cinematic", "flawless") pull toward a retouched ad; use them only for a studio shot.
- **Keeping things exact.** Name what must not change ("the bottle's shape, label and colour stay as in image 1") and repeat the list on every edit.
- **Exclusions work here.** A short "no other text, logos or watermarks" at the end is respected. Describe what you want first.
- **References.** Label each by number and role ("Image 1: the logo, reproduce it exactly. Image 2: only the light and palette"), then say how they combine. The first image keeps the most detail, so it is the one that must survive (the logo, or the image an edit changes).
- **Words in an image that carries them** (a logo, a mockup): the exact words in quotes, appearing once, an uncommon one or a brand name spelled letter by letter, and where they sit.
- **Camera words** set the look loosely; they don't produce an exact lens.
- Weak at exact positions in dense layouts, and at the same mark, person or character across images: pass the master each time (the logo file, the character's sheet as image 1), say "do not redesign it", and name each part with its colour ("lids and mouth #3b2e27") rather than describing it in general. No prompt keeps a mark pixel-exact.

## Model notes

- **On a ChatGPT plan, a chat model writes the image prompt from yours.** It keeps what is stated first and plainly, so put the subject and the hard constraints there. After a reviewer's must fix for something the image lacks, read the prompt the model received (`revisedPrompt` in `<image>.json`) before you change yours.
- **On a ChatGPT plan, OpenAI sets the size**, about 1.6 megapixels in the shape the prompt names, between 3:1 and 1:3: enough for a feed post, not for a 9:16 story's full width or anything printed.

Sources: OpenAI's [image generation tool](https://developers.openai.com/api/docs/guides/tools-image-generation), [image generation guide](https://developers.openai.com/api/docs/guides/image-generation) [image prompting guide](https://developers.openai.com/api/docs/guides/image-prompting) and [prompting cookbook](https://developers.openai.com/cookbook/examples/multimodal/image-gen-models-prompting-guide), and ChatGPT's [image guide](https://openai.com/academy/image-generation/).
