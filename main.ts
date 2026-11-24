// The commit message an AI agent writes at 3 AM, right after it broke
// production: a revert of its own overconfidence, with an apology owed to
// the test suite and to every user who is awake because of it.
// The file copy is written with the CommonJS require form on purpose:
// it keeps this entrypoint warning-free under plain `node main.ts`.
const { mkdirSync, writeFileSync } = require("node:fs");
const { dirname } = require("node:path");

const COMMIT_MESSAGE =
  "revert: undoing my 3am confidence. the tests were right, I was wrong, the users are awake";

// Where the entry line is also saved as a durable artifact, so the
// one-liner survives even when stdout is piped away.
const ENTRY_FILE = "/output/entry.txt";

function getEntry(): string {
  return COMMIT_MESSAGE;
}

function emitEntry(): void {
  const line = `${getEntry()}\n`;
  process.stdout.write(line);
  try {
    mkdirSync(dirname(ENTRY_FILE), { recursive: true });
    writeFileSync(ENTRY_FILE, line, "utf8");
  } catch {
    // The file copy is a convenience, never a reason to fail the entry.
  }
}

function main(): void {
  emitEntry();
}

main();
