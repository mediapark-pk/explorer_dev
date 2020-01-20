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
    VOTE = 60
}

export type Asset = {
    recipientAddress: string;
    amount: number;
}

export type RawTransaction = {
    id: string;
    blockId: string;
    type: TransactionType;
    senderPublicKey: string;
    signature: string;
    secondSignature?: string;
    createdAt: number;
    salt?: string;
    fee: number;
    confirmations?: number;
    status?: TransactionStatus;
    relay?: number;
    senderAddress?: string;
    asset?: Asset;
};
