import { singleton } from 'src/core/di';
import { DataProvider } from 'src/core/data';
import { Delegate } from 'src/core/model/Delegate';
import DelegateRepository from 'src/pages/dashboard/repository/DelegateRepository';
import { observable } from 'mobx';

@singleton
export default class BlockDelegatesModel  {

    @observable dataProvider: DataProvider<Delegate>;

    constructor(
        delegateRepository: DelegateRepository,
    ) {
        
    this.dataProvider = new DataProvider({
        repository: delegateRepository
    });
                    
    }

    
}
