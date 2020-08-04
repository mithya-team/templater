import { config } from "./Config";

export class Notifier {
    static templateDelete = (error?: any) => {
        config.onActionCompleted(!error ? 'success' : 'error', !error ? 'Template successfully deleted' : error?.response?.data?.error?.message || 'Error deleting template');
    }
    static templateCreate = (error?: any) => {
        config.onActionCompleted(!error ? 'success' : 'error', !error ? 'Template successfully created' : error?.response?.data?.error?.message || 'Error creating template');
    }
    static templateUpdate = (error?: any) => {
        config.onActionCompleted(!error ? 'success' : 'error', !error ? 'Template updated successfully' : error?.response?.data?.error?.message || 'Error updating template');
    }
    static templateSend = (error?: any) => {
        config.onActionCompleted(!error ? 'success' : 'error', !error ? 'Test message sent' : error?.response?.data?.error?.message || 'Error sending test message');
    }
    static templateEnabled = (error?: any) => {
        config.onActionCompleted(!error ? 'success' : 'error', !error ? 'Template enabled successfully' : error?.response?.data?.error?.message || 'Error enabling template');
    }

    static templateSettingCreate = (error?: any) => {
        config.onActionCompleted(!error ? 'success' : 'error', !error ? 'Setting successfully created ' : error?.response?.data?.error?.message || 'Error creating setting');
    }
    static templateSettingUpdate = (error?: any) => {
        config.onActionCompleted(!error ? 'success' : 'error', !error ? 'Setting updated successfully ' : error?.response?.data?.error?.message || 'Error updating setting');
    }

}
