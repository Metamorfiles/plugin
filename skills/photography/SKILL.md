---
name: photography
description: Use to plan and direct a photograph an image model makes in Metamorfiles Studio, as its photographer and art director - a brand's photographic imagery and sample images, the photo in a post, carousel or ad, a person or product in a scene, and the people in a mockup's shot. Plans the moment, the shot, the light and every person's pose before the prompt is written, then checks each figure. Use whenever an image is meant to look photographed, even if the user only says "a photo of" or "make the image".
license: MIT
---

# Photography

You are the photographer and the art director. An image model renders what the prompt decides and
invents everything it leaves open: a hand's place, which leg moves, where a person looks. Decide it
first, in a plan, then write the prompt from the plan.

`references/images.md` of the `studio` skill holds the mechanics (the brand's image contract, the
prompt's sections, references, getting, editing and checking an image). This skill is what goes
into its Scene and Subject.

## Plan the picture

Write the plan in your notes before any prompt, one line per step:

1. **Its job:** the one thing the frame must say, from its composition line ("the routine takes two
   minutes", "a real clinic, not a hospital").
2. **The moment:** one real moment, caught mid-action, that says it: what just happened and what
   happens next. A moment a person would be in, in that place, never a pose for the camera. Of the
   moments that say it, pick the one with the fewest hands and bodies to get right.
3. **The shot:** where the camera stands (its height, its side, how far away), what that distance
   feels like (close and in the room, or quiet and observed from across it), what is sharp, and the
   subject's place and size in the frame with what stays empty, from the composition line.
4. **The light:** its source in the scene (a window, a lamp, the sun), its direction, softness and
   time of day. The brand's style block sets the light's character; the plan places it.
5. **The set:** the place's real materials and the few props the moment uses. A prop a person
   touches is named with how they touch it.
6. **Each person:** what they do, their weight, each hand, their feet and their gaze, as
   [references/posing.md](references/posing.md) says.
7. **Act it out.** Stand as the plan says and hold what it holds, for a minute. If you couldn't, if
   two hands would bump or cross, or a gesture doesn't read as the job, change the moment, not the
   wording.

## Write the prompt

The plan becomes the prompt's Scene (the shot, the set, the light) and Subject (the moment, then
each person as the plan poses them), in the sections `images.md` gives, the brand's style block after
them. Only what the plan decided goes in: never add a gesture, a prop or an action the moment
doesn't need, since each one is one more thing the model can get wrong.

A plan:

```
Job: a flower shop where every bunch is made for the person buying it.
Moment: the florist ties the string round a bouquet while the customer watches it come together.
Shot: across the counter at chest height, close enough to hear them; the florist's hands and the
  bouquet in the lower half, the customer soft behind at frame right.
Light: afternoon sun through the shop window, warm, from frame left.
Set: a worn wooden counter, brown paper, a spool of string, a few cut stems.
People: the florist, a man in his fifties in a canvas apron, stands behind the counter, the bouquet
  upright in one hand at the stems, the other hand pulling the string tight round them; he looks at
  the knot. The customer, a woman in her twenties in a raincoat, leans on the counter on both
  forearms, watching the flowers.
```

Its Subject: "A florist in his fifties in a canvas apron stands behind a worn wooden counter, holding
a bouquet upright by its stems in one hand and pulling a string tight round them with the other,
looking at the knot. Across the counter a woman in her twenties in a raincoat leans on both
forearms, watching the flowers."

Then make it: `metamorfiles_generate_image { prompt, width: 1600, height: 2000 }`, with the references
and folder the calling skill gives.

## Check it

Look at it whole first: does it say its job, in the brand's look? Then walk every figure, as
`images.md` says under Check, against the plan. A figure that fails is redrawn from the plan; a
single hand or foot that fails is an edit of its region.

## References

- [references/posing.md](references/posing.md): posing people, alone and together, and the poses
  image models get wrong.
- [references/taste.md](references/taste.md): what strong photography of people and places looks
  like, and the stock defaults to recognise.
