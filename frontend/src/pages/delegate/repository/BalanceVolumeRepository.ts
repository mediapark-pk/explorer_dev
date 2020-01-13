import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { VMBalanceVolume } from 'src/pages/delegate/model/VMBalanceVolume';
import DelegateService from 'src/pages/delegate/service/DelegateService';

@transient
export default class BalanceVolumeRepository implements IDataRepository<VMBalanceVolume> {

    @observable data: Array<VMBalanceVolume> = [];
    @observable totalCount: number = 0;

    constructor(
        private readonly service: DelegateService,
    ) {}

    @action async onUpdate(dataUpdate: IDataUpdate) {
        const list = await this.service.getBalanceVolume(dataUpdate);
        this.data = list.data;
        this.totalCount = list.totalCount;
    }
}
