import { singleton } from 'src/container';
import { observable, action } from 'mobx';
import { Subscription } from 'rxjs';
import { OnInit, subscriber } from '@app/core';
import { VMBlockBlockchainInfo } from 'src/common/model/VMBlockBlockchainInfo';
import { BlockService } from 'src/common/service/BlockService';

@singleton
export default class BlockBlockchainModel implements OnInit {

    @observable isLoading: boolean = false;

    @observable data: VMBlockBlockchainInfo = new VMBlockBlockchainInfo({
        height: 0,
        createdAt: 0,
        totalBlockTime: 0,
        totalFeeAmount: 0,
        totalConnected: 0,
        totalStakeAmount: 0
    });

    @subscriber
    private subscription: Subscription;

    constructor(
        private readonly blockService: BlockService
    ) {
    }

    @action
    async onInit() {
        this.load();

        this.subscription = this.blockService.onBlockBlockchainInfoUpdate()
        .subscribe(item => {
            this.data = new VMBlockBlockchainInfo(item);
        });
    }

    @action
    async load() {
        this.isLoading = true;

        try {
            this.data = new VMBlockBlockchainInfo(await this.blockService.getBlockBlockchainInfo());
        } catch (e) {
            // TODO show error message
        } finally {
            this.isLoading = false;
        }
    }
}
