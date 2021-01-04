import React from 'react';
import classNames from 'classnames';

import { IconButton } from 'components/IconButton';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { API } from 'api';

import './Controls.scss';

interface IProps {
  className?: string;
}

export const Controls = ({ className }: IProps) => {
  const onGetRandomActivityBtn = () => {
    API.fetchActivity();
  };

  return (
    <div className={classNames('controls', className)}>
      <IconButton className="offer-activities-btn" onClick={onGetRandomActivityBtn} title={'Get Random Activity'}>
        {<FontAwesomeIcon icon={Icons.faPlus} />}
      </IconButton>
    </div>
  );
};
