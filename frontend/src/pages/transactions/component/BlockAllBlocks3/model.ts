import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import { Transaction} from 'src/core/model/Transaction';
import TransactionsRepository from 'src/pages/transactions/repository/TransactionsRepository';
import { observable } from 'mobx';

@singleton
export default class BlockAllBlocks3Model  {

    @observable dataProvider: DataProvider<Transaction>;

    constructor(
        transactionsRepository: TransactionsRepository,
    ) {

    this.dataProvider = new DataProvider({
        repository: transactionsRepository
    });

    }


}
