"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = require("./redux-actions");
var domain_task_1 = require("domain-task");
function retrieveData_simulated() {
    return function (dispatch, getState) {
        // simulate data retrieval
        setTimeout(function () {
            dispatch(redux_actions_1.receiveHelloWorldData({ status: "Data received", count: 5 }));
        }, 5000);
    };
}
exports.retrieveData_simulated = retrieveData_simulated;
function retrieveData() {
    return function (dispatch, getState) {
        if (getState()['helloWorld'].status)
            return; // only call if no data
        var p = domain_task_1.fetch('/Home/GetHelloWorldData', { method: 'get' })
            .then(function (response) { return response.json(); })
            .then(function (data) { return dispatch(redux_actions_1.receiveHelloWorldData(data)); })
            .catch(function () { }); // ignore errors in this example
        domain_task_1.addTask(p);
    };
}
exports.retrieveData = retrieveData;
//# sourceMappingURL=async-thunks.js.map