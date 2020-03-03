import { Template } from '..';
export declare class TemplateService {
    static fetchTemplates: () => Promise<Template[]>;
    static createTemplate: (template: Template) => Promise<Template>;
    static updateTemplate: (id: string, template: Template) => Promise<Template>;
}
