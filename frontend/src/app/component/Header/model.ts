import { singleton } from 'src/core/di';
import { observable, action } from 'mobx';

@singleton
export default class SearchModel {

    @observable isSearchOpen: boolean = false;
    @observable searchValue: string = '';
    @observable searchResults: Array<string> = [];

    @action onSearchToggle() {
        this.isSearchOpen = !this.isSearchOpen;
    }

    @action onInputChange(value: string) {
        this.searchValue = value;
    }

    @action onFormSubmit = (e) => {
        e.preventDefault();
        alert("TODO: Do search!");
        // TODO: This will be useful when search will work
        // this.searchResults = this.searchResults.concat([...Array(20)].map(i => randStr(20)));
    };

}
