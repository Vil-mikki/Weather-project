import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import App from './App';
import store from './store/index';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path='/:city?' component={App} />
            <Redirect from='/' to='/saint petersburg' />
        </BrowserRouter>
    </Provider>,
document.getElementById('root'));