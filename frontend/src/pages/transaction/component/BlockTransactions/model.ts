import { singleton } from 'src/core/di';
import { DataProvider } from 'src/core/data';
import { Transactionss } from 'src/core/model/Transactionss';
import TransactionssRepository from 'src/pages/transaction/repository/TransactionssRepository';
import { observable } from 'mobx';

@singleton
export default class BlockTransactionsModel  {

    @observable dataProvider: DataProvider<Transactionss>;

    constructor(
        transactionssRepository: TransactionssRepository,
    ) {
        
    this.dataProvider = new DataProvider({
        repository: transactionssRepository
    });
                    
    }

    
}
