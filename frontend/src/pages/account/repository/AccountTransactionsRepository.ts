import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { TransactionsService } from 'src/pages/transactions/service/TransactionsService';
import { VMTransaction } from 'src/common/model/VMTransaction';

export enum Type {
    Sent = 'sent',
    Recieved = 'recieved',
}

@transient
export default class AccountTransactionsRepository implements IDataRepository<VMTransaction> {

    @observable data: Array<VMTransaction> = [];
    @observable totalCount: number = 0;

     constructor(
        private readonly transactionsService: TransactionsService
    ) {

    }

    @action
    async onUpdate(dataUpdate: IDataUpdate) {
            const responce = await this.transactionsService.getTransactions(dataUpdate);
            this.data = responce.data;
            this.totalCount = responce.totalCount;
    }
}
