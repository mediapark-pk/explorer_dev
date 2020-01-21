import { singleton } from 'src/container';
import { DataProvider, OnInit } from '@app/core';
import TransactionsRepository, { TransactionsMode } from 'src/pages/transactions/repository/TransactionsRepository';
import { action, observable } from 'mobx';
import { VMTransaction } from 'src/common/model/VMTransaction';


@singleton
export default class TransactionsTableModel implements OnInit {
    @observable isLoading: boolean = true;
    @observable currentTab: TransactionsMode = TransactionsMode.AllTransactions;
    @observable dataProvider: DataProvider<VMTransaction>;

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
