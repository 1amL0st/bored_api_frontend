import { combineReducers } from 'redux';

import { activitiesReducer, IActivitiesStore } from './Activities';
import { ISessionStore, sessionReducer } from './Session';

export interface IAppStore {
  Activities: IActivitiesStore;
  Session: ISessionStore;
}

export const rootReducer = combineReducers({
  Activities: activitiesReducer,
  Session: sessionReducer,
});
