export type TemplaterConfig = {
    urlPrefix: string
    listingType: 'grid' | 'list'
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
    subject: string
    body: string
    html: string
}

export type TemplateSms = {
    body: string
}

export type TemplateServiceStatus = 'loading' | 'done' | 'error'