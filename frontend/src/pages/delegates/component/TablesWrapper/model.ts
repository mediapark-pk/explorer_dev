import { singleton } from 'src/container';
import { DataProvider, OnInit } from '@app/core';
import { VMDelegate } from 'src/common/model/VMDelegate';
import {
    DelegatesRepository,
    DelegatesFetchMode,
    AllowedFilters,
    AllowedSorts,
 } from 'src/common/repository/DelegatesRepository';
import { observable, action } from 'mobx';
import { ChangeEvent } from 'react';

export { 
    DelegatesFetchMode,
    AllowedFilters,
    AllowedSorts,
 };

@singleton
export default class TablesWrapperModel implements OnInit {

    @observable dataProvider: DataProvider<VMDelegate>;

    @observable fetchMode: DelegatesFetchMode = DelegatesFetchMode.Active;

    constructor(
        delegatesRepository: DelegatesRepository
    ) {        
        this.dataProvider = new DataProvider({
            repository: delegatesRepository
        });
    }

    onInit() {
        this.loadData();
    }

    @action loadData() {
        this.dataProvider.reset();
        this.dataProvider.params = { fetchMode: this.fetchMode };
    }

    @action.bound
    onTabUpdate(event: ChangeEvent, mode: DelegatesFetchMode) {
        this.fetchMode = mode;
        this.loadData();
    }
}
