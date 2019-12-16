import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import { Block } from 'src/core/model/Block';
import BlocksRepository from 'src/pages/blocks/repository/BlocksRepository';
import { observable } from 'mobx';

@singleton
export default class BlocksPageModel {

    @observable dataProvider: DataProvider<Block>;

    constructor(
        blocksRepository: BlocksRepository,
    ) {

        this.dataProvider = new DataProvider({
            repository: blocksRepository
        });

        this.dataProvider.loadData();
    }
}
