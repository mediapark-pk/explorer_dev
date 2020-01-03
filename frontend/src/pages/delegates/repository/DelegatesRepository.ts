import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { Delegate } from 'src/core/model/Delegate';
import DelegatesService from 'src/pages/delegates/service/DelegatesService';

export enum DelegatesFetchMode {
    Active = 'active',
    All = 'all'
}

@transient
export default class DelegatesRepository implements IDataRepository<Delegate> {

    @observable data: Delegate[] = [];
    @observable totalCount: number = 0;
    
    constructor(private readonly service: DelegatesService) {
    }

    @action async onUpdate(dataUpdate: IDataUpdate) {
        try {
            const responce = await this.getDelegates(dataUpdate);
            this.data = responce.data;
            this.totalCount = responce.count;
        } catch (e) {
            console.log(e);
        }
    }

    async getDelegates(dataUpdate) {
        switch (dataUpdate.params.fetchMode) {
            case DelegatesFetchMode.Active:
                return this.service.getActiveDelegates(dataUpdate);
            case DelegatesFetchMode.All:
            default:
                return this.service.getAllDelegates(dataUpdate);
        }
    }
}
