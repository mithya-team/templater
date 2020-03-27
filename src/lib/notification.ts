import { config } from "./Config";

export class Notifier {
    static templateCreate = (success: boolean) => {
        config.onActionCompleted('CREATE', success ? 'Template successfully created' : 'Error creating template');
    }
    static templateUpdate = (success: boolean) => {
        config.onActionCompleted('UPDATE', success ? 'Template updated successfully' : 'Error updating template');
    }
    static templateSend = (success: boolean) => {
        config.onActionCompleted('TEST', success ? 'Test message sent' : 'Error sending test message');
    }
    static templateEnabled = (success: boolean) => {
        config.onActionCompleted('TEMPLATE ENABLE', success ? 'Template enabled successfully' : 'Error enabling template');
    }

    static templateSettingCreate = (success: boolean) => {
        config.onActionCompleted('SETTINGS CREATE', success ? 'Setting successfully created ' : 'Error creating setting');
    }
    static templateSettingUpdate = (success: boolean) => {
        config.onActionCompleted('SETTING UPDATE', success ? 'Setting updated successfully ' : 'Error updating setting');
    }

}
