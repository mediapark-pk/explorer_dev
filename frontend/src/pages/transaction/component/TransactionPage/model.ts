import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import { action, observable } from 'mobx';
import { TransactionsService } from 'src/common/service/TransactionsService';
import { RouterStore } from 'mobx-react-router';
import { VMTransaction } from 'src/common/model/VMTransaction';

@singleton
export default class TransactionPageModel {

    @observable isLoading: boolean = true;
    @observable transaction: VMTransaction;
    @observable dataProvider: DataProvider<VMTransaction>;

    constructor(
        private readonly transactionService: TransactionsService,
        private readonly routerStore: RouterStore
    ) {
    }

    @action
    async loadTransaction(id: string) {
        this.isLoading = true;
        try {
            let rawTransaction = await this.transactionService.getTransaction(id);
            this.transaction = new VMTransaction(rawTransaction);

            if (!this.transaction) {
                this.routerStore.push('/404');
            }

        } catch (e) {
            // TODO add errors handler
        } finally {
            this.isLoading = false;
        }
    }

}
