import { Template } from '..';
export class TemplateService {
    static fetchTemplates = () => {
        return new Promise<Template[]>((resolve => {
            setTimeout(() => {
                return resolve(dummy as Template[])
            }, 1000);
        }))
    }

    static createTemplate = (template: Partial<Template>) => {
        return new Promise<Template>((resolve => {
            setTimeout(() => {
                console.log("created", template)
                return resolve(template as Template)
            }, 1000);
        }))
    }

    static updateTemplate = (id: string, template: Partial<Template>) => {
        return new Promise<Template>((resolve => {
            setTimeout(() => {
                console.log("updated", id, template)
                return resolve(template as Template)
            }, 1000);
        }))
    }
}


const dummy = [
    {
        "name": "Forget Password",
        "modified": false,
        "id": "5e5dd9779dc38ad467f2312e",
        "slug": "forgetPassword",
        "created": "2020-03-03T10:04:39.883Z",
        "updated": "2020-03-03T10:04:39.883Z",
        "fields": [
            {
                "value": "link",
                "description": "Link to send user for changing password.",
                "default": "-f internet.url",
                "isRequired": true
            },
            {
                "value": "id",
                "description": "Link to send user for changing password.",
                "default": "-f random.uuid",
                "isRequired": false
            }
        ],
        "email": {
            "subject": "Forget Password Request {{id}}",
            "body": "\nYou have new request for forget password request.\nClick {{link}} to change your password.\n",
            "html": ""
        },
        "sms": {
            "body": "You have new request for forget password request. Click {{link}} to change your password."
        }
    },
    {
        "name": "Forget Password",
        "modified": false,
        "id": "5e5dd9779dc38ad467f2312e",
        "slug": "forgetPassword",
        "created": "2020-03-03T10:04:39.883Z",
        "updated": "2020-03-03T10:04:39.883Z",
        "fields": [
            {
                "value": "link",
                "description": "Link to send user for changing password.",
                "default": "-f internet.url",
                "isRequired": true
            },
            {
                "value": "id",
                "description": "Link to send user for changing password.",
                "default": "-f random.uuid",
                "isRequired": false
            }
        ],
        "email": {
            "subject": "Forget Password Request {{id}}",
            "body": "\nYou have new request for forget password request.\nClick {{link}} to change your password.\n",
            "html": ""
        },
        "sms": {
            "body": "You have new request for forget password request. Click {{link}} to change your password."
        }
    },
    {
        "name": "Forget Password",
        "modified": false,
        "id": "5e5dd9779dc38ad467f2312e",
        "slug": "forgetPassword",
        "created": "2020-03-03T10:04:39.883Z",
        "updated": "2020-03-03T10:04:39.883Z",
        "fields": [
            {
                "value": "link",
                "description": "Link to send user for changing password.",
                "default": "-f internet.url",
                "isRequired": true
            },
            {
                "value": "id",
                "description": "Link to send user for changing password.",
                "default": "-f random.uuid",
                "isRequired": false
            }
        ],
        "email": {
            "subject": "Forget Password Request {{id}}",
            "body": "\nYou have new request for forget password request.\nClick {{link}} to change your password.\n",
            "html": ""
        },
        "sms": {
            "body": "You have new request for forget password request. Click {{link}} to change your password."
        }
    },
    {
        "name": "Forget Password",
        "modified": false,
        "id": "5e5dd9779dc38ad467f2312e",
        "slug": "forgetPassword",
        "created": "2020-03-03T10:04:39.883Z",
        "updated": "2020-03-03T10:04:39.883Z",
        "fields": [
            {
                "value": "link",
                "description": "Link to send user for changing password.",
                "default": "-f internet.url",
                "isRequired": true
            },
            {
                "value": "id",
                "description": "Link to send user for changing password.",
                "default": "-f random.uuid",
                "isRequired": false
            }
        ],
        "email": {
            "subject": "Forget Password Request {{id}}",
            "body": "\nYou have new request for forget password request.\nClick {{link}} to change your password.\n",
            "html": ""
        },
        "sms": {
            "body": "You have new request for forget password request. Click {{link}} to change your password."
        }
    }
]