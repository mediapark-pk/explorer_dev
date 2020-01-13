import { singleton } from 'src/container';
import { action } from 'mobx';
import { SocketCode } from '@app/common';
import { Socket } from '@app/socket-client';
import { 
    Request,
    ResponseList,
    Response
 } from '@app/web';
import { 
    RawDelegatesSummary,
    RawDelegate,
} from '@app/common';
import { Observable } from 'rxjs';

export enum AllowedSorts {
    Status = 'status',
    Votes = 'votes',
    Uptime = 'uptime',
    ForgedBlocks = 'forged',
    MissedBlocks = 'missed'
}

export enum AllowedFilters {
    Name = 'name'
}

@singleton
export default class DelegatesService {

    constructor (
        private readonly socket: Socket
    ) { }

    @action
    async getDelegates(request: Request): Promise<ResponseList<RawDelegate>> {
        return this.socket.query(SocketCode.GET_DELEGATES, request);
    }

    @action
    async getTopDelegates(request: Request): Promise<ResponseList<RawDelegate>> {
        return this.socket.query(SocketCode.GET_TOP_DELEGATES, request);
    }

    @action
    async getDelegatesSummary(): Promise<Response<RawDelegatesSummary>> {
        return this.socket.query(SocketCode.GET_DELEGATES_SUMMARY);
    }

    onDelegatesSummaryUpdate(): Observable<Response<RawDelegatesSummary>> {
        return this.socket.getEvent(SocketCode.ON_DELEGATES_SUMMARY_UPDATE);
    }
}
