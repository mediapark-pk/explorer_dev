import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { delay } from 'src/util';

// TODO: Consider reuse proper core interface instead this custom one:
export interface TransactionAmount {
    t: number;
    y: number;
}

function makeMockGraph() {
    const mockData = [];
    for (let i = 0; i < 500; i++) {
        mockData.push({
            t: Date.now() + i * 200000000,
            y: Math.abs((i > 0 ? mockData[i - 1].y : 20) + Math.random() * 2 - 1)
        })
    }
    return mockData;
}

@transient
export default class MarketCapitalizationRepository implements IDataRepository<Array<TransactionAmount>> {

    @observable data: Array<Array<TransactionAmount>> = [];
    @observable meta: object;
    @observable totalCount: number = 0;

    @action async onUpdate(dataUpdate: IDataUpdate) {
        await delay(100);
        let datasets = [
            makeMockGraph(),
            makeMockGraph(),
            makeMockGraph()
        ];

        this.data = datasets;
        this.totalCount = 500;
    }
}
