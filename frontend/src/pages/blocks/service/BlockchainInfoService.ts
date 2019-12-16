import { singleton } from 'src/container';
import { BlockBlockchainInfo } from 'src/core/model/BlockBlockchainInfo';
import { delay } from 'src/util';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';


const createMock = () => ({
    id: '2B344A2B344A2B34',
    height: 242822,
    createdAt: 6,
    totalBlockTime: 10,
    totalFeeAmount: 0.24,
    totalConnected: 65,
    totalStakeAmount: 195012,
});

@singleton
class BlockBlockchainInfoService {

    async getInfo(): Promise<BlockBlockchainInfo> {
         await delay();
         return createMock();
    }

    getUpdate(): Observable<BlockBlockchainInfo> {
        return interval(1000)
            .pipe(
                map(() => createMock())
            );
    }

}

export default BlockBlockchainInfoService;
