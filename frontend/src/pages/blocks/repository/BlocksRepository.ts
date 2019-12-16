import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { Block } from 'src/core/model/Block';
import { delay } from 'src/util';

const mock: Array<Block> = [
    {
        height: 242822,
        id: '2B344A2B344A2B34',
        createdAt: 15,
        transactionCount: 2,
        amount: 2.31,
        fee: 0.0016
    },
    {
        height: 242822,
        id: '2B344A2B344A2B34',
        createdAt: 15,
        transactionCount: 2,
        amount: 2.31,
        fee: 0.0016
    },
    {
        height: 242822,
        id: '2B344A2B344A2B34',
        createdAt: 15,
        transactionCount: 2,
        amount: 2.31,
        fee: 0.0016
    },
    {
        height: 242822,
        id: '2B344A2B344A2B34',
        createdAt: 15,
        transactionCount: 2,
        amount: 2.31,
        fee: 0.0016
    },
    {
        height: 242822,
        id: '2B344A2B344A2B34',
        createdAt: 15,
        transactionCount: 2,
        amount: 2.31,
        fee: 0.0016
    },
    {
        height: 242822,
        id: '2B344A2B344A2B34',
        createdAt: 15,
        transactionCount: 2,
        amount: 2.31,
        fee: 0.0016
    },
];

@transient
export default class BlocksRepository implements IDataRepository<Block> {

    @observable data: Array<Block> = [];
    @observable totalCount: number = 0;

    @action async onUpdate(dataUpdate: IDataUpdate) {
        await delay();
        this.data = mock;
    }
}
