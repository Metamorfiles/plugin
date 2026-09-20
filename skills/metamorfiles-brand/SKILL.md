---
name: metamorfiles-brand
description: Use when the user wants to set up, import or change the brand in a Metamorfiles project, for example from their website, their app's theme or styles, a brand guidelines PDF, logos or reference images. Translates the brand into brand/DESIGN.md (the design.md format), from which Studio generates the brand tokens and the brand board.
---

# Metamorfiles brand

<!-- metamorfiles:defers-to-get_guide -->

Call `get_guide` with `name: "metamorfiles-brand"` and follow what it returns. Those are the instructions that
match the Studio installed on this computer, which updates itself; a copy kept here would go out of
date the moment the two diverged. The guide names its own reference files, which you read with the
same tool: `get_guide({ name: "metamorfiles-brand", file: "references/<file>.md" })`.

If `get_guide` isn't there, Metamorfiles Studio isn't running on this computer. Follow the
`activate` skill, or tell the user to check that the Metamorfiles plugin's MCP server started.
