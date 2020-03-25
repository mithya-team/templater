import React from 'react';
import { Template } from '..';
import { TemplateTypeConfig } from './types';
export declare const TemplateContext: React.Context<TemplateContextProvider>;
export declare type TemplateContextProvider = {
    templates: Template[];
    templateTypes: Partial<TemplateTypeConfig>;
    createTemplate: (template: Partial<Template>) => Promise<any>;
    updateTemplate: (id: string, template: Partial<Template>) => Promise<any>;
};
export declare const TemplateContextProvider: React.FC;
