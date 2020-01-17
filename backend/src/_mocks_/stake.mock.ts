import { RawStakeOrder } from '@app/common';
import * as Factory from 'factory.ts';
import {
    getRandomNumber,
    getRandomString,
    getRandomDecimal, getRandomBoolean,
} from 'src/_mocks_/utils';

// tslint:disable: no-magic-numbers
const stakeFactory = Factory.Sync.makeFactory<RawStakeOrder>({
    createdAt: Factory.each(i => (new Date()).getTime() - getRandomNumber(10000, 3000000)),
    isActive: Factory.each(i => getRandomBoolean()),
    amount: Factory.each(i => getRandomDecimal(0, 1, 3)),
    voteCount: Factory.each(i => getRandomNumber(0, 50)),
    nextVoteMilestone: Factory.each(i => getRandomNumber(0, 50)),
    airdropReward: Factory.each(i => getRandomDecimal(0, 1, 3)),
    sourceTransactionId: Factory.each(i => getRandomString(20)),
});

export const getStakeMock = () => stakeFactory.build();

export const getStakesMock = (count: number) =>
  [...Array.from(Array(count))].map(e => getStakeMock());
