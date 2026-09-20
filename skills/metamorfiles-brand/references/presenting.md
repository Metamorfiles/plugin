# Presenting a brand kit

Read this before you write the message that hands over a kit. The rules for how Studio talks are in
the `metamorfiles` skill; this is the shape of this particular message.

## The shape

1. **The board.** The image `render_preview` returned, before any words.
2. **What the brand is**, in two or three sentences, in its own materials: the paper, the ink, the
   accent, what each typeface carries, and what the whole thing feels like. This is the only part
   that is yours to write, and it is what makes the kit feel made rather than extracted.
3. **What you decided for them.** Up to four, in plain words, no values. End with one line telling
   them a sentence is enough to change any of it.
4. **What genuinely needs them.** Never more than two, and only real ones: a gap you cannot fill, a
   choice that is theirs. If there is nothing, say nothing.
5. **One question.**

Then the panel link, on its own line, at the end.

## Worked example

> **Prompt Royale**
>
> [the board]
>
> Chalk paper, ink type, indigo for action, and gold kept for winners only. Young Serif carries the
> headlines, Hanken Grotesk the text, JetBrains Mono the model names. It reads calm and even-handed,
> which is the right register for a product whose whole point is not tipping the scales.
>
> **I decided a few things for you.** The spacing above the largest step your app uses, the padding
> inside the green band, and a text colour for errors — your app only ever uses red as a tint, so
> there was nothing to copy. Say the word and I'll change any of them.
>
> **One for you.** Your winner gold and the muted greens sit a hair under the accessibility floor.
> It is invisible to the eye and it is your brand, so I left it exactly as it is; the fix is a
> two-digit change in your app whenever you want it.
>
> Want me to draw a logo for the gold and dark-green backgrounds, or start on the first launch piece?

## What this message never contains

- Hex values, contrast ratios, pixel sizes or token names. They are on the board and in DESIGN.md.
- A report of what you ran: checks, the linter, renders, file writes, tool names.
- A list of everything marked `proposed`. Name the few that would surprise them; the Sources table
  is the complete record and it is one file away.
- A menu of approvals. One question, and it is a real one.
- An apology for what the brand doesn't have.

## Getting it wrong

A kit this was written for was handed over like this: *"Values I supplied rather than observed (all
marked proposed in Sources): on-error in both themes — the app only ever uses error as a 10% tint
behind error text, so no solid pair exists. spacing step names and the 3xl (64px) step... Two AA
misses I did not fix. award-token-maxxer-muted and award-prompt-wizard-muted each land at 4.49:1."*

Every word of it was true, and the buyer read it as a build log from a tool rather than a handover
from a designer. The information is not the problem; the room it was said in is.
