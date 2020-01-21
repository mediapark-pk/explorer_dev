import { singleton } from 'src/container';
import { Observable } from 'rxjs';
import { Socket } from '@app/socket-client';
import { Response } from '@app/web';
import { SocketCode, RawTransactionsBlockchainInfo } from '@app/common';

@singleton
export class TransactionsBlockchainInfoService {

    constructor(
        private readonly socket: Socket
    ) { }

    async getTransactionsBlockchainInfo(): Promise<Response<RawTransactionsBlockchainInfo>> {
        return this.socket.query(SocketCode.GET_TRANSACTIONS_BLOCKCHAIN_INFO);
    }

    onTransactionsBlockchainInfoUpdate(): Observable<Response<RawTransactionsBlockchainInfo>> {
        return this.socket.getEvent(SocketCode.ON_TRANSACTIONS_BLOCKCHAIN_INFO_UPDATE);
    }
}
