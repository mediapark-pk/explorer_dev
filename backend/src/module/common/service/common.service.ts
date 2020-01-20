import { Injectable } from '@nestjs/common';
import { ResponseEntity } from '@app/socket-types';
import {
    RawBlockchainInfo,
} from '@app/common';

import {
    getBlockchainInfoMock
} from 'src/_mocks_';

@Injectable()
export class CommonService {

    constructor(
    ) { }

    async findBlockchainInfo(): Promise<ResponseEntity<RawBlockchainInfo>> {
        console.log('[CommonService] findBlockchainInfo');

        try {
            return new ResponseEntity({ data: getBlockchainInfoMock() });
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }
    }
}
