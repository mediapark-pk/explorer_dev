import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import { action, observable } from 'mobx';
import { BlockService } from 'src/common/service/BlockService';
import { RouterStore } from 'mobx-react-router';
import { VMBlock } from 'src/common/model/VMBlock';


@singleton
export default class BlockPageModel {

    @observable isLoading: boolean = true;
    @observable block: VMBlock;
    @observable dataProvider: DataProvider<VMBlock>;

    constructor(
        private readonly blockService: BlockService,
        private readonly routerStore: RouterStore
    ) {
    }

    @action
    async loadBlock(id: string) {
        this.isLoading = true;
        try {
            const rawBlock = await this.blockService.getBlock(id);
            this.block = new VMBlock(rawBlock);

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
