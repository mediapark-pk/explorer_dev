import copy from 'copy-to-clipboard';
import { action, observable, reaction } from 'mobx';
import { singleton } from 'src/container';
import { DelegateInfo } from 'src/core/model/DelegateInfo';
import DelegateService from 'src/pages/delegate/service/DelegateService';
import { Subscription } from 'rxjs';
import { OnInit, OnDestroy } from '@app/core';

@singleton
export default class CommonInfoModel implements OnInit, OnDestroy {

    @observable isLoading: boolean;

    @observable delegateInfo: DelegateInfo = {
        address: '',
        blockHeight: 0,
        consensus: true,
        ddkVersion: '',
        feeReward: 0,
        forgedBlocks: 0,
        location: '',
        missedBlocks: 0,
        peers: 0,
        uptime: 0,
        votes: 0,
        username: '',
    };

    delegateId: string;

    private onDelegateUpdate: Subscription;

    constructor(
        private readonly service: DelegateService,
    ) { }

    onInit() {
        this.onDelegateUpdate = this.service.onDelegateUpdate()
            .subscribe((info: DelegateInfo) => {
                if (info.address === this.delegateInfo.address) {
                    this.delegateInfo = info;
                }
            });
    }

    @action async loadInfo(id: string) {
        this.isLoading = true;
        this.delegateId = id;

        try {
            this.delegateInfo = await this.service.getDelegateInfo({ params: { id: this.delegateId } });
        } finally {
            this.isLoading = false;
        }
    }

    @action.bound
    copyAddress() {
        copy(this.delegateInfo.address);
    }
    
    @action.bound
    async addToFavorites() {
        await this.service.addToFavorites({ params: { id: this.delegateId } });
    }

    onDestroy() {
        this.onDelegateUpdate.unsubscribe();
    }
}
