import { action, observable } from 'mobx';
import { singleton } from 'src/container';
import AddressBlockchainInfoService from 'src/pages/address/service/AddressBlockchainInfoService';
import { AccountBlockchainInfo } from 'src/core/model/AccountBlockchainInfo';
import { OnInit } from '@app/core';

@singleton
export default class AddressBlockchainInfoModel implements OnInit {
@observable isLoading: boolean = false;

    @observable data: AccountBlockchainInfo;

    constructor(
        private readonly addressBlockchainInfoService: AddressBlockchainInfoService
    ) {
        this.data = new AccountBlockchainInfo();
    }

    @action async onInit() {
        this.load();
    }

    @action async load() {
        this.isLoading = true;

        try {
            this.data = await this.addressBlockchainInfoService.getInfo();
        } catch (e) {
            // TODO show error message
        } finally {
            this.isLoading = false;
        }
    }
}
