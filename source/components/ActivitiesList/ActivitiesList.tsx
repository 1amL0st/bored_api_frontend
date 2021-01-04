import React, { useState } from 'react';
import classNames from 'classnames';

import * as Icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from 'components/Button';
import { Activity } from 'components/Activity';
import { IconButton } from 'components/IconButton';
import { IActivity } from 'api';

import './ActivitiesList.scss';

interface IControl {
  icon: Icons.IconDefinition;
  callback: (selected: Array<IActivity>) => void;
  title: string;
}

interface IProps {
  activities: Array<IActivity>;
  className?: string;
  header?: string;
  onRemoveSelected: (selected: Array<IActivity>) => void;
  controls?: Array<IControl>;
}

export const ActivitiesList = ({
  activities,
  className,
  header,
  onRemoveSelected,
  controls,
}: IProps) => {
  const [selected, setSelected] = useState(new Array<IActivity>());

  const someSelected = selected.length !== 0;
  const listIsEmpty = activities.length === 0;

  const onActivityItemClick = (activity: IActivity) => {
    if (selected.includes(activity)) {
      setSelected(selected.filter((a) => a !== activity));
    } else {
      setSelected([...selected, activity]);
    }
  };

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

  const items = activities.map((activity, index: number) => (
    <Activity
      key={index}
      className="activities-list-item"
      activity={activity}
      onClick={onActivityItemClick}
      isSelected={selected.includes(activity)}
    />
  ));

  const buttons = controls?.map((control) => (
    <IconButton
      className="controls-button"
      title="Move selected activies to saved"
      key={1}
      onClick={() => control.callback(selected)}
    >
      <FontAwesomeIcon icon={control.icon} />
    </IconButton>
  ));

  return (
    <div className={classNames('activities-list', className)}>
      <div className="activities-list-header">
        <h3 className="activities-list-h">{header || 'Activities'}</h3>

        {/* TODO: Sync controls && selection controls animations!!! */}
        {listIsEmpty ? null : (
          <div
            className={classNames('controls', {
              visible: someSelected,
            })}
          >
            <IconButton
              className="controls-button"
              title="Remove all activities in the list"
              onClick={onRemoveAllActivitiesBtn}
            >
              {<FontAwesomeIcon icon={Icons.faTrash} />}
            </IconButton>
          </div>
        )}

        <div
          className={classNames('selection-controls', {
            visible: someSelected,
          })}
        >
          <span className="activities-list-selected-count">
            {selected.length}
          </span>
          <IconButton
            className="controls-button"
            title="Unselect all selected activities"
            onClick={unselectAllBtn}
          >
            {<FontAwesomeIcon icon={Icons.faEraser} />}
          </IconButton>
          <IconButton
            className="controls-button"
            title="Remove all selected activities"
            onClick={removeSelectedBtn}
          >
            {<FontAwesomeIcon icon={Icons.faTrash} />}
          </IconButton>
          {buttons}
        </div>
      </div>
      <div className="activities-list-list">{items}</div>
    </div>
  );
};
