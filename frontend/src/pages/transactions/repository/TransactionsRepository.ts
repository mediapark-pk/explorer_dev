import { action, observable } from 'mobx';
import { transient } from 'src/core/di';
import { IDataRepository, IDataUpdate } from 'src/core/data';
import { Transactions } from 'src/core/model/Transactions';

@transient
export default class TransactionsRepository implements IDataRepository<Transactions> {

    @observable data: Array<Transactions> = 
    [
        {
            transaction: '2B344A2B344A2B34',
            sender: 4009519763706676700,
            reciep: 4009519763706676700,
            time: '06.07.2019 /  05:14 PM',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            transaction: '2B344A2B344A2B34',
            sender: 4009519763706676700,
            reciep: 4009519763706676700,
            time: '06.07.2019 /  05:14 PM',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            transaction: '2B344A2B344A2B34',
            sender: 4009519763706676700,
            reciep: 4009519763706676700,
            time: '06.07.2019 /  05:14 PM',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            transaction: '2B344A2B344A2B34',
            sender: 4009519763706676700,
            reciep: 4009519763706676700,
            time: '06.07.2019 /  05:14 PM',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            transaction: '2B344A2B344A2B34',
            sender: 4009519763706676700,
            reciep: 4009519763706676700,
            time: '06.07.2019 /  05:14 PM',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            transaction: '2B344A2B344A2B34',
            sender: 4009519763706676700,
            reciep: 4009519763706676700,
            time: '06.07.2019 /  05:14 PM',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            transaction: '2B344A2B344A2B34',
            sender: 4009519763706676700,
            reciep: 4009519763706676700,
            time: '06.07.2019 /  05:14 PM',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            transaction: '2B344A2B344A2B34',
            sender: 4009519763706676700,
            reciep: 4009519763706676700,
            time: '06.07.2019 /  05:14 PM',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            transaction: '2B344A2B344A2B34',
            sender: 4009519763706676700,
            reciep: 4009519763706676700,
            time: '06.07.2019 /  05:14 PM',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            transaction: '2B344A2B344A2B34',
            sender: 4009519763706676700,
            reciep: 4009519763706676700,
            time: '06.07.2019 /  05:14 PM',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            transaction: '2B344A2B344A2B34',
            sender: 4009519763706676700,
            reciep: 4009519763706676700,
            time: '06.07.2019 /  05:14 PM',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            transaction: '2B344A2B344A2B34',
            sender: 4009519763706676700,
            reciep: 4009519763706676700,
            time: '06.07.2019 /  05:14 PM',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            transaction: '2B344A2B344A2B34',
            sender: 4009519763706676700,
            reciep: 4009519763706676700,
            time: '06.07.2019 /  05:14 PM',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            transaction: '2B344A2B344A2B34',
            sender: 4009519763706676700,
            reciep: 4009519763706676700,
            time: '06.07.2019 /  05:14 PM',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            transaction: '2B344A2B344A2B34',
            sender: 4009519763706676700,
            reciep: 4009519763706676700,
            time: '06.07.2019 /  05:14 PM',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        }
    ];
    @observable totalCount: number = 0;


    
    @action async onUpdate(dataUpdate: IDataUpdate) {
    }
                    
}
