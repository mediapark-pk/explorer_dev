import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { VMVote } from 'src/common/model/VMVote';
import { VoteService } from 'src/common/service/VoteService';

@transient
export class VotesRepository implements IDataRepository<VMVote> {
    @observable data: VMVote[] = [];
    @observable totalCount: number = 0;
    
    constructor(
        private readonly service: VoteService
    ) { }

    @action async onUpdate(dataUpdate: IDataUpdate) {
        const responce = await this.service.getAll(dataUpdate);
        this.data = responce.data.map(v => new VMVote(v));
        this.totalCount = responce.totalCount;
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
