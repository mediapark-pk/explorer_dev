import { Injectable } from '@nestjs/common';
import { ResponseEntity, ResponseListEntity } from '@app/socket-types';
import { Request } from '@app/web';
import {
    RawBlock,
    RawBlockBlockchainInfo
} from '@app/common';

import {
    getBlockBlockchainInfoMock,
    getBlockMock,
    getBlocksMock,
} from 'src/_mocks_';

@Injectable()
export class BlockService {

    constructor() {
    }

    async findAll(request: Request): Promise<ResponseListEntity<RawBlock>> {
        try {
            return new ResponseEntity({
                data: {
                    data: getBlocksMock(request.paginator.limit),
                    totalCount: request.paginator.limit * 15
                },
            });
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }
    }

    async findOne(id: string): Promise<ResponseEntity<RawBlock>> {
        try {
            return new ResponseEntity({ data: getBlockMock() });
        } catch (e) {
            return new ResponseEntity({ errors: [e.message] });
        }
    }

    async getBlockBlockchainInfo(): Promise<ResponseEntity<RawBlockBlockchainInfo>> {
        try {
            return new ResponseEntity({ data: getBlockBlockchainInfoMock() });
        } catch (e) {
            return new ResponseEntity({ errors: [e.message] });
        }
    }

}
