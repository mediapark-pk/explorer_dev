import { singleton } from 'src/core/di';
import { DataProvider } from 'src/core/data';
import { Addresses } from 'src/core/model/Addresses';
import AddressesRepository from 'src/pages/addresses/repository/AddressesRepository';
import { observable } from 'mobx';

@singleton
export default class BlockAllBlocks1Model  {

    @observable dataProvider: DataProvider<Addresses>;

    constructor(
        addressesRepository: AddressesRepository,
    ) {
        
    this.dataProvider = new DataProvider({
        repository: addressesRepository
    });
                    
    }

    
}
