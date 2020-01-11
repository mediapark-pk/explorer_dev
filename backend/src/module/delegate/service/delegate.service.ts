import { Injectable } from '@nestjs/common';
import { ResponseEntity } from '@app/socket-types';
import { Request } from '@app/web';

import {
    getDelegateMock,
    getDelegatesMock,
    getDelegateInfoMock,
} from 'src/_mocks_';

@Injectable()
export class DelegateService {

    constructor(
    ) { }

    async findAll(request: Request) {
        try {
            console.log('[DelegateService] findAll', request);
            return new ResponseEntity({ data: {
              data: getDelegatesMock((request as any).pagination.limit),
              count: (request as any).pagination.limit * 15 },
            });
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }
    }

    async find(id: string) {
        try {
            console.log('[DelegateService] find', id);
            return new ResponseEntity({ data: getDelegateMock() });
        } catch (e) {
            return new ResponseEntity({ errors: [e.message] });
        }
    }

    async stats() {
        try {
            console.log('[DelegateService] stats');
            return new ResponseEntity({ data: getDelegateInfoMock() });
        } catch (e) {
            return new ResponseEntity({ errors: [e.message] });
        }
    }

}
