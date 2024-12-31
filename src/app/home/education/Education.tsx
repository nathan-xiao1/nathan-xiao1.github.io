import clsx from 'clsx';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { getColliableClassName } from 'website-pets';
import { Section } from '../section';
import { Timeline, TimelineItem } from '../timeline';
import type { EducationTimelineItemProps } from './Education.types';

import './Education.scss';

export function Education(): JSX.Element {
  return (
    <Section title="Education">
      <Timeline>
        <EducationTimelineItem
          schoolText="University of New South Wales"
          degreeText="Bachelor of Engineering (Honours) (Software)"
          degreeTooltip="Academic statement available upon request"
          gradeText="1st Class Honours"
          datesText="2018 - 2021"
        ></EducationTimelineItem>
        <EducationTimelineItem
          schoolText="Homebush Boys High School"
          degreeText="Higher School Certificate"
          gradeText="95.40 ATAR"
          datesText="2012 - 2017"
        ></EducationTimelineItem>
      </Timeline>
    </Section>
  );
}

function EducationTimelineItem({
  schoolText,
  degreeText,
  degreeTooltip,
  gradeText,
  datesText,
}: EducationTimelineItemProps): JSX.Element {
  // Wrap with OverlayTrigger if tooltip is defined
  const gradeTextElement = (
    <p className="text-secondary text-small">{gradeText}</p>
  );
  const gradeElement = degreeTooltip ? (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip>{degreeTooltip}</Tooltip>}
    >
      {gradeTextElement}
    </OverlayTrigger>
  ) : (
    gradeTextElement
  );

  return (
    <TimelineItem>
      <div className="timeline-item-content">
        <p
          className={clsx('text-primary', 'text-mid', getColliableClassName())}
        >
          {schoolText}
        </p>
        <p className={clsx('text-mid', getColliableClassName())}>
          {degreeText}
        </p>
        {gradeElement}
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
