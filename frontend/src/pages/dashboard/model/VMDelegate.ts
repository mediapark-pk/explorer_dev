import { getWholePercent } from 'ddk.registry/dist/util/percentage';
import { DEFAULT_FRACTION_DIGIST } from 'ddk.registry/dist/const';
import { RawDelegate, ForgeStatus } from '@app/common';

export class VMDelegate {

    username: string;
    votes: number;
    uptime: number;
    status: ForgeStatus;
    publicKey: string;

    constructor(raw: RawDelegate) {
        this.username = raw.username;
        this.votes = raw.votes;
        this.status = raw.status;
        this.publicKey = raw.publicKey;

        if (raw.forgedBlocks !== 0) {
            this.uptime = +getWholePercent(
                raw.forgedBlocks,
                raw.forgedBlocks + raw.missedBlocks,
            ).toFixed(DEFAULT_FRACTION_DIGIST);
        } else {
            this.uptime = 0;
        }
    }
}
