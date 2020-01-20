import { singleton } from 'src/container';
import { action } from 'mobx';
import { SocketCode } from '@app/common';
import { Socket } from '@app/socket-client';
import { 
    Request,
    ResponseList,
    Response
 } from '@app/web';
import { 
    RawTransaction,
} from '@app/common';

export enum AllowedSorts {
    // TODO: Review and check names
    Time = 'time',
    Type = 'type',
    Amount = 'amount',
    Fee = 'fee',
}

export enum AllowedFilters {
    // TODO: Review and check names
    Block = 'block_id',
    Transaction = 'transaction_id',
    Sender = 'sender',
    Recipient = 'recipient'
}

@singleton
export class TransactionsService {

    constructor (
        private readonly socket: Socket
    ) { }

    @action
    async getTransactions(request: Request): Promise<ResponseList<RawTransaction>> {
        return this.socket.query(SocketCode.GET_TRANSACTIONS, request);
    }

    @action
    async getTransaction(request: Request): Promise<Response<RawTransaction>> {
        return this.socket.query(SocketCode.GET_TRANSACTION, request);
    }

    @action
    async getTransactionsByBlockId(request: Request): Promise<ResponseList<RawTransaction>> {
        return this.socket.query(SocketCode.GET_TRANSACTIONS_BY_BLOCK_ID, request);
    }
}
