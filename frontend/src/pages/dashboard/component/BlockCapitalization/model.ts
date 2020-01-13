import { observable } from 'mobx';
import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import { TransactionAmount } from 'src/pages/blocks/repository/TransactionsVolumeRepository';
import MarketCapitalizationRepository from 'src/pages/dashboard/repository/MarketCapitalizationRepository';

@singleton
export default class BlockCapitalizationModel  {
    @observable dataProvider: DataProvider<Array<TransactionAmount>>;

    constructor(
        marketCapitalizationRepository: MarketCapitalizationRepository,
    ) {

        this.dataProvider = new DataProvider({
            repository: marketCapitalizationRepository
        });

        this.dataProvider.loadData();
    }
}
