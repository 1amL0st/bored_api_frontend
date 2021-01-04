import { createStore, compose } from 'redux';
import { rootReducer, IAppStore } from './reducers/RootReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const item = window.localStorage.getItem('store');
let persistStore = item ? JSON.parse(item) : {};

export const AppStore = createStore(
  rootReducer,
  persistStore,
  composeEnhancers()
);

AppStore.subscribe(() => {
  const json = JSON.stringify(AppStore.getState());
  window.localStorage.setItem('store', json);
});
