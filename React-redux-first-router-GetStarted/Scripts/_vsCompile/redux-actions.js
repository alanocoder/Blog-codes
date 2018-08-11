"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RECEIVE_HELLOWORLD = 'RECEIVE_HELLO_WORLD';
function receiveHelloWorldData(data) {
    return {
        type: exports.RECEIVE_HELLOWORLD,
        data: data
    };
}
exports.receiveHelloWorldData = receiveHelloWorldData;
//# sourceMappingURL=redux-actions.js.map