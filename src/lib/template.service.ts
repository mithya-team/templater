import { Template } from '..';
import Axios from 'axios';


const API_URL = 'templates'

/**
 * @class TemplateService
 * @description Services related to templates and CRUD operation
 */
export class TemplateService {
    /**
     * Fetch templates
     * @return Promise<Template[]>
     */
    static fetchTemplates = (params?: Record<string, any>) => Axios.request({
        url: API_URL,
        params
    })


    /**
    * Create  a new template
    * @param template Template
    * @return Promise<Template>
    */
    static createTemplate = (template: Partial<Template>) => Axios.request({
        url: API_URL,
        method: 'POST',
        data: template
    })


    /**
    * Update an existing template
    * @param id ID of the template to be updated
    * @param template The data to be updated
    * @return Promise<Template>
    */
    static updateTemplate = (id: string, template: Partial<Template>) => Axios.request({
        url: API_URL,
        method: 'PATCH',
        data: template
    })

}

