import { AppBarProps, ButtonProps, BoxProps, PaperProps, DialogProps } from '@material-ui/core';

export type TemplaterConfig = {
    urlPrefix: string
    baseUrl: string
    accessToken: string
    listingType: 'grid' | 'list'
    rootContainerProps: BoxProps
    dialogProps: Partial<{
        transitionComponent: DialogProps['TransitionComponent']
        toolbarProps: AppBarProps
        mainActionButtonProps: ButtonProps
        secondaryActionButtonProps: ButtonProps
        containerProps: BoxProps
        formContainerProps: PaperProps
    }>
}


export type TemplateContentType = keyof Pick<Template, 'email' | 'sms'>
export type TemplateProviderConfig = {
    to: string
    cc: string[]
}
export type TPicture = {
    id: string
    created: string
    height: number
    width: number
    imagePath: string
    thumbnail: string
    url: string
}


export type TemplateField = {
    value: string
    description: string
    default: string
    isRequired: boolean
}

export type Template = {
    name: string
    modified: boolean
    id: string
    slug: string
    created: string
    updated: string
    fields: Array<TemplateField>
    email: TemplateEmail
    sms: TemplateSms
}

export type TemplateEmail = {
    banner?: TPicture
    subject: string
    body: string
    html: string
}

export type TemplateSms = {
    body: string
}

export type TemplateServiceStatus = 'loading' | 'done' | 'error'