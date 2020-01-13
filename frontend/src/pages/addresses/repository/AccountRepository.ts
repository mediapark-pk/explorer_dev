import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { Account } from 'src/core/model/Account';
import AccountService from 'src/pages/addresses/service/AccountService';

@transient
export default class AccountRepository implements IDataRepository<Account> {

    @observable data: Array<Account> = [];
    @observable totalCount: number = 0;

    constructor(
        private readonly accountService: AccountService
    ) {

    }

    @action
    async onUpdate(dataUpdate: IDataUpdate) {
            const responce = await this.accountService.getAll(dataUpdate);
            this.data = responce.data;
            this.totalCount = responce.totalCount;
    }
}
