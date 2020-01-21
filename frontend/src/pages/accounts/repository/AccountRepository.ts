import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import AccountService from 'src/common/service/AccountService';
import { VMAccount } from 'src/common/model/VMAccount';

@transient
export default class AccountRepository implements IDataRepository<VMAccount> {

    @observable data: VMAccount[] = [];
    @observable totalCount: number = 0;

    constructor(
        private readonly accountService: AccountService
    ) {

    }

    @action
    async onUpdate(dataUpdate: IDataUpdate) {
            const responce = await this.accountService.getAll(dataUpdate);
            this.data = responce.data.map(raw => new VMAccount(raw));
            this.totalCount = responce.totalCount;
    }
}
