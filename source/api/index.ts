import { useSelector } from 'react-redux';
import { AppStore } from 'store';
import {ActionAddOfferActivity,
  ActionAddSavedActivities,
  ActionClearOfferActivities,
  ActionClearSavedActivities,
  ActionRemoveOfferActivities,
  ActionRemoveSavedActivities,} from 'store/actions/Activities';
import { ActionShouldShowWelcomeWindow } from 'store/actions/Session';
import { IAppStore } from 'store/reducers/RootReducer';

export const ActivityTypes = [
  'education',
  'recreational',
  'social',
  'diy',
  'charity',
  'cooking',
  'relaxation',
  'music',
  'busywork',
];

export interface IActivity {
  name: string;
  type: string;
  accessibility: number;
  participants: number;
  price: number;
  addDate: Date;
}

export interface ServerResponse {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}

export const API = {
  castServerResponseToActivity(response: ServerResponse): IActivity {
    return {
      name: response.activity,
      accessibility: response.accessibility,
      participants: response.participants,
      type: response.type,
      price: response.price,
      addDate: new Date(),
    };
  },

  fetchActivity(): void {
    const url = 'https://www.boredapi.com/api/activity/';
    fetch(url).then((response) => {
      response.json().then((json: ServerResponse) => {
        AppStore.dispatch(
          ActionAddOfferActivity([API.castServerResponseToActivity(json)])
        );
      });
    });
  },

  clearSavedActivities(): void {
    AppStore.dispatch(ActionClearSavedActivities());
  },

  useSavedActivities(): Array<IActivity> {
    return useSelector((store: IAppStore) => {
      return store.Activities.saved;
    });
  },

  useOfferActivities(): Array<IActivity> {
    return useSelector((store: IAppStore) => {
      return store.Activities.offers;
    });
  },

  clearOfferActivities(): void {
    AppStore.dispatch(ActionClearOfferActivities());
  },

  setShouldShowWelcomeWindow(shouldShow: boolean): void {
    AppStore.dispatch(ActionShouldShowWelcomeWindow(shouldShow));
  },

  getShouldShowWelcomeWindow(): boolean {
    return AppStore.getState().Session.shouldShowWelcomeWindow;
  },

  removeOfferActivities(activities: Array<IActivity>): void {
    AppStore.dispatch(ActionRemoveOfferActivities(activities));
  },

  removeSavedActivities(activities: Array<IActivity>): void {
    AppStore.dispatch(ActionRemoveSavedActivities(activities));
  },

  addSavedActivities(activities: Array<IActivity>): void {
    AppStore.dispatch(ActionAddSavedActivities(activities));
  },
};
