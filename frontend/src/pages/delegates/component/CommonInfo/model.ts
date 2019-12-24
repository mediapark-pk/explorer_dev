import { singleton } from 'src/container';
import { DelegatesInfo } from 'src/core/model/DelegatesInfo';
import DelegatesInfoRepository from 'src/pages/delegates/repository/DelegatesInfoRepository';
import { observable } from 'mobx';

@singleton
export default class BlockAllBlocksModel  {

    @observable delegatesInfo: DelegatesInfo = new DelegatesInfo({
        activeCount: 0,
        allCount: 0,
        stakeFreeztime: 0,
        standbyCount: 0,
        voteFreeztime: 0,
        voteThreshold: 0
    });

    constructor(
        private readonly repository: DelegatesInfoRepository,
    ) {
        this.loadData();
    }

    loadData() {
        this.repository.onUpdate().then(() => {
            this.delegatesInfo = this.repository.data;
        });
    }
}
