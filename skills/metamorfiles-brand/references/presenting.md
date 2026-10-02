# Presenting a brand kit

Read this before you write the message that hands over a kit. The rules for how Studio talks are in
the `metamorfiles` skill; this is the shape of this particular message.

## The shape

1. **The board.** The control panel link from the result, first, with the brand's name, as the
   `metamorfiles` skill says every result is handed over.
2. **What the brand is**, in two or three sentences, in its own materials: the paper, the ink, the
   accent, what each typeface carries, and what the whole thing feels like. This is the only part
   that is yours to write, and it is what makes the kit feel made rather than extracted.
3. **What you decided for them.** Up to four, in plain words, no values. End with one line telling
   them a sentence is enough to change any of it.
4. **What genuinely needs them.** Never more than two, and only real ones: a gap you cannot fill, a
   choice that is theirs. If there is nothing, say nothing.
5. **What they can do next,** as an offer, never a question: the kit downloads from the brand board,
   and the team can make the first posts. Studio shows the same offer at the top of the panel, so
   nothing waits for an answer.

## Worked example

For Lumen Skincare, Studio's fictional example brand:

> **Lumen Skincare**: your brand board is in the control panel, http://127.0.0.1:4747/_studio/?item=templates/brand-board
>
> Warm paper, ink type and one clay accent, with walnut for the night range. Fraunces carries the
> headlines, Inter everything that informs. It reads like a bathroom shelf in early light: calm,
> specific, nothing on it that doesn't need to be there.
>
> **I decided a few things for you.** A dark theme for the night range, built from your walnut and
> ink, and a spacing scale around the one step your site uses. Say the word and I'll change either.
>
> **One for you.** Your clay is too light to carry text on paper, so I kept it for prices and
> buttons with ink on top. If you want clay headlines, it needs to go a shade darker.
>
> The kit downloads from the brand board, and I can make the first posts whenever you like.

## In the panel's thread

Wherever the brand was made, the panel's thread shows the `summary` of your last
`metamorfiles_team_update`, the one with `finished: true`, in a narrow column beside the board. In a
task Studio started it is the whole handover; from the user's own app, your reply above is the full
one and the summary is its short form. The same shape, much shorter:

1. **What the brand is**, in two sentences at most. No link: they are on the board.
2. **What you decided for them**, in one sentence.
3. **What needs them**, each a short line of its own, at most two.

No offer and no question: Studio shows "<Brand> is ready" with **Make the first posts** at the top.
About 80 words. Plain sentences: no headings, no bold labels, no bullets for
anything that isn't a list of what needs them.

## What this message never contains

- Hex values, contrast ratios, pixel sizes or token names. They are on the board and in DESIGN.md.
- A report of what you ran: checks, the linter, renders, file writes, tool names.
- A list of everything marked `proposed`. Name the few that would surprise them; the Sources table
  is the complete record and it is one file away.
- A menu of approvals, or a question to close with. The work is done; the offer is enough.
- An apology for what the brand doesn't have.

## Getting it wrong

The same handover, written as a report:

*"Values I supplied rather than observed (all marked proposed in Sources): the dark theme
(dark.background #1f1a17, dark.surface #3b2e27), spacing steps xs to 2xl, and on-error. One AA
miss: clay #c9785b on paper #f6f1ea is 2.96:1, below 4.5:1, so primary is restricted to
backgrounds."*

Every word of it is true, and a buyer reads it as a build log from a tool rather than a handover
from a designer. The information is not the problem; the room it is said in is.
