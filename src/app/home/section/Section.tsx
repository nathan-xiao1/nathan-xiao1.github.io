import React from 'react';
import type { SectionProps } from './Section.types';

import './Section.scss';

function Section({ title, children }: SectionProps): JSX.Element {
  return (
    <div className="section-container">
      <h1 className="section-title">{title}</h1>
      <div className="section-content">{children}</div>
    </div>
  );
}

export { Section };
