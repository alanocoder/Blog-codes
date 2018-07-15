import * as React from 'react';
import * as prerendering from 'aspnet-prerendering';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { helloWorld_reducers } from './redux-reducers';

import { renderToString } from 'react-dom/server';

import { routerForHapi } from 'redux-little-router';
import { routes, App } from './routes';


export var SR = prerendering.createServerRenderer((params: prerendering.BootFuncParams): Promise<prerendering.RenderToStringResult> => {
    return new Promise((resolve, reject) => {
        var request = params.location;
        const { reducer, middleware, enhancer } =
            routerForHapi(
                {
                    routes,
                    request: { // pass in adjusted request from javascriptServices's params.location to work using routerForHapi
                        path: request.pathname,
                        url: null,
                        query: request.query
                    }
                });

        var Store = createStore(combineReducers({ router: reducer, 'helloWorld': helloWorld_reducers }), compose(enhancer, applyMiddleware(middleware, thunk)));
        var app = <Provider store={Store}><App /></Provider>;

        renderToString(app); // This kick off any async tasks started by React components

        // any async task (has a Promise) should call addTask() to add to domainTasks.
        // only do the actual rendering when all async tasks are done.
        params.domainTasks.then(() => {
            resolve({
                html: renderToString(app),
                globals: {
                    ReduxInitialState: Store.getState()
                }
            });
        }, reject); // Also propagate any errors back into the host application
    });
});