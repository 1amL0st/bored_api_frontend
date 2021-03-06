import React from 'react';
import classNames from 'classnames';

import './Button.scss';

interface IProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export const Button: React.FC<IProps> = ({ className, ...props }: IProps) => {
  return <button className={classNames('button', className)} {...props} />;
};
