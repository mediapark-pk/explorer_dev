import { RawDelegateStatistic } from '@app/common';
import * as Factory from 'factory.ts';
import {
  getRandomNumber,
  getRandomString,
  getRandomDecimal,
  getRandomBoolean,
} from 'src/_mocks_/utils';

// tslint:disable: no-magic-numbers
const delegateSummaryFactory = Factory.Sync.makeFactory<RawDelegateStatistic>({
  address: Factory.each(i => getRandomString(20)),
  blockHeight: Factory.each(i => getRandomNumber(100, 3000)),
  consensus: Factory.each(i => getRandomBoolean()),
  ddkVersion: Factory.each(i => `v${getRandomDecimal(1, 10, 2)}`),
  feeReward: Factory.each(i => getRandomDecimal(0, 1, 3)),
  forgedBlocks: Factory.each(i => getRandomNumber(100, 50000)),
  missedBlocks: Factory.each(i => getRandomNumber(100, 50000)),
  location: Factory.each(i => getRandomString(10)),
  username: Factory.each(i => getRandomString(10)),
  votes: Factory.each(i => getRandomNumber(100, 3000)),
  peers: Factory.each(i => getRandomNumber(10, 1000)),
});

export const getDelegateSummaryMock = (address: string, location: string) =>
  delegateSummaryFactory.build({
    address,
    location,
  });
