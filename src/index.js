import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import CITY_NAMES from './constants/cityNames';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/:city" component={App} />
      <Route exact path="/">
        <Redirect exact to={`${CITY_NAMES.SAINT_PETERSBURG.value}`} />
      </Route>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
