import { RawTransaction } from '@app/common';
import moment from 'moment';
import { VMDelegate } from 'src/common/model/VMDelegate';

export class VMTransaction {
    id: string;
    blockId: string;
    senderAddress?: string;
    createdAt: moment.Duration;
    type: number;
    fee: number;
    asset: {
        recipientAddress?: string;
        delegate?: VMDelegate;
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
