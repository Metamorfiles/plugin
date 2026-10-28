# Images

The brand's image contract sets the look; the frame sets the shape.

Studio keeps every image whole, as the model made it: it never crops a file to fit. Cropping is a design decision, made where the image is used: the frame's `object-fit` and `object-position`, and each format of a repurposed set choosing its own crop from the same whole image. That is why a generated image should be composed for its frame, not cut to it.

## Contents
- The brand's image contract
- Compose it, then make it
- The prompt
- Other parties' marks and images
- Getting an image
- Generate and place, edit or redraw
- Check

## The brand's image contract

Read `brand/imagery-guide.md` before any prompt: it's what every image of this brand shares, written
when the brand was made. Its sections:
- **Style:** one paragraph describing the look, with each colour's hex and what it paints. Pasted
  whole into every prompt.
- **Character** (a brand with a character): who it is, the one thing that makes it itself, how its
  face is made, its palette and its look, in two or three lines, and that nothing about it changes. Pasted whole into
  every prompt that shows the character, with its character sheet first in the references.
- **Colour roles:** what each colour is for in a scene. An accent is a role for objects and light
  (a balloon, a lamp, a spark), never a colour on the character or a quota per image.
- **Writing a scene:** how the brand's scenes are described.

A brand without the guide (translated from an existing one) takes its look from DESIGN.md's Imagery
section and its own pictures; write the same parts from them in your notes and use them alike. A
brand with neither has no look to keep yet: its images follow DESIGN.md's colours, and the user can
have the team make its imagery (the `brand` skill, "What the team makes next").

## Compose it, then make it

The brand's library (the folders DESIGN.md `assets` lists) is a style reference, not a stock folder.
An image that carries a piece is made for that piece.

1. **Compose the frame first** (`references/design.md`, "The composition"): its idea, its picture and
   the image's slot, its shape and size.
2. **Make it for that slot** with the prompt below, `width` and `height` the slot's size. It's saved
   under `assets/`: a piece's images are the piece's, never added to the brand's library, whose
   images are reviewed as a set (the library grows only through the brand's library step).
   - **A character or product is a cutout:** `transparent: true`. ChatGPT and OpenAI models make
     transparent images; ask the others for a flat field in the brand's paper colour, set `ground`,
     and place it as a field. Cutouts, scenes and type in one frame: `references/design.md`, "The
     composition".
3. **Use a library image as it is** only when it already is that composition: a pattern, a texture, a
   small spot used as decoration, or the very picture the brief names. A near fit is still the wrong
   image: a generic picture on a slide about something specific reads as filler.

No image repeats within a page or post. The plan names each frame's image: "new:" with its subject and
slot, or the library file and why it already fits.

## The prompt

One shape for every brand image, in short labelled sections, the order OpenAI's guide gives (other
models read it as well):

1. **References,** numbered, each with its role. The image to keep goes first, since models preserve
   the first most closely:
   - a character: its sheet first (the first of its folder's `anchors` in DESIGN.md, or the logo
     step's `sheet` while a brand is made; `references/sheet.md` of the `character` skill): "Image 1
     is the reference sheet of <name> from every side: keep its identity, anatomy and colours exactly;
     draw exactly one <name>, in this scene's own pose". The pose, which way the head turns and the
     expression are this prompt's, never copied from image 1;
   - the library's sheet next, its folder's frame on the brand board
     (`templates/brand-board#<folder>`, such as `templates/brand-board#refs`): "Image 2 is the
     brand's image library: take only its drawing style, palette and texture; never copy its
     subjects or compositions";
   - a product or a source image: what must stay exactly as it is.
2. **Scene:** the frame's composition, word for word from its `composition` line (`design.md`, "The
   composition"): where the subject is, its scale and crop, which way it faces, what stays empty and
   the shape ("portrait, 4:5"); then the setting and the light.
3. **Subject:** what it shows, plainly, named each time, never "it". A person or an animal in one
   line: who (age, gender, clothing), the one action, where they look, the one object they handle
   and how ("hands gripping the handlebar"), and the framing ("full body visible, feet included", or
   cropped at the waist). Nothing more about the body: never which hand, arm or leg does what,
   unless the task decides it (a guitar's fretting hand). A photograph of people is candid and
   unposed, caught mid-moment. With the character: its pose, which way its head turns and its
   expression, then its Character lines pasted whole.
4. **Style:** the style block (the guide's Style), pasted whole.
5. **Constraints,** plain and early enough to survive a host that rewrites prompts: "exactly one
   <the character>", "nothing about <the character> changes: its colours, its one feature, its proportions", "no text
   or lettering", and anything the scene must not add.

`metamorfiles_generate_image { prompt, width: 1080, height: 700, references: ["brand/<character folder>/<sheet>", "templates/brand-board#refs"] }`

Then the craft, for every model, and that model family's file for what differs (`metamorfiles_image_models` names the default):

| The model's id contains | Read |
| --- | --- |
| `chatgpt` or `gpt-image` | [images-openai.md](images-openai.md) |
| `gemini`, `imagen` or `nano-banana` | [images-gemini.md](images-gemini.md) |
| `flux` | [images-flux.md](images-flux.md) |
| anything else | [images-other.md](images-other.md) |

- **Concrete words.** Materials, colours as hex tied to what they paint, shapes; never vague praise
  ("beautiful", "premium") and never a colour's name in the brand kit (the model doesn't know
  "Roxo"; it knows #3a1c8c). Keep the scene and subject short (60 to 100 words together); the guide's blocks go
  in as they are.
- **Place the empty space and describe it as a thing**: "a bare off-white plaster wall across the left
  third". Name positions (thirds, corners) and the shape: several models, ChatGPT among them, compose
  for the shape the prompt states.
- **Ask for what should be there.** Most models read a bare "no people" as a request for people; say
  "an empty street" instead, and keep exclusions to the Constraints line. Keep text out with "clean,
  unmarked surfaces", and never put a word in quotation marks: a quoted word is drawn. The one image
  that carries words is a logo drawn whole (`references/drawn.md` of the `logo` skill).
- **One or two style anchors at most, never contradictory instructions:** given two rules that
  compete (an accent quota and the character's colours), the model picks one, and not always yours.
- **Detail matches the brief.** A specific brief is reorganised into the sections, not rewritten; a
  vague one gets only what the picture needs to work. Never add a person, an object, an action or a
  story beat the brief doesn't imply, and never put something on one side (left, right) without a
  reason.
- **Light is the biggest lever**: its direction, softness and time of day. Camera words set framing
  and depth.
- **The product and the logo come from real files.** On a designed piece, never ask a model to draw
  packaging text, a logo or an interface; place the real file in the layout, or pass it as a
  reference with what must stay.

One exception: a mockup photograph names its colours in words and quotes its words: the `mockup` skill.

Example, a character brand's carousel slide:

> Image 1 is the reference sheet of Dew, the brand's water drop, from every side: keep its identity, anatomy and colours exactly; draw exactly one Dew, in this scene's own pose. Image 2 is the brand's image library: take only its drawing style, palette and texture; never copy its subjects or compositions.
> Scene: a bathroom shelf at dawn lit by one soft window from the right; portrait 4:5; the top third stays calm, plain #1d2a44 for the headline.
> Subject: Dew stretching beside an unlabelled serum bottle, one arm raised in a yawn, head turned three-quarter to the left, one eye cracked open. Dew: a sleepy water drop, wider at the bottom, its point curling like a bed-head curl, body #bfe3f0, lids and mouth #2b1d14; nothing about Dew changes.
> Style: flat poster illustration, thick even #121212 outline, flat fills, strong contrast, little or no shading.
> Constraints: exactly one Dew; nothing about Dew changes; the lamp's glow is the only #ffc21a; no text or lettering.

## Other parties' marks and images

When the content names someone else (the tools in a post, a partner, a sponsor, an event, a launch),
show the real thing, never a drawing of it.

- **A logo or icon:** `metamorfiles_find_mark { name: "Perplexity" }` shows the candidates (Simple
  Icons first, one colour in its brand's colour; SVGL for colour logos and wordmarks), then
  `metamorfiles_find_mark { name: "Perplexity", use: "simple-icons:perplexity" }` saves the chosen one
  into `assets/marks/`. Pass `color` for a one-colour version on a dark or busy ground. With none
  found, the owner's press kit: `metamorfiles_import_image { url, credit, license }`.
- **A photo of a real event, product or person:** only one you may use, with its source: the user's
  own, an official press or newsroom image, or an openly licensed one.
  `metamorfiles_import_image { url: "<the image's own address>", credit: "Photo: …", license: "CC BY 4.0" }`
  records them; never an image from a search you have no right to use.
- **How they're shown:** the mark as it is or in one colour, smaller than the brand's own logo, never
  as a partnership or endorsement the brief doesn't state; a credit where the license asks, in the
  frame or the caption; the brand's style around them, not on them.
- **Never generated:** an image model never draws another party's logo (it can't, and it isn't
  theirs), and never makes a photo of a real event or a real person. A scene that needs both, such
  as the brand's character using a tool, is drawn with a blank screen or object, and the real mark
  is set beside it in the layout.

## Getting an image

- Call `metamorfiles_generate_image { prompt, width: 1080, height: 1350 }` without `model`. Studio uses the user's default model, or asks the user itself which model or source to use and remembers the answer. Pass `model` only when the user names one.
- Studio asks the user for a source and handles sign-ins and keys on its own pages; never ask for a key in the chat.
- When the result's status is `generating`, call `metamorfiles_image_status { id }`.
- Several images at once (seeds, a library, blank photos): start each with `metamorfiles_generate_image { prompt, width, height, wait: false }`, so they are made together, then wait for each with `metamorfiles_image_status`. Started one by one, each waits for the last.
- When it's `needs_choice`, it lists the models: ask with `metamorfiles_ask_user`, up to four of them as options, then call `metamorfiles_generate_image` again with the same prompt and size plus `model: "<id>"`, and `remember: true` only when the user said to use it every time. When it's `needs_connection`, do what its message says: in chat, give the user the link; in a task Studio started, the connection can't be made, so say in the thread what to connect and carry on without the image.
- If this app has its own image tool and the user prefers it, make the image with it and bring the file in with `metamorfiles_import_image { path: "<absolute path>" }`, which saves it whole. Bring in an existing image (a source design, a photo the user gave) the same way.
- Report the cost or limit the result gives.

## Generate and place, edit or redraw

- **Make or place.** Anything that must match a file is placed exactly on a designed piece. A mockup
  photograph follows the `mockup` skill; a piece that needs a picture and the files follows the
  `artwork` skill.
- Pass `width` and `height` as the size the image is used at: the model composes for that shape, nothing is cropped, and Studio saves the result whole under `assets/`. For an image several formats show, pass the format it matters most in, and compose with room around the subject so every other format can crop it well. Make it once and reuse it across variants when the variant isn't about the image.
- The result can be another size than the one passed: each source makes its own sizes. When the result says it's smaller than the frame, the design will enlarge it and it may look soft: tell the user, and let them decide on a source that makes larger images.
- For choices between directions, make each option as the real thing: the one the user chooses is the image used, never made again, since a new one would be a different image.
- **Edit or redraw.** Edit when one part should change and the rest stay: `metamorfiles_generate_image { prompt: "the lid lies beside the tin, open side up", width, height, references: ["/assets/<file>.png"], edit: true }`, the image first in `references` and the prompt only what changes. Studio asks the model to keep the rest and takes what it draws whole, so check the result as you would a new image; `region` names the one place it may change, and nothing outside it does. One change per edit. Redraw from the prompt when the composition, a pose or the subject is wrong: an edit keeps what's in the image, so a new pose drawn by an edit keeps the old head on a changed body (`references/poses.md` of the `character` skill). Never use a generated image as a style reference for the next: copies of copies drift.
- Place it through the variable's value, the path the result gives exactly as it is (`/assets/<file>.png`, leading slash kept): `metamorfiles_edit { item: "pages/<id>", changes: [{ do: "value", variable: "photo", value: "/assets/<file>.png", variant: "<id>" }] }` for one variant, without `variant` for the whole page, on the template for its default. Then render every format that shows it: a crop that works in the post can cut the product in the story. Set each format's crop with the design's `object-position`.

## Check

Look at the result, then change one thing at a time: an edit or a new take says what changes and
repeats what must stay.

Look at every generated image at full size before you use it or show it. Image models make the same
mistakes again and again; redo an image that has any of them, saying what to fix and what to keep:
- **Hands and bodies:** extra or missing fingers, fused hands, a limb bending the wrong way, a third
  arm, a body in a pose it couldn't hold, faces that melt at the edges.
- **Objects:** duplicated parts (a cup with two handles, a bike with three pedals), warped or bent
  straight things, parts that float or pass through each other, a strap that goes nowhere.
- **Physics and light:** shadows that point different ways, reflections of nothing, steam or liquid
  that ignores gravity.
- **Text:** any lettering at all, which comes out garbled; the brand's words are set in the design.
- **Background:** stray figures, extra objects, repeated patterns and smeared detail behind the
  subject.
- **The character:** the same character as its sheet, by eye: the face, the one feature, the
  proportions and the colours. A part in a colour the character doesn't have (a gold paw) or a part
  its kind doesn't have (an arm on a bird) is as wrong as an extra arm. Only what you can see counts:
  a part hidden by the pose, an object or the edge isn't missing.
- **The brand:** a colour outside the guide's roles, or the style broken (shading in a flat style).

Then:
- The crop is the one the composition names (`design.md`, "A crop is a choice").
- Nothing stretched, soft or upscaled past its size (the checks flag these).
- The copy sits on a calm area, or the design adds a scrim.
- The image looks like the brand's references, not like stock.
