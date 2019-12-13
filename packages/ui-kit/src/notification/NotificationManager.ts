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

    @observable isOpen : boolean = false;

    @action show(message: string, options: OptionsObject = defaultOptionsObject) {
        this.isOpen = true;
        const key = Math.random().toString();
        this.notifications.set(key, {
            key,
            message,
            options
        });
    }

    @action remove(key: string) {
        this.notifications.delete(key);
    }
}
