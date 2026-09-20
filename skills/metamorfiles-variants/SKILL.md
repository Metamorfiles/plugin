---
name: metamorfiles-variants
description: Use when the user wants variations of a Metamorfiles template, for example A/B test creatives from a thesis, copy or image alternatives for client approval, one asset per row of a CSV or product feed, or a batch of social or ad images in several formats. Plans variants, writes the batch spec and renders it with a review page.
---

# Metamorfiles variants

<!-- metamorfiles:defers-to-get_guide -->

Call `get_guide` with `name: "metamorfiles-variants"` and follow what it returns. Those are the instructions that
match the Studio installed on this computer, which updates itself; a copy kept here would go out of
date the moment the two diverged. The guide names its own reference files, which you read with the
same tool: `get_guide({ name: "metamorfiles-variants", file: "references/<file>.md" })`.

If `get_guide` isn't there, Metamorfiles Studio isn't running on this computer. Follow the
`activate` skill, or tell the user to check that the Metamorfiles plugin's MCP server started.
