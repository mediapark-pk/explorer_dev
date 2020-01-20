import { singleton } from 'src/container';
import { DataProvider, OnInit } from '@app/core';
import { VMDelegate } from 'src/pages/dashboard/model/VMDelegate';
import { DelegatesRepository } from 'src/pages/dashboard/repository/DelegatesRepository';
import { observable, action } from 'mobx';

@singleton
export default class DelegatesTableModel implements OnInit {

    @observable dataProvider: DataProvider<VMDelegate>;

    constructor(
        repository: DelegatesRepository,
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
