import React from 'react';
import { Template } from '../types';
import { FormKey } from '../components/AddEditDialog';
interface IProps {
    template: Partial<Template>;
    onChange: (key: FormKey, value: any) => void;
}
declare const Form: React.FC<IProps>;
export default Form;
