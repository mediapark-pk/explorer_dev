import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import { BlocksRepository } from 'src/common/repository/BlocksRepository';
import {
    TransactionsVolumeRepository,
    TransactionAmount,
 } from 'src/pages/blocks/repository/TransactionsVolumeRepository';
import { observable } from 'mobx';
import { VMBlock } from 'src/common/model/VMBlock';

@singleton
export default class BlocksPageModel {
    @observable dataProvider: DataProvider<VMBlock>;
    @observable transactionsVolumeDataProvider: DataProvider<Array<TransactionAmount>>;

    constructor(
        blocksRepository: BlocksRepository,
        transactionsVolumeRepository: TransactionsVolumeRepository,
    ) {

        this.dataProvider = new DataProvider({
            repository: blocksRepository
        });

        this.transactionsVolumeDataProvider = new DataProvider({
            repository: transactionsVolumeRepository
        });

        this.dataProvider.loadData();
        this.transactionsVolumeDataProvider.loadData();
    }
}
