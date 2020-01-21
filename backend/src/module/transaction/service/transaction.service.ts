import { Injectable } from '@nestjs/common';
import { ResponseEntity, ResponseListEntity } from '@app/socket-types';
import { Request } from '@app/web';
import { RawTransaction, TransactionId } from '@app/common';

import {
    getTransactionMock,
    getTransactionsMock,
} from 'src/_mocks_';

@Injectable()
export class TransactionService {

    constructor(
    ) { }

    async getTransactions(request: Request): Promise<ResponseListEntity<RawTransaction>> {
        console.log('[TransactionService] getTransactions', request);

        try {
            // TODO: Implement/review request/response
            return new ResponseEntity({ data: {
                data: getTransactionsMock((request as any).pagination.limit),
                totalCount: (request as any).pagination.limit * 15 },
            });
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }
    }

    async getTransaction(id: TransactionId): Promise<ResponseEntity<RawTransaction>> {
        console.log('[TransactionService] getTransaction', id);

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
        console.log('[TransactionService] getTransactionsByBlockId', request);

        try {
            // TODO: Implement/review request/response
            return new ResponseEntity({ data: {
                data: getTransactionsMock((request as any).pagination.limit),
                totalCount: (request as any).pagination.limit * 15 },
            });
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }
    }

}
