import { FC } from 'react';
export interface AttachmentsProps {
    attachments?: any[];
    handleAddAttchment: (attachments: any[]) => Promise<void>;
    onRemoveAttachment?: (id: string) => Promise<void>;
}
declare const Attachments: FC<AttachmentsProps>;
export default Attachments;
