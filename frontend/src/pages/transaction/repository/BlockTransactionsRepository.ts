import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { TransactionsService } from 'src/common/service/TransactionsService';
import { VMTransaction } from 'src/common/model/VMTransaction';

@transient
export class BlockTransactionsRepository implements IDataRepository<VMTransaction> {

    @observable data: VMTransaction [] = [];
    @observable totalCount: number = 0;

    constructor(
        private readonly transactionsService: TransactionsService
    ) {

    }

    @action
    async onUpdate(dataUpdate: IDataUpdate) {
        const response = await this.transactionsService.getTransactionsByBlockId(dataUpdate);
        this.data = response.data.map(raw => new VMTransaction(raw));
        this.totalCount = response.totalCount;
    }
}
