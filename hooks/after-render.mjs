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

// Clients hand over the tool result in different shapes. Claude Code sends the content blocks as a
// bare list, with structuredContent as JSON in the text block; others send an object carrying
// structuredContent or content, or a string. Every shape is read, because one that isn't recognised
// is not an error to report: the hook would just stay quiet, which is how it went unnoticed.
function findResult(value) {
  if (!value) return undefined;
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch {
      return undefined;
    }
  }
  if (Array.isArray(value)) {
    for (const block of value) {
      const found = block?.type === "text" ? findResult(block.text) : undefined;
      if (found && typeof found === "object") return found;
    }
    return undefined;
  }
  if (typeof value === "object") {
    if (value.structuredContent && typeof value.structuredContent === "object") return value.structuredContent;
    if (value.content) return findResult(value.content);
    // Already the structured result itself.
    if ("warnings" in value || "checks" in value || "status" in value) return value;
  }
  return undefined;
}

const result = findResult(event.tool_response);
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
