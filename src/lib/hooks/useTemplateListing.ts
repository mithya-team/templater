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
            const t = await TemplateService.fetchTemplates();
            setTemplates(t);
            setStatus('done')
        } catch (error) {
            setStatus('error')
        }
    }


    return {
        templates,
        status
    }
}