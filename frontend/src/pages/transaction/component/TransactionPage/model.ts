import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import { action, observable } from 'mobx';
import { Transaction, TransactionId } from 'src/core/model/Transaction';
import { TransactionsService } from 'src/pages/transactions/service/TransactionsService';
import { RouterStore } from 'mobx-react-router';

@singleton
export default class TransactionPageModel {

    @observable isLoading: boolean = true;
    @observable transaction: Transaction;
    @observable dataProvider: DataProvider<Transaction>;

    constructor(
        private readonly transactionService: TransactionsService,
        private readonly routerStore: RouterStore
    ) {
    }

    @action
    async loadTransaction(id: TransactionId) {
        this.isLoading = true;
        try {
            this.transaction = await this.transactionService.getTransaction(id);

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
