import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { VMTransaction } from 'src/common/model/VMTransaction';
import { DashboardService } from 'src/pages/dashboard/service/DashboardService';

@transient
export class TransactionsRepository implements IDataRepository<VMTransaction> {
    @observable data: VMTransaction[] = [];
    @observable totalCount: number = 0;
    
    constructor(
        private readonly service: DashboardService
    ) { }

    @action async onUpdate(dataUpdate: IDataUpdate) {
        const responce = await this.service.getTransactions(dataUpdate);
        this.data = responce.data.map(e => new VMTransaction(e));
        this.totalCount = responce.totalCount;
    }
}
