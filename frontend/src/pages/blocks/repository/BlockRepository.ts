import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { Block } from 'src/core/model/Block';
import { delay } from 'src/util';

// tslint:disable:no-magic-numbers
const randomString = () => Math.random().toString(36).substring(2, 15).toUpperCase();

const mock: Array<Block> = Array.from({length: 122}, () => ({
    height: Math.round(Math.random() * 1000000),
    id: 'mock' + randomString(),
    forgedBy: 'jiandan',
    createdAt: Math.round(Math.random() * 20),
    transactionCount: Math.round(Math.random() * 5),
    amount: Math.round(Math.random() * 1000) / 100,
    fee: 0.0016
}));

@transient
export default class BlockRepository implements IDataRepository<Block> {

    @observable data: Array<Block> = [];
    @observable totalCount: number = 0;

    @action async onUpdate(dataUpdate: IDataUpdate) {
        await delay(100);
        let data = mock;

        // Mock filter logic, assume single colums filter with '%*%'
        if (dataUpdate.filter) {
            let _columnId = dataUpdate.filter.filterValues[0][0];
            let _value = dataUpdate.filter.filterValues[0][2];
            data = data.filter(item => item[_columnId].includes(_value));
        }

        // Mock sort logic
        if (dataUpdate.sort[0]) {
            let [_columnId, _order] = dataUpdate.sort[0];
            data.sort((a, b) => {
                if (_order === 'asc') {
                    return a[_columnId] >= b[_columnId] ? 1 : -1;
                }
                if (_order === 'desc') {
                    return a[_columnId] < b[_columnId] ? 1 : -1;
                }
            });
        }

        // Mock paging logic
        data = data.slice(dataUpdate.pagination.offset, dataUpdate.pagination.offset + dataUpdate.pagination.limit);

        this.data = data;
        this.totalCount = mock.length;
    }
}
