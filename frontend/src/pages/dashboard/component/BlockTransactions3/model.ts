import { singleton } from 'src/core/di';
import { DataProvider } from 'src/core/data';
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
