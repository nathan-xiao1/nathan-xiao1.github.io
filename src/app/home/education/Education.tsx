import hbhsLogo from '@assets/images/hbhs-logo-bg.png';
import unswLogo from '@assets/images/unsw-logo-bg.png';
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Section } from '../section';
import { Timeline, TimelineItem } from '../timeline';
import type { EducationTimelineItemProps } from './Education.types';

import './Education.scss';

function Education(): JSX.Element {
  return (
    <Section title="Education">
      <Timeline>
        <EducationTimelineItem
          image={unswLogo}
          schoolText="University of New South Wales"
          degreeText="Bachelor of Engineering (Honours) (Software)"
          degreeTooltip="Academic statement available upon request"
          gradeText="1st Class Honours"
          datesText="2018 - 2021"
        ></EducationTimelineItem>
        <EducationTimelineItem
          image={hbhsLogo}
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
  image,
  schoolText,
  degreeText,
  degreeTooltip,
  gradeText,
  datesText,
}: EducationTimelineItemProps): JSX.Element {
  // Wrap with OverlayTrigger if tooltip is defined
  const gradeElement = degreeTooltip ? (
    <OverlayTrigger
      placement="left"
      overlay={<Tooltip>{degreeTooltip}</Tooltip>}
    >
      <p>{gradeText}</p>
    </OverlayTrigger>
  ) : (
    <p>{gradeText}</p>
  );

  return (
    <TimelineItem>
      <div className="timeline-item-image">
        <img src={image} />
      </div>
      <div className="timeline-item-content">
        <p className="text-secondary">{schoolText}</p>
        <p className="fs-5">{degreeText}</p>
        {gradeElement}
        <p className="text-secondary small">{datesText}</p>
      </div>
    </TimelineItem>
  );
}

export { Education };
