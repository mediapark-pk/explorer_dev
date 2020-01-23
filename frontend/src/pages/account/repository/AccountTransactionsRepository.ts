import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { TransactionsService } from 'src/common/service/TransactionsService';
import { VMTransaction } from 'src/common/model/VMTransaction';

export enum Type {
    Sent = 'sent',
    Recieved = 'recieved',
}

@transient
export class AccountTransactionsRepository implements IDataRepository<VMTransaction> {

    @observable data: VMTransaction [] = [];
    @observable totalCount: number = 0;

    constructor(
        private readonly transactionsService: TransactionsService
    ) {
    }

    @action
    async onUpdate(dataUpdate: IDataUpdate) {
        const responce = await this.transactionsService.getTransactions(dataUpdate);
        this.data = responce.data.map(raw => new VMTransaction(raw));
        this.totalCount = responce.totalCount;
    }
}
