import * as React from 'react';
import { Template, TemplateServiceStatus } from '../types';
import { TemplateService } from '../template.service';


export const useTemplateService = () => {
    const [templates, setTemplates] = React.useState<Template[]>([]);
    const [status, setStatus] = React.useState<TemplateServiceStatus>('done');

    React.useEffect(() => {
        loadTemplates()
    }, [])

    const loadTemplates = async () => {
        setStatus('loading');
        try {
            const _templates = await TemplateService.fetchTemplates();
            setTemplates(_templates);
            setStatus('done')
        } catch (error) {
            setStatus('error')
        }
    }

    const createTemplate = async (template: Template) => {
        setStatus('loading');
        try {
            const _template = await TemplateService.createTemplate(template);
            setTemplates([_template, ...templates])
            setStatus('done');
            return _template
        } catch (error) {
            setStatus('error')
            throw error;
        }
    }

    const updateTemplate = async (id: string, template: Template) => {
        setStatus('loading');
        try {
            const _template = await TemplateService.updateTemplate(id, template);
            setTemplates([...templates.map(t => t.id === id ? ({ ...t, ..._template }) : t)])
            setStatus('done');
            return _template
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