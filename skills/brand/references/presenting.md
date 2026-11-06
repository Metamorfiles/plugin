# Presenting a brand kit

Read this before you write the message that hands over a kit. The rules for how Studio talks are in
the `studio` skill; this is the shape of this particular message.

## The shape

1. **The board.** The control panel link from the result, first, with the brand's name, as the
   `studio` skill says every result is handed over.
2. **What the brand is**, in two or three sentences, in its own materials: the paper, the ink, the
   accent, what each typeface carries, and what the whole thing feels like. This is the only part
   that is yours to write, and it is what makes the kit feel made rather than extracted.
3. **What you decided for them.** Up to four, the ones that would surprise them, in plain words, no
   values: Sources is the complete record. End with one line telling them a sentence is enough to
   change any of it.
4. **What genuinely needs them.** At most two, and only real ones: a gap you cannot fill, a fact
   only they have, each said as what the kit does until they answer. If there is nothing, say
   nothing. A choice that is theirs was already asked with `metamorfiles_ask_user` before the
   handover.
5. **What they can do next,** as a stated offer: the kit downloads from the brand board (or `metamorfiles_export_kit {}` writes it into `kit/`), with the logos for print and screens, the
   website's icons and colours, the guidelines and the brand's words; and the team can make anything
   with the brand, first the pieces the brief's "What they asked for" names, else posts, a business
   card, covers, a flyer. Studio shows the same offer at the top of the panel, so
   nothing waits for an answer.

## Worked example

For Lumen Skincare, Studio's fictional example brand, handed over the way a designer would:

> **Lumen Skincare**: your brand board is in the control panel, http://127.0.0.1:4747/_studio/?item=templates/brand-board
>
> Warm paper, ink type and one clay accent, with walnut for the night range. Fraunces carries the
> headlines, Inter everything that informs. It reads like a bathroom shelf in early light: calm,
> specific, nothing on it that doesn't need to be there.
>
> **I decided a few things for you.** A dark theme for the night range, built from your walnut and
> ink, and a spacing scale around the one step your site uses. Say the word and I'll change either.
>
> **One for you.** Your site never says where Lumen ships, so the kit's words leave delivery out
> until you tell me.
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

The offer is Studio's: it shows "<Brand> is ready" with **Make the first posts** at the top.
Short: a few plain sentences the user reads at a glance.
