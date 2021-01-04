import React from 'react';
import classNames from 'classnames';

import { NavLink } from 'components/NavLink';
import { ROUTES } from 'routes';
import { API } from 'api';

import './Header.scss';

interface IProps {
  className?: string;
}

export const Header = ({ className }: IProps) => {
  const offerActivities = API.useOfferActivities();
  const savedActivities = API.useSavedActivities();

  return (
    <div className={classNames('header', className)}>
      <div className="header-links">
        <NavLink to={ROUTES.OfferActivities} exact>
          Offers activities
        </NavLink>
        <NavLink to={ROUTES.SavedActivities}>Saved activities</NavLink>
      </div>
      <div className="header-stats">
        <span>Saved {savedActivities.length}</span>
        <span>Offers {offerActivities.length}</span>
      </div>
    </div>
  );
};
