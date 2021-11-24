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
export declare type FormKey = keyof Template | keyof Template['templateData'] | keyof TTemplateData['from'] | 'senderName' | 'senderEmail';
export declare type SettingFormKey = keyof TemplateSettingData;
export declare type TemplateField = {
    value: string;
    description: string;
    default: string;
    isRequired: boolean;
};
export interface Schedule {
    name: string;
    channel: string;
    enabled: boolean;
    sendOnce: boolean;
    deleted: boolean;
    status: string;
    wherePid: number;
    recipients: any[];
    id: string;
    trackingId: string;
    slug: string;
    created: string;
    updated: string;
    jobName: string;
    scheduledAt: string[];
    templateWhere: any;
    dataFields: any;
    rangeFilter: any;
    tracking: {
        sent: any[];
        failed: any[];
        id: string;
        scheduleId: string;
    };
}
export interface Template {
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
    templateType?: string;
    type?: string;
    attachmentIds: string[];
    isGlobal: boolean;
    created: string;
    updated: string;
    _attachments: any[];
    schedules: Schedule[];
    senderEmail?: string;
    dynamicAttachments?: Record<string, boolean>;
}
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
declare type TemplateSettingType = 'footer' | 'agency';
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
