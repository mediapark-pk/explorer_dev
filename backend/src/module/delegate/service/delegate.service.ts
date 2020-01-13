import { Injectable } from '@nestjs/common';
import { ResponseEntity, ResponseListEntity } from '@app/socket-types';
import { Request } from '@app/web';
import {
    RawBalanceVolume,
    RawDelegate,
    RawBlock,
    RawVote,
    RawDelegateSummary,
    RawDelegatesSummary,
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
        console.log('[DelegateService] findAll', request);

        try {
            return new ResponseEntity({ data: {
              data: getDelegatesMock((request as any).pagination.limit),
              totalCount: (request as any).pagination.limit * 15 },
            });
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }
    }

    async findTop(request: Request): Promise<ResponseListEntity<RawDelegate>> {
        console.log('[DelegateService] findTop', request);

        try {
            return new ResponseEntity({ data: {
              data: getDelegatesMock(10),
              totalCount: 10 },
            });
        } catch (e) {
            return new ResponseEntity({ errors: [e.messge] });
        }
    }

    async getAllSummary(): Promise<ResponseEntity<RawDelegatesSummary>> {
        console.log('[DelegateService] getAllSummary');

        try {
            return new ResponseEntity({ data: getDelegatesSummaryMock() });
        } catch (e) {
            return new ResponseEntity({ errors: [e.message] });
        }
    }

    async getSummaryByDelegateId(id: string, location: string): Promise<ResponseEntity<RawDelegateSummary>> {
        console.log('[DelegateService] getSummaryByDelegateId', id);

        try {
            return new ResponseEntity({ data: getDelegateSummaryMock(id, location) });
        } catch (e) {
            return new ResponseEntity({ errors: [e.message] });
        }
    }

    async getBalanceVolumeByDelegateId(id: string): Promise<ResponseListEntity<RawBalanceVolume>> {
        console.log('[DelegateService] getBalanceVolumeByDelegateId', id);

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
        console.log('[DelegateService] getForgedBlocksByDelegateId', request);

        try {
            return new ResponseEntity({ data: {
              data: getBlocksMock((request as any).pagination.limit),
              totalCount: (request as any).pagination.limit * 15 },
            });
        } catch (e) {
            return new ResponseEntity({ errors: [e.message] });
        }
    }

    async getVotesByDelegateId(request: Request): Promise<ResponseListEntity<RawVote>> {
        console.log('[DelegateService] getVotesByDelegateId', request);

        try {
            return new ResponseEntity({ data: {
              data: getVotesMock((request as any).pagination.limit, request.params.id),
              totalCount: (request as any).pagination.limit * 15 },
            });
        } catch (e) {
            return new ResponseEntity({ errors: [e.message] });
        }
    }

    async addDelegateToFavorites(id: string): Promise<ResponseEntity<any>> {
        console.log('[DelegateService] addDelegateToFavorites', id);

        try {
            return new ResponseEntity();
        } catch (e) {
            return new ResponseEntity({ errors: [e.message] });
        }
    }

}
