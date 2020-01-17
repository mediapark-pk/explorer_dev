import { RawAccountsBlockchainInfo } from '@app/common';
import * as Factory from 'factory.ts';
import {
  getRandomNumber,
} from 'src/_mocks_/utils';

// tslint:disable: no-magic-numbers
const accountsBlockchainInfoFactory = Factory.Sync.makeFactory<RawAccountsBlockchainInfo>({
  totalSupply: Factory.each(i => getRandomNumber(100, 3000)),
  circulatingSupply: Factory.each(i => getRandomNumber(100, 1000)),
  tokenHolders: Factory.each(i => getRandomNumber(100, 300)),
  totalStakeHolders: Factory.each(i => getRandomNumber(100, 1000)),
  totalStakeAmount: Factory.each(i => getRandomNumber(6048000, 14515200000)),
  addressesQuantity: Factory.each(i => getRandomNumber(100, 10000))
});

export const getAccountsBlockchainInfoMock = () => accountsBlockchainInfoFactory.build();
