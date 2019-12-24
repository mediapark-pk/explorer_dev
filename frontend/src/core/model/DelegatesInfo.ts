import moment from 'moment';
import { RawDelegatesInfo } from 'src/core/model/RawDelegatesInfo';

export class DelegatesInfo {
    allCount: number;
    activeCount: number;
    standbyCount: number;
    voteThreshold: number;
    voteFreeztime: moment.Duration;
    stakeFreeztime: moment.Duration;

    constructor(raw: RawDelegatesInfo) {
        this.activeCount = raw.activeCount;
        this.allCount = raw.allCount;
        this.standbyCount = raw.standbyCount;
        this.voteThreshold = raw.voteThreshold;

        this.stakeFreeztime = moment.duration(raw.stakeFreeztime, 'ms');
        this.voteFreeztime = moment.duration(raw.voteFreeztime, 'ms');
    }
}
