import { Injectable } from '@nestjs/common';
import { ResponseEntity, ResponseListEntity } from '@app/socket-types';
import { Request } from '@app/web';
import { RawTransaction, TransactionId, RawTransactionsBlockchainInfo } from '@app/common';

import {
    getTransactionMock,
    getTransactionsMock,
    getTransactionsBlockchainInfoMock,
} from 'src/_mocks_';

@Injectable()
export class TransactionService {

    constructor(
    ) { }

    async getTransactions(request: Request): Promise<ResponseListEntity<RawTransaction>> {
        try {
            // TODO: Implement/review request/response
            return new ResponseEntity({ data: {
                data: getTransactionsMock(request.paginator.limit),
                totalCount: request.paginator.limit * 15 },
            });
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }
    }

    async getTransaction(id: TransactionId): Promise<ResponseEntity<RawTransaction>> {
        try {
            // TODO: Implement/review request/response
            return new ResponseEntity({
                data: getTransactionMock(),
            });
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }
    }

    async getTransactionsByBlockId(request: Request): Promise<ResponseListEntity<RawTransaction>> {
        try {
            // TODO: Implement/review request/response
            return new ResponseEntity({ data: {
                data: getTransactionsMock(request.paginator.limit),
                totalCount: request.paginator.limit * 15 },
            });
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }
    }

    async getTransactionsBlockchainInfo(): Promise<ResponseEntity<RawTransactionsBlockchainInfo>> {
        try {
            return new ResponseEntity({ data: getTransactionsBlockchainInfoMock() });
        } catch (e) {
            return new ResponseEntity({ errors: [e.message] });
        }
    }

}
