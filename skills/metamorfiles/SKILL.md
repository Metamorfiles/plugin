---
name: metamorfiles
description: Use for any Metamorfiles Studio work, such as on-brand social posts, ad creatives, image templates, A/B variants, batches from a data table, or resizing a design into other platform formats. Explains the project layout, the template contract and the tools, then routes to the right workflow skill.
---

# Metamorfiles Studio

<!-- metamorfiles:defers-to-get_guide -->

Call `get_guide` with `name: "metamorfiles"` and follow what it returns. Those are the instructions that
match the Studio installed on this computer, which updates itself; a copy kept here would go out of
date the moment the two diverged. The guide names its own reference files, which you read with the
same tool: `get_guide({ name: "metamorfiles", file: "references/<file>.md" })`.

If `get_guide` isn't there, Metamorfiles Studio isn't running on this computer. Follow the
`activate` skill, or tell the user to check that the Metamorfiles plugin's MCP server started.
