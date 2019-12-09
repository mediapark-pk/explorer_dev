import { singleton } from 'src/core/di';
import { DataProvider } from 'src/core/data';
import { Delegates } from 'src/core/model/Delegates';
import DelegatesRepository from 'src/pages/delegates/repository/DelegatesRepository';
import { observable } from 'mobx';

@singleton
export default class BlockAllBlocks2Model  {

    @observable dataProvider: DataProvider<Delegates>;

    constructor(
        delegatesRepository: DelegatesRepository,
    ) {
        
    this.dataProvider = new DataProvider({
        repository: delegatesRepository
    });
                    
    }

    
}
