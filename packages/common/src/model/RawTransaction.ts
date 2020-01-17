
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

// TODO: Some types should be imported from where they are declared initially
export type Timestamp = number;
export type BlockId = string;
export type TransactionId = string;
export type Address = string;
export type PublicKey = string;

export class RawTransaction {
    id: TransactionId;
    blockId: BlockId;
    confirmations?: boolean;
    createdAt: Timestamp;
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
