import { Injectable } from '@nestjs/common';
import { Body, RPC } from '@app/socket-nest';
import { SocketCode } from '@app/common';
import { Request } from '@app/web';
import { AccountService } from 'src/module/account/service/account.service';

@Injectable()
export class AccountController {

    constructor(
        private readonly service: AccountService,
    ) {
    }

    @RPC(SocketCode.GET_ACCOUNTS)
    async findAll(@Body() request: Request) {
        return this.service.findAll(request);
    }

    @RPC(SocketCode.GET_ACCOUNT)
    async findOne(@Body() address: string) {
        return this.service.findOne(address);
    }

    @RPC(SocketCode.GET_ACCOUNTS_BLOCKCHAIN_INFO)
    async getAccountsBlockchainInfo() {
        return this.service.getAccountsBlockchainInfo();
    }

    @RPC(SocketCode.GET_ACCOUNT_STATISTIC)
    async getAccountStatistic() {
        return this.service.getAccountStatistic();
    }
}
