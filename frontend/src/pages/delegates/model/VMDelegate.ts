import { getWholePercent } from 'ddk.registry/dist/util/percentage';
import { DEFAULT_FRACTION_DIGIST } from 'ddk.registry/dist/const';

import { PublicKey } from 'src/core/model/Account';
import { RawDelegate } from '@app/common';

export class VMDelegate {
    approval: number;
    forgedBlocks: number;
    missedBlocks: number;
    publicKey: PublicKey;
    username: string;
    votes: number;
    confirmedVoteCount: number;
    uptime: string;
    location?: {
        lat: number;
        long: number;
    };

    constructor(delegate: RawDelegate) {
        this.approval = delegate.approval;
        this.forgedBlocks = delegate.forgedBlocks;
        this.missedBlocks = delegate.missedBlocks;
        this.publicKey = delegate.publicKey;
        this.username = delegate.username;
        this.votes = delegate.votes;
        this.confirmedVoteCount = delegate.confirmedVoteCount;

        if (delegate.location) {
            this.location = {
                lat: delegate.location.lat,
                long: delegate.location.long
            };
        }

        if (delegate.forgedBlocks !== 0) {
            this.uptime = getWholePercent(
                delegate.forgedBlocks,
                delegate.forgedBlocks + delegate.missedBlocks,
            ).toFixed(DEFAULT_FRACTION_DIGIST) + '%';
        } else {
            this.uptime = '0%';
        }
    }
}
