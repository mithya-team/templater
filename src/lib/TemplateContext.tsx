import React from 'react';
import { useTemplateService } from './hooks';
import { Template } from '..';
import { TemplateServiceStatus, TemplateTypeConfig, TemplateProviderConfig } from './types';
import { AddEditDialog } from './screens';

export const TemplateContext = React.createContext<TemplateContextProvider>({
    templates: [],
    templateTypes: {},
    createTemplate: async () => { },
    updateTemplate: async () => { },
    // testTemplate: async () => { }

});

export type TemplateContextProvider = {
    templates: Template[]
    templateTypes: Partial<TemplateTypeConfig>
    createTemplate: (template: Partial<Template>) => Promise<any>
    updateTemplate: (id: string, template: Partial<Template>) => Promise<any>
    // testTemplate: (templateId: string, type: TemplateContentType, providerConfig: TemplateProviderConfig) => Promise<void>
}


export const TemplateContextProvider: React.FC = (props) => {
    const { templates, status, createTemplate, updateTemplate, types, testTemplate } = useTemplateService();




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
        templateTypes: types,
        updateTemplate,
        createTemplate,
        // testTemplate
    }
    return (
        <TemplateContext.Provider value={value}>
            {props.children}
        </TemplateContext.Provider>
    )
}