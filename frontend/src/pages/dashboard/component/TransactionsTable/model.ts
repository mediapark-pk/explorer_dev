import { singleton } from 'src/container';
import { DataProvider, OnInit } from '@app/core';
import { VMTransaction } from 'src/pages/dashboard/model/VMTransaction';
import { TransactionsRepository } from 'src/pages/dashboard/repository/TransactionsRepository';
import { observable, action } from 'mobx';

@singleton
export default class TransactionsTableModel implements OnInit {

    @observable dataProvider: DataProvider<VMTransaction>;

    constructor(
        repository: TransactionsRepository,
    ) {        
        this.dataProvider = new DataProvider({
            repository: repository,
            paginator: {
                page: 0,
                rowsPerPage: 50,
            }
        });
    }

    onInit() {
        this.loadData();
    }

    @action loadData() {
        this.dataProvider.loadData();
    }
}
