import { Injectable } from '@nestjs/common';
import { ApiService, RPCLog } from '@app/socket-nest';
import { SocketCode } from '@app/common';
import { TransactionService } from 'src/module/transaction/service/transaction.service';

@RPCLog
@Injectable()
export class TransactionEventsController {

    constructor(
        private readonly service: TransactionService,
        private readonly api: ApiService,
    ) {
        // TODO: listen by socket client from ddk.core or create decorator like @RPC
        // tslint:disable-next-line: no-magic-numbers
        setInterval(this.onUpdate.bind(this), 20000);
    }

    async onUpdate() {
        this.api.sendToAll(
            SocketCode.ON_TRANSACTIONS_BLOCKCHAIN_INFO_UPDATE,
            await this.service.getTransactionsBlockchainInfo()
        );
    }
}
