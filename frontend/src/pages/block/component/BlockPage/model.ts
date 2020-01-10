import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import { action, observable } from 'mobx';
import BlocksService from 'src/pages/blocks/service/BlocksService';
import { RouterStore } from 'mobx-react-router';
import { Block, BlockId } from 'src/core/model/Block';

@singleton
export default class BlockPageModel {

    @observable isLoading: boolean = true;
    @observable block: Block;
    dataProvider: DataProvider<Block>;

    constructor(
        private readonly blockService: BlocksService,
        private readonly routerStore: RouterStore
    ) {
    }

    @action
    async loadBlock(id: BlockId) {
        this.isLoading = true;
        try {
            this.block = await this.blockService.getOne(id);

            if (!this.block) {
                this.routerStore.push('/404');
            }

        } catch (e) {
            // TODO add errors handler
        } finally {
            this.isLoading = false;
        }
    }

}
