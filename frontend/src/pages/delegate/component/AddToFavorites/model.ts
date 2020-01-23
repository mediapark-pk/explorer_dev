import { singleton } from 'src/container';
import { observable, action } from 'mobx';
import { DelegateService } from 'src/common/service/DelegateService';
import { useModel } from '@app/core';
import MainPageModel from 'src/pages/delegate/component/MainPage/model';

interface VMFavoriteDelegateInfo {
    favorite: boolean;
    notifyOnIncoming: boolean;
    notifyOnOutgoing: boolean;
}

@singleton
export default class AddToFavoritesModel {
    @observable favoriteDelegateInfo: VMFavoriteDelegateInfo = {
        favorite: false,
        notifyOnIncoming: false,
        notifyOnOutgoing: false,
    };
    
    private mainPageModel = useModel(MainPageModel);
    
    constructor(
        private readonly service: DelegateService,
    ) { }
    
    
    @action.bound
    async addToFavorites() {
        // MOCK logic
        this.favoriteDelegateInfo.favorite = !this.favoriteDelegateInfo.favorite;
        await this.service.addToFavoritesById(this.mainPageModel.delegateId);
    }
}
