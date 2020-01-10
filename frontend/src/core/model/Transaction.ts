import { BlockId } from 'src/core/model/Block';
import { Account, Address, PublicKey } from 'src/core/model/Account';

export enum TransactionType {
    REGISTER = 0,
    SEND = 10,
    SIGNATURE = 20,
    DELEGATE = 30,
    STAKE = 40,
    SENDSTAKE = 50,
    VOTE = 60,
}

export const TransactionTypeMap = {
    [TransactionType.REGISTER]: 'Register',
    [TransactionType.SEND]: 'Send',
    [TransactionType.SIGNATURE]: 'Signature',
    [TransactionType.DELEGATE]: 'Delegate',
    [TransactionType.STAKE]: 'Stake',
    [TransactionType.SENDSTAKE]: 'Sendstake',
    [TransactionType.VOTE]: 'Vote'
};

export type TransactionId = string;

export class Transaction {
    id: TransactionId;
    blockId: BlockId;
    confirmations?: boolean;
    createdAt: number;
    fee: number;
    relay?: number;
    salt?: string;
    secondSignature?: string;
    senderAddress: Address;
    senderPublicKey?: PublicKey;
    signature?: string;
    type: TransactionType;
    asset?: any;
}

export const createMockTransaction = (): Transaction => {
    return {
        blockId: '2B344A2B344A2B34',
        id: '2B344A2B344A2B34',
        senderAddress: '4009519763706676700',
        asset: {
            recipientAddress: '4009519763706676700',
            amount: 0.03,
            delegate: 'sd_ddk_brunei17'
        },
        createdAt: 10,
        type: 10,
        fee: 0.0016
    };
};
