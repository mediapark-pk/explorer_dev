import { action, observable } from 'mobx';
import { transient } from 'src/container';
import { IDataRepository, IDataUpdate } from '@app/core';
import { Transactionss } from 'src/core/model/Transactionss';

@transient
export default class TransactionssRepository implements IDataRepository<Transactionss> {

    @observable data: Array<Transactionss> = 
    [
        {
            id: '40095197637...',
            senderAddress: '40095197637...',
            recipientAddress: '40095197637...',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            id: '40095197637...',
            senderAddress: '40095197637...',
            recipientAddress: '40095197637...',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            id: '40095197637...',
            senderAddress: '40095197637...',
            recipientAddress: '40095197637...',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            id: '40095197637...',
            senderAddress: '40095197637...',
            recipientAddress: '40095197637...',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            id: '40095197637...',
            senderAddress: '40095197637...',
            recipientAddress: '40095197637...',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            id: '40095197637...',
            senderAddress: '40095197637...',
            recipientAddress: '40095197637...',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            id: '40095197637...',
            senderAddress: '40095197637...',
            recipientAddress: '40095197637...',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            id: '40095197637...',
            senderAddress: '40095197637...',
            recipientAddress: '40095197637...',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            id: '40095197637...',
            senderAddress: '40095197637...',
            recipientAddress: '40095197637...',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        },
        {
            id: '40095197637...',
            senderAddress: '40095197637...',
            recipientAddress: '40095197637...',
            type: 'Vote',
            amount: 0.03,
            fee: 0.0016
        }
    ];
    @observable totalCount: number = 0;


    
    @action async onUpdate(dataUpdate: IDataUpdate) {
    }
                    
}
