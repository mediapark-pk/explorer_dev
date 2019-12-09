import { action, observable } from 'mobx';
import { transient } from 'src/core/di';
import { IDataRepository, IDataUpdate } from 'src/core/data';
import { Transaction } from 'src/core/model/Transaction';

@transient
export default class TransactionRepository implements IDataRepository<Transaction> {

    @observable data: Array<Transaction> = 
    [
        {
            secondSignature: '2B344A',
            signature: '2B344A',
            blockId: '2B344A',
            fee: '10 sec',
            createdAt: 0.0016
        },
        {
            secondSignature: '2B344A',
            signature: '2B344A',
            blockId: '2B344A',
            fee: '10 sec',
            createdAt: 0.0016
        },
        {
            secondSignature: '2B344A',
            signature: '2B344A',
            blockId: '2B344A',
            fee: '10 sec',
            createdAt: 0.0016
        },
        {
            secondSignature: '2B344A',
            signature: '2B344A',
            blockId: '2B344A',
            fee: '10 sec',
            createdAt: 0.0016
        },
        {
            secondSignature: '2B344A',
            signature: '2B344A',
            blockId: '2B344A',
            fee: '10 sec',
            createdAt: 0.0016
        },
        {
            secondSignature: '2B344A',
            signature: '2B344A',
            blockId: '2B344A',
            fee: '10 sec',
            createdAt: 0.0016
        },
        {
            secondSignature: '2B344A',
            signature: '2B344A',
            blockId: '2B344A',
            fee: '10 sec',
            createdAt: 0.0016
        }
    ];
    @observable totalCount: number = 0;


    
    @action async onUpdate(dataUpdate: IDataUpdate) {
    }
                    
}
