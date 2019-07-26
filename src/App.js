import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotron';

import ColorsStyle from './styles/colors';
import GlobalStyle from './styles/global';

import Routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <ColorsStyle />
          <GlobalStyle />
          <Routes />
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
