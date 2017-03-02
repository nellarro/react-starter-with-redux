import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'react-select/dist/react-select.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './index.scss';

import { Provider } from "react-redux";

import store from './store';

import Reporter from './MyComponent/MyComponent.js';

ReactDOM.render((
    <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={Reporter}/>
    </Router>
    </Provider>
), document.getElementById('root'));
