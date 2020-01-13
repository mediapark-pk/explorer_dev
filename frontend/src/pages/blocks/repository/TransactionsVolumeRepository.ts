import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { delay } from 'src/util';

export interface TransactionAmount {
    t: number;
    y: number;
}

// tslint:disable:no-magic-numbers // there's mock data below
const MOCK_DATA_LENGTH = 500;

function getMockData (): Array<Array<TransactionAmount>> {
    const mockData = [];
    for (let i = 0; i < MOCK_DATA_LENGTH; i++) {
        mockData.push({
            t: Date.now() + i * 200000000,
            y: Math.abs((i > 0 ? mockData[i - 1].y : 20) + Math.random() * 2 - 1)
        });
    }
    return [mockData];
}

@transient
export default class TransactionsVolumeRepository implements IDataRepository<Array<TransactionAmount>> {

    @observable data: Array<Array<TransactionAmount>> = [];
    @observable totalCount: number = 0;

    @action async onUpdate(dataUpdate: IDataUpdate) {
        await delay(100);
        this.data = getMockData();
        this.totalCount = MOCK_DATA_LENGTH;
    }
}
