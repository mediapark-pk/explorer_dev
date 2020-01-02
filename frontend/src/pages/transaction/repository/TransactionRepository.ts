import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { Transaction } from 'src/core/model/Transaction';
import { delay } from 'src/util';

const mock: Array<Transaction> =
    [
        {
            id: '40095197637...',
            blockId: '40095197637...',
            senderAddress: '40095197637...',
            type: 10,
            createdAt: 15,
            fee: 0.0016
        },
        {
            id: '40095197637...',
            blockId: '40095197637...',
            senderAddress: '40095197637...',
            type: 10,
            createdAt: 15,
            fee: 0.0016
        },
        {
            id: '40095197637...',
            blockId: '40095197637...',
            senderAddress: '40095197637...',
            type: 10,
            createdAt: 15,
            fee: 0.0016
        },
        {
            id: '40095197637...',
            blockId: '40095197637...',
            senderAddress: '40095197637...',
            type: 10,
            createdAt: 15,
            fee: 0.0016
        },
        {
            id: '40095197637...',
            blockId: '40095197637...',
            senderAddress: '40095197637...',
            type: 10,
            createdAt: 15,
            fee: 0.0016
        },
        {
            id: '40095197637...',
            blockId: '40095197637...',
            senderAddress: '40095197637...',
            type: 10,
            createdAt: 15,
            fee: 0.0016
        },
        {
            id: '40095197637...',
            blockId: '40095197637...',
            senderAddress: '40095197637...',
            type: 10,
            createdAt: 15,
            fee: 0.0016
        },
        {
            id: '40095197637...',
            blockId: '40095197637...',
            senderAddress: '40095197637...',
            type: 10,
            createdAt: 15,
            fee: 0.0016
        },
        {
            id: '40095197637...',
            blockId: '40095197637...',
            senderAddress: '40095197637...',
            type: 10,
            createdAt: 15,
            fee: 0.0016
        },
        {
            id: '40095197637...',
            blockId: '40095197637...',
            senderAddress: '40095197637...',
            type: 10,
            createdAt: 15,
            fee: 0.0016
        }
    ];



@transient
export default class TransactionRepository implements IDataRepository<Transaction> {

    @observable data: Array<Transaction> = [];
    @observable totalCount: number = 0;


    @action async onUpdate(dataUpdate: IDataUpdate) {
        await delay();
        this.data = mock;
    }

}
