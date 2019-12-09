import { singleton } from 'src/core/di';
import { DataProvider } from 'src/core/data';
import { Blocks } from 'src/core/model/Blocks';
import BlocksRepository from 'src/pages/blocks/repository/BlocksRepository';
import { observable } from 'mobx';

@singleton
export default class BlockAllBlocks4Model  {

    @observable dataProvider: DataProvider<Blocks>;

    constructor(
        blocksRepository: BlocksRepository,
    ) {
        
    this.dataProvider = new DataProvider({
        repository: blocksRepository
    });
                    
    }

    
}
