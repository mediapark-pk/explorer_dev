import { singleton } from 'src/container';
import { DelegatesRepository } from 'src/common/repository/DelegatesRepository';
import { computed, observable } from 'mobx';
import { DataProvider, OnInit } from '@app/core';
import { VMDelegate } from 'src/common/model/VMDelegate';

@singleton
export default class RatingMapModel implements OnInit  {

    @observable dataProvider: DataProvider<VMDelegate>;

    constructor(
        repository: DelegatesRepository,
    ) {
        this.dataProvider = new DataProvider({
            repository,
        });
    }

    onInit() {
        this.dataProvider.loadData();
    }

    @computed
    get delegates() {
        return this.dataProvider.repository.data;
    }
}
