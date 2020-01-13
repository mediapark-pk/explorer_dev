import { RawVote } from 'src/core/model/RawVote';
import moment from 'moment';

export class Vote {
    id: string;
    blockId: string;
    senderId: string;
    createdAt: moment.Moment;
    fee: number;

    constructor(raw: RawVote) {
        this.id = raw.id;
        this.blockId = raw.blockId;
        this.senderId = raw.senderId;
        this.fee = raw.fee;
        this.createdAt = moment(raw.createdAt);
    }
}
