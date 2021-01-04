import { Activity, IActivity } from 'api';

export const ACTION_TYPE_ADD_SAVED_ACTIVITIES = 'ADD_SAVED_ACTIVITIES';
export const ACTION_TYPE_CLEAR_SAVED_ACTIVITIES = 'CLEAR_SAVED_ACTIVITIES';
export const ACTION_TYPE_REMOVE_SAVED_ACTIVITIES = 'REMOVE_SAVED_ACTIVITIES';

export interface IAddSavedActivities {
  type: string;
  activities: Array<Activity>;
}

export interface IClearSavedActivities {
  type: string;
}

export interface IRemoveSavedActivities {
  type: string;
  activities: Array<IActivity>;
}

export function ActionAddSavedActivities(
  activities: Array<Activity>
): IAddSavedActivities {
  return {
    type: ACTION_TYPE_ADD_SAVED_ACTIVITIES,
    activities,
  };
}

export function ActionRemoveSavedActivities(
  activities: Array<IActivity>
): IRemoveOfferActivities {
  return {
    type: ACTION_TYPE_REMOVE_SAVED_ACTIVITIES,
    activities,
  };
}

export function ActionClearSavedActivities(): IClearSavedActivities {
  return {
    type: ACTION_TYPE_CLEAR_SAVED_ACTIVITIES,
  };
}

export const ACTION_TYPE_ADD_OFFERS_ACTIVITY = 'ADD_OFFER_ACTIVITY';
export const ACTION_TYPE_CLEAR_OFFERS_ACTIVITIES = 'CLEAR_OFFER_ACTIVITIES';
export const ACTION_TYPE_REMOVE_OFFER_ACTIVITIES = 'REMOVE_OFFER_ACTIVITY';

export interface IRemoveOfferActivities {
  type: string;
  activities: Array<IActivity>;
}

export interface IClearOfferActivities {
  type: string;
}

export interface IAddOfferActivity {
  type: string;
  activities: Array<Activity>;
}

export function ActionRemoveOfferActivities(
  activities: Array<IActivity>
): IRemoveOfferActivities {
  return {
    type: ACTION_TYPE_REMOVE_OFFER_ACTIVITIES,
    activities,
  };
}

export function ActionClearOfferActivities(): IClearOfferActivities {
  return {
    type: ACTION_TYPE_CLEAR_OFFERS_ACTIVITIES,
  };
}

export function ActionAddOfferActivity(
  activities: Array<Activity>
): IAddOfferActivity {
  return {
    type: ACTION_TYPE_ADD_OFFERS_ACTIVITY,
    activities,
  };
}

export type ActionType =
  | IAddSavedActivities
  | IClearSavedActivities
  | IRemoveOfferActivities
  | IRemoveSavedActivities;
