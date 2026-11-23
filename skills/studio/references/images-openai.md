# OpenAI GPT Image

For ChatGPT Images (`chatgpt/images`, the user's ChatGPT plan) and `gpt-image` models through an OpenAI key or OpenRouter. Read with [images.md](images.md), whose rules still hold.

## Prompting

- **Name the use and the layout first**: what the image is for (a product photo, a poster background), the composition and where things sit. For a full scene, labelled parts (scene, subject, details, constraints) keep each request findable.
- **An edit starts with its verb**, "Edit image 1…". To combine images, edit one with the other: "Edit image 1 by adding the serum bottle from image 2 to the shelf".
- **Photo look.** The word "photorealistic" switches on the model's photographic mode; with it, a moment caught as it happens and real texture and signs of use (the grain of the stone, the wear on the handle), or it drifts toward illustration. Words that imply studio polish ("professional", "cinematic", "flawless") pull toward a retouched ad; use them only for a studio shot.
- **Keeping things exact.** Name what must not change ("the bottle's shape, label and colour stay as in image 1") and repeat the list on every edit: each edit is a new drawing, so whatever it doesn't name may move.
- **Exclusions work here.** A short "no other text, logos or watermarks" at the end is respected. Describe what you want first.
- **References.** Label each by number and role ("Image 1: the logo, reproduce it exactly. Image 2: only the light and palette"), then say how they combine. The first image keeps the most detail, so it is the one that must survive (the logo, or the image an edit changes).
- **Words in an image that carries them** (a logo, a mockup): the exact words in quotes, appearing once, an uncommon one or a brand name spelled letter by letter, and where they sit.
- **Transparent backgrounds follow the prompt.** The model draws any backdrop, scenery or ground the prompt describes, even when Studio asks for transparency; for a cutout, describe the subject alone with no backdrop.
- **Camera words** set the look loosely; they don't produce an exact lens.
- Weak at exact positions in dense layouts, and at the same mark, person or character across images: pass the master each time (the logo file, the character's sheet as image 1), say "do not redesign it", and name each part with its colour ("lids and mouth #3b2e27") rather than describing it in general. No prompt keeps a mark pixel-exact.

## Model notes

- **Shapes and size, with an OpenAI key.** GPT Image 2 and later make any shape from 3:1 to 1:3; Studio asks each for its largest size in that shape: about 8 megapixels on 2.6 (up to 3840 px a side), and 2560x1440's pixels on 2 and 2.5, which OpenAI calls experimental above that. GPT Image 1.5 makes only 1024x1024, 1536x1024 and 1024x1536.
- **On a ChatGPT plan, a chat model writes the image prompt from yours.** It keeps what is stated first and plainly, so put the subject and the hard constraints there. After a reviewer's must fix for something the image lacks, read the prompt the model received (`revisedPrompt` in `<image>.json`) before you change yours.
- **On a ChatGPT plan, OpenAI sets the size**, about 1.6 megapixels in the shape the prompt names, between 3:1 and 1:3: enough for a feed post, not for a 9:16 story's full width; what it holds on paper, `print.md` says.

Sources: OpenAI's [image generation guide](https://developers.openai.com/api/docs/guides/image-generation), [image generation tool](https://developers.openai.com/api/docs/guides/tools-image-generation), [image prompting guide](https://developers.openai.com/api/docs/guides/image-prompting), [transparent assets cookbook](https://developers.openai.com/cookbook/examples/multimodal/transparent-image-assets-for-campaigns-and-presentations) and [prompting cookbook](https://developers.openai.com/cookbook/examples/multimodal/image-gen-models-prompting-guide), and ChatGPT's [image guide](https://openai.com/academy/image-generation/).
