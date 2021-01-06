import { useSelector } from 'react-redux';
import { AppStore } from 'store';
import {
  ActionAddOfferActivity,
  ActionAddSavedActivities,
  ActionClearOfferActivities,
  ActionClearSavedActivities,
  ActionRemoveOfferActivities,
  ActionRemoveSavedActivities,
} from 'store/actions/Activities';
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
    const url =
      'https://www.boredapi.com/api/activity?' +
      new URLSearchParams({
        type: type === 'any' ? '' : type,
      }).toString();
    const json = await (await fetch(url)).json();
    return API.castServerResponseToActivity(json);
  },

  async searchActivity(type: ActivityType | 'any'): Promise<void> {
    let count = 0;
    async function closure() {
      const activity = await API.fetchActivity(type);
      const exists =
        AppStore.getState().Activities.offers.some(
          (a) => a.name === activity.name
        ) ||
        AppStore.getState().Activities.saved.some(
          (a) => a.name === activity.name
        );
      if (exists) {
        if (count === 10) throw new Error('Cant find new activity!');
        count++;
        await closure();
      } else {
        AppStore.dispatch(ActionAddOfferActivity([activity]));
      }
    }

    return await closure();
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
