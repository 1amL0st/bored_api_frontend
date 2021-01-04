export const ACTION_TYPE_SET_SHOULD_SHOW_WELCOME_WINDOW =
  'SET_SHOULD_SHOW_WELCOME_WINDOW';

export interface IActionSetShouldShowWelcomeWindow {
  type: string;
  shouldShow: boolean;
}

export function ActionShouldShowWelcomeWindow(
  shouldShow: boolean
): IActionSetShouldShowWelcomeWindow {
  return {
    type: ACTION_TYPE_SET_SHOULD_SHOW_WELCOME_WINDOW,
    shouldShow,
  };
}

export type SessionActionType = IActionSetShouldShowWelcomeWindow;
