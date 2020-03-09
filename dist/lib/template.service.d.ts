import { Template, TemplateProviderConfig } from '..';
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
    * Test a template
    * @param id ID of the template sent
    * @param type email | sms
    * @param providerConfig configuration
    * @example
    * {
    *   to: "jagzmz...com",
    *   cc: ["a....com","b...com"]
    * }
    * @return Promise<AxiosResponse<void>>>
    */
    static testTemplate: (id: string, type: "email" | "sms", providerConfig: TemplateProviderConfig) => Promise<import("axios").AxiosResponse<any>>;
}
