"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var HelloWorld_1 = require("./HelloWorld");
var react_redux_1 = require("react-redux");
var redux_first_router_link_1 = require("redux-first-router-link");
var async_thunks_1 = require("./async-thunks");
// Mapping of route action type to component
var Components = {
    'HOME': React.createElement(HelloWorld_1.HelloWorld, null),
    'ABOUT': React.createElement("div", null, "About page"),
    'CONTACT': React.createElement("div", null, "Contact page")
};
// This component shows the correct page based on the route action type defined at state.location.type
var Switcher = /** @class */ (function (_super) {
    __extends(Switcher, _super);
    function Switcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Switcher.prototype.render = function () {
        return Components[this.props.page] || React.createElement("div", null, "Something wrong");
    };
    return Switcher;
}(React.PureComponent));
var Page = react_redux_1.connect(function (state) { return ({ page: state.location.type }); })(Switcher);
exports.App = function () { return (React.createElement("div", null,
    React.createElement("div", null,
        React.createElement(redux_first_router_link_1.default, { to: { type: 'HOME' } }, "Home"),
        " ",
        React.createElement(redux_first_router_link_1.default, { to: { type: 'ABOUT' } }, "About"),
        " ",
        React.createElement(redux_first_router_link_1.default, { to: { type: 'CONTACT' } }, "Contact")),
    React.createElement("hr", null),
    React.createElement(Page, null))); };
// route action types map to URLs
exports.routes = {
    HOME: {
        path: '/',
        thunk: async_thunks_1.retrieveData() // optional thunk
    },
    ABOUT: '/support/About',
    CONTACT: '/support/Contact'
};
//# sourceMappingURL=routes.js.map