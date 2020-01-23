import { singleton } from 'src/container';
import { NotificationManager } from '@app/ui-kit';
import { Socket } from '@app/socket-client';

@singleton
export class LayoutModel {

    constructor(
        private readonly socket: Socket,
        private readonly notificationManager: NotificationManager
    ) {

        this.socket.getError()
            .subscribe(error => this.notificationManager.showError(error));

    }

}
