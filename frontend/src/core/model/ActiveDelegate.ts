import { ActiveDelegate, ForgeStatus } from 'ddk.registry/dist/model/common/delegate';
import { PublicKey } from 'ddk.registry/dist/model/common/type';
import { getWholePercent } from 'ddk.registry/dist/util/percentage';
import { DEFAULT_FRACTION_DIGIST } from 'ddk.registry/dist/const';

export class ExtendedActiveDelegate implements ActiveDelegate {
    slotNumber: number;
    username: string;
    missedBlocks: number;
    forgedBlocks: number;
    publicKey: PublicKey;
    unconfirmedVoteCount: number;
    confirmedVoteCount: number;
    uptime: string;
    status: ForgeStatus;

    constructor(activeDelegate: ActiveDelegate) {
        this.slotNumber = activeDelegate.slotNumber;
        this.username = activeDelegate.username;
        this.missedBlocks = activeDelegate.missedBlocks;
        this.forgedBlocks = activeDelegate.forgedBlocks;
        this.publicKey = activeDelegate.publicKey;
        this.unconfirmedVoteCount = activeDelegate.unconfirmedVoteCount;
        this.confirmedVoteCount = activeDelegate.confirmedVoteCount;
        this.status = activeDelegate.status || ForgeStatus.WAITING;

        if (activeDelegate.forgedBlocks !== 0) {
            this.uptime = getWholePercent(
                activeDelegate.forgedBlocks,
                activeDelegate.forgedBlocks + activeDelegate.missedBlocks,
            ).toFixed(DEFAULT_FRACTION_DIGIST) + '%';
        } else {
            this.uptime = '0%';
        }
    }
}
