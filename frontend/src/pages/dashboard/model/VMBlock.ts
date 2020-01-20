import { RawBlock } from '@app/common';
import moment from 'moment';

export class VMBlock {
    id: string;
    createdAt: moment.Duration;
    height: number;
    transactionCount: number;
    amount: number;
    fee: number;
    generatorPublicKey: string;

    constructor(raw: RawBlock) {
        this.id = raw.id;
        this.height = raw.height;
        this.transactionCount = raw.transactionCount;
        this.amount = raw.amount;
        this.fee = raw.fee;
        this.generatorPublicKey = raw.generatorPublicKey;

        this.createdAt = moment.duration(raw.createdAt);
    }
}
