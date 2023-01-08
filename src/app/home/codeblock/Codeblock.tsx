import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import React, { useEffect } from 'react';
import stripIndent from 'strip-indent';

import './Codeblock.scss';
import './hljs.scss';

export function CodeBlock({
  language = 'javascript',
  showLineNumber = false,
  fontSize,
  children,
}: {
  language?: 'javascript' | 'json';
  showLineNumber?: boolean;
  fontSize?: string;
  children: string;
}): JSX.Element {
  useEffect(() => {
    // Register lanaguage on component init
    hljs.registerLanguage(
      language,
      language == 'javascript' ? javascript : json
    );
  }, [language]);

  useEffect(() => {
    // Highlight when child changes
    hljs.highlightAll();
  }, [children]);

  const formattedCode = stripIndent(children).trim();
  const lineCount = formattedCode.split(/\r\n|\r|\n/).length;

  const lineNumberSpan = [...Array(lineCount)].map((_, idx) => (
    <span key={idx}>{idx + 1}</span>
  ));

  return (
    <div className="codeblock-container">
      <pre>
        {showLineNumber && (
          <span className="codeblock-line-number">{lineNumberSpan}</span>
        )}
        <code
          className="language-javascript"
          style={{
            fontSize,
          }}
        >
          {formattedCode}
        </code>
      </pre>
    </div>
  );
}
