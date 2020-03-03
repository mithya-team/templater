'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactRouterDom = require('react-router-dom');
var core = require('@material-ui/core');
var reactRouter = require('react-router');

var config = {
    urlPrefix: '',
    listingType: 'list'
};

var getPath = function (suffix) {
    return config.urlPrefix + '/' + suffix;
};

var TemplateCard = function (props) {
    var data = props.data;
    var classes = useStyles();
    return (React__default.createElement(core.Paper, { className: classes.root },
        React__default.createElement(reactRouterDom.Link, { to: getPath(data.id) },
            React__default.createElement(core.Box, { display: "flex", justifyContent: "space-between" },
                React__default.createElement(core.Typography, { variant: "h4" }, data.name),
                React__default.createElement(core.Typography, { variant: "caption" }, data.slug))),
        React__default.createElement(core.Typography, null, data.id)));
};
var useStyles = core.makeStyles(function () { return core.createStyles({
    root: {
        padding: 8
    }
}); });

var TemplateList = function () {
    // const { listingType = templaterConfig.listingType } = props;
    // const classes = useStyles(props);
    var _a = useTemplateService(), templates = _a.templates, status = _a.status;
    return (React__default.createElement(core.Box, null, status === 'loading' ? React__default.createElement(core.LinearProgress, { color: "primary" }) :
        templates.map(function (t, i) { return (React__default.createElement(core.Box, { margin: "10px auto", key: t.id + i, width: "500px" },
            React__default.createElement(TemplateCard, { data: t }))); })));
};

var AllTemplates = function () {
    // const classes = useStyles(props)
    return (React__default.createElement("div", null,
        React__default.createElement(TemplateList, null)));
};

var EditTemplate = function () {
    var id = reactRouter.useParams().id;
    // const classes = useStyles(props)
    return (React__default.createElement("div", null,
        React__default.createElement(core.Typography, null,
            "ID: ",
            id)));
};

var TemplateRouter = function (props) {
    console.log("here", props);
    return (
    // <BrowserRouter>
    React__default.createElement(reactRouterDom.Switch, null,
        React__default.createElement(reactRouterDom.Route, { exact: true, path: getPath(':id'), component: EditTemplate }),
        React__default.createElement(reactRouterDom.Route, { path: getPath(''), component: AllTemplates }))
    // </BrowserRouter>
    );
};
var TemplateRouter$1 = reactRouterDom.withRouter(TemplateRouter);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var TemplateService = /** @class */ (function () {
    function TemplateService() {
    }
    TemplateService.fetchTemplates = function () {
        return new Promise((function (resolve) {
            setTimeout(function () {
                return resolve(dummy);
            }, 1000);
        }));
    };
    return TemplateService;
}());
var dummy = [
    {
        "name": "Forget Password",
        "modified": false,
        "id": "5e5dd9779dc38ad467f2312e",
        "slug": "forgetPassword",
        "created": "2020-03-03T10:04:39.883Z",
        "updated": "2020-03-03T10:04:39.883Z",
        "fields": [
            {
                "value": "link",
                "description": "Link to send user for changing password.",
                "default": "-f internet.url",
                "isRequired": true
            },
            {
                "value": "id",
                "description": "Link to send user for changing password.",
                "default": "-f random.uuid",
                "isRequired": false
            }
        ],
        "email": {
            "subject": "Forget Password Request {{id}}",
            "body": "\nYou have new request for forget password request.\nClick {{link}} to change your password.\n",
            "html": ""
        },
        "sms": {
            "body": "You have new request for forget password request. Click {{link}} to change your password."
        }
    },
    {
        "name": "Forget Password",
        "modified": false,
        "id": "5e5dd9779dc38ad467f2312e",
        "slug": "forgetPassword",
        "created": "2020-03-03T10:04:39.883Z",
        "updated": "2020-03-03T10:04:39.883Z",
        "fields": [
            {
                "value": "link",
                "description": "Link to send user for changing password.",
                "default": "-f internet.url",
                "isRequired": true
            },
            {
                "value": "id",
                "description": "Link to send user for changing password.",
                "default": "-f random.uuid",
                "isRequired": false
            }
        ],
        "email": {
            "subject": "Forget Password Request {{id}}",
            "body": "\nYou have new request for forget password request.\nClick {{link}} to change your password.\n",
            "html": ""
        },
        "sms": {
            "body": "You have new request for forget password request. Click {{link}} to change your password."
        }
    },
    {
        "name": "Forget Password",
        "modified": false,
        "id": "5e5dd9779dc38ad467f2312e",
        "slug": "forgetPassword",
        "created": "2020-03-03T10:04:39.883Z",
        "updated": "2020-03-03T10:04:39.883Z",
        "fields": [
            {
                "value": "link",
                "description": "Link to send user for changing password.",
                "default": "-f internet.url",
                "isRequired": true
            },
            {
                "value": "id",
                "description": "Link to send user for changing password.",
                "default": "-f random.uuid",
                "isRequired": false
            }
        ],
        "email": {
            "subject": "Forget Password Request {{id}}",
            "body": "\nYou have new request for forget password request.\nClick {{link}} to change your password.\n",
            "html": ""
        },
        "sms": {
            "body": "You have new request for forget password request. Click {{link}} to change your password."
        }
    },
    {
        "name": "Forget Password",
        "modified": false,
        "id": "5e5dd9779dc38ad467f2312e",
        "slug": "forgetPassword",
        "created": "2020-03-03T10:04:39.883Z",
        "updated": "2020-03-03T10:04:39.883Z",
        "fields": [
            {
                "value": "link",
                "description": "Link to send user for changing password.",
                "default": "-f internet.url",
                "isRequired": true
            },
            {
                "value": "id",
                "description": "Link to send user for changing password.",
                "default": "-f random.uuid",
                "isRequired": false
            }
        ],
        "email": {
            "subject": "Forget Password Request {{id}}",
            "body": "\nYou have new request for forget password request.\nClick {{link}} to change your password.\n",
            "html": ""
        },
        "sms": {
            "body": "You have new request for forget password request. Click {{link}} to change your password."
        }
    }
];

var useTemplateService = function () {
    var _a = React.useState([]), templates = _a[0], setTemplates = _a[1];
    var _b = React.useState('done'), status = _b[0], setStatus = _b[1];
    React.useEffect(function () {
        loadTemplates();
    }, []);
    var loadTemplates = function () { return __awaiter(void 0, void 0, void 0, function () {
        var t, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setStatus('loading');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, TemplateService.fetchTemplates()];
                case 2:
                    t = _a.sent();
                    setTemplates(t);
                    setStatus('done');
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    setStatus('error');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return {
        templates: templates,
        status: status
    };
};

exports.TemplateRouter = TemplateRouter;
exports.config = config;
exports.default = TemplateRouter$1;
exports.useTemplateService = useTemplateService;
//# sourceMappingURL=index.js.map
