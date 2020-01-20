import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { TransactionsService } from 'src/pages/transactions/service/TransactionsService';
import { VMTransaction } from 'src/pages/transactions/model/VMTransaction';

export enum TransactionsMode {
    AllTransactions = 'allTransactions',
    Send = 'send',
    Stake = 'stake',
    Vote = 'vote',
    Downvote = 'downvote',
    Signature = 'signature',
    Registration = 'registration',
    Delegate = 'delegate'
}

@transient
export default class TransactionsRepository implements IDataRepository<VMTransaction> {

    @observable data: VMTransaction [] = [];
    @observable totalCount: number = 0;

    constructor(
        private readonly transactionsService: TransactionsService
    ) {

    }

    @action
    async onUpdate(dataUpdate: IDataUpdate) {
        const response = await this.transactionsService.getTransactions(dataUpdate);
        this.data = response.data.map(raw => new VMTransaction(raw));
        this.totalCount = response.totalCount;
    }
}
