import React from 'react';
import classNames from 'classnames';

import { NavLink as BaseLink } from 'react-router-dom';

import './NavLink.scss';

interface Props {
  to: string;
  exact?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const NavLink = ({ to, exact, children, className }: Props) => {
  return (
    <BaseLink
      className={classNames('nav-link', className)}
      activeClassName="nav-link active"
      to={to}
      exact={exact}
      children={children}
    />
  );
};
