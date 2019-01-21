import * as React from 'react';
import { hydrate } from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { helloWorld_reducers } from './redux-reducers';

import { routes, App/*, syncLoadPage*/ } from './routes';
import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import * as queryString from 'query-string';

const { reducer, middleware, enhancer, thunk } = connectRoutes(createHistory(), routes, { querySerializer: queryString });
var Store:any = createStore(
    combineReducers({ location: reducer, 'helloWorld': helloWorld_reducers }),
    (window as any).ReduxInitialState,
    compose(enhancer, applyMiddleware(middleware, reduxThunk))
);

hydrate(<Provider store={Store}><App /></Provider>, document.querySelector('#content'));