import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { VMBlock } from 'src/pages/delegate/model/VMBlock';
import DelegateService from 'src/pages/delegate/service/DelegateService';

@transient
export default class ForgedBlocksRepository implements IDataRepository<VMBlock> {
    @observable data: VMBlock[] = [];
    @observable totalCount: number = 0;
    
    constructor(
        private readonly service: DelegateService
    ) { }

    @action async onUpdate(dataUpdate: IDataUpdate) {
        try {
            const responce = await this.service.getForgedBlocks(dataUpdate);
            this.data = responce.data;
            this.totalCount = responce.totalCount;
        } catch (e) {
            console.log(e);
        }
    }
}

export enum AllowedSorts {
    Txn = 'txn',
    Amount = 'amount',
    Fee = 'fee',
}

export enum AllowedFilters {
    Height = 'height',
    BlockId = 'block_id',
    Time = 'time'
}
