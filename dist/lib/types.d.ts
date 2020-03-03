export declare type TemplaterConfig = {
    urlPrefix: string;
    listingType: 'grid' | 'list';
};
export declare type TemplateField = {
    value: string;
    description: string;
    default: string;
    isRequired: boolean;
};
export declare type Template = {
    name: string;
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
    subject: string;
    body: string;
    html: string;
};
export declare type TemplateSms = {
    body: string;
};
export declare type TemplateServiceStatus = 'loading' | 'done' | 'error';
