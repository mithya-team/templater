import { Template } from '..';
export declare class TemplateService {
    static fetchTemplates: () => Promise<Template[]>;
    static createTemplate: (template: Partial<Template>) => Promise<Template>;
    static updateTemplate: (id: string, template: Partial<Template>) => Promise<Template>;
}
