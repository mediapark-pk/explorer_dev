import { singleton } from 'src/container';
import { observable, action } from 'mobx';
import { Subscription } from 'rxjs';
import { VMAccountsBlockchainInfo } from 'src/pages/accounts/model/VMAccountsBlockchainInfo';
import AccountService from 'src/common/service/AccountService';
import { OnInit, subscriber } from '@app/core';

@singleton
export default class AccountBlockchainInfoModel implements OnInit {

    @observable isLoading: boolean = false;

    @observable data: VMAccountsBlockchainInfo = new VMAccountsBlockchainInfo({
        totalSupply: 0,
        circulatingSupply: 0,
        tokenHolders: 0,
        totalStakeHolders: 0,
        totalStakeAmount: 0,
        addressesQuantity: 0
    });

    @subscriber
    private subscription: Subscription;

    constructor(
        private readonly accountService: AccountService
    ) {
    }

    @action
    async onInit() {
        this.load();

        this.subscription = this.accountService.onAccountsBlockchainInfoUpdate()
        .subscribe(item => {
            this.data = new VMAccountsBlockchainInfo(item);
        });
    }

    @action
    async load() {
        this.isLoading = true;

        try {
            this.data = new VMAccountsBlockchainInfo(await this.accountService.getAccountsBlockchainInfo());
        } catch (e) {
            // TODO show error message
        } finally {
            this.isLoading = false;
        }
    }
}
