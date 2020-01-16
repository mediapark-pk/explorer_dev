import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import AccountRepository from 'src/pages/addresses/repository/AccountRepository';
import { observable } from 'mobx';
import { VMAccount } from 'src/pages/addresses/model/VMAccount';

@singleton
export default class AddressesPageModel {

    @observable dataProvider: DataProvider<VMAccount>;

    constructor(
        accountRepository: AccountRepository,
    ) {

        this.dataProvider = new DataProvider({
            repository: accountRepository
        });

        this.dataProvider.loadData();
    }
}
