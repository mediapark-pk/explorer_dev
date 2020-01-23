import copy from 'copy-to-clipboard';
import { action, observable } from 'mobx';
import { singleton } from 'src/container';
import { DelegateService } from 'src/common/service/DelegateService';
import { VMDelegateStatistic } from 'src/pages/delegate/model/VMDelegateStatistic';
import { RawDelegateStatistic } from '@app/common';
import { Subscription } from 'rxjs';
import { OnInit, subscriber } from '@app/core';
import { filter } from 'rxjs/operators';

@singleton
export default class CommonInfoModel implements OnInit {

    @observable isLoading: boolean;

    @observable delegateInfo: VMDelegateStatistic = new VMDelegateStatistic({
        address: '',
        blockHeight: 0,
        consensus: true,
        ddkVersion: '',
        feeReward: 0,
        forgedBlocks: 0,
        location: '',
        missedBlocks: 0,
        peers: 0,
        votes: 0,
        username: '',
    });

    delegateId: string;

    @subscriber
    private onDelegateUpdate: Subscription;

    constructor(
        private readonly service: DelegateService,
    ) { }

    onInit() {
        this.onDelegateUpdate = this.service.onStatisticUpdate()
            .pipe(
                filter((info: RawDelegateStatistic) => info.address === this.delegateInfo.address)
            )
            .subscribe((info: RawDelegateStatistic) => {
                this.delegateInfo = new VMDelegateStatistic(info);
            });
    }

    @action async loadInfo(id: string) {
        this.isLoading = true;
        this.delegateId = id;

        try {
            this.delegateInfo = new VMDelegateStatistic(
                await this.service.getStatisticById(this.delegateId)
            );
        } finally {
            this.isLoading = false;
        }
    }

    @action.bound
    copyAddress() {
        copy(this.delegateInfo.address);
    }
}
