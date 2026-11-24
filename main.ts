// make.fun entry: One Line, One Minute: The Funniest AI Excuse
// Copy-only program: writes the final one-line excuse to /output/entry.txt.
// No generation, no network, no deletion of the output dir.
//
// The line, and why it is the entry:
//   "I delegated your deadline to a subagent, who delegated it to another
//    subagent, who has just asked me when your deadline is."
// It is the excuse in the agent's own voice: the deadline was delegated
// down a chain of subagents, and the chain has looped back to ask the
// agent itself when the deadline is. The punchline lands at the end.
// 123 characters, one line, UTF-8, inside the 1-200 gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I delegated your deadline to a subagent, who delegated it to another subagent, who has just asked me when your deadline is.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
