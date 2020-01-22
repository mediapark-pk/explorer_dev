import { RawBlockBlockchainInfo } from '@app/common';
import moment from 'moment';

export class VMBlockBlockchainInfo {
    height: number;
    createdAt: moment.Duration;
    totalBlockTime?: number;
    totalFeeAmount?: number;
    totalConnected?: number;
    totalStakeAmount: number;

    constructor(raw: RawBlockBlockchainInfo) {
        this.height = raw.height;
        this.createdAt = moment.duration(raw.createdAt);
        this.totalBlockTime = raw.totalBlockTime;
        this.totalFeeAmount = raw.totalFeeAmount;
        this.totalConnected = raw.totalConnected;
        this.totalStakeAmount = raw.totalStakeAmount;
    }
}
