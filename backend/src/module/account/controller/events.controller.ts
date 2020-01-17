import { Injectable } from '@nestjs/common';
import { ApiService } from '@app/socket-nest';
import { SocketCode } from '@app/common';
import { AccountService } from 'src/module/account/service/account.service';

@Injectable()
export class EventsController {

    constructor(
        private readonly service: AccountService,
        private readonly api: ApiService,
    ) {
        // TODO: listen by socket client from ddk.core or create decorator like @RPC
        setInterval(this.onUpdate.bind(this), 20000);
    }

    async onUpdate() {
        this.api.sendToAll(SocketCode.ON_ACCOUNTS_BLOCKCHAIN_INFO_UPDATE, await this.service.getAccountsBlockchainInfo());
    }
}
