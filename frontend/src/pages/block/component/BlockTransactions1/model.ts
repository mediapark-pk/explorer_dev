import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import { BlockTransaction } from 'src/core/model/BlockTransaction';
import BlockTransactionRepository from 'src/pages/block/repository/BlockTransactionRepository';
import { observable } from 'mobx';

@singleton
export default class BlockTransactions1Model  {

    @observable dataProvider: DataProvider<BlockTransaction>;

    constructor(
        blockTransactionRepository: BlockTransactionRepository,
    ) {
        
    this.dataProvider = new DataProvider({
        repository: blockTransactionRepository
    });
                    
    }

    
}
