import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.scss';

import { Provider } from "react-redux";
// Provider has 'store' from react-redux
// then imports store from the file there
import store from './store';

import MyComponent from './MyComponent/MyComponent.js';

ReactDOM.render((
    <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={MyComponent}/>
    </Router>
    </Provider>
), document.getElementById('root'));
