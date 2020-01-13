import { observable, action } from 'mobx';
import { singleton } from 'src/container';
import BalanceVolumeRepository from 'src/pages/delegate/repository/BalanceVolumeRepository';
import { VMBalanceVolume } from 'src/pages/delegate/model/VMBalanceVolume';
import MainPageModel from 'src/pages/delegate/component/MainPage/model';
import { DataProvider } from '@app/core';
import { OnInit } from '@app/core';

@singleton
export default class ChartModel implements OnInit {

    @observable dataProvider: DataProvider<VMBalanceVolume>;

    constructor(
        private readonly mainPageModel: MainPageModel,
        repository: BalanceVolumeRepository,
    ) { 
        this.dataProvider = new DataProvider<VMBalanceVolume>({
            repository,
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

    get chartConfig() {
        return {
            general: {
                mainCanvasHeight: 214,
                navCanvasHeight: 53
            },
            zoomPresets: [],
        };
    }
}
