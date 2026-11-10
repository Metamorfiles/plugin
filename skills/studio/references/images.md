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

## The brand's image contract

Read `brand/imagery-guide.md` before any prompt: it's what every image of this brand shares, written
when the brand was made. Its sections:
- **Style:** one paragraph describing the look, with each colour's hex and what it paints. Pasted
  whole into every prompt, so it holds only how a picture looks; what each picture shows is its
  own Scene.
- **Character** (a brand with a character): who it is, the one thing that makes it itself, how its
  face is made, its palette and its look, in two or three lines, and that nothing about it changes. Pasted whole into
  every prompt that shows the character, with its character sheet first in the references.
- **Colour roles:** what each colour paints in a scene, each tied to what it paints. An accent is a
  role for objects and light (a lamp, a prop the scene has, a spark), tied to what it paints rather
  than to the character or a count per image: a quota competes with everything else in the scene, and
  the model paints the accent wherever it can.
- **Writing a scene:** one or two of the brand's scenes, written as "The prompt" below says.

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
   under `assets/`: a piece's images are the piece's: the brand's library, reviewed as a set, grows only
   through the brand's library step.
   - **A cutout** (which images are cutouts, scenes or none: `references/design.md`, "The
     composition") is made with `transparent: true`, its prompt saying the subject is whole and
     alone on a fully transparent background, with no backdrop, scenery or shadow. Whether a model makes transparent images is its
     `transparent` flag in `metamorfiles_image_models`; for a model that doesn't, or a result that
     comes back opaque, do as `references/vector.md` of the `logo` skill says, and place it as a
     field.
3. **Use a library image as it is** only when it already is that composition: a pattern, a texture, a
   small spot used as decoration, or the very picture the brief names. Anything less is made new: a picture
   made for something else reads as filler on a piece about something specific.

Make one image per distinct picture the plan needs. Variants that test something other than the
image (a headline, an offer) share it, so the test reads one change; each slide of one post has
its own picture. The plan names each frame's image: "new:" with its subject and slot, the image it
shares, or the library file and why it already fits.

## The prompt

Brief the model the way an art director briefs a photographer or an illustrator for one picture:
what it is for, the moment it shows and where, how it is seen, and how it looks. A brief that holds
together leaves the model the taste-driven choices inside it; separate rules each get drawn
literally. One shape for every brand image but a mockup photograph (the `mockup` skill), in short
labelled lines, in this order, each holding only its own:

1. **References,** numbered, each with its role. The image to keep goes first, since models preserve
   the first most closely:
   - a character: its sheet first (the first of its folder's `anchors` in DESIGN.md, or the logo
     step's `sheet` while a brand is made; `references/sheet.md` of the `character` skill): "Image 1
     is the reference sheet of <name> from every side: keep its identity, anatomy and colours exactly;
     draw exactly one <name>, in this scene's own pose". What it does and feels is this prompt's own,
     written for this scene;
   - the library's sheet next, its folder's frame on the brand board
     (`templates/brand-board#<folder>`, such as `templates/brand-board#refs`): "Image 2 is the
     brand's image library: take only its drawing style, palette and texture; never copy its
     subjects or compositions";
   - a product or a source image: what must stay exactly as it is.

   A generated image is a reference only once the user approved it or the reviewer passed it, since
   an unchecked image carries its faults into the next, and copies of copies drift: the chosen
   seeds, the passed character sheet, a passed flat design, and, once the kit's `handover` review
   has passed it, the library's sheet. While a new brand's kit is made its library is not yet
   reviewed, so images made then (its mockups and their flats) take only the chosen seeds and the
   character sheet. The image an edit changes is its own image 1, not a reference, so this never stops a fix.
2. **What it is:** the medium and the use in one line, which set how real or drawn and how
   finished the model makes it: "A photorealistic photograph for Lumen's spring launch post", "A flat
   poster illustration for a carousel slide".
3. **Scene:** the picture as one moment, seen from one place, as the frame's composition decided
   it (`design.md`, "The composition"):
   - **What happens:** who or what, doing what, where, each called by its name every time. A person
     or an animal in one line: who (age, gender, clothing), the action, where they look and what
     they hold or touch; how people are shown (posed or caught in the moment) is the brand's imagery
     guide's. Which hand, arm or leg does what is the model's, unless the task decides it. With the
     character: what it does and feels, in one line, then its Character lines pasted whole.
   - **The shot:** how close (close-up, medium, wide, top-down), the camera's height and angle, for a
     photograph the lens, a figure's framing ("full body, feet included", "from the waist up"),
     where the subject sits in the frame and what fills the rest. The type's room is part of what the
     camera sees, where the composition put it: "she fills the lower half; the bare plaster wall rises
     above her". Then the shape ("portrait, 4:5").
   - **The light:** its direction, softness and time of day; for a night, low-light, neon, rainy or
     wide scene, also its scale, atmosphere and colour, so the mood keeps the picture real.
   - **A real place** is named where it is, and whatever of the outside the frame shows (out of a
     window, down a street, behind a counter) is described as that place's own, or kept out of frame:
     an outside the prompt leaves open, the model fills with a famous view of somewhere else.

   Read it back as the photographer would: every phrase sets up the same single shot. The model
   draws each phrase it is given, so two shots described at once come out as both.
4. **Style:** the style block (the guide's Style), pasted whole: how every picture of the brand looks.
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

- **Concrete words.** Materials, colours as hex tied to what they paint, shapes: the model knows
  #c9785b, not the kit's name "Clay", and praise ("beautiful", "premium") gives it nothing to draw. Keep the scene to what the picture needs; the guide's blocks go
  in as they are.
- **Ask for what should be there.** Say "an empty street": most models read a bare "no people" as a
  request for people. Exclusions go on the Constraints line alone. For no text, ask for "clean,
  unmarked surfaces" and write words without quotation marks, since a quoted word is drawn. The images
  that carry words are a logo drawn whole (`references/drawn.md` of the `logo` skill) and the
  exception below.
- **One style anchor at most:** given two that compete, the model picks one, and not always yours.
- **The image carries what the composition decided.** A specific brief is reorganised into the
  sections, not rewritten; a vague one gets only what the picture needs to work. Every person,
  object, action and story beat in it comes from the composition (an idea of yours goes there
  first), and a side or a facing only when the composition needs it.
- **The product and the logo come from real files.** On a designed piece, never ask a model to draw
  packaging text, a logo or an interface; place the real file in the layout, or pass it as a
  reference with what must stay.

One exception: a mockup's photograph and its flat designs, whose prompts are the `mockup` skill's.

Two examples for Lumen, a photograph and a slide with Dew, its mascot (a mascot is drawn, even where the brand's imagery is photographs):

> Image 1 is the brand's image library: take only its light, grade and palette; never copy its subjects or compositions.
> What it is: a photorealistic photograph for Lumen's spring launch post.
> Scene: one unlabelled serum bottle with a #c9785b cap stands on a warm sandstone ledge by a bathroom window in the early morning, a drop of serum beaded on the stone beside it. A close shot at the ledge's height on a 50mm lens: the bottle stands in the lower right third, and the bare #f6f1ea plaster wall above the ledge fills the upper two thirds. Low sun from the window on the right throws long, soft shadows to the left. Portrait, 4:5.
> Style: a real photograph in low side light, long soft shadows, shallow depth of field, a muted warm palette, the real texture of stone and glass.
> Constraints: clean, unmarked surfaces; one bottle.

> Image 1 is the reference sheet of Dew, the brand's water drop, from every side: keep its identity, anatomy and colours exactly; draw exactly one Dew, in this scene's own pose. Image 2 is the brand's image library: take only its palette and texture; never copy its subjects or compositions.
> What it is: a flat poster illustration for a carousel slide.
> Scene: Dew wakes up on a bathroom shelf beside an unlabelled serum bottle with a #c9785b cap, mid-stretch, sleepy and pleased with itself. Seen straight on at the shelf's height: Dew and the bottle stand in the lower third, and the plain #f6f1ea wall above the shelf fills the rest. Early light from one soft window on the left. Portrait, 4:5. Dew: a sleepy water drop, wider at the bottom, its point curling like a bed-head curl, body #e9dccb, lids and mouth #3b2e27; nothing about Dew changes.
> Style: flat poster illustration, an even #1f1a17 outline, flat fills, little or no shading.
> Constraints: exactly one Dew; nothing about Dew changes: its colours, its curl, its proportions; no text or lettering.

## Other parties' marks and images

When the content names someone else (the tools in a post, a partner, a sponsor, an event, a launch),
show the real thing, never a drawing of it.

- **A logo or icon:** `metamorfiles_find_mark { name: "<their name>" }` shows the candidates (Simple
  Icons first, one colour in its brand's colour; SVGL for colour logos and wordmarks), then
  `metamorfiles_find_mark { name: "<their name>", use: "<the candidate's id>" }` saves the chosen one
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
- Several images at once (seeds, a library, mockups): start each with `metamorfiles_generate_image { prompt, width, height, wait: false }`, so they are made together, then wait for each with `metamorfiles_image_status`. Started one by one, each waits for the last.
- When it's `needs_choice`, it lists the models: ask with `metamorfiles_ask_user`, up to four of them as options, then call `metamorfiles_generate_image` again with the same prompt and size plus `model: "<id>"`, and `remember: true` only when the user said to use it every time. When it's `needs_connection`, do what its message says: in chat, give the user the link; in a task Studio started, the connection can't be made, so say in the thread what to connect and carry on without the image.
- If this app has its own image tool and the user prefers it, make the image with it and bring the file in with `metamorfiles_import_image { path: "<absolute path>" }`, which saves it whole. Bring in an existing image (a source design, a photo the user gave) the same way.
- Report the cost or limit the result gives.

## Generate and place, edit or redraw

Write every prompt to pass the picture checks of the `review` skill's Rubric, which the reviewer holds
the result to. Studio checks every result and says what came back: made or failed, its size and shape,
whether it is see-through, a trace's match. Never look at a result to confirm it or to judge it: the
reviewer judges it (the `review` skill). Look at an image only when your next design decision
depends on what is in it: where its subject sits for the crop and the type, or which passed flat
the next shot is given.

- **Make or place.** Anything that must match a file is placed exactly on a designed piece. A mockup
  photograph follows the `mockup` skill; a piece that needs a picture and the files follows the
  `artwork` skill.
- Pass `width` and `height` as the size the image is used at, and Studio saves the result whole under `assets/`. The model composes for that shape as far as it can, but each source makes only some shapes (its family's file says which), so a slot longer than that, such as a shelf strip or a long banner, gets back a shorter picture. Plan such a slot from the start: its subjects made as cutouts (`transparent: true`) that the layout places and scales, or a picture whose ends are calm ground the slot can lose. For an image several formats show, pass the format it matters most in, and compose with room around the subject so every other format can crop it well.
- The result can be another size and shape than the one passed, and says so. Fit the design to the image that came back: every subject whole, and any crop only through calm ground or as the composition named it. When it doesn't fit that way, change the slot, or make the picture again in a shape the source makes. When the result says it's smaller than the frame, the design will enlarge it and it may look soft: ask with `metamorfiles_ask_user` whether to keep it or make it again with a source that makes larger images (`metamorfiles_image_models` lists them).
- For choices between directions, make each option as the real thing: the one the user chooses is the image used as it is, since a new one would be a different image.
- **Edit or redraw.** An image changes only as the `review` skill's Run it, step 4, says. Edit it when its composition works: `metamorfiles_generate_image { prompt: "the cap lies beside the bottle, open side up", width, height, references: ["brand/refs/serum-morning.jpg"], edit: true, folder: "assets" }`, the image first in `references`, the prompt saying only what changes and what stays; `region` names the one place it may change, and nothing outside it does. An image gets one edit for each look: every fix for it goes in that edit's prompt, listed together, with `region` only when they all fall in one place, so an image is never edited twice for one review. Draw it again from its prompt only when the idea, the composition, a pose or the subject is what's wrong: an edit keeps what's in the image, so a new pose drawn by an edit keeps the old head on a changed body. Where the fix lands: a page's or template's picture, a library image it started from included, is a new picture for that piece, `folder: "assets"` (as above), set with `metamorfiles_edit`, so the page gets its version and its review and the library never grows from a piece; a brand image Studio keeps takes of (a sample image, a library image, a mockup, a flat design), when that image itself is fixed, passes `replaces: "<file>"`, so the new image is its next take and Studio keeps the earlier one for the user to pick back (an edit of a sample image or a mockup does this by itself); a logo step's file (a route, a mascot, its sheet), edited under its own name (no `name`), takes its file's place on the step by itself, Studio keeping the version the user saw; a new image made from one (a mascot drawn out of a logo) gets a `name` of its own. A generated image is passed in only as "The prompt" says (References).
- Place it through the variable's value, the path the result gives exactly as it is (`/assets/<file>.png`, leading slash kept): `metamorfiles_edit { item: "pages/<id>", changes: [{ do: "value", variable: "photo", value: "/assets/<file>.png", variant: "<id>" }] }` for one variant, without `variant` for the whole page, on the template for its default. Then render every format that shows it, for where its subject sits: a crop that works in the post can cut the product in the story. Set each format's crop with the design's `object-position`.
