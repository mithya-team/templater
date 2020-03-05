import React, { useState, useEffect } from 'react';
import { useTemplateService, usePagination } from './hooks';
import { Template } from '..';
import { TemplateServiceStatus } from './types';
import { AddEditDialog } from './components';

export const Context = React.createContext<ProviderValue | null>(null);

type ProviderValue = {
    templates: Template[]
    paginatedList: Template[]
    curPage: number
    selectedTemplate: Template | undefined,
    status: TemplateServiceStatus
    dialogOpen: boolean
    handlePageChange: (page: number) => void
    saveChanges: (template: Partial<Template>) => Promise<void>
    openTemplateEditor: (template?: Template) => void
    closeDialog: () => void
    getTemplateById: (id: string) => Promise<Template>
}

const LIMIT = 8;

export const ContextProvider: React.FC = (props) => {
    const { templates, status, createTemplate, updateTemplate, getTemplateById } = useTemplateService();
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
        handlePageChange
    }
    return (
        <Context.Provider value={value}>
            {props.children}
            <AddEditDialog />
        </Context.Provider>
    )
}