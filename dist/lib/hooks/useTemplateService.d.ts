import { Template, TemplateServiceStatus, TemplateProviderConfig } from '../types';
export declare const useTemplateService: () => {
    types: Partial<Record<"forgetPassword", {
        fields: import("../types").TemplateTypeField[];
    }>>;
    templates: Template[];
    status: TemplateServiceStatus;
    createTemplate: (template: Partial<Template>) => Promise<any>;
    updateTemplate: (id: string, template: Partial<Template>) => Promise<any>;
    getTemplateById: (id: string) => Promise<Template>;
    testTemplate: (templateId: string, type: "email" | "sms", providerConfig: TemplateProviderConfig) => Promise<void>;
};
