import { Button } from '@app/components/Button/Button';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import stripIndent from 'strip-indent';
import { getColliableClassName } from 'website-pets';
import { CodeBlock } from '../codeblock';

import './AboutMe.scss';

const DEFAULT_CODE = `
    const aboutMe = {
      location: 'Sydney, New South Wales, Australia',
      email: 'jobs' + '@' + 'nathanxiao.me',
      phone: '+61' + '___' + '___' + '___',
    };

    console.log(aboutMe);
  `;

interface IframeMessageData {
  type: 'iframe-sandbox-log';
  args: unknown[];
}

export function AboutMe(): JSX.Element {
  const [code, setCode] = useState(stripIndent(DEFAULT_CODE).trim());
  const [codeOutput, setCodeOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Listen for messages from the iframe
  useEffect(() => {
    const onMessage = (event: MessageEvent<IframeMessageData>): void => {
      const data = event.data;
      if (data.type === 'iframe-sandbox-log') {
        const logMessage = data.args
          .map((arg: unknown) => {
            // Convert objects to strings
            if (typeof arg === 'object') {
              return JSON.stringify(arg, null, 2);
            } else {
              return arg;
            }
          })
          .join(' ');

        // FIXME: Hack to make it look like the code is running for a bit,
        // otherwise, it seems a bit too fast/fake
        setTimeout(() => {
          setCodeOutput(logMessage);
          setIsProcessing(false);
        }, 250);
      }
    };

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  const runCode = (): void => {
    const iframe = iframeRef.current;

    if (iframe == null) {
      return console.error('Error: Sandbox iframe not found');
    }

    // Show loading spinner
    setIsProcessing(true);

    const iframeCode = (): void => {
      // Store the original console.log
      const originalConsoleLog = console.log;

      // Replace the console.log with one post the data back
      // to the parent
      console.log = (...args): void => {
        const message: IframeMessageData = {
          type: 'iframe-sandbox-log',
          args: args,
        };
        parent.postMessage(message, '*');
        originalConsoleLog.apply(console, args);
      };
    };

    iframe.srcdoc = `
      <script>
        (${iframeCode.toString()}).call(this);
        ${code}
      </script>
    `;
  };

  const clearCode = (): void => {
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
