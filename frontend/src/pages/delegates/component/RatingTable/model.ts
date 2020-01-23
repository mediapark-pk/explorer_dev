import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import { VMDelegate } from 'src/common/model/VMDelegate';
import {
    DelegatesRepository, 
    DelegatesRatingAllowedFilter,
    DelegatesRatingAllowedSort,
    AllowedSorts,
 } from 'src/common/repository/DelegatesRepository';
import { observable, action, observe, computed } from 'mobx';

@singleton
export default class RatingTableModel  {

    @observable dataProvider: DataProvider<VMDelegate>;

    @observable params: {
        filter: DelegatesRatingAllowedFilter,
        sort: DelegatesRatingAllowedSort
    } = {
        filter: 'today',
        sort: 'votes'
    };

    constructor(
        repository: DelegatesRepository,
    ) {
        
        this.dataProvider = new DataProvider({
            repository: repository,
            paginator: {
                rowsPerPage: 10,
            }
        });

        observe(this.params, () => this.loadData());
    }

    @action loadData() {
        this.dataProvider.reset();
        this.dataProvider.params = this.params;
    }

    @action setFilter(value: DelegatesRatingAllowedFilter & any) {
        this.params.filter = value;
    }

    @action setSort(value: DelegatesRatingAllowedSort & any) {
        this.params.sort = value;
    }

    @computed
    get valueColumnName(): string {
        switch (this.params.sort) {
            case AllowedSorts.Votes:
                return 'Votes';
            case AllowedSorts.Uptime:
                return 'Uptime';
            case AllowedSorts.MissedBlocks:
                return 'Missed';
            case AllowedSorts.ForgedBlocks:
            default:
                return 'Forged';
        }
    }
    
    @computed
    get valuePropertyName(): keyof VMDelegate {
        switch (this.params.sort) {
            case AllowedSorts.Votes:
                return 'votes';
            case AllowedSorts.Uptime:
                return 'approval';
            case AllowedSorts.MissedBlocks:
                return 'missedBlocks';
            case AllowedSorts.ForgedBlocks:
            default:
                return 'forgedBlocks';
        }
    }
}
