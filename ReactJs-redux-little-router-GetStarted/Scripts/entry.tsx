import * as React from 'react';
import { hydrate } from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { helloWorld_reducers } from './redux-reducers';

import { routerForBrowser } from 'redux-little-router';
import { routes, App } from './routes';

const { reducer, middleware, enhancer } = routerForBrowser({ routes });

var Store = createStore(
    combineReducers({ router: reducer, 'helloWorld': helloWorld_reducers }),
    (window as any).ReduxInitialState,
    compose(enhancer, applyMiddleware(middleware, thunk))
);
hydrate(<Provider store={Store}><App /></Provider>, document.querySelector('#content'));