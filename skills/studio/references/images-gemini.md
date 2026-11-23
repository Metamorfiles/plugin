# Google Gemini (Nano Banana)

For `gemini` and `nano-banana` image models, through a Google key or another source. Read with [images.md](images.md), whose rules still hold.

- **Rich sentences.** Describe the scene as you would to a photographer: a narrative paragraph, not a list of keywords, which the model reads as loose tags.
- **Say what is there.** "An empty street" draws better than "no cars": a named absence tends to appear.
- **Product and negative-space shots** have a known shape here: the surface the product stands on, the light setup, the camera angle, the one detail to show; or the subject small in a named corner of a large empty field of one color, for text. The second is exactly a social-post background.
- **References.** Refer to them as "image 1", "image 2", and say which element comes from which. To keep one exact, describe it in detail and say it stays completely unchanged.
- **Words in an image that carries them**: the exact words in quotes, and the lettering described by its style or typeface.
- **Say what it's for**, and for a complex scene, describe it step by step.

## Model notes

- **Shapes and size.** Nano Banana 2.1 and Gemini 3.1 Flash Image make 14 shapes from 8:1 to 1:8 (including 4:1 and 1:4 strips) at up to 4K; Gemini 3 Pro Image ten shapes from 21:9 to 9:16 at up to 4K. Studio asks each for 4K in the nearest shape. 3.1 Flash Lite Image and 2.5 Flash Image make about one megapixel.
- **References.** The newer models take up to 14: on 2.1 and 3.1 Flash, up to 10 objects and 4 characters; on 3 Pro, up to 6 objects, 5 characters and 3 styles. 2.5 Flash Image works best with three.
- **No transparent backgrounds**: the model always draws a ground, so ask for the one the image needs.
- Every Gemini image carries Google's invisible SynthID watermark.

Sources: Google's [Gemini image generation guide](https://aistudio.google.com/docs/image-generation), its [pricing](https://aistudio.google.com/docs/pricing) and the [Nano Banana prompting guide](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-nano-banana).
