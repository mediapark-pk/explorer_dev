import { RawBlock } from '@app/common';
import moment from 'moment';

export class VMBlock {
    id: string;
    version?: number;
    createdAt: moment.Duration;
    height: number;
    previousBlockId?: string;
    transactionCount: number;
    amount: number;
    fee: number;
    payloadHash?: string;
    generatorPublicKey?: string;
    signature?: string;
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

        this.createdAt = moment.duration(raw.createdAt);
    }
}
