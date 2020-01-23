import { singleton } from 'src/container';
import { DataProvider, OnInit } from '@app/core';
import { VMVote } from 'src/common/model/VMVote';
import { VMBlock } from 'src/common/model/VMBlock';
import { BlocksRepository } from 'src/common/repository/BlocksRepository';
import { VotesRepository } from 'src/common/repository/VotesRepository';
import MainPageModel from 'src/pages/delegate/component/MainPage/model';
import { observable, computed, action } from 'mobx';
import { ChangeEvent } from 'react';

export { 
    AllowedFilters as ForgedBlocksAllowedFilters, 
    AllowedSorts as ForgedBlocksAllowedSorts
} from 'src/common/repository/BlocksRepository';

export { 
    AllowedFilters as VotesAllowedFilters, 
    AllowedSorts as VotesAllowedSorts
} from 'src/common/repository/VotesRepository';

export enum Tab {
    Forged,
    Votes,
}

@singleton
export default class TablesWrapperModel implements OnInit {

    @observable blocksDataProvider: DataProvider<VMBlock>;
    @observable votesDataProvider: DataProvider<VMVote>;

    @observable currentTab: Tab = Tab.Forged;

    constructor(
        private readonly mainPageModel: MainPageModel,
        blocksRepository: BlocksRepository,
        votesRepository: VotesRepository,
    ) {
        this.blocksDataProvider = new DataProvider({
            repository: blocksRepository
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
                return this.blocksDataProvider;
            case Tab.Votes:
                return this.votesDataProvider;
            default:
        }
    }
}
