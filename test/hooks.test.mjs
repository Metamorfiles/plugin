// Runs every hook command the way clients do: through each shell they may pick, with each name
// they give the plugin root, and with the payload shapes they send. CI runs it on Linux, macOS and
// Windows, where a client may hand a hook to Git Bash, PowerShell or cmd.
import { spawnSync } from "node:child_process";
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { strict as assert } from "node:assert";

const plugin = join(import.meta.dirname, "..");
const windows = process.platform === "win32";
const scratch = mkdtempSync(join(tmpdir(), "metamorfiles-hooks-"));

// A root with a space, away from the working folder, so nothing passes by accident.
const root = join(scratch, "Plugin Root");
cpSync(join(plugin, "hooks"), join(root, "hooks"), { recursive: true });
const elsewhere = join(scratch, "elsewhere");
mkdirSync(elsewhere);

const shells = windows
  ? {
      bash: (c) => ["bash", ["-c", c]],
      pwsh: (c) => ["pwsh", ["-NoProfile", "-Command", c]],
      powershell: (c) => ["powershell", ["-NoProfile", "-Command", c]],
      cmd: (c) => ["cmd", ["/d", "/s", "/c", `"${c}"`], { windowsVerbatimArguments: true }],
    }
  : {
      sh: (c) => ["sh", ["-c", c]],
      bash: (c) => ["bash", ["-c", c]],
      pwsh: (c) => ["pwsh", ["-NoProfile", "-Command", c]],
    };

// Every shell must be there in CI; locally, one that isn't installed is skipped.
for (const [name, make] of Object.entries(shells)) {
  const [bin, args, extra] = make("exit 0");
  if (spawnSync(bin, args, extra).error) {
    if (process.env.CI) throw new Error(`${name} is missing on this runner`);
    console.log(`skip ${name}: not installed`);
    delete shells[name];
  }
}

const clean = Object.fromEntries(
  Object.entries(process.env).filter(([key]) => !/PLUGIN_ROOT$|^CURSOR_|^METAMORFILES_HOME$/.test(key)),
);

function run(shell, command, { env = {}, cwd = elsewhere, input = "" } = {}) {
  const [bin, args, extra] = shells[shell](command);
  const out = spawnSync(bin, args, { ...extra, cwd, input, env: { ...clean, ...env }, encoding: "utf8" });
  assert.equal(out.status, 0, `${shell} exited ${out.status}: ${out.stderr}`);
  return out.stdout.trim();
}

// Payloads in the shapes clients send: Claude Code's bare list of content blocks, and Cursor's
// JSON string in tool_output.
const blocks = (result) => [{ type: "text", text: JSON.stringify(result) }];
const previewError = {
  tool_name: "mcp__plugin_metamorfiles_metamorfiles__metamorfiles_render_preview",
  tool_response: blocks({ warnings: ["error: headline overflows its box", "warning: low contrast"] }),
};
const previewClean = { ...previewError, tool_response: blocks({ warnings: [] }) };
const batchClean = {
  tool_name: "mcp__metamorfiles__metamorfiles_render_batch",
  tool_response: blocks({ status: "done", checks: { errors: 0, filesWithFindings: 0, first: [] } }),
};
const batchError = {
  ...batchClean,
  tool_response: blocks({
    status: "done",
    checks: { errors: 2, filesWithFindings: 1, first: ["post-1.png: error: label cut", "post-1.png: error: logo clipped"] },
  }),
};
const otherTool = { tool_name: "Bash", tool_response: { stdout: "error: nothing to do with us" } };

const expectations = [
  [previewError, (out) => {
    assert.equal(out.decision, "block");
    assert.match(out.reason, /1 check error/);
    assert.match(out.reason, /headline overflows/);
    assert.equal(out.hookSpecificOutput.hookEventName, "PostToolUse");
  }],
  [batchError, (out) => {
    assert.equal(out.decision, "block");
    assert.match(out.reason, /2 check errors across 1 file/);
  }],
  [batchClean, (out) => {
    assert.equal(out.decision, undefined);
    assert.match(out.hookSpecificOutput.additionalContext, /independent review/);
  }],
  [previewClean, null],
  [otherTool, null],
];

function check(stdout, expect, label) {
  if (!expect) return assert.equal(stdout, "", `${label}: expected silence, got ${stdout}`);
  expect(JSON.parse(stdout));
}

let passed = 0;
for (const file of ["hooks/hooks.json", "com.github.copilot/hooks/hooks.json"]) {
  const { hooks } = JSON.parse(readFileSync(join(plugin, file), "utf8"));
  const [render] = hooks.PostToolUse[0].hooks;
  const [notice] = hooks.SessionStart[0].hooks;

  for (const shell of Object.keys(shells)) {
    for (const variable of ["CLAUDE_PLUGIN_ROOT", "PLUGIN_ROOT", "GROK_PLUGIN_ROOT"]) {
      const env = { [variable]: root };
      for (const [payload, expect] of expectations) {
        check(run(shell, render.command, { env, input: JSON.stringify(payload) }), expect, `${file} ${shell} ${variable}`);
        passed++;
      }

      const home = join(scratch, "home");
      rmSync(home, { recursive: true, force: true });
      const inactive = JSON.parse(run(shell, notice.command, { env: { ...env, METAMORFILES_HOME: home } }));
      assert.match(inactive.systemMessage, /isn't activated/);
      const cli = join(home, "kit", "node_modules", "metamorfiles", "dist");
      mkdirSync(cli, { recursive: true });
      writeFileSync(join(cli, "cli.js"), "");
      assert.equal(run(shell, notice.command, { env: { ...env, METAMORFILES_HOME: home } }), "");
      passed += 2;
    }
  }
}

// Cursor sets no root variable and runs plugin hooks from the plugin folder.
const cursor = JSON.parse(readFileSync(join(plugin, ".cursor-plugin", "hooks.json"), "utf8"));
const [cursorHook] = cursor.hooks.postToolUse;
const asCursor = (payload) => ({
  tool_name: `MCP:${payload.tool_name.split("__").pop()}`,
  tool_input: "{}",
  tool_output: JSON.stringify({ content: payload.tool_response }),
  cursor_version: "3.0.0",
});
for (const shell of Object.keys(shells)) {
  const env = { CURSOR_VERSION: "3.0.0" };
  const blocked = JSON.parse(run(shell, cursorHook.command, { env, cwd: plugin, input: JSON.stringify(asCursor(previewError)) }));
  assert.match(blocked.additional_context, /headline overflows/);
  assert.equal(blocked.decision, undefined);
  const delivered = JSON.parse(run(shell, cursorHook.command, { env, cwd: plugin, input: JSON.stringify(asCursor(batchClean)) }));
  assert.match(delivered.additional_context, /independent review/);
  assert.equal(run(shell, cursorHook.command, { env, cwd: plugin, input: JSON.stringify(asCursor(previewClean)) }), "");
  passed += 3;
}

rmSync(scratch, { recursive: true, force: true });
console.log(`${passed} hook runs passed in ${Object.keys(shells).join(", ")}`);
