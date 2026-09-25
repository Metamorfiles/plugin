# Create a brand

The examples below come from Lumen Skincare, Studio's made-up example brand, as it could have been created.

Only when the user asks for a new brand, or says there is nothing to translate. The name of a company
that exists, a website, a logo, files or images all mean Translate: follow `SKILL.md`, and invent
nothing.

## Steps

1. Call `metamorfiles_get_project`, with `create: true` and the brand's name (or a working name) when
   the project holds another brand.
2. **One question, with your proposal in it**: what it is, who it's for, how it should feel, and the
   name. Write your reading of the request as the proposal, so "go" is a full answer. Never a form.
3. **Three directions**, each a real alternative rather than three shades of one idea: a different
   ground, type pairing and mood, all right for the brief.
   - Pick the faces from `fonts.md` and save their WOFF2 files in `brand/fonts/` (for Google Fonts,
     request `https://fonts.googleapis.com/css2?family=Fraunces:wght@100..900` with a browser user
     agent and take the latin file).
   - Write `brand/directions.md` with `metamorfiles_write_file`, render `templates/brand-directions`
     with `metamorfiles_render_preview`, and show it with the panel link.
   - Ask which one to build, or what to mix. This is the one step that waits for the user: the whole
     kit follows from the choice.
4. **The kit, from the chosen direction**, as `SKILL.md` describes a kit: colour roles, a type scale
   around the direction's faces, rounded, spacing, components, a dark theme and `casing`.
   - Mark every value `created` in Sources: "created with the user on <date>, direction Morning
     shelf". `created` is the brand's own from then on, held to like any observed value.
   - **Voice**: three concepts from the brief, each with lines written in it, marked created.
   - **Imagery**: the direction's imagery line grown into the Imagery section: the visual world every
     image prompt starts from (light, subjects, surfaces, colour, what never appears).
5. **Logo**: `metamorfiles_make_wordmark` sets the name in the display face as outlined letters. Show
   the preview and wait for a yes, then declare it in DESIGN.md `logos`. A symbol only when the user
   asks, through the image model, and approved the same way.
6. Then steps 6 to 9 of `SKILL.md`: the check, the board, the review, and the handover.

Facts are never created: no claims, prices, awards, history ("since 1994") or customers. Leave them
to the user, in Known gaps if a template will need them. `brand/directions.md` stays as the record of
what was offered; once DESIGN.md exists, the directions board goes.

## directions.md

The first three colours are the direction's ground, its ink and its accent, in that order; the ink
must read on the ground and the accent carries the headline. The board picks the headline's colour
on the accent itself.

```md
---
name: Lumen Skincare
directions:
  - name: Morning shelf
    feeling: Calm and specific, like a bathroom shelf in early light.
    colors: { paper: "#f6f1ea", ink: "#1f1a17", clay: "#c9785b", sand: "#e8dccb" }
    display: { family: Fraunces, file: fonts/Fraunces.woff2, weight: 400 }
    body: { family: Inter, file: fonts/Inter.woff2 }
    headline: Brighter skin in two weeks
    imagery: One bottle on stone, low morning sun, soft shadows, nothing else.
  - name: Night routine
    …
---
```
