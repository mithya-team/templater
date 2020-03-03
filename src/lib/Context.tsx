import React, { useState } from 'react';
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
    saveChanges: () => Promise<void>
    openTemplateEditor: (template?: Template) => void
    closeDialog: () => void
}

export const ContextProvider: React.FC = (props) => {
    const { templates, status, createTemplate, updateTemplate } = useTemplateService();
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

    const saveChanges = async () => {
        console.log(createTemplate, updateTemplate)
    }

    const value: ProviderValue = {
        templates,
        status,
        selectedTemplate,
        dialogOpen,
        saveChanges,
        openTemplateEditor,
        closeDialog,
    }
    return (
        <Context.Provider value={value}>
            {props.children}
            <AddEditDialog />
        </Context.Provider>
    )
}