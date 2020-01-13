import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import { Transaction } from 'src/core/model/Transaction';
import BlockTransactionsRepository from 'src/pages/transaction/repository/BlockTransactionsRepository';
import { observable } from 'mobx';

@singleton
export default class BlockTransactionsModel  {

    @observable dataProvider: DataProvider<Transaction>;

    constructor(
        blockTransactionsRepository: BlockTransactionsRepository,
    ) {

    this.dataProvider = new DataProvider({
        repository: blockTransactionsRepository
    });
        this.dataProvider.loadData();
    }

}
