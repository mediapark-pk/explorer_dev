import { Module } from '@nestjs/common';
import { BlockController } from 'src/module/block/controller/block.controller';
import { BlockService } from 'src/module/block/service/block.service';

@Module({
    providers: [
        BlockController,
        BlockService
    ]
})
export class BlockModule { }
