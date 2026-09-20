---
name: metamorfiles-review
description: Use before delivering a new or changed Metamorfiles template, a repurposed set or a batch, or when the user asks for a design review. Gets an independent review of the renders against brand/DESIGN.md, with fixes, from a reviewer that didn't make the design.
---

# Metamorfiles review

<!-- metamorfiles:defers-to-get_guide -->

Call `get_guide` with `name: "metamorfiles-review"` and follow what it returns. Those are the instructions that
match the Studio installed on this computer, which updates itself; a copy kept here would go out of
date the moment the two diverged. The guide names its own reference files, which you read with the
same tool: `get_guide({ name: "metamorfiles-review", file: "references/<file>.md" })`.

If `get_guide` isn't there, Metamorfiles Studio isn't running on this computer. Follow the
`activate` skill, or tell the user to check that the Metamorfiles plugin's MCP server started.
