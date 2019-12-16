import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import { Block } from 'src/core/model/Block';
import BlockRepository from 'src/pages/dashboard/repository/BlockRepository';
import { observable } from 'mobx';

@singleton
export default class BlockBloksModel  {

    @observable dataProvider: DataProvider<Block>;

    constructor(
        blockRepository: BlockRepository,
    ) {
        
    this.dataProvider = new DataProvider({
        repository: blockRepository
    });
                    
    }

    
}
