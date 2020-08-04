import { Template } from '..';
import Axios from 'axios';
import { API_URL, SETTINGS_API_URL } from './Config';
import { TemplateSetting } from './types';



/**
 * @class TemplateService
 * @description Services related to templates and CRUD operation
 */
export class TemplateService {
    /**
     * Fetch templates
     * @return Promise<AxiosResponse<Template[]>>>
     */
    static fetchTemplates = (params?: Record<string, any>) => Axios.request({
        url: API_URL,
        params
    })


    /**
    * Create  a new template
    * @param template Template
    * @return Promise<AxiosResponse<Template>>>
    */
    static createTemplate = (template: Partial<Template>) => Axios.request({
        url: API_URL,
        method: 'POST',
        data: template
    })





    /**
    * Get an existing template
    * @param id ID of the template to be fetched
    * @return Promise<AxiosResponse<Template>>>
    */
    static enableTemplate = (id: string) => Axios.request({
        url: `${API_URL}/${id}/enable`,
        method: 'POST'
    })


    /**
    * Get an existing template
    * @param id ID of the template to be fetched
    * @return Promise<AxiosResponse<Template>>>
    */
    static getTemplateById = (id: string) => Axios.request({
        url: `${API_URL}/${id}`,
    })


    /**
    * Get an existing template
    * @param id ID of the template to be deleted
    * @return Promise<AxiosResponse<Template>>>
    */
    static deleteTemplateById = (id: string) => Axios.request({
        url: `${API_URL}/trash`,
        params: { ids: id },
        method: 'DELETE'
    })

    /**
    * Update an existing template
    * @param id ID of the template to be updated
    * @param template The data to be updated
    * @return Promise<AxiosResponse<Template>>>
    */
    static updateTemplate = (id: string, template: Partial<Template>) => Axios.request({
        url: `${API_URL}/${id}`,
        method: 'PATCH',
        data: template
    })



    /**
    * Fetch template types with its configs
    * @return Array<Type of templates with its fields>
    */
    static getTemplateTypes = () => Axios.request({
        url: `${API_URL}/getTemplateConfig`,
    })


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
    // static testTemplate = (id: string, type: TemplateContentType, providerConfig: TemplateProviderConfig) => Axios.request({
    //     url: `Communications/${type}/send`,
    //     method: 'POST',
    //     data: {
    //         templateId: id,
    //         // type,
    //         providerFields: providerConfig
    //     }
    // })




    /**
    * Fetch template settings
    * @return Array<TemplateFooterSetting>
    */
    static getTemplateSettings = (params?: Record<string, any>) => Axios.request({
        url: SETTINGS_API_URL,
        params
    })


    /**
    * Create  a new setting
    * @param setting TemplateFooterSetting
    * @return Promise<AxiosResponse<TemplateFooterSetting>>>
    */
    static createSetting = (setting: Partial<TemplateSetting>) => Axios.request({
        url: SETTINGS_API_URL,
        method: 'POST',
        data: setting
    })

    /**
       * Update an existing setting
       * @param id ID of the setting to be updated
       * @param setting The setting to be updated
       * @return Promise<AxiosResponse<TemplateFooterSetting>>>
       */
    static updateSetting = (id: string, setting: Partial<TemplateSetting>) => Axios.request({
        url: `${SETTINGS_API_URL}/${id}`,
        method: 'PATCH',
        data: setting
    })


}

