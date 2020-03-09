import React from 'react';
import { Template } from '..';
import { TemplateServiceStatus } from './types';
export declare const Context: React.Context<ProviderValue | null>;
declare type ProviderValue = {
    templates: Template[];
    paginatedList: Template[];
    curPage: number;
    selectedTemplate: Template | undefined;
    status: TemplateServiceStatus;
    dialogOpen: boolean;
    handlePageChange: (page: number) => void;
    saveChanges: (template: Partial<Template>) => Promise<void>;
    openTemplateEditor: (template?: Template) => void;
    closeDialog: () => void;
    getTemplateById: (id: string) => Promise<Template>;
};
export declare const ContextProvider: React.FC;
export {};
