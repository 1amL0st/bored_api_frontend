import {
  ACTION_TYPE_SET_SHOULD_SHOW_WELCOME_WINDOW,
  SessionActionType,
} from '../actions/Session';

export interface ISessionStore {
  shouldShowWelcomeWindow: boolean;
}

const DefaultState: ISessionStore = {
  shouldShowWelcomeWindow: true,
};

export function sessionReducer(
  state = DefaultState,
  action: SessionActionType
): ISessionStore {
  switch (action.type) {
    case ACTION_TYPE_SET_SHOULD_SHOW_WELCOME_WINDOW: {
      return {
        ...state,
        shouldShowWelcomeWindow: action.shouldShow,
      };
    }
    default:
      return state;
  }
}
