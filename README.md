# Metamorfiles Studio plugin

On-brand social posts, ads and A/B variants in every platform size, designed by your AI agent and rendered on your computer. Official plugin for [Metamorfiles Studio](https://www.metamorfiles.com/studio).

You need a Studio download key, from [metamorfiles.com/pricing](https://www.metamorfiles.com/pricing), and [Node.js 22 or later](https://nodejs.org/en/download).

## Installation

### The easy way: ask your AI app

Paste this into Claude Code, Codex, VS Code, Grok, Cowork, ChatGPT or Cursor:

```text
Install the Metamorfiles Studio plugin for me from github.com/metamorfiles/plugin.

1. Install it in the app you're running in:
   - Claude Code: plugins are installed by commands only I can type, so tell me to type `/plugin marketplace add metamorfiles/plugin`, then `/plugin install metamorfiles@metamorfiles`, then `/metamorfiles:activate`, each on its own line, and stop there.
   - Codex: run `codex plugin marketplace add metamorfiles/plugin`, then `codex plugin add metamorfiles@metamorfiles`.
   - VS Code: run **Chat: Install Plugin From Source** from the Command Palette and enter `https://github.com/metamorfiles/plugin`.
   - Grok: run `grok plugin install metamorfiles/plugin --trust`.
   - Claude Cowork or Desktop, the ChatGPT desktop app, or Cursor: walk me through installing it myself, using the steps for my app at github.com/metamorfiles/plugin.
2. If you can run commands on my computer, activate Studio: run `npx -y metamorfiles@latest activate` with a timeout of at least 10 minutes. It opens a page in my browser where I paste my download key. Never ask me for the key in this chat.
3. When you're done, tell me to start a new session. If activation didn't run, tell me: "Start a new session and run /metamorfiles:activate, or run it yourself in a terminal: npx metamorfiles@latest activate". In apps other than Claude Code, say "activate Metamorfiles" instead of /metamorfiles:activate.
```

Then paste your download key into the page that opens. That's it.

### Claude Code

Type these in Claude Code, one at a time:

```text
/plugin marketplace add metamorfiles/plugin
/plugin install metamorfiles@metamorfiles
```

### Claude Cowork and Claude Desktop

1. Open **Customize** > **Plugins**, click **+** > **Add marketplace** > **Add from a repository**, enter `metamorfiles/plugin`, and sync.
2. Click **Browse**, select **Metamorfiles Studio**, and install. The plugin stays in sync with this repo.

A plugin you install here is also available in Claude Code signed in with the same claude.ai account.

### Codex

```bash
codex plugin marketplace add metamorfiles/plugin
codex plugin add metamorfiles@metamorfiles
```

You can also install it from the plugin browser: run `/plugins` in Codex, or open the **Plugins** tab in the ChatGPT desktop app.

### Cursor

Install from the [Cursor Marketplace](https://cursor.com/marketplace), or open **Customize** in the sidebar and install Metamorfiles Studio.

### VS Code and GitHub Copilot

Run **Chat: Install Plugin From Source** from the Command Palette and enter:

```text
https://github.com/metamorfiles/plugin
```

### Grok

```bash
grok plugin install metamorfiles/plugin --trust
```

### Antigravity, OpenCode and other MCP apps

Antigravity installs plugins only from a local folder, so Studio sets itself up directly:

```bash
npx metamorfiles@latest setup
```

This writes the skills, the design-reviewer agent and the MCP server for Antigravity and OpenCode. For any other MCP app, `npx metamorfiles@latest setup --print` shows the config to paste.

## Activate

Start a new session after installing. Then activate once per computer; every AI app on it shares Studio:

- In Claude Code, run `/metamorfiles:activate`. Claude Code also reminds you at the start of each session until Studio is activated.
- In any app, say "activate Metamorfiles", or just ask for a design.
- Or run `npx metamorfiles@latest activate` in a terminal.

A page served by Studio on your own computer opens in your browser. Paste the download key from your purchase email and click **Activate**. Studio downloads in about a minute. The key never passes through the chat.

## AI images (optional)

When a template needs an AI image, Studio uses a service you connect and asks you the first time which model to use:

- **ChatGPT**, through Codex, on your ChatGPT plan (Plus or higher). No key and no extra cost.
- **OpenRouter**: one sign-in for about 50 models, paid from your OpenRouter credit.
- **Your own key** for OpenAI, Google Gemini, xAI, fal, Replicate, Black Forest Labs, Together or DeepInfra.

Sign-ins and keys go through pages Studio opens on your own computer, never the chat, and keys are kept in your system's password store. If your AI app has its own image tool, your agent can use it and Studio brings the file in. To see or change your sources from a terminal:

```bash
npx metamorfiles@latest images
```

## What you get

- **Templates**: plain HTML with declared variables for text, images, colors, fonts and positions, built from your brand kit.
- **Renders**: pixel-exact PNG, JPEG or WebP in every format, from Instagram stories to YouTube thumbnails.
- **Batches**: variants, spreadsheet rows and formats in one run, with a contact sheet and a review page to share with clients.
- **Control panel**: adjust every variable visually and save the result as defaults or a new variant.

### Bundled skills

| Skill | Use it for |
|---|---|
| `activate` | Activate Studio on this computer with your download key |
| `metamorfiles` | Any Studio work; explains the project and routes to the right workflow |
| `metamorfiles-brand` | Set up the brand kit from a website, guide or logos |
| `metamorfiles-template` | A new or changed template from a brief, reference or screenshot |
| `metamorfiles-variants` | A/B variants, rows from a spreadsheet, batches in several formats |
| `metamorfiles-repurpose` | Adapt one design to other platforms and sizes |

Skills load automatically when your request matches, so you don't need to name them.

## Example prompts

```
> Build our brand kit from example.com
> Make an Instagram post and story for our spring launch
> Create six variants testing price-led against ritual-led hooks
> Turn this key visual into LinkedIn, X, Pinterest and YouTube versions
> Render one post per row of products.csv
```

## License

This plugin (manifests and skills) is MIT licensed. Metamorfiles Studio itself is commercial software; see [metamorfiles.com/terms](https://www.metamorfiles.com/terms).
