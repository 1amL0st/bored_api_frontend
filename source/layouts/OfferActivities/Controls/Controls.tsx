import * as Icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActivityTypes, API } from 'api';
import classNames from 'classnames';
import { IconButton } from 'components/IconButton';
import React, { useState } from 'react';
import './Controls.scss';

interface IProps {
  className?: string;
}

export const Controls: React.FC<IProps> = ({ className }: IProps) => {
  const [selectedType, setSelectedType] = useState('any');

  const onGetRandomActivityBtn = () => {
    API.fetchActivity(selectedType);
  };

  const onSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedType(event.target.value);
  };

  const select = (
    <select className="control-panel-select" onChange={onSelectChange}>
      <option>any</option>
      {ActivityTypes.map((type) => (
        <option key={type}>{type}</option>
      ))}
    </select>
  );

  return (
    <div className={classNames('control-panel', className)}>
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
