import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { VMDelegate } from 'src/pages/delegates/model/VMDelegate';
import DelegatesService from 'src/pages/delegates/service/DelegatesService';

@transient
export default class DelegatesRatingRepository implements IDataRepository<VMDelegate> {
    @observable data: VMDelegate[] = [];
    @observable totalCount: number = 0;
    
    constructor(private readonly service: DelegatesService) {
    }

    @action async onUpdate(dataUpdate: IDataUpdate) {
        const responce = await this.service.getTopDelegates(dataUpdate);
        this.data = responce.data.map(raw => new VMDelegate(raw));
        this.totalCount = responce.totalCount;
    }
}

export type DelegatesRatingAllowedFilter = 'today' | 'week' | 'month';
export type DelegatesRatingAllowedSort = 'votes' | 'forged' | 'missed' | 'uptime';
