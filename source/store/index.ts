import { compose, createStore } from 'redux';
import { rootReducer } from './reducers/RootReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const item = window.localStorage.getItem('store');
const persistStore = item ? JSON.parse(item) : {};

export const AppStore = createStore(
  rootReducer,
  persistStore,
  composeEnhancers()
);

AppStore.subscribe(() => {
  const json = JSON.stringify(AppStore.getState());
  window.localStorage.setItem('store', json);
});
