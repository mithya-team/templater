import React, { useState, useEffect } from 'react';
import { useTemplateService } from './hooks';
import { Template } from '..';
import { TemplateServiceStatus } from './types';
import { AddEditDialog } from './components';

export const Context = React.createContext<ProviderValue | null>(null);

type ProviderValue = {
    templates: Template[]
    selectedTemplate: Template | undefined,
    status: TemplateServiceStatus
    dialogOpen: boolean
    saveChanges: (template: Partial<Template>) => Promise<void>
    openTemplateEditor: (template?: Template) => void
    closeDialog: () => void
    getTemplateById: (id: string) => Promise<Template>
}

export const ContextProvider: React.FC = (props) => {
    const { templates, status, createTemplate, updateTemplate, getTemplateById } = useTemplateService();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState<Template | undefined>()




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
        getTemplateById
    }
    return (
        <Context.Provider value={value}>
            {props.children}
            <AddEditDialog />
        </Context.Provider>
    )
}