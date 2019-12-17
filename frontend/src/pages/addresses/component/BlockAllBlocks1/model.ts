import { Account } from 'src/core/model/Account';
import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import AddressesRepository from 'src/pages/addresses/repository/AddressesRepository';
import { observable } from 'mobx';

@singleton
export default class BlockAllBlocks1Model  {

    @observable dataProvider: DataProvider<Account>;

    constructor(
        addressesRepository: AddressesRepository,
    ) {

    this.dataProvider = new DataProvider({
        repository: addressesRepository
    });

    }


}
