# Metamorfiles Studio plugin

On-brand social posts, ads and A/B variants in every platform size, designed by your AI agent and rendered on your computer. Official plugin for [Metamorfiles Studio](https://www.metamorfiles.com/studio).

You need a Studio download key, from [metamorfiles.com/pricing](https://www.metamorfiles.com/pricing), and [Node.js 22 or later](https://nodejs.org/en/download).

## Installation

### Claude Code

```bash
claude plugin marketplace add metamorfiles/plugin
claude plugin install metamorfiles@metamorfiles
```

Claude Code asks for your download key when the plugin is enabled. To set it in the same step:

```bash
claude plugin install metamorfiles@metamorfiles --config download_key=YOUR-KEY
```

### Claude Cowork and Claude Desktop

1. Open **Customize** > **Plugins**, click **+** > **Add marketplace** > **Add from a repository**, enter `metamorfiles/plugin`, and sync.
2. Click **Browse**, select **Metamorfiles Studio**, and install. The plugin stays in sync with this repo.
3. On first use of a Studio tool, activate in your browser (see below).

A plugin you install here is also available in Claude Code signed in with the same claude.ai account.

### Codex

```bash
codex plugin marketplace add metamorfiles/plugin
```

Then install the plugin from inside Codex:

```
codex
/plugins
```

Select **Metamorfiles Studio** and install.

### Cursor

Install from the [Cursor Marketplace](https://cursor.com/marketplace), or open **Customize** in the sidebar and install Metamorfiles Studio.

### Gemini CLI

```bash
gemini extensions install https://github.com/metamorfiles/plugin
```

Gemini CLI asks for your download key during installation.

### Grok

```bash
grok plugin install metamorfiles/plugin --trust
```

## Activate

Clients that ask for your download key at install (Claude Code, Gemini CLI) are ready right away. Everywhere else, the first time your agent uses a Studio tool it gives you a link. The link opens a page served by Studio on your own computer: paste the key from your purchase email and click **Activate**. You do this once per computer. The key never passes through the chat.

## AI images (optional)

Studio can generate images with your own [OpenRouter](https://openrouter.ai/keys) key. Claude Code and Gemini CLI ask for it at install, the activation page has an optional field for it, or run `npx metamorfiles openrouter-key`.

## What you get

- **Templates**: plain HTML with declared variables for text, images, colors, fonts and positions, built from your brand kit.
- **Renders**: pixel-exact PNG, JPEG or WebP in every format, from Instagram stories to YouTube thumbnails.
- **Batches**: variants, spreadsheet rows and formats in one run, with a contact sheet and a review page to share with clients.
- **Control panel**: adjust every variable visually and save the result as defaults or a new variant.

### Bundled skills

| Skill | Use it for |
|---|---|
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
