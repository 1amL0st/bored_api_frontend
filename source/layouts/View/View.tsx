import { Header } from 'components/Header';
import { OfferActivities } from 'layouts/OfferActivities';
import { SavedActivities } from 'layouts/SavedActivities';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from 'routes';
import './View.scss';

export const View: React.FC = () => {
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
