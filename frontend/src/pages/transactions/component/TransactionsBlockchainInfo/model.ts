import { action, observable } from 'mobx';
import { singleton } from 'src/container';
import { TransactionsBlockchainInfo } from 'src/core/model/TransactionsBlockchainInfo';
import { Subscription } from 'rxjs';
import TransactionsBlockchainInfoService from 'src/pages/transactions/service/TransactionsBlockchainInfoService';
import { OnInit, OnDestroy } from '@app/core';

@singleton
export default class TransactionsBlockchainInfoModel implements OnInit, OnDestroy {
@observable isLoading: boolean = false;

    @observable data: TransactionsBlockchainInfo;

    private subscription: Subscription;

    constructor(
        private readonly transactionsBlockchainInfoService: TransactionsBlockchainInfoService
    ) {
        this.data = new TransactionsBlockchainInfo();
    }

    @action async onInit() {
        this.load();

        this.subscription = this.transactionsBlockchainInfoService.getUpdate()
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
            this.data = await this.transactionsBlockchainInfoService.getInfo();
        } catch (e) {
            // TODO show error message
        } finally {
            this.isLoading = false;
        }
    }
}
