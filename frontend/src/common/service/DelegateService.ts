import { singleton } from 'src/container';
import { Socket } from '@app/socket-client';
import { 
    Request,
    ResponseList,
    Response
 } from '@app/web';
import {
    SocketCode,
    RawDelegateStatistic,
    RawBalanceVolume,
    RawDelegate,
    RawDelegatesBlockchainInfo,
    RawBlock,
} from '@app/common';
import { Observable } from 'rxjs';
import { delay } from 'src/util';

@singleton
export class DelegateService {

    constructor (
        private readonly socket: Socket
    ) { }

    async getAll(request: Request): Promise<ResponseList<RawDelegate>> {
        return this.socket.query(SocketCode.GET_DELEGATES, request);
    }

    async getBlockchainInfo(): Promise<Response<RawDelegatesBlockchainInfo>> {
        return this.socket.query(SocketCode.GET_DELEGATES_SUMMARY);
    }

    async getStatisticById(id: string): Promise<Response<RawDelegateStatistic>> {
        return this.socket.query(SocketCode.GET_DELEGATE_SUMMARY, id);
    }

    async addToFavoritesById(id: string): Promise<Response<any>> {
        return this.socket.query(SocketCode.ADD_DELEGATE_TO_FAVORITES, id);
    }

    async saveNoteById(delegateId: string, noteText: string): Promise<Response<any>> {
        // TODO: Unmock
        console.log('MOCK_saveNote. delegateId=' + delegateId + ', noteText=' + noteText);
        await delay(500);
        // return this.socket.query(SocketCode.ADD_SAVE_NOTE, request);
    }

    async getBalanceVolumeById(request: Request): Promise<ResponseList<RawBalanceVolume>> {
        return this.socket.query(SocketCode.GET_DELEGATE_BALANCE_VOLUME, request);
    }

    onStatisticUpdate(): Observable<Response<RawDelegateStatistic>> {
        return this.socket.getEvent(SocketCode.ON_DELEGATE_SUMMARY_UPDATE);
    }

    onBlockchainInfoUpdate(): Observable<Response<RawDelegatesBlockchainInfo>> {
        return this.socket.getEvent(SocketCode.ON_DELEGATES_SUMMARY_UPDATE);
    }

 // TODO: remove when blocks will be ready

    async getForgedBlocks(request: Request): Promise<ResponseList<RawBlock>> {
        return this.socket.query(SocketCode.GET_DELEGATE_FORGED_BLOCKS, request);
    }
}
