import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { DelegatesInfo } from 'src/core/model/DelegatesInfo';
import DelegatesService from 'src/pages/delegates/service/DelegatesService';

@transient
export default class DelegatesInfoRepository {
    @observable data: DelegatesInfo;

    constructor(private readonly service: DelegatesService) {
    }

    @action async onUpdate() {
        try {
            const responce = await this.service.getDelegatesInfo();
            this.data = new DelegatesInfo(responce);
        } catch (e) {
            console.log(e);
        }
    }
}
