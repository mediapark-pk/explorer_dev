import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { VMDelegate } from 'src/common/model/VMDelegate';
import { DelegateService } from 'src/common/service/DelegateService';

export enum DelegatesFetchMode {
    Active = 'active',
    All = 'all'
}

@transient
export class DelegatesRepository implements IDataRepository<VMDelegate> {

    @observable data: VMDelegate[] = [];
    @observable totalCount: number = 0;
    
    constructor(
        private readonly service: DelegateService
    ) { }

    @action async onUpdate(dataUpdate: IDataUpdate) {
        const responce = await this.service.getAll(dataUpdate);
        this.data = responce.data.map(raw => new VMDelegate(raw));
        this.totalCount = responce.totalCount;
    }
}

export type DelegatesRatingAllowedFilter = 'today' | 'week' | 'month';
export type DelegatesRatingAllowedSort = 'votes' | 'forged' | 'missed' | 'uptime';

export enum AllowedSorts {
    Status = 'status',
    Votes = 'votes',
    Uptime = 'uptime',
    ForgedBlocks = 'forged',
    MissedBlocks = 'missed'
}

export enum AllowedFilters {
    Name = 'name'
}
