# Checks

`metamorfiles_check_logo` measures every route's logo before it's shown, and again after every fix:
before the choice, its letters and its one-colour version; after it, the chosen route's reversed
version, small mark and final files.

`metamorfiles_check_logo { file, ground: "#f6f1ea", dark: "#3b2e27" }`, with its ground and the
brand's dark colour. Act on what it reports and nothing else; the look is the reviewer's (the
`review` skill):

| It reports | Fix |
| --- | --- |
| `lostInOneColour`, with `merged` boxes | That part only worked through colour. Nothing is redrawn before the choice; the chosen logo gets a version redrawn in those boxes only (`drawn.md`, "Other versions of it") |
| With `word`: the result says the model redrew some letters | Draw the part onto the word again, the prompt holding every letter as it is (`symbol.md`, "Compose it on the word") |
| `off`, letters moved off their line | Keep a move the route's composition means; set back one it doesn't |
| `boxes`, each piece's place | Where a `keep` box comes from (`drawn.md`, "Other versions of it") |
| Stroke weights of a lockup's parts | Facts for the reviewer; nothing to act on |
