import { Injectable } from '@nestjs/common';
import { Body, RPC, RPCLog } from '@app/socket-nest';
import { SocketCode } from '@app/common';
import { BlockService } from 'src/module/block/service/block.service';
import { Request } from '@app/web';

@RPCLog
@Injectable()
export class BlockController {

    constructor(
        private readonly service: BlockService,
    ) {
    }

    @RPC(SocketCode.GET_BLOCKS)
    async findAll(@Body() request: Request) {
        return await this.service.findAll(request);
    }

    @RPC(SocketCode.GET_BLOCK)
    async findOne(@Body() id: string) {
        return this.service.findOne(id);
    }

    @RPC(SocketCode.GET_BLOCK_BLOCKCHAIN_INFO)
    async getBlockBlockchainInfo() {
        return this.service.getBlockBlockchainInfo();
    }

}
