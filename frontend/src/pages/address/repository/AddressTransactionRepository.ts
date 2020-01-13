import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { Transaction } from 'src/core/model/Transaction';
import TransactionsService from 'src/pages/transactions/service/TransactionsService';

export enum Type {
    Sent = 'sent',
    Recieved = 'recieved',
}

@transient
export default class AddressesTransactionRepository implements IDataRepository<Transaction> {

    @observable data: Array<Transaction> = [];
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
