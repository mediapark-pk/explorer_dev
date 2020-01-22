import { Injectable } from '@nestjs/common';
import { ApiService } from '@app/socket-nest';
import { SocketCode } from '@app/common';
import { BlockService } from 'src/module/block/service/block.service';

@Injectable()
export class EventsController {

    constructor(
        private readonly service: BlockService,
        private readonly api: ApiService,
    ) {
        // TODO: listen by socket client from ddk.core or create decorator like @RPC
    }

    async onUpdate() {
        this.api.sendToAll(SocketCode.ON_BLOCK_BLOCKCHAIN_INFO_UPDATE, await this.service.getBlockBlockchainInfo());
    }
}
