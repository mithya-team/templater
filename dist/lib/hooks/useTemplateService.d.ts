import { Template, TemplateServiceStatus, TemplateProviderConfig, TemplateFooterSetting } from '../types';
export declare const useTemplateService: () => {
    flows: Partial<Record<string, {
        fields: import("../types").TemplateTypeField[];
    }>>;
    templates: Template[];
    settings: TemplateFooterSetting;
    createSetting: (setting: Partial<TemplateFooterSetting>) => Promise<void>;
    updateSetting: (id: string, setting: Partial<TemplateFooterSetting>) => Promise<void>;
    saveSettings: (setting: TemplateFooterSetting) => Promise<void>;
    enableTemplate: (id: string) => Promise<void>;
    status: TemplateServiceStatus;
    createTemplate: (template: Partial<Template>) => Promise<any>;
    updateTemplate: (id: string, template: Partial<Template>) => Promise<any>;
    getTemplateById: (id: string) => Promise<Template>;
    testTemplate: (templateId: string, type: any, providerConfig: TemplateProviderConfig) => Promise<void>;
};
