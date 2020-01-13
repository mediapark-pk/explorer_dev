import { singleton } from 'src/container';
import { delay } from 'src/util';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransactionsBlockchainInfo } from 'src/core/model/TransactionsBlockchainInfo';


const createMock = () => ({
    totalTxnNumber: 10,
    totalTxnVolume: '139523 DDK',
    averageTxnPerDay: '143.231 DDK',
    averageTxnPerBock: '1.231 DDK',
    sentToday: '143.231 DDK',
    votesToday: '1.231 DDK'
});

@singleton
class TransactionsBlockchainInfoService {

    async getInfo(): Promise<TransactionsBlockchainInfo> {
        await delay();
        return createMock();
    }

    getUpdate(): Observable<TransactionsBlockchainInfo> {
        return interval(1000)
        .pipe(
            map(() => createMock())
        );
    }

}

export default TransactionsBlockchainInfoService;
