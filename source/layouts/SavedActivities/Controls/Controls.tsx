import { API } from 'api';
import classNames from 'classnames';
import React from 'react';
import './Controls.scss';

interface IProps {
  className?: string;
}

export const Controls: React.FC<IProps> = ({ className }: IProps) => {
  const onClearBtnClick = () => {
    API.clearSavedActivities();
  };

  return <div className={classNames('activites-controls', className)}></div>;
};
