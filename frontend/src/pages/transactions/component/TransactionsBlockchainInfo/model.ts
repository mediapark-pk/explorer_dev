import { action, observable } from 'mobx';
import { singleton } from 'src/container';
import { VMTransactionsBlockchainInfo } from 'src/common/model/VMTransactionsBlockchainInfo';
import { Subscription } from 'rxjs';
import { OnInit, subscriber } from '@app/core';
import { TransactionsBlockchainInfoService } from 'src/common/service/TransactionsBlockchainInfoService';
import { RawTransactionsBlockchainInfo } from '@app/common';

@singleton
export default class TransactionsBlockchainInfoModel implements OnInit {
    
    @observable isLoading: boolean = false;
    @observable data: VMTransactionsBlockchainInfo;

    @subscriber private subscription: Subscription;

    constructor(
        private readonly transactionsBlockchainInfoService: TransactionsBlockchainInfoService
    ) { }

    @action async onInit() {
        this.loadData();

        this.subscription = this.transactionsBlockchainInfoService.onTransactionsBlockchainInfoUpdate()
            .subscribe((raw: RawTransactionsBlockchainInfo) => {
                this.data = new VMTransactionsBlockchainInfo(raw);
            });
    }

    @action async loadData() {
        this.isLoading = true;

        try {
            this.data = new VMTransactionsBlockchainInfo(
                await this.transactionsBlockchainInfoService.getTransactionsBlockchainInfo()
            ); 
        } catch (e) {
            // TODO show error message
        } finally {
            this.isLoading = false;
        }
    }
}
