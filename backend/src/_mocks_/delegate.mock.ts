import { RawDelegate } from '@app/common';
import * as Factory from 'factory.ts';
import {
  getRandomNumber,
  getRandomString,
  getRandomDecimal
} from 'src/_mocks_/utils';

// tslint:disable: no-magic-numbers
const delegateFactory = Factory.Sync.makeFactory<RawDelegate>({
  approval: Factory.each(i => getRandomDecimal(80, 100, 2)),
  forgedBlocks: Factory.each(i => getRandomNumber(1, 30)),
  missedBlocks: Factory.each(i => getRandomNumber(1, 30)),
  publicKey: Factory.each(i => getRandomString(20)),
  username: Factory.each(i => getRandomString(10)),
  votes: Factory.each(i => getRandomNumber(100, 3000)),
  confirmedVoteCount: Factory.each(i => getRandomNumber(100, 3000)),
  location: Factory.each(i => ({
    lat: getRandomDecimal(-90, 90, 5),
    long: getRandomDecimal(-180, 180, 5)
  }))
});

export const getDelegateMock = () => delegateFactory.build();

export const getDelegatesMock = (count: number) =>
  [...Array.from(Array(count))].map(e => getDelegateMock());
