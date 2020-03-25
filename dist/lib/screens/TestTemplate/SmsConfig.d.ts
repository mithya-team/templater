import React from 'react';
interface IProps {
    phoneNumbers?: string[];
    onPhoneNumberChange: (numbers: string[]) => void;
}
declare const SmsConfig: React.FC<IProps>;
export default SmsConfig;
