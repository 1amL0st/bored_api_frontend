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

export enum ActivityType {
  education = 'education',
  recreational = 'recreational',
  social = 'social',
  diy = 'diy',
  charity = 'charity',
  cooking = 'cooking',
  relaxation = 'relaxation',
  music = 'music',
  busywork = 'busywork',
}

export interface IActivity {
  name: string;
  type: ActivityType;
  accessibility: number;
  participants: number;
  price: number;
  addDate: Date;
}

export interface ServerResponse {
  activity: string;
  type: ActivityType;
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

  async fetchActivity(type: ActivityType | 'any'): Promise<IActivity> {
    return new Promise<IActivity>((resolve, reject) => {
      let url = 'https://www.boredapi.com/api/activity?';
      const params = new URLSearchParams({
        type: type === 'any' ? '' : type,
      }).toString();
      url += params;

      fetch(url).then((response) => {
        response.json().then((json: ServerResponse) => {
          resolve(API.castServerResponseToActivity(json));
        });
      });
    });
  },

  seachActivity(type: ActivityType | 'any'): Promise<void> {
    return new Promise((resolve, reject) => {
      let url = 'https://www.boredapi.com/api/activity?';
      const params = new URLSearchParams({
        type: type === 'any' ? '' : type,
      }).toString();
      url += params;

      let count = 0;
      const f = (): Promise<void> => {
        return new Promise<void>(() => {
          API.fetchActivity(type).then((activity) => {
            const exists =
              AppStore.getState().Activities.offers.some(
                (a) => a.name === activity.name
              ) ||
              AppStore.getState().Activities.saved.some(
                (a) => a.name === activity.name
              );
            if (exists) {
              ++count;
              if (count < 10) {
                f();
              } else {
                reject();
              }
            } else {
              AppStore.dispatch(ActionAddOfferActivity([activity]));
              resolve();
            }
          });
        });
      };

      f();
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
