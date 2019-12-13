import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from 'src/core/data';
import { Delegate } from 'src/core/model/Delegate';

@transient
export default class DelegateRepository implements IDataRepository<Delegate> {

    @observable data: Array<Delegate> = 
    [
        {
            username: 'TDALLIANCE1',
            confirmedVoteCount: 165687,
            uptime: '97.73%',
            status: 'Missed'
        },
        {
            username: 'TDALLIANCE1',
            confirmedVoteCount: 165687,
            uptime: '97.73%',
            status: 'Forged'
        },
        {
            username: 'TDALLIANCE1',
            confirmedVoteCount: 165687,
            uptime: '97.73%',
            status: 'Forged'
        },
        {
            username: 'TDALLIANCE1',
            confirmedVoteCount: 165687,
            uptime: '97.73%',
            status: 'Forging'
        },
        {
            username: 'TDALLIANCE1',
            confirmedVoteCount: 165687,
            uptime: '97.73%',
            status: 'Waiting'
        },
        {
            username: 'TDALLIANCE1',
            confirmedVoteCount: 165687,
            uptime: '97.73%',
            status: 'Waiting'
        },
        {
            username: 'TDALLIANCE1',
            confirmedVoteCount: 165687,
            uptime: '97.73%',
            status: 'Waiting'
        }
    ];
    @observable totalCount: number = 0;


    
    @action async onUpdate(dataUpdate: IDataUpdate) {
    }
                    
}
