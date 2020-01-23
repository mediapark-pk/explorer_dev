import { Injectable } from '@nestjs/common';
import { ResponseEntity, ResponseListEntity } from '@app/socket-types';
import { Request } from '@app/web';
import {
    RawBalanceVolume,
    RawDelegate,
    RawBlock,
    RawVote,
    RawDelegateStatistic,
    RawDelegatesBlockchainInfo,
} from '@app/common';

import {
    getDelegatesMock,
    getDelegateSummaryMock,
    getDelegatesSummaryMock,
    getBalanceVolumeMock,
    getBlocksMock,
    getVotesMock,
} from 'src/_mocks_';

@Injectable()
export class DelegateService {

    constructor(
    ) { }

    async findAll(request: Request): Promise<ResponseListEntity<RawDelegate>> {
        try {
            return new ResponseEntity({ data: {
              data: getDelegatesMock(request.paginator.limit),
              totalCount: request.paginator.limit * 15 },
            });
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }
    }

    async findTop(request: Request): Promise<ResponseListEntity<RawDelegate>> {
        try {
            return new ResponseEntity({ data: {
              data: getDelegatesMock(10),
              totalCount: 10 },
            });
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }
    }

    async getAllSummary(): Promise<ResponseEntity<RawDelegatesBlockchainInfo>> {
        try {
            return new ResponseEntity({ data: getDelegatesSummaryMock() });
        } catch (e) {
            return new ResponseEntity({ errors: [e.message] });
        }
    }

    async getSummaryByDelegateId(id: string, location: string): Promise<ResponseEntity<RawDelegateStatistic>> {
        try {
            return new ResponseEntity({ data: getDelegateSummaryMock(id, location) });
        } catch (e) {
            return new ResponseEntity({ errors: [e.message] });
        }
    }

    async getBalanceVolumeByDelegateId(id: string): Promise<ResponseListEntity<RawBalanceVolume>> {
        try {
            return new ResponseEntity({ data: {
                data: getBalanceVolumeMock(500),
                totalCount: 500 },
            });
        } catch (e) {
            return new ResponseEntity({ errors: [e.message] });
        }
    }

    async getForgedBlocksByDelegateId(request: Request): Promise<ResponseListEntity<RawBlock>> {
        try {
            return new ResponseEntity({ data: {
              data: getBlocksMock(request.paginator.limit),
              totalCount: request.paginator.limit * 15 },
            });
        } catch (e) {
            return new ResponseEntity({ errors: [e.message] });
        }
    }

    async getVotesByDelegateId(request: Request): Promise<ResponseListEntity<RawVote>> {
        try {
            return new ResponseEntity({ data: {
              data: getVotesMock(request.paginator.limit, request.params.id),
              totalCount: request.paginator.limit * 15 },
            });
        } catch (e) {
            return new ResponseEntity({ errors: [e.message] });
        }
    }

    async addDelegateToFavorites(id: string): Promise<ResponseEntity<any>> {
        try {
            return new ResponseEntity();
        } catch (e) {
            return new ResponseEntity({ errors: [e.message] });
        }
    }

}
