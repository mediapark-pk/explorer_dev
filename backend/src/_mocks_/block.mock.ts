import { RawBlock } from '@app/common';
import * as Factory from 'factory.ts';
import {
  getRandomNumber,
  getRandomString,
  getRandomDecimal,
} from 'src/_mocks_/utils';

// tslint:disable: no-magic-numbers
const blockFactory = Factory.Sync.makeFactory<RawBlock>({
  id: Factory.each(i => getRandomString(10)),
  createdAt: Factory.each(i => (new Date()).getTime() - getRandomNumber(100, 30000)),
  version: Factory.each(i => getRandomDecimal(1, 10, 2)),
  height: Factory.each(i => getRandomNumber(10, 300)),
  previousBlockId: Factory.each(i => getRandomString(10)),
  transactionCount: Factory.each(i => getRandomNumber(10, 300)),
  fee: Factory.each(i => getRandomDecimal(0, 1, 3)),
  amount: Factory.each(i => getRandomDecimal(0, 1, 3)),
  payloadHash: Factory.each(i => getRandomString(10)),
  generatorPublicKey: Factory.each(i => getRandomString(20)),
  signature: Factory.each(i => getRandomString(10)),
  relay: Factory.each(i => getRandomNumber(0, 20)),
});

export const getBlockMock = () => blockFactory.build();

export const getBlocksMock = (count: number) =>
  [...Array.from(Array(count))].map(e => getBlockMock());
