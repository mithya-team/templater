import { TemplaterConfig } from "./types";
export declare let config: TemplaterConfig;
export declare let API_URL: string;
export declare let SETTINGS_API_URL: string;
/**
 * @function initializeTemplater
 * @param configuration Partial<TemplaterConfig>
 * @description Initialize the templater with provided configurations
 */
export declare const initializeTemplater: (configuration: Partial<TemplaterConfig>) => void;
export declare const getQuillModule: (toolbarId: string) => {
    toolbar: string;
    history: {
        delay: number;
        maxStack: number;
        userOnly: boolean;
    };
};
export declare const QUILL_MODULES: {
    history: {
        delay: number;
        maxStack: number;
        userOnly: boolean;
    };
    toolbar: (string[] | {
        size: string[];
    }[] | {
        'indent': string;
    }[] | {
        'color': never[];
    }[] | {
        'align': never[];
    }[])[];
};
export declare const QUILL_MODULES_ALT: {
    history: {
        delay: number;
        maxStack: number;
        userOnly: boolean;
    };
    toolbar: (string[] | {
        'indent': string;
    }[] | {
        'color': never[];
    }[])[];
};
export declare const QUILL_FORMATS: string[];
