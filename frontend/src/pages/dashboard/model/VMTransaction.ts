import { RawTransaction } from '@app/common';
import moment from 'moment';

export class VMTransaction {
    id: string;
    blockId: string;
    senderAddress?: string;
    senderPublicKey: string;
    createdAt: moment.Duration;
    fee: number;

    constructor(raw: RawTransaction) {
        this.id = raw.id;
        this.blockId = raw.blockId;
        this.senderAddress = raw.senderAddress;
        this.senderPublicKey = raw.senderPublicKey;
        this.fee = raw.fee;

        this.createdAt = moment.duration(raw.createdAt);
    }
}
