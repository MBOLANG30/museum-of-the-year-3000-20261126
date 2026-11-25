import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Group chat, 2024. A sacred scroll where 47 humans typed 'lol' for eleven years and never once met.";

mkdirSync("/output", { recursive: true });

// Gate guard: the entry must be one non-blank line of 1-200 characters.
if (
  line.length < 1 ||
  line.length > 200 ||
  line.trim().length === 0 ||
  line.includes("\n")
) {
  throw new Error("entry line fails the 1-200 char single-line gate");
}

writeFileSync("/output/entry.txt", line, "utf8");
