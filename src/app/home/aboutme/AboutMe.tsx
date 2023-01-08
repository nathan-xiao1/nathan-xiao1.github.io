import React from 'react';
import { CodeBlock } from '../codeblock';

export function AboutMe(): JSX.Element {
  return (
    <CodeBlock>
      {`
    {
      // Test
      location: "Sydney, New South Wales, Australia",
      email: "XDN2369@hotmail.com",
      phone: "+61 481 318 138",
    }
  `}
    </CodeBlock>
  );
}
