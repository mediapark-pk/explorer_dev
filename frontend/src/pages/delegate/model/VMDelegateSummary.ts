import { getWholePercent } from 'ddk.registry/dist/util/percentage';
import { DEFAULT_FRACTION_DIGIST } from 'ddk.registry/dist/const';
import { RawDelegateSummary } from '@app/common';

export class VMDelegateSummary {
    address: string;
    username: string;
    blockHeight: number;
    consensus: boolean;
    ddkVersion: string;
    feeReward: number;
    forgedBlocks: number;
    location: string;
    missedBlocks: number;
    peers: number;
    uptime: number;
    votes: number;

    constructor(raw: RawDelegateSummary) {
        this.address = raw.address;
        this.blockHeight = raw.blockHeight;
        this.consensus = raw.consensus;
        this.ddkVersion = raw.ddkVersion;
        this.feeReward = raw.feeReward;
        this.forgedBlocks = raw.forgedBlocks;
        this.location = raw.location;
        this.missedBlocks = raw.missedBlocks;
        this.peers = raw.peers;
        this.votes = raw.votes;
        this.username = raw.username;

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
