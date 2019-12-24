import { singleton } from 'src/container';
import { DataProvider } from '@app/core';
import { Delegate } from 'src/core/model/Delegate';
import DelegatesRepository, { Type } from 'src/pages/delegates/repository/DelegatesRepository';
import { observable, computed, action, reaction } from 'mobx';

export { AllowedFilters, AllowedSorts } from 'src/pages/delegates/service/DelegatesService';

export enum Tab {
    Active,
    All,
}

@singleton
export default class RatingTableModel  {

    @observable dataProvider: DataProvider<Delegate>;

    @observable currentTab: Tab = Tab.Active;

    constructor(
        delegatesRepository: DelegatesRepository
    ) {        
        this.dataProvider = new DataProvider({
            repository: delegatesRepository
        });

        reaction(() => this.currentTab, () => this.loadData());
        
        this.dataProvider.params = { type: this.type };
        this.dataProvider.loadData();
    }

    @action loadData() {
        this.dataProvider.reset();
        this.dataProvider.params = { type: this.type };
    }

    @action updateTab(tab: Tab) {
        this.currentTab = tab;
    }

    @computed
    get isActiveTab(): boolean {
        return this.currentTab === Tab.Active;
    }

    @computed
    get type() {        
        switch (this.currentTab) {
            case Tab.Active:
                return Type.Active;
            case Tab.All:
                return Type.All;
            default:
                throw new Error(`[ArgumentException] type getter doesn't work with ${this.currentTab}`);
        }
    }
}
