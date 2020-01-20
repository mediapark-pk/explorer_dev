import { RawBlockchainInfo } from '@app/common';
import * as Factory from 'factory.ts';
import {
  getRandomNumber,
} from 'src/_mocks_/utils';

// tslint:disable: no-magic-numbers
const blockchainInfoFactory = Factory.Sync.makeFactory<RawBlockchainInfo>({
  airdropBalance: Factory.each(i => getRandomNumber(100, 3000000)),
  circulatingSupply: Factory.each(i => getRandomNumber(100, 3000000)),
  tokenHolders: Factory.each(i => getRandomNumber(100, 3000000)),
  totalConnected: Factory.each(i => getRandomNumber(100, 3000000)),
  totalStakeHolders: Factory.each(i => getRandomNumber(100, 3000000)),
  totalStakeAmount: Factory.each(i => getRandomNumber(100, 3000000)),
  totalSupply: Factory.each(i => getRandomNumber(100, 3000000)),
  transactionsCount: Factory.each(i => getRandomNumber(100, 3000000)),
});

export const getBlockchainInfoMock = () => blockchainInfoFactory.build();
