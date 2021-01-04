import classNames from 'classnames';
import React from 'react';
import { NavLink as BaseLink } from 'react-router-dom';
import './NavLink.scss';

interface IProps {
  to: string;
  exact?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const NavLink: React.FC<IProps> = ({ to, exact, children, className }: IProps) => {
  return (
    <BaseLink
      className={classNames('nav-link', className)}
      activeClassName="nav-link active"
      to={to}
      exact={exact}
    >
      {children}
    </BaseLink>
  );
};
