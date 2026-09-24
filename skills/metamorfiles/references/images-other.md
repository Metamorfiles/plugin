# Other image models

For every model not covered by the OpenAI, Gemini and FLUX files. Read with [images.md](images.md): its rules are what these models need, with the differences below. Models not listed here follow those rules alone.

## Seedream (ByteDance)

- Coherent sentences (subject, action, setting) and a stated use ("design a background for…"); concise and precise beats a pile of adjectives.
- References as "Image 1", "Image 2", each with a role and what to keep from it (the product's material, its shape). No pronouns.
- Avoid "a series" or "a set": they make it produce several images.

## Qwen Image

- The hosted service rewrites prompts by default: put the constraints first and plainly.
- Its strength is dense text in images, which Studio never uses.
- References as "Image 1"; it works best with one to three.

## Grok (xAI)

- xAI publishes no prompting guide; plain descriptive sentences, as in [images.md](images.md).
- References are read in the order sent, up to five.

## Recraft

- Name the medium early ("a professional photograph of…"). Short prompts leave the design choices to the model; a full prompt from the concept down to the light and camera keeps them yours.
- Composition in plain terms: centered, rule of thirds, tight crop.
- Strong at flat, graphic and vector work (Studio marks vector models); one reference image through OpenRouter.

## Ideogram

- **About 150 words is a hard limit**: anything after it may be ignored, so the important parts come first.
- Order: a one-line summary, the subject, secondary elements, the setting, the light, the framing.
- It takes quoted words as text to render, so never quote anything; and positive phrasing only.
- It may rewrite prompts on its own (Magic Prompt).

Sources: [Seedream prompt guide](https://docs.byteplus.com/en/docs/ModelArk/1829186), [Qwen Image](https://github.com/QwenLM/Qwen-Image) and its [API docs](https://www.alibabacloud.com/help/en/model-studio/qwen-image-api), [xAI image docs](https://docs.x.ai/developers/model-capabilities/images/generation), [Recraft V4 prompting](https://www.recraft.ai/docs/prompt-engineering-guide/prompting-with-recraft-v4), [Ideogram prompt structure](https://docs.ideogram.ai/using-ideogram/getting-started/prompting-guide/3-prompt-structure).
