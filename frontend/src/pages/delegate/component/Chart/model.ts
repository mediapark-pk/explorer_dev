import { observable } from 'mobx';
import { singleton } from 'src/container';
import BalanceVolumeRepository from 'src/pages/delegate/repository/BalanceVolumeRepository';
import { BalanceVolume } from 'src/core/model/BalanceVolume';
import { DataProvider } from '@app/core';
import { OnInit } from '@app/core';

@singleton
export default class ChartModel implements OnInit {

    @observable dataProvider: DataProvider<BalanceVolume>;

    constructor(
        repository: BalanceVolumeRepository,
    ) { 
        this.dataProvider = new DataProvider<BalanceVolume>({
            repository,
        });
    }

    async onInit() {
        await this.dataProvider.loadData();
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
