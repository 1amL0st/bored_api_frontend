import { IActivity } from 'api';
import {
  ActionType,
  ACTION_TYPE_ADD_OFFERS_ACTIVITY,
  ACTION_TYPE_ADD_SAVED_ACTIVITIES,
  ACTION_TYPE_CLEAR_OFFERS_ACTIVITIES,
  ACTION_TYPE_CLEAR_SAVED_ACTIVITIES,
  ACTION_TYPE_REMOVE_OFFER_ACTIVITIES,
  ACTION_TYPE_REMOVE_SAVED_ACTIVITIES,
  IAddOfferActivity,
  IAddSavedActivities,
  IRemoveOfferActivities,
  IRemoveSavedActivities,
} from '../actions/Activities';

export interface IActivitiesStore {
  saved: Array<IActivity>;
  offers: Array<IActivity>;
}

const DefaultState: IActivitiesStore = {
  saved: new Array<IActivity>(),
  offers: new Array<IActivity>(),
};

function mergeArrays(
  target: Array<IActivity>,
  source: Array<IActivity>
): Array<IActivity> {
  const unique = source.filter(
    (activity) => !target.some((a) => a.name === activity.name)
  );
  return [...unique, ...target];
}

function removeActivitiesFromArray(
  target: Array<IActivity>,
  activities: Array<IActivity>
): Array<IActivity> {
  return target.filter(
    (activitiy) => !activities.some((a) => activitiy.name === a.name)
  );
}

export function activitiesReducer(
  state = DefaultState,
  action: ActionType
): IActivitiesStore {
  switch (action.type) {
    case ACTION_TYPE_ADD_SAVED_ACTIVITIES: {
      const a = action as IAddSavedActivities;
      return {
        ...state,
        saved: mergeArrays(state.saved, a.activities),
      };
    }
    case ACTION_TYPE_CLEAR_SAVED_ACTIVITIES:
      return {
        ...state,
        saved: [],
      };
    case ACTION_TYPE_CLEAR_OFFERS_ACTIVITIES:
      return {
        ...state,
        offers: [],
      };
    case ACTION_TYPE_REMOVE_SAVED_ACTIVITIES: {
      const a = action as IRemoveSavedActivities;
      return {
        ...state,
        saved: removeActivitiesFromArray(state.saved, a.activities),
      };
    }
    case ACTION_TYPE_REMOVE_OFFER_ACTIVITIES: {
      const a = action as IRemoveOfferActivities;
      return {
        ...state,
        offers: removeActivitiesFromArray(state.offers, a.activities),
      };
    }
    case ACTION_TYPE_ADD_OFFERS_ACTIVITY: {
      const a = action as IAddOfferActivity;
      return {
        ...state,
        offers: mergeArrays(state.offers, a.activities),
      };
    }
    default:
      return state;
  }
}
