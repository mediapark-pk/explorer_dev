import { singleton } from 'src/container';
import { OnInit, OnDestroy } from '@app/core';
import { VMBlockchainInfo } from 'src/pages/dashboard/model/VMBlockchainInfo';
import { DashboardService } from 'src/pages/dashboard/service/DashboardService';
import { observable, action } from 'mobx';
import { Subscription } from 'rxjs';


@singleton
export default class BlockchainInfoModel implements OnInit, OnDestroy {

    @observable blockchainInfo: VMBlockchainInfo;
    @observable isLoading: boolean = true;
    @observable marketCap: number;
    
    subscriber: Subscription;

    constructor(
        private readonly service: DashboardService,
    ) {
    }

    async onInit() {
        await this.loadData();
    }

    @action async loadData() {
        this.isLoading = true;

        try {
            this.blockchainInfo = new VMBlockchainInfo(await this.service.getBlockchainInfo());

            this.marketCap = await this.service.getDDKMarketCap();

            this.subscriber = this.service.onBlockchainInfoUpdate()
                .subscribe((raw) => {
                    this.blockchainInfo = new VMBlockchainInfo(raw);
                });
        } finally {
            this.isLoading = false;
        }
    }    

    onDestroy() {
        this.subscriber.unsubscribe();
    }
}
