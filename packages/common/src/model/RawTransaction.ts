export enum TransactionStatus {
    CREATED = 0,
    QUEUED = 1,
    PROCESSED = 2,
    QUEUED_AS_CONFLICTED = 3,
    VERIFIED = 4,
    UNCONFIRM_APPLIED = 5,
    PUT_IN_POOL = 6,
    BROADCASTED = 7,
    APPLIED = 8,
    DECLINED = 9
}

export enum TransactionType {
    REFERRAL = 0,
    SEND = 10,
    SIGNATURE = 20,
    DELEGATE = 30,
    STAKE = 40,
    SENDSTAKE = 50,
    VOTE = 60,
}

// TODO: Some types should be imported from where they are declared initially
export type Timestamp = number;
export type BlockId = string;
export type TransactionId = string;
export type Address = string;
export type PublicKey = string;

export class RawTransaction<TAssetType = any> {
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
    asset?: TAssetType;
}
