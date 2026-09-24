# OpenAI GPT Image

For `gpt-image` models, reached through ChatGPT (Codex), an OpenAI key or OpenRouter. Read with [images.md](images.md), whose rules still hold.

- **Order and labels.** Scene first, then the subject, the details, then the constraints on a line of their own. Short labeled parts ("Use: background for a feed post. Constraints: …") are read well.
- **Photo look.** Say it's a photograph (professional product photography, photorealistic), or it drifts toward illustration.
- **Keeping things exact.** List what must not change ("the bottle's shape, label and color stay exactly as in image 1") and repeat the list every time you change something else; this family follows such lists better than most.
- **Exclusions work here.** Unlike other families, a short "no extra text, no watermark" at the end is respected. Still describe clean surfaces first.
- **References.** Label each one by number and role ("Image 1: product photo. Image 2: light and palette"), then say how they combine.
- **Camera words** set framing loosely; they don't produce an exact lens.
- **Transparent background** (a cutout) works with `transparent: true` on gpt-image-2; also describe an isolated subject with no backdrop or floor shadow.
- **Sizes.** gpt-image-2 takes almost any size (multiples of 16, up to a 3:1 ratio); older models only square, 3:2 and 2:3, so Studio crops more from them.
- **Through ChatGPT**, Codex's own image tool rewrites the prompt: keep the hard constraints first and plain.
- Weak at exact positions in dense layouts, and at the same person across several images.

Sources: OpenAI's [image prompting guide](https://developers.openai.com/cookbook/examples/multimodal/image-gen-models-prompting-guide) and [image generation guide](https://developers.openai.com/api/docs/guides/image-generation).
