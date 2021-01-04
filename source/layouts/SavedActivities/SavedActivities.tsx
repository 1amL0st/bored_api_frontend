import React from 'react';
import classNames from 'classnames';

import { Controls } from './Controls';
import { ActivitiesList } from 'components/ActivitiesList';
import { API, IActivity } from 'api';

import './SavedActivities.scss';

interface IProps {
  className?: string;
}

export const SavedActivities = ({ className }: IProps) => {
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
