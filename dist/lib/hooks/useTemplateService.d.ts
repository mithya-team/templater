import { Template, TemplateServiceStatus } from '../types';
export declare const useTemplateService: () => {
    templates: Template[];
    status: TemplateServiceStatus;
    createTemplate: (template: Partial<Template>) => Promise<Template>;
    updateTemplate: (id: string, template: Partial<Template>) => Promise<Template>;
};
