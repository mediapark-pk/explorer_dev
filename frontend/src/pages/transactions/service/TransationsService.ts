import { singleton } from 'src/container';
import { Transaction } from 'src/core/model/Transaction';
import { delay } from 'src/util';
import { Address, PublicKey } from 'src/core/model/Account';
import { Request } from '@app/web';

interface ITransactionsResponse<T> {
    count: number;
    data: Transaction[];
}

export type TransactionsFilter = { recipientAddress?: Address, senderPublicKey?: PublicKey };

const mock = {
    blockId: '2B344A2B344A2B34',
    id: '2B344A2B344A2B34',
    senderAddress: '4009519763706676700',
    asset: {
        recipientAddress: '4009519763706676700',
        amount: 0.03,
    },
    createdAt: 10,
    type: 10,
    fee: 0.0016
};

@singleton
class TransactionsService {
    async getTransactions(request: Request): Promise<ITransactionsResponse<Transaction>> {
        await delay();
        return { data: [mock], count: 1 };
    }
}

export default TransactionsService;
