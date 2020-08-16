import React from 'react';
import { Template, TemplateTypeField, FormKey } from '../types';
export interface IFormProps {
    fields?: TemplateTypeField[];
    template: Partial<Template>;
    classes?: {
        bodyFieldsContainer: any;
    };
    errors?: Record<string, any>;
    flows: Array<{
        name: string;
        value: string;
    }>;
    onLinkCopy?: (link: string) => void;
    onAddAttachments?: (files: any[]) => Promise<void>;
    onRemoveAttachment?: (id: string) => Promise<void>;
    onChange: (key: FormKey, value: any) => void;
}
declare const Form: React.FC<IFormProps>;
export default Form;
