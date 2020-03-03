import React from 'react';
import { Template } from '..';
import { TemplateServiceStatus } from './types';
export declare const Context: React.Context<ProviderValue | null>;
declare type ProviderValue = {
    templates: Template[];
    selectedTemplate: Template | undefined;
    status: TemplateServiceStatus;
    dialogOpen: boolean;
    saveChanges: (template: Partial<Template>) => Promise<void>;
    openTemplateEditor: (template?: Template) => void;
    closeDialog: () => void;
};
export declare const ContextProvider: React.FC;
export {};
