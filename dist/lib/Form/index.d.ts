import React from 'react';
import { Template, TemplateTypeField } from '../types';
import { FormKey } from '../screens/AddEditDialog';
interface IProps {
    fields?: TemplateTypeField[];
    template: Partial<Template>;
    onChange: (key: FormKey, value: any) => void;
}
declare const Form: React.FC<IProps>;
export default Form;
