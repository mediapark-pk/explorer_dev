import { action, observable } from 'mobx';
import { OptionsObject } from 'notistack';

export type Notification = {
    key: string;
    message: string;
    options: OptionsObject;
};

export const defaultOptionsObject: OptionsObject = {
    variant: 'default'
};

export class NotificationManager {

    @observable notifications: Map<string, Notification>;

    constructor() {
        this.notifications = new Map();
    }

    @action show(message: string, options: OptionsObject = defaultOptionsObject) {
        const key = Math.random().toString();
        this.notifications.set(key, {
            key,
            message,
            options
        });
    }

    @action showError(error: Error | Array<string>) {
        this.show(this.getErrorMessage(error), { variant: 'error' });
    }

    private getErrorMessage(error: Error | Array<string>): string {
        if (Array.isArray(error)) {
            return error.join(',');
        }
        return error.message;
    }

    @action remove(key: string) {
        this.notifications.delete(key);
    }
}
