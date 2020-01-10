import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import { action, computed, observable, reaction } from 'mobx';
import AddressTransactionRepository, { Type } from 'src/pages/address/repository/AddressTransactionRepository';
import { Transaction } from 'src/core/model/Transaction';
import { Account, Address } from 'src/core/model/Account';
import AccountService from 'src/pages/addresses/service/AccountService';
import TransactionsService from 'src/pages/transactions/service/TransactionsService';
import { RouterStore } from 'mobx-react-router';

export enum Tab {
    Sent,
    Recieved,
}

@singleton
export default class AddressPageModel {

    @observable isLoading: boolean = true;
    @observable account: Account;
    @observable dataProvider: DataProvider<Transaction>;
    @observable currentTab: Tab = Tab.Sent;

    constructor(
        addressTransactionRepository: AddressTransactionRepository,
        private readonly accountService: AccountService,
        private readonly routerStore: RouterStore
    ) {

        this.dataProvider = new DataProvider({
            repository: addressTransactionRepository
        });
        reaction(() => this.currentTab, () => this.loadData());

        this.dataProvider.params = { type: this.type };


        this.dataProvider.loadData();
    }

    @action
    async loadAccount(address: Address) {
        this.isLoading = true;

        try {
            this.account = await this.accountService.getOne(address);
            if (!this.account) {
                this.routerStore.push('/404');
            }
        } catch (e) {
            // TODO add errors handler
        } finally {
            this.isLoading = false;
        }
    }

    @action loadData() {
        this.dataProvider.reset();
        this.dataProvider.params = { type: this.type };
    }

    @action updateTab(tab: Tab) {
        this.currentTab = tab;
    }

    @computed
    get isSentTab(): boolean {
        return this.currentTab === Tab.Sent;
    }

    get type() {
        switch (this.currentTab) {
            case Tab.Sent:
                return Type.Sent;
            case Tab.Recieved:
                return Type.Recieved;
            default:
                throw new Error();
        }
    }
}
