import * as React from 'react';
import * as prerendering from 'aspnet-prerendering';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { helloWorld_reducers } from './redux-reducers';

import { HelloWorld } from './HelloWorld';
import { renderToString } from 'react-dom/server';

export var SR = prerendering.createServerRenderer((params: prerendering.BootFuncParams): Promise<prerendering.RenderToStringResult> => {
    return new Promise((resolve, reject) => {
        var Store = createStore(helloWorld_reducers, applyMiddleware(thunk));
        var app = <Provider store={Store}><HelloWorld /></Provider>;

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