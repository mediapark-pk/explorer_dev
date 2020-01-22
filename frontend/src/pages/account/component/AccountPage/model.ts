import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import { action, computed, observable, reaction } from 'mobx';
import AccountService from 'src/common/service/AccountService';
import { RouterStore } from 'mobx-react-router';
import { VMAccount, Address } from 'src/common/model/VMAccount';
import AccountTransactionsRepository, { Type } from 'src/pages/account/repository/AccountTransactionsRepository';
import { VMTransaction } from 'src/common/model/VMTransaction';

export enum Tab {
    Sent,
    Recieved,
}

@singleton
export default class AccountPageModel {

    @observable isLoading: boolean = true;
    @observable account: VMAccount;
    @observable dataProvider: DataProvider<VMTransaction>;
    @observable currentTab: Tab = Tab.Sent;

    constructor(
        accountTransactionRepository: AccountTransactionsRepository,
        private readonly accountService: AccountService,
        private readonly routerStore: RouterStore
    ) {

        this.dataProvider = new DataProvider({
            repository: accountTransactionRepository
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
