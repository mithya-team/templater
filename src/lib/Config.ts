import { TemplaterConfig } from "./types";
import Axios from 'axios';
import { createMuiTheme } from "@material-ui/core";
import { Quill } from "react-quill";



export let config: TemplaterConfig = {
    urlPrefix: '',
    apiConfig: {
        baseUrl: '',
        accessToken: '',
        settingsModelName: ''
    },
    singleInstances: true,
    theme: createMuiTheme(),
    disableTabs: false,
    onActionCompleted: () => { },
    listingType: 'list',
    rootContainerProps: {},
    dialogProps: {
        containerProps: {},
        formContainerProps: {},
        mainActionButtonProps: {},
        secondaryActionButtonProps: {},
        appbarProps: {}
    }
}

export let API_URL = 'templates'
export let SETTINGS_API_URL = 'templateSettings'



/**
 * @function initializeTemplater
 * @param configuration Partial<TemplaterConfig>
 * @description Initialize the templater with provided configurations
 */
export const initializeTemplater = (configuration: Partial<TemplaterConfig>) => {
    config = { ...config, ...configuration, apiConfig: { ...config.apiConfig, ...configuration.apiConfig }, dialogProps: { ...config.dialogProps, ...configuration.dialogProps } };
    Axios.defaults.baseURL = config.apiConfig.baseUrl;
    Axios.defaults.headers.common['Authorization'] = config.apiConfig.accessToken;
    API_URL = config.apiConfig.modelName || 'templates'
    SETTINGS_API_URL = config.apiConfig.settingsModelName || 'templateSettings'
    console.log("Templater Initialized", config);


    var Size = Quill.import('attributors/style/size');
    var Align = Quill.import('attributors/style/align');
    Size.whitelist = ['12px', '14px', '18px'];
    Quill.register(Size, true);
    Quill.register(Align, true);
}

export const getQuillModule = (toolbarId: string) => {
    return {
        ...QUILL_MODULES,
        toolbar: `#${toolbarId}`
    }
}

export const QUILL_MODULES = {
    history: {
        delay: 100,
        maxStack: 200,
        userOnly: false
    },
    clipboard: {
        matchVisual: false,
    },
    toolbar: [
        [{ size: ['small', 'normal', 'large'] }],
        ['bold', 'italic', 'underline', 'strike', 'link', 'blockquote'],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'color': [] }],
        [{ 'align': [] }],
        ['image'],
        [{ 'color': ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }]

        // [{ 'script': 'sub' }, { 'script': 'super' }],
        // [{ 'direction': 'rtl' }],
        // ['clean'],
    ],

}

export const QUILL_MODULES_ALT = {
    history: {
        delay: 100,
        maxStack: 200,
        userOnly: false
    },
    clipboard: {
        matchVisual: false,
    },
    toolbar: [
        // [{ size: ['small', 'normal', 'large', 'huge'] }],
        // [{ 'size': ['12px', '16px', '20px'] }],
        ['bold', 'italic', 'underline', 'strike', 'link', 'blockquote'],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'color': [] }],
        // [{ 'align': ['center'] }],
        ['image'],
        // [{ 'script': 'sub' }, { 'script': 'super' }],
        // [{ 'direction': 'rtl' }],
        // ['clean'],
    ],

}


export const QUILL_FORMATS = [
    'header',
    'image',
    'bold', 'italic', 'underline', 'strike',
    'indent',
    'link', 'image', 'color', 'script', 'font', 'align',
    'direction',
    'size', 'list',
    'blockquote', 'code-block'
]