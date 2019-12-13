import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import { Transaction } from 'src/core/model/Transaction';
import TransactionRepository from 'src/pages/dashboard/repository/TransactionRepository';
import { observable } from 'mobx';

@singleton
export default class BlockTransactions3Model  {

    @observable dataProvider: DataProvider<Transaction>;

    constructor(
        transactionRepository: TransactionRepository,
    ) {
        
    this.dataProvider = new DataProvider({
        repository: transactionRepository
    });
                    
    }

    
}
