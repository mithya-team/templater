import { Template, TemplateServiceStatus, TemplateProviderConfig } from '../types';
export declare const useTemplateService: () => {
    flows: Partial<Record<string, {
        fields: import("../types").TemplateTypeField[];
    }>>;
    templates: Template[];
    status: TemplateServiceStatus;
    createTemplate: (template: Partial<Template>) => Promise<any>;
    updateTemplate: (id: string, template: Partial<Template>) => Promise<any>;
    getTemplateById: (id: string) => Promise<Template>;
    testTemplate: (templateId: string, type: any, providerConfig: TemplateProviderConfig) => Promise<void>;
};
