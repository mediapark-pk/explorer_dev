import { RawVote } from '@app/common';
import * as Factory from 'factory.ts';
import {
  getRandomNumber,
  getRandomString,
  getRandomDecimal,
} from 'src/_mocks_/utils';

// tslint:disable: no-magic-numbers
const voteFactory = Factory.Sync.makeFactory<RawVote>({
  id: Factory.each(i => getRandomString(20)),
  blockId: Factory.each(i => getRandomString(20)),
  senderId: Factory.each(i => getRandomString(20)),
  createdAt: Factory.each(i => (new Date()).getTime() - getRandomNumber(10000, 3000000)),
  fee: Factory.each(i => getRandomDecimal(0, 1, 3)),
});

export const getVoteMock = (senderId?: string) => voteFactory.build({ senderId });

export const getVotesMock = (count: number, senderId?: string) =>
  [...Array.from(Array(count))].map(e => getVoteMock(senderId));
