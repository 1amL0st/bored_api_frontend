import * as Icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActivityType, API } from 'api';
import classNames from 'classnames';
import { IconButton } from 'components/IconButton';
import { PopUpWindow } from 'components/PopUpWindow';
import React, { useState } from 'react';
import './Controls.scss';

interface IProps {
  className?: string;
}

enum SearchStage {
  none,
  searching,
  failed,
}

interface ISearchWindowProps {
  stage: SearchStage;
  closeCallback: () => void;
}

const SearchWindow: React.FC<ISearchWindowProps> = ({
  stage,
  closeCallback,
}: ISearchWindowProps) => {
  if (stage !== SearchStage.none) {
    if (stage === SearchStage.searching) {
      return (
        <PopUpWindow>
          <div className="searching-window">
            <span>
              We're searching for new activity
              <br />
              ...
            </span>
          </div>
        </PopUpWindow>
      );
    } else {
      return (
        <PopUpWindow closeBtnText="Close" onClose={closeCallback}>
          <div className="searching-window">
            <span>We couldn't find</span>
          </div>
        </PopUpWindow>
      );
    }
  } else {
    return null;
  }
};

export const Controls: React.FC<IProps> = ({ className }: IProps) => {
  const [searchStage, setSearchStage] = useState(SearchStage.none);
  const [selectedType, setSelectedType] = useState('any');

  const onGetRandomActivityBtn = () => {
    setSearchStage(SearchStage.searching);
    API.seachActivity(selectedType as ActivityType)
      .then(() => setSearchStage(SearchStage.none))
      .catch(() => setSearchStage(SearchStage.failed));
  };

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
