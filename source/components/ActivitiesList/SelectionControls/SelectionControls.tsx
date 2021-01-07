import React from 'react';
import classNames from 'classnames';

import * as Icons from '@fortawesome/free-solid-svg-icons';

import { IActivity } from 'api';
import { IconButton } from 'components/IconButton';

import './SelectionControls.scss';

export interface IControl {
  icon: Icons.IconDefinition;
  callback: (selected: Array<IActivity>) => void;
  title: string;
}

interface IProps {
  someSelected: boolean;
  selected: Array<IActivity>;
  controls?: Array<IControl>;
  removeSelectedBtn: () => void;
  unselectAllBtn: () => void;
}

export const SelectionControls: React.FC<IProps> = ({
  someSelected,
  selected,
  controls,
  removeSelectedBtn,
  unselectAllBtn,
}: IProps) => {
  const buttons = controls?.map((control) => {
    const clickHandler = () => {
      control.callback(selected);
      unselectAllBtn();
    };

    return (
      <IconButton
        className="controls-button"
        title={control.title}
        key={1}
        onClick={clickHandler}
        icon={control.icon}
      />
    );
  });

  return (
    <div
      className={classNames('activities-list-selection-controls', {
        visible: someSelected,
      })}
    >
      <span className="selected-count">{selected.length}</span>
      <IconButton
        className="controls-button"
        title="Unselect all selected activities"
        onClick={unselectAllBtn}
        icon={Icons.faEraser}
      />
      <IconButton
        className="controls-button"
        title="Remove all selected activities"
        onClick={removeSelectedBtn}
        icon={Icons.faTrash}
      />
      {buttons}
    </div>
  );
};
