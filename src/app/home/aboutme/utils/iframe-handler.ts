type IframeMessage = IframeLogMessage | IframeEndMessage | IframeErrorMessage;

interface IframeLogMessage {
  type: 'iframe-sandbox-log';
  args?: unknown[];
}
interface IframeEndMessage {
  type: 'iframe-sandbox-end';
}
interface IframeErrorMessage {
  type: 'iframe-sandbox-error';
  error?: Error;
}

export interface IframeHandlerObserver {
  onLog: (logMessage: string) => void;
  onEnd: () => void;
  onError: (error: Error) => void;
}

export class IframeHandler {
  constructor(private observer: IframeHandlerObserver) {}

  handleMessageEvent = (event: MessageEvent): void => {
    if (event.data.type) {
      this.handleMessage(event.data);
    }
  };

  setupIframe = (iframe: HTMLIFrameElement, iframeCode: string): void => {
    const iframeSetupCode = this.getIframeSetupCode();
    const iframeTeardownCode = this.getIframeTeardownCode();

    const srcdoc = `
      <script>
        (${iframeSetupCode.toString()})();
        eval(\`${iframeCode}\`);
        (${iframeTeardownCode.toString()})();
      </script>
    `;
    iframe.srcdoc = srcdoc;
  };

  private handleMessage = (message: IframeMessage): void => {
    switch (message.type) {
      case 'iframe-sandbox-log':
        this.handleLogMessage(message);
        break;
      case 'iframe-sandbox-end':
        this.handleEndMessage();
        break;
      case 'iframe-sandbox-error':
        this.handleErrorMessage(message);
        break;
    }
  };

  private handleLogMessage = (message: IframeLogMessage): void => {
    const logMessage =
      message.args
        ?.map((arg: unknown) => {
          // Convert objects to strings
          if (typeof arg === 'object') {
            return JSON.stringify(arg, null, 2);
          } else {
            return arg;
          }
        })
        .join(' ') ?? '';

    this.observer.onLog(logMessage);
  };

  private handleEndMessage = (): void => {
    this.observer.onEnd();
  };

  private handleErrorMessage = (message: IframeErrorMessage): void => {
    this.observer.onError(message.error ?? new Error('Unknown error'));
  };

  private getIframeSetupCode = (): (() => void) => {
    return (): void => {
      // Store the original console.log
      const originalConsoleLog = console.log;

      // Replace the console.log with one post the data back
      // to the parent
      console.log = (...args): void => {
        const message: IframeLogMessage = {
          type: 'iframe-sandbox-log',
          args: args,
        };
        parent.postMessage(message, '*');
        originalConsoleLog.apply(console, args);
      };

      // Send errors to parent via message
      window.onerror = (
        event: Event | string,
        source?: string,
        lineno?: number,
        colno?: number,
        error?: Error
      ): void => {
        const message: IframeErrorMessage = {
          type: 'iframe-sandbox-error',
          error: error,
        };
        parent.postMessage(message, '*');
      };
    };
  };

  private getIframeTeardownCode = (): (() => void) => {
    return (): void => {
      const message: IframeMessage = {
        type: 'iframe-sandbox-end',
      };
      parent.postMessage(message, '*');
    };
  };
}
