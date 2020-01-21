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














// const createMock = () => ({
//     totalTxnNumber: 10,
//     totalTxnVolume: '139523 DDK',
//     averageTxnPerDay: '143.231 DDK',
//     averageTxnPerBock: '1.231 DDK',
//     sentToday: '143.231 DDK',
//     votesToday: '1.231 DDK'
// });

// @singleton
// class TransactionsBlockchainInfoService {

//     async getInfo(): Promise<TransactionsBlockchainInfo> {
//         await delay();
//         return createMock();
//     }

//     getUpdate(): Observable<TransactionsBlockchainInfo> {
//         return interval(1000)
//         .pipe(
//             map(() => createMock())
//         );
//     }

// }

// export default TransactionsBlockchainInfoService;
