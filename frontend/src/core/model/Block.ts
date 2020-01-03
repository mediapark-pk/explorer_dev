import { Transaction } from 'src/core/model/Transaction';
import { RawBlock } from 'src/core/model/RawBlock';
import moment from 'moment';

export type BlockId = string;

export class Block {
    id: BlockId;
    version?: number;
    createdAt: moment.Moment;
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

        this.createdAt = moment(raw.createdAt);
    }
}
