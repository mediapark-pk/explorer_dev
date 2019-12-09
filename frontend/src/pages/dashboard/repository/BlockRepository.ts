import { action, observable } from 'mobx';
import { transient } from 'src/core/di';
import { IDataRepository, IDataUpdate } from 'src/core/data';
import { Block } from 'src/core/model/Block';

@transient
export default class BlockRepository implements IDataRepository<Block> {

    @observable data: Array<Block> = 
    [
        {
            height: 242823,
            time: '10 sec',
            delegate: '2B344A',
            txns: 5,
            amount: 0.03,
            fee: 0.0016
        },
        {
            height: 242823,
            time: '10 sec',
            delegate: '2B344A',
            txns: 5,
            amount: 0.03,
            fee: 0.0016
        },
        {
            height: 242823,
            time: '10 sec',
            delegate: '2B344A',
            txns: 5,
            amount: 0.03,
            fee: 0.0016
        },
        {
            height: 242823,
            time: '10 sec',
            delegate: '2B344A',
            txns: 5,
            amount: 0.03,
            fee: 0.0016
        },
        {
            height: 242823,
            time: '10 sec',
            delegate: '2B344A',
            txns: 5,
            amount: 0.03,
            fee: 0.0016
        },
        {
            height: 242823,
            time: '10 sec',
            delegate: '2B344A',
            txns: 5,
            amount: 0.03,
            fee: 0.0016
        },
        {
            height: 242823,
            time: '10 sec',
            delegate: '2B344A',
            txns: 5,
            amount: 0.03,
            fee: 0.0016
        }
    ];
    @observable totalCount: number = 0;


    
    @action async onUpdate(dataUpdate: IDataUpdate) {
    }
                    
}
