import { observable, action, reaction } from 'mobx';
import { IDataPaginator } from 'src/core/data/interfaces';
import { CONSTANTS } from 'src/configs';

export type DataPaginatorOptions = {
    rowsPerPageOptions?: number[];
    rowsPerPage?: number;
    page?: number;
};

export const defaultDataPaginatorOptions: DataPaginatorOptions = {
    rowsPerPageOptions: CONSTANTS.VIEW.ROWS_PER_PAGE_OPTIONS,
    rowsPerPage: CONSTANTS.VIEW.ROWS_PER_PAGE_OPTIONS[0],
    page: 0
};

export default class DataPaginator implements IDataPaginator {

    readonly rowsPerPageOptions: number[];

    @observable count: number = 0;

    @observable rowsPerPage: number;

    @observable page: number;

    constructor(options: DataPaginatorOptions) {
        options = { ...defaultDataPaginatorOptions, ...options };

        this.rowsPerPageOptions = options.rowsPerPageOptions;
        this.rowsPerPage = options.rowsPerPage;
        this.page = options.page;

        reaction(
            () => this.rowsPerPage,
            () => this.reset()
        );
    }

    @action onChangePage(page: number) {
        this.page = page;
    }

    @action onChangeRowsPerPage(rowsPerPage: number) {
        this.rowsPerPage = rowsPerPage;
    }

    @action reset() {
        this.page = 0;
    }
}
