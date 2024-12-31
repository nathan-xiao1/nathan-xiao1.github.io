import clsx from 'clsx';
import { getColliableClassName } from 'website-pets';
import type { TimelineProps } from './Timeline.types';

import './Timeline.scss';

export function TimelineItem({ children }: TimelineProps): JSX.Element {
  return (
    <li className="timeline-item">
      <span
        className={clsx('timeline-item-bullet', getColliableClassName())}
      ></span>
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
