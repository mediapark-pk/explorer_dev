import { RawAccountStatistic } from '@app/common';

export class VMAccountStatistic {
    totalIn: number;
    totalOut: number;
    totalStake: number;
    totalGroup: number;
    totalAirdropReward: number;
    totalStakeReward: number;

    constructor(raw: RawAccountStatistic) {
        this.totalIn = raw.totalIn;
        this.totalOut = raw.totalOut;
        this.totalStake = raw.totalStake;
        this.totalGroup = raw.totalGroup;
        this.totalAirdropReward = raw.totalAirdropReward;
        this.totalStakeReward = raw.totalStakeReward;
    }
}
