import { singleton } from 'src/container';
import { delay } from 'src/util';
import { Request, ResponseList } from '@app/web';
import { Block, BlockId, createMockBlock } from 'src/core/model/Block';

const mocks: Array<Block> = [];

for (let i = 0; i < 100; i++) {
    mocks.push(createMockBlock());
}

@singleton
class BlocksService {
    async getBlocks(request: Request): Promise<ResponseList<Block>> {
        await delay();
        return {
            totalCount: mocks.length,
            data: mocks
        };
    }
    async getOne(id: BlockId): Promise<Block> {
        await delay();
        return mocks.find(item => item.id === id);
    }
}

export default BlocksService;
