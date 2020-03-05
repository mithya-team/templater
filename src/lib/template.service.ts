import { Template, TemplateContentType, TemplateProviderConfig } from '..';
import Axios from 'axios';


const API_URL = 'templates'

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
    static testTemplate = (id: string, type: TemplateContentType, providerConfig: TemplateProviderConfig) => Axios.request({
        url: `${API_URL}/testTemplate`,
        method: 'POST',
        params: {
            uid: id,
            type,
            providerFields: providerConfig
        }
    })

}

