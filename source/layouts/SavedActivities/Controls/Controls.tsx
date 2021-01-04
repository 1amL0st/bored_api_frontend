import React from 'react';
import classNames from 'classnames';

import { API } from 'api';
import { Button } from 'components/Button';

import './Controls.scss';

interface IProps {
  className?: string;
}

export const Controls = ({ className }: IProps) => {
  const onClearBtnClick = () => {
    API.clearSavedActivities();
  };

  return <div className={classNames('activites-controls', className)}></div>;
};
