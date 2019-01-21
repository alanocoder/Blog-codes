import * as React from 'react';
import * as prerendering from 'aspnet-prerendering';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { helloWorld_reducers } from './redux-reducers';

import { renderToString } from 'react-dom/server';

import createHistory from 'history/createMemoryHistory';
import { connectRoutes } from 'redux-first-router';
import { routes, App/*, syncLoadPage*/ } from './routes';
import { addTask } from 'domain-task';
import * as queryString from 'query-string';

export var SR = prerendering.createServerRenderer((params: prerendering.BootFuncParams): Promise<prerendering.RenderToStringResult> => {
    return new Promise((resolve, reject) => {
        var request = params.location;
        var path = request.pathname + (request.query ? '?' + queryString.stringify(request.query) : '');
        const { reducer, middleware, enhancer, thunk } = connectRoutes(createHistory({ initialEntries: [ path ]}), routes, { querySerializer: queryString });
        var Store:any = createStore(
            combineReducers({ location: reducer, 'helloWorld': helloWorld_reducers }),
            compose(enhancer, applyMiddleware(middleware, reduxThunk))
        );

        addTask(thunk(Store));
        var app = <Provider store={Store}><App /></Provider>;

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
