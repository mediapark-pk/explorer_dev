import { action, computed, observable, reaction } from 'mobx';

import { IDataPaginator, IDataProvider, IDataRepository, IDataUpdate, Pagination } from 'src/core/data/interfaces';
import DataPaginator, { DataPaginatorOptions } from 'src/core/data/DataPaginator';

export type DataProviderOptions<T> = {
    repository: IDataRepository<T>
    paginator?: DataPaginatorOptions;
};

export default class DataProvider<T> implements IDataProvider<T> {

    public readonly repository: IDataRepository<T>;

    public readonly paginator: IDataPaginator;

    @observable isLoading: boolean = false;

    @observable errors: string[] = [];

    @computed
    private get dataUpdate(): IDataUpdate {
        return {
            pagination: this.getPaginationDataUpdate(),
            params: this.params
        };
    }

    private params: any;

    constructor(options: DataProviderOptions<T>) {
        this.repository = options.repository;
        this.paginator = new DataPaginator(options.paginator);

        reaction(
            () => this.dataUpdate,
            () => this.onSourceUpdate()
        );

        reaction(
            () => this.repository.totalCount,
            totalCount => {
                this.paginator.count = totalCount;
            }
        );
    }

    @action
    async loadData(params?: any) {
        this.params = params;
        return this.onSourceUpdate();
    }

    @action
    private async onSourceUpdate() {
        this.isLoading = true;
        this.errors = [];

        try {
            await this.repository.onUpdate({ ...this.dataUpdate, params: this.params });
        } catch (errors) {
            this.errors = errors;
        } finally {
            this.isLoading = false;
        }
    }

    private getPaginationDataUpdate(): Pagination {
        return {
            limit: this.paginator.rowsPerPage,
            offset: this.paginator.rowsPerPage * this.paginator.page
        };
    }

    @action reset() {
        this.repository.data = [];
        this.repository.totalCount = 0;
        this.paginator.reset();
    }
};
