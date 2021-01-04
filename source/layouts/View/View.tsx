import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from 'routes';
import { Header } from 'components/Header';

import { SavedActivities } from 'layouts/SavedActivities';
import { OfferActivities } from 'layouts/OfferActivities';

import './View.scss';

export const View = () => {
  return (
    <div className="view">
      <Header />
      <Switch>
        <Route path={ROUTES.SavedActivities} component={SavedActivities} />
        <Route path={ROUTES.OfferActivities} component={OfferActivities} />
      </Switch>
    </div>
  );
};
