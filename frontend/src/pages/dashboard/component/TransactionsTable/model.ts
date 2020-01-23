import { singleton } from 'src/container';
import { DataProvider, OnInit } from '@app/core';
import { VMTransaction } from 'src/common/model/VMTransaction';
import { TransactionsRepository } from 'src/common/repository/TransactionsRepository';
import { observable } from 'mobx';

@singleton
export class TransactionsTableModel implements OnInit {

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
        this.dataProvider.loadData();
    }
}
