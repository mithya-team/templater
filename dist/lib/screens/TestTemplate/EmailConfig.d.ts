import React from 'react';
interface IProps {
    to?: string;
    cc?: string[];
    onToChange: (to: string) => void;
    onCcChange: (cc: string[]) => void;
}
declare const EmailConfig: React.FC<IProps>;
export default EmailConfig;
