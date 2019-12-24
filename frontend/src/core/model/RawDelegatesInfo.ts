export class RawDelegatesInfo {
    allCount: number;
    activeCount: number;
    standbyCount: number;
    voteThreshold: number;
    voteFreeztime: number;
    stakeFreeztime: number;

    constructor(info: RawDelegatesInfo) {
        this.activeCount = info.activeCount;
        this.allCount = info.allCount;
        this.stakeFreeztime = info.stakeFreeztime;
        this.standbyCount = info.standbyCount;
        this.voteFreeztime = info.voteFreeztime;
        this.voteThreshold = info.voteThreshold;
    }
}
