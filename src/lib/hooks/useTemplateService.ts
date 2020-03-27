import React, { useEffect, useState } from 'react';
import { Template, TemplateServiceStatus, TemplateProviderConfig, TemplateTypeConfig, TemplateFooterSetting } from '../types';
import { TemplateService } from '../template.service';
import { config } from '../Config';
import { Notifier } from '../notification';





let FILTER: Record<string, any> = { order: 'created DESC' }

export const useTemplateService = (defaultFilter: Record<string, any> = FILTER) => {
    const [templates, setTemplates] = useState<Template[]>([]);
    const [settings, setSettings] = useState<TemplateFooterSetting>({ channel: 'email', links: [], id: '' })
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
                setSettings(res.data[0])
        } catch (error) {

        }
    }
    const saveSettings = async (setting: Partial<TemplateFooterSetting>) => {
        if (!setting.id) createSetting(setting)
        else updateSetting(setting.id, setting)
    }

    const createSetting = async (setting: Partial<TemplateFooterSetting>) => {
        try {
            const res = await TemplateService.createSetting(setting);
            setSettings(res.data);
            Notifier.templateCreate(true)
        } catch (error) {
            Notifier.templateCreate(false)
        }
    }

    const updateSetting = async (id: string, setting: Partial<TemplateFooterSetting>) => {
        try {
            const res = await TemplateService.updateSetting(id, setting);
            setSettings(res.data);
            Notifier.templateUpdate(true)
        } catch (error) {
            Notifier.templateUpdate(false)
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
            Notifier.templateCreate(true)
            return res.data
        } catch (error) {
            setStatus('error')
            Notifier.templateCreate(false)
            throw error;
        }
    }

    const updateTemplate = async (id: string, template: Partial<Template>) => {
        setStatus('loading');
        try {
            const res = await TemplateService.updateTemplate(id, template);
            setTemplates([...templates.map(t => t.id === id ? ({ ...t, ...res.data }) : t)])
            setStatus('done');
            Notifier.templateUpdate(true);
            return res.data
        } catch (error) {
            setStatus('error')
            Notifier.templateUpdate(false);
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
            Notifier.templateEnabled(true)
        } catch (error) {
            Notifier.templateEnabled(false)
            setStatus('error');

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


    const testTemplate = async (templateId: string, type: any, providerConfig: TemplateProviderConfig) => {
        try {
            // const res = await TemplateService.testTemplate(templateId, type, providerConfig);
            Notifier.templateSend(true);
        } catch (error) {
            Notifier.templateSend(false);

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
        testTemplate
    }
}