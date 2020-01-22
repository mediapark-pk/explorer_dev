import { RawBlockBlockchainInfo } from '@app/common';
import * as Factory from 'factory.ts';
import {
  getRandomNumber,
} from 'src/_mocks_/utils';

// tslint:disable: no-magic-numbers
const blockBlockchainInfoFactory = Factory.Sync.makeFactory<RawBlockBlockchainInfo>({
  height: Factory.each(i => getRandomNumber(100, 3000000)),
  createdAt: Factory.each(i => getRandomNumber(100, 3000000)),
  totalBlockTime: Factory.each(i => getRandomNumber(100, 3000000)),
  totalFeeAmount: Factory.each(i => getRandomNumber(100, 3000000)),
  totalConnected: Factory.each(i => getRandomNumber(100, 3000000)),
  totalStakeAmount: Factory.each(i => getRandomNumber(100, 3000000)),
});

export const getBlockBlockchainInfoMock = () => blockBlockchainInfoFactory.build();
