import { RawBlockchainInfo, RawChartData } from '@app/common';
import * as Factory from 'factory.ts';
import {
  getRandomNumber,
  getRandomBoolean,
} from 'src/_mocks_/utils';

// tslint:disable: no-magic-numbers
const chartDataFactory = Factory.Sync.makeFactory<RawChartData>({
  t: Factory.each(i => Date.now() - getRandomNumber(100000, 500000000000)),
  y: Factory.each(i => getRandomNumber(0, 100))
});

export const getChartDataMock = () => chartDataFactory.build();

export const getChartDataMocks = (count: number) =>
  [...Array.from(Array(count))].map(e => getChartDataMock())
    .sort((a, b) => a.t > b.t ? -1 : 1);
