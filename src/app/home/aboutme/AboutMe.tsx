import { Button } from '@app/components/Button/Button';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import stripIndent from 'strip-indent';
import { getColliableClassName } from 'website-pets';
import { getDefaultScript } from './utils/default-code';
import { IframeHandler } from './utils/iframe-handler';
import { CodeBlock } from '../codeblock';

import './AboutMe.scss';

export function AboutMe(): JSX.Element {
  const [code, setCode] = useState(stripIndent(getDefaultScript()));
  const [codeOutput, setCodeOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const codeOutputs = useRef<string[]>([]);

  const iframeHandler = new IframeHandler({
    onLog(logMessage: string): void {
      // Append to the code outputs
      codeOutputs.current = [...codeOutputs.current, logMessage];
    },
    onEnd(): void {
      // Hide loading spinner and display the code output
      setCodeOutput(codeOutputs.current.join('\n'));
      setIsProcessing(false);
    },
    onError(error: Error): void {
      // Append to the code output
      codeOutputs.current = [...codeOutputs.current, error.toString()];

      // Hide loading spinner and display the code output
      setCodeOutput(codeOutputs.current.join('\n'));
      setIsProcessing(false);
    },
  });

  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Listen for messages from the iframe
  useEffect(() => {
    const onMessage = iframeHandler.handleMessageEvent;

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  const runCode = (): void => {
    const iframe = iframeRef.current;

    if (iframe == null) {
      return console.error('Error: Sandbox iframe not found');
    }

    clearCode();

    // Show loading spinner
    setIsProcessing(true);

    iframeHandler.setupIframe(iframe, code);
  };

  const clearCode = (): void => {
    codeOutputs.current = [];
    setCodeOutput('');
  };

  return (
    <div className="aboutme-container">
      <div className={clsx('aboutme-codeblock', getColliableClassName())}>
        <iframe
          ref={iframeRef}
          id="aboutme-sandbox"
          sandbox="allow-scripts"
          title="sandbox"
        ></iframe>
        <CodeBlock
          code={code}
          onCodeChange={setCode}
          language="javascript"
          showLineNumber={true}
          padding={24}
        />
      </div>
      <div className="aboutme-output-container">
        <div
          className={clsx('aboutme-output-controls', getColliableClassName())}
        >
          <Button variant="primary" outline={true} onClick={runCode}>
            Run
          </Button>
          <Button variant="secondary" outline={true} onClick={clearCode}>
            Clear
          </Button>
        </div>
        <div className={clsx('aboutme-output-area', getColliableClassName())}>
          {isProcessing ? (
            <div className="aboutme-output-area-spinner">
              <Spinner animation="grow" variant="primary" size="sm" />
            </div>
          ) : (
            <div className="aboutme-output-area-code">
              <CodeBlock
                code={codeOutput}
                disabled={true}
                language="json"
                padding={2}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
