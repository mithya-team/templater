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
    listingType: 'list',
    dialogProps: {
        containerProps: {},
        formContainerProps: {},
        mainActionButtonProps: {},
        secondaryActionButtonProps: {},
        toolbarProps: {}
    }
};

var getPath = function (suffix) {
    return config.urlPrefix + '/' + suffix;
};

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

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

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
    TemplateService.createTemplate = function (template) {
        return new Promise((function (resolve) {
            setTimeout(function () {
                console.log("created", template);
                return resolve(template);
            }, 1000);
        }));
    };
    TemplateService.updateTemplate = function (id, template) {
        return new Promise((function (resolve) {
            setTimeout(function () {
                console.log("updated", id, template);
                return resolve(template);
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
        var _templates, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setStatus('loading');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, TemplateService.fetchTemplates()];
                case 2:
                    _templates = _a.sent();
                    setTemplates(_templates);
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
    var createTemplate = function (template) { return __awaiter(void 0, void 0, void 0, function () {
        var _template, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setStatus('loading');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, TemplateService.createTemplate(template)];
                case 2:
                    _template = _a.sent();
                    setTemplates(__spreadArrays([_template], templates));
                    setStatus('done');
                    return [2 /*return*/, _template];
                case 3:
                    error_2 = _a.sent();
                    setStatus('error');
                    throw error_2;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var updateTemplate = function (id, template) { return __awaiter(void 0, void 0, void 0, function () {
        var _template_1, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setStatus('loading');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, TemplateService.updateTemplate(id, template)];
                case 2:
                    _template_1 = _a.sent();
                    setTemplates(__spreadArrays(templates.map(function (t) { return t.id === id ? (__assign(__assign({}, t), _template_1)) : t; })));
                    setStatus('done');
                    return [2 /*return*/, _template_1];
                case 3:
                    error_3 = _a.sent();
                    setStatus('error');
                    throw error_3;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return {
        templates: templates,
        status: status,
        createTemplate: createTemplate,
        updateTemplate: updateTemplate
    };
};

var Context = React__default.createContext(null);
var ContextProvider = function (props) {
    var _a = useTemplateService(), templates = _a.templates, status = _a.status, createTemplate = _a.createTemplate, updateTemplate = _a.updateTemplate;
    var _b = React.useState(false), dialogOpen = _b[0], setDialogOpen = _b[1];
    var _c = React.useState(), selectedTemplate = _c[0], setSelectedTemplate = _c[1];
    var openTemplateEditor = function (template) {
        setSelectedTemplate(template);
        setDialogOpen(true);
    };
    var closeDialog = function () {
        setSelectedTemplate(undefined);
        setDialogOpen(false);
    };
    var saveChanges = function (template) { return __awaiter(void 0, void 0, void 0, function () {
        var id, created, updated, templateData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    if (!template.id) return [3 /*break*/, 2];
                    id = template.id, created = template.created, updated = template.updated, templateData = __rest(template, ["id", "created", "updated"]);
                    return [4 /*yield*/, updateTemplate(template.id, templateData)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, createTemplate(template)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    throw error_1;
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var value = {
        templates: templates,
        status: status,
        selectedTemplate: selectedTemplate,
        dialogOpen: dialogOpen,
        saveChanges: saveChanges,
        openTemplateEditor: openTemplateEditor,
        closeDialog: closeDialog,
    };
    return (React__default.createElement(Context.Provider, { value: value },
        props.children,
        React__default.createElement(AddEditDialog, null)));
};

var TemplateCard = function (props) {
    var context = React.useContext(Context);
    if (!context)
        return React__default.createElement("div", null);
    var openTemplateEditor = context.openTemplateEditor;
    var data = props.data;
    var classes = useStyles();
    return (React__default.createElement(core.Paper, { className: classes.root },
        React__default.createElement(reactRouterDom.Link, { to: getPath(data.id) },
            React__default.createElement(core.Box, { display: "flex", justifyContent: "space-between" },
                React__default.createElement(core.Typography, { variant: "h4" }, data.name),
                React__default.createElement(core.Typography, { variant: "caption" }, data.slug))),
        React__default.createElement(core.Typography, null, data.id),
        React__default.createElement(core.Button, { color: "primary", onClick: function () { return openTemplateEditor(data); }, variant: "contained" }, "EDIT")));
};
var useStyles = core.makeStyles(function () { return core.createStyles({
    root: {
        padding: 8
    }
}); });

var TemplateList = function () {
    // const { listingType = templaterConfig.listingType } = props;
    // const classes = useStyles(props);
    var context = React.useContext(Context);
    if (!context)
        return React__default.createElement("div", null);
    var templates = context.templates, status = context.status;
    return (React__default.createElement(core.Box, null, status === 'loading' ? React__default.createElement(core.LinearProgress, { color: "primary" }) :
        templates.map(function (t, i) { return (React__default.createElement(core.Box, { margin: "10px auto", key: t.id + i, width: "500px" },
            React__default.createElement(TemplateCard, { data: t }))); })));
};

var AllTemplates = function () {
    var context = React.useContext(Context);
    if (!context)
        return React__default.createElement("div", null);
    var openTemplateEditor = context.openTemplateEditor;
    var classes = useStyles$1();
    return (React__default.createElement("div", null,
        React__default.createElement(TemplateList, null),
        React__default.createElement("div", { className: classes.fabContainer },
            React__default.createElement(core.Fab, { onClick: function () { return openTemplateEditor(); } },
                React__default.createElement("i", { className: "material-icons" }, "add")))));
};
var useStyles$1 = core.makeStyles(function () { return core.createStyles({
    fabContainer: {
        position: 'absolute',
        right: 30,
        bottom: 30
    }
}); });

var Preview = function () {
    var id = reactRouter.useParams().id;
    // const classes = useStyles(props)
    return (React__default.createElement("div", null,
        React__default.createElement(core.Typography, { variant: "h5" }, "PREVIEW"),
        React__default.createElement(core.Typography, null,
            "ID: ",
            id)));
};

var Form = function (props) {
    var _a;
    var template = props.template, onChange = props.onChange;
    var dialogProps = config.dialogProps;
    var classes = useStyles$2(props);
    var _handleChange = function (e) {
        onChange(e.target.name, e.target.value);
    };
    var INPUT_CONFIG = [
        { label: 'EMAIL NAME (internal purpose only)', name: 'name', value: template.name || '', handleChange: _handleChange },
        { label: 'EMAIL SUBJECT', name: 'subject', value: ((_a = template.email) === null || _a === void 0 ? void 0 : _a.subject) || '', handleChange: _handleChange },
    ];
    return (React__default.createElement(core.Paper, __assign({ elevation: 1, className: classes.root }, dialogProps.formContainerProps),
        React__default.createElement(core.Box, { display: "flex", flexDirection: "column" }, INPUT_CONFIG.map(function (config) { return (React__default.createElement(core.Box, { my: 1, key: config.name, width: "100%" },
            React__default.createElement(core.FormControl, { fullWidth: true },
                React__default.createElement(core.InputLabel, null, config.label),
                React__default.createElement(core.Input, { name: config.name, value: config.value, onChange: config.handleChange })))); }))));
};
var useStyles$2 = core.makeStyles(function () { return core.createStyles({
    root: {
        padding: '30px 20px'
    }
}); });

// function Transition(props: any) {
//     return <Slide direction="up" {...props} />;
// }
var AddEditDialog = function () {
    var dialogProps = config.dialogProps;
    var context = React.useContext(Context);
    if (!context)
        return React__default.createElement("div", null);
    var dialogOpen = context.dialogOpen, closeDialog = context.closeDialog, status = context.status, selectedTemplate = context.selectedTemplate, saveChanges = context.saveChanges;
    var _a = React.useState((selectedTemplate !== null && selectedTemplate !== void 0 ? selectedTemplate : {})), template = _a[0], setTemplate = _a[1];
    React.useEffect(function () {
        setTemplate((selectedTemplate !== null && selectedTemplate !== void 0 ? selectedTemplate : {}));
    }, [dialogOpen, selectedTemplate]);
    var classes = useStyles$3();
    var handleChange = function (key, value) {
        var _a, _b;
        if (key === 'name')
            setTemplate(__assign(__assign({}, template), (_a = {}, _a[key] = value, _a)));
        else
            setTemplate(__assign(__assign({}, template), { email: __assign(__assign({}, (template.email || { body: '', html: '', subject: '' })), (_b = {}, _b[key] = value, _b)) }));
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var isNew, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isNew = !template.id;
                    console.log("is new?", isNew);
                    console.log("submitting", template);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, saveChanges(template)];
                case 2:
                    _a.sent();
                    setTemplate({});
                    closeDialog();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var DIALOG_TITLE = selectedTemplate ? "Edit email - " + selectedTemplate.name : 'Create email';
    return (React__default.createElement(core.Dialog, { open: dialogOpen, PaperProps: { className: classes.root }, onClose: closeDialog, fullScreen: true },
        React__default.createElement(core.AppBar, __assign({}, dialogProps.toolbarProps),
            React__default.createElement(core.Toolbar, null,
                React__default.createElement(core.Box, null,
                    React__default.createElement(core.Typography, null, DIALOG_TITLE)),
                React__default.createElement(core.Box, { flex: 1 }),
                React__default.createElement(core.Box, null,
                    React__default.createElement(core.Button, __assign({}, dialogProps.secondaryActionButtonProps, { onClick: closeDialog }), "Cancel"),
                    React__default.createElement(core.Button, __assign({ variant: "contained", color: "primary" }, dialogProps.mainActionButtonProps, { onClick: handleSubmit }), status === 'loading' ? React__default.createElement(core.CircularProgress, null) : 'Submit')))),
        React__default.createElement(core.Box, __assign({}, dialogProps.containerProps, { margin: "100px auto", width: "600px" }),
            React__default.createElement(Form, { template: template, onChange: handleChange }))));
};
var useStyles$3 = core.makeStyles(function () { return core.createStyles({
    root: {
        backgroundColor: '#F5F5F5'
    }
}); });

var TemplateRouter = function () {
    return (React__default.createElement(ContextProvider, null,
        React__default.createElement(reactRouterDom.Switch, null,
            React__default.createElement(reactRouterDom.Route, { exact: true, path: getPath(':id'), component: Preview }),
            React__default.createElement(reactRouterDom.Route, { exact: true, path: getPath(''), component: AllTemplates }))));
};
var TemplateRouter$1 = reactRouterDom.withRouter(TemplateRouter);

exports.Form = Form;
exports.TemplateRouter = TemplateRouter;
exports.TemplateService = TemplateService;
exports.config = config;
exports.default = TemplateRouter$1;
exports.useTemplateService = useTemplateService;
//# sourceMappingURL=index.js.map
