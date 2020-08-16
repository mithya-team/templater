import { Template, TemplateServiceStatus, TemplateProviderConfig, TemplateSetting } from '../types';
export declare const useTemplateService: (defaultFilter?: Record<string, any>) => {
    flows: Partial<Record<string, {
        name: string;
        fields: import("../types").TemplateTypeField[];
    }>>;
    templates: Template[];
    settings: TemplateSetting[];
    createSetting: (setting: Partial<TemplateSetting>) => Promise<void>;
    updateSetting: (id: string, setting: Partial<TemplateSetting>) => Promise<void>;
    saveSettings: (setting: Partial<TemplateSetting>) => Promise<void>;
    enableTemplate: (id: string) => Promise<void>;
    status: TemplateServiceStatus;
    createTemplate: (template: Partial<Template>) => Promise<any>;
    updateTemplate: (id: string, template: Partial<Template>) => Promise<any>;
    getTemplateById: (id: string) => Promise<Template>;
    testTemplate: (templateId: string, type: any, providerConfig: TemplateProviderConfig) => Promise<void>;
    deleteTemplateById: (templateId: string) => Promise<void>;
    addAttachment: (templateId: string, agencyId: string, attachments: any[]) => Promise<Template>;
    removeAttachments: (templateId: string, agencyId: string, attachmentIds: string[]) => Promise<Template>;
};
