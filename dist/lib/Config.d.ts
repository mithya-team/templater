import { TemplaterConfig } from "./types";
export declare let config: TemplaterConfig;
export declare let API_URL: string;
/**
 * @function initializeTemplater
 * @param configuration Partial<TemplaterConfig>
 * @description Initialize the templater with provided configurations
 */
export declare const initializeTemplater: (configuration: Partial<TemplaterConfig>) => void;
