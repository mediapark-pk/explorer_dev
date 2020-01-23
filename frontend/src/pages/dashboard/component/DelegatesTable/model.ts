import { singleton } from 'src/container';
import { DataProvider, OnInit } from '@app/core';
import { VMDelegate } from 'src/common/model/VMDelegate';
import { DelegatesRepository } from 'src/common/repository/DelegatesRepository';
import { observable } from 'mobx';

@singleton
export class DelegatesTableModel implements OnInit {

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
        this.dataProvider.loadData();
    }
}
