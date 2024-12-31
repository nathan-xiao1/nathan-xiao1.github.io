import clsx from 'clsx';
import { getColliableClassName } from 'website-pets';
import type { SectionProps } from './Section.types';

import './Section.scss';

export function Section({ title, children }: SectionProps): JSX.Element {
  return (
    <div className="section-container">
      <p
        className={clsx(
          'section-title',
          'text-primary',
          getColliableClassName()
        )}
      >
        {title}
      </p>
      <div className="section-content">{children}</div>
    </div>
  );
}
