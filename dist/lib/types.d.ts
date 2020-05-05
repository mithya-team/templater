import { AppBarProps, ButtonProps, BoxProps, PaperProps, DialogProps, Theme } from '@material-ui/core';
export declare type TemplaterConfig = {
    urlPrefix: string;
    apiConfig: {
        baseUrl: string;
        modelName?: string;
        settingsModelName: string;
        accessToken: string;
    };
    singleInstances: boolean;
    disableTabs: boolean;
    listingType: 'grid' | 'list';
    onActionCompleted: (action: 'success' | 'error', message: string) => void;
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
    type: string;
};
export declare type TemplateTypeConfig = Record<string, {
    name: string;
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
export declare type FormKey = keyof Template | keyof Template['templateData'] | keyof TTemplateData['from'];
export declare type SettingFormKey = keyof TemplateSettingData;
export declare type TemplateField = {
    value: string;
    description: string;
    default: string;
    isRequired: boolean;
};
export declare type Template = {
    name: string;
    eventId?: string;
    agencyId?: string;
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
declare type TemplateData = Partial<TTemplateData>;
declare type TTemplateData = {
    banner: TPicture;
    body: string;
    cc: string[];
    bcc: string[];
    from: {
        email: string;
        name: string;
    };
    subject: string;
    html: string;
};
declare type TemplateSettingType = 'footer';
declare type TemplateSettingData = {
    html?: string;
    links: TemplateFooterSettingLink[];
    body?: string;
};
export declare type TemplateSetting = {
    id: string;
    agencyId?: string;
    eventId?: string;
    channel: TemplateChannel;
    type: TemplateSettingType;
    settingData: TemplateSettingData;
};
declare type TemplateFooterSettingLink = {
    icon?: TPicture;
    link: string;
};
export declare type TemplateServiceStatus = 'loading' | 'done' | 'error';
export {};
