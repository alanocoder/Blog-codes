"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dom_1 = require("react-dom");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var redux_thunk_1 = require("redux-thunk");
var redux_reducers_1 = require("./redux-reducers");
var routes_1 = require("./routes");
var redux_first_router_1 = require("redux-first-router");
var createBrowserHistory_1 = require("history/createBrowserHistory");
var queryString = require("query-string");
var _a = redux_first_router_1.connectRoutes(createBrowserHistory_1.default(), routes_1.routes, { querySerializer: queryString }), reducer = _a.reducer, middleware = _a.middleware, enhancer = _a.enhancer, thunk = _a.thunk;
var Store = redux_1.createStore(redux_1.combineReducers({ location: reducer, 'helloWorld': redux_reducers_1.helloWorld_reducers }), window.ReduxInitialState, redux_1.compose(enhancer, redux_1.applyMiddleware(middleware, redux_thunk_1.default)));
react_dom_1.hydrate(React.createElement(react_redux_1.Provider, { store: Store },
    React.createElement(routes_1.App, null)), document.querySelector('#content'));
//# sourceMappingURL=entry.js.map