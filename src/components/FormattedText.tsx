import React from 'react';

interface FormattedTextProps {
  text: string;
  variant?: 'question' | 'option' | 'explanation';
  className?: string;
}

const SQL_START = /^\s*(?:SELECT\b.+\bFROM\b|WITH\s+[\w\[\].]+\s+AS\s*\(|CREATE\s+(?:OR\s+ALTER\s+)?(?:TABLE|INDEX|VIEW|FUNCTION|PROCEDURE|TRIGGER|DATABASE|CREDENTIAL|USER|LOGIN)\b|ALTER\s+(?:TABLE|INDEX|VIEW|FUNCTION|PROCEDURE|DATABASE|ROLE)\b|DECLARE\s+@\w+|INSERT\s+INTO\b|UPDATE\s+[\w\[\].]+\s+SET\b|DELETE\s+FROM\b|MERGE\s+(?:INTO\s+)?[\w\[\].]+|EXEC(?:UTE)?\s+[\w\[\].]+|BEGIN\s+(?:TRY|CATCH|TRANSACTION)\b|IF\s+@@\w+|(?:GRANT|DENY)\s+\w+\s+ON\b|TRUNCATE\s+TABLE\b)/i;
const SQL_TERMS = /\b(?:SELECT|FROM|WHERE|JOIN|ORDER\s+BY|GROUP\s+BY|CREATE\s+(?:TABLE|INDEX|FUNCTION|PROCEDURE)|JSON_(?:VALUE|QUERY)|VECTOR_(?:SEARCH|DISTANCE)|REGEXP_[A-Z_]+)\b/gi;

function isCode(text: string) {
  const matches = text.match(SQL_TERMS) || [];
  return SQL_START.test(text) || matches.length >= 3;
}

function formatSql(text: string) {
  if (text.includes('\n')) return text.trim();
  return text
    .replace(/\s+(FROM|WHERE|ORDER\s+BY|GROUP\s+BY|HAVING|INNER\s+JOIN|LEFT\s+JOIN|RIGHT\s+JOIN|CROSS\s+APPLY|UNION(?:\s+ALL)?)\s+/gi, '\n$1 ')
    .replace(/\s+(AND|OR)\s+/gi, '\n  $1 ')
    .trim();
}

type Block =
  | { type: 'paragraph'; value: string }
  | { type: 'code'; value: string }
  | { type: 'list'; ordered: boolean; values: string[] };

function toBlocks(text: string, detectCode = true, preserveLineBreaks = false): Block[] {
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let list: { ordered: boolean; values: string[] } | null = null;

  const flushParagraph = () => {
    const value = paragraph.join(preserveLineBreaks ? '\n' : ' ').trim();
    if (value) blocks.push(detectCode && isCode(value) ? { type: 'code', value: formatSql(value) } : { type: 'paragraph', value });
    paragraph = [];
  };
  const flushList = () => {
    if (list) blocks.push({ type: 'list', ...list });
    list = null;
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }
    const item = line.match(/^(?:(\d+)[.)]|[-*•])\s+(.+)$/);
    if (item) {
      flushParagraph();
      const ordered = Boolean(item[1]);
      if (!list || list.ordered !== ordered) flushList();
      list ||= { ordered, values: [] };
      list.values.push(item[2]);
      continue;
    }
    flushList();
    if (detectCode && isCode(line)) {
      flushParagraph();
      blocks.push({ type: 'code', value: formatSql(line) });
    } else {
      paragraph.push(line);
    }
  }
  flushParagraph();
  flushList();
  return blocks;
}

export default function FormattedText({ text, variant = 'question', className = '' }: FormattedTextProps) {
  // Answer options live inside an already styled selection card. Rendering a
  // detected SQL statement as another dark <pre> card made visually similar
  // options look inconsistent (for example ALTER DATABASE vs DISABLE TRIGGER).
  // Keep option text uniform while retaining line breaks; questions and
  // explanations still receive rich SQL/code formatting.
  const blocks = toBlocks(text || '', variant !== 'option', variant === 'option');
  const spacing = variant === 'option' ? 'space-y-2' : 'space-y-3';

  return (
    <div className={`${spacing} min-w-0 ${className}`}>
      {blocks.map((block, index) => {
        if (block.type === 'code') {
          return (
            <pre key={index} className="max-w-full overflow-x-auto whitespace-pre-wrap break-words rounded-xl border border-slate-200 bg-slate-950 px-3.5 py-3 text-[12px] leading-5 text-slate-100 shadow-inner">
              <code>{block.value}</code>
            </pre>
          );
        }
        if (block.type === 'list') {
          const List = block.ordered ? 'ol' : 'ul';
          return (
            <List key={index} className={`${block.ordered ? 'list-decimal' : 'list-disc'} ml-5 space-y-1.5 marker:font-bold marker:text-indigo-500`}>
              {block.values.map((value, itemIndex) => <li key={itemIndex} className="pl-1 leading-relaxed">{value}</li>)}
            </List>
          );
        }
        return <p key={index} className="whitespace-pre-wrap leading-relaxed">{block.value}</p>;
      })}
    </div>
  );
}
