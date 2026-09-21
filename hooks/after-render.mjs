// Runs after a render and holds the turn while a check error is still on screen.
//
// Studio measures every render and returns what it found, but nothing made the agent act on it:
// the instruction to fix errors and to get an independent review before delivering lived only in
// the session prompt, where it competes with everything else said since. This fires at the moment
// of delivery instead, with the findings in hand.
//
// It has no model, so it never judges a design. It reports what Studio already measured.
import { readFileSync } from "node:fs";

/** Claude scopes an MCP tool as mcp__<server>__<tool>; only the tool part is ours to match. */
const RENDER = /metamorfiles_render_(preview|batch)$/;

const emit = (hookSpecificOutput) => {
  process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: "PostToolUse", ...hookSpecificOutput } }));
  process.exit(0);
};

let event;
try {
  event = JSON.parse(readFileSync(0, "utf8"));
} catch {
  process.exit(0); // Not our payload to interpret.
}

const toolName = event.tool_name ?? "";
if (!RENDER.test(toolName)) process.exit(0);

// Clients that carry structuredContent give it to us directly; the rest put the same object in
// the first text block, so the findings are readable either way.
const response = event.tool_response ?? {};
let result = response.structuredContent;
if (!result) {
  const text = response.content?.find((part) => part.type === "text")?.text;
  try {
    result = text ? JSON.parse(text) : undefined;
  } catch {
    result = undefined;
  }
}
if (!result || typeof result !== "object") process.exit(0);

const isBatch = toolName.endsWith("render_batch");

/** A preview lists its findings; a batch counts them and quotes the first few. */
function errors() {
  if (!isBatch) return (result.warnings ?? []).filter((line) => String(line).startsWith("error"));
  const checks = result.checks;
  if (!checks || typeof checks !== "object") return [];
  return checks.errors > 0 ? (checks.first ?? []).filter((line) => String(line).includes(": error:")) : [];
}

const found = errors();
if (found.length) {
  const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;
  const what = isBatch
    ? `${plural(result.checks.errors, "check error")} across ${plural(result.checks.filesWithFindings, "file")}`
    : plural(found.length, "check error");
  emit({
    decision: "block",
    reason: `Studio found ${what} in this render. Fix them in the template or the values and render again before showing anything to the user.\n\n${found.slice(0, 6).join("\n")}`,
  });
}

// A batch is a delivery. Nothing here can judge the design, so it asks for the reviewer that can.
if (isBatch && result.status === "done") {
  emit({
    additionalContext:
      "This batch passed Studio's automatic checks, which measure the image and cannot judge the design. Before delivering it, get an independent review (the metamorfiles-review skill, or the design-reviewer agent) against brand/DESIGN.md, and give the user the panel link.",
  });
}

process.exit(0);
