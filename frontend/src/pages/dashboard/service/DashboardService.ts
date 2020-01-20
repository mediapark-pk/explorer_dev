import { Socket } from '@app/socket-client';
import { singleton } from 'src/container';
import { Observable } from 'rxjs';

import { 
    Request,
    Response,
    ResponseList,
 } from '@app/web';

import {
    SocketCode,
    RawBlock,
    RawDelegate,
    RawTransaction,
    RawBlockchainInfo,
    RawDDKMarketData,
 } from '@app/common';

@singleton
export class DashboardService {

    constructor(
        private readonly socket: Socket
    ) { }

    async getDelegates(request: Request): Promise<ResponseList<RawDelegate>> {
        return this.socket.query(SocketCode.GET_DELEGATES, request);
    }

    async getBlocks(request: Request): Promise<ResponseList<RawBlock>> {
        return this.socket.query(SocketCode.GET_BLOCKS, request);
    }

    async getTransactions(request: Request): Promise<ResponseList<RawTransaction>> {
        return this.socket.query(SocketCode.GET_TRANSACTIONS, request);
    }

    async getBlockchainInfo(): Promise<Response<RawBlockchainInfo>> {
        return this.socket.query(SocketCode.GET_BLOCKCHAIN_INFO);
    }

    async getSupportedCurencies(): Promise<Response<string[]>> {
        return this.socket.query(SocketCode.GET_CURRENCIES);
    }

    async getDDKMarketData(): Promise<Response<RawDDKMarketData>> {
        return this.socket.query(SocketCode.GET_DDK_MARKET_DATA);
    }

    async getDDKMarketCap(): Promise<Response<number>> {
        return this.socket.query(SocketCode.GET_DDK_MARKET_CAP);
    }

    onBlockchainInfoUpdate(): Observable<Response<RawBlockchainInfo>> {
        return this.socket.getEvent(SocketCode.ON_BLOCKCHAIN_INFO_UPDATE);
    }
}
