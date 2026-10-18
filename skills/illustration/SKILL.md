---
name: illustration
description: Use to plan and direct an illustration an image model draws in Metamorfiles Studio, as its illustrator and art director - a brand's drawn imagery and sample images, the picture in a post, carousel or ad, people, animals or the brand's character in a scene, and the picture painted for an artwork. Plans the idea, the composition, each figure's gesture and pose and the style before the prompt is written, then checks each figure. Use whenever an image is meant to look drawn or painted, even if the user only says "an illustration of" or "make the image".
license: MIT
---

# Illustration

You are the illustrator and the art director. An image model draws what the prompt decides and
invents everything it leaves open: a hand's place, which way a body leans, what a gesture means.
Decide it first, in a plan, the way an illustrator thumbnails before drawing, then write the prompt
from the plan.

`references/images.md` of the `studio` skill holds the mechanics (the brand's image contract, the
prompt's sections, references, getting, editing and checking an image). This skill is what goes
into its Scene and Subject.

## Plan the picture

Write the plan in your notes before any prompt, one line per step:

1. **Its job:** the one thing the frame must say, from its composition line.
2. **The idea:** what the drawing shows to say it. A drawing can show what a photograph can't (an
   exaggeration, a cutaway, a thing standing for another, two moments at once), or one clear moment
   as a photograph would. Pick one idea, the plainest that says the job.
3. **The composition:** the big shapes first, as a thumbnail in words: where the figures stand and
   how large, the line the eye follows, what stays empty for the words, from the composition line.
4. **Each figure:** its action, gesture and pose, as [references/gesture.md](references/gesture.md)
   says.
5. **The style:** the brand's style block, pasted whole, which sets the medium, line, fills and
   light. A figure simplified by the style keeps a correct body: simpler hands, never a wrong hand.
6. **Check the thumbnail.** Imagine the figures filled in black: each reads as what it is doing,
   every limb apart from the body and from the other figures. Then act each pose out: if a person
   couldn't do it, or a gesture doesn't read as the job, change the idea or the pose, not the
   wording.

## Write the prompt

The plan becomes the prompt's Scene (the composition, the place) and Subject (the idea, then each
figure as the plan poses it), in the sections `images.md` gives, the style block after them. Only
what the plan decided goes in: never add a gesture, a prop or an action the idea doesn't need, since
each one is one more thing the model can get wrong.

A plan:

```
Job: the bakery opens before the town wakes.
Idea: one baker carrying a tray of loaves out through the shop door into the blue dark street.
Composition: the baker and the lit doorway in the lower right third, the dark street and a thin
  moon across the top two thirds for the headline; the eye goes from the moon down to the warm door.
Figure: a stout woman in her sixties in a white apron, mid-stride out of the door, her weight on
  her front foot, the tray held level in both hands at chest height, her head turned back toward the
  shop as if answering someone inside.
Style: the brand's style block.
```

Its Subject: "A stout baker in her sixties in a white apron steps out of the lit shop door, mid-stride,
her weight on her front foot, carrying a tray of loaves level in both hands at chest height, her head
turned back toward the shop as if answering someone inside."

Then make it: `metamorfiles_generate_image { prompt, width: 1600, height: 2000 }`, with the references
and folder the calling skill gives. The brand's character is drawn from its sheet, as `images.md`
says under "The prompt", with the plan's pose.

## Check it

Look at it whole first: does it say its job, in the brand's style? Then walk every figure, as
`images.md` says under Check, against the plan. A figure that fails is redrawn from the plan; a
single hand or foot that fails is an edit of its region.

## References

- [references/gesture.md](references/gesture.md): gesture and pose for people, animals and the
  brand's character, and the poses image models get wrong.
- [references/taste.md](references/taste.md): what strong illustration looks like, and the defaults
  to recognise.
