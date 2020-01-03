import { RawDelegateInfo } from 'src/core/model/RawDelegateInfo';

export class DelegateInfo {
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

    constructor(raw: RawDelegateInfo) {
        this.address = raw.address;
        this.blockHeight = raw.blockHeight;
        this.consensus = raw.consensus;
        this.ddkVersion = raw.ddkVersion;
        this.feeReward = raw.feeReward;
        this.forgedBlocks = raw.forgedBlocks;
        this.location = raw.location;
        this.missedBlocks = raw.missedBlocks;
        this.peers = raw.peers;
        this.uptime = raw.uptime;
        this.votes = raw.votes;
        this.username = raw.username;
    }
}
