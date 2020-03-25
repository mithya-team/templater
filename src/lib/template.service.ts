import { Template, TemplateProviderConfig } from '..';
import Axios from 'axios';


const API_URL = ''

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
    static getTemplateById = (id: string) => Axios.request({
        url: `${API_URL}/${id}`,
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

}

