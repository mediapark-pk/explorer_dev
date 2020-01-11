import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { delay } from 'src/util';

// TODO: Consider reuse proper core interface instead this custom one:
export interface TransactionAmount {
    t: number,
    y: number,
}

const mockData = [];
for (var i = 0; i < 500; i++) {
    mockData.push({
        t: Date.now() + i*200000000,
        y: Math.abs((i>0 ? mockData[i-1].y : 20) + Math.random()*2 - 1)
    })
}

@transient
export default class TransactionsVolumeRepository implements IDataRepository<TransactionAmount> {

    @observable data: Array<TransactionAmount> = [];
    @observable totalCount: number = 0;

    @action async onUpdate(dataUpdate: IDataUpdate) {
        // alert("should no be here")
        await delay(100);
        var datasets = [
            mockData,
        ];

        this.data = datasets;
        this.totalCount = 500;
    }
}
