import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import { observable } from 'mobx';
import { Transaction } from 'src/core/model/Transaction';
import TransactionsRepository from 'src/pages/transactions/repository/TransactionsRepository';

@singleton
export default class TransactionsPageModel {

    @observable dataProvider: DataProvider<Transaction>;

    constructor(
        transactionsRepository: TransactionsRepository,
    ) {

        this.dataProvider = new DataProvider({
            repository: transactionsRepository
        });

        this.dataProvider.loadData();
    }
}
