import React, { useState } from 'react';
import classNames from 'classnames';

import * as Icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ActivityType, API } from 'api';
import { IconButton } from 'components/IconButton';

import { SearchWindow } from '../SearchWindow';
import './Controls.scss';

interface IProps {
  className?: string;
}

enum SearchStage {
  none,
  searching,
  failed,
}

export const Controls: React.FC<IProps> = ({ className }: IProps) => {
  const [searchStage, setSearchStage] = useState(SearchStage.none);
  const [selectedType, setSelectedType] = useState('any');

  async function onGetRandomActivityBtn() {
    setSearchStage(SearchStage.searching);
    try {
      await API.searchActivity(selectedType as ActivityType);
      setSearchStage(SearchStage.none);
    } catch (error) {
      setSearchStage(SearchStage.failed);
    }
  }

  const onSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedType(event.target.value);
  };

  const select = (
    <select className="control-panel-select" onChange={onSelectChange}>
      <option>any</option>
      {Object.keys(ActivityType).map((type) => (
        <option key={type}>{type}</option>
      ))}
    </select>
  );

  const onSearchWindowClose = () => {
    setSearchStage(SearchStage.none);
  };

  return (
    <div className={classNames('control-panel', className)}>
      <SearchWindow stage={searchStage} closeCallback={onSearchWindowClose} />
      <IconButton
        className="offer-activities-btn"
        onClick={onGetRandomActivityBtn}
        title={'Get Random Activity'}
      >
        {<FontAwesomeIcon icon={Icons.faPlus} />}
      </IconButton>
      {select}
    </div>
  );
};
