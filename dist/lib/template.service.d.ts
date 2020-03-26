import { Template } from '..';
import { TemplateFooterSetting } from './types';
/**
 * @class TemplateService
 * @description Services related to templates and CRUD operation
 */
export declare class TemplateService {
    /**
     * Fetch templates
     * @return Promise<AxiosResponse<Template[]>>>
     */
    static fetchTemplates: (params?: Record<string, any> | undefined) => Promise<import("axios").AxiosResponse<any>>;
    /**
    * Create  a new template
    * @param template Template
    * @return Promise<AxiosResponse<Template>>>
    */
    static createTemplate: (template: Partial<Template>) => Promise<import("axios").AxiosResponse<any>>;
    /**
    * Get an existing template
    * @param id ID of the template to be fetched
    * @return Promise<AxiosResponse<Template>>>
    */
    static getTemplateById: (id: string) => Promise<import("axios").AxiosResponse<any>>;
    /**
    * Update an existing template
    * @param id ID of the template to be updated
    * @param template The data to be updated
    * @return Promise<AxiosResponse<Template>>>
    */
    static updateTemplate: (id: string, template: Partial<Template>) => Promise<import("axios").AxiosResponse<any>>;
    /**
    * Fetch template types with its configs
    * @return Array<Type of templates with its fields>
    */
    static getTemplateTypes: () => Promise<import("axios").AxiosResponse<any>>;
    /**
    * Test a template
    * @param id ID of the template to be sent
    * @param type email | sms
    * @param providerConfig configuration
    * @example
    * {
    *   to: "jagzmz...com",
    *   cc: ["a....com","b...com"]
    * }
    * @return Promise<AxiosResponse<void>>>
    */
    /**
    * Fetch template settings
    * @return Array<TemplateFooterSetting>
    */
    static getTemplateSettings: () => Promise<import("axios").AxiosResponse<any>>;
    /**
    * Create  a new setting
    * @param setting TemplateFooterSetting
    * @return Promise<AxiosResponse<TemplateFooterSetting>>>
    */
    static createSetting: (setting: Partial<TemplateFooterSetting>) => Promise<import("axios").AxiosResponse<any>>;
    /**
       * Update an existing setting
       * @param id ID of the setting to be updated
       * @param setting The setting to be updated
       * @return Promise<AxiosResponse<TemplateFooterSetting>>>
       */
    static updateSetting: (id: string, setting: Partial<TemplateFooterSetting>) => Promise<import("axios").AxiosResponse<any>>;
}
