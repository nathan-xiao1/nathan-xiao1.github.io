import React from 'react';
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
        <p className="text-primary text-small">{companyText}</p>
        <p className="text-mid">{positionText}</p>
        <p className="text-secondary text-small">{employmentTypeText}</p>
        <p className="text-gray-300 text-xsmall">{datesText}</p>
      </div>
    </TimelineItem>
  );
}
