import React, { useEffect, useState } from 'react';
import { Template, TemplateServiceStatus } from '../types';
import { TemplateService } from '../template.service';
import { config } from '../Config';



const SORT = { order: 'created DESC' }

export const useTemplateService = () => {
    const [templates, setTemplates] = useState<Template[]>([]);
    const [status, setStatus] = useState<TemplateServiceStatus>('done');
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        if (config.baseUrl && config.accessToken) setIsInitialized(true);
    }, [config.baseUrl, config.accessToken])


    useEffect(() => {
        if (isInitialized)
            loadTemplates()
    }, [isInitialized])

    const loadTemplates = async () => {

        setStatus('loading');
        try {
            const res = await TemplateService.fetchTemplates({ filter: SORT });
            setTemplates(res.data);
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


    return {
        templates,
        status,
        createTemplate,
        updateTemplate
    }
}