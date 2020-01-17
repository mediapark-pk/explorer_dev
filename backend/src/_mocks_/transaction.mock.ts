import { RawTransaction } from '@app/common';
import * as Factory from 'factory.ts';
import {
    getRandomNumber,
    getRandomString,
} from 'src/_mocks_/utils';

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
    type: 10,
    asset: Factory.each(i => ({
        recipientAddress: getRandomString(10),
        amount: getRandomNumber(1, 10),
        delegate: 'this_is_mock'
    })),
});

export const getTransactionMock = () => transactionFactory.build();

export const getTransactionsMock = (count: number) =>
    [...Array.from(Array(count))].map(e => getTransactionMock());
