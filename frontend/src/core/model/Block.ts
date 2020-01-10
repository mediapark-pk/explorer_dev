import { Transaction } from 'src/core/model/Transaction';
import { RawBlock } from 'src/core/model/RawBlock';
import moment from 'moment';

export type BlockId = string;

export class Block {
    id: BlockId;
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
    transactions?: Transaction[];
    relay?: number;

    constructor(raw: RawBlock) {
        this.id = raw.id;
        this.version = raw.version;
        this.height = raw.height;
        this.previousBlockId = raw.previousBlockId;
        this.transactionCount = raw.transactionCount;
        this.amount = raw.amount;
        this.fee = raw.fee;
        this.payloadHash = raw.payloadHash;
        this.generatorPublicKey = raw.generatorPublicKey;
        this.signature = raw.signature;
        this.relay = raw.relay;
        this.createdAt = raw.createdAt;
    }
}

export const createMockBlock = (): Block => {
    return {
        id: '2B344A2B344A2B34',
        createdAt: 10,
        height: 121254,
        transactionCount: 12,
        amount: 0.03,
        fee: 0.0016,
        generatorPublicKey: 'sd_ddk_brunei17',
    };
};
