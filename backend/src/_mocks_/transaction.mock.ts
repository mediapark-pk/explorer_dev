import { RawTransaction, TransactionType } from '@app/common';
import * as Factory from 'factory.ts';
import {
    getRandomNumber,
    getRandomString,
} from 'src/_mocks_/utils';
import { getDelegateMock } from 'src/_mocks_/delegate.mock';

function getRandomTransactionType() {
    const values = Object.keys(TransactionType)
        // tslint:disable-next-line: radix
        .map(n => Number.parseInt(n))
        .filter(n => !Number.isNaN(n));
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
}

// tslint:disable: no-magic-numbers
const transactionFactory = Factory.Sync.makeFactory<RawTransaction>({
    id: Factory.each(i => getRandomString(10)),
    blockId: Factory.each(i => getRandomString(10)),
    confirmations: false,
    createdAt: Factory.each(i => Date.now()),
    fee: Factory.each(i => getRandomNumber(1, 10)),
    relay: Factory.each(i => getRandomNumber(1, 30)),
    salt: Factory.each(i => getRandomString(10)),
    secondSignature: Factory.each(i => getRandomString(10)),
    senderAddress: Factory.each(i => getRandomString(10)),
    senderPublicKey: Factory.each(i => getRandomString(10)),
    signature: Factory.each(i => getRandomString(10)),
    type: Factory.each(i => getRandomTransactionType()),
    asset: Factory.each(i => ({
        recipientAddress: getRandomString(10),
        amount: getRandomNumber(1, 10),
        delegate: getDelegateMock(),
    })),
});

export const getTransactionMock = () => transactionFactory.build();

export const getTransactionsMock = (count: number) =>
    [...Array.from(Array(count))].map(e => getTransactionMock());
