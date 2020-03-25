import { TemplaterConfig } from "./types";
import Axios from 'axios';
import { createMuiTheme } from "@material-ui/core";

export let config: TemplaterConfig = {
    urlPrefix: '',
    apiConfig: {
        baseUrl: '',
        accessToken: '',
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


/**
 * @function initializeTemplater
 * @param configuration Partial<TemplaterConfig>
 * @description Initialize the templater with provided configurations
 */
export const initializeTemplater = (configuration: Partial<TemplaterConfig>) => {
    config = { ...config, ...configuration, dialogProps: { ...config.dialogProps, ...configuration.dialogProps } };
    Axios.defaults.baseURL = config.apiConfig.baseUrl;
    Axios.defaults.headers.common['Authorization'] = config.apiConfig.accessToken;
    console.log("Templater Initialized", config);
}