import React, { useEffect, useState } from 'react';
import { Template, TemplateServiceStatus, TemplateProviderConfig, TemplateTypeConfig, TemplateSetting } from '../types';
import { TemplateService } from '../template.service';
import { config } from '../Config';
import { Notifier } from '../notification';





let FILTER: Record<string, any> = { order: 'created DESC' }

export const useTemplateService = (defaultFilter: Record<string, any> = FILTER) => {
    const [templates, setTemplates] = useState<Template[]>([]);
    const [settings, setSettings] = useState<TemplateSetting[]>([])
    const [flows, setFlows] = useState<Partial<TemplateTypeConfig>>({})
    const [status, setStatus] = useState<TemplateServiceStatus>('done');
    const [isInitialized, setIsInitialized] = useState(false);

    // if (config.eventId && config.agencyId) FILTER = { ...FILTER, where: { eventId: config.eventId, agencyId: config.agencyId } }

    useEffect(() => {
        if (config.apiConfig.baseUrl && config.apiConfig.accessToken) setIsInitialized(true);
    }, [config.apiConfig])


    useEffect(() => {
        if (isInitialized) {
            loadTemplates();
            loadSettings();
        }
    }, [isInitialized])

    const loadSettings = async () => {
        try {
            const res = await TemplateService.getTemplateSettings({ filter: defaultFilter });
            if (res.data[0])
                setSettings(res.data)
        } catch (error) {

        }
    }
    const saveSettings = async (setting: Partial<TemplateSetting>) => {
        try {
            if (!setting.id) await createSetting(setting)
            else {
                // const _s = settings.findIndex(s => s.i)
                await updateSetting(setting.id, setting)
            }
        } catch (error) {
            throw error;
        }
    }

    const createSetting = async (setting: Partial<TemplateSetting>) => {
        setStatus('loading');
        try {
            const res = await TemplateService.createSetting(setting);
            setSettings([res.data, ...settings]);
            Notifier.templateCreate()
            setStatus('done')
        } catch (error) {
            Notifier.templateCreate(error)
            setStatus('error')
            throw error;
        }
    }

    const updateSetting = async (id: string, setting: Partial<TemplateSetting>) => {
        setStatus('loading');
        try {
            const res = await TemplateService.updateSetting(id, setting);
            setSettings([...settings.map(s => s.id === res.data?.id ? ({ ...s, ...res.data }) : s)]);
            Notifier.templateUpdate()
            setStatus('done')
        } catch (error) {
            Notifier.templateUpdate(error)
            setStatus('error')
            throw error;
        }
    }


    const loadTemplates = async () => {
        setStatus('loading');
        try {
            const [res1, res2] = await Promise.all([TemplateService.fetchTemplates({ filter: defaultFilter }), TemplateService.getTemplateTypes()]);
            setTemplates(res1.data);
            setFlows(res2.data);
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
            Notifier.templateCreate()
            return res.data
        } catch (error) {
            setStatus('error')
            Notifier.templateCreate(error)
            throw error;
        }
    }


    const updateTemplate = async (id: string, template: Partial<Template>) => {
        setStatus('loading');
        try {
            const res = await TemplateService.updateTemplate(id, template);
            setTemplates([...templates.map(t => t.id === id ? ({ ...t, ...res.data }) : t)])
            setStatus('done');
            Notifier.templateUpdate();
            return res.data
        } catch (error) {
            setStatus('error')
            Notifier.templateUpdate(error);
            throw error;
        }
    }

    const enableTemplate = async (id: string) => {
        setStatus('loading');
        try {
            const res = await TemplateService.enableTemplate(id);
            const flow = res.data.flow || '';
            const updatedTemplates = templates.map<Template>(t => t.id === id ? ({ ...t, ...res.data }) : t.flow === flow ? ({ ...t, enabled: false }) : t);
            setStatus('done');
            setTemplates(updatedTemplates);
            Notifier.templateEnabled()
        } catch (error) {
            Notifier.templateEnabled(error)
            setStatus('error');
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


    const deleteTemplateById = async (templateId: string) => {
        console.log("deleting template")
        setStatus('loading');
        try {
            await TemplateService.deleteTemplateById(templateId);
            console.log("deleting complete", templateId);
            setTemplates(templates => templates.filter(t => t.id !== templateId));
            setStatus('done');
            Notifier.templateDelete();
            return;
        } catch (error) {
            Notifier.templateDelete(error);
            setStatus('error');
            throw error;
        }
    }

    const testTemplate = async (templateId: string, type: any, providerConfig: TemplateProviderConfig) => {
        try {
            // const res = await TemplateService.testTemplate(templateId, type, providerConfig);
            Notifier.templateSend();
        } catch (error) {
            Notifier.templateSend(error);

        }
    }


    return {
        flows,
        templates,
        settings,
        createSetting,
        updateSetting,
        saveSettings,
        enableTemplate,
        status,
        createTemplate,
        updateTemplate,
        getTemplateById,
        testTemplate,
        deleteTemplateById
    }
}