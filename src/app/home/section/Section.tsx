import React from 'react';
import type { SectionProps } from './Section.types';

import './Section.scss';

function Section({ title, children }: SectionProps): JSX.Element {
  return (
    <div className="section-container">
      <p className="section-title text-primary">{title}</p>
      <div className="section-content">{children}</div>
    </div>
  );
}

export { Section };
