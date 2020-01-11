import { container, singleton } from 'src/container';
import { RouterStore } from 'mobx-react-router';
import { Socket, DISocketConfig } from '@app/socket-client';
import { CONSTANTS } from 'src/configs';
import { ModalManager } from '@app/ui-kit';

singleton(RouterStore);
singleton(ModalManager);
singleton(Socket);

container.bind(DISocketConfig).toConstantValue({
    url: `${CONSTANTS.SOCKET.PROTOCOL}://${CONSTANTS.SOCKET.HOST}:${CONSTANTS.SOCKET.PORT}`,
});
