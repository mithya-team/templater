import { config } from "./Config";

export const templateCreate = (success: boolean) => {
    config.onActionCompleted('CREATE', success ? 'Template successfully created' : 'Error creating template');
}

export const templateUpdate = (success: boolean) => {
    config.onActionCompleted('UPDATE', success ? 'Template updated successfully' : 'Error updating template');
}

export const templateSend = (success: boolean) => {
    config.onActionCompleted('TEST', success ? 'Test message sent' : 'Error sending test message');
}
