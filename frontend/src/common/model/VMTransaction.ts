import { RawTransaction } from '@app/common';
import moment from 'moment';
import { Delegate } from 'src/core/model/Delegate';

export class VMTransaction {
    id: string;
    blockId: string;
    senderAddress?: string;
    createdAt: moment.Duration;
    type: number;
    fee: number;
    asset: {
        recipientAddress?: string;
        delegate?: Delegate;
        amount?: number;
    };

    constructor(raw: RawTransaction) {
        this.id = raw.id;
        this.blockId = raw.blockId;
        this.senderAddress = raw.senderAddress;
        this.createdAt = moment.duration(raw.createdAt);
        this.type = raw.type;
        this.asset = {...raw.asset};
        this.fee = raw.fee;
    }
}
