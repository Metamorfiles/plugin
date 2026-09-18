// Tells the user, once per new session, when Metamorfiles Studio isn't activated on this computer yet.
import { existsSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const home = process.env.METAMORFILES_HOME ?? join(homedir(), ".metamorfiles");
if (!existsSync(join(home, "kit", "node_modules", "metamorfiles", "dist", "cli.js"))) {
  console.log(
    JSON.stringify({
      systemMessage:
        "Metamorfiles Studio isn't activated yet. Run /metamorfiles:activate and paste your download key from your purchase email.",
    }),
  );
}
