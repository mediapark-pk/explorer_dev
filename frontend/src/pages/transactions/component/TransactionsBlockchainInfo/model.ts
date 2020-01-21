import { action, observable } from 'mobx';
import { singleton } from 'src/container';
import { TransactionsBlockchainInfo } from 'src/core/model/TransactionsBlockchainInfo';
import { Subscription } from 'rxjs';
import { OnInit, OnDestroy } from '@app/core';
import { TransactionsBlockchainInfoService } from 'src/common/service/TransactionsBlockchainInfoService';
import { RawTransactionsBlockchainInfo } from '@app/common';

@singleton
export default class TransactionsBlockchainInfoModel implements OnInit, OnDestroy {
    
    @observable isLoading: boolean = false;
    @observable data: TransactionsBlockchainInfo;

    private subscription: Subscription;

    constructor(
        private readonly transactionsBlockchainInfoService: TransactionsBlockchainInfoService
    ) { }

    @action async onInit() {
        this.loadData();

        this.subscription = this.transactionsBlockchainInfoService.onTransactionsBlockchainInfoUpdate()
            .subscribe((raw: RawTransactionsBlockchainInfo) => {
                this.data = new TransactionsBlockchainInfo(raw);
            });
    }

    @action async onDestroy() {
        this.subscription.unsubscribe();
    }

    @action async loadData() {
        this.isLoading = true;

        try {
            this.data = new TransactionsBlockchainInfo(
                await this.transactionsBlockchainInfoService.getTransactionsBlockchainInfo()
            ); 
        } catch (e) {
            // TODO show error message
        } finally {
            this.isLoading = false;
        }
    }
}
