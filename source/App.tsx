import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AppStore } from 'store';
import { Layout } from './layouts/Layout';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Provider store={AppStore}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
