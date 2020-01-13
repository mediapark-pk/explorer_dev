import { singleton } from 'src/container';
import { delay } from 'src/util';
import { AccountBlockchainInfo } from 'src/core/model/AccountBlockchainInfo';
import { Response } from '@app/web';

const mock = () => ({
    totalIn: '332.6135 DDK',
    totalOut: '332.6135 DDK',
    totalStake: '332.6135 DDK',
    totalGroup: '332.6135 DDK',
    totalAirdropReward: '332.6135 DDK',
    totalStakeReward: '332.6135 DDK',
});

@singleton
class AddressBlockchainInfoService {
    async getInfo(): Promise<Response<AccountBlockchainInfo>> {
        await delay();
        return mock();
    }
}

export default AddressBlockchainInfoService;
