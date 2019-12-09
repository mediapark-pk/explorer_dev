export type Pagination = {
    limit: number;
    offset: number;
};

export interface IDataUpdate {
    pagination: Pagination;
    params: any;
}

export interface IDataPaginator {
    rowsPerPageOptions: number[];
    rowsPerPage: number;
    page: number;
    count: number;
    onChangePage(page: number);
    onChangeRowsPerPage(rowsPerPage: number);
    reset();
}

export interface IDataRepository<T> {
    data: T[];
    totalCount: number;
    onUpdate(dataUpdate: IDataUpdate);
}

export interface IDataProvider<T> {
    repository: IDataRepository<T>;
    paginator: IDataPaginator;
    loadData(params?: any);
    reset();
    isLoading: boolean;
    errors: string[];
}
