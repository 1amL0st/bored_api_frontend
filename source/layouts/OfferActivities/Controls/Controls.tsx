import React, { useState } from 'react';
import classNames from 'classnames';

import * as Icons from '@fortawesome/free-solid-svg-icons';

import { ActivityType, API } from 'api';
import { IconButton } from 'components/IconButton';

import { SearchStage } from '../types';
import { SearchWindow } from '../SearchWindow';
import './Controls.scss';

interface IProps {
  className?: string;
}

export const Controls: React.FC<IProps> = ({ className }: IProps) => {
  const [searchStage, setSearchStage] = useState(SearchStage.Idle);
  const [selectedType, setSelectedType] = useState('type');

  async function onGetRandomActivityBtn() {
    setSearchStage(SearchStage.Searching);
    try {
      await API.searchActivity(selectedType as ActivityType);
      setSearchStage(SearchStage.Idle);
    } catch (error) {
      setSearchStage(SearchStage.Failed);
    }
  }

  const onSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedType(event.target.value);
  };

  const select = (
    <select className="control-panel-select" onChange={onSelectChange}>
      <option>type</option>
      {Object.keys(ActivityType).map((type) => (
        <option key={type}>{type}</option>
      ))}
    </select>
  );

  const onSearchWindowClose = () => {
    setSearchStage(SearchStage.Idle);
  };

  return (
    <div className={classNames('control-panel', className)}>
      <SearchWindow stage={searchStage} closeCallback={onSearchWindowClose} />
      <IconButton
        className="offer-activities-btn"
        onClick={onGetRandomActivityBtn}
        title={'Get Random Activity'}
        icon={Icons.faPlus}
      />
      {select}
    </div>
  );
};
