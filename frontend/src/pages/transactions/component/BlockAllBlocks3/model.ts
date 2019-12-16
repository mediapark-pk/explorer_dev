import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import { Transactions } from 'src/core/model/Transactions';
import TransactionsRepository from 'src/pages/transactions/repository/TransactionsRepository';
import { observable } from 'mobx';

@singleton
export default class BlockAllBlocks3Model  {

    @observable dataProvider: DataProvider<Transactions>;

    constructor(
        transactionsRepository: TransactionsRepository,
    ) {
        
    this.dataProvider = new DataProvider({
        repository: transactionsRepository
    });
                    
    }

    
}
