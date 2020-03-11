import React, { useEffect, useState } from 'react';
import { Template, TemplateServiceStatus, TemplateContentType, TemplateProviderConfig, TemplateTypeConfig } from '../types';
import { TemplateService } from '../template.service';
import { config } from '../Config';



const SORT = { order: 'created DESC' }

export const useTemplateService = () => {
    const [templates, setTemplates] = useState<Template[]>([]);
    const [types, setTypes] = useState<Partial<TemplateTypeConfig>>({})
    const [status, setStatus] = useState<TemplateServiceStatus>('done');
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        if (config.baseUrl && config.accessToken) setIsInitialized(true);
    }, [config.baseUrl, config.accessToken])


    useEffect(() => {
        if (isInitialized) {
            loadTemplates();
        }
    }, [isInitialized])



    const loadTemplates = async () => {

        setStatus('loading');
        try {
            const [res1, res2] = await Promise.all([TemplateService.fetchTemplates({ filter: SORT }), TemplateService.getTemplateTypes()]);
            setTemplates(res1.data);
            setTypes(res2.data);
            setStatus('done')
        } catch (error) {
            setStatus('error')
        }
    }

    const createTemplate = async (template: Partial<Template>) => {
        setStatus('loading');
        try {
            const res = await TemplateService.createTemplate(template);
            setTemplates([res.data, ...templates])
            setStatus('done');
            return res.data
        } catch (error) {
            setStatus('error')
            throw error;
        }
    }

    const updateTemplate = async (id: string, template: Partial<Template>) => {
        setStatus('loading');
        try {
            const res = await TemplateService.updateTemplate(id, template);
            setTemplates([...templates.map(t => t.id === id ? ({ ...t, ...res.data }) : t)])
            setStatus('done');
            return res.data
        } catch (error) {
            setStatus('error')
            throw error;
        }
    }

    const getTemplateById = async (id: string): Promise<Template> => {
        const index = templates.findIndex(t => t.id === id);
        if (index > -1)
            return templates[index];
        try {
            const res = await TemplateService.getTemplateById(id);
            return res.data
        } catch (error) {
            throw error;
        }
    }


    const testTemplate = async (templateId: string, type: TemplateContentType, providerConfig: TemplateProviderConfig) => {
        try {
            const res = await TemplateService.testTemplate(templateId, type, providerConfig);
        } catch (error) {

        }
    }


    return {
        types,
        templates,
        status,
        createTemplate,
        updateTemplate,
        getTemplateById,
        testTemplate
    }
}