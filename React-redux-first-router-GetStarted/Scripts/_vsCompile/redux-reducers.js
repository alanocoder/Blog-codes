"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = require("./redux-actions");
var initialState = {
    status: ''
};
function helloWorld_reducers(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case redux_actions_1.RECEIVE_HELLOWORLD:
            return __assign({}, state, action.data);
        default:
            return state;
    }
}
exports.helloWorld_reducers = helloWorld_reducers;
//# sourceMappingURL=redux-reducers.js.map