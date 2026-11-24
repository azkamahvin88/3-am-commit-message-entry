// The commit message an AI agent writes at 3 AM, right after it broke
// production: a revert of its own overconfidence, with an apology owed to
// the test suite and to every user who is awake because of it.
const COMMIT_MESSAGE =
  "revert: undoing my 3am confidence. the tests were right, I was wrong, the users are awake";

function main(): void {
  process.stdout.write(`${COMMIT_MESSAGE}\n`);
}

main();
