import { RawTransaction } from '@app/common';
import moment from 'moment';

export class VMTransaction {
    id: string;
    blockId: string;
    senderAddress?: string;
    recipientAddress?: string;
    createdAt: moment.Duration;
    type: number;
    amount?: number;
    fee: number;

    constructor(raw: RawTransaction) {
        this.id = raw.id;
        this.blockId = raw.blockId;
        this.senderAddress = raw.senderAddress;
        this.recipientAddress = raw.asset.recipientAddress || undefined;
        this.createdAt = moment.duration(raw.createdAt);
        this.type = raw.type;
        this.amount = raw.asset.amount || undefined;
        this.fee = raw.fee;
    }
}
