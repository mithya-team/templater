import React from "react";
import { SettingFormKey, TemplateSetting, TemplateTypeField } from "../types";
interface FooterFormProps {
    onChange: (key: SettingFormKey, value: any) => void;
    setting: Partial<TemplateSetting>;
    fields?: TemplateTypeField[];
    variableContainerClass?: any;
    onLinkCopy?: (link: string) => void;
    disabled?: boolean;
}
declare const FooterForm: React.FC<FooterFormProps>;
export default FooterForm;
