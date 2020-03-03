import { Template, TemplateServiceStatus } from '../types';
export declare const useTemplateService: () => {
    templates: Template[];
    status: TemplateServiceStatus;
    createTemplate: (template: Template) => Promise<Template>;
    updateTemplate: (id: string, template: Template) => Promise<Template>;
};
