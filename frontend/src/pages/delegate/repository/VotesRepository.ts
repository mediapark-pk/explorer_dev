import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { VMVote } from 'src/pages/delegate/model/VMVote';
import DelegateService from 'src/pages/delegate/service/DelegateService';

@transient
export default class DelegatesRatingRepository implements IDataRepository<VMVote> {
    @observable data: VMVote[] = [];
    @observable totalCount: number = 0;
    
    constructor(
        private readonly service: DelegateService
    ) { }

    @action async onUpdate(dataUpdate: IDataUpdate) {
        try {
            const responce = await this.service.getVotes(dataUpdate);
            this.data = responce.data.map(v => new VMVote(v));
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
