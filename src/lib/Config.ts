import { TemplaterConfig } from "./types";
import Axios from 'axios';
import { createMuiTheme } from "@material-ui/core";



export let config: TemplaterConfig = {
    urlPrefix: '',
    apiConfig: {
        baseUrl: '',
        accessToken: '',
        settingsModelName: ''
    },
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
}