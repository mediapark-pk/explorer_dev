import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { VMDelegate } from 'src/pages/delegates/model/VMDelegate';
import DelegatesService from 'src/pages/delegates/service/DelegatesService';

export enum DelegatesFetchMode {
    Active = 'active',
    All = 'all'
}

@transient
export default class DelegatesRepository implements IDataRepository<VMDelegate> {

    @observable data: VMDelegate[] = [];
    @observable totalCount: number = 0;
    
    constructor(private readonly service: DelegatesService) {
    }

    @action async onUpdate(dataUpdate: IDataUpdate) {
        const responce = await this.service.getDelegates(dataUpdate);
        this.data = responce.data.map(raw => new VMDelegate(raw));
        this.totalCount = responce.totalCount;
    }
}
