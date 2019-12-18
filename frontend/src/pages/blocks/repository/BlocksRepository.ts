import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { Block } from 'src/core/model/Block';
import { delay } from 'src/util';
import { array } from 'prop-types';

const mock: Array<Block> = Array.from({length: 122}, () => ({
    height: Math.round(Math.random()*1000000),
    id: 'mock4A2B344A2B34',
    forgedBy: 'jiandan',
    createdAt: Math.round(Math.random()*20),
    transactionCount: Math.round(Math.random()*5),
    amount: Math.round(Math.random()*1000)/100,
    fee: 0.0016
}))

@transient
export default class BlocksRepository implements IDataRepository<Block> {

    @observable data: Array<Block> = [];
    @observable totalCount: number = 0;

    @action async onUpdate(dataUpdate: IDataUpdate) {
        await delay();
        var data = mock;
        if (dataUpdate.sort[0]) {
            let [_columnId, _order] = dataUpdate.sort[0];
            data.sort((a, b) => {
                if (_order == 'asc') return a[_columnId] >= b[_columnId] ? 1 : -1;
                if (_order == 'desc') return a[_columnId] < b[_columnId] ? 1 : -1;
            })
        }
        data = data.slice(dataUpdate.pagination.offset, dataUpdate.pagination.offset + dataUpdate.pagination.limit);
        this.data = data;
        this.totalCount = mock.length;
        console.log("Update")
    }
}
