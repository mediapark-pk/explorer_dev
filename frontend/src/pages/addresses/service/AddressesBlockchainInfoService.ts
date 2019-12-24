import { singleton } from 'src/container';
import { delay } from 'src/util';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountsBlockchainInfo } from 'src/core/model/AccountsBlockchainInfo';


const createMock = () => ({
    totalSupply: '4103397.3536 DDK',
    circulatingSupply: '126920.3536 DDK',
    tokenHolders: 126920,
    totalStakeHolders: 1258,
    totalStakeAmount: 195012,
});

@singleton
class AddressesBlockchainInfoService {

    async getInfo(): Promise<AccountsBlockchainInfo> {
        await delay();
        return createMock();
    }

    getUpdate(): Observable<AccountsBlockchainInfo> {
        return interval(1000)
        .pipe(
            map(() => createMock())
        );
    }

}

export default AddressesBlockchainInfoService;
