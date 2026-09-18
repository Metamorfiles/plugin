# Maintaining the Metamorfiles Studio plugin

Public plugin for Metamorfiles Studio: skills plus the MCP server entry, packaged for every client from one repo (PostHog/ai-plugin layout). No product code lives here; the MCP entry runs `npx -y metamorfiles@latest mcp` (the public installer package in the private kit repo's `installer/`), which downloads Studio with the buyer's key.

## Files per client

- Claude Code, Cowork, Desktop, Grok: `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, `.mcp.json`, and `hooks/` (a SessionStart notice while Studio isn't activated)
- Codex / ChatGPT, Cursor (Agent Plugins standard): `plugin.json` + `mcp.json` (schema-validated, no secrets in `env`), `.agents/plugins/marketplace.json`
- Cursor extras: `.cursor-plugin/plugin.json`
- Gemini CLI: `gemini-extension.json`

No manifest asks for the download key. Every app activates the same way: the `activate` skill (or the `activate_studio` tool) opens a page served on the buyer's computer where they paste the key once.

## Rules

- `skills/` is a copy of the kit repo's `skills/`. Edit skills in the kit, then copy them here.
- Keep `version` identical in every manifest and the marketplace entry; bump it on every change so clients pick up updates.
- Validate before committing: `claude plugin validate .` and `claude plugin validate .claude-plugin/plugin.json`, plus the Agent Plugins schemas for `plugin.json` and `mcp.json`.
- Work on `dev`; `main` is what buyers install. Never push to `main` directly.
