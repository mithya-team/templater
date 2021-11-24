import { FC } from 'react';
import { Template, TemplateTypeField } from '../../types';
export interface AttachmentFieldsProps {
    fields: TemplateTypeField[];
    onClick: (field: string) => void;
    dynamicAttachments: Template['dynamicAttachments'];
}
declare const AttachmentFields: FC<AttachmentFieldsProps>;
export default AttachmentFields;
