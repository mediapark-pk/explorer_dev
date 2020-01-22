import { singleton } from 'src/container';
import { observable, action } from 'mobx';
import { Subscription } from 'rxjs';
import { OnInit, OnDestroy } from '@app/core';
import { VMBlockBlockchainInfo } from 'src/common/model/VMBlockBlockchainInfo';
import { BlockService } from 'src/common/service/BlockService';

@singleton
export default class BlockBlockchainModel implements OnInit, OnDestroy {

    @observable isLoading: boolean = false;

    @observable data: VMBlockBlockchainInfo = new VMBlockBlockchainInfo({
        height: 0,
        createdAt: 0,
        totalBlockTime: 0,
        totalFeeAmount: 0,
        totalConnected: 0,
        totalStakeAmount: 0
    });

    private subscription: Subscription;

    constructor(
        private readonly blockBlockchainInfoService: BlockService
    ) {
    }

    @action
    async onInit() {
        this.load();

        this.subscription = this.blockBlockchainInfoService.onBlockBlockchainInfoUpdate()
        .subscribe(item => {
            this.data = new VMBlockBlockchainInfo(item);
        });
    }

    @action
    async onDestroy() {
        this.subscription.unsubscribe();
    }

    @action
    async load() {
        this.isLoading = true;

        try {
            this.data = new VMBlockBlockchainInfo(await this.blockBlockchainInfoService.getBlockBlockchainInfo());
        } catch (e) {
            // TODO show error message
        } finally {
            this.isLoading = false;
        }
    }
}
