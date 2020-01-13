import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { Transaction } from 'src/core/model/Transaction';
import TransactionsService from 'src/pages/transactions/service/TransactionsService';

@transient
export default class TransactionsRepository implements IDataRepository<Transaction> {

    @observable data: Transaction [] = [];
    @observable totalCount: number = 0;

    constructor(
        private readonly transactionsService: TransactionsService
    ) {

    }

    @action
    async onUpdate(dataUpdate: IDataUpdate) {
            const responce = await this.transactionsService.getTransactionsByBlockId(dataUpdate);
            this.data = responce.data;
            this.totalCount = responce.totalCount;
    }
}
