import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { Block } from 'src/core/model/Block';
import DelegateService from 'src/pages/delegate/service/DelegateService';

@transient
export default class ForgedBlocksRepository implements IDataRepository<Block> {
    @observable data: Block[] = [];
    @observable totalCount: number = 0;
    
    constructor(
        private readonly service: DelegateService
    ) { }

    @action async onUpdate(dataUpdate: IDataUpdate) {
        try {
            const responce = await this.service.getForgedBlocks(dataUpdate);
            this.data = responce.data.map(b => new Block(b));
            this.totalCount = responce.count;
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
