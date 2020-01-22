import { Injectable } from '@nestjs/common';
import { ResponseEntity, ResponseListEntity } from '@app/socket-types';
import { Request } from '@app/web';
import { RawAccount } from '@app/common';
import { getAccountMock, getAccountsMock, getAccountsBlockchainInfoMock, getAccountStatisticMock } from 'src/_mocks_';
import { RawAccountsBlockchainInfo, RawAccountStatistic } from '@app/common';

@Injectable()
export class AccountService {

    constructor() {
    }

    async findAll(request: Request): Promise<ResponseListEntity<RawAccount>> {
        try {
            return new ResponseEntity({
                data: {
                    data: getAccountsMock((request as any).pagination.limit),
                    totalCount: (request as any).pagination.limit * 15
                },
            });
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }
    }

    async findOne(address: string): Promise<ResponseEntity<RawAccount>> {
        try {
            return new ResponseEntity({ data: getAccountMock(address) });
        } catch (e) {
            return new ResponseEntity({ errors: [e.message] });
        }
    }

    async getAccountsBlockchainInfo(): Promise<ResponseEntity<RawAccountsBlockchainInfo>> {
        try {
            return new ResponseEntity({ data: getAccountsBlockchainInfoMock() });
        } catch (e) {
            return new ResponseEntity({ errors: [e.message] });
        }
    }

    async getAccountStatistic(): Promise<ResponseEntity<RawAccountStatistic>> {
        try {
            return new ResponseEntity({ data: getAccountStatisticMock() });
        } catch (e) {
            return new ResponseEntity({ errors: [e.message] });
        }
    }
}
