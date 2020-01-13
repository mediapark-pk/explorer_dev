import { singleton } from 'src/container';
import { DataProvider, OnInit } from '@app/core';
import { Vote } from 'src/core/model/Vote';
import { Block } from 'src/core/model/Block';
import ForgedBlocksRepository from 'src/pages/delegate/repository/ForgedBlocksRepository';
import VotesRepository from 'src/pages/delegate/repository/VotesRepository';
import MainPageModel from 'src/pages/delegate/component/MainPage/model';
import { observable, computed, action, reaction } from 'mobx';
import { ChangeEvent } from 'react';

export { 
    AllowedFilters as ForgedBlocksAllowedFilters, 
    AllowedSorts as ForgedBlocksAllowedSorts
} from 'src/pages/delegate/repository/ForgedBlocksRepository';

export { 
    AllowedFilters as VotesAllowedFilters, 
    AllowedSorts as VotesAllowedSorts
} from 'src/pages/delegate/repository/VotesRepository';

export enum Tab {
    Forged,
    Votes,
}

@singleton
export default class TablesWrapperModel implements OnInit {

    @observable forgedBlocksDataProvider: DataProvider<Block>;
    @observable votesDataProvider: DataProvider<Vote>;

    @observable currentTab: Tab = Tab.Forged;

    constructor(
        private readonly mainPageModel: MainPageModel,
        forgedBlocksRepository: ForgedBlocksRepository,
        votesRepository: VotesRepository,
    ) {
        this.forgedBlocksDataProvider = new DataProvider({
            repository: forgedBlocksRepository
        });

        this.votesDataProvider = new DataProvider({
            repository: votesRepository
        });
    }

    async onInit() {
        this.loadData();
    }

    @action loadData() {
        if (this.mainPageModel.delegateId) {
            this.dataProvider.reset();
            this.dataProvider.params = { id: this.mainPageModel.delegateId };
        }
    }

    @action.bound
    onTabUpdate(event: ChangeEvent, tab: Tab) {
        this.currentTab = tab;
        this.loadData();
    }

    @computed
    get dataProvider() {        
        switch (this.currentTab) {
            case Tab.Forged:
                return this.forgedBlocksDataProvider;
            case Tab.Votes:
                return this.votesDataProvider;
            default:
        }
    }
}
