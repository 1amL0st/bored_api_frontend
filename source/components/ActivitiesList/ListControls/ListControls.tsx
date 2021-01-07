import React from 'react';
import classNames from 'classnames';

import * as Icons from '@fortawesome/free-solid-svg-icons';

import { IconButton } from 'components/IconButton';

import './ListControls.scss';

export enum FilterType {
  Filter = 'Filter',
  Name = 'Name',
  Type = 'Type',
  Participants = 'Participants',
  Accessibility = 'Accessibility',
  Price = 'Price',
}

interface IFilterProps {
  callback: (filter: FilterType) => void;
}

const FilterSelector: React.FC<IFilterProps> = ({ callback }: IFilterProps) => {
  const onFilterSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    callback(e.target.value as FilterType);
  };

  return (
    <div className="controls-filter">
      <select className="controls-filter-checkbox" onChange={onFilterSelect}>
        {Object.keys(FilterType).map((filter) => (
          <option key={filter}>{filter}</option>
        ))}
      </select>
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
  selectFilter,
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
          <FilterSelector callback={selectFilter} />

          <IconButton
            className="controls-button"
            title="Remove all activities in the list"
            onClick={onRemoveAllActivitiesBtn}
            icon={Icons.faTrash}
          />
        </div>
      )}
    </>
  );
};
