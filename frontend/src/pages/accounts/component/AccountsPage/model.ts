import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import AccountRepository from 'src/pages/accounts/repository/AccountRepository';
import { observable } from 'mobx';
import { VMAccount } from 'src/common/model/VMAccount';

@singleton
export default class AccountsPageModel {

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
