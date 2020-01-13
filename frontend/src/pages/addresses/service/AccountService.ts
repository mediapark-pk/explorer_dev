import { singleton } from 'src/container';
import { delay } from 'src/util';
import { Account, Address, createMockAccount } from 'src/core/model/Account';
import { Request, ResponseList } from '@app/web';

const mocks: Array<Account> = [];

for (let i = 0; i < 100; i++) {
    mocks.push(createMockAccount());
}

@singleton
class AccountService {

    async getAll(request: Request): Promise<ResponseList<Account>> {
        await delay();
        return {
            totalCount: mocks.length,
            data: mocks
        };
    }

    async getOne(address: Address): Promise<Account> {
        await delay();
        return mocks.find(item => item.address === address);
    }

}

export default AccountService;
