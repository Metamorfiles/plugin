# Google Gemini (Nano Banana) and Imagen

For `gemini` image models (Nano Banana) and `imagen`. Read with [images.md](images.md), whose rules still hold.

- **Rich sentences, not keyword lists.** Describe the scene as you would to a photographer.
- **Product and negative-space shots** have a known shape here: the surface the product stands on, the light setup, the camera angle, the one detail to show; or the subject small in a named corner of a large empty field of one color, for text. The second is exactly a social-post background.
- **Absences as presences**: "an empty, quiet street", never "no cars".
- **References.** Refer to them as "image 1", "image 2". To keep one exact, describe it in detail and say it stays completely unchanged. The Pro model takes the most references (up to 14, 5 of them closely kept), the Flash models fewer, the older 2.5 model about three.
- **Say what it's for**, and for a complex scene, describe it step by step.
- **No transparent background.** Ask for a plain backdrop and let the design place it.
- **Ratios** from 1:1 to 21:9, and the 3.1 models also very tall or wide strips; Lite makes small images only.
- Every image carries Google's invisible SynthID watermark.
- **Imagen** (on Replicate): one short paragraph, subject, then context, then style. It rewrites prompts itself, takes no reference images, and five ratios (1:1, 3:4, 4:3, 9:16, 16:9).

Sources: Google's [Gemini image generation guide](https://ai.google.dev/gemini-api/docs/image-generation), the [Nano Banana prompting guide](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-nano-banana) and the [Imagen prompt guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide).
