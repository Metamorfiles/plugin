# Other image models

For every model not covered by the OpenAI, Gemini and FLUX files. Read with [images.md](images.md): its rules are what these models need, with the differences below. Models not listed here follow those rules alone.

Through fal, Replicate and DeepInfra, Studio reads each model's own inputs and asks for its largest size in the shape, its references in the field it reads them from, and a transparent background where it has one; `metamorfiles_image_models` lists what each takes.

## Seedream (ByteDance)

- Coherent sentences (subject, action, setting) and a stated use ("design a background for…"); concise and precise beats a pile of adjectives.
- References as "Image 1", "Image 2", each with a role and what to keep from it (the product's material, its shape). No pronouns.
- Name the one image you want: "a series" or "a set" makes it produce several.

## Qwen Image

- The hosted service rewrites prompts by default: put the constraints first and plainly.
- Its strength is dense text in images, which Studio never uses.
- References as "Image 1"; it works best with one to three.

## Grok (xAI)

- One photograph described in prose, in this order: the subject in one opening sentence (what it is, its form, what holds it, the setting), then its details and focal point, the art direction, the light, the colours of the subject and of the background, and the composition. The subject comes first because the model matches it before anything else; an opening of mood or film stock turns it into a stand-in.
- Counts and objects named exactly, each texture once on its surface. Ask for bright, readable exposure: grain, dust or crushed shadows come out as defects.
- An edit leads with the changes, then one sentence that keeps the subject, angle and crop; a whole new prompt restages the scene.
- References are read in the order sent, up to five. Studio asks for 2k at medium quality, in 15 shapes from 21:9 to 9:20. No transparent backgrounds.

## Recraft

- Name the medium early ("a professional photograph of…"). Short prompts leave the design choices to the model; a full prompt from the concept down to the light and camera keeps them yours.
- Composition in plain terms: centered, rule of thirds, tight crop.
- Strong at flat, graphic and vector work (Studio marks vector models); one reference image through OpenRouter.

## Ideogram

- **About 150 words is a hard limit**: anything after it may be ignored, so the important parts come first.
- Order: a one-line summary, the subject, secondary elements, the setting, the light, the framing.
- It takes quoted words as text to render, so write without quotation marks, and phrase everything positively.
- It may rewrite prompts on its own (Magic Prompt).

Sources: [Seedream prompt guide](https://docs.byteplus.com/en/docs/ModelArk/1829186), [Qwen Image](https://github.com/QwenLM/Qwen-Image) and its [API docs](https://www.alibabacloud.com/help/en/model-studio/qwen-image-api), [xAI image docs](https://docs.x.ai/developers/model-capabilities/images/generation) and [prompting guide](https://docs.x.ai/developers/model-capabilities/images/prompting-guide), [Recraft prompting guide](https://www.recraft.ai/docs/prompt-engineering-guide/prompting-with-recraft-v4), [Ideogram prompt structure](https://docs.ideogram.ai/using-ideogram/getting-started/prompting-guide/3-prompt-structure).
