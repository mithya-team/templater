import React from 'react';
import { Template, TemplateTypeField, FormKey } from '../types';
export interface IFormProps {
    fields?: TemplateTypeField[];
    template: Partial<Template>;
    flows: Array<{
        name: string;
        value: string;
    }>;
    onLinkCopy?: (link: string) => void;
    onChange: (key: FormKey, value: any) => void;
}
declare const Form: React.FC<IFormProps>;
export default Form;
