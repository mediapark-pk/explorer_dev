import { Account } from 'src/core/model/Account';
import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import AddressesRepository from 'src/pages/addresses/repository/AccountRepository';
import { observable } from 'mobx';

@singleton
export default class AddressesPageModel {

    @observable dataProvider: DataProvider<Account>;

    constructor(
        addressesRepository: AddressesRepository,
    ) {

        this.dataProvider = new DataProvider({
            repository: addressesRepository
        });

        this.dataProvider.loadData();
    }
}
