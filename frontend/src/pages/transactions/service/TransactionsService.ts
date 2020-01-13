import { singleton } from 'src/container';
import { createMockTransaction, Transaction, TransactionId } from 'src/core/model/Transaction';
import { delay } from 'src/util';
import { Request, ResponseList } from '@app/web';

const mocks: Array<Transaction> = [];

for (let i = 0; i < 100; i++) {
    mocks.push(createMockTransaction());
}

@singleton
class TransactionsService {
    async getTransactions(request: Request): Promise<ResponseList<Transaction>> {
        await delay();
        return {
            totalCount: mocks.length,
            data: mocks
        };
    }
    async getOne(id: TransactionId): Promise<Transaction> {
        await delay();
        return mocks.find(item => item.id === id);
    }

    async getTransactionsByBlockId(request: Request): Promise<ResponseList<Transaction>> {
        await delay();
        return {
            totalCount: mocks.length,
            data: mocks
        };
    }
}

export default TransactionsService;
