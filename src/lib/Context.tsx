import React, { useState, useEffect } from 'react';
import { useTemplateService, usePagination } from './hooks';
import { Template } from '..';
import { TemplateServiceStatus, TemplateTypeConfig, TemplateProviderConfig } from './types';
import { AddEditDialog } from './screens';

export const Context = React.createContext<ProviderValue | null>(null);

type ProviderValue = {
    templates: Template[]
    paginatedList: Template[]
    templateTypes: Partial<TemplateTypeConfig>
    curPage: number
    selectedTemplate: Template | undefined,
    status: TemplateServiceStatus
    dialogOpen: boolean
    handlePageChange: (page: number) => void
    saveChanges: (template: Partial<Template>) => Promise<void>
    openTemplateEditor: (template?: Template) => void
    closeDialog: () => void
    getTemplateById: (id: string) => Promise<Template>
    testTemplate: (templateId: string, type: any, providerConfig: TemplateProviderConfig) => Promise<void>
}

const LIMIT = 8;

export const ContextProvider: React.FC = (props) => {
    const { templates, status, createTemplate, updateTemplate, getTemplateById, flows, testTemplate } = useTemplateService();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState<Template | undefined>()
    const { paginatedList, curPage, handlePageChange } = usePagination<Template>(templates, { limit: LIMIT })




    const openTemplateEditor = (template?: Template) => {
        setSelectedTemplate(template);
        setDialogOpen(true)
    }

    const closeDialog = () => {
        setSelectedTemplate(undefined);
        setDialogOpen(false)
    }

    const saveChanges = async (template: Partial<Template>) => {
        try {
            if (template.id) {
                const { id, created, updated, slug, ...templateData } = template;
                await updateTemplate(template.id, templateData)
            } else {
                await createTemplate(template);
            }
        } catch (error) {
            throw error;
        }
    }



    const value: ProviderValue = {
        templates,
        status,
        selectedTemplate,
        dialogOpen,
        saveChanges,
        openTemplateEditor,
        closeDialog,
        getTemplateById,
        paginatedList,
        curPage,
        handlePageChange,
        templateTypes: flows,
        testTemplate
    }
    return (
        <Context.Provider value={value}>
            {props.children}
            <AddEditDialog />
        </Context.Provider>
    )
}