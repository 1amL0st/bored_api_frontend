import { IActivity } from 'api';
import { Activity } from 'components/Activity';
import React from 'react';

interface IProps {
  activities: Array<IActivity>;
  selected: Array<IActivity>;
  onSelectActivity: (activity: IActivity) => void;
  onUnselectActivity: (activity: IActivity) => void;
}

export const List: React.FC<IProps> = ({
  activities,
  selected,
  onSelectActivity,
  onUnselectActivity,
}: IProps) => {
  const listIsEmpty = activities.length === 0;
  const onActivityItemClick = (activity: IActivity) => {
    if (selected.some((a) => a.name === activity.name)) {
      onUnselectActivity(activity);
    } else {
      onSelectActivity(activity);
    }
  };

  const items = activities.map((activity, index: number) => (
    <Activity
      key={index}
      className="activities-list-item"
      activity={activity}
      onClick={onActivityItemClick}
      isSelected={selected.some((a) => a.name === activity.name)}
    />
  ));

  return (
    <>
      {listIsEmpty ? null : (
        <div className="activities-list-list-header">
          <span title="Activity name">Name</span>
          <span title="Activity type">Type</span>
          <span title="The number of people that this activity could involve">
            Participants
          </span>
          <span title="A factor describing how possible an event is to do with zero being the most accessible">
            Accessibility
          </span>
          <span title="A factor describing the cost of the event with zero being free">
            Price
          </span>
        </div>
      )}
      <div className="activities-list-list">{items}</div>
    </>
  );
};
