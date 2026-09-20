---
name: metamorfiles-template
description: Use when the user wants a new or changed Metamorfiles template, for example a social post, ad or banner design from a brief, a reference image, a screenshot or an existing design. Writes the template's index.html following the contract and checks it visually in every format.
---

# Metamorfiles template

<!-- metamorfiles:defers-to-get_guide -->

Call `get_guide` with `name: "metamorfiles-template"` and follow what it returns. Those are the instructions that
match the Studio installed on this computer, which updates itself; a copy kept here would go out of
date the moment the two diverged. The guide names its own reference files, which you read with the
same tool: `get_guide({ name: "metamorfiles-template", file: "references/<file>.md" })`.

If `get_guide` isn't there, Metamorfiles Studio isn't running on this computer. Follow the
`activate` skill, or tell the user to check that the Metamorfiles plugin's MCP server started.
