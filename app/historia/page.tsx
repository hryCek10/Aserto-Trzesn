import type { Metadata } from "next";
import { readHistoryMarkdown } from "@/lib/content";
import { renderSimpleMarkdown } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Historia"
};

export default async function HistoryPage() {
  const markdown = await readHistoryMarkdown();
  const content = renderSimpleMarkdown(markdown);

  return (
    <article className="panel history-panel" aria-labelledby="history-title">
      <h1 id="history-title">Historia</h1>
      {content}
    </article>
  );
}
