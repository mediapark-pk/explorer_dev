import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { Vote } from 'src/core/model/Vote';
import DelegateService from 'src/pages/delegate/service/DelegateService';

@transient
export default class DelegatesRatingRepository implements IDataRepository<Vote> {
    @observable data: Vote[] = [];
    @observable totalCount: number = 0;
    
    constructor(
        private readonly service: DelegateService
    ) { }

    @action async onUpdate(dataUpdate: IDataUpdate) {
        try {
            const responce = await this.service.getVotes(dataUpdate);
            this.data = responce.data.map(v => new Vote(v));
            this.totalCount = responce.count;
        } catch (e) {
            console.log(e);
        }
    }
}

export enum AllowedSorts {
    Time = 'time',
    Fee = 'fee',
}

export enum AllowedFilters {
    Sender = 'sender',
    BlockId = 'block_id',
}
