import { singleton } from 'src/container';
import { DataProvider, OnInit } from '@app/core';
import { VMBlock } from 'src/pages/dashboard/model/VMBlock';
import { BlocksRepository } from 'src/pages/dashboard/repository/BlocksRepository';
import { observable, action } from 'mobx';

@singleton
export default class BlocksTableModel implements OnInit {

    @observable dataProvider: DataProvider<VMBlock>;

    constructor(
        repository: BlocksRepository,
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
