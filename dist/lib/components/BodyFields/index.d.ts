import React from 'react';
import { TemplateTypeField } from '../../types';
interface IProps {
    fields: TemplateTypeField[];
    onClick: (field: string) => void;
}
declare const BodyFields: React.FC<IProps>;
export default BodyFields;
