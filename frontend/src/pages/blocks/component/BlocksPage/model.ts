import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import { Block } from 'src/core/model/Block';
import BlocksRepository from 'src/pages/blocks/repository/BlocksRepository';
import TransactionsVolumeRepository, {TransactionAmount} from 'src/pages/blocks/repository/TransactionsVolumeRepository';
import MarketCapitalizationRepository from 'src/pages/blocks/repository/MarketCapitalizationRepository';
import { observable } from 'mobx';

@singleton
export default class BlocksPageModel {
    @observable dataProvider: DataProvider<Block>;
    @observable transactionsVolumeDataProvider: DataProvider<TransactionAmount>;
    @observable marketCapitalizationDataProvider: DataProvider<Array<TransactionAmount>>;

    constructor(
        blocksRepository: BlocksRepository,
        transactionsVolumeRepository: TransactionsVolumeRepository,
        marketCapitalizationRepository: MarketCapitalizationRepository,
    ) {

        this.dataProvider = new DataProvider({
            repository: blocksRepository
        });

        this.transactionsVolumeDataProvider = new DataProvider({
            repository: transactionsVolumeRepository
        });

        this.marketCapitalizationDataProvider = new DataProvider({
            repository: marketCapitalizationRepository
        });

        this.dataProvider.loadData();
        // this.transactionsVolumeDataProvider.loadData();
        this.marketCapitalizationDataProvider.loadData();
        this.dataProvider.loadData();
    }
}
