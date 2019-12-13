import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from 'src/core/data';
import { Blocks } from 'src/core/model/Blocks';

@transient
export default class BlocksRepository implements IDataRepository<Blocks> {

    @observable data: Array<Blocks> = 
    [
        {
            height: 242822,
            blockId: '2B344A2B344A2B34',
            forgedBy: 'jiandan',
            time: '15 sec',
            txn: 2,
            volume: 2.31,
            fee: 0.0016
        },
        {
            height: 242822,
            blockId: '2B344A2B344A2B34',
            forgedBy: 'jiandan',
            time: '15 sec',
            txn: 2,
            volume: 2.31,
            fee: 0.0016
        },
        {
            height: 242822,
            blockId: '2B344A2B344A2B34',
            forgedBy: 'jiandan',
            time: '15 sec',
            txn: 2,
            volume: 2.31,
            fee: 0.0016
        },
        {
            height: 242822,
            blockId: '2B344A2B344A2B34',
            forgedBy: 'jiandan',
            time: '15 sec',
            txn: 2,
            volume: 2.31,
            fee: 0.0016
        },
        {
            height: 242822,
            blockId: '2B344A2B344A2B34',
            forgedBy: 'jiandan',
            time: '15 sec',
            txn: 2,
            volume: 2.31,
            fee: 0.0016
        },
        {
            height: 242822,
            blockId: '2B344A2B344A2B34',
            forgedBy: 'jiandan',
            time: '15 sec',
            txn: 2,
            volume: 2.31,
            fee: 0.0016
        },
        {
            height: 242822,
            blockId: '2B344A2B344A2B34',
            forgedBy: 'jiandan',
            time: '15 sec',
            txn: 2,
            volume: 2.31,
            fee: 0.0016
        },
        {
            height: 242822,
            blockId: '2B344A2B344A2B34',
            forgedBy: 'jiandan',
            time: '15 sec',
            txn: 2,
            volume: 2.31,
            fee: 0.0016
        },
        {
            height: 242822,
            blockId: '2B344A2B344A2B34',
            forgedBy: 'jiandan',
            time: '15 sec',
            txn: 2,
            volume: 2.31,
            fee: 0.0016
        },
        {
            height: 242822,
            blockId: '2B344A2B344A2B34',
            forgedBy: 'jiandan',
            time: '15 sec',
            txn: 2,
            volume: 2.31,
            fee: 0.0016
        },
        {
            height: 242822,
            blockId: '2B344A2B344A2B34',
            forgedBy: 'jiandan',
            time: '15 sec',
            txn: 2,
            volume: 2.31,
            fee: 0.0016
        },
        {
            height: 242822,
            blockId: '2B344A2B344A2B34',
            forgedBy: 'jiandan',
            time: '15 sec',
            txn: 2,
            volume: 2.31,
            fee: 0.0016
        },
        {
            height: 242822,
            blockId: '2B344A2B344A2B34',
            forgedBy: 'jiandan',
            time: '15 sec',
            txn: 2,
            volume: 2.31,
            fee: 0.0016
        },
        {
            height: 242822,
            blockId: '2B344A2B344A2B34',
            forgedBy: 'jiandan',
            time: '15 sec',
            txn: 2,
            volume: 2.31,
            fee: 0.0016
        },
        {
            height: 242822,
            blockId: '2B344A2B344A2B34',
            forgedBy: 'jiandan',
            time: '15 sec',
            txn: 2,
            volume: 2.31,
            fee: 0.0016
        }
    ];
    @observable totalCount: number = 0;


    
    @action async onUpdate(dataUpdate: IDataUpdate) {
    }
                    
}
