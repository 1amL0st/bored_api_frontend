import React, { useState } from 'react';
import classNames from 'classnames';

import * as Icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconButton } from 'components/IconButton';

import './ListControls.scss';

export enum FilterType {
  None = 'None',
  Name = 'Name',
  Type = 'Type',
  Participants = 'Participants',
  Accessibility = 'Accessibility',
  Price = 'Price',
}

interface IFilterProps {
  callback: (filter: FilterType) => void;
}

const FilterSelector: React.FC<IFilterProps> = ({
  callback
}: IFilterProps) => {
  const [filter, setFilter] = useState(FilterType.None);

  const onBtnClick = () => {
    callback(filter);
  }

  return (
    <div className="controls-filter">
      <select className="controls-filter-checkbox" onChange={(e) => setFilter(e.target.value as FilterType)}>
        {Object.keys(FilterType).map((filter) => (
          <option key={filter}>{filter}</option>
        ))}
      </select>
      <IconButton className="controls-button" title="Filter this list" onClick={onBtnClick}>
        {<FontAwesomeIcon icon={Icons.faFilter} />}
      </IconButton>
    </div>
  );
};

interface IProps {
  listIsEmpty: boolean;
  someSelected: boolean;
  onRemoveAllActivitiesBtn: () => void;
  selectFilter: (filter: FilterType) => void;
}

export const ListControls: React.FC<IProps> = ({
  listIsEmpty,
  someSelected,
  onRemoveAllActivitiesBtn,
  selectFilter
}: IProps) => {
  
  return (
    <>
      {/* TODO: Sync controls && selection controls animations!!! */}
      {listIsEmpty ? null : (
        <div
          className={classNames('activities-list-controls', {
            visible: someSelected,
          })}
        >
          <FilterSelector
            callback={selectFilter}
          />

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
