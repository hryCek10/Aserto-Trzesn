import { readFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();

export async function readHistoryMarkdown(): Promise<string> {
  const historyPath = path.join(projectRoot, "content", "history.md");
  return readFile(historyPath, "utf8");
}
