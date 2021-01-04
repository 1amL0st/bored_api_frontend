import classNames from 'classnames';
import React from 'react';
import './IconButton.scss';

interface IProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  title?: string;
}

export const IconButton: React.FC<IProps> = ({ className, ...props }: IProps) => {
  return <button {...props} className={classNames('icon-btn', className)} />;
};
