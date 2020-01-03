import { singleton } from 'src/container';
import { DataProvider, OnInit } from '@app/core';
import { Transaction } from 'src/core/model/Transaction';
import TransactionsRepository, { TransactionsMode } from 'src/pages/transactions/repository/TransactionsRepository';
import { action, observable } from 'mobx';


@singleton
export default class TransactionsTableModel implements OnInit {
    @observable isLoading: boolean = true;
    @observable currentTab: TransactionsMode = TransactionsMode.AllTransactions;
    @observable dataProvider: DataProvider<Transaction>;

    constructor(
        transactionsRepository: TransactionsRepository
    ) {

        this.dataProvider = new DataProvider({
            repository: transactionsRepository
        });

    }
    @action async onInit() {
        this.loadData();
    }

    @action loadData() {
        this.dataProvider.reset();
        this.dataProvider.params = { mode: this.currentTab };
    }

    @action updateTab(tab: TransactionsMode) {
        this.currentTab = tab;
        this.loadData();
    }
}
