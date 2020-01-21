import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import BlockTransactionsRepository from 'src/pages/transaction/repository/BlockTransactionsRepository';
import { observable } from 'mobx';
import { VMTransaction } from 'src/common/model/VMTransaction';

@singleton
export default class BlockTransactionsModel  {

    @observable dataProvider: DataProvider<VMTransaction>;

    constructor(
        blockTransactionsRepository: BlockTransactionsRepository,
    ) {

    this.dataProvider = new DataProvider({
        repository: blockTransactionsRepository
    });
        this.dataProvider.loadData();
    }

}
