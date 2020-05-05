import { AppBarProps, ButtonProps, BoxProps, PaperProps, DialogProps, Theme } from '@material-ui/core';

export type TemplaterConfig = {
    urlPrefix: string
    apiConfig: {
        baseUrl: string
        modelName?: string
        settingsModelName: string
        accessToken: string
    },
    singleInstances: boolean
    disableTabs: boolean
    listingType: 'grid' | 'list'
    onActionCompleted: (action: 'success' | 'error', message: string) => void
    theme: Theme
    rootContainerProps: BoxProps
    dialogProps: Partial<{
        transitionComponent: DialogProps['TransitionComponent']
        appbarProps: AppBarProps
        mainActionButtonProps: ButtonProps
        secondaryActionButtonProps: ButtonProps
        containerProps: BoxProps
        formContainerProps: PaperProps
    }>
}

export type TemplateTypeField = {
    value: string
    description: string
    default: string
    isRequired: boolean
    type: string
}

export type TemplateTypeConfig = Record<string, { name: string, fields: TemplateTypeField[] }>

// export type TemplateContentType = keyof Pick<Template, 'email' | 'sms'>
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

export type FormKey = keyof Template | keyof Template['templateData'] | keyof TTemplateData['from']
export type SettingFormKey = keyof TemplateSettingData


export type TemplateField = {
    value: string
    description: string
    default: string
    isRequired: boolean
}

export type Template = {
    name: string
    eventId?: string
    agencyId?: string
    enabled: boolean,
    modified: boolean
    channel: TemplateChannel
    flow: string
    templateData: TemplateData
    id: string
    slug: string
    created: string
    updated: string
    // fields: Array<TemplateField>
    // email: TemplateEmail
    // sms: TemplateSms
}

type TemplateChannel = 'email' | 'sms' | 'TemplateData'

type TemplateData = Partial<TTemplateData>

type TTemplateData = {
    banner: TPicture
    body: string
    cc: string[]
    bcc: string[]
    from: {
        email: string
        name: string
    }
    subject: string
    html: string
}

type TemplateSettingType = 'footer'
type TemplateSettingData = {
    html?: string
    links: TemplateFooterSettingLink[]
    body?: string
}

export type TemplateSetting = {
    id: string
    agencyId?: string
    eventId?: string
    channel: TemplateChannel
    type: TemplateSettingType
    settingData: TemplateSettingData

}

type TemplateFooterSettingLink = {
    icon?: TPicture
    link: string
}
export type TemplateServiceStatus = 'loading' | 'done' | 'error'