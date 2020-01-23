import { singleton } from 'src/container';
import { Socket } from '@app/socket-client';
import { 
    Request,
    ResponseList,
 } from '@app/web';
import {
    SocketCode,
    RawVote,
 } from '@app/common';

@singleton
export class VoteService {

    constructor (
        private readonly socket: Socket
    ) { }

    async getAll(request: Request): Promise<ResponseList<RawVote>> {
        return this.socket.query(SocketCode.GET_VOTES, request);
    }
}
