import React from 'react';
import classNames from 'classnames';

import * as Icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IActivity } from 'api';
import { IconButton } from 'components/IconButton';

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
  const buttons = controls?.map((control) => (
    <IconButton
      className="controls-button"
      title="Move selected activies to saved"
      key={1}
      onClick={() => {
        // TODO: This looks like very bad idea....
        control.callback(selected);
        unselectAllBtn();
      }}
    >
      <FontAwesomeIcon icon={control.icon} />
    </IconButton>
  ));

  return (
    <div
      className={classNames('selection-controls', {
        visible: someSelected,
      })}
    >
      <span className="activities-list-selected-count">{selected.length}</span>
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
  );
};
