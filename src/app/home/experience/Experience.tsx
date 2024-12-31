import clsx from 'clsx';
import React from 'react';
import { getColliableClassName } from 'website-pets';
import { Section } from '../section';
import { Timeline, TimelineItem } from '../timeline';
import type { ExperienceTimelineItemProps } from './Experience.types';

import './Experience.scss';

export function Experience(): JSX.Element {
  return (
    <Section title="Experience">
      <Timeline>
        <ExperienceTimelineItem
          companyText="Freelancer.com"
          positionText="Software Engineer"
          employmentTypeText="Full-time"
          datesText="Mar 2022 - Present"
        ></ExperienceTimelineItem>
        <ExperienceTimelineItem
          companyText="Freelancer.com"
          positionText="Software Engineer"
          employmentTypeText="Internship"
          datesText="Dec 2021 - Mar 2022"
        ></ExperienceTimelineItem>
      </Timeline>
    </Section>
  );
}

export function ExperienceTimelineItem({
  companyText,
  positionText,
  employmentTypeText,
  datesText,
}: ExperienceTimelineItemProps): JSX.Element {
  return (
    <TimelineItem>
      <div className="timeline-item-content">
        <p
          className={clsx('text-primary', 'text-mid', getColliableClassName())}
        >
          {companyText}
        </p>
        <p className={clsx('text-mid', getColliableClassName())}>
          {positionText}
        </p>
        <p
          className={clsx(
            'text-secondary',
            'text-small',
            getColliableClassName()
          )}
        >
          {employmentTypeText}
        </p>
        <p
          className={clsx(
            'text-gray-300',
            'text-xsmall',
            getColliableClassName()
          )}
        >
          {datesText}
        </p>
      </div>
    </TimelineItem>
  );
}
