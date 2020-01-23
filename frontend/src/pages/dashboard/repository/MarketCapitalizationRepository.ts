import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { RawChartData } from '@app/common';
import { CurrencyService } from 'src/pages/dashboard/service/CurrencyService';

@transient
export class MarketCapitalizationRepository implements IDataRepository<RawChartData[]> {

    @observable data: RawChartData[][] = [];
    @observable totalCount: number = 0;

    constructor(
        private readonly service: CurrencyService,
    ) {}

    @action async onUpdate(dataUpdate: IDataUpdate) {
        const result = await this.service.getDDKMarketChart();
        this.data = result.data;
        this.totalCount = result.totalCount;
    }
}
