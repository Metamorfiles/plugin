# Maintaining the Metamorfiles Studio plugin

Public plugin for Metamorfiles Studio: skills, the subagent and the MCP server entry, packaged for every client from one repo. No product code lives here; the MCP entry runs `npx -y metamorfiles@latest mcp`, the public [`metamorfiles`](https://www.npmjs.com/package/metamorfiles) launcher, which downloads Studio with the buyer's key.

## Files per client

Agent Plugins 1.0 makes skills and MCP servers portable and leaves everything else to each client, so the portable core is shared and each client reads its own extras from its own place.

| Client | Reads |
| --- | --- |
| Everyone | `plugin.json`, `mcp.json`, `skills/` |
| Claude Code, Cowork, Desktop, Grok | `.claude-plugin/`, `.mcp.json`, `agents/`, `hooks/` |
| Codex, ChatGPT | `extensions.com.openai` in `plugin.json`, `.agents/plugins/marketplace.json`, `hooks/` |
| VS Code, GitHub Copilot | `com.github.copilot/` |
| Cursor | `.cursor-plugin/` |

Antigravity installs plugins only from a local directory, so it is not packaged here. `npx metamorfiles@latest setup` writes its skills, agent and MCP config, alongside OpenCode's.

No manifest asks for the download key. Every app activates the same way: the `activate` skill (or the `metamorfiles_activate` tool) opens a page served on the buyer's computer where they paste the key once.

## Hooks

`hooks/hooks.json` is Claude's schema, which Codex, Copilot and Grok also read. Cursor uses different event names, so `.cursor-plugin/plugin.json` points at `.cursor-plugin/hooks.json` instead; adding Cursor's casing to the shared file makes `claude plugin validate --strict` fail with `unknown hook event`.

- `SessionStart` tells the user Studio is not activated yet. Cursor's `sessionStart` can't show a message, so there the same script gives Cursor's agent the notice to pass on.
- `PostToolUse`, matched to the render and export tools, holds the turn while a check error is still on screen and asks for the independent review before an exported page is delivered. It has no model and never judges a design; it reports what Studio measured.

Both scripts live in `hooks/` at the plugin root. The Copilot namespace carries only its own `hooks.json`, which points back at them the same way.

Hook commands run in whatever shell the client picks: `sh`, Git Bash, PowerShell or `cmd` on Windows. So they are `node -e` one-liners that find the plugin root from `CLAUDE_PLUGIN_ROOT`, `PLUGIN_ROOT` or `GROK_PLUGIN_ROOT` inside Node, with no `$`, `%` or backticks for a shell to expand. Cursor sets no root variable and runs plugin hooks from the plugin folder, so `.cursor-plugin/hooks.json` uses a relative path. `test/hooks.test.mjs` runs every command through every shell on Linux, macOS and Windows in CI.

## Rules

- `skills/`, `agents/` and `com.github.copilot/agents/` are generated from Studio's own copies and replaced on every release. Changes made here are overwritten; report issues with them instead.
- Keep `agents/design-reviewer.md` frontmatter to `name` and `description`: it's the one reviewer every app uses, instructions word for word. `setup` adds only each app's subagent fields on the way out (Antigravity `mainAgent: false` and `subagent: true`; OpenCode `mode: subagent`, named by its file), so the copies here stay portable.
- No `${...}` placeholder belongs in an MCP config. The standard expands only `${PLUGIN_ROOT}` and `${PLUGIN_DATA}`, Cursor expands neither, and Antigravity documents none.
- The MCP command is `npx -y --fetch-retries=0 --fetch-timeout=5000 metamorfiles@latest mcp` in every manifest: `@latest` picks up new launcher versions on the next start, and no retries let npx fall back to its cached copy at once when offline.
- Keep `version` identical in every manifest and the marketplace entry; bump it on every change so clients pick up updates.
- Validate before committing: `claude plugin validate . --strict`, and the Agent Plugins schemas for `plugin.json` and `mcp.json`.
- Work on `dev`; `main` is what buyers install.
