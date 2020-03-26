import React from 'react';
import { Template } from '..';
import { TemplateTypeConfig, TemplateFooterSetting } from './types';
export declare const TemplateContext: React.Context<TemplateContextProvider>;
export declare type TemplateContextProvider = {
    templates: Template[];
    settings: TemplateFooterSetting;
    templateFlows: Partial<TemplateTypeConfig>;
    createTemplate: (template: Partial<Template>) => Promise<any>;
    updateTemplate: (id: string, template: Partial<Template>) => Promise<any>;
    saveSettings: (setting: Partial<TemplateFooterSetting>) => Promise<any>;
};
export declare const TemplateContextProvider: React.FC;
