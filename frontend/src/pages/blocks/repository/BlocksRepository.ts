import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import BlocksService from 'src/pages/blocks/service/BlocksService';
import { Block } from 'src/core/model/Block';

@transient
export default class BlocksRepository implements IDataRepository<Block> {

    @observable data: Block [] = [];
    @observable totalCount: number = 0;

    constructor(
        private readonly blocksService: BlocksService
    ) {

    }

    @action
    async onUpdate(dataUpdate: IDataUpdate) {
            const responce = await this.blocksService.getBlocks(dataUpdate);
            this.data = responce.data;
            this.totalCount = responce.totalCount;
    }
}
