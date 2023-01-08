import React from 'react';
import type { TimelineProps } from './Timeline.types';

import './Timeline.scss';

export function TimelineItem({ children }: TimelineProps): JSX.Element {
  return (
    <li className="timeline-item">
      <span className="timeline-item-bullet"></span>
      <div className="timeline-item-container">{children}</div>
    </li>
  );
}

export function Timeline({ children }: TimelineProps): JSX.Element {
  return (
    <div className="timeline">
      <ul>{children}</ul>
    </div>
  );
}
