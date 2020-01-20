import { action, observable } from 'mobx';
import { singleton } from 'src/container';
import { VMAccountStatistic } from 'src/pages/account/model/VMAccountStatistic';
import AccountService from 'src/common/service/AccountService';
import { OnInit } from '@app/core';

@singleton
export default class AccountStatisticModel implements OnInit {

    @observable isLoading: boolean = false;

    @observable data: VMAccountStatistic = new VMAccountStatistic({
        totalIn: 0,
        totalOut: 0,
        totalStake: 0,
        totalGroup: 0,
        totalAirdropReward: 0,
        totalStakeReward: 0
    });

    constructor(
        private readonly accountService: AccountService
    ) {
    }

    @action
    async onInit() {
        this.isLoading = true;

        try {
            this.data = new VMAccountStatistic(await this.accountService.getAccountStatistic());
        } catch (e) {
            // TODO show error message
        } finally {
            this.isLoading = false;
        }
    }
}
