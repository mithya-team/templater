import { FC } from 'react';
import { TemplateTypeField } from '../types';
export interface AttachmentsProps {
    attachments?: any[];
    handleAddAttchment: (attachments: any[]) => Promise<void>;
    onRemoveAttachment?: (id: string) => Promise<void>;
    selectedAttachmentFields: TemplateTypeField[] | undefined;
    onRemoveDynamicAttachment?: (id: string) => void;
}
declare const Attachments: FC<AttachmentsProps>;
export default Attachments;
