import { singleton } from 'src/container';
import { Request, Response, ResponseList } from '@app/web';
import { RawBlock, RawBlockBlockchainInfo } from '@app/common';
import { SocketCode } from '@app/common';
import { Socket } from '@app/socket-client';
import { BlockId } from 'src/common/model/VMBlock';
import { Observable } from 'rxjs';

@singleton
export class BlockService {
    constructor(
        private readonly socket: Socket
    ) {
    }

    async getBlocks(request: Request): Promise<ResponseList<RawBlock>> {
        return this.socket.query(SocketCode.GET_BLOCKS, request);
    }

    async getBlock(id: BlockId): Promise<Response<RawBlock>> {
        return this.socket.query(SocketCode.GET_BLOCK, id);
    }

    async getBlockBlockchainInfo(): Promise<Response<RawBlockBlockchainInfo>> {
        return this.socket.query(SocketCode.GET_BLOCK_BLOCKCHAIN_INFO);
    }

    onBlockBlockchainInfoUpdate(): Observable<Response<RawBlockBlockchainInfo>> {
        return this.socket.getEvent(SocketCode.ON_BLOCK_BLOCKCHAIN_INFO_UPDATE);
    }

}
