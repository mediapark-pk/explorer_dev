import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { Delegate } from 'src/core/model/Delegate';
import DelegatesService from 'src/pages/delegates/service/DelegatesService';

export enum Type {
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
        switch (dataUpdate.params.type) {
            case Type.Active:
                return this.service.getActiveDelegates(dataUpdate);
            case Type.All:
                return this.service.getAllDelegates(dataUpdate);
            default:
                throw new Error(`[ArgumentException] getDelegates doesn't work with ${dataUpdate.params.type}`);
        }
    }
}
