import { AppBarProps, ButtonProps, BoxProps, PaperProps, DialogProps } from '@material-ui/core';
export declare type TemplaterConfig = {
    urlPrefix: string;
    baseUrl: string;
    disableTabs: boolean;
    accessToken: string;
    listingType: 'grid' | 'list';
    rootContainerProps: BoxProps;
    dialogProps: Partial<{
        transitionComponent: DialogProps['TransitionComponent'];
        appbarProps: AppBarProps;
        mainActionButtonProps: ButtonProps;
        secondaryActionButtonProps: ButtonProps;
        containerProps: BoxProps;
        formContainerProps: PaperProps;
    }>;
};
export declare type TemplateTypeField = {
    value: string;
    description: string;
    default: string;
    isRequired: boolean;
};
export declare type TemplateType = 'forgetPassword';
export declare type TemplateTypeConfig = Record<TemplateType, {
    fields: TemplateTypeField[];
}>;
export declare type TemplateContentType = keyof Pick<Template, 'email' | 'sms'>;
export declare type TemplateProviderConfig = {
    to: string;
    cc: string[];
};
export declare type TPicture = {
    id: string;
    created: string;
    height: number;
    width: number;
    imagePath: string;
    thumbnail: string;
    url: string;
};
export declare type TemplateField = {
    value: string;
    description: string;
    default: string;
    isRequired: boolean;
};
export declare type Template = {
    name: string;
    type: TemplateType;
    enabled: boolean;
    modified: boolean;
    id: string;
    slug: string;
    created: string;
    updated: string;
    fields: Array<TemplateField>;
    email: TemplateEmail;
    sms: TemplateSms;
};
export declare type TemplateEmail = {
    banner?: TPicture;
    subject: string;
    body: string;
    html: string;
};
export declare type TemplateSms = {
    body: string;
};
export declare type TemplateServiceStatus = 'loading' | 'done' | 'error';
