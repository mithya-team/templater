'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactRouterDom = require('react-router-dom');

var AllTemplates = function () {
    return (React.createElement("div", null, "all templates"));
};

var EditTemplate = function () {
    return (React.createElement("div", null, "edit templates"));
};

var RoutConfig = {
    urlPrefix: ''
};

var getPath = function (suffix) {
    return RoutConfig.urlPrefix + '/' + suffix;
};

var TemplateRouter = function () {
    return (React.createElement(reactRouterDom.BrowserRouter, null,
        React.createElement(reactRouterDom.Switch, null,
            React.createElement(reactRouterDom.Route, { exact: true, path: getPath(''), component: AllTemplates }),
            React.createElement(reactRouterDom.Route, { exact: true, path: getPath(':id'), component: EditTemplate }))));
};

exports.RoutConfig = RoutConfig;
exports.TemplateRouter = TemplateRouter;
exports.default = TemplateRouter;
//# sourceMappingURL=index.js.map
