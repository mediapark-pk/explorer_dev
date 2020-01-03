import { singleton } from 'src/container';
import { observable, action } from 'mobx';
import { BlockBlockchainInfo } from 'src/core/model/BlockBlockchainInfo';
import BlockBlockchainInfoService from 'src/pages/blocks/service/BlockchainInfoService';
import { Subscription } from 'rxjs';
import { OnInit, OnDestroy } from '@app/core';

@singleton
export default class BlockBlockchainModel implements OnInit, OnDestroy {

    @observable isLoading: boolean = false;

    @observable data: BlockBlockchainInfo;

    private subscription: Subscription;

    constructor(
        private readonly blockBlockchainInfoService: BlockBlockchainInfoService
    ) {
        this.data = new BlockBlockchainInfo();
    }

    @action async onInit() {
        this.load();

        this.subscription = this.blockBlockchainInfoService.getUpdate()
            .subscribe(item => {
                this.data = item;
            });
    }

    @action async onDestroy() {
        this.subscription.unsubscribe();
    }

    @action async load() {
        this.isLoading = true;

        try {
            this.data = await this.blockBlockchainInfoService.getInfo();
        } catch (e) {
            // TODO show error message
        } finally {
            this.isLoading = false;
        }
    }
}
