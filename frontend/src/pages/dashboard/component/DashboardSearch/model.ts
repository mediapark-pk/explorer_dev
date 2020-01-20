import { singleton } from 'src/container';
import { observable, action, when } from 'mobx';
import { ChangeEvent } from 'react';

export enum FilterProps {
    All,
    Delegates,
    Blocks,
    Transactions,
    Addresses,
}

@singleton
export default class DashboardSearchModel {

    @observable filter: FilterProps = FilterProps.All;
    @observable searchText: string;

    constructor(
    ) { }

    @action.bound
    onFilterUpdate({ target: { value } }: ChangeEvent<{ value: FilterProps }>) {
        this.filter = value;
    }

    @action.bound
    onSearchTextUpdate({ target: { value } }: ChangeEvent<{ value: string }>) {
        this.searchText = value;
    }

    @action.bound
    clearSearchText() {
        this.searchText = '';
    }
}
