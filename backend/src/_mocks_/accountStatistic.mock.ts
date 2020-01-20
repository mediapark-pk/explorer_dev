import * as Factory from 'factory.ts';
import {
  getRandomNumber,
} from 'src/_mocks_/utils';
import { RawAccountStatistic } from '@app/common';

// tslint:disable: no-magic-numbers
const accountStatisticFactory = Factory.Sync.makeFactory<RawAccountStatistic>({
  totalIn: Factory.each(i => getRandomNumber(100, 3000)),
  totalOut: Factory.each(i => getRandomNumber(100, 1000)),
  totalStake: Factory.each(i => getRandomNumber(100, 300)),
  totalGroup: Factory.each(i => getRandomNumber(100, 1000)),
  totalAirdropReward: Factory.each(i => getRandomNumber(6048000, 14515200000)),
  totalStakeReward: Factory.each(i => getRandomNumber(100, 10000))
});

export const getAccountStatisticMock = () => accountStatisticFactory.build();
