import React from 'react';
import { useTemplateService } from './hooks';
import { Template } from '..';
import { TemplateServiceStatus, TemplateTypeConfig, TemplateProviderConfig, TemplateFooterSetting } from './types';


export const TemplateContext = React.createContext<TemplateContextProvider>({
    templates: [],
    templateFlows: {},
    settings: { channel: 'email', links: [], id: '' },
    createTemplate: async () => { },
    updateTemplate: async () => { },
    saveSettings: async () => { },
    enableTemplate: async () => { }
    // testTemplate: async () => { }

});

export type TemplateContextProvider = {
    templates: Template[]
    settings: TemplateFooterSetting
    templateFlows: Partial<TemplateTypeConfig>
    createTemplate: (template: Partial<Template>) => Promise<any>
    enableTemplate: (id: string) => Promise<any>
    updateTemplate: (id: string, template: Partial<Template>) => Promise<any>
    saveSettings: (setting: Partial<TemplateFooterSetting>) => Promise<any>
    // testTemplate: (templateId: string, type: TemplateContentType, providerConfig: TemplateProviderConfig) => Promise<void>
}


export const TemplateContextProvider: React.FC = (props) => {
    const {
        templates, status,
        createTemplate,
        updateTemplate,
        flows, testTemplate,
        saveSettings,
        settings,
        enableTemplate
    } = useTemplateService();




    // const saveChanges = async (template: Partial<Template>) => {
    //     try {
    //         if (template.id) {
    //             const { id, created, updated, slug, ...templateData } = template;
    //             await updateTemplate(template.id, templateData)
    //         } else {
    //             await createTemplate(template);
    //         }
    //     } catch (error) {
    //         throw error;
    //     }
    // }



    const value: TemplateContextProvider = {
        templates,
        templateFlows: flows,
        updateTemplate,
        createTemplate,
        settings,
        enableTemplate,
        saveSettings,
        // testTemplate
    }
    return (
        <TemplateContext.Provider value={value}>
            {props.children}
        </TemplateContext.Provider>
    )
}