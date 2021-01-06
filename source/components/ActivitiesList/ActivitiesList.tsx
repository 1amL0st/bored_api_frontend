import { IActivity } from 'api';
import classNames from 'classnames';
import React, { useState } from 'react';
import './ActivitiesList.scss';
import { List } from './List';
import { ListControls } from './ListControls';
import { IControl, SelectionControls } from './SelectionControls';

interface IProps {
  activities: Array<IActivity>;
  className?: string;
  header?: string;
  onRemoveSelected: (selected: Array<IActivity>) => void;
  controls?: Array<IControl>;
}

export const ActivitiesList: React.FC<IProps> = ({
  activities,
  className,
  header,
  onRemoveSelected,
  controls,
}: IProps) => {
  const [selected, setSelected] = useState(new Array<IActivity>());

  const someSelected = selected.length !== 0;
  const listIsEmpty = activities.length === 0;

  const unselectAllBtn = () => {
    setSelected([]);
  };

  const onRemoveAllActivitiesBtn = () => {
    onRemoveSelected(activities);
  };

  const removeSelectedBtn = () => {
    onRemoveSelected(selected);
    setSelected([]);
  };

  const onSelectActivity = (activity: IActivity) => {
    console.log('onSelectActivity!');
    setSelected([...selected, activity]);
  };

  const onUnselectActivity = (activity: IActivity) => {
    setSelected(selected.filter((a) => a !== activity));
  };

  return (
    <div className={classNames('activities-list', className)}>
      <div className="activities-list-header">
        <h3 className="activities-list-h">{header || 'Activities'}</h3>
        <ListControls
          listIsEmpty={listIsEmpty}
          someSelected={someSelected}
          onRemoveAllActivitiesBtn={onRemoveAllActivitiesBtn}
        />

        <SelectionControls
          someSelected={someSelected}
          selected={selected}
          controls={controls}
          removeSelectedBtn={removeSelectedBtn}
          unselectAllBtn={unselectAllBtn}
        />
      </div>

      <List
        activities={activities}
        selected={selected}
        onSelectActivity={onSelectActivity}
        onUnselectActivity={onUnselectActivity}
      />
    </div>
  );
};
