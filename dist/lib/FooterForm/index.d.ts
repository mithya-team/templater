import React from 'react';
import { SettingFormKey, TemplateSetting } from '../types';
interface FooterFormProps {
    onChange: (key: SettingFormKey, value: any) => void;
    setting: Partial<TemplateSetting>;
}
declare const FooterForm: React.FC<FooterFormProps>;
export default FooterForm;
