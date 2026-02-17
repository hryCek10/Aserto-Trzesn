import { Fragment, type ReactElement } from "react";

export function renderSimpleMarkdown(markdown: string): ReactElement[] {
  const lines = markdown.split(/\r?\n/);
  const elements: ReactElement[] = [];
  let listItems: string[] = [];
  let index = 0;

  const flushList = () => {
    if (listItems.length === 0) return;
    elements.push(
      <ul key={`list-${index}`} className="markdown-list">
        {listItems.map((item, itemIndex) => (
          <li key={`list-item-${index}-${itemIndex}`}>{item}</li>
        ))}
      </ul>
    );
    listItems = [];
    index += 1;
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      continue;
    }

    if (line.startsWith("- ")) {
      listItems.push(line.replace(/^- /, ""));
      continue;
    }

    flushList();

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={`h2-${index}`} className="markdown-h2">
          {line.replace(/^## /, "")}
        </h2>
      );
      index += 1;
      continue;
    }

    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={`h1-${index}`} className="markdown-h1">
          {line.replace(/^# /, "")}
        </h1>
      );
      index += 1;
      continue;
    }

    elements.push(
      <Fragment key={`p-${index}`}>
        <p className="markdown-p">{line}</p>
      </Fragment>
    );
    index += 1;
  }

  flushList();

  return elements;
}
