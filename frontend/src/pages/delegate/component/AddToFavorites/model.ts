import { singleton } from 'src/container';
import { observable, action } from 'mobx';
import DelegateService from 'src/pages/delegate/service/DelegateService';
    
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
    
    delegateId: string;
    
    constructor(
        private readonly service: DelegateService,
    ) { }


    @action.bound
    async addToFavorites() {
        // MOCK logic
        this.favoriteDelegateInfo.favorite = !this.favoriteDelegateInfo.favorite;
        await this.service.addToFavorites(this.delegateId);
    }
}
