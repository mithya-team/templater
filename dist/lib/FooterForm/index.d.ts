import React from 'react';
import { SettingFormKey, TemplateSetting, TemplateTypeField } from '../types';
interface FooterFormProps {
    onChange: (key: SettingFormKey, value: any) => void;
    setting: Partial<TemplateSetting>;
    fields?: TemplateTypeField[];
    onLinkCopy?: (link: string) => void;
}
declare const FooterForm: React.FC<FooterFormProps>;
export default FooterForm;
