import { Injectable } from '@nestjs/common';
import { ResponseEntity, ResponseListEntity } from '@app/socket-types';
import { Request } from '@app/web';
import {
    RawBlock,
} from '@app/common';

import {
    getBlocksMock,
} from 'src/_mocks_';

@Injectable()
export class BlockService {

    constructor(
    ) { }

    async findAll(request: Request): Promise<ResponseListEntity<RawBlock>> {
        console.log('[DelegateService] findAll', request);

        try {
            return new ResponseEntity({ data: {
              data: getBlocksMock((request as any).pagination.limit),
              totalCount: (request as any).pagination.limit * 15 },
            });
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }
    }

}
