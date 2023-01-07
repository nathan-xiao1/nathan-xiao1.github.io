import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import React, { useEffect } from 'react';
import stripIndent from 'strip-indent';

import './Codeblock.scss';
import './hljs.scss';

export function CodeBlock({ children }: { children: string }): JSX.Element {
  useEffect(() => {
    hljs.registerLanguage('json', json);
    hljs.registerLanguage('javascript', javascript);
    hljs.highlightAll();
  }, []);

  return (
    <div className="codeblock-container">
      <pre>
        <code className="language-javascript text-small">
          {stripIndent(children).trim()}
        </code>
      </pre>
    </div>
  );
}
