import React from 'react';

import { IActivity } from 'api';
import { Activity } from 'components/Activity';
import { FilterType } from '../ListControls';

interface IProps {
  activities: Array<IActivity>;
  selected: Array<IActivity>;
  filter: FilterType;
  onSelectActivity: (activity: IActivity) => void;
  onUnselectActivity: (activity: IActivity) => void;
}

export const List: React.FC<IProps> = ({
  activities,
  selected,
  filter,
  onSelectActivity,
  onUnselectActivity,
}: IProps) => {
  console.log('Filter = ', filter);
  const listIsEmpty = activities.length === 0;
  const onActivityItemClick = (activity: IActivity) => {
    if (selected.some((a) => a.name === activity.name)) {
      onUnselectActivity(activity);
    } else {
      onSelectActivity(activity);
    }
  };

  const compareNumbers = (a: number, b: number): number => {
    if (a > b) return -1;
    else if (a < b) return -1;
    else return 0;
  }

  const cmpStrings = (a: string, b: string): number => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  }

  const selectFilter = (): Array<IActivity> => {
    return activities.sort((a: IActivity, b: IActivity) => {
      switch (filter) {
        case FilterType.Name:
          return cmpStrings(a.name, b.name);
        case FilterType.None:
          if (a.addDate > b.addDate) return 1;
          else if (a.addDate < b.addDate) return -1;
          return 0;
        case FilterType.Accessibility:
          return compareNumbers(a.accessibility, b.accessibility);
        case FilterType.Participants:
          return compareNumbers(a.participants, b.participants);
        case FilterType.Type:
          return cmpStrings(a.type, b.type);
        default:
          return 0;
      }
    });
  }

  const items = selectFilter().map((activity, index: number) => (
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
