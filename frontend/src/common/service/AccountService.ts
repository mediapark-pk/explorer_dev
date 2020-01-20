import { singleton } from 'src/container';
import { action } from 'mobx';
import { SocketCode } from '@app/common';
import { Socket } from '@app/socket-client';
import { Request, ResponseList, Response } from '@app/web';
import { RawAccount, RawAccountsBlockchainInfo, RawAccountStatistic } from '@app/common';
import { Observable } from 'rxjs';

@singleton
export default class AccountService {

    constructor(
        private readonly socket: Socket
    ) {
    }


    @action
    async getAll(request: Request): Promise<ResponseList<RawAccount>> {
        return this.socket.query(SocketCode.GET_ACCOUNTS, request);
    }

    @action
    async getOne(address: string): Promise<Response<RawAccount>> {
        return this.socket.query(SocketCode.GET_ACCOUNT);
    }

    @action
    async getAccountsBlockchainInfo(): Promise<Response<RawAccountsBlockchainInfo>> {
        return this.socket.query(SocketCode.GET_ACCOUNTS_BLOCKCHAIN_INFO);
    }

    onAccountsBlockchainInfoUpdate(): Observable<Response<RawAccountsBlockchainInfo>> {
        return this.socket.getEvent(SocketCode.ON_ACCOUNTS_BLOCKCHAIN_INFO_UPDATE);
    }

    @action
    async getAccountStatistic(): Promise<Response<RawAccountStatistic>> {
        return this.socket.query(SocketCode.GET_ACCOUNT_STATISTIC);
    }
}
