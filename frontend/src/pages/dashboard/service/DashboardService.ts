import { Socket } from '@app/socket-client';
import { singleton } from 'src/container';

import { 
    Request,
    Response,
    ResponseList,
 } from '@app/web';

import {
    SocketCode,
    RawBlock,
    RawBlockchainInfo,
 } from '@app/common';
import { Observable } from 'rxjs';

@singleton
export class DashboardService {

    constructor(
        private readonly socket: Socket
    ) { }

    async getBlocks(request: Request): Promise<ResponseList<RawBlock>> {
        return this.socket.query(SocketCode.GET_BLOCKS, request);
    }

    async getBlockchainInfo(): Promise<Response<RawBlockchainInfo>> {
        return this.socket.query(SocketCode.GET_BLOCKCHAIN_INFO);
    }

    onBlockchainInfoUpdate(): Observable<Response<RawBlockchainInfo>> {
        return this.socket.getEvent(SocketCode.ON_BLOCKCHAIN_INFO_UPDATE);
    }
}
