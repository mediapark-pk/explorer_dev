import { observable } from 'mobx';
import { singleton } from 'src/container';
import { DataProvider, OnInit } from '@app/core';
import { TransactionAmount } from 'src/pages/blocks/repository/TransactionsVolumeRepository';
import { MarketCapitalizationRepository } from 'src/pages/dashboard/repository/MarketCapitalizationRepository';
import { CurrencyService } from 'src/pages/dashboard/service/CurrencyService';

@singleton
export class BlockCapitalizationModel implements OnInit {
    @observable dataProvider: DataProvider<Array<TransactionAmount>>;
    @observable marketCap: number;
    @observable isLoading: boolean;

    constructor(
        marketCapitalizationRepository: MarketCapitalizationRepository,
        private readonly service: CurrencyService,
    ) {

        this.dataProvider = new DataProvider({
            repository: marketCapitalizationRepository
        });
    }

    async onInit() {
        try {
            this.isLoading = true;
            await this.dataProvider.loadData();
            this.marketCap = await this.service.getDDKMarketCapitalization();
        } finally {
            this.isLoading = false;
        }
    }
}
