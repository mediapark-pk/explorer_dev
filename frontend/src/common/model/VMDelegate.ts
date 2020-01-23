import { getWholePercent } from 'ddk.registry/dist/util/percentage';
import { DEFAULT_FRACTION_DIGIST } from 'ddk.registry/dist/const';

import { RawDelegate } from '@app/common';

export class VMDelegate {
    approval: number;
    forgedBlocks: number;
    missedBlocks: number;
    publicKey: string;
    username: string;
    votes: number;
    confirmedVoteCount: number;
    uptime: string;
    location?: {
        lat: number;
        long: number;
    };
    status: string;

    constructor(raw: RawDelegate) {
        this.approval = raw.approval;
        this.forgedBlocks = raw.forgedBlocks;
        this.missedBlocks = raw.missedBlocks;
        this.publicKey = raw.publicKey;
        this.username = raw.username;
        this.votes = raw.votes;
        this.confirmedVoteCount = raw.confirmedVoteCount;
        this.status = raw.status;

        if (raw.location) {
            this.location = {
                lat: raw.location.lat,
                long: raw.location.long
            };
        }

        if (raw.forgedBlocks !== 0) {
            this.uptime = getWholePercent(
                raw.forgedBlocks,
                raw.forgedBlocks + raw.missedBlocks,
            ).toFixed(DEFAULT_FRACTION_DIGIST) + '%';
        } else {
            this.uptime = '0%';
        }
    }
}
