import { RawAccount } from '@app/common';
import * as Factory from 'factory.ts';
import { getRandomBoolean, getRandomDecimal, getRandomNumber, getRandomString } from 'src/_mocks_/utils';
import { getDelegateMock } from 'src/_mocks_/delegate.mock';
import { getVotesMock } from 'src/_mocks_/vote.mock';
import { getStakesMock } from 'src/_mocks_/stake.mock';

// tslint:disable: no-magic-numbers
const accountFactory = Factory.Sync.makeFactory<RawAccount>({
    address: Factory.each(i => getRandomString(20)),
    delegate: getDelegateMock(),
    isDelegate: Factory.each(i => getRandomBoolean()),
    publicKey: Factory.each(i => getRandomString(20)),
    secondPublicKey: Factory.each(i => getRandomString(20)),
    createdAt: Factory.each(i => (new Date()).getTime() - getRandomNumber(10000, 3000000)),
    actualBalance: Factory.each(i => getRandomDecimal(0, 10000, 3)),
    transactionCount: Factory.each(i => getRandomNumber(0, 50)),
    votes: getVotesMock(20),
    stakes: getStakesMock(20),
});

export const getAccountMock = (address = undefined) => accountFactory.build();

export const getAccountsMock = (count: number, address?: string) =>
  [...Array.from(Array(count))].map(e => getAccountMock(address));
