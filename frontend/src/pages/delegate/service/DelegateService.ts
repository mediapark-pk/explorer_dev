import { Socket } from '@app/socket-client';
import { singleton } from 'src/container';
import { 
    Request,
    ResponseList,
    Response
 } from '@app/web';
import { Observable } from 'rxjs';
import { SocketCode } from '@app/common';

import { 
    RawBlock,
    RawDelegateSummary,
    RawBalanceVolume,
    RawVote,
 } from '@app/common';


@singleton
export default class DelegateService {

    constructor(
        private readonly socket: Socket
    ) { }

    async getDelegateSummary(id: string): Promise<Response<RawDelegateSummary>> {
        return this.socket.query(SocketCode.GET_DELEGATE_SUMMARY, id);
    }

    async getForgedBlocks(request: Request): Promise<ResponseList<RawBlock>> {
        return this.socket.query(SocketCode.GET_DELEGATE_FORGED_BLOCKS, request);
    }

    async getVotes(request: Request): Promise<ResponseList<RawVote>> {
        return this.socket.query(SocketCode.GET_DELEGATE_VOTES, request);
    }

    async addToFavorites(id: string): Promise<Response<any>> {
        return this.socket.query(SocketCode.ADD_DELEGATE_TO_FAVORITES, id);
    }

    async getBalanceVolume(request: Request): Promise<ResponseList<RawBalanceVolume>> {
        return this.socket.query(SocketCode.GET_DELEGATE_BALANCE_VOLUME, request);
    }

    onDelegateUpdate(): Observable<Response<RawDelegateSummary>> {
        return this.socket.getEvent(SocketCode.ON_DELEGATE_SUMMARY_UPDATE);
    }
}
