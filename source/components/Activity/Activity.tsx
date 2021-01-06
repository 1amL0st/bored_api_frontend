import React from 'react';
import classNames from 'classnames';

import { ActivityType, IActivity } from 'api';

import './Activity.scss';

const TypeColorMap = new Map<ActivityType, string>([
  [ActivityType.education, '#d8221c'],
  [ActivityType.recreational, '#a5fe77'],
  [ActivityType.social, '#318ccd'],
  [ActivityType.diy, '#d5c9a6'],
  [ActivityType.charity, '#b773ae'],
  [ActivityType.cooking, '#d5b8b6'],
  [ActivityType.relaxation, '#dcc910'],
  [ActivityType.music, '#ddfb7b'],
  [ActivityType.busywork, '#a69d53'],
]);

interface IProps {
  className?: string;
  activity: IActivity;
  onClick?: (activities: IActivity) => void;
  isSelected: boolean;
}

export const Activity: React.FC<IProps> = ({
  className,
  activity,
  isSelected,
  onClick,
}: IProps) => {
  const typeStyle: React.CSSProperties = {
    backgroundColor: `${TypeColorMap.get(activity.type as ActivityType)}`,
  };

  const onClickHandler = () => {
    if (onClick) {
      onClick(activity);
    }
  };

  return (
    <div
      className={classNames('activity', className, {
        'is-selected': isSelected,
      })}
      onClick={onClickHandler}
    >
      <span>{activity.name}</span>
      <span className="activity-type" title={`${activity.type}`}>
        <div className="activity-type-indicator" style={typeStyle} />
      </span>
      <span>{activity.participants}</span>
      <span>{activity.accessibility}</span>
      <span>{activity.price}</span>
    </div>
  );
};
