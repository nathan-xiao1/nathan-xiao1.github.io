import clsx from 'clsx';
import { highlight, languages } from 'prismjs';
import Editor from 'react-simple-code-editor';
import type { Grammar } from 'prismjs';

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prism-themes/themes/prism-one-dark.css';
import './Codeblock.scss';

export function CodeBlock({
  code,
  onCodeChange = (): void => {
    /* no-op */
  },
  language = 'javascript',
  showLineNumber = false,
  disabled = false,
  padding = 10,
  fontSize = 14,
}: {
  code: string;
  onCodeChange?: (code: string) => void;
  language?: 'javascript' | 'json';
  showLineNumber?: boolean;
  disabled?: boolean;
  padding?: number;
  fontSize?: number;
}): JSX.Element {
  const highlightCode = (code: string): string => {
    const grammar = language === 'json' ? languages.json : languages.js;
    return showLineNumber
      ? hightlightWithLineNumbers(code, grammar, language)
      : highlight(code, grammar, language);
  };

  return (
    <Editor
      value={code}
      onValueChange={onCodeChange}
      highlight={highlightCode}
      disabled={disabled}
      textareaId="codeblock-editor-textarea"
      className={clsx('codeblock-editor', { 'line-numbers': showLineNumber })}
      padding={padding}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: fontSize,
      }}
    />
  );
}

function hightlightWithLineNumbers(
  text: string,
  grammar: Grammar,
  language: string
): string {
  return highlight(text, grammar, language)
    .split('\n')
    .map((line, i) => `<span class='editor-line-number'>${i + 1}</span>${line}`)
    .join('\n');
}
