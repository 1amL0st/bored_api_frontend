import React from 'react';
import classNames from 'classnames';

import * as Icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './IconButton.scss';

interface IProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
  icon: Icons.IconDefinition;
}

export const IconButton: React.FC<IProps> = ({
  className,
  icon,
  ...props
}: IProps) => {
  return (
    <button {...props} className={classNames('icon-btn', className)}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};
