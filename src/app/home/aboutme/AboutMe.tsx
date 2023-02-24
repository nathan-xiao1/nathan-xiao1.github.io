import { Button } from '@app/components/Button/Button';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { CodeBlock } from '../codeblock';

import './AboutMe.scss';

export function AboutMe(): JSX.Element {
  const [codeOutput, setCodeOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const code = `
    const aboutMe = {
      location: 'Sydney, New South Wales, Australia',
      email: 'jobs' + '@' + 'nathanxiao.me',
      phone: '+61' + '___' + '___' + '___',
    };

    console.log(aboutMe);
  `;

  const runCode = (): void => {
    // The code to run in the Web Worker
    const workerCode = (): void => {
      // Store the original console.log
      const originalConsoleLog = console.log;

      // Replace the console.log with one that return a
      // stringified version of each arg
      console.log = (...args): void => {
        const formattedList = args.map((arg) => JSON.stringify(arg, null, 2));
        const output = formattedList.join(' ');
        postMessage(output);
        originalConsoleLog.apply(console, args);
      };

      // Handle message sent to this worker
      onmessage = (e): void => {
        eval(e.data);
      };
    };

    // Obtain a blob URL reference to our virtual worker 'file'
    const blob = new Blob([`(${workerCode.toString()})()`]);
    const blobURL = URL.createObjectURL(blob);

    // Create a Web Worker for running the code
    const worker = new Worker(blobURL);

    // Handle message from the worker
    worker.onmessage = (ev): void => {
      setIsProcessing(false);
      setCodeOutput(ev.data);
    };
    // Send the code to be run on the worker
    // FIXME: Hack to make it look like it is doing something
    setIsProcessing(true);
    setTimeout(() => {
      worker.postMessage(code);
    }, 250);
  };

  const clearCode = (): void => {
    setCodeOutput('');
  };

  return (
    <div className="aboutme-container">
      <div className="aboutme-codeblock">
        <CodeBlock language="javascript" showLineNumber={true}>
          {code}
        </CodeBlock>
      </div>
      <div className="aboutme-output-container">
        <div className="aboutme-output-controls">
          <Button variant="primary" outline={true} onClick={runCode}>
            Run
          </Button>
          <Button variant="secondary" outline={true} onClick={clearCode}>
            Clear
          </Button>
        </div>
        <div className="aboutme-output-area">
          {isProcessing ? (
            <div className="aboutme-output-area-spinner">
              <Spinner animation="grow" variant="primary" size="sm" />
            </div>
          ) : (
            <CodeBlock language="json" fontSize="0.85rem">
              {codeOutput}
            </CodeBlock>
          )}
        </div>
      </div>
    </div>
  );
}
