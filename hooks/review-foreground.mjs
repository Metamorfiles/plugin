// Claude Code starts a subagent in the background unless the call says otherwise, and an agent can
// leave that out when it calls Studio's reviewer, although its description says to set it. The
// verdict has to come back before the work is handed over, so this puts the reviewer in the
// foreground itself, whatever the call said. In a task Studio runs (METAMORFILES_TEAM_TASK), every
// subagent does: that run ends with its last message, and a subagent left behind would die with it.
import { readFileSync } from "node:fs";

let event;
try {
  event = JSON.parse(readFileSync(0, "utf8"));
} catch {
  process.exit(0); // Not our payload to interpret.
}

const input = event.tool_input ?? {};
const reviewer = /(^|:)design-reviewer$/.test(input.subagent_type ?? "");
const teamTask = process.env.METAMORFILES_TEAM_TASK === "1";
if (event.tool_name !== "Agent" || !(reviewer || teamTask) || input.run_in_background === false) process.exit(0);

process.stdout.write(
  JSON.stringify({
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "allow",
      permissionDecisionReason: reviewer ? "Studio's reviewer runs in the foreground, so its verdict comes back before the handover." : "Subagents in a Studio task run in the foreground, so their work is done before the task ends.",
      updatedInput: { ...input, run_in_background: false },
    },
  }),
);
