import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { VMBlock } from 'src/pages/dashboard/model/VMBlock';
import { DashboardService } from 'src/pages/dashboard/service/DashboardService';

@transient
export class BlocksRepository implements IDataRepository<VMBlock> {
    @observable data: VMBlock[] = [];
    @observable totalCount: number = 0;
    
    constructor(
        private readonly service: DashboardService
    ) { }

    @action async onUpdate(dataUpdate: IDataUpdate) {
        const responce = await this.service.getBlocks(dataUpdate);
        this.data = responce.data.map(e => new VMBlock(e));
        this.totalCount = responce.totalCount;
    }
}
