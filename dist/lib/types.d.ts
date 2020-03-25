import { AppBarProps, ButtonProps, BoxProps, PaperProps, DialogProps, Theme } from '@material-ui/core';
export declare type TemplaterConfig = {
    urlPrefix: string;
    apiConfig: {
        baseUrl: string;
        accessToken: string;
    };
    disableTabs: boolean;
    listingType: 'grid' | 'list';
    onActionCompleted: (action: string, message: string) => void;
    theme: Theme;
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
    channel: TemplateChannel;
    flow: string;
    templateData: TemplateData;
    id: string;
    slug: string;
    created: string;
    updated: string;
};
declare type TemplateChannel = 'email' | 'sms' | 'TemplateData';
declare type TemplateData = {
    banner?: TPicture;
    body?: string;
    subject?: string;
    html?: string;
};
export declare type TemplateServiceStatus = 'loading' | 'done' | 'error';
export {};
