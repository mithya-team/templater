import React from 'react';
interface IProps {
    dialogTitle: string;
    handleClose: () => void;
    handleSubmit: () => void;
    loading?: boolean;
}
declare const DialogHeader: React.FC<IProps>;
export default DialogHeader;
