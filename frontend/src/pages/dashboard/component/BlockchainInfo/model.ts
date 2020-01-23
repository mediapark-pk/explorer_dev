import { singleton } from 'src/container';
import { OnInit, subscriber } from '@app/core';
import { VMBlockchainInfo } from 'src/pages/dashboard/model/VMBlockchainInfo';
import { CurrencyService } from 'src/pages/dashboard/service/CurrencyService';
import { DashboardService } from 'src/pages/dashboard/service/DashboardService';
import { observable, action } from 'mobx';
import { Subscription } from 'rxjs';

@singleton
export class BlockchainInfoModel implements OnInit {

    @observable blockchainInfo: VMBlockchainInfo;
    @observable isLoading: boolean = true;
    @observable marketCap: number;
    
    @subscriber
    subscriber: Subscription;

    constructor(
        private readonly currencyService: CurrencyService,
        private readonly dashboardService: DashboardService,
    ) { }

    async onInit() {
        await this.loadData();
    }

    @action async loadData() {
        this.isLoading = true;

        try {
            this.blockchainInfo = new VMBlockchainInfo(await this.dashboardService.getBlockchainInfo());

            this.marketCap = await this.currencyService.getDDKMarketCapitalization();

            this.subscriber = this.dashboardService.onBlockchainInfoUpdate()
                .subscribe((raw) => {
                    this.blockchainInfo = new VMBlockchainInfo(raw);
                });
        } finally {
            this.isLoading = false;
        }
    }
}
