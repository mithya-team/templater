import React from 'react';
import { Template, TemplateType } from '../types';
import { FormKey } from '../components/AddEditDialog';
interface IProps {
    type: TemplateType;
    handleBack?: () => void;
    template: Partial<Template>;
    onChange: (key: FormKey, value: any) => void;
}
declare const Form: React.FC<IProps>;
export default Form;
