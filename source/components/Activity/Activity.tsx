import { IActivity } from 'api';
import classNames from 'classnames';
import React from 'react';
import './Activity.scss';

interface Color {
  [name: string]: string;
}

const ActivityTypeColorMap: Color = {
  education: '#d8221c',
  recreational: '#a5fe77',
  social: '#318ccd',
  diy: '#d5c9a6',
  charity: '#b773ae',
  cooking: '#d5b8b6',
  relaxation: '#dcc910',
  music: '#ddfb7b',
  busywork: '#a69d53',
};

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
    backgroundColor: `${ActivityTypeColorMap[activity.type]}`,
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
