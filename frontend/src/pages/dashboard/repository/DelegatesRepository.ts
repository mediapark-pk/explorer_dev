import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { VMDelegate } from 'src/pages/dashboard/model/VMDelegate';
import { DashboardService } from 'src/pages/dashboard/service/DashboardService';

@transient
export class DelegatesRepository implements IDataRepository<VMDelegate> {
    @observable data: VMDelegate[] = [];
    @observable totalCount: number = 0;
    
    constructor(
        private readonly service: DashboardService
    ) { }

    @action async onUpdate(dataUpdate: IDataUpdate) {
        const responce = await this.service.getDelegates(dataUpdate);
        this.data = responce.data.map(e => new VMDelegate(e));
        this.totalCount = responce.totalCount;
    }
}
