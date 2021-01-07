import React, { useState } from 'react';
import classNames from 'classnames';

import { IActivity } from 'api';

import { List } from './List';
import { ListControls, FilterType } from './ListControls';
import { IControl, SelectionControls } from './SelectionControls';

import './ActivitiesList.scss';

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
  const [filter, setFilter] = useState(FilterType.Filter);

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
          selectFilter={(filter: FilterType) => setFilter(filter)}
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
        filter={filter}
        activities={activities}
        selected={selected}
        onSelectActivity={onSelectActivity}
        onUnselectActivity={onUnselectActivity}
      />
    </div>
  );
};
