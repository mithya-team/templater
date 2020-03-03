import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
    return (React.createElement(BrowserRouter, null,
        React.createElement(Switch, null,
            React.createElement(Route, { exact: true, path: getPath(''), component: AllTemplates }),
            React.createElement(Route, { exact: true, path: getPath(':id'), component: EditTemplate }))));
};

export default TemplateRouter;
export { RoutConfig, TemplateRouter };
//# sourceMappingURL=index.es.js.map
