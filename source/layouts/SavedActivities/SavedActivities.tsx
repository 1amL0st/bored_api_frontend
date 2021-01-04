import { API, IActivity } from 'api';
import classNames from 'classnames';
import { ActivitiesList } from 'components/ActivitiesList';
import React from 'react';
import { Controls } from './Controls';
import './SavedActivities.scss';

interface IProps {
  className?: string;
}

export const SavedActivities: React.FC<IProps> = ({ className }: IProps) => {
  const activities = API.useSavedActivities();

  const onRemoveSelected = (activities: Array<IActivity>) => {
    API.removeSavedActivities(activities);
  };

  return (
    <div className={classNames('saved-activities', className)}>
      <Controls />
      <div className="saved-activities-wrapper">
        <ActivitiesList
          activities={activities}
          header="Saved activites"
          onRemoveSelected={onRemoveSelected}
        />
      </div>
    </div>
  );
};
