# Images

Read this whenever you make, place or crop an image: an `image` variable whose source is `ai`, a page's variants, a repurposed set, or the image maker's part of a team task. The brand's imagery rules and reference images set the look; the frame sets the shape.

## Getting an image

- Call `metamorfiles_generate_image` without `model`. Studio uses the user's default model, or asks the user itself which model or source to use and remembers the answer. Pass `model` only when the user names one.
- Sources: ChatGPT through Codex (the user's ChatGPT plan, no key), OpenRouter (one sign-in, many models) and provider keys (OpenAI, Google Gemini, xAI, fal, Replicate, Black Forest Labs, Together, DeepInfra). Sign-ins and keys happen on pages Studio opens in the browser; never ask for a key in the chat.
- When the result's status is `generating`, call `metamorfiles_image_status` with its id.
- When it's `needs_choice` or `needs_connection`, do what its message says: in chat, ask the user or give them the link. In a task Studio started, ask the model choice with `metamorfiles_ask_user` (its options are the models the message lists); a missing connection can't be made there, so say in the thread what to connect and carry on without the image.
- If this app has its own image tool and the user prefers it, make the image with it and bring the file in with `metamorfiles_import_image`, which crops and saves it. Bring in an existing image (a source design, a photo the user gave) the same way, at its own width and height to keep it whole.
- Report the cost or limit the result gives.

## Before you prompt

1. Read the variable's `source.instruction` in the template (what the image must show) and the Imagery section of `brand/DESIGN.md`.
2. Look at the brand's reference images in `brand/refs/` if there are any: they are the standard for light, color and mood. Pass the ones that show the look to `metamorfiles_generate_image`.
3. Look at the frame: where the copy sits, and so where the image must stay calm.

## Write the prompt

Check which model will run: `metamorfiles_image_models` names the default. Then write with these rules, which hold for every model, and read that model family's file for what differs:

| The model's id contains | Read |
| --- | --- |
| `gpt-image` | [images-openai.md](images-openai.md) |
| `gemini`, `imagen` or `nano-banana` | [images-gemini.md](images-gemini.md) |
| `flux` | [images-flux.md](images-flux.md) |
| anything else | [images-other.md](images-other.md) |

- **Plain sentences, subject first.** What the image shows, then the setting, the light, the framing, then technical details. Concrete materials, colors and shapes, never vague praise ("beautiful", "premium"). Name the subject each time, never "it". About 30 to 80 words; never past 150, where some models stop reading.
- **Say what it's for**: "background for a social post, the headline sits on the left". Several models change the whole composition on this one line.
- **Place the empty space and describe it as a thing**: "a bare off-white plaster wall across the left third". Name positions (thirds, corners), and ask for the aspect ratio nearest the frame, since Studio crops to it.
- **Ask for what should be there, not for what shouldn't.** Most models read "no people" as a request for people. Keep text out with "clean, unmarked surfaces", and never put a word in quotation marks: every model takes a quoted word as text to draw.
- **Light is the biggest lever**: its direction, softness and time of day ("low morning sun from the left, soft long shadows"). Camera words set framing and depth ("close three-quarter view, shallow depth of field"). At most one or two style anchors, never contradictory ones.
- **The product and the logo come from real files.** Never ask a model to draw packaging text, a logo or an interface. Put the real product photo in the HTML, or pass it as a reference with what must stay exactly as it is.
- **References by order**: "image 1 is the product photo, image 2 sets the light and palette", and say what each one gives and what must stay unchanged. Studio sends only as many as the model takes.
- **Hard constraints early and plain.** Several hosts rewrite prompts before the model sees them, and what's stated first and simply survives.

Example for a skincare launch post:

> A small amber glass dropper bottle of vitamin C serum standing on a pale travertine ledge, morning sunlight from a window on the left casting long soft shadows, warm neutral palette of cream and honey tones, editorial product photography, shallow depth of field, bottle on the right third with calm empty stone on the left.

## Generate and place

- Pass the size the image fills in the frame; Studio crops to it and saves under `assets/`. Make it once at the size of the largest format that shows it, and reuse one image across variants when the variant isn't about the image.
- For choices between directions, make small drafts first (a smaller width and height), let the user pick, then make the chosen one at full size.
- To change a generated image, change one thing at a time (light, angle, background), and repeat the list of what must stay the same each time.
- Place it through the variable's value (the page's `page.json` for one variant, the template default for all), then render every format that shows it: a crop that works in the post can cut the product in the story. Adjust the crop with the design's `object-position`.

## Check

- The subject is whole, not cut at an edge; faces and products are never cropped awkwardly.
- Nothing stretched, soft or upscaled past its size (the checks flag these).
- The copy sits on a calm area, or the design adds a scrim.
- The image looks like the brand's references, not like stock.
