import React from 'react';
import classNames from 'classnames';

import * as Icons from '@fortawesome/free-solid-svg-icons';

import { API, IActivity } from 'api';
import { ActivitiesList } from 'components/ActivitiesList';
import { Controls } from './Controls';

import './OfferActivities.scss';

interface IProps {
  className?: string;
}

export const OfferActivities: React.FC<IProps> = ({ className }: IProps) => {
  const activities = API.useOfferActivities();

  const onRemoveSelectedFromList = (selected: Array<IActivity>) => {
    API.removeOfferActivities(selected);
  };

  const onMoveSelectedToSaved = (selected: Array<IActivity>) => {
    API.removeOfferActivities(selected);
    API.addSavedActivities(selected);
  };

  return (
    <div className={classNames('offer-activities', className)}>
      <Controls className="offer-activities-controls" />
      <div className="offer-activities-wrapper">
        <ActivitiesList
          className="offer-activities-list"
          header="Offered activities"
          activities={activities}
          onRemoveSelected={onRemoveSelectedFromList}
          controls={[
            {
              title: 'Move selected activies to saved',
              callback: onMoveSelectedToSaved,
              icon: Icons.faArrowRight,
            },
          ]}
        />
      </div>
    </div>
  );
};
