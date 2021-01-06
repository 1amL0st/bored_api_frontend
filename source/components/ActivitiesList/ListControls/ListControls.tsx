import React from 'react';
import classNames from 'classnames';

import * as Icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconButton } from 'components/IconButton';

interface IProps {
  listIsEmpty: boolean;
  someSelected: boolean;
  onRemoveAllActivitiesBtn: () => void;
}

export const ListControls: React.FC<IProps> = ({
  listIsEmpty,
  someSelected,
  onRemoveAllActivitiesBtn,
}: IProps) => {
  return (
    <>
      {/* TODO: Sync controls && selection controls animations!!! */}
      {listIsEmpty ? null : (
        <div
          className={classNames('controls', {
            visible: someSelected,
          })}
        >
          <div className="controls-filter">
            <IconButton className="controls-button" title="Filter this list">
              {<FontAwesomeIcon icon={Icons.faFilter} />}
            </IconButton>
          </div>
          <IconButton
            className="controls-button"
            title="Remove all activities in the list"
            onClick={onRemoveAllActivitiesBtn}
          >
            {<FontAwesomeIcon icon={Icons.faTrash} />}
          </IconButton>
        </div>
      )}
    </>
  );
};
