import { singleton } from 'src/container';
import { DelegatesInfo } from 'src/core/model/DelegatesInfo';
import DelegatesService from 'src/pages/delegates/service/DelegatesService';
import { observable, action } from 'mobx';
import { Subscription } from 'rxjs';
import { OnInit, OnDestroy } from '@app/core';

@singleton
export default class BlockAllBlocksModel implements OnInit, OnDestroy {

    @observable isLoading: boolean;

    @observable delegatesInfo: DelegatesInfo = new DelegatesInfo({
        activeCount: 0,
        allCount: 0,
        stakeFreeztime: 0,
        standbyCount: 0,
        voteFreeztime: 0,
        voteThreshold: 0
    });

    private onDelegatesInfoUpdate: Subscription;

    constructor(
        private readonly service: DelegatesService,
    ) { }

    @action onInit() {
        this.onDelegatesInfoUpdate = this.service.onDelegatesInfoUpdate()
            .subscribe(info => {
                this.delegatesInfo = new DelegatesInfo(info);
            });

        this.loadInfo();
    }

    @action async loadInfo() {
        this.isLoading = true;

        try {
            this.delegatesInfo = new DelegatesInfo(await this.service.getDelegatesInfo());
        } finally {
            this.isLoading = false;
        }
    }

    onDestroy() {
        this.onDelegatesInfoUpdate.unsubscribe();
    }
}
