import { computed, observable } from 'mobx';
import { DataProvider } from '@app/core';
import { AppChartDataset, IAppChartModel } from '@app/ui-kit/src/chart/types';

export class AppChartDoughnutModel implements IAppChartModel {

    dataProvider: DataProvider;
    @observable datasets: Array<AppChartDataset>;
    
    constructor(dataProvider: DataProvider) {
        this.dataProvider = dataProvider;
        this.datasets = this.dataProvider.repository.data;
    }

    @computed get visibleData() {
        return this.datasets;
    }
}
