import { computed, observable, action, reaction } from 'mobx';
import { DataProvider } from '@app/core';
import { IAppChartTimeModel, IAppChartMultipleDatasetsModel, AppChartDataset, AppChartDatasets } from '@app/ui-kit';

export class AppChartTimeModel implements IAppChartTimeModel, IAppChartMultipleDatasetsModel {

    dataProvider: DataProvider;
    
    @observable visibleDatasets: Array<boolean> = [];
    
    @observable from: number = -Infinity;
    @observable to: number = Infinity;

    @observable isLoading: boolean = true;

    @computed get datasets (): Array<AppChartDataset> {
        const datasets = [...this.dataProvider.repository.data];

        for (let i = 0; i < datasets.length; i++) {
            datasets[i] = datasets[i].sort((a, b) => (a.t > b.t ? 1 : -1));
        }

       return datasets;
    }

    constructor(dataProvider: DataProvider) {
        this.dataProvider = dataProvider;

        reaction(
            () => this.datasets,
            () => {
                this.isLoading = false;
                for (let i = 0; i < this.datasets.length; i++) {
                    this.visibleDatasets[i] = true;
                }
                this.zoomFullAndReset();
            }
        );

    }

    @computed get primaryDataset (): AppChartDataset {
        return this.datasets[0];
    }

    private isPrimaryDatasetAvailable(): boolean {
        return this.primaryDataset && this.primaryDataset.length ? true : false;
    }

    @computed get min(): number {
        return this.isPrimaryDatasetAvailable() ? this.primaryDataset[0].t : null;
    }
    
    @computed get max(): number {
        return this.isPrimaryDatasetAvailable() ? this.primaryDataset[this.primaryDataset.length - 1].t : null;
    }

    @computed get visibleData(): AppChartDatasets {
        return this.datasets.map((dataset, datasetIndex) =>
            dataset.filter(item => 
                item.t <= this.to &&
                item.t >= this.from &&
                this.isDatasetVisible(datasetIndex)
            )
        );
    }

    @action zoomFullAndReset (): void {
        this.from = this.min;
        this.to = this.max;
    }

    @action toggleDatasetVisibility (index: number): void {
        this.visibleDatasets[index] = !this.visibleDatasets[index];
    }

    isDatasetVisible (index: number): boolean {
        return this.visibleDatasets[index] || false;
    }
}
