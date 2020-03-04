import { TemplaterConfig } from "./types";
import Axios from 'axios';

export let config: TemplaterConfig = {
    urlPrefix: '',
    baseUrl: '',
    accessToken: '',
    listingType: 'list',
    dialogProps: {
        containerProps: {},
        formContainerProps: {},
        mainActionButtonProps: {},
        secondaryActionButtonProps: {},
        toolbarProps: {}
    }
}


/**
 * @function initializeTemplater
 * @params configuration
 * @description Initialize the templater with provided configurations
 */
export const initializeTemplater = (configuration: Partial<TemplaterConfig>) => {
    config = { ...config, ...configuration, dialogProps: { ...config.dialogProps, ...configuration.dialogProps } };
    Axios.defaults.baseURL = config.baseUrl;
    Axios.defaults.headers.common['Authorization'] = config.accessToken;
    console.log("Templater Initialized", Axios.defaults);
}