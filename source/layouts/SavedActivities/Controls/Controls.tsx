import React from 'react';
import classNames from 'classnames';

import './Controls.scss';

interface IProps {
  className?: string;
}

export const Controls: React.FC<IProps> = ({ className }: IProps) => {
  return <div className={classNames('activites-controls', className)}></div>;
};
