import { singleton } from 'src/container';
import { VMBlockchainInfo } from 'src/pages/delegates/model/VMBlockchainInfo';
import { DelegateService } from 'src/common/service/DelegateService';
import { observable, action } from 'mobx';
import { Subscription } from 'rxjs';
import { OnInit, subscriber } from '@app/core';

@singleton
export default class BlockAllBlocksModel implements OnInit {

    @observable isLoading: boolean;

    @observable delegatesInfo: VMBlockchainInfo = new VMBlockchainInfo({
        activeCount: 0,
        allCount: 0,
        stakeFreeztime: 0,
        standbyCount: 0,
        voteFreeztime: 0,
        voteThreshold: 0
    });

    @subscriber
    private onDelegatesInfoUpdate: Subscription;

    constructor(
        private readonly service: DelegateService,
    ) { }

    @action onInit() {
        this.onDelegatesInfoUpdate = this.service.onBlockchainInfoUpdate()
            .subscribe(info => {
                this.delegatesInfo = new VMBlockchainInfo(info);
            });

        this.loadInfo();
    }

    @action async loadInfo() {
        this.isLoading = true;

        try {
            this.delegatesInfo = new VMBlockchainInfo(await this.service.getBlockchainInfo());
        } finally {
            this.isLoading = false;
        }
    }
}
