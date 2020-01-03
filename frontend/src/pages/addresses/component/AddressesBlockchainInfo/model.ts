import { singleton } from 'src/container';
import { observable, action } from 'mobx';
import { Subscription } from 'rxjs';
import { AccountsBlockchainInfo } from 'src/core/model/AccountsBlockchainInfo';
import AddressesBlockchainInfoService from 'src/pages/addresses/service/AddressesBlockchainInfoService';
import { OnInit, OnDestroy } from '@app/core';


@singleton
export default class AddressesBlockchainInfoModel implements OnInit, OnDestroy {

    @observable isLoading: boolean = false;

    @observable data: AccountsBlockchainInfo;

    private subscription: Subscription;

    constructor(
        private readonly addressesBlockchainInfoService: AddressesBlockchainInfoService
    ) {
        this.data = new AccountsBlockchainInfo();
    }

    @action async onInit() {
        this.load();

        this.subscription = this.addressesBlockchainInfoService.getUpdate()
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
            this.data = await this.addressesBlockchainInfoService.getInfo();
        } catch (e) {
            // TODO show error message
        } finally {
            this.isLoading = false;
        }
    }
}
