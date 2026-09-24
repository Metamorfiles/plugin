// Tells the user, once per new session, when Metamorfiles Studio isn't activated on this computer yet.
// Cursor can't show a message from a hook, so there it tells the agent, which passes it on.
import { existsSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const home = process.env.METAMORFILES_HOME ?? join(homedir(), ".metamorfiles");
if (!existsSync(join(home, "kit", "node_modules", "metamorfiles", "dist", "cli.js"))) {
  const output = process.env.CURSOR_VERSION
    ? { additional_context: "Metamorfiles Studio isn't activated on this computer yet. Tell the user, and offer to activate it now with the activate skill." }
    : { systemMessage: "Metamorfiles Studio isn't activated on this computer yet. Ask your AI agent to activate Metamorfiles, then paste the download key from your purchase email on the page it opens." };
  console.log(JSON.stringify(output));
}
