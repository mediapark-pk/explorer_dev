import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import BlockService from 'src/common/service/BlockService';
import { VMBlock } from 'src/common/model/VMBlock';

@transient
export default class BlocksRepository implements IDataRepository<VMBlock> {

    @observable data: VMBlock[] = [];
    @observable totalCount: number = 0;

    constructor(
        private readonly blockService: BlockService
    ) {

    }

    @action
    async onUpdate(dataUpdate: IDataUpdate) {
            const responce = await this.blockService.getBlocks(dataUpdate);
            this.data = responce.data.map(raw => new VMBlock(raw));
            this.totalCount = responce.totalCount;
    }
}
