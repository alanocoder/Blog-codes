"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var prerendering = require("aspnet-prerendering");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var redux_thunk_1 = require("redux-thunk");
var redux_reducers_1 = require("./redux-reducers");
var server_1 = require("react-dom/server");
var createMemoryHistory_1 = require("history/createMemoryHistory");
var redux_first_router_1 = require("redux-first-router");
var routes_1 = require("./routes");
var domain_task_1 = require("domain-task");
var queryString = require("query-string");
exports.SR = prerendering.createServerRenderer(function (params) {
    return new Promise(function (resolve, reject) {
        var request = params.location;
        var path = request.pathname + (request.query ? '?' + queryString.stringify(request.query) : '');
        var _a = redux_first_router_1.connectRoutes(createMemoryHistory_1.default({ initialEntries: [path] }), routes_1.routes, { querySerializer: queryString }), reducer = _a.reducer, middleware = _a.middleware, enhancer = _a.enhancer, thunk = _a.thunk;
        var Store = redux_1.createStore(redux_1.combineReducers({ location: reducer, 'helloWorld': redux_reducers_1.helloWorld_reducers }), redux_1.compose(enhancer, redux_1.applyMiddleware(middleware, redux_thunk_1.default)));
        domain_task_1.addTask(thunk(Store));
        var app = React.createElement(react_redux_1.Provider, { store: Store },
            React.createElement(routes_1.App, null));
        // any async task (has a Promise) should call addTask() to add to domainTasks.
        // only do the actual rendering when all async tasks are done.
        params.domainTasks.then(function () {
            resolve({
                html: server_1.renderToString(app),
                globals: {
                    ReduxInitialState: Store.getState()
                }
            });
        }, reject); // Also propagate any errors back into the host application
    });
});
//# sourceMappingURL=entry-server.js.map