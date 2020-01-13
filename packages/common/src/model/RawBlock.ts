export type RawBlock = {
    id: string;
    version?: number;
    createdAt: number;
    height: number;
    previousBlockId?: string;
    transactionCount: number;
    amount: number;
    fee: number;
    payloadHash?: string;
    generatorPublicKey?: string;
    signature?: string;
    relay?: number;
};
