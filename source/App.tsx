import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppStore } from 'store';
import './App.scss';
import { Layout } from './layouts/Layout';

const App: React.FC = () => {
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
