import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { Delegate } from 'src/core/model/Delegate';
import DelegatesService from 'src/pages/delegates/service/DelegatesService';

@transient
export default class DelegatesRatingRepository implements IDataRepository<Delegate> {
    @observable data: Delegate[] = [];
    @observable totalCount: number = 0;
    
    constructor(private readonly service: DelegatesService) {
    }

    @action async onUpdate(dataUpdate: IDataUpdate) {
        try {
            const responce = await this.service.getTopDelegates(dataUpdate);
            this.data = responce.data;
            this.totalCount = responce.count;
        } catch (e) {
            console.error(e);
        }
    }
}

export type DelegatesRatingAllowedFilter = 'today' | 'week' | 'month';
export type DelegatesRatingAllowedSort = 'votes' | 'forged' | 'missed' | 'uptime';
