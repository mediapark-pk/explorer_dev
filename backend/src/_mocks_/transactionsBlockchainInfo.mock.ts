import { RawTransactionsBlockchainInfo } from '@app/common';
import * as Factory from 'factory.ts';
import { getRandomNumber } from 'src/_mocks_/utils';

// tslint:disable: no-magic-numbers
const transactionsBlockchainInfoFactory = Factory.Sync.makeFactory<RawTransactionsBlockchainInfo>({
  totalTxnNumber: Factory.each(i => getRandomNumber(100, 3000)),
  totalTxnVolume: Factory.each(i => getRandomNumber(100, 3000)),
  averageTxnPerDay: Factory.each(i => getRandomNumber(100, 3000)),
  averageTxnPerBock: Factory.each(i => getRandomNumber(100, 3000)),
  sentToday: Factory.each(i => getRandomNumber(100, 3000)),
  votesToday: Factory.each(i => getRandomNumber(100, 3000)),
});

export const getTransactionsBlockchainInfoMock = () => transactionsBlockchainInfoFactory.build();
