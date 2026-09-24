---
name: activate
description: Activate Metamorfiles Studio on this computer with the buyer's download key. Use when the user asks to activate Metamorfiles or Studio, enter or change their download key, or right after installing the Metamorfiles plugin.
---

# Activate Metamorfiles Studio

Studio is activated once per computer, and every AI app on it shares it. The user pastes their download key into a page served by Studio on their own computer. Never ask for the key in the chat, and never put it in a command.

1. If the `metamorfiles_activate` tool is available, call it. It opens the activation page in the user's browser and returns a link in case the page didn't open. Tell the user to paste the download key from their purchase email there. Call `metamorfiles_activate` again to check progress; Studio's full tools appear when it's ready.
2. Otherwise, if you can run commands on the user's computer, run `npx -y metamorfiles@latest activate` with a timeout of at least 10 minutes. It opens the same page in their browser, waits for the key, then downloads Studio. Pass on the link it prints in case the page didn't open.
3. If you can do neither, or the command was blocked, tell the user: "Ask me to activate Metamorfiles in a new session, or run it yourself in a terminal: `npx metamorfiles@latest activate`".

When activation finishes, Studio's full tools appear in this session in most apps: tell the user it's activated and continue with what they asked for, from `metamorfiles_get_project`. If the tools don't appear, tell them: "Metamorfiles Studio is activated. Start a new session and ask for your first design." Studio needs Node.js 22 or later; if the command reports an older version, tell the user to install the current Node.js from nodejs.org.
