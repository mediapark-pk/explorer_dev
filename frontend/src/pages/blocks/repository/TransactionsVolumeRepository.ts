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

export const getMockData = () => {
    return _getMockData(MOCK_DATA_LENGTH);
};

const _getMockData = (count: number) => {
    const mockData = [{
      t: Date.now(),
      y: 20,
    }];
    for (let i = 1; i < count; i++) {
      mockData.push({
        t: mockData[i - 1].t + Math.random() * 2000000000,
        y: Math.abs(mockData[i - 1].y + Math.random() * 2 - 1)
      });
    }
    return [mockData];
  };
  
@transient
export class TransactionsVolumeRepository implements IDataRepository<Array<TransactionAmount>> {

    @observable data: Array<Array<TransactionAmount>> = [];
    @observable totalCount: number = 0;

    @action async onUpdate(dataUpdate: IDataUpdate) {
        await delay(100);
        this.data = getMockData();
        this.totalCount = MOCK_DATA_LENGTH;
    }
}
