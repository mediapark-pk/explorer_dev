import { action, observable } from 'mobx';
import { transient } from 'src/core/di';
import { IDataRepository, IDataUpdate } from 'src/core/data';
import { Delegates } from 'src/core/model/Delegates';

@transient
export default class DelegatesRepository implements IDataRepository<Delegates> {

    @observable data: Array<Delegates> = 
    [
        {
            status: 'Forging',
            name: 'td037_ddk_brunei03',
            votes: '1 542',
            fblocks: '98.88%',
            mblocks: 23
        },
        {
            status: 'Forging',
            name: 'td037_ddk_brunei03',
            votes: '1 542',
            fblocks: '98.88%',
            mblocks: 23
        },
        {
            status: 'Forging',
            name: 'td037_ddk_brunei03',
            votes: '1 542',
            fblocks: '98.88%',
            mblocks: 23
        },
        {
            status: 'Forging',
            name: 'td037_ddk_brunei03',
            votes: '1 542',
            fblocks: '98.88%',
            mblocks: 23
        },
        {
            status: 'Forging',
            name: 'td037_ddk_brunei03',
            votes: '1 542',
            fblocks: '98.88%',
            mblocks: 23
        },
        {
            status: 'Forging',
            name: 'td037_ddk_brunei03',
            votes: '1 542',
            fblocks: '98.88%',
            mblocks: 23
        },
        {
            status: 'Forging',
            name: 'td037_ddk_brunei03',
            votes: '1 542',
            fblocks: '98.88%',
            mblocks: 23
        },
        {
            status: 'Forging',
            name: 'td037_ddk_brunei03',
            votes: '1 542',
            fblocks: '98.88%',
            mblocks: 23
        },
        {
            status: 'Forging',
            name: 'td037_ddk_brunei03',
            votes: '1 542',
            fblocks: '98.88%',
            mblocks: 23
        },
        {
            status: 'Forging',
            name: 'td037_ddk_brunei03',
            votes: '1 542',
            fblocks: '98.88%',
            mblocks: 23
        },
        {
            status: 'Forging',
            name: 'td037_ddk_brunei03',
            votes: '1 542',
            fblocks: '98.88%',
            mblocks: 23
        },
        {
            status: 'Forging',
            name: 'td037_ddk_brunei03',
            votes: '1 542',
            fblocks: '98.88%',
            mblocks: 23
        },
        {
            status: 'Forging',
            name: 'td037_ddk_brunei03',
            votes: '1 542',
            fblocks: '98.88%',
            mblocks: 23
        },
        {
            status: 'Forging',
            name: 'td037_ddk_brunei03',
            votes: '1 542',
            fblocks: '98.88%',
            mblocks: 23
        },
        {
            status: 'Forging',
            name: 'td037_ddk_brunei03',
            votes: '1 542',
            fblocks: '98.88%',
            mblocks: 23
        }
    ];
    @observable totalCount: number = 0;


    
    @action async onUpdate(dataUpdate: IDataUpdate) {
    }
                    
}
