import { Injectable } from '@nestjs/common';
import { ResponseEntity, ResponseListEntity } from '@app/socket-types';
import { Request } from '@app/web';
import {
    RawVote,
} from '@app/common';

import {
    getVotesMock
} from 'src/_mocks_';

@Injectable()
export class VoteService {

    constructor(
    ) { }

    async findAll(request: Request): Promise<ResponseListEntity<RawVote>> {
        try {
            return new ResponseEntity({ data: {
                data: getVotesMock(request.paginator.limit),
                totalCount: request.paginator.limit * 15 },
              });
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }
    }
}
