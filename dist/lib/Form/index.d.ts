import React from 'react';
import { Template } from '../types';
import { FormKey } from '../components/AddEditDialog';
interface IProps {
    template: Template;
    onChange: (key: FormKey, value: string) => void;
}
declare const Form: React.FC<IProps>;
export default Form;
