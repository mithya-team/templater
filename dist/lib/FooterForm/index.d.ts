import React from 'react';
import { SettingFormKey, TemplateFooterSetting } from '../types';
interface FooterFormProps {
    onChange: (key: SettingFormKey, value: any) => void;
    settings: TemplateFooterSetting;
}
declare const FooterForm: React.FC<FooterFormProps>;
export default FooterForm;
