import { singleton } from 'src/core/di';
import { DataProvider } from 'src/core/data';
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
